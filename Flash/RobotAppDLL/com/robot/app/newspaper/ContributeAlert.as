package com.robot.app.newspaper
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class ContributeAlert
   {
      
      public static const NEWS_TYPE:uint = 1;
      
      public static const SHIPER_TYPE:uint = 2;
      
      public static const DOCTOR_TYPE:uint = 3;
      
      public static const NONO:uint = 4;
      
      public static const LYMAN:uint = 5;
      
      public static const ROCKY:uint = 6;
       
      
      public function ContributeAlert()
      {
         super();
      }
      
      public static function show(param1:uint = 1) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ContributePanel"),"正在打开面板",param1);
      }
   }
}
