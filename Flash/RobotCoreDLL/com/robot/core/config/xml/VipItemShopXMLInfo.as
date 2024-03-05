package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class VipItemShopXMLInfo
   {
      
      private static var xmlClass:Class = VipItemShopXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemshashMap:HashMap;
      
      private static var _shop2itemshashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function VipItemShopXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _itemshashMap = new HashMap();
         _xmllist = _xml.elements("Item");
      }
      
      public static function getIdXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@Id);
            }
         }
         return _loc2_;
      }
      
      public static function getProductIDXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@productID);
            }
         }
         return _loc2_;
      }
      
      public static function getShowRewardXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@ShowReward);
            }
         }
         return _loc2_;
      }
      
      public static function getShowNumXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@ShowNum);
            }
         }
         return _loc2_;
      }
      
      public static function getPriceXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@Price);
            }
         }
         return _loc2_;
      }
      
      public static function getLimitNumXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@LimitNum);
            }
         }
         return _loc2_;
      }
      
      public static function getLimitLvXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@LimitLv);
            }
         }
         return _loc2_;
      }
      
      public static function getMonthKeyXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@MonthKey);
            }
         }
         return _loc2_;
      }
      
      public static function getMonthPosXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@MonthPos);
            }
         }
         return _loc2_;
      }
      
      public static function getDescXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@Type == param1)
            {
               _loc2_.push(_loc3_.@desc);
            }
         }
         return _loc2_;
      }
   }
}
