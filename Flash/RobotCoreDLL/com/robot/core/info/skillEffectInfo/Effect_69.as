package com.robot.core.info.skillEffectInfo
{
   public class Effect_69 extends AbstractEffectInfo
   {
       
      
      public function Effect_69()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "接下来" + param1[0] + "回合使用体力药剂变成降低相应的体力";
      }
   }
}
