package com.robot.core.info.skillEffectInfo
{
   public class Effect_60 extends AbstractEffectInfo
   {
       
      
      public function Effect_60()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内，每回合都能附加" + param1[1] + "点固定伤害";
      }
   }
}
