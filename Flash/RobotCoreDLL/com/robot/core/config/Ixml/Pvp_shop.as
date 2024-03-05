package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPvp_shopInfo;
   import org.taomee.ds.HashMap;
   
   public class Pvp_shop
   {
      
      private static var xmlClass:Class = Pvp_shop_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pvp_shop()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPvp_shopInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPvp_shopInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.producttype = int(_loc2_.@producttype);
            _loc3_.commodity = String(_loc2_.@commodity);
            _loc3_.consumeitemid = int(_loc2_.@consumeitemid);
            _loc3_.price = int(_loc2_.@price);
            _loc3_.discount = int(_loc2_.@discount);
            _loc3_.limit = int(_loc2_.@limit);
            _loc3_.quantity = int(_loc2_.@quantity);
            _loc3_.userinfo = int(_loc2_.@userinfo);
            _loc3_.sort = int(_loc2_.@sort);
            _loc3_.suit = int(_loc2_.@suit);
            _loc3_.bagLimit = int(_loc2_.@bagLimit);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPvp_shopInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
      
      public static function getItemsByType(param1:int) : Array
      {
         var type:int = param1;
         var arr:Array = _itemHash.getValues().filter(function(param1:IPvp_shopInfo, param2:int, param3:Array):Boolean
         {
            return param1.type == type;
         });
         return arr;
      }
   }
}
