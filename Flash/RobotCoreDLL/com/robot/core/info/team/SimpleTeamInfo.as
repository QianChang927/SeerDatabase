package com.robot.core.info.team
{
   import com.robot.core.info.teamPK.TeamPkHistoryInfo;
   import com.robot.core.manager.SystemTimerManager;
   import flash.utils.IDataInput;
   import org.taomee.debug.DebugTrace;
   
   public class SimpleTeamInfo implements ITeamLogoInfo
   {
       
      
      private var _teamID:uint;
      
      private var _leader:uint;
      
      private var _memberCount:uint;
      
      private var _interest:uint;
      
      private var _joinFlag:uint;
      
      private var _visitFlag:uint;
      
      private var _exp:uint;
      
      private var _score:uint;
      
      private var _name:String;
      
      private var _slogan:String;
      
      private var _notice:String;
      
      private var _leaderNick:String;
      
      private var _logoBg:uint;
      
      private var _logoIcon:uint;
      
      private var _logoColor:uint;
      
      private var _txtColor:uint;
      
      private var _logoWord:String;
      
      private var _drawingUint:uint;
      
      private var _superCoreNum:uint;
      
      public var newTeamLevel:int;
      
      public var techCenterLevel:int;
      
      public var bonusCenterLevel:int;
      
      public var resCenterLevel:int;
      
      public var totalBossDmg:uint;
      
      public var team_func_disalbed:int;
      
      public var lastPayTime:int;
      
      public var teamPkInfo:TeamPkHistoryInfo;
      
      public function SimpleTeamInfo(param1:IDataInput = null)
      {
         super();
         if(param1 == null)
         {
            return;
         }
         this._teamID = param1.readUnsignedInt();
         this._leader = param1.readUnsignedInt();
         this._superCoreNum = param1.readUnsignedInt();
         this._memberCount = param1.readUnsignedInt();
         this._interest = param1.readUnsignedInt();
         this._joinFlag = param1.readUnsignedInt();
         this._visitFlag = param1.readUnsignedInt();
         this._score = param1.readUnsignedInt();
         this._exp = param1.readUnsignedInt();
         this._name = param1.readUTFBytes(16);
         this._slogan = param1.readUTFBytes(60);
         this._notice = param1.readUTFBytes(60);
         this._logoBg = param1.readShort();
         this._logoIcon = param1.readShort();
         this._logoColor = param1.readShort();
         this._txtColor = param1.readShort();
         this._logoWord = param1.readUTFBytes(4);
         this.newTeamLevel = param1.readUnsignedInt();
         this.techCenterLevel = param1.readUnsignedInt();
         this.bonusCenterLevel = param1.readUnsignedInt();
         this.resCenterLevel = param1.readUnsignedInt();
         this._drawingUint = param1.readUnsignedInt();
         this.totalBossDmg = param1.readUnsignedInt();
         this.team_func_disalbed = param1.readUnsignedInt();
         this.lastPayTime = param1.readUnsignedInt();
         this.teamPkInfo = new TeamPkHistoryInfo(param1);
      }
      
      public function get logoBg() : uint
      {
         return this._logoBg;
      }
      
      public function get logoIcon() : uint
      {
         return this._logoIcon;
      }
      
      public function get logoColor() : uint
      {
         return this._logoColor;
      }
      
      public function get txtColor() : uint
      {
         return this._txtColor;
      }
      
      public function get logoWord() : String
      {
         return this._logoWord;
      }
      
      public function set logoBg(param1:uint) : void
      {
         this._logoBg = param1;
      }
      
      public function set logoIcon(param1:uint) : void
      {
         this._logoIcon = param1;
      }
      
      public function set logoColor(param1:uint) : void
      {
         this._logoColor = param1;
      }
      
      public function set txtColor(param1:uint) : void
      {
         this._txtColor = param1;
      }
      
      public function set logoWord(param1:String) : void
      {
         this._logoWord = param1;
      }
      
      public function get superCoreNum() : uint
      {
         return this._superCoreNum;
      }
      
      public function set superCoreNum(param1:uint) : void
      {
         this._superCoreNum = param1;
      }
      
      public function get exp() : uint
      {
         return this._exp;
      }
      
      public function set exp(param1:uint) : void
      {
         this._exp = param1;
      }
      
      public function get score() : uint
      {
         return this._score;
      }
      
      public function set score(param1:uint) : void
      {
         this._score = param1;
      }
      
      public function get teamID() : uint
      {
         return this._teamID;
      }
      
      public function set teamID(param1:uint) : void
      {
         this._teamID = param1;
      }
      
      public function get leader() : uint
      {
         return this._leader;
      }
      
      public function set leader(param1:uint) : void
      {
         this._leader = param1;
      }
      
      public function get memberCount() : uint
      {
         return this._memberCount;
      }
      
      public function set memberCount(param1:uint) : void
      {
         this._memberCount = param1;
      }
      
      public function get interest() : uint
      {
         return this._interest;
      }
      
      public function get joinFlag() : int
      {
         return this._joinFlag;
      }
      
      public function set joinFlag(param1:int) : void
      {
         this._joinFlag = param1;
      }
      
      public function get visitFlag() : uint
      {
         return this._visitFlag;
      }
      
      public function get name() : String
      {
         return this._name;
      }
      
      public function set name(param1:String) : void
      {
         this._name = param1;
      }
      
      public function get slogan() : String
      {
         return this._slogan;
      }
      
      public function set slogan(param1:String) : void
      {
         this._slogan = param1;
      }
      
      public function get notice() : String
      {
         return this._notice;
      }
      
      public function set notice(param1:String) : void
      {
         this._notice = param1;
      }
      
      public function get level() : uint
      {
         var _loc1_:uint = 2;
         var _loc2_:int = this.countExp(_loc1_);
         while(_loc2_ < this._exp)
         {
            _loc1_++;
            _loc2_ = this.countExp(_loc1_);
         }
         var _loc3_:uint = _loc1_ - 1;
         if(_loc3_ > 100)
         {
            _loc3_ = 100;
         }
         return _loc3_;
      }
      
      public function get realLevel() : uint
      {
         var _loc1_:uint = 2;
         var _loc2_:int = this.countExp(_loc1_);
         while(_loc2_ < this._exp)
         {
            _loc1_++;
            _loc2_ = this.countExp(_loc1_);
         }
         return _loc1_ - 1;
      }
      
      public function countExp(param1:uint) : int
      {
         DebugTrace.show("level--:",param1,6 * Math.pow(param1,3) / 5 - 15 * Math.pow(param1,2) + 100 * param1 - 140);
         return uint(Math.ceil(6 * Math.pow(param1,3) / 5 - 15 * Math.pow(param1,2) + 100 * param1 - 140));
      }
      
      public function get leaderNick() : String
      {
         return this._leaderNick;
      }
      
      public function set leaderNick(param1:String) : void
      {
         this._leaderNick = param1;
      }
      
      public function get weeklyCost() : int
      {
         var _loc1_:int = this.newTeamLevel * 40 + 120;
         if(this.newTeamLevel == 10)
         {
            _loc1_ += 40;
         }
         return _loc1_ + this.weeklyBonusCost + this.weeklyTechCost;
      }
      
      public function get weeklyTechCost() : int
      {
         var _loc1_:int = this.techCenterLevel * 20 + 60;
         if(this.techCenterLevel == 10)
         {
            _loc1_ += 20;
         }
         return _loc1_;
      }
      
      public function get weeklyBonusCost() : int
      {
         var _loc1_:int = this.bonusCenterLevel * 20 + 60;
         if(this.bonusCenterLevel == 10)
         {
            _loc1_ += 20;
         }
         return _loc1_;
      }
      
      public function get weeklyNextLv() : Array
      {
         if(this.newTeamLevel == 10)
         {
            return [0,0];
         }
         var _loc1_:Array = [];
         var _loc2_:int = this.newTeamLevel * 100 + 400;
         if(this.newTeamLevel == 9)
         {
            _loc2_ += 100;
         }
         var _loc3_:int = (this.newTeamLevel + 1) * 40 + 120;
         if(this.newTeamLevel + 1 == 10)
         {
            _loc3_ += 40;
         }
         return [_loc2_,_loc3_ + this.weeklyBonusCost + this.weeklyTechCost];
      }
      
      public function get weeklyTechNextLv() : Array
      {
         if(this.techCenterLevel == 10)
         {
            return [0,0];
         }
         var _loc1_:Array = [];
         var _loc2_:int = this.techCenterLevel * 50 + 200;
         if(this.techCenterLevel == 9)
         {
            _loc2_ += 50;
         }
         var _loc3_:int = (this.techCenterLevel + 1) * 20 + 60;
         if(this.techCenterLevel + 1 == 10)
         {
            _loc3_ += 20;
         }
         return [_loc2_,_loc3_];
      }
      
      public function get weeklyBonusNextLv() : Array
      {
         if(this.bonusCenterLevel == 10)
         {
            return [0,0];
         }
         var _loc1_:Array = [];
         var _loc2_:int = this.bonusCenterLevel * 50 + 200;
         if(this.bonusCenterLevel == 9)
         {
            _loc2_ += 50;
         }
         var _loc3_:int = (this.bonusCenterLevel + 1) * 20 + 60;
         if(this.bonusCenterLevel + 1 == 10)
         {
            _loc3_ += 20;
         }
         return [_loc2_,_loc3_];
      }
      
      public function get nextPayday() : int
      {
         var _loc1_:int = SystemTimerManager.time - this.lastPayTime;
         var _loc2_:int = _loc1_ / (60 * 60 * 24);
         return 7 - _loc2_;
      }
      
      public function get maxTeamMembers() : int
      {
         return 70;
      }
      
      public function get haveDrawingStatus() : uint
      {
         return this._drawingUint;
      }
      
      public function set haveDrawingStatus(param1:uint) : void
      {
         this._drawingUint = param1;
      }
   }
}
