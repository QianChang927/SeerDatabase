package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MusicCardNameXMLInfo
   {
      
      private static var xmlClass:Class = MusicCardNameXMLInfo_xmlClass;
      
      private static var xl:XML;
      
      private static var nameMap:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function MusicCardNameXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xl = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc1_:XMLList = xl.MusicCardNameInfo;
         for each(_loc2_ in _loc1_)
         {
            nameMap.add(int(_loc2_.@id),[_loc2_.@start,_loc2_.@end]);
         }
      }
      
      public static function getName(param1:int) : Array
      {
         return nameMap.getValue(param1);
      }
      
      public static function getFullName(param1:int, param2:int) : String
      {
         return nameMap.getValue(param1)[0] + nameMap.getValue(param2)[1];
      }
   }
}
