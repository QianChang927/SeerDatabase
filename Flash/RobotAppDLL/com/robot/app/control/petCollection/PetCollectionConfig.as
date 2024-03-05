package com.robot.app.control.petCollection
{
   public class PetCollectionConfig
   {
      
      private static var _cls:Class = PetCollectionConfig__cls;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function PetCollectionConfig()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new _cls());
      }
      
      public static function getConfig() : XML
      {
         return _xml;
      }
      
      public static function getPetConfig(param1:uint) : XML
      {
         var xml:XML = null;
         var id:uint = param1;
         xml = _xml.children().(@id == id.toString())[0];
         return xml;
      }
   }
}
