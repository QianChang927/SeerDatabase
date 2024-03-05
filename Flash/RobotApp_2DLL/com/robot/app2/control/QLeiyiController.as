package com.robot.app2.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   
   public class QLeiyiController
   {
       
      
      public function QLeiyiController()
      {
         super();
      }
      
      public static function onClickIcon(param1:MovieClip) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("QLeiyiMainPanel"));
      }
   }
}
