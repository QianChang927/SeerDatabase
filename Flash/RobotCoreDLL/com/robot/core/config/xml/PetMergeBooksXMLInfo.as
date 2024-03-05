package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class PetMergeBooksXMLInfo
   {
      
      private static var xmlClass:Class = PetMergeBooksXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function PetMergeBooksXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         _xml = XML(new xmlClass());
         _xmllist = _xml.pet;
         for each(_loc1_ in _xmllist)
         {
            if(_dataMap.containsKey(_loc1_.@id.toString()) == false)
            {
               _dataMap.add(uint(_loc1_.@id),_loc1_);
            }
         }
      }
      
      public static function getPetList() : Array
      {
         var _loc2_:XML = null;
         var _loc1_:Array = new Array();
         for each(_loc2_ in _xmllist)
         {
            _loc1_.push(_loc2_.@id);
         }
         return _loc1_;
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(Boolean(_loc2_) && _loc2_.@name != null)
         {
            return String(_loc2_.@name);
         }
         return null;
      }
      
      public static function getGoToPage(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(Boolean(_loc2_) && _loc2_.@gotoPage != null)
         {
            return uint(_loc2_.@gotoPage);
         }
         return null;
      }
   }
}
