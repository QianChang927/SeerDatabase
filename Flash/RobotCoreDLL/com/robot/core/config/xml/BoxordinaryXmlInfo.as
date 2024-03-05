package com.robot.core.config.xml
{
   public class BoxordinaryXmlInfo
   {
      
      private static var xmlClass:Class = BoxordinaryXmlInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var boxes:Array;
      
      {
         setup();
      }
      
      public function BoxordinaryXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xml = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         boxes = [];
         var _loc1_:XMLList = xml.item;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.id = int(_loc2_.@id);
            _loc3_.itemid = int(_loc2_.@itemid);
            _loc3_.tips = String(_loc2_.@tips);
            _loc3_.sold = int(_loc2_.@sold);
            _loc3_.getway = int(_loc2_.@getway);
            _loc3_.bonusid = String(_loc2_.@bonusid);
            boxes.push(_loc3_);
         }
      }
      
      public static function getboxInfoByItemid(param1:int) : Object
      {
         var _loc2_:Object = null;
         for each(_loc2_ in boxes)
         {
            if(_loc2_["itemid"] == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
   }
}
