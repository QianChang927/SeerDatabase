package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class AttirerecycleXMLinfo
   {
      
      private static var xmlClass:Class = AttirerecycleXMLinfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xl:XMLList;
      
      private static var _idArr:Array = [];
      
      private static var _itemIdArr:Array = [];
      
      private static var _outputNumArr:Array = [];
      
      {
         setup();
      }
      
      public function AttirerecycleXMLinfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         xl = XML(new xmlClass()).elements("Attirerecycle");
         for each(_loc1_ in xl)
         {
            _idArr.push(int(_loc1_.@ID));
            _itemIdArr.push(int(_loc1_.@ItemID));
            _outputNumArr.push(int(_loc1_.@OutputNum));
         }
      }
      
      public static function getIDXML(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in xl)
         {
            if(int(_loc2_.@ItemID) == param1)
            {
               return int(_loc2_.@ID);
            }
         }
         return 0;
      }
      
      public static function getItemXML(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in xl)
         {
            if(int(_loc2_.@ID) == param1)
            {
               return int(_loc2_.@ItemID);
            }
         }
         return 0;
      }
      
      public static function getOutputNumXML(param1:int) : int
      {
         var _loc2_:XML = null;
         for each(_loc2_ in xl)
         {
            if(int(_loc2_.@ItemID) == param1)
            {
               return int(_loc2_.@OutputNum);
            }
         }
         return 0;
      }
      
      public static function get IdArr() : Array
      {
         return _idArr;
      }
      
      public static function get ItemIdArr() : Array
      {
         return _itemIdArr;
      }
      
      public static function get OutputNumArr() : Array
      {
         return _outputNumArr;
      }
   }
}
