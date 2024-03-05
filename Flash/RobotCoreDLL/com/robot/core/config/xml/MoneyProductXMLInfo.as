package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MoneyProductXMLInfo
   {
      
      private static var xmlClass:Class = MoneyProductXMLInfo_xmlClass;
      
      private static var _productMap:HashMap;
      
      private static var _itemMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function MoneyProductXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _productMap = new HashMap();
         _itemMap = new HashMap();
         _xml = XML(new xmlClass());
         _xmllist = _xml.elements("item");
         for each(_loc1_ in _xmllist)
         {
            _productMap.add(_loc1_.@productID.toString(),_loc1_);
            _itemMap.add(_loc1_.@itemID.toString(),_loc1_);
         }
      }
      
      public static function getItemList() : XMLList
      {
         return _xmllist;
      }
      
      public static function getProductByItemId(param1:uint) : uint
      {
         var xml:XML = null;
         var itemID:uint = param1;
         xml = _xmllist.(@itemID == itemID)[0];
         if(xml)
         {
            return xml.@productID;
         }
         return 0;
      }
      
      public static function getItemProPric(param1:uint) : Number
      {
         var xml:XML = null;
         var proID:uint = param1;
         xml = _xmllist.(@productID == proID)[0];
         if(xml)
         {
            return xml.@price;
         }
         return GoldProductXMLInfo.getPriceByProID(proID);
      }
      
      public static function getItemIDs(param1:uint) : Array
      {
         var xml:XML = null;
         var str:String = null;
         var proID:uint = param1;
         xml = _xmllist.(@productID == proID)[0];
         if(xml)
         {
            str = xml.@itemID;
            return str.split("|");
         }
         return GoldProductXMLInfo.getItemIDs(proID);
      }
      
      public static function getIcon(param1:uint) : String
      {
         var xml:XML = null;
         var proID:uint = param1;
         xml = _xmllist.(@productID == proID)[0];
         if(xml)
         {
            if(xml.hasOwnProperty("@icon"))
            {
               return xml.@icon;
            }
            return "";
         }
         return GoldProductXMLInfo.getIcon(proID);
      }
      
      public static function getNameByProID(param1:uint) : String
      {
         var _loc2_:XML = _productMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@name;
         }
         return GoldProductXMLInfo.getNameByProID(param1);
      }
      
      public static function getNameByItemID(param1:uint) : String
      {
         return ItemXMLInfo.getName(param1);
      }
      
      public static function getPriceByProID(param1:uint) : Number
      {
         var xml:XML = null;
         var proID:uint = param1;
         xml = _xmllist.(@productID == proID)[0];
         if(xml)
         {
            return xml.@price;
         }
         return GoldProductXMLInfo.getPriceByProID(proID);
      }
      
      public static function getPriceByItemID(param1:uint) : Number
      {
         var xml:XML = null;
         var id:uint = param1;
         xml = _xmllist.(@itemID == id)[0];
         if(xml)
         {
            return xml.@price;
         }
         return GoldProductXMLInfo.getPriceByItemID(id);
      }
      
      public static function containsPid(param1:int) : Boolean
      {
         return null != _productMap.getValue(param1);
      }
      
      public static function getVipByProID(param1:uint) : Number
      {
         var xml:XML = null;
         var proID:uint = param1;
         xml = _xmllist.(@productID == proID)[0];
         if(xml)
         {
            return xml.@vip;
         }
         return GoldProductXMLInfo.getVipByProID(proID);
      }
      
      public static function getVipByItemID(param1:uint) : Number
      {
         var xml:XML = null;
         var id:uint = param1;
         xml = _xmllist.(@itemID == id)[0];
         if(xml)
         {
            return xml.@vip;
         }
         return GoldProductXMLInfo.getVipByItemID(id);
      }
      
      public static function getGoldByProID(param1:uint) : Number
      {
         var xml:XML = null;
         var proID:uint = param1;
         xml = _xmllist.(@productID == proID)[0];
         if(xml)
         {
            return xml.@gold;
         }
         return 0;
      }
      
      public static function getGoldByItemID(param1:uint) : Number
      {
         var xml:XML = null;
         var id:uint = param1;
         xml = _xmllist.(@itemID == id)[0];
         if(xml)
         {
            return xml.@gold;
         }
         return 0;
      }
   }
}
