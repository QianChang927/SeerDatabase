package com.robot.app2.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class DeepseaLightWarriorController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _times:uint = 0;
       
      
      public function DeepseaLightWarriorController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(_times == 0)
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightEndAlarm);
         }
      }
      
      private static function onFightEndAlarm(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightEndAlarm);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID != MainManager.actorID)
         {
            alarm();
         }
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         MapListenerManager.add(_map.depthLevel["lightwarrior"],function():void
         {
            if(BufferRecordManager.getState(MainManager.actorInfo,605))
            {
               ModuleManager.showModule(ClientConfig.getAppModule("DeepseaLightWarriorMainPanel"));
            }
            else
            {
               showStory();
            }
         },"深海的圣光战将");
      }
      
      public static function showStory(param1:Boolean = false) : void
      {
         var closeBtnVisible:Boolean = param1;
         CartoonManager.play(ClientConfig.getFullMovie("cartoon/deepsealightwarrior"),function():void
         {
            if(!closeBtnVisible)
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130402_1"),function():void
               {
                  BufferRecordManager.setState(MainManager.actorInfo,605,true);
                  ModuleManager.showModule(ClientConfig.getAppModule("DeepseaLightWarriorMainPanel"));
               });
            }
            else
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130402_1_1"),function():void
               {
                  BufferRecordManager.setState(MainManager.actorInfo,605,true);
                  ModuleManager.showModule(ClientConfig.getAppModule("DeepseaLightWarriorMainPanel"));
               });
            }
         });
      }
      
      private static function alarm() : void
      {
         if(_times == 0)
         {
            ++_times;
            ModuleManager.showModule(ClientConfig.getAppModule("DeepseaLightWarriorPushPanel"));
         }
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
