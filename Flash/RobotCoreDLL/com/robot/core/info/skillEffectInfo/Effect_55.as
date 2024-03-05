package com.robot.core.info.skillEffectInfo
{
   public class Effect_55 extends AbstractEffectInfo
   {
       
      
      public function Effect_55()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内, 自身与对方反转战斗时属性";
      }
   }
}
