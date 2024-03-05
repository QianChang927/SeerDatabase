package com.robot.core.config
{
   import flash.geom.Point;
   import org.taomee.ds.HashMap;
   
   public class GuardXMLInfo
   {
      
      private static var xmlClass:Class = GuardXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      {
         setup();
      }
      
      public function GuardXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         _dataMap = new HashMap();
         _xml = XML(new xmlClass());
         _xmllist = _xml.map;
         for each(_loc1_ in _xmllist)
         {
            if(_dataMap.containsKey(_loc1_.@id.toString()) == false)
            {
               _dataMap.add(uint(_loc1_.@id),_loc1_);
            }
         }
      }
      
      public static function getDefaultPos(param1:uint) : Point
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            return new Point(int(_loc2_.@x),int(_loc2_.@y));
         }
         return null;
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            return _loc2_.@name;
         }
         return null;
      }
      
      public static function getSpt(param1:uint) : uint
      {
         var _loc3_:String = null;
         var _loc2_:XML = _dataMap.getValue(param1.toString());
         if(_loc2_)
         {
            _loc3_ = _loc2_.@spt;
            var _loc4_:Array = _loc3_.split("|");
            return uint(_loc4_[Math.floor(Math.random() * _loc4_.length)]);
         }
         return null;
      }
   }
}
