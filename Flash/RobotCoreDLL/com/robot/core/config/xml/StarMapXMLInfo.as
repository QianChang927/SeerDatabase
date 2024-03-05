package com.robot.core.config.xml
{
   public class StarMapXMLInfo
   {
      
      private static var xmlClass:Class = StarMapXMLInfo_xmlClass;
      
      private static var _xmlList:XMLList;
      
      {
         setup();
      }
      
      public function StarMapXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xmlList = XML(new xmlClass()).elements("scene");
      }
      
      public static function hasStarMap(param1:uint) : Boolean
      {
         if(getSceneXml(param1))
         {
            return true;
         }
         return false;
      }
      
      public static function getSceneXml(param1:uint) : XML
      {
         var list:XMLList = null;
         var id:uint = param1;
         list = _xmlList.(@id == id.toString());
         if(list)
         {
            return list[0];
         }
         return null;
      }
   }
}
