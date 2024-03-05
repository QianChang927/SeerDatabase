package com.robot.core.info.skillEffectInfo
{
   public class Effect_67 extends AbstractEffectInfo
   {
       
      
      public function Effect_67()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "当次攻击击败对方时减少对方下次出战精灵的最大体力1/" + param1[0];
      }
   }
}
