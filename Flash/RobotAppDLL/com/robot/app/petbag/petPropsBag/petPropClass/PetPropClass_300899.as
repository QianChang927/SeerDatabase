package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300899
   {
       
      
      public function PetPropClass_300899(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 4393)
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm.show("只有酱丸号才可以使用的专属药剂！");
         }
      }
   }
}
