package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class PeakBigMeleeXMLInfo
   {
      
      private static var xmlClass:Class = PeakBigMeleeXMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _peakBtGlobalRuleHhashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function PeakBigMeleeXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _xml = XML(new xmlClass());
         _peakBtGlobalRuleHhashMap = new HashMap();
         _xmllist = _xml.elements("PeakBtGlobalRule");
         for each(_loc1_ in _xmllist)
         {
            _peakBtGlobalRuleHhashMap.add(uint(_loc1_.@ID),_loc1_);
         }
      }
      
      public static function getOfficialBanMon(param1:int) : int
      {
         var _loc2_:XMLList = _xml.elements("PeakBtGlobalRule");
         var _loc3_:XML = _loc2_[0];
         var _loc4_:XMLList = _loc3_.elements("WeeklyID");
         return int(_loc4_[param1].@OfficialBanMon);
      }
      
      public static function getHomeAdditionMon(param1:int) : int
      {
         var _loc2_:XMLList = _xml.elements("PeakBtGlobalRule");
         var _loc3_:XML = _loc2_[0];
         return int(_loc3_.elements("WeeklyID")[param1].@HomeAdditionMon);
      }
      
      public static function getNewSeIcon(param1:int) : String
      {
         var _loc2_:XMLList = _xml.elements("PeakBtGlobalRule");
         var _loc3_:XML = _loc2_[0];
         return String(_loc3_.elements("WeeklyID")[param1].@NewSeIcon);
      }
   }
}
