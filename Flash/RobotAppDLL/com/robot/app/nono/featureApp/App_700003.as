package com.robot.app.nono.featureApp
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class App_700003
   {
       
      
      public function App_700003()
      {
         super();
         ModuleManager.showModule(ClientConfig.getAppModule("ExpAdmPanel"),"正在打开经验分配器....");
      }
   }
}
