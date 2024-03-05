package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.EventManager;
   
   public class PetPropClass_300805
   {
       
      
      public function PetPropClass_300805(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id != 3227)
         {
            Alarm.show("该药剂只能对月之子•奇拉美使用哦！");
         }
         else
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
            EventManager.dispatchEvent(new DynamicEvent("use300805"));
         }
      }
   }
}
