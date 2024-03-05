package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.NatureXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   
   public class PetPropClass_300025
   {
       
      
      public function PetPropClass_300025(param1:PetPropInfo)
      {
         var info:PetPropInfo = param1;
         super();
         Alert.show("你确定要对" + info.petInfo.name + "使用" + ItemXMLInfo.getName(info.itemId) + "吗？",function():void
         {
            SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,[info.petInfo.catchTime,info.itemId],function():void
            {
               PetManager.upDate(function():void
               {
                  var _loc1_:PetInfo = PetManager.getPetInfo(info.petInfo.catchTime);
                  Alarm.show("精灵的性格变为了" + NatureXMLInfo.getName(_loc1_.nature));
               });
            });
         });
      }
   }
}
