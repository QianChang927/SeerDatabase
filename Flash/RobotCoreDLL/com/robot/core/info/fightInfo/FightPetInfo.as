package com.robot.core.info.fightInfo
{
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.FightSignInfo;
   import com.robot.core.info.pet.PetResistanceInfo;
   import flash.utils.IDataInput;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class FightPetInfo
   {
       
      
      private var _userID:uint;
      
      private var _petID:uint;
      
      private var _petName:String;
      
      private var _catchTime:uint;
      
      private var _hp:int;
      
      private var _maxHP:uint;
      
      private var _lv:uint;
      
      private var _resistenceinfo:PetResistanceInfo;
      
      private var _skinId:uint;
      
      private var _catchType:uint;
      
      private var _changehps:Array;
      
      private var _requireSwitchCthTime:int;
      
      private var _xinHp:uint;
      
      private var _xinMaxHp:uint;
      
      private var _isChangeFace:int;
      
      private var _secretLaw:int;
      
      private var _skillRunawayMarks:Array;
      
      private var _holyAndEvilThoughts:int;
      
      private var _yearVip2022_shengjian:int;
      
      private var _yearVip2022_chujue:int;
      
      public var siteBuffInfo:com.robot.core.info.fightInfo.SiteBuffInfo;
      
      public var bothSiteBuffInfo:com.robot.core.info.fightInfo.SiteBuffInfo;
      
      public var markBuffInfo:com.robot.core.info.fightInfo.MarkBuffInfo;
      
      public var petBagMarkArr:HashMap;
      
      public var _signInfoHash:HashMap;
      
      public var _curlockedSkillid:int;
      
      public var _lockedSkillArr:Array;
      
      public var _skillStateInfo:com.robot.core.info.fightInfo.SkillStateInfos;
      
      public function FightPetInfo(param1:IDataInput)
      {
         var _loc9_:int = 0;
         var _loc10_:FightSignInfo = null;
         super();
         this._userID = param1.readUnsignedInt();
         this._petID = param1.readUnsignedInt();
         this._petName = param1.readUTFBytes(16);
         this._catchTime = param1.readUnsignedInt();
         this._hp = param1.readInt();
         this._maxHP = param1.readUnsignedInt();
         this._lv = param1.readUnsignedInt();
         this._catchType = param1.readUnsignedInt();
         if(this._hp > this._maxHP)
         {
            this._maxHP = this._hp;
         }
         DebugTrace.show("\r\rfigher：",this._userID,"pet：",this._petID,"name:",this._petName,"catchTime:",this._catchTime,"catchType:",this._catchType,"\r\r");
         if(this._petName == "" && this._petID != 0)
         {
            this._petName = PetXMLInfo.getName(this._petID);
         }
         this._resistenceinfo = new PetResistanceInfo(param1);
         this._skinId = param1.readUnsignedInt();
         var _loc2_:int = int(param1.readUnsignedInt());
         this._changehps = [];
         this.petBagMarkArr = new HashMap();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            _loc9_ = int(param1.readUnsignedInt());
            this._changehps.push({
               "id":_loc9_,
               "hp":param1.readUnsignedInt(),
               "maxhp":param1.readUnsignedInt(),
               "lock":param1.readUnsignedInt(),
               "chujueNumber":param1.readUnsignedInt(),
               "chujueRound":param1.readUnsignedInt()
            });
            this.petBagMarkArr.add(_loc9_,new com.robot.core.info.fightInfo.MarkBuffInfo(param1));
            _loc3_++;
         }
         this._requireSwitchCthTime = param1.readUnsignedInt();
         this._xinHp = param1.readUnsignedInt();
         this._xinMaxHp = param1.readUnsignedInt();
         if(this._xinHp > this._xinMaxHp)
         {
            this._xinMaxHp = this._xinHp;
         }
         this._isChangeFace = param1.readUnsignedInt();
         this._secretLaw = param1.readUnsignedInt();
         var _loc4_:int = int(param1.readUnsignedInt());
         this._skillRunawayMarks = [];
         var _loc5_:int = 0;
         while(_loc5_ < _loc4_)
         {
            this._skillRunawayMarks.push(param1.readUnsignedInt());
            _loc5_++;
         }
         this._holyAndEvilThoughts = param1.readUnsignedInt();
         this._yearVip2022_shengjian = param1.readUnsignedInt();
         this._yearVip2022_chujue = param1.readUnsignedInt();
         this.siteBuffInfo = new com.robot.core.info.fightInfo.SiteBuffInfo(param1);
         this.bothSiteBuffInfo = new com.robot.core.info.fightInfo.SiteBuffInfo(param1);
         this.markBuffInfo = new com.robot.core.info.fightInfo.MarkBuffInfo(param1);
         var _loc6_:uint = uint(param1.readUnsignedInt());
         this._signInfoHash = new HashMap();
         var _loc7_:int = 0;
         while(_loc7_ < _loc6_)
         {
            _loc10_ = new FightSignInfo(param1);
            this._signInfoHash.add(_loc10_.id,_loc10_);
            _loc7_++;
         }
         this._lockedSkillArr = [];
         var _loc8_:int = 0;
         while(_loc8_ < 5)
         {
            this._lockedSkillArr.push(param1.readUnsignedInt());
            _loc8_++;
         }
         this._skillStateInfo = new com.robot.core.info.fightInfo.SkillStateInfos();
         this._skillStateInfo.runawayMoveNum = _loc4_;
         this._skillStateInfo.skillRunawayMarks = this._skillRunawayMarks;
         this._skillStateInfo.lockedSkillArr = this._lockedSkillArr;
      }
      
      public function get resistenceinfo() : PetResistanceInfo
      {
         return this._resistenceinfo;
      }
      
      public function set resistenceinfo(param1:PetResistanceInfo) : void
      {
         this._resistenceinfo = param1;
      }
      
      public function set catchType(param1:uint) : void
      {
         this._catchType = param1;
      }
      
      public function get lv() : uint
      {
         return this._lv;
      }
      
      public function set level(param1:uint) : void
      {
         this._lv = param1;
      }
      
      public function set maxHP(param1:uint) : void
      {
         this._maxHP = param1;
      }
      
      public function set hp(param1:int) : void
      {
         this._hp = param1;
      }
      
      public function set catchTime(param1:uint) : void
      {
         this._catchTime = param1;
      }
      
      public function set petName(param1:String) : void
      {
         this._petName = param1;
      }
      
      public function set petID(param1:uint) : void
      {
         this._petID = param1;
      }
      
      public function set userID(param1:uint) : void
      {
         this._userID = param1;
      }
      
      public function get userID() : uint
      {
         return this._userID;
      }
      
      public function get petID() : uint
      {
         return this._petID;
      }
      
      public function get petName() : String
      {
         return this._petName;
      }
      
      public function get catchTime() : uint
      {
         return this._catchTime;
      }
      
      public function get hp() : int
      {
         return this._hp;
      }
      
      public function get maxHP() : uint
      {
         return this._maxHP;
      }
      
      public function get level() : uint
      {
         return this._lv;
      }
      
      public function get catchType() : uint
      {
         return this._catchType;
      }
      
      public function get skinId() : uint
      {
         return this._skinId;
      }
      
      public function set skinId(param1:uint) : void
      {
         this._skinId = param1;
      }
      
      public function get changehps() : Array
      {
         return this._changehps;
      }
      
      public function get requireSwitchCthTime() : uint
      {
         return this._requireSwitchCthTime;
      }
      
      public function set xinHp(param1:int) : void
      {
         this._xinHp = param1;
      }
      
      public function set xinMaxHP(param1:uint) : void
      {
         this._xinMaxHp = param1;
      }
      
      public function get xinHp() : int
      {
         return this._xinHp;
      }
      
      public function get xinMaxHP() : uint
      {
         return this._xinMaxHp;
      }
      
      public function get isChangeFace() : int
      {
         return this._isChangeFace;
      }
      
      public function set isChangeFace(param1:int) : void
      {
         this._isChangeFace = param1;
      }
      
      public function get SecretLaw() : int
      {
         return this._secretLaw;
      }
      
      public function set SecretLaw(param1:int) : void
      {
         this._secretLaw = param1;
      }
      
      public function get holyAndEvilThoughts() : int
      {
         return this._holyAndEvilThoughts;
      }
      
      public function set holyAndEvilThoughts(param1:int) : void
      {
         this._holyAndEvilThoughts = param1;
      }
      
      public function get yearVip2022_shengjian() : int
      {
         return this._yearVip2022_shengjian;
      }
      
      public function set yearVip2022_shengjian(param1:int) : void
      {
         this._yearVip2022_shengjian = param1;
      }
      
      public function get yearVip2022_chujue() : int
      {
         return this._yearVip2022_chujue;
      }
      
      public function set yearVip2022_chujue(param1:int) : void
      {
         this._yearVip2022_chujue = param1;
      }
      
      public function get fightSigns() : HashMap
      {
         return this._signInfoHash;
      }
      
      public function set skillStateInfo(param1:com.robot.core.info.fightInfo.SkillStateInfos) : void
      {
         this._skillStateInfo = param1;
      }
      
      public function get skillStateInfo() : com.robot.core.info.fightInfo.SkillStateInfos
      {
         return this._skillStateInfo;
      }
   }
}
