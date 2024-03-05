package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcController;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class DangerousInterstellarDoorController
   {
      
      private static var _state:int;
      
      private static var _lastState:int;
      
      private static var _map:BaseMapProcess;
      
      private static const DAILY_STATE:int = 15808;
      
      private static const EIDS:Array = [6866,6867,6868];
      
      private static const BOSS_IDS:Array = [5407,5408,5409];
       
      
      public function DangerousInterstellarDoorController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         refresh(function():void
         {
         });
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
      
      private static function refresh(param1:Function) : void
      {
         var fun:Function = param1;
         KTool.getLimitNum(DAILY_STATE,function(param1:int):void
         {
            _state = param1;
            fun();
         });
      }
      
      public static function onClick() : void
      {
         if(_state == 6)
         {
            Alarm.show("你今天已经支援过了，请明天再来吧！",function():void
            {
               MapManager.changeMap(1);
            });
            return;
         }
         if(_state % 2 == 0)
         {
            playMovie();
         }
         else if(_state % 2 > 0)
         {
            fight();
         }
      }
      
      private static function playMovie(param1:int = 0) : void
      {
         var frame:int = param1;
         if(frame == 0)
         {
            frame = int(_state / 2) + 1;
         }
         ResourceManager.getResource(ClientConfig.getActiveUrl("dangerous_interstellar_door_movie"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            NpcController.npcVisible = false;
            MapObjectControl.hideOrShowAllObjects(false);
            MapManager.currentMap.controlLevel.addChild(mc);
            AnimateManager.playMcAnimate(mc,frame,"mc" + frame,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.controlLevel.removeChild(mc);
               if(_state < 6)
               {
                  KTool.doExchange(EIDS[frame - 1],function():void
                  {
                     ++_state;
                     fight();
                  });
               }
            });
         });
      }
      
      private static function fight() : void
      {
         var index:int = (_state - 1) / 2;
         _lastState = _state;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            refresh(function():void
            {
               if(_state != _lastState)
               {
                  if(_state < 6)
                  {
                     playMovie();
                  }
                  else
                  {
                     playMovie(4);
                  }
               }
            });
         });
         FightManager.fightNoMapBoss("泊莱德",BOSS_IDS[index]);
      }
   }
}
