package com.robot.core.info.skillEffectInfo
{
   public class Effect_2 extends AbstractEffectInfo
   {
       
      
      public function Effect_2()
      {
         super();
         _argsNum = 0;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "对方体力小于1/2时威力加倍";
      }
   }
}
