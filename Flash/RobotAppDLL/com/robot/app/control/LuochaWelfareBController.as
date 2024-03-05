package com.robot.app.control
{
   import com.robot.core.manager.ModuleManager;
   
   public class LuochaWelfareBController
   {
      
      public static var GO_TO_MAP_BY_PANEL:Boolean = false;
      
      public static var TASK_ID:int = 0;
       
      
      public function LuochaWelfareBController()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(GO_TO_MAP_BY_PANEL)
         {
            ModuleManager.showAppModule("LuochaWelfareBTaskPanel");
         }
      }
   }
}
