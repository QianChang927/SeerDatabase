package com.robot.app.nono.featureApp
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.net.SocketConnection;
   
   public class App_700005
   {
       
      
      public function App_700005()
      {
         super();
         if(NonoManager.info.state[1])
         {
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,0);
         }
         else
         {
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
         }
      }
   }
}
