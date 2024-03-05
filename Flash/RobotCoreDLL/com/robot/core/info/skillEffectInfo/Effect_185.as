package com.robot.core.info.skillEffectInfo
{
   public class Effect_185 extends AbstractEffectInfo
   {
       
      
      public function Effect_185()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "若击败" + statusDict[param1[0]] + "的对手，则下一个出场的对手也进入" + statusDict[param1[0]] + "状态";
      }
   }
}
