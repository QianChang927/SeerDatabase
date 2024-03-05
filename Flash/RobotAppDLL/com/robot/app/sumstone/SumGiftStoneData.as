package com.robot.app.sumstone
{
   public class SumGiftStoneData
   {
      
      private static var _instance:com.robot.app.sumstone.SumGiftStoneData;
       
      
      private var _nRewardStatus:int;
      
      private var _nHaveUsedTimes:int;
      
      private var _nFightProcess:int;
      
      private var _nResType:int;
      
      private var _nSignDays:int;
      
      private var _nSignNum:int;
      
      private var _hasInitialized:int = 0;
      
      public function SumGiftStoneData()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.sumstone.SumGiftStoneData
      {
         if(null == _instance)
         {
            _instance = new com.robot.app.sumstone.SumGiftStoneData();
         }
         return _instance;
      }
      
      public function set rewardStatus(param1:int) : void
      {
         this._nRewardStatus = param1;
      }
      
      public function getMainBtStatus() : Boolean
      {
         return (this._nRewardStatus & 1) > 0;
      }
      
      public function getSignRewardStatus(param1:int) : Boolean
      {
         return (this._nRewardStatus >> param1 & 1) > 0;
      }
      
      public function set haveUsedTimes(param1:int) : void
      {
         this._nHaveUsedTimes = param1;
      }
      
      public function getHaveUsedTimes() : int
      {
         return this._nHaveUsedTimes;
      }
      
      public function set fightProcess(param1:int) : void
      {
         this._nFightProcess = param1;
      }
      
      public function getFightProcess() : int
      {
         return this._nFightProcess;
      }
      
      public function set resType(param1:int) : void
      {
         this._nResType = param1;
      }
      
      public function getResType() : int
      {
         return this._nResType;
      }
      
      public function set signDays(param1:int) : void
      {
         var _loc2_:int = 0;
         this._nSignDays = param1;
         this._nSignNum = 0;
         if(this._nSignDays > 0)
         {
            _loc2_ = 0;
            while(_loc2_ < 7)
            {
               if(this._nSignDays >> _loc2_ & 1 > 0)
               {
                  ++this._nSignNum;
               }
               _loc2_++;
            }
         }
      }
      
      public function getSignDays() : int
      {
         return this._nSignDays;
      }
      
      public function getSignNum() : int
      {
         return this._nSignNum;
      }
      
      public function set initializeStep(param1:int) : void
      {
         this._hasInitialized = param1;
      }
      
      public function getInitializeStep() : int
      {
         return this._hasInitialized;
      }
   }
}
