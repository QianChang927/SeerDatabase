package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class BigEventController
   {
      
      public static const isLocal:Boolean = true;
       
      
      public function BigEventController()
      {
         super();
      }
      
      public static function goMain() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("BigEventPanel"),"正在加载...");
      }
   }
}
