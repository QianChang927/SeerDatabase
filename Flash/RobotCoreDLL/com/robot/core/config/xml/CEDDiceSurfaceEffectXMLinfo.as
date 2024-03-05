package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class CEDDiceSurfaceEffectXMLinfo
   {
      
      private static var xmlClass:Class = CEDDiceSurfaceEffectXMLinfo_xmlClass;
      
      private static var _hashMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function CEDDiceSurfaceEffectXMLinfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _hashMap = new HashMap();
         _xmllist = _xml.CEDDiceSurfaceEffect;
      }
      
      public static function getNeedUpgradePoint(param1:int, param2:int, param3:int) : int
      {
         var _loc4_:XML = null;
         for each(_loc4_ in _xmllist)
         {
            if(int(_loc4_.@DiceID) == param1)
            {
               if(int(_loc4_.@SurfaceID) == param2)
               {
                  if(int(_loc4_.@EffectID) == param3)
                  {
                     return int(_loc4_.@NeedUpgradePoint);
                  }
               }
            }
         }
         return 0;
      }
      
      public static function getUpgradeEffectIDs(param1:int, param2:int, param3:int) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:String = null;
         var _loc4_:Array = [];
         for each(_loc5_ in _xmllist)
         {
            if(int(_loc5_.@DiceID) == param1)
            {
               if(int(_loc5_.@SurfaceID) == param2)
               {
                  if(int(_loc5_.@EffectID) == param3)
                  {
                     return (_loc6_ = _loc5_.@UpgradeEffectIDs).split(",");
                  }
               }
            }
         }
         return null;
      }
      
      public static function getSurfaceEffectIntro(param1:int, param2:int) : String
      {
         var _loc3_:XML = null;
         for each(_loc3_ in _xmllist)
         {
            if(int(_loc3_.@DiceID) == param1)
            {
               if(int(_loc3_.@EffectID) == param2)
               {
                  return String(_loc3_.@SurfaceEffectIntro);
               }
            }
         }
         return "";
      }
      
      public static function getSurfaceEffectVontent(param1:int, param2:int) : String
      {
         var _loc3_:XML = null;
         for each(_loc3_ in _xmllist)
         {
            if(int(_loc3_.@DiceID) == param1)
            {
               if(int(_loc3_.@EffectID) == param2)
               {
                  return String(_loc3_.@SurfaceEffectVontent);
               }
            }
         }
         return "";
      }
   }
}
