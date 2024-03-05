package com.robot.app.fightNote
{
   public class FightTypeInfo
   {
       
      
      public var type:uint;
      
      public var area:uint;
      
      public var isSkipKP:Boolean = false;
      
      public var bossName:String = "野外精灵";
      
      public var bossRegion:uint = 0;
      
      public var isMultiModel:Boolean = true;
      
      public var userId:uint = 0;
      
      public var fightType:uint = 0;
      
      public var backFun:Function;
      
      public function FightTypeInfo()
      {
         super();
      }
   }
}
