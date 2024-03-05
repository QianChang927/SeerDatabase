package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.events.Event;
   import flash.net.SharedObject;
   
   public class CxAdController
   {
       
      
      public function CxAdController()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      private static function onSwitch(param1:Event) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitch);
         if(SystemTimerManager.sysDate.time / 1000 - MainManager.actorInfo.regTime < 14 * 24 * 60 * 60)
         {
            return;
         }
         var _loc2_:SharedObject = SOManager.getUserSO(SOManager.LOCALMSG);
         var _loc3_:Date = SystemTimerManager.sysDate;
         if(_loc2_.data["AD_LOGIN_" + _loc3_.fullYear + "_" + _loc3_.month + "_" + _loc3_.date] == undefined)
         {
            _loc2_.data["AD_LOGIN_" + _loc3_.fullYear + "_" + _loc3_.month + "_" + _loc3_.date] = true;
            _loc2_.flush();
            ModuleManager.showModule(ClientConfig.getAppModule("JingLingLinkPanel"));
         }
      }
      
      public static function openPanel() : void
      {
         onSwitch(null);
      }
   }
}
