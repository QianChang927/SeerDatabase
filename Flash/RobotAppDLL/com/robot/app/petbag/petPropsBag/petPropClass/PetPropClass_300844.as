package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class PetPropClass_300844
   {
       
      
      public function PetPropClass_300844(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 3393)
         {
            SocketConnection.send(CommandID.UP_GRADE_MEDICINE,300844,param1.petInfo.catchTime);
         }
         else
         {
            Alarm2.show("此药剂只能给马尔修斯使用哦!");
         }
      }
   }
}
