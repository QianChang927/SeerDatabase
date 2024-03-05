package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ExchangeCitXMLInfo
   {
      
      private static var xmlClass:Class = ExchangeCitXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _itemshashMap:HashMap;
      
      private static var _shop2itemshashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function ExchangeCitXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _itemshashMap = new HashMap();
         _shop2itemshashMap = new HashMap();
         _xmllist = _xml.elements("item");
         for each(_loc1_ in _xmllist)
         {
            _itemshashMap.add(uint(_loc1_.@id),_loc1_);
         }
      }
      
      public static function getRealidXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _itemshashMap.getValues())
         {
            if(_loc3_.@shopid == 4)
            {
               if(_loc3_.@type == param1)
               {
                  _loc2_.push(_loc3_.@realid);
               }
            }
         }
         return _loc2_;
      }
      
      public static function getPriceXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _itemshashMap.getValues())
         {
            if(_loc3_.@shopid == 4)
            {
               if(_loc3_.@type == param1)
               {
                  _loc2_.push(_loc3_.@price);
               }
            }
         }
         return _loc2_;
      }
      
      public static function getUserInfoIdXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _itemshashMap.getValues())
         {
            if(_loc3_.@shopid == 4)
            {
               if(_loc3_.@type == param1)
               {
                  _loc2_.push(_loc3_.@UserInfoId);
               }
            }
         }
         return _loc2_;
      }
      
      public static function getLimitCntXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _itemshashMap.getValues())
         {
            if(_loc3_.@shopid == 4)
            {
               if(_loc3_.@type == param1)
               {
                  _loc2_.push(_loc3_.@LimitCnt);
               }
            }
         }
         return _loc2_;
      }
      
      public static function getIdXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _itemshashMap.getValues())
         {
            if(_loc3_.@shopid == 4)
            {
               if(_loc3_.@type == param1)
               {
                  _loc2_.push(_loc3_.@id);
               }
            }
         }
         return _loc2_;
      }
      
      public static function getCountXML(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _itemshashMap.getValues())
         {
            if(_loc3_.@id == param1)
            {
               if(_loc3_.@count == 0)
               {
                  return 1;
               }
               return _loc3_.@count;
            }
         }
         return 1;
      }
      
      public static function getLimittypeXML(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _itemshashMap.getValues())
         {
            if(_loc3_.@id == param1)
            {
               return _loc3_.@Limittype;
            }
         }
         return 0;
      }
   }
}
