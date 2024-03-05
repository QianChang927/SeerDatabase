package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class LightBookXmlInfo
   {
      
      private static var xmlClass:Class = LightBookXmlInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      {
         setup();
      }
      
      public function LightBookXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("item");
         for each(_loc1_ in xl)
         {
            _dataMap.add(int(_loc1_.@monsterID),_loc1_);
         }
      }
      
      public static function getAllPets() : Array
      {
         return _dataMap.getKeys();
      }
      
      public static function getPrice(param1:int) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@price);
         }
         return 0;
      }
      
      public static function getName(param1:int) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@name);
         }
         return 0;
      }
      
      public static function getNeedMonId(param1:int) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@needmonID);
         }
         return 0;
      }
      
      public static function getCoinId(param1:int) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@coinid);
         }
         return 0;
      }
      
      public static function getTimeId(param1:int) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@TimeLimitTID);
         }
         return 0;
      }
   }
}
