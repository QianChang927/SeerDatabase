package com.robot.core.info.userItem
{
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import flash.utils.IDataInput;
   
   public class CountermarkInfo
   {
       
      
      private var _markID:int;
      
      private var _markName:String;
      
      private var _catchTime:int;
      
      private var _holeType:int;
      
      private var _obtainTime:int;
      
      private var _bindMonID:int;
      
      private var _bindMoveID:int;
      
      private var _atkAdj:int;
      
      private var _defAdj:int;
      
      private var _spAtkAdj:int;
      
      private var _spDefAdj:int;
      
      private var _spdAdj:int;
      
      private var _hpAdj:int;
      
      private var _gemID:int;
      
      private var _pkgPos:int;
      
      private var _level:int = -1;
      
      private var _extraAttri:Array;
      
      public function CountermarkInfo(param1:IDataInput = null)
      {
         super();
         if(param1 != null)
         {
            this.markID = param1.readUnsignedInt();
            this._catchTime = param1.readUnsignedInt();
            this._holeType = param1.readUnsignedInt();
            this._obtainTime = param1.readUnsignedInt();
            this._bindMonID = param1.readUnsignedInt();
            this._bindMoveID = param1.readUnsignedInt();
            this._atkAdj = param1.readUnsignedInt();
            this._defAdj = param1.readUnsignedInt();
            this._spAtkAdj = param1.readUnsignedInt();
            this._spDefAdj = param1.readUnsignedInt();
            this._spdAdj = param1.readUnsignedInt();
            this._hpAdj = param1.readUnsignedInt();
            this._gemID = param1.readUnsignedInt();
            this._pkgPos = param1.readUnsignedInt();
         }
      }
      
      public function get markID() : int
      {
         return this._markID;
      }
      
      public function set markID(param1:int) : void
      {
         this._markID = param1;
         this._extraAttri = CountermarkXMLInfo.getExtraAttriValue(this._markID);
         this._markName = CountermarkXMLInfo.getDes(this._markID);
      }
      
      public function get catchTime() : int
      {
         return this._catchTime;
      }
      
      public function set catchTime(param1:int) : void
      {
         this._catchTime = param1;
      }
      
      public function get holeType() : int
      {
         return this._holeType;
      }
      
      public function set holeType(param1:int) : void
      {
         this._holeType = param1;
      }
      
      public function get obtainTime() : int
      {
         return this._obtainTime;
      }
      
      public function set obtainTime(param1:int) : void
      {
         this._obtainTime = param1;
      }
      
      public function get bindMonID() : int
      {
         return this._bindMonID;
      }
      
      public function set bindMonID(param1:int) : void
      {
         this._bindMonID = param1;
      }
      
      public function get bindMoveID() : int
      {
         return this._bindMoveID;
      }
      
      public function set bindMoveID(param1:int) : void
      {
         this._bindMoveID = param1;
      }
      
      public function get attackAdj() : int
      {
         return this._atkAdj;
      }
      
      public function set attackAdj(param1:int) : void
      {
         this._atkAdj = param1;
      }
      
      public function get defenceAdj() : int
      {
         return this._defAdj;
      }
      
      public function set defenceAdj(param1:int) : void
      {
         this._defAdj = param1;
      }
      
      public function get spAttackAdj() : int
      {
         return this._spAtkAdj;
      }
      
      public function set spAttackAdj(param1:int) : void
      {
         this._spAtkAdj = param1;
      }
      
      public function get spDefenceAdj() : int
      {
         return this._spDefAdj;
      }
      
      public function set spDefenceAdj(param1:int) : void
      {
         this._spDefAdj = param1;
      }
      
      public function get speedAdj() : int
      {
         return this._spdAdj;
      }
      
      public function set speedAdj(param1:int) : void
      {
         this._spdAdj = param1;
      }
      
      public function get hpAdj() : int
      {
         return this._hpAdj;
      }
      
      public function set hpAdj(param1:int) : void
      {
         this._hpAdj = param1;
      }
      
      public function get adjArray() : Array
      {
         return [this._atkAdj,this._defAdj,this._spAtkAdj,this._spDefAdj,this._spdAdj,this._hpAdj];
      }
      
      public function get gemID() : int
      {
         return this._gemID;
      }
      
      public function set gemID(param1:int) : void
      {
         this._gemID = param1;
      }
      
      public function get packagePosition() : int
      {
         return this._pkgPos;
      }
      
      public function set packagePosition(param1:int) : void
      {
         this._pkgPos = param1;
      }
      
      public function get isBindMon() : Boolean
      {
         return this._bindMonID > 0;
      }
      
      public function get isInstall() : Boolean
      {
         return this._catchTime > 0;
      }
      
      public function get isBindMove() : Boolean
      {
         return this._bindMoveID > 0;
      }
      
      public function get isBindGem() : Boolean
      {
         return this._gemID > 0;
      }
      
      public function get hasExtraAttri() : Boolean
      {
         return Boolean(this.extraAttri) && this.extraAttri.length > 0;
      }
      
      public function set adjArray(param1:Array) : void
      {
         this._atkAdj = param1[0];
         this._defAdj = param1[1];
         this._spAtkAdj = param1[2];
         this._spDefAdj = param1[3];
         this._spdAdj = param1[4];
         this._hpAdj = param1[5];
      }
      
      public function clone() : CountermarkInfo
      {
         var _loc1_:CountermarkInfo = new CountermarkInfo();
         _loc1_.markID = this._markID;
         _loc1_.catchTime = this._catchTime;
         _loc1_.holeType = this._holeType;
         _loc1_.obtainTime = this._obtainTime;
         _loc1_.bindMonID = this._bindMonID;
         _loc1_.bindMoveID = this._bindMoveID;
         _loc1_.attackAdj = this._atkAdj;
         _loc1_.defenceAdj = this._defAdj;
         _loc1_.spAttackAdj = this._spAtkAdj;
         _loc1_.spDefenceAdj = this._spDefAdj;
         _loc1_.speedAdj = this._spdAdj;
         _loc1_.hpAdj = this._hpAdj;
         _loc1_.gemID = this._gemID;
         _loc1_.packagePosition = this._pkgPos;
         _loc1_.level = this.level;
         _loc1_.extraAttri = this.extraAttri;
         _loc1_.markName = this._markName;
         return _loc1_;
      }
      
      public function get level() : int
      {
         if(this._level == -1)
         {
            this._level = CountermarkXMLInfo.getCurrentGrade(this._markID,this.adjArray);
         }
         return this._level;
      }
      
      public function set level(param1:int) : void
      {
         this._level = param1;
      }
      
      public function get extraAttri() : Array
      {
         return this._extraAttri;
      }
      
      public function set extraAttri(param1:Array) : void
      {
         this._extraAttri = param1;
      }
      
      public function get markName() : String
      {
         return this._markName;
      }
      
      public function set markName(param1:String) : void
      {
         this._markName = param1;
      }
   }
}
