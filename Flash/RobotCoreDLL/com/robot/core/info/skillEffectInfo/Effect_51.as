package com.robot.core.info.skillEffectInfo
{
   public class Effect_51 extends AbstractEffectInfo
   {
       
      
      public function Effect_51()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合自身的攻击力和对手相同";
      }
   }
}
