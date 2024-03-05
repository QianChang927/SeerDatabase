package com.robot.core.info.skillEffectInfo
{
   public class Effect_9 extends AbstractEffectInfo
   {
       
      
      public function Effect_9()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "连续使用每次威力增加" + param1[0] + "，最高威力" + param1[1];
      }
   }
}
