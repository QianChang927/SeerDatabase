package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class PetPropClass_300800
   {
       
      
      private var _info:PetInfo;
      
      private var _nature:uint;
      
      public function PetPropClass_300800(param1:PetPropInfo)
      {
         super();
         this._info = param1.petInfo;
         if(param1.petInfo.id == 3214)
         {
            SocketConnection.send(43603,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm2.show("此药剂只能万古邪皇.威斯克使用哦!");
         }
      }
   }
}
