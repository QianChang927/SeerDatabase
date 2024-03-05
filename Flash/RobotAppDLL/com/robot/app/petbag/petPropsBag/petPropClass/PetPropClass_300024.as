package com.robot.app.petbag.petPropsBag.petPropClass
{
   import com.robot.app.petbag.PetPropInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   
   public class PetPropClass_300024
   {
       
      
      public function PetPropClass_300024(param1:PetPropInfo, param2:Boolean = false)
      {
         var info:PetPropInfo = param1;
         var noTips:Boolean = param2;
         super();
         if(noTips)
         {
            SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,[info.petInfo.catchTime,info.itemId],function():void
            {
               Alarm.show("使用成功！");
            });
         }
         else
         {
            Alert.show("你确定要对" + info.petInfo.name + "使用" + ItemXMLInfo.getName(info.itemId) + "吗？",function():void
            {
               SocketConnection.sendByQueue(CommandID.USE_PET_ITEM_OUT_OF_FIGHT,[info.petInfo.catchTime,info.itemId],function():void
               {
                  Alarm.show("使用成功！");
               });
            });
         }
      }
   }
}
