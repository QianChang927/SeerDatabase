package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300897
   {
       
      
      public function PetPropClass_300897(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 4321)
         {
            SocketConnection.send(43603,param1.petInfo.catchTime,param1.itemId);
         }
         else
         {
            Alarm.show("只有至序圣华才可以使用的专属性升星药剂!");
         }
      }
   }
}
