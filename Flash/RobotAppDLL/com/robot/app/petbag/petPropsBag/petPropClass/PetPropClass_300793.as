package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300793
   {
       
      
      public function PetPropClass_300793(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 3200)
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm.show("此药剂只能给霍德尔使用哦!");
         }
      }
   }
}
