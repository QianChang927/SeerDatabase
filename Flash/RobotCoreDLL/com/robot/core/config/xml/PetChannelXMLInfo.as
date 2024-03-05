package com.robot.core.config.xml
{
   public class PetChannelXMLInfo
   {
      
      private static var xmlClass:Class = PetChannelXMLInfo_xmlClass;
      
      private static var xmlConfigClass:Class = PetChannelXMLInfo_xmlConfigClass;
      
      private static var _xml:XML;
      
      private static var _xmlConfig:XML;
      
      {
         setup();
      }
      
      public function PetChannelXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _xmlConfig = XML(new xmlConfigClass());
      }
      
      public static function getPetGrowXML() : XML
      {
         return _xml.elements("petGrow")[0];
      }
      
      public static function getPetCollectXML() : XML
      {
         return _xml.elements("petCollect")[0];
      }
      
      public static function getPetFightXML() : XML
      {
         return _xml.elements("petFight")[0];
      }
      
      public static function getSeerBeanXML() : XML
      {
         return _xml.elements("seerBean")[0];
      }
      
      public static function getPageXML(param1:uint) : XML
      {
         var id:uint = param1;
         return _xmlConfig.children().(@id == id)[0];
      }
   }
}
