package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   
   public class PetPropClass_300853
   {
       
      
      public function PetPropClass_300853(param1:PetPropInfo)
      {
         super();
         SocketConnection.send(CommandID.UP_GRADE_MEDICINE,300853,param1.petInfo.catchTime);
      }
   }
}
