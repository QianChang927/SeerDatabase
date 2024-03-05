package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class NewTaiTanHoleXmlInfo
   {
      
      private static var xmlClass:Class = NewTaiTanHoleXmlInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xml:XML;
      
      {
         setup();
      }
      
      public function NewTaiTanHoleXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         xml = XML(new xmlClass());
         var _loc1_:XMLList = xml.rewards[0].reward;
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(int(_loc2_.@id),_loc2_);
         }
      }
      
      public static function getMaxcnt(param1:int) : int
      {
         var cnt:int = 0;
         var hard:int = param1;
         cnt = int(xml.map.(@id == hard)[0].@maxcnt);
         return cnt;
      }
      
      public static function getColcnt(param1:int) : int
      {
         var cnt:int = 0;
         var hard:int = param1;
         cnt = int(xml.map.(@id == hard)[0].@colcnt);
         return cnt;
      }
      
      public static function getRewardXml(param1:int) : XML
      {
         return _dataMap.getValue(param1);
      }
      
      public static function getStepParByHard(param1:int, param2:int) : String
      {
         var step:int = param1;
         var hard:int = param2;
         return String(xml.titanlode.(@step == step)[hard - 1].@passarg);
      }
      
      public static function getStepBossByHard(param1:int, param2:int) : String
      {
         var step:int = param1;
         var hard:int = param2;
         return String(xml.titanlode.(@step == step)[hard - 1].@cltboss);
      }
      
      public static function getRewardId(param1:int, param2:int) : int
      {
         var rid:int = 0;
         var hard:int = param1;
         var id:int = param2;
         rid = int(xml.map.(@id == hard)[0].Show.(@id == id)[0].@rewardid);
         return rid;
      }
   }
}
