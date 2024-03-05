package com.robot.core.info.pet
{
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.utils.ArrayUtils;
   import flash.utils.Dictionary;
   import flash.utils.IDataInput;
   
   public class PetInfo
   {
       
      
      public var SKILL_NUM:int = 5;
      
      public var id:uint;
      
      public var name:String;
      
      public var generation:uint;
      
      public var abilityType:uint;
      
      public var canStudySkillA:Array;
      
      public var isDefault:Boolean = false;
      
      public var dv:uint;
      
      public var nature:uint;
      
      public var level:uint;
      
      public var exp:uint;
      
      public var lvExp:uint;
      
      public var nextLvExp:uint;
      
      private var _hp:uint;
      
      private var _maxHp:uint;
      
      private var _attack:uint;
      
      private var _defence:uint;
      
      private var _s_a:uint;
      
      private var _s_d:uint;
      
      private var _speed:uint;
      
      public var ev_hp:uint;
      
      public var ev_attack:uint;
      
      public var ev_defence:uint;
      
      public var ev_sa:uint;
      
      public var ev_sd:uint;
      
      public var ev_sp:uint;
      
      public var skillNum:uint;
      
      public var skillArray:Array;
      
      public var catchTime:uint;
      
      public var catchMap:uint;
      
      public var catchRect:uint;
      
      public var catchLevel:uint;
      
      public var abilityMark:uint;
      
      public var skillMark:uint;
      
      public var commonMark:uint;
      
      public var commonMarkActived:uint;
      
      private var dict:Dictionary;
      
      public var effectCount:uint;
      
      public var effectList:Array;
      
      private var date:Date;
      
      public var hideSKill:com.robot.core.info.pet.PetSkillInfo;
      
      public var resistanceinfo:com.robot.core.info.pet.PetResistanceInfo;
      
      public var assistMoveId:uint;
      
      public var abilityValues:Array;
      
      private var _skinId:int = 0;
      
      public var lock:Boolean;
      
      public var chujueNumber:int;
      
      public var chujueRound:int;
      
      public var base_attack_total:int;
      
      public var base_defence_total:int;
      
      public var base_s_a_total:int;
      
      public var base_s_d_total:int;
      
      public var base_speed_total:int;
      
      public var base_hp_total:int;
      
      public var pve_attack_total:int;
      
      public var pve_defence_total:int;
      
      public var pve_s_a_total:int;
      
      public var pve_s_d_total:int;
      
      public var pve_speed_total:int;
      
      public var pve_hp_total:int;
      
      public var pvp_attack_total:int;
      
      public var pvp_defence_total:int;
      
      public var pvp_s_a_total:int;
      
      public var pvp_s_d_total:int;
      
      public var pvp_speed_total:int;
      
      public var pvp_hp_total:int;
      
      public var base_curHp:int;
      
      public var pve_curHp:int;
      
      public var pvp_curHp:int;
      
      public var sum_favor:int;
      
      public var is_favor_locked:int;
      
      public var sortIndex:int;
      
      public function PetInfo(param1:IDataInput = null, param2:Boolean = true, param3:Boolean = true, param4:Boolean = true)
      {
         var _loc10_:com.robot.core.info.pet.PetSkillInfo = null;
         var _loc11_:uint = 0;
         this.skillArray = [];
         this.dict = new Dictionary();
         this.effectList = [];
         this.abilityValues = [];
         super();
         if(param1 == null)
         {
            return;
         }
         this.id = param1.readUnsignedInt();
         this.name = param1.readUTFBytes(16);
         if(this.name == "")
         {
            this.name = PetXMLInfo.getName(this.id);
         }
         if(param2)
         {
            this.generation = param1.readUnsignedInt();
         }
         this.dv = param1.readUnsignedInt();
         this.nature = param1.readUnsignedInt();
         this.abilityType = param1.readUnsignedInt();
         this.level = param1.readUnsignedInt();
         this.exp = param1.readUnsignedInt();
         this.lvExp = param1.readUnsignedInt();
         this.nextLvExp = param1.readUnsignedInt();
         this.hp = param1.readUnsignedInt();
         this.maxHp = param1.readUnsignedInt();
         this.attack = param1.readUnsignedInt();
         this.defence = param1.readUnsignedInt();
         this.s_a = param1.readUnsignedInt();
         this.s_d = param1.readUnsignedInt();
         this.speed = param1.readUnsignedInt();
         this.ev_hp = param1.readUnsignedInt();
         this.ev_attack = param1.readUnsignedInt();
         this.ev_defence = param1.readUnsignedInt();
         this.ev_sa = param1.readUnsignedInt();
         this.ev_sd = param1.readUnsignedInt();
         this.ev_sp = param1.readUnsignedInt();
         param1.readUnsignedInt();
         this.skillNum = 0;
         this.skillArray = [];
         var _loc5_:int = 0;
         while(_loc5_ < this.SKILL_NUM)
         {
            if((_loc10_ = new com.robot.core.info.pet.PetSkillInfo(param1)).id != 0 && SkillXMLInfo.isHideSkillId(this.id,_loc10_.id))
            {
               this.hideSKill = _loc10_;
            }
            else if(_loc10_.id != 0 && this.id == SkillXMLInfo.getEnHideSkillPetID(_loc10_.id))
            {
               this.hideSKill = _loc10_;
            }
            else if(_loc10_.id != 0 && PetXMLInfo.checkIsAdditonFifthSkill(this.id,_loc10_.id))
            {
               this.hideSKill = _loc10_;
            }
            else if(_loc10_.id == 16839)
            {
               this.hideSKill = _loc10_;
            }
            else if(_loc10_.id != 0 && this.skillArray.length != 4)
            {
               this.skillArray.push(_loc10_);
               this.dict[_loc10_.id] = _loc10_;
               ++this.skillNum;
            }
            _loc5_++;
         }
         this.catchTime = param1.readUnsignedInt();
         this.catchMap = param1.readUnsignedInt();
         this.catchRect = param1.readUnsignedInt();
         this.catchLevel = param1.readUnsignedInt();
         this.abilityMark = param1.readUnsignedInt();
         this.skillMark = param1.readUnsignedInt();
         this.commonMark = param1.readUnsignedInt();
         if(param3)
         {
            this.commonMarkActived = param1.readUnsignedInt();
         }
         this.effectCount = param1.readUnsignedShort();
         var _loc6_:uint = 0;
         while(_loc6_ < this.effectCount)
         {
            this.effectList.push(new PetEffectInfo(param1));
            _loc6_++;
         }
         this.resistanceinfo = new com.robot.core.info.pet.PetResistanceInfo(param1);
         this._skinId = param1.readUnsignedInt();
         this.assistMoveId = param1.readUnsignedInt();
         var _loc7_:int = 0;
         while(_loc7_ < 3)
         {
            _loc11_ = uint(param1.readUnsignedInt());
            this.abilityValues.push(_loc11_ >> 16 * 0 & 65535);
            this.abilityValues.push(_loc11_ >> 16 * 1 & 65535);
            _loc7_++;
         }
         if(ArrayUtils.eq(this.abilityValues,[0,0,0,0,0,0]))
         {
            this.abilityValues = PetXMLInfo.getAllEvById(this.id);
         }
         var _loc8_:Array = ["hp","attack","defence","s_a","s_d","speed"];
         var _loc9_:int = 0;
         while(_loc9_ < 6)
         {
            this["base_" + _loc8_[_loc9_] + "_total"] = param1.readUnsignedInt();
            this["pvp_" + _loc8_[_loc9_] + "_total"] = param1.readUnsignedInt();
            this["pve_" + _loc8_[_loc9_] + "_total"] = param1.readUnsignedInt();
            _loc9_++;
         }
         this.base_curHp = param1.readUnsignedInt();
         this.pvp_curHp = param1.readUnsignedInt();
         this.pve_curHp = param1.readUnsignedInt();
         if(param4 && false)
         {
            this.sum_favor = param1.readUnsignedInt();
            this.is_favor_locked = param1.readUnsignedByte();
         }
      }
      
      public function getSkillInfo(param1:uint) : com.robot.core.info.pet.PetSkillInfo
      {
         return this.dict[param1];
      }
      
      public function get allPP() : uint
      {
         var _loc2_:com.robot.core.info.pet.PetSkillInfo = null;
         var _loc1_:uint = 0;
         for each(_loc2_ in this.skillArray)
         {
            _loc1_ += _loc2_.pp;
         }
         return _loc1_;
      }
      
      public function get evArray() : Array
      {
         return [this.ev_attack,this.ev_defence,this.ev_sa,this.ev_sd,this.ev_sp,this.ev_hp];
      }
      
      public function get specialState() : int
      {
         return PetManager.getPetSpecialState(this.catchTime);
      }
      
      public function get totalEv() : int
      {
         return this.ev_hp + this.ev_attack + this.ev_defence + this.ev_sa + this.ev_sd + this.ev_sp;
      }
      
      public function getTeamTechAdd(param1:int) : Array
      {
         var _loc3_:PetEffectInfo = null;
         var _loc2_:int = 0;
         while(_loc2_ < this.effectList.length)
         {
            _loc3_ = this.effectList[_loc2_];
            if(_loc3_.effectID == 171)
            {
               return _loc3_.getTeamTechAdd(param1);
            }
            _loc2_++;
         }
         return [0,0];
      }
      
      public function get hp() : uint
      {
         return this._hp;
      }
      
      public function set hp(param1:uint) : void
      {
         this._hp = param1;
      }
      
      public function get maxHp() : uint
      {
         return this._maxHp;
      }
      
      public function set maxHp(param1:uint) : void
      {
         this._maxHp = param1;
      }
      
      public function get attack() : uint
      {
         var _loc1_:Array = this.getTeamTechAdd(1);
         if(_loc1_[0])
         {
            return this._attack + _loc1_[0];
         }
         return this._attack;
      }
      
      public function set attack(param1:uint) : void
      {
         this._attack = param1;
      }
      
      public function get defence() : uint
      {
         var _loc1_:Array = this.getTeamTechAdd(2);
         if(_loc1_[0])
         {
            return this._defence + _loc1_[0];
         }
         return this._defence;
      }
      
      public function set defence(param1:uint) : void
      {
         this._defence = param1;
      }
      
      public function get s_a() : uint
      {
         var _loc1_:Array = this.getTeamTechAdd(3);
         if(_loc1_[0])
         {
            return this._s_a + _loc1_[0];
         }
         return this._s_a;
      }
      
      public function set s_a(param1:uint) : void
      {
         this._s_a = param1;
      }
      
      public function get s_d() : uint
      {
         var _loc1_:Array = this.getTeamTechAdd(4);
         if(_loc1_[0])
         {
            return this._s_d + _loc1_[0];
         }
         return this._s_d;
      }
      
      public function set s_d(param1:uint) : void
      {
         this._s_d = param1;
      }
      
      public function get speed() : uint
      {
         var _loc1_:Array = this.getTeamTechAdd(5);
         if(_loc1_[0])
         {
            return this._speed + _loc1_[0];
         }
         return this._speed;
      }
      
      public function set speed(param1:uint) : void
      {
         this._speed = param1;
      }
      
      public function get haveMark() : Boolean
      {
         return Boolean(this.abilityMark) || Boolean(this.skillMark) || Boolean(this.commonMark);
      }
      
      public function get skinId() : int
      {
         return this._skinId;
      }
      
      public function set skinId(param1:int) : void
      {
         this._skinId = param1;
      }
      
      public function get FightHp() : int
      {
         return this._hp;
      }
      
      public function get FightMaxHp() : int
      {
         return this._maxHp;
      }
   }
}
