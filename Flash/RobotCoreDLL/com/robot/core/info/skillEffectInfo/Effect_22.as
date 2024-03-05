package com.robot.core.info.skillEffectInfo
{
   public class Effect_22 extends AbstractEffectInfo
   {
       
      
      public function Effect_22()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "命中时," + param1[0] + "%令对方疲惫，" + param1[1] + "回合无法攻击";
      }
   }
}
