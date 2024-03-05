package com.robot.core.config.xml
{
   public class AnniversaryshopXmlInfo
   {
      
      private static var xmlClass:Class = AnniversaryshopXmlInfo_xmlClass;
      
      private static var _items:Array;
      
      private static var _achieves:Array;
      
      private static var _items1:Array;
      
      private static var _items2:Array;
      
      {
         setup();
      }
      
      public function AnniversaryshopXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc1_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:int = 0;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:XML = null;
         var _loc9_:Object = null;
         var _loc10_:XMLList = null;
         var _loc11_:XML = null;
         var _loc12_:XMLList = null;
         var _loc13_:XML = null;
         var _loc14_:XMLList = null;
         var _loc15_:XML = null;
         _items = [];
         _achieves = [];
         _items1 = [];
         _items2 = [];
         _loc1_ = XML(new xmlClass());
         var _loc2_:XMLList = _loc1_.type;
         for each(_loc3_ in _loc2_)
         {
            if((_loc4_ = int(_loc3_.@ID)) == 1)
            {
               _loc5_ = _loc3_.goods;
               for each(_loc6_ in _loc5_)
               {
                  _items.push(_loc6_);
               }
            }
            else if(_loc4_ == 2)
            {
               _loc7_ = _loc3_.Branch;
               for each(_loc8_ in _loc7_)
               {
                  (_loc9_ = {}).arr = [];
                  _loc9_.id = int(_loc8_.@ID);
                  _loc9_.des = String(_loc8_.@Desc);
                  _loc10_ = _loc8_.Rule;
                  for each(_loc11_ in _loc10_)
                  {
                     _loc9_.arr.push(_loc11_);
                  }
                  _achieves.push(_loc9_);
               }
            }
            else if(_loc4_ == 3)
            {
               _loc12_ = _loc3_.goods;
               for each(_loc13_ in _loc12_)
               {
                  _items1.push(_loc13_);
               }
            }
            else if(_loc4_ == 4)
            {
               _loc14_ = _loc3_.goods;
               for each(_loc15_ in _loc14_)
               {
                  _items2.push(_loc15_);
               }
            }
         }
      }
      
      public static function getItems() : Array
      {
         return _items;
      }
      
      public static function getItems1() : Array
      {
         return _items1;
      }
      
      public static function getItems2() : Array
      {
         return _items2;
      }
      
      public static function getAchieves() : Array
      {
         return _achieves;
      }
   }
}
