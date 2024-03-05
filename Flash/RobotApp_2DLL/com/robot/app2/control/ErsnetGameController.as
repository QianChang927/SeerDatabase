package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class ErsnetGameController
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      public static var times:uint;
       
      
      public function ErsnetGameController()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("ErsnetGame"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.appLevel.addChild(_game);
         _game.addEventListener("seer_little_game_over",onCloseGame);
      }
      
      private static function onCloseGame(param1:Event) : void
      {
         var e:Event = param1;
         var data:ByteArray = new ByteArray();
         var obj:Object = e["data"];
         var seerNum:int = int(obj["seerNum"]);
         var taitanNum:int = int(obj["taitanNum"]);
         var crystal:int = int(obj["crystal"]);
         SocketConnection.sendWithCallback(45581,function(param1:SocketEvent):void
         {
            var e:SocketEvent = param1;
            LevelManager.stage.frameRate = 24;
            if(_game != null)
            {
               LevelManager.showOrRemoveMapLevelandToolslevel(true);
               DisplayUtil.removeForParent(_game);
               _game = null;
               _loader.loader.unloadAndStop();
               _loader = null;
            }
            KTool.getBitSet([14596],function(param1:Array):void
            {
               var arr:Array = param1;
               if(Boolean(arr[0]))
               {
                  Alarm.show("神源结晶吸引了精灵前来抢夺！",function():void
                  {
                     fightBoss();
                  });
               }
               else
               {
                  Alarm.show("继续努力，帮助艾隆尼斯获取神源结晶！",function():void
                  {
                     ModuleManager.showAppModule("ErsnetStep2Panel");
                  });
               }
            });
         },seerNum,taitanNum,crystal);
      }
      
      private static function fightBoss() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            if(FightManager.currentBossRegion == 4694)
            {
               if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
                  Alarm.show("恭喜你成功守护住了神源结晶，请前往星神考验！",function():void
                  {
                     ModuleManager.showAppModule("ErsnetStep2Panel");
                  });
               }
               else
               {
                  Alarm.show("很可惜，星空神源结晶被精灵抢走了，请再次前往获得！",function():void
                  {
                     ModuleManager.showAppModule("ErsnetStep2Panel");
                  });
               }
            }
         });
         FightManager.fightNoMapBoss("萨卡罗",4694);
      }
   }
}
