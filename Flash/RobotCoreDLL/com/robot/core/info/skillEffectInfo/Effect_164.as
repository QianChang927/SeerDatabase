package com.robot.core.info.skillEffectInfo
{
   public class Effect_164 extends AbstractEffectInfo
   {
       
      
      public function Effect_164()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内，若受到攻击则有" + param1[1] + "%几率令对手" + statusDict[param1[2]];
      }
   }
}
