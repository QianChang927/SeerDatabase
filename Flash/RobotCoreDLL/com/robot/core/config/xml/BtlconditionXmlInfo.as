package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class BtlconditionXmlInfo
   {
      
      private static var xmlClass:Class = BtlconditionXmlInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xml:XML;
      
      {
         setup();
      }
      
      public function BtlconditionXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         xml = XML(new xmlClass());
         var _loc1_:XMLList = xml.item;
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(int(_loc2_.@id),_loc2_);
         }
      }
      
      public static function getXmlById(param1:int) : XML
      {
         return _dataMap.getValue(param1);
      }
   }
}
