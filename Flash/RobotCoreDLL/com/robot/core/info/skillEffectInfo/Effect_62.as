package com.robot.core.info.skillEffectInfo
{
   public class Effect_62 extends AbstractEffectInfo
   {
       
      
      public function Effect_62()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合后若对方没有将自己击败，则对方死亡";
      }
   }
}
