package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class GreenHouse2021XMLInfo
   {
      
      private static var xmlClass:Class = GreenHouse2021XMLInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _catshashMap:HashMap;
      
      private static var _itemshashMap:HashMap;
      
      private static var _seedsshashMap:HashMap;
      
      private static var _lvReqExphashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      private static var _xmllist1:XMLList;
      
      private static var _xmllist2:XMLList;
      
      {
         setup();
      }
      
      public function GreenHouse2021XMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         _xml = XML(new xmlClass());
         _catshashMap = new HashMap();
         _itemshashMap = new HashMap();
         var _loc1_:XML = _xml.elements("Shop")[0];
         _xmllist = _loc1_.elements("Cat");
         for each(_loc2_ in _xmllist)
         {
            _catshashMap.add(uint(_loc2_.@Type),_loc2_);
            _loc5_ = _loc2_.elements("Item");
            for each(_loc6_ in _loc5_)
            {
               _itemshashMap.add(uint(_loc6_.@ID),_loc6_);
            }
         }
         _seedsshashMap = new HashMap();
         _lvReqExphashMap = new HashMap();
         _loc3_ = _xml.elements("Levels")[0];
         _xmllist2 = _loc3_.elements("Level");
         for each(_loc4_ in _xmllist2)
         {
            _lvReqExphashMap.add(uint(_loc4_.@ID),_loc4_);
         }
      }
      
      public static function getItemsByCatType(param1:int, param2:int = 0) : Array
      {
         var _loc6_:XML = null;
         var _loc7_:Object = null;
         var _loc3_:Array = [];
         var _loc4_:XML;
         var _loc5_:XMLList = (_loc4_ = _catshashMap.getValue(param1)).elements("Item");
         for each(_loc6_ in _loc5_)
         {
            (_loc7_ = new Object()).ID = uint(_loc6_.@ID);
            _loc7_.Name = String(_loc6_.@Name);
            _loc7_.Output = uint(_loc6_.@Output);
            _loc7_.NeedItem = uint(_loc6_.@NeedItem);
            _loc7_.NeedCnt = uint(_loc6_.@NeedCnt);
            _loc7_.LimitType = uint(_loc6_.@LimitType);
            _loc7_.LimitNum = uint(_loc6_.@LimitNum);
            _loc7_.LimitKey = uint(_loc6_.@LimitKey);
            _loc7_.VipOnly = uint(_loc6_.@VipOnly);
            _loc7_.Level = uint(_loc6_.@Level);
            _loc7_.Desc = String(_loc6_.@Desc);
            _loc7_.LimitValue = uint(_loc6_.@LimitValue);
            if(_loc7_.VipOnly == param2)
            {
               _loc3_.push(_loc7_);
            }
         }
         return _loc3_;
      }
      
      public static function getItemByItemId(param1:int) : Object
      {
         var _loc2_:XML = _itemshashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.ID = uint(_loc2_.@ID);
         _loc3_.Name = String(_loc2_.@Name);
         _loc3_.Output = uint(_loc2_.@Output);
         _loc3_.NeedItem = uint(_loc2_.@NeedItem);
         _loc3_.NeedCnt = uint(_loc2_.@NeedCnt);
         _loc3_.LimitType = uint(_loc2_.@LimitType);
         _loc3_.LimitNum = uint(_loc2_.@LimitNum);
         _loc3_.LimitKey = uint(_loc2_.@LimitKey);
         _loc3_.VipOnly = uint(_loc2_.@VipOnly);
         _loc3_.Level = uint(_loc2_.@Level);
         _loc3_.Desc = String(_loc2_.@Desc);
         _loc3_.LimitValue = uint(_loc2_.@LimitValue);
         return _loc3_;
      }
      
      public static function getAllSeeds() : Array
      {
         var _loc4_:XML = null;
         var _loc5_:Object = null;
         var _loc1_:Array = [];
         var _loc2_:Array = _seedsshashMap.getValues();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc4_ = _loc2_[_loc3_] as XML;
            (_loc5_ = new Object()).ID = uint(_loc4_.@ID);
            _loc5_.Name = String(_loc4_.@Name);
            _loc5_.MatureTime = uint(_loc4_.@MatureTime);
            _loc5_.ChangeTime = uint(_loc4_.@ChangeTime);
            _loc5_.PlantingExp = uint(_loc4_.@PlantingExp);
            _loc5_.Getway = uint(_loc4_.@Getway);
            _loc5_.Yieldingid = uint(_loc4_.@Yieldingid);
            _loc5_.Output = uint(_loc4_.@Output);
            _loc5_.Rate = uint(_loc4_.@Rate);
            _loc5_.Desc = String(_loc4_.@Desc);
            _loc5_.LimitValue = uint(_loc4_.@LimitValue);
            _loc1_.push(_loc5_);
            _loc3_++;
         }
         return _loc1_;
      }
      
      public static function getSeedInfoByItemId(param1:int) : Object
      {
         var _loc2_:XML = _seedsshashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.ID = uint(_loc2_.@ID);
         _loc3_.Name = String(_loc2_.@Name);
         _loc3_.MatureTime = uint(_loc2_.@MatureTime);
         _loc3_.ChangeTime = uint(_loc2_.@ChangeTime);
         _loc3_.PlantingExp = uint(_loc2_.@PlantingExp);
         _loc3_.Getway = uint(_loc2_.@Getway);
         _loc3_.Yieldingid = uint(_loc2_.@Yieldingid);
         _loc3_.Output = uint(_loc2_.@Output);
         _loc3_.Rate = uint(_loc2_.@Rate);
         _loc3_.Desc = String(_loc2_.@Desc);
         _loc3_.LimitValue = uint(_loc2_.@LimitValue);
         return _loc3_;
      }
      
      public static function getRequireExpBylvid(param1:int) : int
      {
         var _loc2_:XML = _lvReqExphashMap.getValue(param1);
         return int(_loc2_.@NeedExp);
      }
      
      public static function getlvlength() : int
      {
         return _lvReqExphashMap.length;
      }
   }
}
