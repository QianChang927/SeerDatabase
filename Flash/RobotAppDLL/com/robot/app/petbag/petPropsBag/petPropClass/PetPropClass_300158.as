package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   
   public class PetPropClass_300158
   {
       
      
      public function PetPropClass_300158(param1:PetPropInfo)
      {
         super();
         SocketConnection.send(CommandID.FIRE_EDGE_REBORN_USE_BREED_CONVERT_ITEM,param1.petInfo.catchTime);
      }
   }
}
