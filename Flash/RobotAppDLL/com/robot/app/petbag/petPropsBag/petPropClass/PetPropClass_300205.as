package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   
   public class PetPropClass_300205
   {
       
      
      public function PetPropClass_300205(param1:PetPropInfo)
      {
         super();
         SocketConnection.send(CommandID.USE_PET_ITEM_INCREASE_STUDY,param1.petInfo.catchTime,param1.itemId);
      }
   }
}
