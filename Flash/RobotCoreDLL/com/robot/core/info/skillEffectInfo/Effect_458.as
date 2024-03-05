package com.robot.core.info.skillEffectInfo
{
   public class Effect_458 extends AbstractEffectInfo
   {
       
      
      public function Effect_458()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "若先出手则造成攻击伤害的" + param1[0] + "%恢复自身体力";
      }
   }
}
