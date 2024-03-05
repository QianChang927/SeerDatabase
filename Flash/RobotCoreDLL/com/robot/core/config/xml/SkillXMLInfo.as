package com.robot.core.config.xml
{
   import com.robot.core.manager.MainManager;
   import flash.utils.ByteArray;
   import flash.utils.Dictionary;
   import flash.utils.getTimer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class SkillXMLInfo
   {
      
      private static var typeClass:Class = SkillXMLInfo_typeClass;
      
      private static var TYPE_XML:XML = XML(new typeClass());
      
      private static var skillStoneClass:Class = SkillXMLInfo_skillStoneClass;
      
      private static var SKILL_STONE_XML:XML = XML(new skillStoneClass());
      
      private static var hideXmlClass:Class = SkillXMLInfo_hideXmlClass;
      
      private static var HIDE_MOVES_XML:XML = XML(new hideXmlClass());
      
      private static var sphideXmlClass:Class = SkillXMLInfo_sphideXmlClass;
      
      private static var SP_HIDE_MOVES_XML:XML = XML(new sphideXmlClass());
      
      public static var hideMovesMap:Dictionary = new Dictionary();
      
      public static var typeMap:Dictionary = new Dictionary();
      
      public static var movesMap:HashMap = new HashMap();
      
      public static var moveStoneMap:HashMap = new HashMap();
      
      public static var skillXMLList:XMLList;
      
      private static var sideEffectXMLList:XMLList;
      
      public static var categoryNames:Dictionary = new Dictionary();
      
      private static var skillStoneXMLList:XMLList;
      
      private static var _allTypes:Array = [];
      
      private static var sideEffectHash:HashMap = new HashMap();
      
      private static var spHideMovesMap:HashMap = new HashMap();
      
      public static var maxTypeID:uint;
      
      private static var _cacheInfoArr:Array;
      
      private static var xmlClass:Class = SkillXMLInfo_xmlClass;
      
      public static var SKILL_XML:XML;
      
      {
         parseInfo();
      }
      
      public function SkillXMLInfo()
      {
         super();
      }
      
      private static function parseInfo() : void
      {
         var _loc2_:XML = null;
         var _loc3_:XMLList = null;
         var _loc4_:int = 0;
         var _loc5_:XML = null;
         var _loc6_:XMLList = null;
         var _loc7_:XML = null;
         var _loc8_:XML = null;
         var _loc9_:int = 0;
         var _loc10_:int = 0;
         parseMovesbyByteArray();
         var _loc1_:XMLList = TYPE_XML.elements("item");
         for each(_loc2_ in _loc1_)
         {
            ++maxTypeID;
            typeMap[uint(_loc2_.@id)] = {
               "cn":String(_loc2_.@cn),
               "en":String(_loc2_.@en)
            };
            _allTypes.push(int(_loc2_.@id));
         }
         _loc3_ = HIDE_MOVES_XML.elements("item");
         for each(_loc5_ in _loc3_)
         {
            _loc9_ = int(_loc5_.@petId);
            if(hideMovesMap[_loc9_] == null)
            {
               hideMovesMap[_loc9_] = [];
            }
            _loc10_ = (_loc4_ = PetXMLInfo.getOFifthSkill(_loc9_)) != 0 && int(_loc5_.@moveId) == _loc4_ ? 0 : 1;
            hideMovesMap[_loc9_].push({
               "id":uint(_loc5_.@moveId),
               "o":_loc10_
            });
         }
         _loc6_ = SP_HIDE_MOVES_XML.elements("SpMoves");
         for each(_loc7_ in _loc6_)
         {
            spHideMovesMap.add(uint(_loc7_.@moves),_loc7_);
         }
         skillStoneXMLList = SKILL_STONE_XML.elements("MoveStone");
         categoryNames[1] = "物理攻击";
         categoryNames[2] = "特殊攻击";
         categoryNames[4] = "属性攻击";
         for each(_loc8_ in skillStoneXMLList)
         {
            moveStoneMap.add(uint(_loc8_.@ID),_loc8_);
         }
      }
      
      private static function parseMovesbyXML() : void
      {
         var _loc1_:XML = null;
         var _loc2_:XMLList = null;
         var _loc3_:XML = null;
         var _loc4_:Object = null;
         var _loc5_:Object = null;
         SKILL_XML = XML(new xmlClass());
         skillXMLList = SKILL_XML.descendants("Move");
         for each(_loc1_ in skillXMLList)
         {
            _loc4_ = parseXML2Obj(_loc1_);
            movesMap.add(uint(_loc4_["ID"]),_loc4_);
         }
         _loc2_ = SKILL_XML.descendants("SideEffect");
         for each(_loc3_ in _loc2_)
         {
            _loc5_ = parseXML2Obj(_loc3_);
            sideEffectHash.add(uint(_loc4_["ID"]),_loc4_);
         }
      }
      
      private static function parseMovesbyByteArray() : void
      {
         var _loc1_:uint = uint(getTimer());
         var _loc2_:ByteArray = new xmlClass();
         _loc2_.uncompress();
         _cacheInfoArr = _loc2_.readObject() as Array;
         _loc2_.clear();
         var _loc3_:int = int(_cacheInfoArr.length);
         var _loc4_:Object = {};
         var _loc5_:int = 0;
         while(_loc5_ < _loc3_)
         {
            _loc4_ = _cacheInfoArr[_loc5_];
            if(uint(_loc4_["ID"]) < 1000000)
            {
               movesMap.add(uint(_loc4_["ID"]),_loc4_);
            }
            else
            {
               sideEffectHash.add(uint(_loc4_["ID"]),_loc4_);
            }
            _loc5_++;
         }
         DebugTrace.show("movesBinary.xml解析时间：" + (getTimer() - _loc1_) / 1000);
      }
      
      private static function parseXML2Obj(param1:XML) : Object
      {
         var _loc4_:XML = null;
         var _loc5_:String = null;
         var _loc6_:String = null;
         var _loc2_:XMLList = param1.attributes();
         var _loc3_:Object = {};
         for each(_loc4_ in _loc2_)
         {
            _loc5_ = String(_loc4_.name());
            _loc6_ = String(_loc4_);
            _loc3_[_loc5_] = _loc6_;
         }
         return _loc3_;
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc3_:Object = null;
         var _loc4_:XML = null;
         var _loc2_:String = "";
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if(Boolean(_loc3_) && _loc3_.hasOwnProperty("Name"))
            {
               _loc2_ = String(_loc3_["Name"]);
            }
         }
         else
         {
            _loc2_ = (_loc4_ = moveStoneMap.getValue(getSkillIdInXML(param1))).@Name;
         }
         return _loc2_;
      }
      
      public static function getRealId(param1:uint) : uint
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         if(param1 <= 100000)
         {
            _loc2_ = movesMap.getValue(param1);
            if(_loc2_.hasOwnProperty("RealId"))
            {
               param1 = uint(int(_loc2_["RealId"]));
            }
         }
         else
         {
            _loc3_ = moveStoneMap.getValue(getSkillIdInXML(param1));
            if(_loc3_)
            {
               if(int(_loc3_.@RealId) > 0)
               {
                  param1 = uint(int(_loc3_.@RealId));
               }
            }
         }
         return param1;
      }
      
      public static function getDamage(param1:uint) : uint
      {
         var _loc2_:int = 0;
         var _loc3_:Object = null;
         var _loc4_:XML = null;
         if(param1 == 12867)
         {
            if(MainManager.actorModel.isClothTianshen())
            {
               return 160;
            }
         }
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if(_loc3_.hasOwnProperty("Power"))
            {
               _loc2_ = int(_loc3_["Power"]);
            }
            return _loc2_;
         }
         _loc4_ = moveStoneMap.getValue(getSkillIdInXML(param1));
         return _loc4_.@Power;
      }
      
      public static function getCommonSkill(param1:uint) : int
      {
         var _loc2_:int = 0;
         var _loc3_:Object = null;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         var _loc6_:XML = null;
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if((_loc5_ = _loc3_.hasOwnProperty("Category") ? int(_loc3_["Category"]) : 0) == 4)
            {
               if(param1 <= 28410)
               {
                  return 0;
               }
            }
            else if(_loc5_ == 1 || _loc5_ == 2)
            {
               if(param1 <= 36797)
               {
                  return 0;
               }
            }
            if(_loc3_.hasOwnProperty("ordinary"))
            {
               _loc4_ = int(_loc3_["ordinary"]);
            }
            if(_loc4_ == 1)
            {
               return 0;
            }
            if(_loc3_.hasOwnProperty("animation"))
            {
               _loc2_ = int(_loc3_["animation"]);
            }
            if(_loc2_ == 0)
            {
               if(_loc5_ > 0)
               {
                  if(_loc5_ == 4)
                  {
                     _loc2_ = 999;
                  }
                  else if(_loc5_ == 1 || _loc5_ == 2)
                  {
                     if(_loc3_.hasOwnProperty("Type"))
                     {
                        _loc2_ = int(_loc3_["Type"]);
                     }
                  }
               }
            }
            return _loc2_;
         }
         _loc6_ = moveStoneMap.getValue(getSkillIdInXML(param1));
         return 0;
      }
      
      public static function getPP(param1:uint) : uint
      {
         var _loc2_:int = 0;
         var _loc3_:Object = null;
         var _loc4_:XML = null;
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if(_loc3_.hasOwnProperty("MaxPP"))
            {
               _loc2_ = int(_loc3_["MaxPP"]);
            }
            return _loc2_;
         }
         return (_loc4_ = moveStoneMap.getValue(getSkillIdInXML(param1))).@MaxPP;
      }
      
      public static function hitP(param1:uint) : Number
      {
         var _loc2_:Number = NaN;
         var _loc3_:Object = null;
         var _loc4_:XML = null;
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if(_loc3_.hasOwnProperty("Accuracy"))
            {
               _loc2_ = Number(_loc3_["Accuracy"]);
            }
            return _loc2_;
         }
         return (_loc4_ = moveStoneMap.getValue(getSkillIdInXML(param1))).@Accuracy;
      }
      
      public static function getEnHideSkillPetID(param1:uint) : uint
      {
         var _loc2_:Object = movesMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("MonID"))
            {
               return uint(_loc2_["MonID"]);
            }
         }
         return 0;
      }
      
      public static function getSideEffects(param1:uint) : Array
      {
         return getEffectArrayByAttr("@SideEffect",param1);
      }
      
      public static function getSideEffectArgs(param1:uint) : Array
      {
         return getEffectArrayByAttr("@SideEffectArg",param1);
      }
      
      public static function getFriendSideEffects(param1:uint) : Array
      {
         return getEffectArrayByAttr("@FriendSideEffect",param1);
      }
      
      public static function getFriendSideEffectArgs(param1:uint) : Array
      {
         return getEffectArrayByAttr("@FriendSideEffectArg",param1);
      }
      
      private static function getEffectArrayByAttr(param1:String, param2:int) : Array
      {
         var xml:XML = null;
         var obj:Object = null;
         var propertyName:String = null;
         var effId:uint = 0;
         var effXML:XML = null;
         var attrName:String = param1;
         var id:int = param2;
         var eff:Array = [];
         if(id <= 100000)
         {
            obj = movesMap.getValue(id);
            propertyName = String(attrName.split("@")[1]);
            if(obj.hasOwnProperty(propertyName))
            {
               eff = String(obj[propertyName]).split(" ");
               return eff;
            }
         }
         else
         {
            xml = skillStoneXMLList.(@ID == getSkillIdInXML(id))[0];
            effId = uint(id % 100000 / 1000);
            effXML = xml.elements("MoveEffect").(@ID == effId)[0];
            if(effXML == null)
            {
               eff = [];
            }
            else
            {
               eff = String(effXML[attrName]).split(" ");
            }
         }
         return eff;
      }
      
      public static function getCategory(param1:uint) : int
      {
         var _loc2_:Object = null;
         if(param1 <= 100000)
         {
            _loc2_ = movesMap.getValue(param1);
            if(Boolean(_loc2_) && _loc2_.hasOwnProperty("Category"))
            {
               return int(_loc2_["Category"]);
            }
            return 0;
         }
         return uint(param1 / 100000);
      }
      
      public static function getCategoryName(param1:uint) : String
      {
         return String(categoryNames[getCategory(param1)]);
      }
      
      public static function getTypeID(param1:uint) : uint
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if(_loc3_.hasOwnProperty("Type"))
            {
               return int(_loc3_["Type"]);
            }
         }
         else
         {
            _loc2_ = moveStoneMap.getValue(getSkillIdInXML(param1));
         }
         return uint(_loc2_.@Type);
      }
      
      public static function getTypeCN(param1:uint) : String
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         if(getCategory(param1) == 4)
         {
            return "属性";
         }
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if(_loc3_.hasOwnProperty("Type"))
            {
               return typeMap[uint(_loc3_["Type"])]["cn"];
            }
         }
         else
         {
            _loc2_ = moveStoneMap.getValue(getSkillIdInXML(param1));
         }
         return typeMap[uint(_loc2_.@Type)]["cn"];
      }
      
      public static function getTypeEN(param1:uint) : String
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         if(getCategory(param1) == 4)
         {
            return "prop";
         }
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if(_loc3_.hasOwnProperty("Type"))
            {
               return typeMap[uint(_loc3_["Type"])]["en"];
            }
         }
         else
         {
            _loc2_ = moveStoneMap.getValue(getSkillIdInXML(param1));
         }
         return typeMap[uint(_loc2_.@Type)]["en"];
      }
      
      public static function getSkillInfo(param1:uint) : XML
      {
         return moveStoneMap.getValue(getSkillIdInXML(param1));
      }
      
      public static function getInfo(param1:uint) : String
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         if(param1 <= 100000)
         {
            _loc2_ = movesMap.getValue(param1);
            if(_loc2_.hasOwnProperty("info"))
            {
               return String(_loc2_["info"]);
            }
            return "";
         }
         _loc3_ = moveStoneMap.getValue(getSkillIdInXML(param1));
         return _loc3_.@info;
      }
      
      public static function getDes(param1:uint) : String
      {
         var _loc2_:Object = sideEffectHash.getValue(param1);
         if(_loc2_.hasOwnProperty("des"))
         {
            return String(_loc2_["des"]);
         }
         return "";
      }
      
      public static function petTypeNameCN(param1:uint) : String
      {
         return typeMap[param1]["cn"];
      }
      
      public static function petTypeNameEN(param1:uint) : String
      {
         return typeMap[param1]["en"];
      }
      
      public static function getAllTypes() : Array
      {
         return _allTypes;
      }
      
      public static function getTypeKind(param1:uint) : int
      {
         return petTypeNameEN(param1).split("_").length >= 2 ? 2 : 1;
      }
      
      public static function getRelatedTypes(param1:uint) : Array
      {
         var typeID:uint = param1;
         var getArray1:Function = function():Array
         {
            var _loc4_:int = 0;
            var _loc5_:String = null;
            var _loc6_:Array = null;
            var _loc1_:Array = [];
            var _loc2_:String = petTypeNameEN(typeID);
            var _loc3_:int = 0;
            while(_loc3_ < _allTypes.length)
            {
               _loc4_ = int(_allTypes[_loc3_]);
               if((_loc6_ = (_loc5_ = String(getTypeStr(_loc4_))).split("_")).indexOf(_loc2_) != -1 && _loc4_ != typeID)
               {
                  _loc1_.push(_loc4_);
               }
               _loc3_++;
            }
            return _loc1_;
         };
         var getArray2:Function = function():Array
         {
            var _loc5_:int = 0;
            var _loc6_:String = null;
            var _loc1_:Array = [];
            var _loc2_:String = petTypeNameEN(typeID);
            var _loc3_:Array = _loc2_.split("_");
            var _loc4_:int = 0;
            while(_loc4_ < _allTypes.length)
            {
               _loc5_ = int(_allTypes[_loc4_]);
               if((_loc6_ = String(getTypeStr(_loc5_))) == _loc3_[0] || _loc6_ == _loc3_[1])
               {
                  _loc1_.push(_loc5_);
               }
               _loc4_++;
            }
            return _loc1_;
         };
         var getTypeStr:Function = function(param1:uint):String
         {
            return typeMap[param1]["en"];
         };
         switch(getTypeKind(typeID))
         {
            case 1:
               return getArray1();
            case 2:
               return getArray2();
            default:
               return null;
         }
      }
      
      public static function getGpFtSkillMC(param1:uint) : String
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         if(param1 <= 100000)
         {
            _loc2_ = movesMap.getValue(param1);
            if(_loc2_.hasOwnProperty("Url"))
            {
               return String(_loc2_["Url"]);
            }
         }
         else
         {
            _loc3_ = moveStoneMap.getValue(getSkillIdInXML(param1));
            if(_loc3_)
            {
               if(_loc3_.hasOwnProperty("@Url"))
               {
                  return _loc3_.@Url;
               }
            }
         }
         return "normal_3";
      }
      
      public static function getGpFtSkillType(param1:uint) : uint
      {
         var _loc2_:Object = null;
         var _loc3_:XML = null;
         if(param1 <= 100000)
         {
            _loc2_ = movesMap.getValue(param1);
            if(_loc2_.hasOwnProperty("AtkType"))
            {
               return uint(_loc2_["AtkType"]);
            }
         }
         else
         {
            _loc3_ = moveStoneMap.getValue(getSkillIdInXML(param1));
         }
         if(_loc3_)
         {
            if(_loc3_.hasOwnProperty("@AtkType"))
            {
               return uint(_loc3_.@AtkType);
            }
         }
         return 2;
      }
      
      public static function getGpFtSkillAtkNum(param1:uint) : uint
      {
         var _loc2_:XML = null;
         var _loc3_:Object = null;
         if(param1 <= 100000)
         {
            _loc3_ = movesMap.getValue(param1);
            if(_loc3_.hasOwnProperty("AtkNum"))
            {
               return uint(_loc3_["AtkNum"]);
            }
         }
         else
         {
            _loc2_ = moveStoneMap.getValue(getSkillIdInXML(param1));
            if(_loc2_.hasOwnProperty("@AtkNum"))
            {
               return uint(_loc2_.@AtkNum);
            }
         }
         return 1;
      }
      
      public static function getSkillByStone(param1:uint, param2:uint) : uint
      {
         var _loc4_:XML = null;
         var _loc5_:String = null;
         var _loc3_:* = param2.toString() + "00";
         for each(_loc4_ in moveStoneMap)
         {
            if(_loc4_.@ItemID == param1)
            {
               break;
            }
            _loc4_ = null;
         }
         if(_loc4_)
         {
            _loc5_ = _loc4_.@ID;
            while(_loc5_.length < 3)
            {
               _loc5_ = "0" + _loc5_;
            }
            _loc3_ += _loc5_;
            return uint(_loc3_);
         }
         return 0;
      }
      
      public static function getSkillIdInXML(param1:uint) : uint
      {
         return uint(param1 % 1000);
      }
      
      public static function getStoneBySkill(param1:uint) : uint
      {
         var _loc2_:XML = moveStoneMap.getValue(getSkillIdInXML(param1));
         return uint(_loc2_.@ItemID);
      }
      
      public static function getAll150Skills(param1:String) : Array
      {
         var _loc3_:Object = null;
         var _loc4_:String = null;
         var _loc5_:int = 0;
         var _loc6_:String = null;
         var _loc2_:Array = [];
         for each(_loc3_ in movesMap.getValues())
         {
            _loc4_ = String(_loc3_["ID"].toString());
            if(_loc3_.hasOwnProperty("Power"))
            {
               _loc5_ = int(_loc3_["Power"]);
            }
            if(_loc3_.hasOwnProperty("Type"))
            {
               _loc6_ = String(_loc3_["Type"]);
            }
            if(_loc5_ && _loc5_ == 150 && _loc6_ == param1)
            {
               _loc2_.push(int(_loc4_));
            }
         }
         return _loc2_;
      }
      
      public static function getHideSkillId(param1:int) : int
      {
         var _loc3_:int = 0;
         if(PetXMLInfo.getEvolvesTo(param1) > 0)
         {
            param1 = int(PetXMLInfo.getEvolvesTo(param1));
         }
         var _loc2_:Array = hideMovesMap[param1];
         if(_loc2_)
         {
            _loc3_ = 0;
            while(_loc3_ < _loc2_.length)
            {
               if(_loc2_[_loc3_].o == 0)
               {
                  return _loc2_[_loc3_].id;
               }
               _loc3_++;
            }
         }
         return 0;
      }
      
      public static function getAllHideSkills(param1:int) : Array
      {
         var _loc4_:int = 0;
         if(PetXMLInfo.getEvolvesTo(param1) > 0)
         {
            param1 = int(PetXMLInfo.getEvolvesTo(param1));
         }
         var _loc2_:Array = hideMovesMap[param1];
         var _loc3_:Array = [];
         if(_loc2_)
         {
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               _loc3_.push(_loc2_[_loc4_].id);
               _loc4_++;
            }
         }
         return _loc3_;
      }
      
      public static function getLearnHideSkills(param1:int) : Array
      {
         var _loc4_:int = 0;
         if(PetXMLInfo.getEvolvesTo(param1) > 0)
         {
            param1 = int(PetXMLInfo.getEvolvesTo(param1));
         }
         var _loc2_:Array = hideMovesMap[param1];
         var _loc3_:Array = [];
         if(_loc2_)
         {
            _loc4_ = 0;
            while(_loc4_ < _loc2_.length)
            {
               if(_loc2_[_loc4_].o == 1)
               {
                  _loc3_.push(_loc2_[_loc4_].id);
               }
               _loc4_++;
            }
         }
         return _loc3_;
      }
      
      public static function isHideSkillId(param1:int, param2:int) : Boolean
      {
         var _loc5_:int = 0;
         var _loc3_:Boolean = false;
         if(PetXMLInfo.getEvolvesTo(param1) > 0)
         {
            param1 = int(PetXMLInfo.getEvolvesTo(param1));
         }
         var _loc4_:Array;
         if(_loc4_ = hideMovesMap[param1])
         {
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               if(_loc4_[_loc5_].id == param2)
               {
                  _loc3_ = true;
                  break;
               }
               _loc5_++;
            }
         }
         return _loc3_;
      }
      
      public static function isOHideSkillId(param1:int, param2:int) : Boolean
      {
         var _loc5_:int = 0;
         var _loc3_:Boolean = false;
         if(PetXMLInfo.getEvolvesTo(param1) > 0)
         {
            param1 = int(PetXMLInfo.getEvolvesTo(param1));
         }
         var _loc4_:Array;
         if(_loc4_ = hideMovesMap[param1])
         {
            _loc5_ = 0;
            while(_loc5_ < _loc4_.length)
            {
               if(_loc4_[_loc5_].id == param2 && _loc4_[_loc5_].o == 0)
               {
                  _loc3_ = true;
                  break;
               }
               _loc5_++;
            }
         }
         return _loc3_;
      }
      
      public static function getSPHideMovesInfo(param1:int) : XML
      {
         return spHideMovesMap.getValue(param1);
      }
      
      public static function getSkillObj(param1:uint) : Object
      {
         var _loc2_:Object = null;
         if(movesMap.containsKey(param1))
         {
            _loc2_ = movesMap.getValue(param1);
         }
         return _loc2_;
      }
      
      public static function getMaxType() : void
      {
      }
   }
}
