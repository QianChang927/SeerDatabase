package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300686
   {
       
      
      public function PetPropClass_300686(param1:PetPropInfo)
      {
         super();
         if([1954,1955].indexOf(param1.petInfo.id) == -1)
         {
            Alarm.show("此药剂只能给加奈恩使用！");
         }
         else
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
         }
      }
   }
}
