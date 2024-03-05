package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300868
   {
       
      
      public function PetPropClass_300868(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 3437)
         {
            SocketConnection.send(CommandID.UP_GRADE_MEDICINE,param1.itemId,param1.petInfo.catchTime);
         }
         else
         {
            Alarm.show("只有艾欧丽娅才可以使用的专属药剂！");
         }
      }
   }
}
