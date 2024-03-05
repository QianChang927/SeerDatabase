package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.net.SocketConnection;
   
   public class PetPropClass_300745
   {
       
      
      public function PetPropClass_300745(param1:PetPropInfo)
      {
         super();
         SocketConnection.send(43603,param1.petInfo.catchTime,param1.itemId);
      }
   }
}
