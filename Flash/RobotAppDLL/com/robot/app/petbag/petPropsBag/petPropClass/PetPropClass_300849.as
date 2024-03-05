package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import org.taomee.manager.EventManager;
   
   public class PetPropClass_300849
   {
       
      
      public function PetPropClass_300849(param1:PetPropInfo)
      {
         super();
         if(param1.petInfo.id == 70)
         {
            SocketConnection.send(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,param1.petInfo.catchTime,param1.itemId);
            EventManager.dispatchEvent(new Event("PetProp300849Use"));
         }
         else
         {
            Alarm.show("此药剂只能给雷伊使用哦!");
         }
      }
   }
}
