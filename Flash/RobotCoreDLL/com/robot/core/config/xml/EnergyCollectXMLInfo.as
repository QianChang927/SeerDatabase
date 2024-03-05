package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class EnergyCollectXMLInfo
   {
      
      private static var xmlClass:Class = EnergyCollectXMLInfo_xmlClass;
      
      private static var _hashMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function EnergyCollectXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _hashMap = new HashMap();
         _xmllist = _xml.energy;
         for each(_loc1_ in _xmllist)
         {
            _hashMap.add(uint(_loc1_.@type),_loc1_);
         }
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _hashMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@name"))
            {
               return _loc2_.@name;
            }
         }
         return "";
      }
      
      public static function getColtType(param1:uint) : String
      {
         var _loc2_:XML = _hashMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@collectType"))
            {
               return _loc2_.@collectType;
            }
         }
         return "";
      }
      
      public static function getColtCnt(param1:uint) : uint
      {
         var _loc2_:XML = _hashMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@collectCnt"))
            {
               return uint(_loc2_.@collectCnt);
            }
         }
         return 1;
      }
      
      public static function getUnit(param1:uint) : String
      {
         var _loc2_:XML = _hashMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@unit"))
            {
               return _loc2_.@unit;
            }
         }
         return "";
      }
      
      public static function getDir(param1:uint) : int
      {
         var _loc2_:XML = _hashMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@dir"))
            {
               return int(_loc2_.@dir);
            }
         }
         return 1;
      }
   }
}
