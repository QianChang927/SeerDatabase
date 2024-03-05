package com.robot.core.info.skillEffectInfo
{
   public class Effect_15 extends AbstractEffectInfo
   {
       
      
      public function Effect_15()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "命中后" + param1[0] + "%令对方害怕";
      }
   }
}
