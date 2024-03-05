package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MapIntroXMLInfo
   {
      
      private static var xmlClass:Class = MapIntroXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      {
         setup();
      }
      
      public function MapIntroXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).descendants("map");
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(uint(_loc2_.@id),_loc2_);
         }
      }
      
      public static function getType(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@type"))
         {
            return uint(_loc2_.@type);
         }
         return 0;
      }
      
      public static function getDifficulty(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@difficulty"))
         {
            return uint(_loc2_.@difficulty);
         }
         return 0;
      }
      
      public static function getLevel(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@level"))
         {
            return String(_loc2_.@level);
         }
         return "";
      }
      
      public static function getDes(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@des"))
         {
            return String(_loc2_.@des);
         }
         return "";
      }
      
      public static function getFuns(param1:uint) : Array
      {
         return parseXMLToArr(_dataMap.getValue(param1),"fun");
      }
      
      public static function getTasks(param1:uint) : Array
      {
         return parseXMLToArr(_dataMap.getValue(param1),"task");
      }
      
      public static function getSprites(param1:uint) : Array
      {
         return parseXMLToArr(_dataMap.getValue(param1),"sprite");
      }
      
      public static function getMinerals(param1:uint) : Array
      {
         return parseXMLToArr(_dataMap.getValue(param1),"mineral");
      }
      
      public static function getGames(param1:uint) : Array
      {
         return parseXMLToArr(_dataMap.getValue(param1),"game");
      }
      
      public static function getNonos(param1:uint) : Array
      {
         return parseXMLToArr(_dataMap.getValue(param1),"nono");
      }
      
      public static function getNewgoods(param1:uint) : Array
      {
         return parseXMLToArr(_dataMap.getValue(param1),"goods");
      }
      
      public static function getIcon1(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@icon1"))
         {
            return uint(_loc2_.@icon1);
         }
         return 0;
      }
      
      public static function getIcon2(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@icon2"))
         {
            return uint(_loc2_.@icon2);
         }
         return 0;
      }
      
      public static function getIcon3(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@icon3"))
         {
            return uint(_loc2_.@icon3);
         }
         return 0;
      }
      
      private static function parseXMLToArr(param1:XML, param2:String) : Array
      {
         var _loc4_:XML = null;
         var _loc3_:Array = [];
         for each(_loc4_ in param1.descendants(param2))
         {
            if(Boolean(_loc4_.hasOwnProperty("@name")) && _loc4_.hasOwnProperty("@type") && _loc4_.hasOwnProperty("@target"))
            {
               _loc3_.push({
                  "name":_loc4_.@name,
                  "type":_loc4_.@type,
                  "target":_loc4_.@target
               });
            }
         }
         return _loc3_;
      }
   }
}
