package com.robot.core.config.xml
{
   import com.robot.core.zip.PreloadZipXMLController;
   import org.taomee.ds.HashMap;
   
   public class PeakJihadLevelRulesXMLInfo
   {
      
      public static var configXml:XML;
      
      private static var _fun:Function;
      
      private static var _itemHash:HashMap = new HashMap();
       
      
      public function PeakJihadLevelRulesXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         PreloadZipXMLController.getXML("peakCrusade_levelRules.xml",function(param1:*):void
         {
            var _loc3_:XML = null;
            configXml = new XML(param1);
            var _loc2_:XMLList = configXml.elements("item");
            for each(_loc3_ in _loc2_)
            {
               _itemHash.add(uint(_loc3_.@starLv),_loc3_);
            }
            if(null != _fun)
            {
               _fun();
            }
         });
      }
      
      public static function getLadderLvByStarlv(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:int = 0;
         if(param1 <= 100)
         {
            _loc3_ = _itemHash.getValue(param1);
            _loc2_ = int(_loc3_.@ladderLv);
         }
         return _loc2_;
      }
      
      public static function getStarByStarlv(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:int = 0;
         if(param1 <= 100)
         {
            _loc3_ = _itemHash.getValue(param1);
            _loc2_ = int(_loc3_.@star);
         }
         else
         {
            _loc2_ = 15 + (param1 - 100);
         }
         return _loc2_;
      }
      
      public static function getTitleByStarlv(param1:int) : String
      {
         var _loc3_:XML = null;
         var _loc2_:String = "";
         if(param1 <= 100)
         {
            _loc3_ = _itemHash.getValue(param1);
            _loc2_ = _loc3_.@title;
         }
         else
         {
            _loc2_ = "宇宙圣皇";
         }
         return _loc2_;
      }
      
      public static function getDanNumberByStarlv(param1:int) : int
      {
         var _loc3_:XML = null;
         var _loc2_:int = 0;
         if(param1 <= 100)
         {
            _loc3_ = _itemHash.getValue(param1);
            _loc2_ = int(_loc3_.@danNumber);
         }
         return _loc2_;
      }
   }
}
