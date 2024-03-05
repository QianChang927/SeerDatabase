package com.robot.core.info.skillEffectInfo
{
   public class Effect_147 extends AbstractEffectInfo
   {
       
      
      public function Effect_147()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "后出手时，" + param1[0] + "%概率使对方" + statusDict[param1[1]];
      }
   }
}
