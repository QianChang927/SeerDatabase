package com.robot.core.info.skillEffectInfo
{
   public class Effect_115 extends AbstractEffectInfo
   {
       
      
      public function Effect_115()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "%几率附加速度的1/" + param1[1] + "伤害";
      }
   }
}
