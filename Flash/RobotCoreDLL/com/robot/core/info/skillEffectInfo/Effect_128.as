package com.robot.core.info.skillEffectInfo
{
   public class Effect_128 extends AbstractEffectInfo
   {
       
      
      public function Effect_128()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内将受到的攻击伤害转化为自身体力";
      }
   }
}
