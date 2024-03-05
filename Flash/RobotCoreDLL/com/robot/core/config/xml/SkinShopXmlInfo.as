package com.robot.core.config.xml
{
   import com.robot.core.manager.SystemTimerManager;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   
   public class SkinShopXmlInfo
   {
      
      private static var xmlClass:Class = SkinShopXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var xmlClass1:Class = SkinShopXmlInfo_xmlClass1;
      
      private static var _xml1:XML = XML(new xmlClass1());
      
      private static var _shopIndexhashMap:HashMap;
      
      private static var _skinshashMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      private static var _xmllist1:XMLList;
      
      private static var _classicArr:Array = [];
      
      private static var _epicArr:Array = [];
      
      private static var _timeLimitArr:Array = [];
      
      private static var _allSkinArr:Array = [];
      
      private static var _recommendArr:Array = [];
      
      private static var _newSkinArr:Array = [];
      
      private static var _sortOnArr:Array;
      
      private static var openTimeHashMap:HashMap;
      
      {
         setup();
      }
      
      public function SkinShopXmlInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc5_:int = 0;
         parseOpenTimeXml();
         _xml = XML(new xmlClass());
         _shopIndexhashMap = new HashMap();
         var _loc1_:XML = _xml.elements("SkinShops")[0];
         _xmllist = _loc1_.elements("SkinShop");
         for each(_loc2_ in _xmllist)
         {
            _shopIndexhashMap.add(uint(_loc2_.@ID),_loc2_);
         }
         _skinshashMap = new HashMap();
         _loc3_ = _xml.elements("Skins")[0];
         _xmllist1 = _loc3_.elements("Skin");
         for each(_loc4_ in _xmllist1)
         {
            _skinshashMap.add(uint(_loc4_.@ID),_loc4_);
            if((_loc5_ = parseInt(String(_loc4_.@Show).split("_")[0])) == 1)
            {
               _classicArr.push(uint(_loc4_.@ID));
            }
            else if(_loc5_ == 2)
            {
               _epicArr.push(uint(_loc4_.@ID));
            }
            else if(_loc5_ == 3)
            {
               _timeLimitArr.push(uint(_loc4_.@ID));
            }
            if(_loc5_ != 0)
            {
               _allSkinArr.push(uint(_loc4_.@ID));
            }
            if(_loc5_ != 0 && uint(_loc4_.@Rec) == 1)
            {
               _recommendArr.push(uint(_loc4_.@ID));
            }
         }
         _classicArr = setSortOn(_classicArr);
         _epicArr = setSortOn(_epicArr);
         _timeLimitArr = setSortOn(_timeLimitArr);
         _allSkinArr = setSortOn(_allSkinArr);
         _recommendArr = setSortOn(_recommendArr);
      }
      
      public static function getActivityTime(param1:int) : String
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:Date = null;
         var _loc6_:Date = null;
         var _loc2_:HashMap = openTimeHashMap.getValue(param1) as HashMap;
         if(_loc2_)
         {
            _loc3_ = _loc2_.getValues();
            _loc3_.sortOn("id",Array.NUMERIC);
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               if(isIntime(_loc3_[_loc4_].StartTime,_loc3_[_loc4_].EndTime))
               {
                  (_loc5_ = new Date()).time = getTime(convertDateStr(_loc3_[_loc4_].StartTime as String));
                  (_loc6_ = new Date()).time = getTime(convertDateStr(_loc3_[_loc4_].EndTime as String)) - 3600 * 24 * 1000;
                  return _loc5_.fullYear + "." + (_loc5_.month + 1) + "." + _loc5_.date + " - " + _loc6_.fullYear + "." + (_loc6_.month + 1) + "." + _loc6_.date;
               }
               _loc4_++;
            }
         }
         return "";
      }
      
      public static function getIsIn72hour(param1:int) : Boolean
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc5_:Date = null;
         var _loc6_:Date = null;
         var _loc2_:HashMap = openTimeHashMap.getValue(param1) as HashMap;
         if(_loc2_)
         {
            _loc3_ = _loc2_.getValues();
            _loc3_.sortOn("id",Array.NUMERIC);
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               if(isIntime(_loc3_[_loc4_].StartTime,_loc3_[_loc4_].EndTime))
               {
                  (_loc5_ = new Date()).time = getTime(convertDateStr(_loc3_[_loc4_].StartTime as String));
                  (_loc6_ = new Date()).time = getTime(convertDateStr(_loc3_[_loc4_].EndTime as String));
                  return (_loc6_.time - SystemTimerManager.sysBJDate.time) / 1000 < 72 * 3600;
               }
               _loc4_++;
            }
         }
         return false;
      }
      
      private static function getAtimeStartEnd(param1:int, param2:int) : Array
      {
         var _loc4_:Object = null;
         var _loc3_:HashMap = openTimeHashMap.getValue(param1) as HashMap;
         if(_loc3_)
         {
            if(_loc4_ = _loc3_.getValue(param2))
            {
               return [_loc4_.StartTime,_loc4_.EndTime];
            }
            return null;
         }
         return null;
      }
      
      private static function parseOpenTimeXml() : void
      {
         var _loc2_:XML = null;
         var _loc3_:HashMap = null;
         var _loc4_:XMLList = null;
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         var _loc7_:Object = null;
         _xml1 = XML(new xmlClass1());
         openTimeHashMap = new HashMap();
         var _loc1_:XMLList = _xml1.Activity;
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = new HashMap();
            _loc4_ = _loc2_.TimeLimit;
            _loc5_ = int(_loc2_.@ID);
            for each(_loc6_ in _loc4_)
            {
               (_loc7_ = {}).id = int(_loc6_.@TID);
               _loc7_.StartTime = String(_loc6_.@StartTime);
               _loc7_.EndTime = String(_loc6_.@EndTime);
               _loc3_.add(_loc7_.id,_loc7_);
            }
            openTimeHashMap.add(_loc5_,_loc3_);
         }
      }
      
      public static function getTime(param1:String) : Number
      {
         return Date.parse(convertDateStr(param1));
      }
      
      public static function convertDateStr(param1:String) : String
      {
         var _loc2_:Array = param1.split(" ");
         var _loc3_:String = "{0} {1} {2}";
         return format(_loc3_,(_loc2_[0] as String).split("-").join("/"),_loc2_[1],"GMT");
      }
      
      public static function format(param1:String, ... rest) : String
      {
         var _loc3_:int = 0;
         while(_loc3_ < rest.length)
         {
            param1 = param1.replace(new RegExp("\\{" + _loc3_ + "\\}","gm"),rest[_loc3_]);
            _loc3_++;
         }
         return param1;
      }
      
      public static function getAllLabelInfos() : Array
      {
         var _loc4_:Object = null;
         var _loc5_:Array = null;
         var _loc1_:Array = _shopIndexhashMap.getKeys();
         var _loc2_:Array = new Array();
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            if((_loc4_ = getLabelInfoById(_loc1_[_loc3_])).isOpen == 1)
            {
               if(_loc4_.id == 3 || _loc4_.id == 5)
               {
                  if((Boolean(_loc5_ = SkinShopXmlInfo.getSkinIdsByLabelId(_loc4_.id))) && Boolean(_loc5_.length))
                  {
                     _loc2_.push(_loc4_);
                  }
               }
               else
               {
                  _loc2_.push(_loc4_);
               }
            }
            _loc3_++;
         }
         _loc2_.sortOn("priority",Array.NUMERIC);
         return _loc2_;
      }
      
      public static function getLabelInfoById(param1:int) : Object
      {
         var _loc2_:XML = _shopIndexhashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.id = int(_loc2_.@ID);
         _loc3_.shopName = String(_loc2_.@ShopName);
         _loc3_.isOpen = int(_loc2_.@IsOpen);
         _loc3_.priority = int(_loc2_.@Priority);
         _loc3_.activityID = int(_loc2_.@ActivityID);
         return _loc3_;
      }
      
      public static function setSortOn(param1:Array) : Array
      {
         var _loc4_:Object = null;
         var _loc2_:Array = new Array();
         var _loc3_:int = 0;
         while(_loc3_ < param1.length)
         {
            (_loc4_ = getSkinInfoById(param1[_loc3_])).isHvae = !!getDefinitionByName("com.robot.app2.systems.PetSkinController").instance.haveSkin(_loc4_.id) ? 1 : 0;
            _loc2_.push(_loc4_);
            _loc3_++;
         }
         _loc2_.sortOn(["isHvae","batch","id"],[Array.NUMERIC,Array.NUMERIC | Array.DESCENDING,Array.NUMERIC | Array.DESCENDING]);
         return _loc2_;
      }
      
      public static function getSkinIdsByLabelId(param1:int) : Array
      {
         var _loc5_:Object = null;
         var _loc6_:int = 0;
         var _loc7_:XML = null;
         var _loc8_:Array = null;
         var _loc2_:Array = [];
         if(param1 == 1)
         {
            _loc2_ = _classicArr;
         }
         else if(param1 == 2)
         {
            _loc2_ = _epicArr;
         }
         else if(param1 == 3)
         {
            _loc2_ = _timeLimitArr;
         }
         else if(param1 == 4)
         {
            _loc2_ = _allSkinArr;
         }
         else if(param1 == 5)
         {
            _loc2_ = _recommendArr;
         }
         else if(param1 == 6)
         {
         }
         var _loc3_:Array = new Array();
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            if((_loc6_ = int((_loc5_ = _loc2_[_loc4_] as Object).timeIdx)) != 0)
            {
               _loc7_ = _shopIndexhashMap.getValue(_loc5_.show);
               if(int(_loc7_.@ActivityID) != 0)
               {
                  if((_loc8_ = getAtimeStartEnd(int(_loc7_.@ActivityID),_loc6_)) != null)
                  {
                     if(isIntime(_loc8_[0],_loc8_[1]))
                     {
                        _loc3_.push(_loc5_.id);
                     }
                  }
               }
               else
               {
                  _loc3_.push(_loc5_.id);
               }
            }
            else
            {
               _loc3_.push(_loc5_.id);
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function isIntime(param1:String, param2:String) : Boolean
      {
         var _loc3_:Number = SystemTimerManager.sysBJDate.time;
         var _loc4_:Number = getTime(param1);
         var _loc5_:Number = getTime(param2);
         if(_loc3_ >= _loc4_ && _loc3_ < _loc5_)
         {
            return true;
         }
         return false;
      }
      
      public static function getSkinInfoById(param1:int) : Object
      {
         var _loc2_:XML = _skinshashMap.getValue(param1);
         var _loc3_:Object = new Object();
         _loc3_.id = int(_loc2_.@ID);
         _loc3_.skinID = int(_loc2_.@SkinID);
         _loc3_.petId = int(_loc2_.@MonID);
         _loc3_.type = int(_loc2_.@Type);
         _loc3_.SkinName = String(_loc2_.@Name);
         _loc3_.cardPrice = int(_loc2_.@CardPrice);
         _loc3_.originalPrice = int(_loc2_.@OriginalPrice);
         var _loc4_:String = String(_loc2_.@Show);
         _loc3_.show = parseInt(_loc4_.split("_")[0]);
         if(_loc4_.indexOf("_") != -1)
         {
            _loc3_.timeIdx = parseInt(_loc4_.split("_")[1]);
         }
         _loc3_.batch = int(_loc2_.@Batch);
         _loc3_.des = _loc2_.@des;
         _loc3_.rec = int(_loc2_.@rec);
         return _loc3_;
      }
   }
}
