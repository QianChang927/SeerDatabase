package com.robot.core.config.xml
{
   public class GameStorageXMLInfo
   {
      
      private static var xmlClass:Class = GameStorageXMLInfo_xmlClass;
      
      private static var _xml:XML;
      
      {
         setup();
      }
      
      public function GameStorageXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
      }
      
      public static function getRecomGame() : XML
      {
         return _xml.descendants("recommend")[0];
      }
      
      public static function isTabHot(param1:uint) : Boolean
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = _xml.descendants("galaxy");
         for each(_loc3_ in _loc2_)
         {
            if(uint(_loc3_.@id) == param1)
            {
               return uint(_loc3_.@isHot) == 1;
            }
         }
         return false;
      }
      
      public static function isTabNew(param1:uint) : Boolean
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = _xml.descendants("galaxy");
         for each(_loc3_ in _loc2_)
         {
            if(uint(_loc3_.@id) == param1)
            {
               return uint(_loc3_.@isNew) == 1;
            }
         }
         return false;
      }
      
      public static function getGalaxyGameListById(param1:uint) : XMLList
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = _xml.descendants("galaxy");
         for each(_loc3_ in _loc2_)
         {
            if(uint(_loc3_.@id) == param1)
            {
               return _loc3_.descendants("game");
            }
         }
         return null;
      }
      
      public static function getXMLByGameId(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc2_:XMLList = _xml.descendants("game");
         for each(_loc3_ in _loc2_)
         {
            if(uint(_loc3_.@id == param1))
            {
               return _loc3_;
            }
         }
         return null;
      }
   }
}
