package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   
   public class MonthVipController
   {
       
      
      public function MonthVipController()
      {
         super();
      }
      
      public static function showMainPanel(param1:MovieClip = null) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MonthPet2016AprPanel"));
      }
   }
}
