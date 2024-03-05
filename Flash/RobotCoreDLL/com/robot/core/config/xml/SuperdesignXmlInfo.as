package com.robot.core.config.xml
{
   import com.robot.core.CommandID;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   
   public class SuperdesignXmlInfo
   {
      
      private static var xmlClass:Class = SuperdesignXmlInfo_xmlClass;
      
      private static var _xml:XML = XML(new xmlClass());
      
      private static var _designHashMap:HashMap;
      
      private static var _rulesHashMap:HashMap;
      
      private static var _mouldsHashMap:HashMap;
      
      {
         setup();
      }
      
      public function SuperdesignXmlInfo()
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
         _xml = XML(new xmlClass());
         var _loc1_:XMLList = _xml.elements("Design");
         _designHashMap = new HashMap();
         for each(_loc2_ in _loc1_)
         {
            _designHashMap.add(uint(_loc2_.@ID),_loc2_);
         }
         _loc3_ = _xml.elements("Rules")[0].Rule;
         _rulesHashMap = new HashMap();
         for each(_loc4_ in _loc3_)
         {
            _rulesHashMap.add(uint(_loc4_.@ID),_loc4_);
         }
         _loc5_ = _xml.elements("Moulds");
         _mouldsHashMap = new HashMap();
         for each(_loc6_ in _loc5_)
         {
            _mouldsHashMap.add(uint(_loc6_.@ID),_loc6_);
         }
      }
      
      public static function getDesignInfoByID(param1:int) : XML
      {
         return _designHashMap.getValue(param1);
      }
      
      public static function getRewardInfoById(param1:int) : Object
      {
         var _loc2_:XML = getDesignInfoByID(param1);
         var _loc3_:XMLList = _loc2_.elements("Reward");
         var _loc4_:Object;
         (_loc4_ = new Object()).ItemID = _loc3_[0].@ItemID;
         _loc4_.MonsterID = _loc3_[0].@MonsterID;
         _loc4_.MintMarkID = _loc3_[0].@MintMarkID;
         _loc4_.MoveID = _loc3_[0].@MoveID;
         _loc4_.NewSeId = _loc3_[0].@NewSeId;
         _loc4_.GainValue = _loc3_[0].@GainValue;
         return _loc4_;
      }
      
      public static function getConfigureInfoById(param1:int) : Object
      {
         var _loc2_:XML = getDesignInfoByID(param1);
         var _loc3_:XMLList = _loc2_.elements("Configure");
         var _loc4_:Object;
         (_loc4_ = new Object()).Exchange_pet = _loc3_[0].@Exchange_pet;
         _loc4_.Exchange_mintmark = _loc3_[0].@Exchange_mintmark;
         _loc4_.Exchange_newse = _loc3_[0].@Exchange_newse;
         _loc4_.Exchange_moves = _loc3_[0].@Exchange_moves;
         _loc4_.Times = _loc3_[0].@Times;
         _loc4_.ProgressValue = _loc3_[0].@ProgressValue;
         _loc4_.TimeValue = _loc3_[0].@TimeValue;
         _loc4_.SweepItemID = int(_loc3_[0].@SweepItemID);
         _loc4_.SweepProductID = int(_loc3_[0].@SweepProductID);
         return _loc4_;
      }
      
      public static function getEasyBattleInfoById(param1:int) : XML
      {
         var _loc2_:XML = getDesignInfoByID(param1);
         var _loc3_:XMLList = _loc2_.elements("EasyBattle");
         return _loc3_[0];
      }
      
      public static function getNormalBattleInfoById(param1:int) : XML
      {
         var _loc2_:XML = getDesignInfoByID(param1);
         var _loc3_:XMLList = _loc2_.elements("NormalBattle");
         return _loc3_[0];
      }
      
      public static function getHardBattleInfoById(param1:int) : XML
      {
         var _loc2_:XML = getDesignInfoByID(param1);
         var _loc3_:XMLList = _loc2_.elements("HardBattle");
         return _loc3_[0];
      }
      
      public static function getBattleInfoById(param1:int, param2:int) : Object
      {
         var _loc3_:XML = null;
         if(param2 == 1)
         {
            _loc3_ = getEasyBattleInfoById(param1);
         }
         else if(param2 == 2)
         {
            _loc3_ = getNormalBattleInfoById(param1);
         }
         else
         {
            _loc3_ = getHardBattleInfoById(param1);
         }
         var _loc4_:Object;
         (_loc4_ = new Object()).Out = _loc3_.@Out;
         _loc4_.desc = String(_loc3_.@Desc);
         var _loc5_:Array = [];
         var _loc6_:String;
         _loc5_ = (_loc6_ = String(_loc3_.@RuleID)).split(" ");
         _loc4_.RuleIDs = _loc5_;
         _loc4_.TaskStyle = _loc3_.@TaskStyle;
         _loc4_.BattleCnt = _loc3_.@BattleCnt;
         return _loc4_;
      }
      
      public static function getLvInfoById(param1:int, param2:int) : Array
      {
         var _loc3_:XML = null;
         var _loc6_:XML = null;
         var _loc7_:Object = null;
         if(param2 == 1)
         {
            _loc3_ = getEasyBattleInfoById(param1);
         }
         else if(param2 == 2)
         {
            _loc3_ = getNormalBattleInfoById(param1);
         }
         else
         {
            _loc3_ = getHardBattleInfoById(param1);
         }
         var _loc4_:XMLList = _loc3_.elements("Task");
         var _loc5_:Array = [];
         for each(_loc6_ in _loc4_)
         {
            (_loc7_ = new Object()).ID = _loc6_.@ID;
            _loc7_.BattleBoss = _loc6_.@BattleBoss;
            _loc7_.Battlelevel = _loc6_.@Battlelevel;
            _loc7_.BattleType = _loc6_.@BattleType;
            _loc7_.BossID = _loc6_.@BossID;
            _loc7_.Desc = _loc6_.@Desc;
            _loc5_.push(_loc7_);
         }
         return _loc5_;
      }
      
      public static function getRulenfoById(param1:int) : Object
      {
         var _loc2_:XML = _rulesHashMap.getValue(param1);
         var _loc3_:Object = new Array();
         _loc3_.ID = int(_loc2_.@ID);
         _loc3_.MouldID = _loc2_.@MouldID;
         _loc3_.Args = _loc2_.@Args;
         _loc3_.Desc = String(_loc2_.@Desc);
         return _loc3_;
      }
      
      public static function getAchieveXml(param1:int) : XML
      {
         var _loc2_:XML = null;
         var _loc4_:XMLList = null;
         var _loc5_:XML = null;
         var _loc3_:XML = _designHashMap.getValue(param1);
         if(_loc3_)
         {
            if((Boolean(_loc4_ = _loc3_.Hardachievement)) && Boolean(_loc4_.length))
            {
               _loc5_ = _loc4_[0];
               _loc2_ = AchieveXMLInfo.getRule(int(_loc5_.@BranchID),int(_loc5_.@ruleID));
            }
         }
         return _loc2_;
      }
      
      public static function getMouldInfoById(param1:int) : Object
      {
         var _loc2_:XML = _mouldsHashMap.getValue(param1);
         var _loc3_:Object = new Array();
         _loc3_.ID = _loc2_.@ID;
         _loc3_.Forever = _loc2_.@Forever;
         return _loc3_;
      }
      
      public static function getFunByMouldID(param1:int, param2:Function, param3:Array = null) : void
      {
         var isSatisfied:Boolean = false;
         var foreverArr:Array = null;
         var paramArr:ByteArray = null;
         var num:int = 0;
         var MouldID:int = param1;
         var func:Function = param2;
         var ags:Array = param3;
         if(MouldID == 1)
         {
            isSatisfied = getNoSamePet();
            if(null != func)
            {
               func(isSatisfied);
            }
         }
         else if(MouldID == 2)
         {
            isSatisfied = getNoPeciallyPet(ags);
            if(null != func)
            {
               func(isSatisfied);
            }
         }
         else if(MouldID == 3)
         {
            isSatisfied = getBagALLPetLvIsFull();
            if(null != func)
            {
               func(isSatisfied);
            }
         }
         else if(MouldID == 4)
         {
            foreverArr = [getMouldInfoById(4).Forever];
            paramArr = new ByteArray();
            for each(num in foreverArr)
            {
               paramArr.writeInt(num);
            }
            SocketConnection.sendByQueue(CommandID.GAME_GET_PLAYER_INFO,[foreverArr.length,paramArr],function(param1:SocketEvent):void
            {
               var _loc2_:ByteArray = param1.data as ByteArray;
               _loc2_.position = 0;
               var _loc3_:int = int(_loc2_.readUnsignedInt());
               var _loc4_:Array = new Array();
               var _loc5_:int = 0;
               while(_loc5_ < _loc3_)
               {
                  _loc4_.push(_loc2_.readUnsignedInt());
                  _loc5_++;
               }
               isSatisfied = _loc4_[0] >= ags[0] ? false : true;
               if(null != func)
               {
                  func(isSatisfied);
               }
            });
         }
      }
      
      private static function getNoSamePet() : Boolean
      {
         var _loc2_:PetInfo = null;
         var _loc3_:int = 0;
         var _loc1_:Array = [];
         for each(_loc2_ in PetManager.infos)
         {
            _loc1_.push(_loc2_.id);
         }
         _loc1_.sort();
         _loc3_ = 0;
         while(_loc3_ < _loc1_.length - 1)
         {
            if(_loc1_[_loc3_] == _loc1_[_loc3_ + 1])
            {
               return false;
            }
            _loc3_++;
         }
         return true;
      }
      
      private static function getNoPeciallyPet(param1:Array) : Boolean
      {
         var _loc3_:PetInfo = null;
         param1 = PetManager.infos;
         var _loc2_:int = 0;
         while(_loc2_ < param1.length)
         {
            _loc3_ = param1[_loc2_] as PetInfo;
            if(param1.indexOf(_loc3_.id) >= 0)
            {
               return false;
            }
            _loc2_++;
         }
         return true;
      }
      
      public static function getBagALLPetLvIsFull() : Boolean
      {
         var _loc2_:PetInfo = null;
         var _loc1_:Array = [];
         for each(_loc2_ in PetManager.infos)
         {
            if(_loc2_.level < 100)
            {
               return false;
            }
         }
         return true;
      }
   }
}
