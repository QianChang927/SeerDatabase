package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   
   public class PetPropClass_300691
   {
       
      
      public function PetPropClass_300691(param1:PetPropInfo)
      {
         super();
         if([1978,1979,1980,1981].indexOf(param1.petInfo.id) == -1)
         {
            Alarm.show("此药剂只能给霍伊特或者沙多克使用！");
         }
         else
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
         }
      }
   }
}
