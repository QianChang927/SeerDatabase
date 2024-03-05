package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   
   public class PetPropClass_300882
   {
       
      
      public function PetPropClass_300882(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 4169)
         {
            SocketConnection.send(43603,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm2.show("此药剂只能给弑序神罗使用哦!");
         }
      }
   }
}
