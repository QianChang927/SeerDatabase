package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   
   public class PetBreedCmdListener extends BaseBean
   {
       
      
      public function PetBreedCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.COMMIT_BREED_END,this.handler);
         finish();
      }
      
      private function handler(param1:SocketEvent) : void
      {
         SocketConnection.addCmdListener(CommandID.COMMIT_BREED_END_TWO,this.onFreshPetHandler);
         SocketConnection.send(CommandID.COMMIT_BREED_END_TWO);
      }
      
      private function onFreshPetHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.COMMIT_BREED_END_TWO,this.onFreshPetHandler);
         PetManager.refreshStorageList();
      }
   }
}
