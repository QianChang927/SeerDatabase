package com.robot.core.sixKingOfGod
{
   public class SixKingOfGodPalaceTaskInfo
   {
       
      
      public var difficult:int;
      
      public var difficultName:String;
      
      public var userRecommend:String;
      
      public var rewardDes:String;
      
      public var reward:int;
      
      public var extraRwd:int;
      
      public function SixKingOfGodPalaceTaskInfo()
      {
         super();
      }
      
      public function get difficultStr() : String
      {
         var _loc2_:int = 0;
         var _loc1_:* = "";
         _loc2_ = 0;
         while(_loc2_ < this.difficult)
         {
            _loc1_ += "★";
            _loc2_++;
         }
         return _loc1_;
      }
   }
}
