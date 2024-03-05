package com.robot.core.info.skillEffectInfo
{
   public class Effect_169 extends AbstractEffectInfo
   {
       
      
      public function Effect_169()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内，每回合额外附加" + param1[1] + "%几率令对手" + statusDict[param1[2]];
      }
   }
}
