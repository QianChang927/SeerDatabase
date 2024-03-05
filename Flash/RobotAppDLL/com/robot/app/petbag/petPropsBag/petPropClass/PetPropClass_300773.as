package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.net.SocketConnection;
   
   public class PetPropClass_300773
   {
       
      
      public function PetPropClass_300773(param1:PetPropInfo)
      {
         super();
         SocketConnection.send(43603,param1.petInfo.catchTime,param1.itemId);
      }
   }
}
