package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class TempleOfTibetanTreasureXMLInfo
   {
      
      private static var _cls:Class = TempleOfTibetanTreasureXMLInfo__cls;
      
      private static var _dataMap:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function TempleOfTibetanTreasureXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:String = null;
         var _loc1_:XMLList = XML(new _cls()).elements("PersonGame").elements("Game");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = _loc2_.@panelName;
            _dataMap.add(_loc3_,_loc2_);
         }
      }
      
      public static function getGameInfo(param1:String) : XML
      {
         return _dataMap.getValue(param1);
      }
   }
}
