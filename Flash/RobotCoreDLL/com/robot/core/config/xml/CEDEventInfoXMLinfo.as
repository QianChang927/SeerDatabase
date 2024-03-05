package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class CEDEventInfoXMLinfo
   {
      
      private static var xmlClass:Class = CEDEventInfoXMLinfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _DiceID:Array = [];
      
      private static var _EventDesc:Array = [];
      
      private static var _EventSuccTxt:Array = [];
      
      private static var _EventLoseTxt:Array = [];
      
      private static var _EventLeaveTxt:Array = [];
      
      {
         setup();
      }
      
      public function CEDEventInfoXMLinfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("CEDEventInfo");
         for each(_loc1_ in xl)
         {
            _DiceID.push(int(_loc1_.@DiceID));
            _EventDesc.push(String(_loc1_.@EventDesc));
            _EventSuccTxt.push(String(_loc1_.@EventSuccTxt));
            _EventLoseTxt.push(String(_loc1_.@EventLoseTxt));
            _EventLeaveTxt.push(String(_loc1_.@EventLeaveTxt));
         }
      }
      
      public static function get EventDesc() : Array
      {
         return _EventDesc;
      }
      
      public static function get EventSuccTxt() : Array
      {
         return _EventSuccTxt;
      }
      
      public static function get EventLoseTxt() : Array
      {
         return _EventLoseTxt;
      }
      
      public static function get EventLeaveTxt() : Array
      {
         return _EventLeaveTxt;
      }
      
      public static function get DiceID() : Array
      {
         return _DiceID;
      }
   }
}
