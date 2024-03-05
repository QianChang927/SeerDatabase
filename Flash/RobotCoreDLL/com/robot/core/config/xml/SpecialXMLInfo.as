package com.robot.core.config.xml
{
   import flash.utils.Dictionary;
   import org.taomee.utils.ArrayUtil;
   
   public class SpecialXMLInfo
   {
      
      private static var xmlClass:Class = SpecialXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var array:Array;
      
      private static var dict:Dictionary;
      
      {
         setup();
      }
      
      public function SpecialXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:uint = 0;
         var _loc4_:Array = null;
         array = [];
         dict = new Dictionary();
         var _loc1_:XMLList = xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = uint(_loc2_.@id);
            _loc4_ = String(_loc2_.@cloths).split(",");
            array.push(_loc4_);
            dict[_loc4_] = _loc3_;
         }
      }
      
      public static function getSpecialID(param1:Array) : uint
      {
         var _loc3_:Array = null;
         var _loc2_:uint = 0;
         for each(_loc3_ in array)
         {
            if(ArrayUtil.arraysAreEqual(param1,_loc3_))
            {
               return uint(dict[_loc3_]);
            }
         }
         return _loc2_;
      }
   }
}
