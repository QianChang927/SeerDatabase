package com.robot.core.energyExchange
{
   import com.robot.core.CommandID;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class ExchangeOreModel
   {
      
      private static var xmlClass:Class = ExchangeOreModel_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var _sucHandler:Function;
      
      private static var _handler:Function;
      
      private static var _infoMap:HashMap;
       
      
      public function ExchangeOreModel()
      {
         super();
      }
      
      public static function getData(param1:Function) : void
      {
         _sucHandler = param1;
         _infoMap = new HashMap();
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onList);
         ItemManager.getCollection();
      }
      
      private static function onList(param1:ItemEvent) : void
      {
         var _loc3_:SingleItemInfo = null;
         var _loc4_:ExchangeItemInfo = null;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onList);
         var _loc2_:int = 0;
         while(_loc2_ < xml.item.length())
         {
            _loc3_ = ItemManager.getCollectionInfo(uint(xml.item[_loc2_].@id));
            if(_loc3_)
            {
               _loc4_ = new ExchangeItemInfo(_loc3_);
               _infoMap.add(_loc4_.itemId,_loc4_);
            }
            _loc2_++;
         }
         if(_infoMap.length == 0)
         {
            _sucHandler(null);
         }
         else
         {
            _sucHandler(_infoMap);
         }
      }
      
      public static function exchangeEnergy(param1:uint, param2:uint, param3:Function) : void
      {
         _handler = param3;
         SocketConnection.addCmdListener(CommandID.ITEM_SALE,onSuccess);
         SocketConnection.send(CommandID.ITEM_SALE,param1,param2);
      }
      
      private static function onSuccess(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ITEM_SALE,onSuccess);
         _handler();
      }
   }
}
