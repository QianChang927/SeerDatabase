package com.robot.core.config.xml
{
   import com.robot.core.ui.alert.Alarm2;
   import org.taomee.ds.HashMap;
   
   public class MarkJackpotXmlInfo
   {
      
      private static var xmlClass:Class = MarkJackpotXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _menusHash:HashMap;
      
      private static var _markhashMap:HashMap;
      
      private static var _shopHashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      private static var _xmllist1:XMLList;
      
      private static var _sortOnArr:Array;
      
      {
         setup();
      }
      
      public function MarkJackpotXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc7_:XMLList = null;
         var _loc8_:XML = null;
         _xml = XML(new xmlClass());
         _menusHash = new HashMap();
         _markhashMap = new HashMap();
         var _loc1_:XMLList = _xml.elements("Menu");
         for each(_loc2_ in _loc1_)
         {
            _menusHash.add(uint(_loc2_.@Level),_loc2_);
            _loc7_ = _loc2_.elements("MintMark");
            for each(_loc8_ in _loc7_)
            {
               _markhashMap.add(uint(_loc8_.@ID),_loc8_);
            }
         }
         _shopHashMap = new HashMap();
         _loc3_ = _xml.elements("Shop");
         _loc5_ = (_loc4_ = _loc3_[0]).elements("MintMark");
         for each(_loc6_ in _loc5_)
         {
            _shopHashMap.add(uint(_loc6_.@ID),_loc6_);
         }
      }
      
      public static function getMarksByLevel(param1:int, param2:Boolean = false) : Array
      {
         var _loc6_:XML = null;
         var _loc7_:Object = null;
         var _loc3_:XML = _menusHash.getValue(param1);
         var _loc4_:XMLList = _loc3_.elements("MintMark");
         var _loc5_:Array = [];
         for each(_loc6_ in _loc4_)
         {
            (_loc7_ = new Object()).id = int(_loc6_.@ID);
            _loc7_.des = String(_loc6_.@Des);
            _loc7_.lv = int(_loc6_.@Level);
            if(_loc6_.@puton != null)
            {
               _loc7_.puton = int(_loc6_.@puton);
            }
            else
            {
               _loc7_.puton = -1;
            }
            if(param1 == 5)
            {
               if(param2)
               {
                  if(_loc7_.puton == 2)
                  {
                     _loc5_.push(_loc7_);
                  }
               }
               else if(_loc7_.puton == 1)
               {
                  _loc5_.push(_loc7_);
               }
            }
            else if(param1 == 4)
            {
               if(_loc7_.puton == 3)
               {
                  _loc5_.push(_loc7_);
               }
            }
            else
            {
               _loc5_.push(_loc7_);
            }
         }
         return _loc5_;
      }
      
      public static function getMarksInfoById(param1:int) : Object
      {
         var _loc2_:XML = _markhashMap.getValue(param1);
         if(_loc2_ == null)
         {
            Alarm2.show("此id：" + param1 + "找不到！");
         }
         var _loc3_:Object = new Object();
         _loc3_.id = int(_loc2_.@ID);
         _loc3_.des = String(_loc2_.@Des);
         _loc3_.lv = int(_loc2_.@Level);
         return _loc3_;
      }
      
      public static function getShopMarks(param1:Boolean = false) : Array
      {
         var _loc5_:XML = null;
         var _loc6_:Object = null;
         var _loc2_:Array = _shopHashMap.getValues();
         var _loc3_:Array = [];
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            _loc5_ = _loc2_[_loc4_] as XML;
            (_loc6_ = new Object()).id = int(_loc5_.@ID);
            _loc6_.des = String(_loc5_.@Des);
            _loc6_.lv = int(_loc5_.@Level);
            _loc6_.puton = int(_loc5_.@puton);
            _loc6_.maxNum = int(_loc5_.@maxNum);
            _loc6_.price = int(_loc5_.@price);
            _loc6_.exchangeId = int(_loc5_.@exchangeId);
            if(param1)
            {
               if(_loc6_.puton == 2)
               {
                  _loc3_.push(_loc6_);
               }
            }
            else if(_loc6_.puton == 1)
            {
               _loc3_.push(_loc6_);
            }
            _loc4_++;
         }
         _loc3_.sortOn("exchangeId",Array.NUMERIC);
         return _loc3_;
      }
      
      public static function getAllShopMarkById(param1:int) : Object
      {
         var _loc2_:XML = _shopHashMap.getValue(param1);
         if(_loc2_ == null)
         {
            Alarm2.show("此id：" + param1 + "找不到！");
         }
         var _loc3_:Object = new Object();
         _loc3_.id = int(_loc2_.@ID);
         _loc3_.des = String(_loc2_.@Des);
         _loc3_.lv = int(_loc2_.@Level);
         _loc3_.puton = int(_loc2_.@puton);
         _loc3_.price = int(_loc2_.@price);
         _loc3_.maxNum = int(_loc2_.@maxNum);
         _loc3_.exchangeId = int(_loc2_.@exchangeId);
         return _loc3_;
      }
   }
}
