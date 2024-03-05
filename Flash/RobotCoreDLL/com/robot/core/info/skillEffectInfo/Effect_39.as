package com.robot.core.info.skillEffectInfo
{
   public class Effect_39 extends AbstractEffectInfo
   {
       
      
      public function Effect_39()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "命中对方时，有" + param1[0] + "%的几率降低对方所有技能" + param1[1] + "点PP值";
      }
   }
}
