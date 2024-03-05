package com.robot.core.manager.map
{
   import org.taomee.ds.HashMap;
   
   public class MapType
   {
      
      public static const HOOM:int = 0;
      
      public static const CAMP:int = 101;
      
      public static const HEAD:int = 102;
      
      public static const PK_TYPE:uint = 103;
      
      public static const GREEN_HOUSE:int = 106;
      
      public static const FB:int = 201;
      
      public static const BATTLEROYALE:uint = 221;
      
      public static const ROOM_FIGHT:uint = 222;
      
      public static const SPACE_ARENA:uint = 223;
      
      public static const FIGHT_ARENA:uint = 224;
      
      private static var hashMap:HashMap;
      
      {
         setup();
      }
      
      public function MapType()
      {
         super();
      }
      
      private static function setup() : void
      {
         hashMap = new HashMap();
         hashMap.add(501,201);
         hashMap.add(502,202);
      }
      
      public static function getFbTypeID(param1:uint) : uint
      {
         return hashMap.getValue(param1);
      }
   }
}
