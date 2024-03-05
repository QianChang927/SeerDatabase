package com.robot.core.info.skillEffectInfo
{
   public class Effect_68 extends AbstractEffectInfo
   {
       
      
      public function Effect_68()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内，受到致死攻击时则余下1点体力";
      }
   }
}
