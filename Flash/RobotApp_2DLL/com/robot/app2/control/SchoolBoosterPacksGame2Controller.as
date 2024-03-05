package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SchoolBoosterPacksGame2Controller
   {
      
      private static var _loader:MCLoader;
      
      private static var _game:Sprite;
      
      private static var _index:int;
      
      private static var _alarmMc:MovieClip;
      
      private static var _result:int = 0;
       
      
      public function SchoolBoosterPacksGame2Controller()
      {
         super();
      }
      
      public static function startGame() : void
      {
         _loader = new MCLoader(ClientConfig.getGameSwfPath("SchoolBoosterPacksGame2"));
         _loader.addEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _loader.doLoad();
      }
      
      private static function onLoadSWFComplete(param1:MCLoadEvent) : void
      {
         _loader.removeEventListener(MCLoadEvent.SUCCESS,onLoadSWFComplete);
         _game = param1.getContent() as Sprite;
         LevelManager.stage.focus = _game;
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.removeContentLevel();
         LevelManager.gameLevel.addChild(_game);
         _game.addEventListener("mini_game_over",onOver);
         _game.addEventListener("mini_game_close",onCloseGame);
      }
      
      private static function onCloseGame(param1:*) : void
      {
         var _loc2_:Object = param1.extra as Object;
         zhuanhuan(_loc2_.score);
         showAlarm(2);
      }
      
      private static function onOver(param1:*) : void
      {
         var e:* = param1;
         var obj:Object = e.extra as Object;
         zhuanhuan(obj.score);
         KTool.getMultiValue([13788],function(param1:Array):void
         {
            var va:Array = param1;
            var arr:Array = [4,6,10];
            if(va[0] < 10)
            {
               showAlarm(3);
            }
            else
            {
               Alarm2.show("该游戏获取的实力证明已达上限",function():void
               {
                  exitGame();
               });
            }
         });
      }
      
      private static function zhuanhuan(param1:int) : void
      {
         if(param1 < 20000)
         {
            _result = 0;
         }
         else if(param1 < 40000)
         {
            _result = 2;
         }
         else if(param1 < 60000)
         {
            _result = 3;
         }
         else
         {
            _result = 5;
         }
      }
      
      private static function removeEvents() : void
      {
         if(_game)
         {
            _game.removeEventListener("mini_game_over",onOver);
            _game.removeEventListener("mini_game_close",onCloseGame);
            LevelManager.stage.frameRate = 24;
            LevelManager.showOrRemoveMapLevelandToolslevel(true);
            LevelManager.addLevel();
            DisplayUtil.removeForParent(_game);
            _game = null;
            _loader.loader.unloadAndStop();
            _loader = null;
         }
      }
      
      public static function loadStartAlarm(param1:int = 1) : void
      {
         var frame:int = param1;
         ResourceManager.getResource(ClientConfig.getAppRes("SchoolBoosterPacksGame2AlarmPanel"),function(param1:MovieClip):void
         {
            _alarmMc = param1;
            _alarmMc.addEventListener(MouseEvent.CLICK,onClick);
            showAlarm(frame);
         },"alarmHalloweenUI");
      }
      
      private static function showAlarm(param1:uint) : void
      {
         if(_alarmMc != null)
         {
            _alarmMc.gotoAndStop(param1);
            switch(param1)
            {
               case 3:
                  _alarmMc.txtNum.text = String(_result);
            }
            LevelManager.gameLevel.addChild(_alarmMc);
         }
         else
         {
            loadStartAlarm(param1);
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "okBtn":
            case "close":
            case "overBtn":
               SocketConnection.sendWithCallback(45624,function():void
               {
                  exitGame();
               },3,_result);
               break;
            case "rePlayBtn":
               break;
            case "startBtn":
               StatManager.sendStat2014("0226开学288钻礼包","点击开始小考验3游戏","2016运营活动");
               DisplayUtil.removeForParent(_alarmMc);
               startGame();
               break;
            case "cancalBtn":
               DisplayUtil.removeForParent(_alarmMc);
               LevelManager.stage.focus = _game;
               _game["continueGame"]();
         }
      }
      
      private static function exitGame() : void
      {
         removeEvents();
         DisplayUtil.removeForParent(_alarmMc);
         _alarmMc.removeEventListener(MouseEvent.CLICK,onClick);
         _alarmMc = null;
         ModuleManager.showAppModule("SchoolBoosterPacksAllThePeopleReceiveTestPanel");
      }
   }
}
