package com.robot.core.config.xml
{
   import com.robot.core.info.UserInfo;
   import flash.utils.getDefinitionByName;
   import org.taomee.ds.HashMap;
   
   public class PetXMLInfo
   {
      
      private static var xmlClass:Class = PetXMLInfo_xmlClass;
      
      private static var abilityGrageClass:Class = PetXMLInfo_abilityGrageClass;
      
      private static var _dataMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _abilityGradeConfig:Object;
      
      private static var _canChangeAbilityValuePetIds:Array = [];
      
      private static var _combinationBonusPets:Array = [2132,2163,2190];
      
      {
         setup();
      }
      
      public function PetXMLInfo()
      {
         super();
      }
      
      private static function setup() : void
      {
         var _loc4_:XML = null;
         _dataMap = new HashMap();
         var _loc1_:Date = new Date();
         _xml = XML(new xmlClass());
         var _loc2_:Date = new Date();
         var _loc3_:XMLList = _xml.elements("Monster");
         for each(_loc4_ in _loc3_)
         {
            _dataMap.add(_loc4_.@ID.toString(),_loc4_);
            if(getCanChangeAbility(_loc4_.@ID.toString()))
            {
               _canChangeAbilityValuePetIds.push(uint(_loc4_.@ID));
            }
         }
         _abilityGradeConfig = JSON.parse(new abilityGrageClass());
      }
      
      public static function get canChangeAbilityValuePetIds() : Array
      {
         return _canChangeAbilityValuePetIds;
      }
      
      public static function getIdList() : Array
      {
         return _dataMap.getKeys();
      }
      
      public static function get dataList() : Array
      {
         return _dataMap.getValues();
      }
      
      public static function getName(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@DefName.toString();
         }
         return "";
      }
      
      public static function getRealId(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(int(_loc2_.@RealId) > 0)
            {
               param1 = uint(int(_loc2_.@RealId));
            }
         }
         return param1;
      }
      
      public static function getCombo(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(int(_loc2_.@Combo) > 0)
            {
               param1 = uint(int(_loc2_.@Combo));
            }
         }
         return param1;
      }
      
      public static function getTransform(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(int(_loc2_.@Transform) > 0)
            {
               param1 = uint(int(_loc2_.@Transform));
            }
         }
         return param1;
      }
      
      public static function getType(param1:uint) : String
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            return _loc2_.@Type.toString();
         }
         return "";
      }
      
      public static function getTypeList(param1:uint) : XMLList
      {
         var t:uint = param1;
         return _xml.(@Type == t);
      }
      
      public static function checkSuper(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_)
         {
            if(_loc2_.hasOwnProperty("@Vip"))
            {
               return Boolean(uint(_loc2_.@Vip));
            }
         }
         return false;
      }
      
      public static function getEvolvFlag(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return _loc2_.@EvolvFlag;
      }
      
      public static function getEvolvingLv(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return _loc2_.@EvolvingLv;
      }
      
      public static function getPrimitiveLv(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         var _loc3_:uint = uint(_loc2_.@EvolvesFrom);
         if(_loc3_ == 0)
         {
            return _loc2_.@ID;
         }
         return getPrimitiveLv(_loc3_);
      }
      
      public static function getSkillListForLv(param1:uint, param2:uint) : Array
      {
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc3_:Array = [];
         if((_loc4_ = _dataMap.getValue(param1)) == null)
         {
            return _loc3_;
         }
         _loc5_ = _loc4_.elements("LearnableMoves")[0].elements("Move");
         for each(_loc6_ in _loc5_)
         {
            if(uint(_loc6_.@LearningLv) <= param2)
            {
               _loc3_.push(uint(_loc6_.@ID));
            }
         }
         return _loc3_;
      }
      
      public static function getSkillListRecommend(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc2_:Array = [];
         _loc3_ = _dataMap.getValue(param1);
         if(_loc3_ == null)
         {
            return _loc2_;
         }
         _loc4_ = _loc3_.elements("LearnableMoves")[0].elements("Move");
         for each(_loc5_ in _loc4_)
         {
            if(Boolean(_loc5_.hasOwnProperty("@Rec")) && int(_loc5_.@Rec) == 1)
            {
               _loc2_.push(uint(_loc5_.@ID));
            }
         }
         return _loc2_;
      }
      
      public static function getCanLearnSkillList(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc2_:Array = [];
         _loc3_ = _dataMap.getValue(param1);
         if(_loc3_ == null)
         {
            return _loc2_;
         }
         _loc4_ = _loc3_.elements("LearnableMoves")[0].elements("Move");
         for each(_loc5_ in _loc4_)
         {
            _loc2_.push(uint(_loc5_.@ID));
         }
         return _loc2_;
      }
      
      public static function getCanLearnSPSkillList(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc2_:Array = [];
         _loc3_ = _dataMap.getValue(param1);
         if(_loc3_ == null)
         {
            return _loc2_;
         }
         _loc4_ = _loc3_.elements("LearnableMoves")[0].elements("SpMove");
         for each(_loc5_ in _loc4_)
         {
            _loc2_.push(uint(_loc5_.@ID));
         }
         return _loc2_;
      }
      
      public static function getAdvanceSkill(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc2_:Array = [];
         _loc3_ = _dataMap.getValue(param1);
         if(_loc3_ == null)
         {
            return _loc2_;
         }
         _loc4_ = _loc3_.elements("LearnableMoves")[0].elements("AdvMove");
         for each(_loc5_ in _loc4_)
         {
            _loc2_.push(uint(_loc5_.@ID));
         }
         return _loc2_;
      }
      
      public static function getCanLearnAdvSkillTagList(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc2_:Array = [];
         _loc3_ = _dataMap.getValue(param1);
         if(_loc3_ == null)
         {
            return _loc2_;
         }
         _loc4_ = _loc3_.elements("LearnableMoves")[0].elements("AdvMove");
         for each(_loc5_ in _loc4_)
         {
            _loc2_.push(uint(_loc5_.@Tag));
         }
         return _loc2_;
      }
      
      public static function getAdditionFifthSkill(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc2_:Array = [];
         _loc3_ = _dataMap.getValue(param1);
         if(_loc3_ == null)
         {
            return _loc2_;
         }
         if(!_loc3_.hasOwnProperty("SpExtraMoves"))
         {
            return _loc2_;
         }
         _loc4_ = _loc3_.elements("SpExtraMoves")[0].elements("Move");
         for each(_loc5_ in _loc4_)
         {
            _loc2_.push(uint(_loc5_.@ID));
         }
         return _loc2_;
      }
      
      public static function checkIsAdditonFifthSkill(param1:uint, param2:int) : Boolean
      {
         var _loc4_:XML = null;
         var _loc5_:XMLList = null;
         var _loc6_:XML = null;
         var _loc3_:Array = [];
         if((_loc4_ = _dataMap.getValue(param1)) == null)
         {
            return false;
         }
         if(!_loc4_.hasOwnProperty("SpExtraMoves"))
         {
            return false;
         }
         _loc5_ = _loc4_.elements("SpExtraMoves")[0].elements("Move");
         for each(_loc6_ in _loc5_)
         {
            if(param2 == int(_loc6_.@ID))
            {
               return true;
            }
         }
         return false;
      }
      
      public static function getOldFifthSkill(param1:uint) : Array
      {
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc2_:Array = [];
         _loc3_ = _dataMap.getValue(param1);
         if(_loc3_ == null)
         {
            return _loc2_;
         }
         if(!_loc3_.hasOwnProperty("ShowExtraMoves"))
         {
            return _loc2_;
         }
         _loc4_ = _loc3_.elements("ShowExtraMoves")[0].elements("Move");
         for each(_loc5_ in _loc4_)
         {
            _loc2_.push(uint(_loc5_.@ID));
         }
         return _loc2_;
      }
      
      public static function getTypeCN(param1:uint) : String
      {
         return SkillXMLInfo.petTypeNameCN(uint(getType(param1)));
      }
      
      public static function getTypeEN(param1:uint) : String
      {
         return SkillXMLInfo.petTypeNameEN(uint(getType(param1)));
      }
      
      public static function isDarkPet(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@IsDark"))
         {
            return true;
         }
         return false;
      }
      
      public static function fuseMaster(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return Boolean(uint(_loc2_.@FuseMaster));
      }
      
      public static function fuseSub(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return Boolean(uint(_loc2_.@FuseSub));
      }
      
      public static function getPetGender(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@Gender"))
         {
            return uint(_loc2_.@Gender);
         }
         return 0;
      }
      
      public static function getPetGenderCN(param1:uint) : String
      {
         if(param1 == 1)
         {
            return "雄性";
         }
         if(param1 == 2)
         {
            return "雌性";
         }
         return "无性别";
      }
      
      public static function getIsPropRaise(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_.hasOwnProperty("@VipBtlAdj"))
         {
            return Boolean(uint(_loc2_.@VipBtlAdj));
         }
         return false;
      }
      
      public static function isFlyPet(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@isFlyPet"))
         {
            return Boolean(uint(_loc2_.@isFlyPet));
         }
         return false;
      }
      
      public static function isRidePet(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@isRidePet"))
         {
            return Boolean(uint(_loc2_.@isRidePet));
         }
         return false;
      }
      
      public static function isRidePetOpen(param1:uint, param2:UserInfo) : Boolean
      {
         var _loc3_:Boolean = false;
         if(param1 == 299)
         {
            if(param2.openTiger)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 729)
         {
            if(param2.openDragon)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 760)
         {
            if(param2.openYanMo)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 898)
         {
            if(param2.openSaiBoSiTe)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 502)
         {
            if(param2.openGreenDragon)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 505)
         {
            if(param2.openQilin)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1093)
         {
            if(param2.openJieensi)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1087)
         {
            if(param2.openBaenna)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 811)
         {
            if(param2.openShiZuLingShou)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 865)
         {
            if(param2.openTuoLuKe)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1337)
         {
            if(param2.openJixieTacoLyn)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 501)
         {
            if(param2.openBasite)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 503)
         {
            if(param2.openBaihu)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1855)
         {
            if(param2.openSitanli)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 2045)
         {
            if(param2.openRuidehaosi)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 90)
         {
            if(param2.openDierke)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 2086)
         {
            if(param2.openWhiteHorse)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1730)
         {
            if(param2.openKubeisa)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1068)
         {
            if(param2.openBaKeDi)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1933)
         {
            if(param2.openSiweila)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 972)
         {
            if(param2.openPailabi)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1242)
         {
            if(param2.openKaimila)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 828)
         {
            if(param2.openKuangyeheiniao)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 2271)
         {
            if(param2.openNaKaLuoHa)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 2233)
         {
            if(param2.openGeErBoKe)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1534)
         {
            if(param2.openELingShou)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 1256)
         {
            if(param2.openGhostTiger)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 2563)
         {
            if(param2.openMegatronTiger)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 3779)
         {
            if(param2.openPeiluomu)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 3853)
         {
            if(param2.openYinLeiTianLong)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 3849)
         {
            if(param2.openHanDiJuLong)
            {
               _loc3_ = true;
            }
         }
         else if(param1 == 4306)
         {
            if(param2.openYikongzhanqi)
            {
               _loc3_ = true;
            }
         }
         return _loc3_;
      }
      
      public static function flyPetY(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@nameY"))
         {
            return Number(_loc2_.@nameY);
         }
         return 0;
      }
      
      public static function flyPetSpeed(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@speed"))
         {
            return Number(_loc2_.@speed);
         }
         return 0;
      }
      
      public static function petScale(param1:uint) : Number
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@scale"))
         {
            return Number(_loc2_.@scale);
         }
         return 1;
      }
      
      public static function getEvolvesTo(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return uint(_loc2_.@EvolvesTo);
      }
      
      public static function getPetXML(param1:uint) : XML
      {
         return _dataMap.getValue(param1);
      }
      
      public static function getAtkById(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return uint(_loc2_.@Atk);
      }
      
      public static function getSpd(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         return uint(_loc2_.@spd);
      }
      
      public static function getAllEvById(param1:uint) : Array
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         var _loc3_:Array = [];
         _loc3_.push(uint(_loc2_.@HP));
         _loc3_.push(uint(_loc2_.@Atk));
         _loc3_.push(uint(_loc2_.@Def));
         _loc3_.push(uint(_loc2_.@SpAtk));
         _loc3_.push(uint(_loc2_.@SpDef));
         _loc3_.push(uint(_loc2_.@Spd));
         return _loc3_;
      }
      
      public static function getIsAbility(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@IsAbilityMon"))
         {
            return Boolean(_loc2_.@IsAbilityMon);
         }
         return false;
      }
      
      public static function getCanChangeAbility(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@DiyRaceMax"))
         {
            return true;
         }
         return false;
      }
      
      public static function getAbilityMaxValues(param1:uint) : Array
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@DiyRaceMax"))
         {
            return getValuesFromString(String(_loc2_.@DiyRaceMax));
         }
         return [];
      }
      
      public static function getAbilityMinValues(param1:uint) : Array
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@DiyRaceMin"))
         {
            return getValuesFromString(String(_loc2_.@DiyRaceMin));
         }
         return [];
      }
      
      private static function getValuesFromString(param1:String) : Array
      {
         var _loc2_:Array = param1.split(" ");
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            _loc2_[_loc3_] = parseInt(_loc2_[_loc3_]);
            _loc3_++;
         }
         return _loc2_;
      }
      
      public static function getCanBeAbility(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@VariationID"))
         {
            return Boolean(_loc2_.@VariationID);
         }
         return false;
      }
      
      public static function getLastSkillID(param1:uint) : uint
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         var _loc3_:uint = uint(_loc2_.@EvolvesTo);
         while(_loc3_ != 0)
         {
            _loc2_ = _dataMap.getValue(_loc3_);
            _loc3_ = uint(_loc2_.@EvolvesTo);
         }
         var _loc4_:XMLList = _loc2_.descendants("Move");
         return _loc4_[_loc4_.length() - 1].@ID;
      }
      
      public static function getParentIDs(param1:uint) : Array
      {
         var _loc2_:Array = [];
         var _loc3_:XML = _dataMap.getValue(param1);
         var _loc4_:uint = uint(_loc3_.@EvolvesFrom);
         while(_loc4_ != 0)
         {
            _loc2_.push(_loc4_);
            _loc3_ = _dataMap.getValue(_loc4_);
            _loc4_ = uint(_loc3_.@EvolvesFrom);
         }
         _loc2_.reverse();
         return _loc2_;
      }
      
      public static function getIsFu(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_ && _loc2_.hasOwnProperty("@IsFuseMon") && String(_loc2_.@IsFuseMon) == "1")
         {
            return true;
         }
         return false;
      }
      
      public static function getIsBr(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(_loc2_ && _loc2_.hasOwnProperty("@BreedingMon") && String(_loc2_.@BreedingMon) == "1")
         {
            return true;
         }
         return false;
      }
      
      public static function getPetEvoIds(param1:uint) : Array
      {
         var _loc10_:XML = null;
         var _loc11_:int = 0;
         var _loc12_:int = 0;
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         var _loc4_:XML;
         if((_loc4_ = _dataMap.getValue(param1)).hasOwnProperty("@SuperMon") && String(_loc4_.@Supermon) == "1")
         {
            _loc3_ = 1;
         }
         _loc2_.push(_loc4_);
         var _loc5_:int = int(_loc4_.@EvolvesFrom);
         while(_loc5_)
         {
            _loc10_ = _dataMap.getValue(_loc5_);
            _loc2_.unshift(_loc10_);
            if(_loc10_.hasOwnProperty("@EvolvFlag"))
            {
               _loc5_ = 0;
               _loc3_ = 2;
            }
            else if(_loc3_ == 1)
            {
               _loc5_ = 0;
            }
            else
            {
               _loc5_ = int(_loc10_.@EvolvesFrom);
            }
         }
         var _loc6_:int = int(_loc4_.@EvolvesTo);
         var _loc7_:XML = _loc4_;
         while(_loc6_)
         {
            _loc7_ = _dataMap.getValue(_loc6_);
            _loc2_.push(_loc7_);
            _loc6_ = int(_loc7_.@EvolvesTo);
         }
         if(_loc7_.@Type == "6" && _loc7_.hasOwnProperty("@EvolvFlag") && String(_loc7_.@EvolvFlag) != "")
         {
            _loc11_ = int(_loc7_.@EvolvFlag);
            _loc12_ = int(EvolveXMLInfo.getMonToIDs(_loc11_)[0]["MonTo"]);
            _loc2_.push(_dataMap.getValue(_loc12_));
         }
         var _loc8_:Array;
         (_loc8_ = []).push(_loc3_);
         var _loc9_:int = 0;
         while(_loc9_ < _loc2_.length)
         {
            _loc8_.push(_loc2_[_loc9_].@ID);
            _loc9_++;
         }
         return _loc8_;
      }
      
      public static function getPetClass(param1:uint) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@PetClass"))
         {
            return int(_loc2_.@PetClass);
         }
         return -1;
      }
      
      public static function getIsZijin(param1:uint) : Boolean
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@isZijin"))
         {
            return Boolean(uint(_loc2_.@isZijin));
         }
         return false;
      }
      
      public static function isCombinationBonusPet(param1:int) : Boolean
      {
         return _combinationBonusPets.indexOf(param1) != -1;
      }
      
      public static function getCharacterAttrParam(param1:uint) : int
      {
         var _loc2_:XML = _dataMap.getValue(param1);
         if(Boolean(_loc2_) && _loc2_.hasOwnProperty("@CharacterAttrParam"))
         {
            return int(_loc2_.@CharacterAttrParam);
         }
         return -1;
      }
      
      public static function isLordOfWarPet(param1:int) : Boolean
      {
         var _loc5_:Array = null;
         var _loc6_:int = 0;
         var _loc2_:Array = getDefinitionByName("com.robot.app2.control.LordOfWarController")["PET_IDS0"];
         var _loc3_:Array = getDefinitionByName("com.robot.app2.control.LordOfWarController")["PET_IDS1"];
         _loc2_ = _loc2_.concat(_loc3_);
         var _loc4_:Array = [];
         for each(param1 in _loc2_)
         {
            (_loc5_ = PetXMLInfo.getPetEvoIds(param1)).shift();
            _loc6_ = 0;
            while(_loc6_ < _loc5_.length)
            {
               _loc5_[_loc6_] = int(_loc5_[_loc6_]);
               _loc6_++;
            }
            _loc4_ = _loc4_.concat(_loc5_);
         }
         return _loc4_.indexOf(param1) != -1;
      }
      
      public static function getAbilityGrade(param1:String, param2:int) : int
      {
         if(_abilityGradeConfig[param1] == null)
         {
            return -1;
         }
         var _loc3_:Array = _abilityGradeConfig[param1];
         var _loc4_:int = int(_loc3_.length - 1);
         while(_loc4_ >= 0)
         {
            if(param2 >= _loc3_[_loc4_])
            {
               return _loc4_;
            }
            _loc4_--;
         }
         return 0;
      }
      
      public static function getPetsByName(param1:String, param2:int = 0, param3:int = 0, param4:Array = null) : Array
      {
         var _loc7_:String = null;
         var _loc5_:Array = [];
         var _loc6_:int = 0;
         while(_loc6_ < param3 - param2 + 1)
         {
            _loc7_ = getName(param2 + _loc6_);
            if(param4 != null)
            {
               if(_loc7_.indexOf(param1) != -1 && param4.indexOf(param2 + _loc6_) == -1)
               {
                  _loc5_.push(param2 + _loc6_);
               }
            }
            else if(_loc7_.indexOf(param1) != -1)
            {
               _loc5_.push(param2 + _loc6_);
            }
            _loc6_++;
         }
         return _loc5_;
      }
      
      public static function getOFifthSkill(param1:uint) : int
      {
         var _loc2_:int = 0;
         var _loc3_:XML = null;
         var _loc4_:XMLList = null;
         _loc3_ = _dataMap.getValue(param1);
         if(_loc3_ == null)
         {
            return 0;
         }
         if((Boolean(_loc4_ = _loc3_.ExtraMoves)) && Boolean(_loc4_[0]))
         {
            _loc2_ = int(_loc4_[0].Move[0].@ID);
         }
         return _loc2_;
      }
   }
}
