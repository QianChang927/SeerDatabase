package com.robot.app2.control.newSpt
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   
   public class LevelInfo
   {
       
      
      private var _id:int;
      
      private var _name:String;
      
      private var _startRegion:int;
      
      private var _fightRecordValue:int;
      
      private var _fightRecord:Array;
      
      private var _difficulty:int;
      
      private var _bossInfos:Array;
      
      private var _type:int;
      
      private var _rewardItems:Array;
      
      private var _specialReward:int;
      
      private var _mapId:int;
      
      public function LevelInfo(param1:XML)
      {
         var _loc3_:XML = null;
         var _loc4_:int = 0;
         var _loc5_:BossInfo = null;
         this._fightRecord = [];
         super();
         this._type = int(param1.parent().@type);
         this._name = String(param1.@name);
         this._startRegion = int(param1.@startRegion);
         this._fightRecordValue = int(param1.@fightRedordValue);
         this._difficulty = int(param1.@difficulty);
         var _loc2_:XMLList = param1.elements("boss");
         this._bossInfos = [];
         for each(_loc3_ in _loc2_)
         {
            _loc5_ = new BossInfo(_loc3_);
            this._bossInfos.push(_loc5_);
         }
         this._rewardItems = String((param1.elements("rewards")[0] as XML).@items).split(" ");
         _loc4_ = 0;
         while(_loc4_ < this._rewardItems.length)
         {
            this._rewardItems[_loc4_] = parseInt(this._rewardItems[_loc4_]);
            _loc4_++;
         }
         this._mapId = param1.@mapId;
         this._specialReward = int((param1.elements("specialReward")[0] as XML).@item);
         this._id = int(param1.@id);
      }
      
      public function set fightRecordValueArr(param1:int) : void
      {
         this._fightRecord = [];
         var _loc2_:int = 0;
         while(_loc2_ < this.bossNum)
         {
            this._fightRecord[_loc2_] = KTool.getBit(param1,_loc2_ + 1);
            _loc2_++;
         }
      }
      
      public function get rateOfProgress() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < this.bossNum)
         {
            if(0 == this._fightRecord[_loc2_])
            {
               return _loc1_;
            }
            _loc1_++;
            _loc2_++;
         }
         return _loc1_;
      }
      
      public function get currentBossRegion() : int
      {
         return this._startRegion + this.rateOfProgress;
      }
      
      public function get currentBossInfo() : BossInfo
      {
         return this._bossInfos[this.rateOfProgress];
      }
      
      public function get bossNum() : int
      {
         return this._bossInfos.length;
      }
      
      public function get difficulty() : int
      {
         return this._difficulty;
      }
      
      public function set difficulty(param1:int) : void
      {
         this._difficulty = param1;
      }
      
      public function get id() : int
      {
         return this._id;
      }
      
      public function get type() : int
      {
         return this._type;
      }
      
      public function set type(param1:int) : void
      {
         this._type = param1;
      }
      
      public function get fightRecordValue() : int
      {
         return this._fightRecordValue;
      }
      
      public function get name() : String
      {
         return this._name;
      }
      
      public function get picUrl() : String
      {
         return ClientConfig.getAppRes("newSpt/" + this._type + "_" + this._id);
      }
      
      public function get mapId() : int
      {
         return this._mapId;
      }
      
      public function get rewardItems() : Array
      {
         return this._rewardItems;
      }
      
      public function get specialReward() : int
      {
         return this._specialReward;
      }
      
      public function get isLastBoss() : Boolean
      {
         return this.rateOfProgress == this.bossNum - 1;
      }
      
      public function get lastBossInfo() : BossInfo
      {
         return this._bossInfos[this._bossInfos.length - 1];
      }
      
      public function get isUnlock() : Boolean
      {
         var _loc1_:int = NewSptManager.getMaxUnlockLevelByType(this._type);
         return this.id <= _loc1_ + 1;
      }
      
      public function get isPassAll() : Boolean
      {
         return this.rateOfProgress == this.bossNum;
      }
   }
}
