package com.robot.core.info.skillEffectInfo
{
   public class Effect_48 extends AbstractEffectInfo
   {
       
      
      public function Effect_48()
      {
         super();
         _argsNum = 1;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内免疫所有受到的异常状态";
      }
   }
}
