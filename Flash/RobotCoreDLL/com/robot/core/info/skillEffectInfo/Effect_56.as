package com.robot.core.info.skillEffectInfo
{
   public class Effect_56 extends AbstractEffectInfo
   {
       
      
      public function Effect_56()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内使自身的属性和对方的属性相同";
      }
   }
}
