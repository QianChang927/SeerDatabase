package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.ProductInfo;
   import flash.net.registerClassAlias;
   import flash.utils.ByteArray;
   import flash.utils.getTimer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class GoldProductXMLInfo
   {
      
      private static var _productMap:HashMap;
      
      private static var _itemMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      private static var _cacheInfoArr:Array;
      
      private static var xmlClass:Class = GoldProductXMLInfo_xmlClass;
      
      {
         setup();
      }
      
      public function GoldProductXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _productMap = new HashMap();
         _itemMap = new HashMap();
         parseMovesbyByteArray();
      }
      
      private static function parseMovesbyXML() : void
      {
         var _loc2_:XML = null;
         var _loc3_:ProductInfo = null;
         var _loc1_:uint = uint(getTimer());
         _xml = XML(new xmlClass());
         _xmllist = _xml.elements("item");
         for each(_loc2_ in _xmllist)
         {
            _loc3_ = parseXML2Obj(_loc2_);
            _productMap.add(_loc3_.productID.toString(),_loc3_);
            _itemMap.add(_loc3_.itemID,_loc3_);
         }
         DebugTrace.show("product_diamond.xml解析时间：" + (getTimer() - _loc1_) / 1000);
      }
      
      private static function parseMovesbyByteArray() : void
      {
         var _loc4_:ProductInfo = null;
         var _loc1_:uint = uint(getTimer());
         registerClassAlias("GoldProductXMLInfo",ProductInfo);
         var _loc2_:ByteArray = new xmlClass();
         _loc2_.uncompress();
         _cacheInfoArr = _loc2_.readObject() as Array;
         _loc2_.clear();
         var _loc3_:int = int(_cacheInfoArr.length);
         var _loc5_:int = 0;
         while(_loc5_ < _loc3_)
         {
            _loc4_ = _cacheInfoArr[_loc5_];
            _productMap.add(_loc4_.productID.toString(),_loc4_);
            _itemMap.add(_loc4_.itemID,_loc4_);
            _loc5_++;
         }
         DebugTrace.show("product_diamond.xml解析时间：" + (getTimer() - _loc1_) / 1000);
      }
      
      private static function parseXML2Obj(param1:XML) : ProductInfo
      {
         var _loc2_:ProductInfo = new ProductInfo();
         _loc2_.productID = uint(param1.@productID);
         _loc2_.itemID = String(param1.@itemID);
         _loc2_.name = String(param1.@name);
         _loc2_.price = int(param1.@price);
         _loc2_.vip = Number(param1.@vip);
         _loc2_.type = int(param1.@type);
         _loc2_.productType = int(param1.@productType);
         _loc2_.malldiscount = int(param1.@malldiscount);
         _loc2_.icon = String(param1.@icon);
         return _loc2_;
      }
      
      public static function getItemList() : HashMap
      {
         return _productMap;
      }
      
      public static function getProductByItemId(param1:uint) : uint
      {
         var _loc2_:ProductInfo = _itemMap.getValue(param1.toString());
         if(_loc2_ == null)
         {
            return 0;
         }
         return uint(_loc2_["productID"]);
      }
      
      public static function getItemIDs(param1:uint) : Array
      {
         var _loc2_:ProductInfo = _productMap.getValue(param1.toString());
         var _loc3_:String = String(_loc2_["itemID"].toString());
         return _loc3_.split("|");
      }
      
      public static function getIcon(param1:uint) : String
      {
         var _loc2_:ProductInfo = _productMap.getValue(param1.toString());
         return _loc2_["icon"];
      }
      
      public static function getNameByProID(param1:uint) : String
      {
         var _loc2_:ProductInfo = _productMap.getValue(param1.toString());
         if(_loc2_)
         {
            return _loc2_["name"];
         }
         return "";
      }
      
      public static function getItemByProID(param1:uint) : Object
      {
         return _productMap.getValue(param1.toString());
      }
      
      public static function containsPid(param1:int) : Boolean
      {
         return null != _productMap.getValue(param1);
      }
      
      public static function getNameByItemID(param1:uint) : String
      {
         var _loc2_:ProductInfo = _itemMap.getValue(param1.toString());
         if(_loc2_)
         {
            return _loc2_["name"];
         }
         return "";
      }
      
      public static function getPriceByProID(param1:uint) : uint
      {
         var _loc2_:ProductInfo = _productMap.getValue(param1.toString());
         return uint(_loc2_["price"]);
      }
      
      public static function getPriceByItemID(param1:uint) : uint
      {
         var _loc2_:ProductInfo = _itemMap.getValue(param1.toString());
         return uint(_loc2_["price"]);
      }
      
      public static function getVipByProID(param1:uint) : Number
      {
         var _loc2_:ProductInfo = _productMap.getValue(param1.toString());
         return Number(_loc2_["vip"]);
      }
      
      public static function getVipByItemID(param1:uint) : Number
      {
         var _loc2_:ProductInfo = _itemMap.getValue(param1.toString());
         return Number(_loc2_["vip"]);
      }
      
      public static function canPutInCart(param1:uint) : Boolean
      {
         var _loc2_:ProductInfo = _productMap.getValue(param1.toString());
         return Boolean(_loc2_ && int(_loc2_.malldiscount) == 1);
      }
   }
}
