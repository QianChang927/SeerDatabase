package com.robot.core.config.xml
{
   public class QuickStartXMLInfo
   {
      
      private static var _xmlClass:Class = QuickStartXMLInfo__xmlClass;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function QuickStartXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new _xmlClass());
      }
      
      public static function getTreeData() : XML
      {
         var _loc1_:XML = <config/>;
         var _loc2_:XML = _xml.StarUnlocks[0];
         var _loc3_:XML = _xml.Fightings[0];
         var _loc4_:XML = _xml.Systems[0];
         _loc1_.appendChild(_loc2_);
         _loc1_.appendChild(_loc3_);
         _loc1_.appendChild(_loc4_);
         return _loc1_;
      }
      
      public static function getJobTitle() : XML
      {
         return _xml.Titles[0];
      }
      
      public static function getGrowthValue(param1:String) : String
      {
         var xml:XML = null;
         var item:XML = null;
         var type:String = param1;
         xml = _xml.Types[0];
         item = xml.children().(@ID == type)[0];
         return item.@GrowthValue;
      }
      
      public static function getStarTargets(param1:String, param2:String) : XMLList
      {
         var list:XMLList = null;
         var galaxy:XML = null;
         var star:XML = null;
         var galaxyID:String = param1;
         var starID:String = param2;
         list = _xml.descendants("Galaxy");
         galaxy = list.(@ID == galaxyID)[0];
         star = galaxy.children().(@ID == starID)[0];
         return star.children();
      }
      
      public static function getStarXml(param1:String, param2:String) : XML
      {
         var _loc5_:XML = null;
         var _loc3_:XML = _xml.StarUnlocks[0];
         var _loc4_:XMLList = _loc3_.children();
         for each(_loc5_ in _loc4_)
         {
            if(_loc5_.@GalaxyID == param1 && _loc5_.@StarID == param2)
            {
               return _loc5_;
            }
         }
         return null;
      }
   }
}
