package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300735
   {
       
      
      public function PetPropClass_300735(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.level >= 60)
         {
            Alarm.show("该精灵已经达到60级！");
         }
         else
         {
            SocketConnection.send(CommandID.UP_GRADE_MEDICINE,param1.itemId,param1.petInfo.catchTime);
         }
      }
   }
}
