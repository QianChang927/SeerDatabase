package com.robot.app.mapProcess.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class KaxiusiEvoController
   {
       
      
      public function KaxiusiEvoController()
      {
         super();
      }
      
      public static function onClick(param1:* = null) : void
      {
         if(MapManager.currentMap.id == 10539)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("KaxiusiEvoSummaryPanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("WarGodEvoMsgPanel"));
         }
      }
   }
}
