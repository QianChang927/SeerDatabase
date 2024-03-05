package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class OnlineLibraryXMLInfo
   {
      
      private static var xmlClass:Class = OnlineLibraryXMLInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var _map:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function OnlineLibraryXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         xml = XML(new xmlClass());
      }
      
      public static function getFirstURL() : String
      {
         return xml.@url;
      }
      
      public static function getCategoryList(param1:String) : XMLList
      {
         var v:String = param1;
         return xml.descendants("list").(@SeriesId.toString() == v);
      }
   }
}
