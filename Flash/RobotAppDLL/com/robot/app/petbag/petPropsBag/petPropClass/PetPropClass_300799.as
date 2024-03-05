package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class PetPropClass_300799
   {
       
      
      private var _info:PetInfo;
      
      private var _nature:uint;
      
      public function PetPropClass_300799(param1:PetPropInfo)
      {
         super();
         this._info = param1.petInfo;
         if(param1.petInfo.id == 3218)
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm2.show("此药剂只能给炙凤凯皇使用哦!");
         }
      }
   }
}
