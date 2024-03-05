package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300878
   {
       
      
      public function PetPropClass_300878(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.dv >= 31)
         {
            Alarm.show("天赋达到最高，无法再使用药剂！");
            return;
         }
         SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
      }
   }
}
