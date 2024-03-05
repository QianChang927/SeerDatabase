package com.robot.core.config.xml
{
   public class TreasureChestGiftXMLInfo
   {
      
      private static var XMLClass:Class = TreasureChestGiftXMLInfo_XMLClass;
      
      private static var infoXML:XML = XML(new XMLClass());
       
      
      public function TreasureChestGiftXMLInfo()
      {
         super();
      }
      
      public static function getTreasureInfoXML(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = infoXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               return _loc3_;
            }
         }
         return null;
      }
      
      public static function getTreasureInfo(param1:int) : Object
      {
         var _loc2_:Object = getTreasureInfoXML(param1);
         return {
            "id":int(_loc2_.@id),
            "count":int(_loc2_.@count),
            "type":int(_loc2_.@type),
            "reward":String(_loc2_.@rewardinfo).split(";")
         };
      }
   }
}
