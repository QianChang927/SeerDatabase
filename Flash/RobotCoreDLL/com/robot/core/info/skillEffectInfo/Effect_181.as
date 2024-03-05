package com.robot.core.info.skillEffectInfo
{
   public class Effect_181 extends AbstractEffectInfo
   {
       
      
      public function Effect_181()
      {
         super();
         _argsNum = 4;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "%几率令对手" + statusDict[param1[1]] + "，连续攻击每次提高" + param1[2] + "%几率，最多提高" + param1[3] + "%";
      }
   }
}
