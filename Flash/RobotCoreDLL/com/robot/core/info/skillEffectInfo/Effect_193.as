package com.robot.core.info.skillEffectInfo
{
   public class Effect_193 extends AbstractEffectInfo
   {
       
      
      public function Effect_193()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "若对手" + statusDict[param1[0]] + "，则必定造成双倍伤害";
      }
   }
}
