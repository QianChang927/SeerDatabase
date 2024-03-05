package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class PetPropClass_300879
   {
       
      
      public function PetPropClass_300879(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 4169)
         {
            SocketConnection.send(CommandID.UP_GRADE_MEDICINE,param1.itemId,param1.petInfo.catchTime);
         }
         else
         {
            Alarm2.show("此药剂只能给弑序神罗使用哦!");
         }
      }
   }
}
