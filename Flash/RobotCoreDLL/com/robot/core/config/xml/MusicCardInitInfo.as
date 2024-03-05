package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MusicCardInitInfo
   {
      
      private static var xmlClass:Class = MusicCardInitInfo_xmlClass;
      
      private static var xl:XML;
      
      private static var map:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function MusicCardInitInfo()
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
         var _loc1_:XMLList = xl.MusicDreamWorldSpiritInfo;
         for each(_loc2_ in _loc1_)
         {
            map.add(int(_loc2_.@SpiritID),[_loc2_.@SpiritInitHP,_loc2_.@SpiritInitAttack]);
         }
      }
      
      public static function getAtt(param1:int) : int
      {
         if(param1 <= 0)
         {
            return 0;
         }
         return map.getValue(param1)[1];
      }
      
      public static function getHp(param1:int) : int
      {
         if(param1 <= 0)
         {
            return 0;
         }
         return map.getValue(param1)[0];
      }
   }
}
