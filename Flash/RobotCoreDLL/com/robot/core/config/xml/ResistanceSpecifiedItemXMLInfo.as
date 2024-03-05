package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class ResistanceSpecifiedItemXMLInfo
   {
      
      private static var xmlClass:Class = ResistanceSpecifiedItemXMLInfo_xmlClass;
      
      private static var xml:XML = XML(new xmlClass());
      
      private static var itemMap:HashMap = new HashMap();
      
      {
         setup();
      }
      
      public function ResistanceSpecifiedItemXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc1_:XMLList = xml.elements("item");
         for each(_loc2_ in _loc1_)
         {
            itemMap.add(int(_loc2_.@ID),{
               "ExchangeCtrlCnt":int(_loc2_.@ExchangeCtrlCnt),
               "ExchangeCtrlSp":String(_loc2_.@ExchangeCtrlSp),
               "TargetCtrlCnt":int(_loc2_.@TargetCtrlCnt),
               "TargetCtrlSp":String(_loc2_.@TargetCtrlSp),
               "ExchangeWeakCnt":int(_loc2_.@ExchangeWeakCnt),
               "ExchangeWeakSp":String(_loc2_.@ExchangeWeakSp),
               "TargetWeakCnt":int(_loc2_.@TargetWeakCnt),
               "TargetWeakSp":String(_loc2_.@TargetWeakSp)
            });
         }
      }
      
      public static function getAllItem() : Array
      {
         return itemMap.getKeys();
      }
      
      public static function isMultSelect(param1:int) : Boolean
      {
         var _loc2_:Object = itemMap.getValue(param1);
         return !(_loc2_.ExchangeCtrlCnt == 0 && _loc2_.TargetCtrlCnt == 0 && _loc2_.ExchangeWeakCnt == 0 && _loc2_.TargetWeakCnt == 0 && _loc2_.ExchangeCtrlSp == " " && _loc2_.TargetCtrlSp == " " && _loc2_.ExchangeWeakSp == " " && _loc2_.TargetWeakSp == " ");
      }
      
      public static function getMultSelectData(param1:int) : Object
      {
         return itemMap.getValue(param1);
      }
      
      public static function isResistanceSpecifiedItem(param1:int) : Boolean
      {
         return itemMap.containsKey(param1);
      }
   }
}
