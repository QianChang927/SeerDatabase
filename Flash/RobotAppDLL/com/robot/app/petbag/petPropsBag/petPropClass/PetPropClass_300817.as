package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class PetPropClass_300817
   {
       
      
      public function PetPropClass_300817(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 2499)
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm2.show("此药剂只能给格莱奥丹使用哦!");
         }
      }
   }
}
