package com.robot.core.info.fightInfo
{
   public class SkillStateInfos
   {
       
      
      private var _runawayMoveNum:int;
      
      private var _skillRunawayMarks:Array;
      
      private var _lockedSkillId:int;
      
      private var _lockedSkillArr:Array;
      
      public function SkillStateInfos()
      {
         super();
      }
      
      public function get runawayMoveNum() : int
      {
         return this._runawayMoveNum;
      }
      
      public function set runawayMoveNum(param1:int) : void
      {
         this._runawayMoveNum = param1;
      }
      
      public function get skillRunawayMarks() : Array
      {
         return this._skillRunawayMarks;
      }
      
      public function set skillRunawayMarks(param1:Array) : void
      {
         this._skillRunawayMarks = param1;
      }
      
      public function get lockedSkillId() : int
      {
         return this._lockedSkillId;
      }
      
      public function set lockedSkillId(param1:int) : void
      {
         this._lockedSkillId = param1;
      }
      
      public function get lockedSkillArr() : Array
      {
         return this._lockedSkillArr;
      }
      
      public function set lockedSkillArr(param1:Array) : void
      {
         this._lockedSkillArr = param1;
      }
   }
}
