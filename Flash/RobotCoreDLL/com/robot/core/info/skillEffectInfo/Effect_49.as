package com.robot.core.info.skillEffectInfo
{
   public class Effect_49 extends AbstractEffectInfo
   {
       
      
      public function Effect_49()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "可以抵挡" + param1[0] + "点伤害";
      }
   }
}
