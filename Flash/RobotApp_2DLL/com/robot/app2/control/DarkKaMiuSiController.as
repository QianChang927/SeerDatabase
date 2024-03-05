package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class DarkKaMiuSiController
   {
       
      
      public function DarkKaMiuSiController()
      {
         super();
      }
      
      public static function start() : void
      {
         if(MapManager.currentMap.id != 1020)
         {
            MapManager.changeMap(1020);
            return;
         }
         playStory();
      }
      
      private static function playStory() : void
      {
         openPanel();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DarkKaMiuSiMainPanel"),"正在打开...");
      }
   }
}
