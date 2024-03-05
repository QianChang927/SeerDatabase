package com.robot.core.info.skillEffectInfo
{
   public class Effect_53 extends AbstractEffectInfo
   {
       
      
      public function Effect_53()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合攻击伤害是正常状态下的" + param1[1] + "倍";
      }
   }
}
