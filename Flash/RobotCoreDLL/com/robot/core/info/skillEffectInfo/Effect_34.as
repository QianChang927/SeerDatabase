package com.robot.core.info.skillEffectInfo
{
   public class Effect_34 extends AbstractEffectInfo
   {
       
      
      public function Effect_34()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "将所受的伤害" + param1[0] + "倍反馈给对手";
      }
   }
}
