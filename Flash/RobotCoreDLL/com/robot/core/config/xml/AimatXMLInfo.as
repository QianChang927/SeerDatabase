package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class AimatXMLInfo
   {
      
      private static var _cls:Class = AimatXMLInfo__cls;
      
      private static var _dataMap:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function AimatXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:uint = 0;
         var _loc1_:XMLList = XML(new _cls()).elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = uint(_loc2_.@id);
            _dataMap.add(_loc3_,_loc2_);
         }
      }
      
      public static function getAimatID(param1:Array) : uint
      {
         var cloths:Array = param1;
         var id:uint = 10000;
         _dataMap.eachValue(function(param1:XML):void
         {
            var _loc3_:String = null;
            var _loc2_:Array = param1.@cloths.split("|");
            for each(_loc3_ in _loc2_)
            {
               if(cloths.indexOf(uint(_loc3_)) != -1)
               {
                  id = uint(param1.@id);
               }
            }
         });
         return id;
      }
      
      public static function getAimatType(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@type"))
            {
               return uint(_loc2_.@type);
            }
         }
         return 1;
      }
      
      public static function getAimatState(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@state"))
            {
               return uint(_loc2_.@state);
            }
         }
         return 0;
      }
   }
}
