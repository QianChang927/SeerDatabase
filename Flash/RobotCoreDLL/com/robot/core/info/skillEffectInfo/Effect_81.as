package com.robot.core.info.skillEffectInfo
{
   public class Effect_81 extends AbstractEffectInfo
   {
       
      
      public function Effect_81()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "下" + param1[0] + "回合自身攻击技能必定命中";
      }
   }
}
