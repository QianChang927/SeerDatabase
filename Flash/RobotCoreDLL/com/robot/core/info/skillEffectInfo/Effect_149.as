package com.robot.core.info.skillEffectInfo
{
   public class Effect_149 extends AbstractEffectInfo
   {
       
      
      public function Effect_149()
      {
         super();
         _argsNum = 4;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "命中后，" + param1[0] + "%令对方" + statusDict[param1[1]] + "，" + param1[2] + "%令对方" + statusDict[param1[3]];
      }
   }
}
