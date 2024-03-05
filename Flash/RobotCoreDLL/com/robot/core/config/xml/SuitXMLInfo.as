package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   import org.taomee.utils.ArrayUtil;
   
   public class SuitXMLInfo
   {
      
      private static var xmlClass:Class = SuitXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var map:HashMap;
      
      {
         setup();
      }
      
      public function SuitXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var item:XML = null;
         var array:Array = null;
         _dataMap = new HashMap();
         map = new HashMap();
         var xl:XMLList = XML(new xmlClass()).elements("item");
         for each(item in xl)
         {
            _dataMap.add(uint(item.@id),item);
            array = String(item.@cloths).split(" ");
            array.forEach(function(param1:String, param2:int, param3:Array):void
            {
               param3[param2] = uint(param1);
            });
            array.sort(Array.NUMERIC);
            map.add(array.join(","),item);
         }
      }
      
      public static function getSuitID(param1:Array) : uint
      {
         var str:String;
         var xml:XML;
         var clothIDs:Array = param1;
         var array:Array = clothIDs.slice();
         array = array.filter(function(param1:uint, param2:int, param3:Array):Boolean
         {
            if(ItemXMLInfo.getType(param1) == "bg")
            {
               return false;
            }
            return true;
         });
         array.forEach(function(param1:String, param2:int, param3:Array):void
         {
            param3[param2] = uint(param1);
         });
         array.sort(Array.NUMERIC);
         str = array.join(",");
         xml = map.getValue(str);
         if(xml)
         {
            return xml.@id;
         }
         return 0;
      }
      
      public static function getIsTransform(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@transform) == 1;
         }
         return false;
      }
      
      public static function getCloths(param1:uint) : Array
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@cloths).split(" ");
         }
         return null;
      }
      
      public static function getSuitTranSpeed(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return Number(_loc2_.@tranSpeed);
         }
         return 4;
      }
      
      public static function getDes(param1:int) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@suitdes);
         }
         return "";
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@name);
         }
         return "";
      }
      
      public static function getClothsForItem(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc4_:Array = null;
         var _loc2_:Array = _dataMap.getValues();
         for each(_loc3_ in _loc2_)
         {
            if((_loc4_ = String(_loc3_.@cloths).split(" ")).indexOf(param1.toString()) != -1)
            {
               return _loc4_;
            }
         }
         return null;
      }
      
      public static function getIDForItem(param1:uint) : uint
      {
         var _loc3_:XML = null;
         var _loc4_:Array = null;
         var _loc2_:Array = _dataMap.getValues();
         for each(_loc3_ in _loc2_)
         {
            if((_loc4_ = String(_loc3_.@cloths).split(" ")).indexOf(param1.toString()) != -1)
            {
               return uint(_loc3_.@id);
            }
         }
         return 0;
      }
      
      public static function getIsEliteItems(param1:Array) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:Array = null;
         var _loc6_:uint = 0;
         var _loc2_:Array = [];
         var _loc3_:Array = _dataMap.getValues();
         for each(_loc4_ in _loc3_)
         {
            _loc5_ = String(_loc4_.@cloths).split(" ");
            for each(_loc6_ in param1)
            {
               if(ArrayUtil.arrayContainsValue(_loc5_,_loc6_.toString()))
               {
                  if(getIsElite(_loc4_.@id))
                  {
                     _loc2_.push(uint(_loc4_.@id));
                     break;
                  }
               }
            }
         }
         return _loc2_;
      }
      
      public static function getIDsForItems(param1:Array) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:Array = null;
         var _loc6_:uint = 0;
         var _loc2_:Array = [];
         var _loc3_:Array = _dataMap.getValues();
         for each(_loc4_ in _loc3_)
         {
            _loc5_ = String(_loc4_.@cloths).split(" ");
            for each(_loc6_ in param1)
            {
               if(ArrayUtil.arrayContainsValue(_loc5_,_loc6_.toString()))
               {
                  _loc2_.push(uint(_loc4_.@id));
                  break;
               }
            }
         }
         return _loc2_;
      }
      
      private static function getIsElite(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return Boolean(uint(_loc2_.@elite));
      }
      
      public static function getIsVip(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return Boolean(uint(_loc2_.@VipOnly));
      }
      
      public static function getSuitNameIcon(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@icon"))
         {
            return uint(_loc2_.@icon);
         }
         return 0;
      }
      
      public static function getAllSuitIds() : Array
      {
         return _dataMap.getKeys();
      }
   }
}
