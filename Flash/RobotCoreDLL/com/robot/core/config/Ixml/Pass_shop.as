package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.IPass_shopInfo;
   import org.taomee.ds.HashMap;
   
   public class Pass_shop
   {
      
      private static var xmlClass:Class = Pass_shop_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function Pass_shop()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:IPass_shopInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new IPass_shopInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.commodity = String(_loc2_.@commodity);
            _loc3_.consumeitemid = int(_loc2_.@consumeitemid);
            _loc3_.price = int(_loc2_.@price);
            _loc3_.discount = int(_loc2_.@discount);
            _loc3_.limit = int(_loc2_.@limit);
            _loc3_.quantity = int(_loc2_.@quantity);
            _loc3_.userinfo = int(_loc2_.@userinfo);
            _loc3_.sort = int(_loc2_.@sort);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : IPass_shopInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
   }
}
