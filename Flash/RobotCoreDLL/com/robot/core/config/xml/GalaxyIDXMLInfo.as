package com.robot.core.config.xml
{
   import com.robot.core.manager.map.config.MapConfig;
   
   public class GalaxyIDXMLInfo
   {
      
      private static var xmlClass:Class = GalaxyIDXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
       
      
      public function GalaxyIDXMLInfo()
      {
         super();
      }
      
      public static function getGalaxyID(param1:uint) : uint
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = xml.descendants("galaxy");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == MapConfig.getSuperMapID(param1))
            {
               return uint(_loc3_.@galaxyID);
            }
         }
         return 0;
      }
   }
}
