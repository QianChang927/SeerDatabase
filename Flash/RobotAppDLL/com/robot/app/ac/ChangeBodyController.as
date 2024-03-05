package com.robot.app.ac
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ChangeBodyXmlInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm;
   
   public class ChangeBodyController
   {
      
      private static var _itemIds:Array;
       
      
      public function ChangeBodyController()
      {
         super();
      }
      
      public static function checkOwnCard() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCollectionHandler);
         ItemManager.getCollection();
      }
      
      private static function onCollectionHandler(param1:ItemEvent) : void
      {
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCollectionHandler);
         var _loc2_:Array = ChangeBodyXmlInfo.getAllItemIds();
         _itemIds = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(ItemManager.containsCollection(_loc2_[_loc3_]))
            {
               _itemIds.push(ItemManager.getCollectionInfo(_loc2_[_loc3_]));
            }
            _loc3_++;
         }
         if(_itemIds.length > 0)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("ChangeBodyToPetPanel"),"正在打开变身装置....",_itemIds);
         }
         else
         {
            Alarm.show("你目前还没有变身卡哦！");
         }
      }
   }
}
