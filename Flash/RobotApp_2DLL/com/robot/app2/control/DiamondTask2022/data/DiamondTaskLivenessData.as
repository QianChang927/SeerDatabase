package com.robot.app2.control.DiamondTask2022.data
{
   import com.robot.core.config.xml.DiamondTask2022XMLInfo;
   import flash.utils.ByteArray;
   
   public class DiamondTaskLivenessData
   {
      
      public static const GiftCount:Array = [0,6,6];
       
      
      protected var giftType:int;
      
      protected var liveness:int;
      
      protected var rewardState:int;
      
      protected var retrieveCount:int;
      
      protected var giftDataArr:Array;
      
      public function DiamondTaskLivenessData(param1:int, param2:ByteArray)
      {
         var _loc4_:XML = null;
         this.giftDataArr = [];
         super();
         this.giftType = param1;
         var _loc3_:int = 0;
         while(_loc3_ < GiftCount[this.giftType])
         {
            _loc4_ = null;
            switch(this.giftType)
            {
               case 1:
                  _loc4_ = DiamondTask2022XMLInfo.getDailyGiftInfo(_loc3_ + 1);
                  break;
               case 2:
                  _loc4_ = DiamondTask2022XMLInfo.getWeeklyGiftInfo(_loc3_ + 1);
                  break;
            }
            this.giftDataArr.push(new DiamondTaskLivenessGiftData(_loc4_));
            _loc3_++;
         }
         this.updateData(param2);
      }
      
      public function updateData(param1:ByteArray) : void
      {
         this.liveness = param1.readUnsignedInt();
         this.rewardState = param1.readUnsignedInt();
         this.retrieveCount = param1.readUnsignedInt();
         var _loc2_:int = 0;
         while(_loc2_ < GiftCount[this.giftType])
         {
            if((this.rewardState >> _loc2_ & 1) == 1)
            {
               this.giftDataArr[_loc2_].giftState = 2;
            }
            else if(this.liveness >= this.giftDataArr[_loc2_].giftLimit)
            {
               this.giftDataArr[_loc2_].giftState = 1;
            }
            else
            {
               this.giftDataArr[_loc2_].giftState = 0;
            }
            _loc2_++;
         }
      }
      
      public function getGiftData(param1:int) : DiamondTaskLivenessGiftData
      {
         return this.giftDataArr[param1];
      }
      
      public function getLiveness() : int
      {
         return this.liveness;
      }
      
      public function getCurLivenessGiftProgress() : int
      {
         var _loc1_:int = 0;
         while(_loc1_ < GiftCount[this.giftType])
         {
            if(this.giftDataArr[_loc1_].giftLimit > this.liveness)
            {
               return _loc1_;
            }
            _loc1_++;
         }
         return GiftCount[this.giftType];
      }
      
      public function hasUngot() : Boolean
      {
         var _loc1_:DiamondTaskLivenessGiftData = null;
         for each(_loc1_ in this.giftDataArr)
         {
            if(_loc1_.giftState == 1)
            {
               return true;
            }
         }
         return false;
      }
   }
}
