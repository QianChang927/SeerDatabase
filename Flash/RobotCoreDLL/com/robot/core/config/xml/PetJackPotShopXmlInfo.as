package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.JackPotShopInfo;
   import com.robot.core.manager.SystemTimerManager;
   import org.taomee.ds.HashMap;
   
   public class PetJackPotShopXmlInfo
   {
      
      private static var xmlClass:Class = PetJackPotShopXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var xmlClass1:Class = PetJackPotShopXmlInfo_xmlClass1;
      
      private static var _blueItemHashMap:HashMap;
      
      private static var _buleStartTime:String;
      
      private static var _buleEndTime:String;
      
      private static var _purpleItemHashMap:HashMap;
      
      {
         setup();
      }
      
      public function PetJackPotShopXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         if(SystemTimerManager.splitVersion2022() == 1)
         {
            _xml = XML(new xmlClass1());
         }
         else
         {
            _xml = XML(new xmlClass());
         }
         var _loc1_:XMLList = _xml.elements("BlueChipShops");
         _buleStartTime = _loc1_[0].@Opentime;
         _buleEndTime = _loc1_[0].@Endtime;
         _blueItemHashMap = new HashMap();
         var _loc2_:XMLList = _loc1_[0].elements("BulechipShop");
         for each(_loc3_ in _loc2_)
         {
            _blueItemHashMap.add(uint(_loc3_.@ID),_loc3_);
         }
         _loc4_ = _xml.elements("PurpleChipShops");
         _purpleItemHashMap = new HashMap();
         _loc5_ = _loc4_[0].elements("PurpleChipShop");
         for each(_loc6_ in _loc5_)
         {
            _purpleItemHashMap.add(uint(_loc6_.@ID),_loc6_);
         }
      }
      
      public static function getAllInTimeBuleItems() : Array
      {
         var _loc4_:XML = null;
         var _loc5_:JackPotShopInfo = null;
         var _loc1_:Array = _blueItemHashMap.getValues();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc4_ = _loc1_[_loc3_] as XML;
            if(getIsinTime(String(_loc4_.@Opentime),String(_loc4_.@Endtime)))
            {
               _loc5_ = getBuleItemInfoByID(int(_loc4_.@ID));
               _loc2_.push(_loc5_);
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getBuleShopkinds() : Array
      {
         var _loc4_:JackPotShopInfo = null;
         var _loc1_:Array = getAllInTimeBuleItems();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc4_ = _loc1_[_loc3_] as JackPotShopInfo;
            if(_loc2_.indexOf(int(_loc4_.shopkind)) == -1)
            {
               _loc2_.push(int(_loc4_.shopkind));
            }
            _loc3_++;
         }
         _loc2_.sort(Array.NUMERIC);
         return _loc2_;
      }
      
      public static function getAllBuleShopkinds() : Array
      {
         var _loc6_:XML = null;
         var _loc7_:JackPotShopInfo = null;
         var _loc8_:JackPotShopInfo = null;
         var _loc1_:Array = _blueItemHashMap.getValues();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc6_ = _loc1_[_loc3_] as XML;
            _loc7_ = getBuleItemInfoByID(int(_loc6_.@ID));
            _loc2_.push(_loc7_);
            _loc3_++;
         }
         var _loc4_:Array = [];
         var _loc5_:int = 0;
         while(_loc5_ < _loc2_.length)
         {
            _loc8_ = _loc2_[_loc5_] as JackPotShopInfo;
            if(_loc4_.indexOf(int(_loc8_.shopkind)) == -1)
            {
               _loc4_.push(int(_loc8_.shopkind));
            }
            _loc5_++;
         }
         _loc4_.sort(Array.NUMERIC);
         return _loc4_;
      }
      
      public static function getBuleItemInfoByID(param1:int) : JackPotShopInfo
      {
         var _loc2_:XML = _blueItemHashMap.getValue(param1);
         var _loc3_:JackPotShopInfo = new JackPotShopInfo();
         _loc3_.ID = int(_loc2_.@ID);
         _loc3_.shopkind = int(_loc2_.@shopkind);
         _loc3_.productType = int(_loc2_.@productType);
         var _loc4_:String;
         var _loc5_:Array = (_loc4_ = String(_loc2_.@productID)).split("_");
         _loc3_.productIDs = [];
         var _loc6_:int = 0;
         while(_loc6_ < _loc5_.length)
         {
            _loc3_.productIDs.push(int(_loc5_[_loc6_]));
            _loc6_++;
         }
         _loc3_.productName = String(_loc2_.@productName);
         _loc3_.productAmount = int(_loc2_.@productAmount);
         _loc3_.Needchips = int(_loc2_.@Needchips);
         _loc3_.productPrice = int(_loc2_.@productPrice);
         _loc3_.Opentime = String(_loc2_.@Opentime);
         _loc3_.Endtime = String(_loc2_.@Endtime);
         _loc3_.buyMax = int(_loc2_.@buyMax);
         _loc3_.exchangeId = int(_loc2_.@exchangeId);
         _loc3_.forever = int(_loc2_.@forever);
         _loc3_.frameIndex = int(_loc2_.@frameIndex);
         return _loc3_;
      }
      
      public static function getBuleItemByShopKindId(param1:int) : Array
      {
         var _loc5_:JackPotShopInfo = null;
         var _loc2_:Array = getAllInTimeBuleItems();
         var _loc3_:Array = [];
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            _loc5_ = _loc2_[_loc4_] as JackPotShopInfo;
            if(int(_loc5_.shopkind) == param1)
            {
               _loc3_.push(_loc5_);
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function getAllInTimePurpleItems() : Array
      {
         var _loc4_:XML = null;
         var _loc5_:JackPotShopInfo = null;
         var _loc1_:Array = _purpleItemHashMap.getValues();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc4_ = _loc1_[_loc3_] as XML;
            if(getIsinTime(String(_loc4_.@Opentime),String(_loc4_.@Endtime)))
            {
               _loc5_ = getPurpleItemInfoByID(int(_loc4_.@ID));
               _loc2_.push(_loc5_);
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getPurpleShopkinds() : Array
      {
         var _loc4_:JackPotShopInfo = null;
         var _loc1_:Array = getAllInTimePurpleItems();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc4_ = _loc1_[_loc3_] as JackPotShopInfo;
            if(_loc2_.indexOf(int(_loc4_.shopkind)) == -1)
            {
               _loc2_.push(int(_loc4_.shopkind));
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getAllPurpleShopkinds() : Array
      {
         var _loc6_:XML = null;
         var _loc7_:JackPotShopInfo = null;
         var _loc8_:JackPotShopInfo = null;
         var _loc1_:Array = _purpleItemHashMap.getValues();
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc6_ = _loc1_[_loc3_] as XML;
            _loc7_ = getPurpleItemInfoByID(int(_loc6_.@ID));
            _loc2_.push(_loc7_);
            _loc3_++;
         }
         var _loc4_:Array = [];
         var _loc5_:int = 0;
         while(_loc5_ < _loc2_.length)
         {
            _loc8_ = _loc2_[_loc5_] as JackPotShopInfo;
            if(_loc4_.indexOf(int(_loc8_.shopkind)) == -1)
            {
               _loc4_.push(int(_loc8_.shopkind));
            }
            _loc5_++;
         }
         _loc4_.sort(Array.NUMERIC);
         return _loc4_;
      }
      
      public static function getPurpleItemInfoByID(param1:int) : JackPotShopInfo
      {
         var _loc2_:XML = _purpleItemHashMap.getValue(param1);
         var _loc3_:JackPotShopInfo = new JackPotShopInfo();
         _loc3_.ID = int(_loc2_.@ID);
         _loc3_.shopkind = int(_loc2_.@shopkind);
         _loc3_.productType = int(_loc2_.@productType);
         var _loc4_:String;
         var _loc5_:Array = (_loc4_ = String(_loc2_.@productID)).split("_");
         _loc3_.productIDs = [];
         var _loc6_:int = 0;
         while(_loc6_ < _loc5_.length)
         {
            _loc3_.productIDs.push(int(_loc5_[_loc6_]));
            _loc6_++;
         }
         _loc3_.productName = String(_loc2_.@productName);
         _loc3_.productAmount = int(_loc2_.@productAmount);
         _loc3_.Needchips = int(_loc2_.@Needchips);
         _loc3_.productPrice = int(_loc2_.@productPrice);
         _loc3_.Opentime = String(_loc2_.@Opentime);
         _loc3_.Endtime = String(_loc2_.@Endtime);
         _loc3_.buyMax = int(_loc2_.@buyMax);
         _loc3_.exchangeId = int(_loc2_.@exchangeId);
         _loc3_.forever = int(_loc2_.@forever);
         _loc3_.frameIndex = int(_loc2_.@frameIndex);
         return _loc3_;
      }
      
      public static function getPurpleItemByShopKindId(param1:int) : Array
      {
         var _loc5_:JackPotShopInfo = null;
         var _loc2_:Array = getAllInTimePurpleItems();
         var _loc3_:Array = [];
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            _loc5_ = _loc2_[_loc4_] as JackPotShopInfo;
            if(int(_loc5_.shopkind) == param1)
            {
               _loc3_.push(_loc5_);
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function getSurplusTime(param1:String) : Number
      {
         if(param1 == "*")
         {
            return 99999;
         }
         var _loc2_:String = param1;
         var _loc3_:Date = SystemTimerManager.get24DateByStr(_loc2_);
         var _loc4_:Number = SystemTimerManager.time;
         return (_loc3_.time - _loc4_ * 1000) * 0.001;
      }
      
      public static function getLeftDay(param1:String) : int
      {
         return int(getSurplusTime(param1) / (24 * 60 * 60) + 1);
      }
      
      public static function getNumberDay(param1:String) : int
      {
         if(param1 == "*")
         {
            return 0;
         }
         var _loc2_:String = param1;
         var _loc3_:Date = SystemTimerManager.get0DateByStr(_loc2_);
         var _loc4_:Number;
         var _loc5_:Number = ((_loc4_ = SystemTimerManager.time) * 1000 - _loc3_.time) * 0.001;
         return int(_loc5_ / (24 * 60 * 60) + 1);
      }
      
      public static function getIsinTime(param1:String, param2:String) : Boolean
      {
         if(param1 == "*" && param2 != "*")
         {
            if(getLeftDay(param2) > 0)
            {
               return true;
            }
            return false;
         }
         if(param1 != "*" && param2 == "*")
         {
            if(getNumberDay(param1) > 0)
            {
               return true;
            }
            return false;
         }
         if(param1 != "*" && param2 != "*")
         {
            if(getNumberDay(param1) > 0 && getLeftDay(param2) > 0)
            {
               return true;
            }
            return false;
         }
         return true;
      }
   }
}
