package com.robot.core.info.skillEffectInfo
{
   public class Effect_173 extends AbstractEffectInfo
   {
       
      
      public function Effect_173()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "先出手时，" + param1[0] + "%概率令对方" + statusDict[param1[1]];
      }
   }
}
