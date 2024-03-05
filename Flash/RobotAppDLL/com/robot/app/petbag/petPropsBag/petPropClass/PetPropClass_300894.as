package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300894
   {
       
      
      public function PetPropClass_300894(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 4321)
         {
            SocketConnection.send(CommandID.UP_GRADE_MEDICINE,param1.itemId,param1.petInfo.catchTime);
         }
         else
         {
            Alarm.show("只有至序圣华才可以使用的专属100级升级秘药！");
         }
      }
   }
}
