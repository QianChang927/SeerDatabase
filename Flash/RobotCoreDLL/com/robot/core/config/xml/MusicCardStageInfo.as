package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MusicCardStageInfo
   {
      
      private static var xmlClass:Class = MusicCardStageInfo_xmlClass;
      
      private static var xl:XML;
      
      private static var map:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function MusicCardStageInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         xl = XML(new xmlClass());
         parseXml();
      }
      
      public static function parseXml() : void
      {
         var _loc2_:XML = null;
         var _loc1_:XMLList = xl.MusicDreamWorldStageInfo;
         for each(_loc2_ in _loc1_)
         {
            map.add(int(_loc2_.@StageID) * 10 + _loc2_.@StageSubID,[_loc2_.@MapName,_loc2_.@StageName]);
         }
      }
      
      public static function getStageInfo(param1:int) : Array
      {
         return map.getValue(param1);
      }
   }
}
