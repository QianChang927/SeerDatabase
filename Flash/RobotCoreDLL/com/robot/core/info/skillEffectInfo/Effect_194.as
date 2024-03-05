package com.robot.core.info.skillEffectInfo
{
   public class Effect_194 extends AbstractEffectInfo
   {
       
      
      public function Effect_194()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "造成伤害的1/" + param1[0] + "回复自身体力，若对手" + statusDict[param1[1]] + "，则造成伤害的1/" + param1[2] + "回复自身体力";
      }
   }
}
