package com.robot.app2.control.DiamondTask2022.data
{
   public class DiamondTaskLivenessGiftData
   {
       
      
      public var giftState:int;
      
      public var giftLimit:int;
      
      public var icon:int;
      
      public var rewardArr:Array;
      
      public var diamond:int = 0;
      
      public function DiamondTaskLivenessGiftData(param1:XML)
      {
         super();
         this.giftState = 0;
         this.giftLimit = param1.@activity;
         this.icon = param1.@icon;
         this.rewardArr = param1.@rewardinfo.toString().split(";");
         this.diamond = param1.@diamond;
      }
   }
}
