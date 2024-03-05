package com.robot.core.config.xml
{
   public class SuitShowXmlInfo
   {
      
      private static var xmlClass:Class = SuitShowXmlInfo_xmlClass;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function SuitShowXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
      }
      
      public static function getClothList(param1:int, param2:int) : Array
      {
         var _loc3_:XML = _xml.index[param1 - 1];
         var _loc4_:String;
         return (_loc4_ = _loc3_.date[param2 - 1].@cloths).split(" ");
      }
      
      public static function getSuitName(param1:int, param2:int) : String
      {
         var _loc3_:XML = _xml.index[param1 - 1];
         return _loc3_.date[param2 - 1].@name;
      }
   }
}
