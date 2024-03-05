package com.robot.app.nono.featureApp
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   
   public class App_700019
   {
       
      
      public function App_700019()
      {
         super();
         SocketConnection.send(1020,299);
         ModuleManager.showModule(ClientConfig.getAppModule("NonoAlarmPanel"),"正在打开...");
      }
   }
}
