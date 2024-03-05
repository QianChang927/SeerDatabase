package com.robot.core.config.xml
{
   public class DiamondTask2022XMLInfo
   {
      
      private static var dailyTaskXMLClass:Class = DiamondTask2022XMLInfo_dailyTaskXMLClass;
      
      private static var dailyTaskXML:XML = XML(new dailyTaskXMLClass());
      
      private static var dailyJumpXMLClass:Class = DiamondTask2022XMLInfo_dailyJumpXMLClass;
      
      private static var dailyJumpXML:XML = XML(new dailyJumpXMLClass());
      
      private static var RetrievexmlClass:Class = DiamondTask2022XMLInfo_RetrievexmlClass;
      
      private static var retrieveXML:XML = XML(new RetrievexmlClass());
      
      private static var GiftxmlClass:Class = DiamondTask2022XMLInfo_GiftxmlClass;
      
      private static var giftXML:XML = XML(new GiftxmlClass());
      
      {
         setup();
      }
      
      public function DiamondTask2022XMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
      }
      
      public static function getDailyTaskXML(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = dailyTaskXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               return _loc3_;
            }
         }
         return null;
      }
      
      public static function getDailyTaskJump(param1:int) : String
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = dailyJumpXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               return _loc3_.@jump;
            }
         }
         return null;
      }
      
      public static function getRetrieveInfo(param1:int) : XML
      {
         var _loc3_:XML = null;
         var _loc4_:Array = null;
         var _loc2_:XMLList = retrieveXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if((_loc4_ = _loc3_.@num.toString().split(","))[0] <= param1 && param1 <= _loc4_[1])
            {
               return _loc3_;
            }
         }
         return null;
      }
      
      public static function getDailyGiftInfo(param1:int) : XML
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = giftXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               return _loc3_;
            }
         }
         return null;
      }
      
      public static function getWeeklyGiftInfo(param1:int) : XML
      {
         var _loc3_:XML = null;
         param1 += 100;
         var _loc2_:XMLList = giftXML.descendants("item");
         for each(_loc3_ in _loc2_)
         {
            if(_loc3_.@id == param1.toString())
            {
               return _loc3_;
            }
         }
         return null;
      }
   }
}
