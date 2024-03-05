package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ExchangeActXmlInfo
   {
      
      private static var xmlClass:Class = ExchangeActXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var exchanges:HashMap;
      
      private static var forevers:Array;
      
      {
         setup();
      }
      
      public function ExchangeActXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         _xml = XML(new xmlClass());
         exchanges = new HashMap();
         forevers = [];
         var _loc1_:XMLList = _xml.item;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.id = int(_loc2_.@id);
            _loc3_.name = String(_loc2_.@name);
            _loc3_.realid = int(_loc2_.@realid);
            _loc3_.type = int(_loc2_.@type);
            _loc3_.num = int(_loc2_.@num);
            _loc3_.shopid = int(_loc2_.@shopid);
            _loc3_.Isrec = int(_loc2_.@Isrec);
            _loc3_.coinid = int(_loc2_.@coinid);
            _loc3_.price = int(_loc2_.@price);
            _loc3_.Limittype = int(_loc2_.@Limittype);
            _loc3_.LimitCnt = int(_loc2_.@LimitCnt);
            _loc3_.UserInfoId = int(_loc2_.@UserInfoId);
            exchanges.add(_loc3_.id,_loc3_);
            forevers.push(_loc3_.UserInfoId);
         }
      }
      
      public static function getObjById(param1:int) : Object
      {
         return exchanges.getValue(param1);
      }
      
      public static function getForevers() : Array
      {
         return forevers;
      }
      
      public static function getObjsByShopType(param1:int) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:Array = exchanges.getValues();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_.length)
         {
            if(_loc3_[_loc4_].shopid == param1)
            {
               _loc2_.push(_loc3_[_loc4_]);
            }
            _loc4_++;
         }
         return _loc2_;
      }
   }
}
