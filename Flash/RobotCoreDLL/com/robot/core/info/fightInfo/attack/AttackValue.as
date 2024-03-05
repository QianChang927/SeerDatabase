package com.robot.core.info.fightInfo.attack
{
   import com.robot.core.info.FightSignInfo;
   import com.robot.core.info.fightInfo.MarkBuffInfo;
   import com.robot.core.info.fightInfo.PetStatusEffectInfo;
   import com.robot.core.info.fightInfo.SiteBuffInfo;
   import com.robot.core.info.fightInfo.SkillStateInfos;
   import com.robot.core.utils.FightEffectName;
   import flash.utils.IDataInput;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class AttackValue
   {
       
      
      private var _userID:uint;
      
      private var _skillID:uint;
      
      private var _effectName:String;
      
      private var _atkTimes:uint;
      
      private var _lostHP:uint;
      
      private var _gainHP:int;
      
      private var _remainHp:int;
      
      private var _maxHp:uint;
      
      private var _isCrit:uint;
      
      private var _skillList:Array;
      
      private var _status:Array;
      
      private var _state:uint;
      
      private var _petStatus:uint;
      
      private var _sideEffects:Array;
      
      private var _battle_lv:int;
      
      private var _change_bitset:uint;
      
      private var _priority:uint;
      
      private var _immunizationStates:Array;
      
      private var _specailArr:Array;
      
      private var _issecondFight:Boolean = false;
      
      private var _changeValue:int;
      
      private var _changehps:Array;
      
      private var _requireSwitchCthTime:int;
      
      private var _changeValue2:int;
      
      private var _maxHpSelf:int;
      
      private var _maxHpOther:int;
      
      private var _secretLaw:int;
      
      private var _realHurtHp:int;
      
      private var _skillRunawayMarks:Array;
      
      public var siteBuffInfo:SiteBuffInfo;
      
      public var bothSiteBuffInfo:SiteBuffInfo;
      
      public var markBuffInfo:MarkBuffInfo;
      
      public var petBagMarkArr:HashMap;
      
      public var _signInfoHash:HashMap;
      
      public var _lockedSkillArr:Array;
      
      public var _skillStateInfo:SkillStateInfos;
      
      private var _skillResultArr:Array;
      
      private var _zhuijiId:int;
      
      private var _zhuijiHurt:int;
      
      private var _isZhuiJi:Boolean;
      
      public function AttackValue(param1:IDataInput = null)
      {
         var _loc17_:uint = 0;
         var _loc18_:uint = 0;
         var _loc19_:uint = 0;
         var _loc20_:PetStatusEffectInfo = null;
         var _loc21_:uint = 0;
         var _loc22_:Boolean = false;
         var _loc23_:int = 0;
         var _loc24_:FightSignInfo = null;
         var _loc25_:int = 0;
         this._status = [];
         super();
         if(param1 == null)
         {
            return;
         }
         this._userID = param1.readUnsignedInt();
         this._skillID = param1.readUnsignedInt();
         param1.readUnsignedInt();
         param1.readUnsignedInt();
         this._effectName = FightEffectName.getName(param1.readUnsignedInt());
         this._atkTimes = param1.readUnsignedInt();
         this._lostHP = param1.readUnsignedInt();
         this._realHurtHp = param1.readUnsignedInt();
         this._gainHP = param1.readInt();
         this._remainHp = param1.readInt();
         DebugTrace.show("\r出招用户：" + this._userID + ";使用技能：" + this._skillID + ";技能效果：" + this._effectName + ";技能次数：" + this._atkTimes + ";对方掉血：" + this._lostHP + ";自己回血:" + this._gainHP + ";最后剩余血量：" + this._remainHp + "\r");
         this._maxHp = param1.readUnsignedInt();
         this._state = param1.readUnsignedInt();
         this._petStatus = param1.readUnsignedInt();
         DebugTrace.show("不知道做什么的maxHp:" + this._maxHp + ";精灵特殊状态:" + this._state + ";某些精灵的特殊状态显示===petStatus===:" + this._petStatus + "\r");
         this._skillList = [];
         var _loc2_:uint = uint(param1.readUnsignedInt());
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            _loc17_ = uint(param1.readUnsignedInt());
            _loc18_ = uint(param1.readUnsignedInt());
            this._skillList.push([_loc17_,_loc18_]);
            DebugTrace.show("技能:" + _loc3_ + ";技能ID:" + _loc17_ + ";技能PP值:" + _loc18_ + "\r");
            _loc3_++;
         }
         this._isCrit = param1.readUnsignedInt();
         DebugTrace.show("是否暴击：" + (this._isCrit == 1) + "\r");
         DebugTrace.show("特效状态：=====start=======\r");
         var _loc4_:int = int(param1.readByte());
         _loc3_ = 0;
         while(_loc3_ < _loc4_)
         {
            this._status.push(param1.readByte());
            _loc3_++;
         }
         DebugTrace.show("特效状态：==" + this._status + "====over======\r");
         this._sideEffects = [];
         this._specailArr = [];
         var _loc5_:int = int(param1.readUnsignedInt());
         _loc3_ = 0;
         while(_loc3_ < _loc5_)
         {
            this._specailArr.push(param1.readUnsignedInt());
            _loc3_++;
         }
         if(_loc5_ > 13)
         {
            this._changeValue = this._specailArr[13];
         }
         if(_loc5_ > 25)
         {
            this._changeValue2 = this._specailArr[25];
         }
         var _loc6_:* = getDefinitionByName("com.robot.app.fight.FightManager") as Class;
         var _loc7_:* = getDefinitionByName("com.robot.app.fight.ReplayFightManager") as Class;
         if(_loc6_.isReplay == false || _loc6_.isReplay && _loc7_.dataTime > _loc7_.TIME_1)
         {
            _loc19_ = uint(param1.readUnsignedInt());
            DebugTrace.show("对战状态处理--属性的变化---start----\r");
            _loc3_ = 0;
            while(_loc3_ < _loc19_)
            {
               _loc20_ = new PetStatusEffectInfo(param1);
               this._sideEffects.push(_loc20_);
               DebugTrace.show("PetStatusEffectInfo.name:" + _loc20_.name + ";PetStatusEffectInfo.param:" + _loc20_.parm + "\r");
               _loc3_++;
            }
            DebugTrace.show("对战状态处理--属性的变化---over----\r");
         }
         if(_loc6_.isReplay == false || _loc6_.isReplay && _loc7_.version == 20131129)
         {
            this._battle_lv = param1.readInt();
            this._change_bitset = param1.readUnsignedInt();
            this._priority = param1.readUnsignedInt();
            DebugTrace.show("能力变化-->大于0能力提升小于0能力下降：" + this._battle_lv + "；异常变化-每位-0-不变-1-改变：" + this._change_bitset + "；先手变化-大于0-先手展示：" + this._change_bitset + "\r");
         }
         this._immunizationStates = [];
         var _loc8_:uint = uint(param1.readUnsignedInt());
         _loc3_ = 0;
         while(_loc3_ < _loc8_)
         {
            _loc21_ = uint(param1.readUnsignedInt());
            _loc22_ = Boolean((_loc21_ & 15) == 9 || (_loc21_ & 15) == 1);
            this._immunizationStates.push(_loc22_);
            _loc3_++;
         }
         var _loc9_:int = int(param1.readUnsignedInt());
         this._changehps = [];
         this.petBagMarkArr = new HashMap();
         _loc3_ = 0;
         while(_loc3_ < _loc9_)
         {
            _loc23_ = int(param1.readUnsignedInt());
            this._changehps.push({
               "id":_loc23_,
               "hp":param1.readUnsignedInt(),
               "maxhp":param1.readUnsignedInt(),
               "lock":param1.readUnsignedInt(),
               "chujueNumber":param1.readUnsignedInt(),
               "chujueRound":param1.readUnsignedInt()
            });
            this.petBagMarkArr.add(_loc23_,new MarkBuffInfo(param1));
            _loc3_++;
         }
         this._requireSwitchCthTime = param1.readUnsignedInt();
         this.maxHpSelf = param1.readUnsignedInt();
         this.maxHpOther = param1.readUnsignedInt();
         this.secretLaw = param1.readUnsignedInt();
         var _loc10_:int = int(param1.readUnsignedInt());
         this._skillRunawayMarks = [];
         var _loc11_:int = 0;
         while(_loc11_ < _loc10_)
         {
            this._skillRunawayMarks.push(param1.readUnsignedInt());
            _loc11_++;
         }
         DebugTrace.show("出招用户：" + this._userID + "=====over========\r");
         this.siteBuffInfo = new SiteBuffInfo(param1);
         this.bothSiteBuffInfo = new SiteBuffInfo(param1);
         this.markBuffInfo = new MarkBuffInfo(param1);
         var _loc12_:uint = uint(param1.readUnsignedInt());
         this._signInfoHash = new HashMap();
         var _loc13_:int = 0;
         while(_loc13_ < _loc12_)
         {
            _loc24_ = new FightSignInfo(param1);
            this._signInfoHash.add(_loc24_.id,_loc24_);
            _loc13_++;
         }
         this._lockedSkillArr = [];
         var _loc14_:int = 0;
         while(_loc14_ < 5)
         {
            this._lockedSkillArr.push(param1.readUnsignedInt());
            _loc14_++;
         }
         this._skillStateInfo = new SkillStateInfos();
         this._skillStateInfo.runawayMoveNum = _loc10_;
         this._skillStateInfo.skillRunawayMarks = this._skillRunawayMarks;
         this._skillStateInfo.lockedSkillArr = this._lockedSkillArr;
         this._skillResultArr = [];
         var _loc15_:int = int(param1.readUnsignedInt());
         var _loc16_:int = 0;
         while(_loc16_ < _loc15_)
         {
            _loc25_ = int(param1.readUnsignedInt());
            this._skillResultArr.push(_loc25_);
            _loc16_++;
         }
         this._zhuijiId = param1.readUnsignedInt();
         this._zhuijiHurt = param1.readUnsignedInt();
      }
      
      public function get isZhuiJi() : Boolean
      {
         return this._isZhuiJi;
      }
      
      public function set isZhuiJi(param1:Boolean) : void
      {
         this._isZhuiJi = param1;
      }
      
      public function get zhuijiId() : int
      {
         return this._zhuijiId;
      }
      
      public function set zhuijiId(param1:int) : void
      {
         this._zhuijiId = param1;
      }
      
      public function get zhuijiHurt() : int
      {
         return this._zhuijiHurt;
      }
      
      public function set zhuijiHurt(param1:int) : void
      {
         this._zhuijiHurt = param1;
      }
      
      public function get skillList() : Array
      {
         return this._skillList;
      }
      
      public function set skillList(param1:Array) : void
      {
         this._skillList = param1;
      }
      
      public function get userID() : uint
      {
         return this._userID;
      }
      
      public function get skillID() : uint
      {
         return this._skillID;
      }
      
      public function set skillID(param1:uint) : void
      {
         this._skillID = param1;
      }
      
      public function get effectName() : String
      {
         return this._effectName;
      }
      
      public function set effectName(param1:String) : void
      {
         this._effectName = param1;
      }
      
      public function get lostHP() : uint
      {
         return this._lostHP;
      }
      
      public function set lostHP(param1:uint) : void
      {
         this._lostHP = param1;
      }
      
      public function get gainHP() : int
      {
         return this._gainHP;
      }
      
      public function set gainHP(param1:int) : void
      {
         this._gainHP = param1;
      }
      
      public function get remainHP() : int
      {
         return this._remainHp;
      }
      
      public function set remainHP(param1:int) : void
      {
         this._remainHp = param1;
      }
      
      public function get isCrit() : uint
      {
         return this._isCrit;
      }
      
      public function get atkTimes() : uint
      {
         return this._atkTimes;
      }
      
      public function get status() : Array
      {
         return this._status;
      }
      
      public function get sideEffects() : Array
      {
         return this._sideEffects;
      }
      
      public function get maxHp() : uint
      {
         return this._maxHp;
      }
      
      public function get state() : uint
      {
         return this._state;
      }
      
      public function get petStatus() : uint
      {
         return this._petStatus;
      }
      
      public function get battle_lv() : int
      {
         return this._battle_lv;
      }
      
      public function get change_bitset() : uint
      {
         return this._change_bitset;
      }
      
      public function get priority() : uint
      {
         return this._priority;
      }
      
      public function get immunizationStates() : Array
      {
         return this._immunizationStates;
      }
      
      public function get specailArr() : Array
      {
         return this._specailArr;
      }
      
      public function set specailArr(param1:Array) : void
      {
         this._specailArr = param1;
      }
      
      public function set userID(param1:uint) : void
      {
         this._userID = param1;
      }
      
      public function set atkTimes(param1:uint) : void
      {
         this._atkTimes = param1;
      }
      
      public function set maxHp(param1:uint) : void
      {
         this._maxHp = param1;
      }
      
      public function set isCrit(param1:uint) : void
      {
         this._isCrit = param1;
      }
      
      public function set state(param1:uint) : void
      {
         this._state = param1;
      }
      
      public function set petStatus(param1:uint) : void
      {
         this._petStatus = param1;
      }
      
      public function set sideEffects(param1:Array) : void
      {
         this._sideEffects = param1;
      }
      
      public function set battle_lv(param1:int) : void
      {
         this._battle_lv = param1;
      }
      
      public function set change_bitset(param1:uint) : void
      {
         this._change_bitset = param1;
      }
      
      public function set priority(param1:uint) : void
      {
         this._priority = param1;
      }
      
      public function set immunizationStates(param1:Array) : void
      {
         this._immunizationStates = param1;
      }
      
      public function set status(param1:Array) : void
      {
         this._status = param1;
      }
      
      public function get issecondFight() : Boolean
      {
         return this._issecondFight;
      }
      
      public function set issecondFight(param1:Boolean) : void
      {
         this._issecondFight = param1;
      }
      
      public function get changeValue() : int
      {
         return this._changeValue;
      }
      
      public function get changehps() : Array
      {
         return this._changehps;
      }
      
      public function get requireSwitchCthTime() : int
      {
         return this._requireSwitchCthTime;
      }
      
      public function get changeValue2() : int
      {
         return this._changeValue2;
      }
      
      public function get maxHpSelf() : int
      {
         return this._maxHpSelf;
      }
      
      public function set maxHpSelf(param1:int) : void
      {
         this._maxHpSelf = param1;
      }
      
      public function get maxHpOther() : int
      {
         return this._maxHpOther;
      }
      
      public function set maxHpOther(param1:int) : void
      {
         this._maxHpOther = param1;
      }
      
      public function get secretLaw() : int
      {
         return this._secretLaw;
      }
      
      public function set secretLaw(param1:int) : void
      {
         this._secretLaw = param1;
      }
      
      public function get realHurtHp() : int
      {
         return this._realHurtHp;
      }
      
      public function set realHurtHp(param1:int) : void
      {
         this._realHurtHp = param1;
      }
      
      public function get fightSigns() : HashMap
      {
         return this._signInfoHash;
      }
      
      public function get skillStateInfo() : SkillStateInfos
      {
         return this._skillStateInfo;
      }
      
      public function get skillResult() : Array
      {
         return this._skillResultArr;
      }
      
      public function set skillResult(param1:Array) : void
      {
         this._skillResultArr = param1;
      }
   }
}
