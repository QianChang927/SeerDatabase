package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300866
   {
       
      
      public function PetPropClass_300866(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 3891)
         {
            SocketConnection.send(CommandID.EAT_SPECIAL_MEDICINE,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm.show("只有未来•伊优才可以使用的专属药剂！");
         }
      }
   }
}
