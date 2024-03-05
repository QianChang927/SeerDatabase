package com.robot.core.info.skillEffectInfo
{
   public class Effect_44 extends AbstractEffectInfo
   {
       
      
      public function Effect_44()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合自己受到特殊攻击伤害减半";
      }
   }
}
