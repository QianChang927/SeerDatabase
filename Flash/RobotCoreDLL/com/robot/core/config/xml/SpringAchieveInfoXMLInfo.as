package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class SpringAchieveInfoXMLInfo
   {
      
      private static var xmlClass:Class = SpringAchieveInfoXMLInfo_xmlClass;
      
      private static var _hashMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function SpringAchieveInfoXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _hashMap = new HashMap();
         _xmllist = _xml.SpringAchieveInfo;
      }
      
      public static function getProiconID(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@ID) == param1)
            {
               return int(_loc2_.@Proicon);
            }
         }
         return 0;
      }
      
      public static function getSpeNameBonus(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@ID) == param1)
            {
               return int(_loc2_.@SpeNameBonus);
            }
         }
         return 0;
      }
      
      public static function getSpeNameBonuPeriod(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@SpeNameBonus) == param1)
            {
               return int(_loc2_.@Period);
            }
         }
         return 0;
      }
      
      public static function getProicon(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@SpeNameBonus) == param1)
            {
               return int(_loc2_.@Proicon);
            }
         }
         return 0;
      }
      
      public static function getSpeNameBonuABTest(param1:int) : String
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@SpeNameBonus) == param1)
            {
               return String(_loc2_.@ABTest);
            }
         }
         return "";
      }
      
      public static function getSpeNameBonuAName(param1:int) : String
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@SpeNameBonus) == param1)
            {
               return String(_loc2_.@AName);
            }
         }
         return "";
      }
      
      public static function getSpeNameBonuBTest(param1:int) : String
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@SpeNameBonus) == param1)
            {
               return String(_loc2_.@BTest);
            }
         }
         return "";
      }
      
      public static function getSpeNameBonuID(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@SpeNameBonus) == param1)
            {
               return int(_loc2_.@ID);
            }
         }
         return 0;
      }
      
      public static function getBranchID(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@ID) == param1)
            {
               return int(_loc2_.@BranchID);
            }
         }
         return 0;
      }
      
      public static function getAName(param1:int) : String
      {
         var _loc2_:XML = null;
         for each(_loc2_ in _xmllist)
         {
            if(int(_loc2_.@ID) == param1)
            {
               return String(_loc2_.@AName);
            }
         }
         return "";
      }
   }
}
