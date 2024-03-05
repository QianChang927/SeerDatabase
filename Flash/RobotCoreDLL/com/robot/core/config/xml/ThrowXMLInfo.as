package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ThrowXMLInfo
   {
      
      private static var _cls:Class = ThrowXMLInfo__cls;
      
      private static var _dataMap:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function ThrowXMLInfo()
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
      
      public static function getChangeBodyId(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@changeBody"))
            {
               return uint(_loc2_.@changeBody);
            }
         }
         return 0;
      }
      
      public static function getHasEffect(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@hasEffect"))
            {
               return uint(_loc2_.@hasEffect);
            }
         }
         return 0;
      }
      
      public static function getHideModel(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@hideModel"))
            {
               return uint(_loc2_.@hideModel);
            }
         }
         return 0;
      }
   }
}
