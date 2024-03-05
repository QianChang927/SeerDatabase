package com.robot.core.config.xml
{
   public class Exp_towerXmlInfo
   {
      
      private static var xmlClass:Class = Exp_towerXmlInfo_xmlClass;
      
      private static var xml:XML;
      
      private static var levels:Array;
      
      {
         setup();
      }
      
      public function Exp_towerXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xml = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         levels = [];
         var _loc1_:XMLList = xml.item;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = {};
            _loc3_.id = int(_loc2_.@id);
            _loc3_.rewardtype = String(_loc2_.@rewardtype);
            _loc3_.rewardid = String(_loc2_.@rewardid);
            _loc3_.rewardnum = String(_loc2_.@rewardnum);
            _loc3_.raidunlocktext = String(_loc2_.@raidunlocktext);
            _loc3_.raidunlockarg = String(_loc2_.@raidunlockarg);
            _loc3_.bosslist = String(_loc2_.@bosslist);
            _loc3_.sebossid = String(_loc2_.@sebossid);
            levels.push(_loc3_);
         }
      }
      
      public static function getItem(param1:int) : Object
      {
         var _loc2_:Object = null;
         for each(_loc2_ in levels)
         {
            if(_loc2_["id"] == param1)
            {
               return _loc2_;
            }
         }
         return null;
      }
      
      public static function getItems() : Array
      {
         return levels;
      }
   }
}
