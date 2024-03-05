package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import org.taomee.events.SocketEvent;
   
   public class PetPropClass_300066
   {
       
      
      private var itemInfo:SingleItemInfo;
      
      public function PetPropClass_300066(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.level < 100)
         {
            Alarm.show("只有100级精灵才能开启通用刻印孔哦");
            return;
         }
         SocketConnection.addCmdListener(CommandID.ACTIVE_COUNTERMARK,this.onActiveHandler);
         SocketConnection.send(CommandID.ACTIVE_COUNTERMARK,param1.petInfo.catchTime);
      }
      
      private function onActiveHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ACTIVE_COUNTERMARK,this.onActiveHandler);
         PetManager.upDate();
         Alarm.show("精灵的通用刻印已经成功开启！");
      }
   }
}
