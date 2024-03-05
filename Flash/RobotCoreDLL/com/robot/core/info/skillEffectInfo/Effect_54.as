package com.robot.core.info.skillEffectInfo
{
   public class Effect_54 extends AbstractEffectInfo
   {
       
      
      public function Effect_54()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合使对方攻击伤害是正常状态下的1/" + param1[1] + "倍";
      }
   }
}
