package com.robot.app2.control
{
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class SecurityConductController
   {
       
      
      public function SecurityConductController()
      {
         super();
      }
      
      public static function setup() : void
      {
      }
      
      private static function onSwitchMap(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         if(!BitBuffSetClass.getState(22575))
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SecurityConductPanel"));
         }
      }
   }
}
