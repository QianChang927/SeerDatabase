package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300856
   {
       
      
      public function PetPropClass_300856(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 3696)
         {
            SocketConnection.send(CommandID.UP_GRADE_MEDICINE,param1.itemId,param1.petInfo.catchTime);
         }
         else
         {
            Alarm.show("此药剂只能给米德萨使用哦!");
         }
      }
   }
}
