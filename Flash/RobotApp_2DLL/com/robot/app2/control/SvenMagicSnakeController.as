package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class SvenMagicSnakeController
   {
       
      
      public function SvenMagicSnakeController()
      {
         super();
      }
      
      public static function LampardEquipStart() : void
      {
         if(MapManager.currentMap.id != 1035)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               ModuleManager.showModule(ClientConfig.getAppModule("LampardSuperEvolutionMainPanel"));
            });
            MapManager.changeMap(1035);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LampardSuperEvolutionMainPanel"));
         }
      }
   }
}
