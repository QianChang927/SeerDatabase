package com.robot.core.config.Ixml
{
   import com.robot.core.config.IXmlInfo.ISuitsaleInfo;
   import org.taomee.ds.HashMap;
   
   public class SuitSaleXmlInfo
   {
      
      private static var xmlClass:Class = SuitSaleXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemHash:HashMap;
      
      {
         setup();
      }
      
      public function SuitSaleXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:ISuitsaleInfo = null;
         _xml = XML(new xmlClass());
         _itemHash = new HashMap();
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new ISuitsaleInfo();
            _loc3_.id = int(_loc2_.@id);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.itemid = int(_loc2_.@itemid);
            _loc3_.itemsid = String(_loc2_.@itemsid);
            _loc3_.normalprice = int(_loc2_.@normalprice);
            _loc3_.specialprice = int(_loc2_.@specialprice);
            _loc3_.hide = int(_loc2_.@hide);
            _loc3_.scale = Number(_loc2_.@scale);
            _itemHash.add(int(_loc2_.@id),_loc3_);
         }
      }
      
      public static function getItem(param1:int) : ISuitsaleInfo
      {
         return _itemHash.getValue(param1);
      }
      
      public static function getItems() : Array
      {
         return _itemHash.getValues();
      }
   }
}
