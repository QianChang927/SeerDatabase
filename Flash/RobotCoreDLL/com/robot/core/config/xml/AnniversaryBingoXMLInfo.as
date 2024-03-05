package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class AnniversaryBingoXMLInfo
   {
      
      private static var xmlClass:Class = AnniversaryBingoXMLInfo_xmlClass;
      
      private static var _hashMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function AnniversaryBingoXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         _xml = XML(new xmlClass());
         _hashMap = new HashMap();
         _xmllist = _xml.Bingo;
      }
      
      public static function getCurArrXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@PoolID == param1)
            {
               _loc2_.push(_loc3_.@realID);
            }
         }
         return _loc2_;
      }
      
      public static function getCurArrNameXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@PoolID == param1)
            {
               _loc2_.push(_loc3_.@Name);
            }
         }
         return _loc2_;
      }
      
      public static function getCurArrNumML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@PoolID == param1)
            {
               _loc2_.push(_loc3_.@number);
            }
         }
         return _loc2_;
      }
      
      public static function getCurArrCountXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@PoolID == param1)
            {
               _loc2_.push(_loc3_.@count);
            }
         }
         return _loc2_;
      }
      
      public static function getCurArrQualityXML(param1:int) : Array
      {
         var _loc3_:XML = null;
         var _loc2_:Array = [];
         for each(_loc3_ in _xmllist)
         {
            if(_loc3_.@PoolID == param1)
            {
               _loc2_.push(_loc3_.@Quality);
            }
         }
         return _loc2_;
      }
   }
}
