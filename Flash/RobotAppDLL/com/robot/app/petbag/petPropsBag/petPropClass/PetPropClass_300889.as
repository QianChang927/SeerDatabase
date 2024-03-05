package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class PetPropClass_300889
   {
       
      
      public function PetPropClass_300889(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 3437)
         {
            SocketConnection.send(CommandID.EAT_SPECIAL_MEDICINE,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm2.show("此药剂只能给艾欧丽娅使用哦!");
         }
      }
   }
}
