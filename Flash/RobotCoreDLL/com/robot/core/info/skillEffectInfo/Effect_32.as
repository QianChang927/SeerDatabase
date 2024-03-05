package com.robot.core.info.skillEffectInfo
{
   public class Effect_32 extends AbstractEffectInfo
   {
       
      
      public function Effect_32()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "使用后" + param1[0] + "回合攻击击中对象要害概率增加1/16";
      }
   }
}
