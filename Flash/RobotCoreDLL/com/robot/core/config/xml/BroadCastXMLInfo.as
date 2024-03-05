package com.robot.core.config.xml
{
   public class BroadCastXMLInfo
   {
      
      private static var xmlClass:Class = BroadCastXMLInfo_xmlClass;
      
      private static var _broadCastXml:XML;
      
      private static var _data:Array;
       
      
      public function BroadCastXMLInfo()
      {
         super();
      }
      
      public static function get broadCastXml() : XML
      {
         if(_broadCastXml == null)
         {
            _broadCastXml = XML(new xmlClass());
         }
         return _broadCastXml;
      }
   }
}
