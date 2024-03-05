package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class TimePasswordXMLInfo
   {
      
      private static var xmlClass:Class = TimePasswordXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function TimePasswordXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         _xml = XML(new xmlClass());
         var _loc1_:XMLList = _xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(_loc2_.@id.toString(),_loc2_);
         }
      }
      
      public static function getIDList() : Array
      {
         return _dataMap.getKeys();
      }
   }
}
