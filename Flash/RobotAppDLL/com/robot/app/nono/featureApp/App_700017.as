package com.robot.app.nono.featureApp
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class App_700017
   {
       
      
      public function App_700017()
      {
         super();
         SocketConnection.send(1022,86063115);
         if(MainManager.actorModel.isTransform)
         {
            Alarm.show("你目前处在变身状态不可以飞行！");
            return;
         }
         ModuleManager.showAppModule("NonoFlyPanel");
      }
   }
}
