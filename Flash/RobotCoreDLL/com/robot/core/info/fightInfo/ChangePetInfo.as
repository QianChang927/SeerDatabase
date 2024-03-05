package com.robot.core.info.fightInfo
{
   import com.robot.core.info.FightSignInfo;
   import com.robot.core.info.pet.PetResistanceInfo;
   import flash.utils.IDataInput;
   import org.taomee.ds.HashMap;
   
   public class ChangePetInfo
   {
       
      
      private var _userID:uint;
      
      private var _petID:uint;
      
      private var _catchTime:uint;
      
      private var _petName:String;
      
      private var _level:uint;
      
      private var _hp:uint;
      
      private var _maxHp:uint;
      
      private var _resistenceinfo:PetResistanceInfo;
      
      private var _skinId:uint;
      
      private var _xinHp:uint;
      
      private var _xinMaxHp:uint;
      
      private var _isChangeFace:int;
      
      private var _changehps:Array;
      
      private var _skillList:Array;
      
      private var _skillRunawayMarks:Array;
      
      private var _holyAndEvilThoughts:int;
      
      private var _yearVip2022_shengjian:int;
      
      private var _yearVip2022_chujue:int;
      
      private var _laborDay2022_yinji:int;
      
      private var _suli2022:int;
      
      public var siteBuffInfo:com.robot.core.info.fightInfo.SiteBuffInfo;
      
      public var bothSiteBuffInfo:com.robot.core.info.fightInfo.SiteBuffInfo;
      
      public var markBuffInfo:com.robot.core.info.fightInfo.MarkBuffInfo;
      
      private var _mulian2022:int;
      
      public var petBagMarkArr:HashMap;
      
      public var _signInfoHash:HashMap;
      
      public var _lockedSkillArr:Array;
      
      public var _skillStateInfo:com.robot.core.info.fightInfo.SkillStateInfos;
      
      public function ChangePetInfo(param1:IDataInput)
      {
         var _loc11_:uint = 0;
         var _loc12_:uint = 0;
         var _loc13_:int = 0;
         var _loc14_:FightSignInfo = null;
         super();
         this._userID = param1.readUnsignedInt();
         this._petID = param1.readUnsignedInt();
         this._catchTime = param1.readUnsignedInt();
         this._petName = param1.readUTFBytes(16);
         this._level = param1.readUnsignedInt();
         this._hp = param1.readUnsignedInt();
         this._maxHp = param1.readUnsignedInt();
         this._skillList = [];
         var _loc2_:uint = uint(param1.readUnsignedInt());
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            _loc11_ = uint(param1.readUnsignedInt());
            _loc12_ = uint(param1.readUnsignedInt());
            this._skillList.push([_loc11_,_loc12_]);
            _loc3_++;
         }
         this._resistenceinfo = new PetResistanceInfo(param1);
         this._skinId = param1.readUnsignedInt();
         var _loc4_:int = int(param1.readUnsignedInt());
         this._changehps = [];
         this.petBagMarkArr = new HashMap();
         var _loc5_:int = 0;
         while(_loc5_ < _loc4_)
         {
            _loc13_ = int(param1.readUnsignedInt());
            this._changehps.push({
               "id":_loc13_,
               "hp":param1.readUnsignedInt(),
               "maxhp":param1.readUnsignedInt(),
               "lock":param1.readUnsignedInt(),
               "chujueNumber":param1.readUnsignedInt(),
               "chujueRound":param1.readUnsignedInt()
            });
            this.petBagMarkArr.add(_loc13_,new com.robot.core.info.fightInfo.MarkBuffInfo(param1));
            _loc5_++;
         }
         this._xinHp = param1.readUnsignedInt();
         this._xinMaxHp = param1.readUnsignedInt();
         this._isChangeFace = param1.readUnsignedInt();
         var _loc6_:int = int(param1.readUnsignedInt());
         this._skillRunawayMarks = [];
         var _loc7_:int = 0;
         while(_loc7_ < _loc6_)
         {
            this._skillRunawayMarks.push(param1.readUnsignedInt());
            _loc7_++;
         }
         this._holyAndEvilThoughts = param1.readUnsignedInt();
         this._yearVip2022_shengjian = param1.readUnsignedInt();
         this._yearVip2022_chujue = param1.readUnsignedInt();
         this._laborDay2022_yinji = param1.readUnsignedInt();
         this._suli2022 = param1.readUnsignedInt();
         this._mulian2022 = param1.readUnsignedInt();
         this.siteBuffInfo = new com.robot.core.info.fightInfo.SiteBuffInfo(param1);
         this.bothSiteBuffInfo = new com.robot.core.info.fightInfo.SiteBuffInfo(param1);
         this.markBuffInfo = new com.robot.core.info.fightInfo.MarkBuffInfo(param1);
         var _loc8_:uint = uint(param1.readUnsignedInt());
         this._signInfoHash = new HashMap();
         var _loc9_:int = 0;
         while(_loc9_ < _loc8_)
         {
            _loc14_ = new FightSignInfo(param1);
            this._signInfoHash.add(_loc14_.id,_loc14_);
            _loc9_++;
         }
         this._lockedSkillArr = [];
         var _loc10_:int = 0;
         while(_loc10_ < 5)
         {
            this._lockedSkillArr.push(param1.readUnsignedInt());
            _loc10_++;
         }
         this._skillStateInfo = new com.robot.core.info.fightInfo.SkillStateInfos();
         this._skillStateInfo.runawayMoveNum = _loc6_;
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
      
      public function get userID() : uint
      {
         return this._userID;
      }
      
      public function get catchTime() : uint
      {
         return this._catchTime;
      }
      
      public function get petID() : uint
      {
         return this._petID;
      }
      
      public function get petName() : String
      {
         return this._petName;
      }
      
      public function get level() : uint
      {
         return this._level;
      }
      
      public function set hp(param1:uint) : void
      {
         this._hp = param1;
      }
      
      public function get hp() : uint
      {
         return this._hp;
      }
      
      public function get maxHp() : uint
      {
         return this._maxHp;
      }
      
      public function get skinId() : uint
      {
         return this._skinId;
      }
      
      public function set skinId(param1:uint) : void
      {
         this._skinId = param1;
      }
      
      public function get xinHp() : int
      {
         return this._xinHp;
      }
      
      public function get xinMaxHP() : uint
      {
         return this._xinMaxHp;
      }
      
      public function get isChangeFace() : uint
      {
         return this._isChangeFace;
      }
      
      public function get changehps() : Array
      {
         return this._changehps;
      }
      
      public function get skillList() : Array
      {
         return this._skillList;
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
      
      public function get laborDay2022_yinji() : int
      {
         return this._laborDay2022_yinji;
      }
      
      public function set laborDay2022_yinji(param1:int) : void
      {
         this._laborDay2022_yinji = param1;
      }
      
      public function get suli2022() : int
      {
         return this._suli2022;
      }
      
      public function set suli2022(param1:int) : void
      {
         this._suli2022 = param1;
      }
      
      public function get mulian2022() : int
      {
         return this._mulian2022;
      }
      
      public function set mulian2022(param1:int) : void
      {
         this._mulian2022 = param1;
      }
      
      public function get fightSigns() : HashMap
      {
         return this._signInfoHash;
      }
      
      public function get skillStateInfo() : com.robot.core.info.fightInfo.SkillStateInfos
      {
         return this._skillStateInfo;
      }
   }
}
