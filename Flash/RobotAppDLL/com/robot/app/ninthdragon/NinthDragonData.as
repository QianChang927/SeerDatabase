package com.robot.app.ninthdragon
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.net.SharedObject;
   
   public class NinthDragonData
   {
      
      private static var _instance:com.robot.app.ninthdragon.NinthDragonData;
       
      
      private var _haveSynced:Boolean;
      
      public var havePlayed:Boolean;
      
      public var gameNum:int;
      
      private var _flag:uint;
      
      public var leftFightNum:int;
      
      public var usedEightNum:int;
      
      public var leftGameNum:int;
      
      private var _leftFreeSummon:int;
      
      private var _starsNum:int;
      
      public var dustNum:int;
      
      private var _summonedIndex:int;
      
      public var damageValue:int;
      
      private var _haveGottenVipReward:Boolean;
      
      public var gameCdTime:int;
      
      public var gameList:Array;
      
      public var gameKey:int;
      
      public var gameBits:Array;
      
      public var gameDust:int;
      
      public var gameTant:int;
      
      public var gameSeer:int;
      
      public function NinthDragonData()
      {
         super();
         if(_instance)
         {
            throw new Error("NinthDragonData.getInstance() 访问");
         }
      }
      
      public static function getInstance() : com.robot.app.ninthdragon.NinthDragonData
      {
         if(!_instance)
         {
            _instance = new com.robot.app.ninthdragon.NinthDragonData();
         }
         return _instance;
      }
      
      public function get haveSynced() : Boolean
      {
         return this._haveSynced;
      }
      
      public function set flag(param1:uint) : void
      {
         this._flag = param1;
      }
      
      public function haveGottenFifth() : Boolean
      {
         return (this._flag & 512) > 0;
      }
      
      public function haveGotPrint() : Boolean
      {
         return (this._flag & 32) > 0;
      }
      
      public function setGotPrint() : void
      {
         this._flag |= 32;
      }
      
      public function currentCapacity(param1:int) : Boolean
      {
         return (this._flag & 1 << param1 - 1) > 0;
      }
      
      public function totalCapacity() : int
      {
         var _loc1_:int = 1;
         var _loc2_:int = 2;
         while(_loc2_ <= 5)
         {
            if(this.currentCapacity(_loc2_))
            {
               _loc1_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public function upgradeCapacity() : void
      {
         var _loc1_:int = 2;
         while(_loc1_ <= 5)
         {
            if(!this.currentCapacity(_loc1_))
            {
               this._flag |= 1 << _loc1_ - 1;
               break;
            }
            _loc1_++;
         }
      }
      
      public function haveGottenDragon() : Boolean
      {
         return (this._flag & 256) > 0;
      }
      
      public function haveSummoned() : Boolean
      {
         return (this._flag & 64) > 0;
      }
      
      public function setSummoned() : void
      {
         this._flag |= 64;
      }
      
      public function setAllDone() : void
      {
         this.setSummoned();
         this.setGotPrint();
      }
      
      public function haveFightedOff() : Boolean
      {
         return (this._flag & 128) > 0;
      }
      
      public function setFightedOff() : void
      {
         this._flag |= 128;
      }
      
      public function haveSigned(param1:int) : Boolean
      {
         return KTool.getBit(this._flag,param1 + 12) > 0;
      }
      
      public function setSignStatus(param1:int) : void
      {
         this._flag |= KTool.getBit(this._flag,param1 + 12);
      }
      
      public function haveGottenSignReward(param1:int) : Boolean
      {
         return (this._flag & 1 << param1 + 18) > 0;
      }
      
      public function getTotalSigned() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(_loc2_ < 7)
         {
            if(this.haveSigned(_loc2_))
            {
               _loc1_++;
            }
            _loc2_++;
         }
         return _loc1_;
      }
      
      public function setSignReward(param1:int) : void
      {
         this._flag |= 1 << param1 + 18;
      }
      
      public function leftFreeSummon() : int
      {
         return this._leftFreeSummon;
      }
      
      public function doFreeSummon() : void
      {
         ++this._leftFreeSummon;
      }
      
      public function totalStars() : int
      {
         return this._starsNum;
      }
      
      public function summonIndex() : int
      {
         return this._summonedIndex;
      }
      
      public function set summonedIndex(param1:int) : void
      {
         this._summonedIndex = param1;
      }
      
      public function leftSummonChip() : int
      {
         return NinthDragonConst.TOTAL_SUMMON_CHIP - this._summonedIndex;
      }
      
      public function haveGottenVipReward() : Boolean
      {
         return this._haveGottenVipReward;
      }
      
      public function gameResult() : Array
      {
         return new Array(this.gameDust,this.gameTant,this.gameSeer);
      }
      
      public function overGame() : void
      {
         this.dustNum += this.gameDust;
         this.gameList = new Array();
         this.gameKey = 0;
         this.gameDust = 0;
         this.gameTant = 0;
         this.gameSeer = 0;
      }
      
      public function addBonus(param1:int) : void
      {
         var _loc2_:int = Math.floor(param1 / 32);
         if(null == this.gameBits)
         {
            this.gameBits = new Array();
         }
         if(this.gameBits.length <= _loc2_)
         {
            this.gameBits.push(0);
         }
         var _loc3_:* = int(this.gameBits[_loc2_]);
         _loc3_ |= 1 << param1 - 1;
         this.gameBits[_loc2_] = _loc3_;
      }
      
      public function syncItem(param1:Function) : void
      {
         var callBack:Function = param1;
         ItemManager.updataeItems(1702501,1702502,function():void
         {
            _starsNum = ItemManager.getNumByID(NinthDragonConst.ITEM_ID_NINTH_DRAGON);
            dustNum = ItemManager.getNumByID(NinthDragonConst.ITEM_ID_NINTH_STAR);
            callBack.apply();
         });
      }
      
      public function syncData(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.getMultiValue([NinthDragonConst.DAILY_FIGHT_NUM,NinthDragonConst.DAILY_DRAGON_NUM,NinthDragonConst.DAILY_SUMMON_NUM,NinthDragonConst.DAILY_GAME_NUM,NinthDragonConst.FOREVER_FLAG,NinthDragonConst.FOREVER_CUMULATIVE_DAMAGE,NinthDragonConst.FOREVER_SUMMON_CHIP_INDEX,16210],function(param1:Array):void
         {
            var val:Array = param1;
            leftFightNum = val[0];
            usedEightNum = val[1];
            _leftFreeSummon = val[2];
            leftGameNum = val[3];
            _flag = val[4];
            damageValue = val[5];
            _summonedIndex = val[6];
            gameCdTime = Math.max(0,val[7] - SystemTimerManager.time);
            havePlayed = getLocalData() as Boolean;
            syncItem(function():void
            {
               _haveSynced = true;
               if(null != callBack)
               {
                  callBack.apply();
               }
            });
         });
      }
      
      public function syncChipIndex(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.getForeverNum(NinthDragonConst.FOREVER_SUMMON_CHIP_INDEX,function(param1:int):void
         {
            _summonedIndex = param1;
            callBack.apply();
         });
      }
      
      private function getLocalData() : Object
      {
         var _loc1_:SharedObject = SharedObject.getLocal(NinthDragonConst.LOCAL_DATA_NAME);
         return _loc1_.data[MainManager.actorID];
      }
      
      public function syncDamage(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.getForeverNum(NinthDragonConst.FOREVER_CUMULATIVE_DAMAGE,function(param1:int):void
         {
            damageValue = param1;
            callBack.apply();
         });
      }
      
      public function syncFlag(param1:Function) : void
      {
         var callBack:Function = param1;
         KTool.getForeverNum(NinthDragonConst.FOREVER_FLAG,function(param1:int):void
         {
            _flag = param1;
            callBack.apply();
         });
      }
   }
}
