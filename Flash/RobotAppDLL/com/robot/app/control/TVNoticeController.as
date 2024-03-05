package com.robot.app.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.utils.CronTimeVo;
   
   public class TVNoticeController
   {
      
      public static const isLocal:Boolean = false;
      
      private static var ac1:ActivityControl;
      
      private static var ac2:ActivityControl;
      
      public static var cron1:Array = [new CronTimeVo("*","*","5-11","2","*","2016")];
       
      
      public function TVNoticeController()
      {
         super();
      }
      
      public static function showCurrentPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PreheatPanel"));
      }
   }
}
