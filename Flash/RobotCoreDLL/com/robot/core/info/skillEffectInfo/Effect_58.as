package com.robot.core.info.skillEffectInfo
{
   public class Effect_58 extends AbstractEffectInfo
   {
       
      
      public function Effect_58()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "下" + param1[0] + "回合自身攻击技能必定打出致命一击";
      }
   }
}
