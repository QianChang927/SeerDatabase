package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   
   public class PetPropClass_300676
   {
       
      
      public function PetPropClass_300676(param1:PetPropInfo)
      {
         super();
         SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
      }
   }
}
