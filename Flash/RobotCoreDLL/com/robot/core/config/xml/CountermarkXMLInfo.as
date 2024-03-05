package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.userItem.CountermarkType;
   import org.taomee.ds.HashMap;
   
   public class CountermarkXMLInfo
   {
      
      private static var xmlClass:Class = CountermarkXMLInfo_xmlClass;
      
      private static var _dataMap:HashMap;
      
      private static var _quanNengKyMax:int = 0;
      
      {
         setup();
      }
      
      public function CountermarkXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:uint = 0;
         _dataMap = new HashMap();
         var _loc1_:XMLList = XML(new xmlClass()).elements("MintMark");
         for each(_loc2_ in _loc1_)
         {
            _loc3_ = uint(_loc2_.@ID);
            _dataMap.add(_loc3_,_loc2_);
            if(_loc2_.@Type == 3 && _loc3_ > _quanNengKyMax)
            {
               _quanNengKyMax = _loc3_;
            }
         }
      }
      
      public static function get quanNengKyMax() : int
      {
         return _quanNengKyMax;
      }
      
      public static function getDes(param1:uint) : String
      {
         if(isQuanxiaoMark(param1))
         {
            return getQuanxiaoDes(param1);
         }
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@Des.toString();
         }
         return "";
      }
      
      public static function getQuanxiaoDes(param1:uint) : String
      {
         var _loc2_:int = int(getQuanxiaoAbilityID(param1));
         var _loc3_:int = int(getQuanxiaoSkillID(param1));
         var _loc4_:String = getDes(_loc2_);
         var _loc5_:String;
         return (_loc5_ = getDes(_loc3_)).substr(0,_loc5_.length - 2) + "·" + _loc4_.substr(0,_loc4_.length - 2) + "全效刻印";
      }
      
      public static function getQuanxiaoEffectDes(param1:uint) : String
      {
         var _loc2_:int = int(getQuanxiaoAbilityID(param1));
         var _loc3_:int = int(getQuanxiaoSkillID(param1));
         var _loc4_:String = getEffectDes(_loc2_);
         var _loc5_:String;
         return (_loc5_ = getEffectDes(_loc3_)) + "，" + _loc4_;
      }
      
      public static function getEffectDes(param1:uint) : String
      {
         if(isQuanxiaoMark(param1))
         {
            return getQuanxiaoEffectDes(param1);
         }
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@EffectDes.toString();
         }
         return "";
      }
      
      public static function getSkillEffectDes(param1:uint, param2:uint) : String
      {
         var _loc4_:int = 0;
         if(isQuanxiaoMark(param1))
         {
            if((_loc4_ = int(getQuanxiaoSkillID(param1))) == param2)
            {
               return getEffectDes(_loc4_);
            }
         }
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            if(_loc3_.hasOwnProperty("@MoveID"))
            {
               if(param2 == uint(_loc3_.@MoveID))
               {
                  return _loc3_.@EffectDes.toString();
               }
            }
         }
         return "";
      }
      
      public static function getType(param1:uint) : int
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         if(param1.toString().length == 10)
         {
            _loc3_ = int(getQuanxiaoAbilityID(param1));
            _loc4_ = int(getQuanxiaoSkillID(param1));
            if(isAbilityMark(_loc3_) && isSkillMark(_loc4_))
            {
               return CountermarkType.MARK_IS_QUAN_XIAO;
            }
            return 3;
         }
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@Type);
         }
         return -1;
      }
      
      public static function getMax(param1:uint) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@Max);
         }
         return -1;
      }
      
      public static function getTypeName(param1:uint) : String
      {
         switch(getType(param1))
         {
            case 0:
               return "能力刻印";
            case 1:
               return "技能刻印";
            case 2:
               return "通用刻印";
            case 3:
               return "全能刻印";
            case 4:
               return "刻印碎片";
            case CountermarkType.MARK_IS_QUAN_XIAO:
               return "全效刻印";
            default:
               return "";
         }
      }
      
      public static function getEffect(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@Effect);
         }
         return 0;
      }
      
      public static function getMintMarkClass(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@MintmarkClass);
         }
         return 0;
      }
      
      public static function getArg(param1:uint) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.@Arg).split(" ");
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               _loc3_[_loc4_] = uint(_loc3_[_loc4_]);
               _loc4_++;
            }
            return _loc3_;
         }
         return [];
      }
      
      public static function getIconURL(param1:uint) : String
      {
         var _loc2_:int = int(param1);
         if(isQuanxiaoMark(param1))
         {
            _loc2_ = int(getQuanxiaoSkillID(param1));
         }
         return ClientConfig.getResPath("countermark/icon/" + _loc2_ + ".swf");
      }
      
      public static function getQuanxiaoSkillID(param1:uint) : uint
      {
         return param1 % 100000;
      }
      
      public static function getQuanxiaoAbilityID(param1:uint) : uint
      {
         return uint(param1 / 100000);
      }
      
      public static function getQuanxiaoMarkID(param1:int, param2:int) : int
      {
         return 100000 * param1 + param2;
      }
      
      public static function getLevel(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@Level);
         }
         return 0;
      }
      
      public static function getMonsterID(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@MonsterID);
         }
         return 0;
      }
      
      public static function getMonsterIDs(param1:uint) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:Array = null;
         var _loc5_:String = null;
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.@MonsterID).split(" ");
            _loc4_ = [];
            for each(_loc5_ in _loc3_)
            {
               if(int(_loc5_) != 0)
               {
                  _loc4_.push(int(_loc5_));
               }
            }
            if(_loc4_.length > 0)
            {
               return _loc4_;
            }
         }
         return [];
      }
      
      public static function isExclusive(param1:uint) : Boolean
      {
         var _loc2_:Array = getMonsterIDs(param1);
         if(_loc2_ != null && _loc2_.length > 0)
         {
            return true;
         }
         return false;
      }
      
      public static function isAbilityMark(param1:uint) : Boolean
      {
         return Boolean(getType(param1) == 0);
      }
      
      public static function isSkillMark(param1:uint) : Boolean
      {
         return Boolean(getType(param1) == 1);
      }
      
      public static function isUniversalMark(param1:uint) : Boolean
      {
         return Boolean(getType(param1) == 3);
      }
      
      public static function isQuanxiaoMark(param1:int) : Boolean
      {
         return Boolean(getType(param1) == CountermarkType.MARK_IS_QUAN_XIAO);
      }
      
      public static function getSkillID(param1:uint) : uint
      {
         var _loc3_:Array = null;
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = String(_loc2_.@MoveID).split(" ");
            return uint(_loc3_[0]);
         }
         return 0;
      }
      
      public static function getSkillArr(param1:uint) : Array
      {
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc2_:Array = [];
         var _loc3_:XML = _dataMap.getValue(param1);
         if(_loc3_)
         {
            _loc5_ = int((_loc4_ = String(_loc3_.@MoveID).split(" ")).length);
            _loc6_ = 0;
            while(_loc6_ < _loc5_)
            {
               _loc2_.push(uint(_loc4_[_loc6_]));
               _loc6_++;
            }
         }
         return _loc2_;
      }
      
      public static function getRestrictDes(param1:uint) : String
      {
         if(isQuanxiaoMark(param1))
         {
            param1 = getQuanxiaoSkillID(param1);
         }
         if(getMonsterID(param1))
         {
            return PetXMLInfo.getName(getMonsterID(param1));
         }
         if(getLevel(param1))
         {
            return getLevel(param1) + "级";
         }
         if(getSkillID(param1))
         {
            return SkillXMLInfo.getName(getSkillID(param1));
         }
         return "";
      }
      
      public static function isminMark(param1:uint) : Boolean
      {
         if(isAbilityMark(param1) || isSkillMark(param1) || isUniversalMark(param1) || isQuanxiaoMark(param1))
         {
            return true;
         }
         return false;
      }
      
      public static function isMarkPiece(param1:uint) : Boolean
      {
         return Boolean(getType(param1) == 4);
      }
      
      public static function getSalePrice(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@SalePrice);
         }
         return 0;
      }
      
      public static function getMintmarkLevel(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@MintmarkLevel);
         }
         return 0;
      }
      
      public static function getCurrentGrade(param1:uint, param2:Array) : int
      {
         if(!isUniversalMark(param1))
         {
            return 0;
         }
         var _loc3_:Array = getMaxAttriValue(param1);
         var _loc4_:int = getMaxGrade(param1);
         var _loc5_:Array = getBaseAttriValue(param1);
         var _loc6_:Number = 0;
         var _loc7_:Number = 0;
         var _loc8_:Number = 0;
         var _loc9_:int = 0;
         while(_loc9_ < _loc5_.length)
         {
            _loc6_ += Number(_loc3_[_loc9_]);
            _loc8_ += Number(_loc5_[_loc9_]);
            _loc7_ += Number(param2[_loc9_]);
            _loc9_++;
         }
         if(_loc6_ == _loc7_)
         {
            return _loc4_;
         }
         if(_loc7_ <= _loc8_)
         {
            return 0;
         }
         var _loc10_:Number = (_loc6_ - _loc8_) / ((1 + _loc4_) * _loc4_ / 2);
         var _loc11_:Number = _loc8_;
         _loc9_ = 0;
         while(_loc9_ < _loc4_)
         {
            _loc11_ = (_loc11_ += Math.ceil(_loc10_ * (_loc9_ + 1))) > _loc6_ ? _loc6_ : _loc11_;
            if(_loc7_ < _loc11_)
            {
               return _loc9_;
            }
            _loc9_++;
         }
         return 0;
      }
      
      public static function getUpGradeAttriNum(param1:uint, param2:Array) : int
      {
         var _loc12_:Number = NaN;
         if(!isUniversalMark(param1))
         {
            return 0;
         }
         var _loc3_:Array = getMaxAttriValue(param1);
         var _loc4_:int = getMaxGrade(param1);
         var _loc5_:Array = getBaseAttriValue(param1);
         var _loc6_:Number = 0;
         var _loc7_:Number = 0;
         var _loc8_:Number = 0;
         var _loc9_:int = 0;
         while(_loc9_ < _loc5_.length)
         {
            _loc6_ += Number(_loc3_[_loc9_]);
            _loc8_ += Number(_loc5_[_loc9_]);
            _loc7_ += Number(param2[_loc9_]);
            _loc9_++;
         }
         var _loc10_:Number = (_loc6_ - _loc8_) / ((1 + _loc4_) * _loc4_ / 2);
         var _loc11_:Number = _loc8_;
         _loc9_ = 0;
         while(_loc9_ < _loc4_)
         {
            _loc12_ = _loc10_ * (_loc9_ + 1);
            _loc11_ = (_loc11_ += Math.ceil(_loc12_)) > _loc6_ ? _loc6_ : _loc11_;
            if(_loc7_ < _loc11_)
            {
               return Math.ceil(_loc11_ - _loc7_);
            }
            _loc9_++;
         }
         return 0;
      }
      
      public static function getTotalConsume(param1:uint) : uint
      {
         var _loc3_:uint = 0;
         var _loc4_:Array = null;
         var _loc5_:Number = NaN;
         if(!isUniversalMark(param1))
         {
            return 0;
         }
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            _loc3_ = 0;
            if(_loc2_.@TotalConsume != null && _loc2_.hasOwnProperty("@TotalConsume") && _loc2_.@TotalConsume != "")
            {
               _loc3_ = uint(_loc2_.@TotalConsume);
            }
            else
            {
               _loc4_ = getMaxAttriValue(param1);
               _loc5_ = Number((getHornNum(param1) - 1.47).toPrecision(3));
               _loc3_ = Math.ceil((Number(_loc4_[0]) * 1521 + Number(_loc4_[1]) * 1517 + Number(_loc4_[2]) * 1521 + Number(_loc4_[3] * 1517) + Number(_loc4_[4]) * 1822 + Number(_loc4_[5]) * 1510) * _loc5_);
            }
            return _loc3_;
         }
         return 0;
      }
      
      public static function getUpgradeConsume(param1:uint, param2:Array) : uint
      {
         var _loc4_:uint = 0;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         if(!isUniversalMark(param1))
         {
            return 0;
         }
         var _loc3_:uint = getTotalConsume(param1);
         if(_loc3_ != 0)
         {
            _loc4_ = 0;
            _loc5_ = getMaxGrade(param1);
            _loc6_ = getCurrentGrade(param1,param2);
            return uint(Math.ceil((_loc6_ + 1) * _loc3_ / ((1 + _loc5_) * _loc5_ / 2)));
         }
         return 0;
      }
      
      public static function getMaxGrade(param1:uint) : int
      {
         if(!isUniversalMark(param1))
         {
            return 0;
         }
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return int(_loc2_.@Grade);
         }
         return 15;
      }
      
      public static function getExtraAttriValue(param1:uint) : Array
      {
         var _loc3_:Array = null;
         var _loc4_:int = 0;
         if(!isUniversalMark(param1))
         {
            return null;
         }
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_ && _loc2_.@ExtraAttriValue != null && _loc2_.hasOwnProperty("@ExtraAttriValue"))
         {
            _loc3_ = String(_loc2_.@ExtraAttriValue).split(" ");
            _loc4_ = 0;
            while(_loc4_ < _loc3_.length)
            {
               _loc3_[_loc4_] = int(_loc3_[_loc4_]);
               _loc4_++;
            }
            return _loc3_;
         }
         return null;
      }
      
      public static function getBaseAttriValue(param1:uint) : Array
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@BaseAttriValue).split(" ");
         }
         return null;
      }
      
      public static function getHornNum(param1:int) : int
      {
         var _loc2_:Array = null;
         if(isUniversalMark(param1))
         {
            _loc2_ = getBaseAttriValue(param1);
         }
         else
         {
            _loc2_ = getArg(param1);
         }
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            if(int(_loc2_[_loc4_]) != 0)
            {
               _loc3_++;
            }
            _loc4_++;
         }
         return _loc3_;
      }
      
      public static function getMaxAttriValue(param1:uint) : Array
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return String(_loc2_.@MaxAttriValue).split(" ");
         }
         return null;
      }
      
      public static function getMintmarkQuality(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return uint(_loc2_.@Quality);
         }
         return 0;
      }
      
      public static function getMap() : HashMap
      {
         return _dataMap;
      }
   }
}
