package com.robot.core.info.skillEffectInfo
{
   public class Effect_417 extends AbstractEffectInfo
   {
       
      
      public function Effect_417()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "当回合及下" + param1[0] + "回合自身攻击技能造成伤害的" + param1[1] + "%会恢复自身体力";
      }
   }
}
