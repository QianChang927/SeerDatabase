package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class MidYearElfFestivalPetXMLInfo
   {
      
      private static var xmlClass:Class = MidYearElfFestivalPetXMLInfo_xmlClass;
      
      public static var configXml:XML;
      
      private static var _fun:Function;
      
      private static var _itemHash:HashMap = new HashMap();
       
      
      public function MidYearElfFestivalPetXMLInfo()
      {
         super();
      }
      
      public static function setup(param1:Function) : void
      {
         var _loc3_:XML = null;
         configXml = XML(new xmlClass());
         _fun = param1;
         var _loc2_:XMLList = configXml.elements("item");
         for each(_loc3_ in _loc2_)
         {
            _itemHash.add(uint(_loc3_.@id),_loc3_);
         }
         if(null != _fun)
         {
            _fun();
         }
      }
      
      public static function getPetId(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = _itemHash.getValue(param1);
         return int(_loc3_.@petId);
      }
      
      public static function getPetArrByQuality(param1:int) : Array
      {
         var _loc4_:XML = null;
         var _loc2_:Array = new Array();
         var _loc3_:int = 0;
         while(_loc3_ < _itemHash.length)
         {
            if((_loc4_ = _itemHash.getValue(_loc3_ + 1)).@quality == param1)
            {
               _loc2_.push(_loc4_.@petId);
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getQualityById(param1:int) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = _itemHash.getValue(param1);
         return int(_loc3_.@quality);
      }
   }
}
