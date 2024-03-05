package com.robot.core.info
{
   public class NewTeamTaskInfo
   {
       
      
      private var _id:int;
      
      private var _name:String;
      
      private var _des:String;
      
      private var _level:int;
      
      private var _state:int;
      
      private var _rewards:Array;
      
      private var _taskTimeStamp:int;
      
      private var _taskTotalTime:Array;
      
      private var _recommendSpirit:Array;
      
      private var _inSpirit:Array;
      
      private var _extraRewards:Array;
      
      private var _NeedMonstersNum:int;
      
      private var _taskOver:int;
      
      private var _rewardState:int;
      
      private var _index:int;
      
      public function NewTeamTaskInfo()
      {
         super();
      }
      
      public function get time() : int
      {
         return 1;
      }
      
      public function get id() : int
      {
         return this._id;
      }
      
      public function set id(param1:int) : void
      {
         this._id = param1;
      }
      
      public function get name() : String
      {
         return this._name;
      }
      
      public function set name(param1:String) : void
      {
         this._name = param1;
      }
      
      public function get level() : int
      {
         return this._level;
      }
      
      public function set level(param1:int) : void
      {
         this._level = param1;
      }
      
      public function get des() : String
      {
         return this._des;
      }
      
      public function set des(param1:String) : void
      {
         this._des = param1;
      }
      
      public function get state() : int
      {
         return this._state;
      }
      
      public function set state(param1:int) : void
      {
         this._state = param1;
      }
      
      public function get rewards() : Array
      {
         return this._rewards;
      }
      
      public function set rewards(param1:Array) : void
      {
         this._rewards = param1;
      }
      
      public function get taskTimeStamp() : int
      {
         return this._taskTimeStamp;
      }
      
      public function set taskTimeStamp(param1:int) : void
      {
         this._taskTimeStamp = param1;
      }
      
      public function get recommendSpirit() : Array
      {
         return this._recommendSpirit;
      }
      
      public function set recommendSpirit(param1:Array) : void
      {
         this._recommendSpirit = param1;
      }
      
      public function get inSpirit() : Array
      {
         return this._inSpirit;
      }
      
      public function set inSpirit(param1:Array) : void
      {
         this._inSpirit = param1;
      }
      
      public function get extraRewards() : Array
      {
         return this._extraRewards;
      }
      
      public function set extraRewards(param1:Array) : void
      {
         this._extraRewards = param1;
      }
      
      public function get NeedMonstersNum() : int
      {
         return this._NeedMonstersNum;
      }
      
      public function set NeedMonstersNum(param1:int) : void
      {
         this._NeedMonstersNum = param1;
      }
      
      public function get taskTotalTime() : Array
      {
         return this._taskTotalTime;
      }
      
      public function set taskTotalTime(param1:Array) : void
      {
         this._taskTotalTime = param1;
      }
      
      public function get taskOver() : int
      {
         return this._taskOver;
      }
      
      public function set taskOver(param1:int) : void
      {
         this._taskOver = param1;
      }
      
      public function get rewardState() : int
      {
         return this._rewardState;
      }
      
      public function set rewardState(param1:int) : void
      {
         this._rewardState = param1;
      }
      
      public function get index() : int
      {
         return this._index;
      }
      
      public function set index(param1:int) : void
      {
         this._index = param1;
      }
   }
}
