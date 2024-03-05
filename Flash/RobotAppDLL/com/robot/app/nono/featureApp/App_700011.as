package com.robot.app.nono.featureApp
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class App_700011
   {
       
      
      public function App_700011()
      {
         super();
         ModuleManager.showModule(ClientConfig.getAppModule("PetStorage"),"正在打开精灵仓库....");
      }
   }
}
