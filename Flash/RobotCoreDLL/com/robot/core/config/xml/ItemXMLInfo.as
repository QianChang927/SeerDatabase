package com.robot.core.config.xml
{
   import com.robot.core.config.xmlInfo.ItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.VersionManager;
   import flash.net.registerClassAlias;
   import flash.utils.ByteArray;
   import flash.utils.Dictionary;
   import org.taomee.ds.HashMap;
   import org.taomee.ds.HashSet;
   
   public class ItemXMLInfo
   {
      
      private static var tyeXmlClass:Class = ItemXMLInfo_tyeXmlClass;
      
      private static var _cacheItemInfoArr:Array = [];
      
      private static var _catDict:Array = [];
      
      private static var _itemDict:Dictionary = new Dictionary();
      
      private static var _catItemDict:Dictionary = new Dictionary();
      
      private static var _speedMap:HashMap;
      
      private static var _pkHpMap:HashMap;
      
      private static var _pkAtkMap:HashMap;
      
      private static var _pkPkFireRangeMap:HashMap;
      
      private static var _typeDict:Dictionary;
      
      public static var MIDLE_ITEM_LIST:Array = [];
      
      private static var _mountMap:HashMap;
      
      private static var _spiriteFragment:HashMap;
      
      private static var xmlClass:Class = ItemXMLInfo_xmlClass;
       
      
      public function ItemXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:ByteArray = null;
         var _loc2_:int = 0;
         var _loc3_:ItemInfo = null;
         var _loc4_:int = 0;
         registerClassAlias("com.robot.core.config.xmlInfo.ItemInfo",ItemInfo);
         _loc1_ = new xmlClass();
         _loc1_.uncompress();
         _cacheItemInfoArr = _loc1_.readObject() as Array;
         _loc1_.clear();
         _loc2_ = int(_cacheItemInfoArr.length);
         _loc4_ = 0;
         while(_loc4_ < _loc2_)
         {
            _loc3_ = _cacheItemInfoArr[_loc4_];
            _itemDict[_loc3_.id] = _loc3_.itemObj;
            _catItemDict[_loc3_.id] = _loc3_.catObj;
            if(getIsMidleItem(_loc3_.id))
            {
               MIDLE_ITEM_LIST.push(_loc3_.id);
            }
            _loc4_++;
         }
         initXMLData();
      }
      
      private static function parseItemXMLList(param1:XML) : void
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:Object = null;
         var _loc6_:XML = null;
         var _loc7_:int = 0;
         var _loc8_:XMLList = null;
         var _loc9_:XML = null;
         var _loc10_:String = null;
         var _loc11_:String = null;
         var _loc12_:ItemInfo = null;
         var _loc2_:XMLList = param1.elements("Cat");
         for each(_loc3_ in _loc2_)
         {
            _loc4_ = _loc3_.attributes();
            _loc5_ = {};
            for each(_loc6_ in _loc4_)
            {
               _loc10_ = String(_loc6_.name());
               _loc11_ = String(_loc6_);
               _loc5_[_loc10_] = _loc11_;
            }
            _loc7_ = int(_loc5_["ID"]);
            _catDict[_loc7_] = _loc5_;
            _loc8_ = _loc3_.elements("Item");
            for each(_loc9_ in _loc8_)
            {
               (_loc12_ = parseXmlToItemInfo(_loc9_)).catObj = _loc5_;
               _loc12_.CatID = _loc7_;
               _cacheItemInfoArr.push(_loc12_);
               _itemDict[_loc12_.id] = _loc12_.itemObj;
               _catItemDict[_loc12_.id] = _loc5_;
               if(getIsMidleItem(_loc12_.id))
               {
                  MIDLE_ITEM_LIST.push(_loc12_.id);
               }
            }
         }
      }
      
      private static function parseXmlToItemInfo(param1:XML) : ItemInfo
      {
         var _loc5_:XML = null;
         var _loc6_:int = 0;
         var _loc7_:String = null;
         var _loc8_:String = null;
         var _loc2_:ItemInfo = new ItemInfo();
         var _loc3_:XMLList = param1.attributes();
         var _loc4_:Object = {};
         for each(_loc5_ in _loc3_)
         {
            _loc7_ = String(_loc5_.name());
            _loc8_ = String(_loc5_);
            _loc4_[_loc7_] = _loc8_;
         }
         _loc6_ = int(_loc4_["ID"]);
         _loc2_.id = _loc6_;
         _loc2_.itemObj = _loc4_;
         return _loc2_;
      }
      
      private static function initXMLData() : void
      {
         var _loc1_:Object = null;
         var _loc2_:Object = null;
         ClothXMLInfo.setup(_itemDict);
         DoodleXMLInfo.setup(_itemDict);
         _speedMap = new HashMap();
         _pkHpMap = new HashMap();
         _pkAtkMap = new HashMap();
         _pkPkFireRangeMap = new HashMap();
         _mountMap = new HashMap();
         _spiriteFragment = new HashMap();
         for each(_loc1_ in _itemDict)
         {
            _loc2_ = _loc1_;
            if(_loc2_["type"] == "foot")
            {
               if(_loc2_.hasOwnProperty("speed"))
               {
                  _speedMap.add(_loc2_["ID"],Number(_loc2_["speed"]));
               }
               else
               {
                  _speedMap.add(_loc2_["ID"],MainManager.DefSpeed);
               }
            }
            if(_loc2_["type"] == "head")
            {
               if(_loc2_.hasOwnProperty("PkFireRange"))
               {
                  _pkPkFireRangeMap.add(_loc2_["ID"],Number(_loc2_["PkFireRange"]));
               }
            }
            if(_loc2_["type"] == "head" || _loc2_["type"] == "hand" || _loc2_["type"] == "foot" || _loc2_["type"] == "waist" || _loc2_["type"] == "eye")
            {
               if(_loc2_.hasOwnProperty("PkHp"))
               {
                  _pkHpMap.add(_loc2_["ID"],Number(_loc2_["PkHp"]));
               }
            }
            if(_loc2_["type"] == "head" || _loc2_["type"] == "hand" || _loc2_["type"] == "foot" || _loc2_["type"] == "waist" || _loc2_["type"] == "eye")
            {
               if(_loc2_.hasOwnProperty("PkAtk"))
               {
                  _pkAtkMap.add(_loc2_["ID"],Number(_loc2_["PkAtk"]));
               }
            }
            if(_loc2_["type"] == "mount")
            {
               _mountMap.add(Number(_loc2_["ID"]),Number(_loc2_["ID"]));
            }
            if(_loc2_["type"] == "mount")
            {
               _spiriteFragment.add(int(_loc2_["ID"]),int(_loc2_["ID"]));
            }
         }
         iniTypeXml();
      }
      
      public static function getFragmentIdByItemid(param1:int) : int
      {
         var _loc2_:int = -1;
         if(_spiriteFragment.containsKey(param1))
         {
            _loc2_ = int(_spiriteFragment.getValue(param1));
         }
         return _loc2_;
      }
      
      public static function getAllCloth() : Array
      {
         var _loc2_:Object = null;
         var _loc1_:Array = [];
         for each(_loc2_ in _itemDict)
         {
            if(_loc2_["type"] == "head" || _loc2_["type"] == "hand" || _loc2_["type"] == "foot" || _loc2_["type"] == "waist" || _loc2_["type"] == "eye" || _loc2_["type"] == "top")
            {
               _loc1_.push(_loc2_);
            }
         }
         return _loc1_;
      }
      
      public static function getAllMount() : Array
      {
         return _mountMap.getKeys();
      }
      
      public static function getIsMidleItem(param1:int) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         return !!_loc2_ ? _loc2_["IsMidle"] == "1" : false;
      }
      
      public static function getTargetItemId(param1:int) : int
      {
         var _loc2_:Object = _itemDict[param1];
         return !!_loc2_ ? int(_loc2_["TargetId"]) : -1;
      }
      
      public static function getItemIdByTargetID(param1:int) : int
      {
         var _loc2_:String = null;
         var _loc3_:int = 0;
         var _loc4_:Object = null;
         for(_loc2_ in _itemDict)
         {
            _loc3_ = parseInt(_loc2_);
            _loc4_ = _itemDict[_loc3_];
            if(getTargetItemId(_loc3_) == param1)
            {
               return _loc3_;
            }
         }
         return 0;
      }
      
      public static function getExchangeId(param1:int) : int
      {
         var _loc2_:Object = _itemDict[param1];
         return !!_loc2_ ? int(_loc2_["ExchangeId"]) : -1;
      }
      
      public static function getItemObj(param1:int) : Object
      {
         return _itemDict[param1];
      }
      
      public static function getExchangeType(param1:int) : int
      {
         var _loc2_:Object = _itemDict[param1];
         return !!_loc2_ ? int(_loc2_["ExchangeType"]) : -1;
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:Object = null;
         if(CountermarkXMLInfo.isminMark(param1))
         {
            return CountermarkXMLInfo.getDes(param1);
         }
         _loc2_ = _itemDict[param1];
         return !!_loc2_ ? String(_loc2_["Name"]) : "";
      }
      
      public static function getPrice(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return _loc2_["Price"];
      }
      
      public static function getSellPrice(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return _loc2_["SellPrice"];
      }
      
      public static function getMaxNum(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("Max"))
         {
            return uint(_loc2_["Max"]);
         }
         return 999;
      }
      
      public static function getDailyKey(param1:int) : int
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("DailyKey"))
         {
            return uint(_loc2_["DailyKey"]);
         }
         return 0;
      }
      
      public static function getDailyOutMaxNum(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("DailyOutMax"))
         {
            return uint(_loc2_["DailyOutMax"]);
         }
         return 99;
      }
      
      public static function getWeeklyKey(param1:int) : int
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("WeeklyKey"))
         {
            return uint(_loc2_["WeeklyKey"]);
         }
         return 0;
      }
      
      public static function getWeeklyOutMaxNum(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("WeeklyOutMax"))
         {
            return uint(_loc2_["WeeklyOutMax"]);
         }
         return 99;
      }
      
      public static function getRule(param1:uint) : String
      {
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_.hasOwnProperty("Rule"))
         {
            return _loc2_["Rule"];
         }
         return "";
      }
      
      public static function getType(param1:uint) : String
      {
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_.hasOwnProperty("type"))
         {
            return _loc2_["type"];
         }
         return "";
      }
      
      public static function getRepairPrice(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("RepairPrice"))
         {
            return uint(_loc2_["RepairPrice"]);
         }
         return 0;
      }
      
      public static function getSwfURL(param1:uint, param2:uint = 1) : String
      {
         var _loc3_:Object = _catItemDict[param1];
         if(_loc3_)
         {
            if(param2 == 0 || param2 == 1 || param2 > 10)
            {
               if(_loc3_["ID"] == 18)
               {
                  return VersionManager.getURL(_loc3_["url"] + GemsXMLInfo.getCategory(param1).toString() + ".swf");
               }
               return VersionManager.getURL(_loc3_["url"] + param1.toString() + ".swf");
            }
            return VersionManager.getURL(_loc3_["url"] + param1.toString() + "_" + param2 + ".swf");
         }
         return "";
      }
      
      public static function getIconURL(param1:uint, param2:uint = 1) : String
      {
         return getSwfURL(param1,param2).replace(/swf\//,"icon/");
      }
      
      public static function getLifeTime(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return _loc2_["LifeTime"];
      }
      
      public static function getLimitPetClass(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("LimitPetClass"))
         {
            return _loc2_["LimitPetClass"];
         }
         return 0;
      }
      
      public static function getHP(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return _loc2_["HP"];
      }
      
      public static function getPP(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return _loc2_["PP"];
      }
      
      public static function getSpeed(param1:Array) : Number
      {
         var _loc2_:uint = 0;
         var _loc3_:Number = NaN;
         for each(_loc2_ in param1)
         {
            _loc3_ = _speedMap.getValue(_loc2_) as Number;
            if(_loc3_)
            {
               return _loc3_;
            }
         }
         return MainManager.DefSpeed;
      }
      
      public static function getPkHp(param1:Array) : Number
      {
         var _loc2_:int = 0;
         var _loc3_:uint = 0;
         var _loc4_:Number = NaN;
         for each(_loc3_ in param1)
         {
            if(_loc4_ = _pkHpMap.getValue(_loc3_) as Number)
            {
               _loc2_ += _loc4_;
            }
         }
         return _loc2_;
      }
      
      public static function getPkAtk(param1:Array) : Number
      {
         var _loc2_:int = 0;
         var _loc3_:uint = 0;
         var _loc4_:Number = NaN;
         for each(_loc3_ in param1)
         {
            if(_loc4_ = _pkAtkMap.getValue(_loc3_) as Number)
            {
               _loc2_ += _loc4_;
            }
         }
         return _loc2_;
      }
      
      public static function getPkPkFireRange(param1:Array) : Number
      {
         var _loc2_:uint = 0;
         var _loc3_:Number = NaN;
         for each(_loc2_ in param1)
         {
            _loc3_ = _pkPkFireRangeMap.getValue(_loc2_) as Number;
            if(_loc3_)
            {
               return _loc3_;
            }
         }
         return 0;
      }
      
      public static function getFunID(param1:uint) : int
      {
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_.hasOwnProperty("Fun"))
         {
            return _loc2_["Fun"];
         }
         return 0;
      }
      
      public static function getFunIsCom(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_.hasOwnProperty("isCom"))
         {
            return Boolean(int(_loc2_["isCom"]));
         }
         return false;
      }
      
      public static function getDisabledDir(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_.hasOwnProperty("disabledDir"))
         {
            return Boolean(int(_loc2_["disabledDir"]));
         }
         return false;
      }
      
      public static function getDisabledStatus(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_.hasOwnProperty("disabledStatus"))
         {
            return Boolean(int(_loc2_["disabledStatus"]));
         }
         return false;
      }
      
      public static function getCatID(param1:uint) : int
      {
         var _loc2_:Object = _catItemDict[param1];
         if(_loc2_)
         {
            return _loc2_["ID"];
         }
         return -1;
      }
      
      public static function getPlayID(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return uint(_loc2_["Play"]);
      }
      
      public static function getPower(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return uint(_loc2_["AddPower"]);
      }
      
      public static function getIQ(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return uint(_loc2_["AddIQ"]);
      }
      
      public static function getAiLevel(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return uint(_loc2_["UseAI"]);
      }
      
      public static function getVipLevel(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return uint(_loc2_["VipLevel"]);
      }
      
      public static function getVipOnly(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         return Boolean(uint(_loc2_["VipOnly"]));
      }
      
      public static function getItemVipName(param1:uint) : String
      {
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_.hasOwnProperty("VipName"))
         {
            return _loc2_["VipName"];
         }
         return "";
      }
      
      public static function getIsConsume(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return uint(_loc2_["IsConsume"]);
      }
      
      public static function getIsSuper(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         return Boolean(uint(_loc2_["VipOnly"]));
      }
      
      public static function getFertilizer(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return uint(_loc2_["Fertilizer"]);
      }
      
      public static function getUseEnergy(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         return _loc2_["UseEnergy"];
      }
      
      public static function getIsFloor(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         return Boolean(uint(_loc2_["UseEnergy"]));
      }
      
      public static function getSound(param1:uint) : String
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("sound"))
         {
            return _loc2_["sound"];
         }
         return "";
      }
      
      public static function getShotDis(param1:uint) : uint
      {
         var _loc3_:uint = 0;
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_)
         {
            _loc3_ = uint(_loc2_["PkFireRange"]) == 0 ? 100 : uint(_loc2_["PkFireRange"]);
         }
         return _loc3_;
      }
      
      public static function isJingYuan(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("BreedMonID"))
         {
            return true;
         }
         return false;
      }
      
      public static function getIsShowInPetBag(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("bShowPetBag"))
         {
            return Boolean(uint(_loc2_["bShowPetBag"]));
         }
         if(ItemXMLInfo.getIsMidleItem(param1))
         {
            return false;
         }
         return true;
      }
      
      public static function getPetBreedTime(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(_loc2_)
         {
            if(MainManager.actorInfo.isVip && _loc2_.hasOwnProperty("VipBreedTime"))
            {
               return uint(_loc2_["VipBreedTime"]);
            }
            if(_loc2_.hasOwnProperty("BreedTime"))
            {
               return uint(_loc2_["BreedTime"]);
            }
         }
         return 0;
      }
      
      public static function getPetBreedTimeString(param1:uint) : String
      {
         var _loc2_:uint = getPetBreedTime(param1);
         if(_loc2_ == 0)
         {
            return "0天";
         }
         if(_loc2_ < 60)
         {
            return _loc2_.toString() + "秒";
         }
         if(_loc2_ < 86400)
         {
            return uint(_loc2_ / 60).toString() + "分";
         }
         return uint(_loc2_ / 86400).toString() + "天";
      }
      
      public static function getBreedMonID(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("BreedMonID"))
         {
            return uint(_loc2_["BreedMonID"]);
         }
         return 0;
      }
      
      public static function isSpecialItem(param1:uint) : Boolean
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("isSpecial"))
         {
            return Boolean(uint(_loc2_["isSpecial"]));
         }
         return false;
      }
      
      public static function getItemType(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("ItemType"))
         {
            return uint(_loc2_["ItemType"]);
         }
         return 0;
      }
      
      public static function getSkillStoneRank(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("Rank"))
         {
            return uint(_loc2_["Rank"]);
         }
         return 0;
      }
      
      public static function getSkillStoneNeedLV(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("NeedLv"))
         {
            return uint(_loc2_["NeedLv"]);
         }
         return 0;
      }
      
      public static function getSeId(param1:uint) : uint
      {
         var _loc2_:Object = _itemDict[param1];
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("ItemSeId"))
         {
            return uint(_loc2_["ItemSeId"]);
         }
         return 0;
      }
      
      private static function iniTypeXml() : void
      {
         var _loc3_:XML = null;
         var _loc4_:int = 0;
         var _loc5_:HashSet = null;
         var _loc6_:XMLList = null;
         var _loc7_:XML = null;
         var _loc1_:XML = XML(new tyeXmlClass());
         _typeDict = new Dictionary();
         var _loc2_:XMLList = _loc1_.elements("list");
         for each(_loc3_ in _loc2_)
         {
            _loc4_ = int(_loc3_.@type);
            _loc5_ = new HashSet();
            _typeDict[_loc4_] = _loc5_;
            _loc6_ = _loc3_.elements("Item");
            for each(_loc7_ in _loc6_)
            {
               _loc5_.add(int(_loc7_.@ID));
            }
         }
      }
      
      public static function getItemIsType(param1:int, param2:int) : Boolean
      {
         var _loc3_:HashSet = _typeDict[param2];
         if(_loc3_)
         {
            return _loc3_.contains(param1);
         }
         return false;
      }
      
      public static function getItemIdsByBagItemType(param1:int) : Array
      {
         if(_typeDict[param1] as HashSet)
         {
            return (_typeDict[param1] as HashSet).toArray();
         }
         return [];
      }
      
      public static function getItemInfo(param1:int) : Object
      {
         return _itemDict[param1];
      }
      
      public static function get itemDict() : Dictionary
      {
         return _itemDict;
      }
      
      public static function getItemRarity(param1:int) : int
      {
         var _loc2_:Object = ItemXMLInfo.getItemObj(param1);
         if(_loc2_ == null)
         {
            return 0;
         }
         var _loc3_:int = int(_loc2_.Rarity);
         if(_loc3_)
         {
            return int(_loc3_);
         }
         return 0;
      }
   }
}
