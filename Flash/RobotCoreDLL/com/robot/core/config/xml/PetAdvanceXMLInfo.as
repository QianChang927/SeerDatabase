package com.robot.core.config.xml
{
   import org.taomee.ds.HashMap;
   
   public class PetAdvanceXMLInfo
   {
      
      private static var petadvXMLClass:Class = PetAdvanceXMLInfo_petadvXMLClass;
      
      private static var petadvXML:XML = XML(new petadvXMLClass());
      
      private static var taskMap:HashMap = new HashMap();
      
      private static var petMap:HashMap = new HashMap();
      
      private static var backInfos:HashMap = new HashMap();
      
      private static var backRollPayInfos:Array = [];
      
      private static var backFreeCnt:int;
      
      private static var allbackArr:Array = [];
      
      {
         setup();
      }
      
      public function PetAdvanceXMLInfo()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc2_:XML = null;
         var _loc3_:* = undefined;
         var _loc4_:* = undefined;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc1_:XMLList = petadvXML.elements("Task");
         for each(_loc2_ in _loc1_)
         {
            _loc5_ = int(_loc2_.elements("Advances")[0].@MonsterId);
            taskMap.add(int(_loc2_.@ID),_loc2_);
            petMap.add(_loc5_,_loc2_.@ID);
         }
         _loc3_ = petadvXML.elements("BackMonsters")[0];
         backRollPayInfos = [0,0,0];
         backRollPayInfos[0] = int(_loc3_.@refresh_base_cost);
         backRollPayInfos[1] = int(_loc3_.@refresh_add_cost);
         backRollPayInfos[2] = int(_loc3_.@refresh_max_cost);
         backFreeCnt = int(_loc3_.@free_cnt);
         _loc4_ = _loc3_.elements("Back");
         for each(_loc2_ in _loc4_)
         {
            allbackArr.push(int(_loc2_.@ID));
            if(int(_loc2_.@IsBack) != 0)
            {
               _loc6_ = int(_loc2_.@ID);
               backInfos.add(_loc6_,_loc2_);
            }
         }
      }
      
      public static function checkAdvanceExist(param1:int) : Boolean
      {
         return petMap.containsKey(param1);
      }
      
      public static function getTaskPet(param1:int) : int
      {
         var _loc2_:* = petMap.getKeys();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(int(petMap.getValue(_loc2_[_loc3_])) == param1)
            {
               return _loc2_[_loc3_];
            }
            _loc3_++;
         }
         return -1;
      }
      
      public static function getTaskIdByPet(param1:int) : int
      {
         var _loc2_:* = petMap.getKeys();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_.length)
         {
            if(_loc2_[_loc3_] == param1)
            {
               return int(petMap.getValue(_loc2_[_loc3_]));
            }
            _loc3_++;
         }
         return -1;
      }
      
      public static function getPetAdvancedInfo(param1:int) : XML
      {
         var _loc2_:int = int(petMap.getValue(param1));
         return taskMap.getValue(_loc2_).elements("Advances")[0];
      }
      
      public static function getPetAdvancedChallengeBossInfo(param1:int, param2:int) : Object
      {
         var _loc4_:XML = null;
         var _loc3_:XMLList = taskMap.getValue(param1).elements("Battle")[0].elements("Task");
         for each(_loc4_ in _loc3_)
         {
            if(_loc4_.@ID == param2)
            {
               return {
                  "bossId":_loc4_.@BattleBoss,
                  "desc":_loc4_.@Desc
               };
            }
         }
         return null;
      }
      
      public static function getExchangeItem(param1:int, param2:int) : Array
      {
         var _loc3_:String = String(taskMap.getValue(param1).elements("Exchange")[0].@ItemID);
         var _loc4_:int = int(_loc3_.split("_")[param2 - 1]);
         _loc3_ = String(taskMap.getValue(param1).elements("Exchange")[0].@ProductID);
         var _loc5_:int = int(_loc3_.split("_")[param2 - 1]);
         return [_loc4_,_loc5_];
      }
      
      public static function getPetAdvancedChallengeCnt(param1:int) : Object
      {
         var _loc2_:XML = taskMap.getValue(param1);
         var _loc3_:int = int(_loc2_.elements("Battle")[0].@FreeBattleKey);
         var _loc4_:int = int(_loc2_.elements("Battle")[0].@FreeBattleCnt);
         return {
            "forever":_loc3_,
            "sumCnt":_loc4_
         };
      }
      
      public static function getPetAdvancedChallengeCoin(param1:int) : Object
      {
         var _loc2_:XML = taskMap.getValue(param1);
         var _loc3_:int = int(_loc2_.@OutItemKey);
         var _loc4_:int = _loc2_..@PerCostCoinA;
         return {
            "forever":_loc3_,
            "perCost":_loc4_
         };
      }
      
      public static function getPetAdvancedChallengeCompRequire(param1:int) : int
      {
         var _loc2_:XML = taskMap.getValue(param1);
         return int(_loc2_.@AllProgress);
      }
      
      public static function getPetAdvancedNewEv(param1:int) : Array
      {
         var _loc2_:int = int(petMap.getValue(param1));
         var _loc3_:XML = taskMap.getValue(_loc2_);
         var _loc4_:String;
         return (_loc4_ = _loc3_.elements("Advances")[0].elements("Race")[0].@NewRace).split(" ");
      }
      
      public static function getPetAdvancedSkill(param1:int) : Array
      {
         var _loc2_:int = int(petMap.getValue(param1));
         var _loc3_:XML = taskMap.getValue(_loc2_);
         var _loc4_:String;
         return (_loc4_ = _loc3_.elements("Advances")[0].elements("spMove")[0].@SpMoves).split(" ").map(toInt);
      }
      
      public static function getPetAdvancedFifthSkill(param1:int) : Array
      {
         var _loc2_:int = int(petMap.getValue(param1));
         var _loc3_:XML = taskMap.getValue(_loc2_);
         var _loc4_:String;
         return (_loc4_ = _loc3_.elements("Advances")[0].elements("exMove")[0].@ExtraMoves).split(" ").map(toInt);
      }
      
      public static function checkInAdvancedPet(param1:int) : Boolean
      {
         return petMap.containsKey(param1);
      }
      
      private static function toInt(param1:*, param2:int, param3:Array) : int
      {
         return parseInt(param1);
      }
      
      public static function getAdvEffectDesc(param1:int) : XML
      {
         var _loc2_:int = int(petMap.getValue(param1));
         var _loc3_:XML = taskMap.getValue(_loc2_);
         return _loc3_.elements("Advances")[0].elements("AdvEffect")[0];
      }
      
      public static function getCurRollCost(param1:int) : int
      {
         if(param1 <= 0)
         {
            return backRollPayInfos[0];
         }
         var _loc2_:int = int(backRollPayInfos[0]);
         _loc2_ += param1 * backRollPayInfos[1];
         if(_loc2_ > backRollPayInfos[2])
         {
            return backRollPayInfos[2];
         }
         return _loc2_;
      }
      
      public static function getBackInfo(param1:int) : XML
      {
         if(backInfos.containsKey(param1))
         {
            return backInfos.getValue(param1);
         }
         return null;
      }
      
      public static function getBackFreeCnt() : int
      {
         return backFreeCnt;
      }
      
      public static function checkBackIsOpen(param1:int) : Boolean
      {
         if(backInfos.containsKey(param1))
         {
            return int(backInfos.getValue(param1).@IsBack) != 0;
         }
         return false;
      }
      
      public static function checkIsBackAdvPet(param1:int) : Boolean
      {
         return allbackArr.indexOf(param1) >= 0;
      }
   }
}
