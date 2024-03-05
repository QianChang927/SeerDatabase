package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class CapsuleCompoundXMLInfo
   {
      
      private static var xmlClass:Class = CapsuleCompoundXMLInfo_xmlClass;
      
      private static var _itemMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function CapsuleCompoundXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _itemMap = new HashMap();
         _xml = XML(new xmlClass());
         _xmllist = _xml.title;
         for each(_loc1_ in _xmllist)
         {
            _itemMap.add(uint(_loc1_.@id),_loc1_);
         }
      }
      
      public static function getItemList() : XMLList
      {
         return _xmllist;
      }
      
      public static function getItemIdById(param1:uint) : uint
      {
         var _loc2_:XML = _itemMap.getValue(param1.toString());
         if(_loc2_ == null)
         {
            return 0;
         }
         return uint(_loc2_.@itemID);
      }
      
      public static function getItemNameById(param1:uint) : String
      {
         var _loc2_:XML = _itemMap.getValue(param1.toString());
         if(_loc2_ == null)
         {
            return "";
         }
         return _loc2_.@name;
      }
      
      public static function getDescribeById(param1:uint) : String
      {
         var _loc2_:XML = _itemMap.getValue(param1.toString());
         if(_loc2_ == null)
         {
            return "";
         }
         return _loc2_.describe;
      }
      
      public static function getConisById(param1:uint) : uint
      {
         var _loc2_:XML = _itemMap.getValue(param1.toString());
         if(_loc2_ == null)
         {
            return 0;
         }
         return uint(_loc2_.@coins);
      }
      
      public static function getTypeById(param1:uint) : uint
      {
         var _loc2_:XML = _itemMap.getValue(param1.toString());
         if(_loc2_ == null)
         {
            return 0;
         }
         return uint(_loc2_.@tpye);
      }
      
      public static function getGoOpenById(param1:uint) : String
      {
         var _loc2_:XML = _itemMap.getValue(param1.toString());
         if(_loc2_ == null)
         {
            return "";
         }
         return _loc2_.@goOpen;
      }
      
      public static function getXML() : XML
      {
         return _xml;
      }
   }
}
