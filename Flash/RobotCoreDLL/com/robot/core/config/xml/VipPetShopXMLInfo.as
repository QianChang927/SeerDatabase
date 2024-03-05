package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class VipPetShopXMLInfo
   {
      
      private static var xmlClass:Class = VipPetShopXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemshashMap:HashMap;
      
      private static var _shop2itemshashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function VipPetShopXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _itemshashMap = new HashMap();
         _xmllist = _xml.elements("Pet");
      }
      
      public static function getPetIdXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@PetId);
         }
         return _loc1_;
      }
      
      public static function getPriceXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@Price);
         }
         return _loc1_;
      }
      
      public static function getOriginXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@Origin);
         }
         return _loc1_;
      }
      
      public static function getProductIDXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@productID);
         }
         return _loc1_;
      }
      
      public static function getLimitLvXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@LimitLv);
         }
         return _loc1_;
      }
      
      public static function getTimeIdXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@TimeId);
         }
         return _loc1_;
      }
      
      public static function getTimeSubIdXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@TimeSubId);
         }
         return _loc1_;
      }
      
      public static function getIsExtraXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@IsExtra);
         }
         return _loc1_;
      }
      
      public static function getNewSeXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@IsExtra);
         }
         return _loc1_;
      }
      
      public static function getMintmarkIdXML() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@IsExtra);
         }
         return _loc1_;
      }
   }
}
