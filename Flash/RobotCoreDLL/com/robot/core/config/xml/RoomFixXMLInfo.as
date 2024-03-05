package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class RoomFixXMLInfo
   {
      
      private static var xmlClass:Class = RoomFixXMLInfo_xmlClass;
      
      private static var _hashMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function RoomFixXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _hashMap = new HashMap();
         _xmllist = _xml.item;
      }
      
      public static function getName(param1:int) : String
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@id) == param1)
            {
               return String(_loc2_.@name);
            }
         }
         return "";
      }
      
      public static function getType(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@id) == param1)
            {
               return int(_loc2_.@type);
            }
         }
         return 0;
      }
      
      public static function getMeiguan(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@id) == param1)
            {
               return int(_loc2_.@meiguan);
            }
         }
         return 0;
      }
      
      public static function getShushi(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@id) == param1)
            {
               return int(_loc2_.@shushi);
            }
         }
         return 0;
      }
      
      public static function getGongneng(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@id) == param1)
            {
               return int(_loc2_.@gongneng);
            }
         }
         return 0;
      }
      
      public static function getLocX(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@id) == param1)
            {
               return int(_loc2_.@locX);
            }
         }
         return 0;
      }
      
      public static function getLocY(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@id) == param1)
            {
               return int(_loc2_.@locY);
            }
         }
         return 0;
      }
      
      public static function getRound(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@id) == param1)
            {
               return int(_loc2_.@round);
            }
         }
         return 0;
      }
   }
}
