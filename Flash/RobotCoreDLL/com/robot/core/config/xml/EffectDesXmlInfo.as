package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class EffectDesXmlInfo
   {
      
      private static var xmlClass:Class = EffectDesXmlInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var xml:XML;
      
      private static var desArr:Array;
       
      
      public function EffectDesXmlInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         _dataMap = new HashMap();
         desArr = [];
         xml = XML(new xmlClass());
         var _loc1_:XMLList = xml.item;
         for each(_loc2_ in _loc1_)
         {
            _dataMap.add(int(_loc2_.@id),_loc2_);
         }
      }
      
      public static function getAllDes() : Array
      {
         var _loc1_:Array = _dataMap.getValues();
         _loc1_.sort(sortOnKind);
         return _loc1_;
      }
      
      private static function sortOnKind(param1:*, param2:*) : Number
      {
         var _loc3_:int = int(param1.@kind);
         var _loc4_:int = int(param2.@kind);
         if(_loc3_ > _loc4_)
         {
            return 1;
         }
         if(_loc3_ < _loc4_)
         {
            return -1;
         }
         return 0;
      }
      
      public static function getEffect(param1:int) : XML
      {
         return _dataMap.getValue(param1);
      }
   }
}
