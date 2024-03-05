package com.robot.core.info.skillEffectInfo
{
   public class Effect_440 extends AbstractEffectInfo
   {
       
      
      public function Effect_440()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内对手使用技能消耗的PP值变为" + param1[1] + "倍";
      }
   }
}
