package com.robot.core.info.skillEffectInfo
{
   public class Effect_46 extends AbstractEffectInfo
   {
       
      
      public function Effect_46()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "可完全抵挡" + param1[0] + "次攻击";
      }
   }
}
