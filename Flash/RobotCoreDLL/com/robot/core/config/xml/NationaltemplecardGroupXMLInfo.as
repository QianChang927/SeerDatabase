package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class NationaltemplecardGroupXMLInfo
   {
      
      private static var xmlClass:Class = NationaltemplecardGroupXMLInfo_xmlClass;
      
      private static var _hashMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function NationaltemplecardGroupXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _hashMap = new HashMap();
         _xmllist = _xml.NationaltemplecardGroup;
      }
      
      public static function getCardEffectID(param1:int, param2:int) : int
      {
         var _loc3_:XML = null;
         for each(_loc3_ in _xmllist)
         {
            if(int(_loc3_.@CardGroupID) == param1)
            {
               if(int(_loc3_.@CardDetailID) == param2)
               {
                  return int(_loc3_.@CardEffectID);
               }
            }
         }
         return 0;
      }
   }
}
