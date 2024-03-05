package com.robot.app.control
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.AppModel;
   
   public class SoulTransformController
   {
      
      private static var panel:AppModel;
       
      
      public function SoulTransformController()
      {
         super();
      }
      
      public static function show() : void
      {
         ModuleManager.showAppModule("EggWareHousePanel",2);
      }
   }
}
