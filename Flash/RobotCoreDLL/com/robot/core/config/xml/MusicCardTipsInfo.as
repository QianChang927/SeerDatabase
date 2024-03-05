package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MusicCardTipsInfo
   {
      
      private static var xmlClass:Class = MusicCardTipsInfo_xmlClass;
      
      private static var xl:XML;
      
      private static var tipsMap:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function MusicCardTipsInfo()
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
         var _loc1_:XMLList = xl.MusicDreamWorldTips;
         for each(_loc2_ in _loc1_)
         {
            tipsMap.add(int(_loc2_.@ID),[_loc2_.@Name,_loc2_.@Tips1,_loc2_.@Tips2,_loc2_.@Tips3]);
         }
      }
      
      public static function getTips(param1:int, param2:int) : String
      {
         var _loc3_:Array = tipsMap.getValue(param1);
         if(param2 <= 2)
         {
            return _loc3_[0] + "\n" + _loc3_[1];
         }
         if(param2 <= 4)
         {
            return _loc3_[0] + "\n" + _loc3_[2];
         }
         return _loc3_[0] + "\n" + _loc3_[3];
      }
   }
}
