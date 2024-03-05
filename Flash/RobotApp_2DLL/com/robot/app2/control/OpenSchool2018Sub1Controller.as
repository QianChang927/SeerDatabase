package com.robot.app2.control
{
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class OpenSchool2018Sub1Controller
   {
       
      
      public function OpenSchool2018Sub1Controller()
      {
         super();
      }
      
      public static function init() : void
      {
         if(MapManager.currentMap.id != 1285)
         {
            MapManager.changeMapWithCallback(1285,function():void
            {
               ModuleManager.showAppModule("OpenSchool2018Sub1Panel",100);
            });
         }
         else
         {
            ModuleManager.showAppModule("OpenSchool2018Sub1Panel",100);
         }
      }
   }
}
