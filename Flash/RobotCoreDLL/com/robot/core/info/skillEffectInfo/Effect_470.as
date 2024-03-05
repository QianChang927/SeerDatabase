package com.robot.core.info.skillEffectInfo
{
   public class Effect_470 extends AbstractEffectInfo
   {
       
      
      public function Effect_470()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "当回合及下" + param1[0] + "回合每回合使用攻击技能若命中则" + param1[1] + "%令对手" + statusDict[param1[2]];
      }
   }
}
