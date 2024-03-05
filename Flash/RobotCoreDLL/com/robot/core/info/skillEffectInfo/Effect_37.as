package com.robot.core.info.skillEffectInfo
{
   public class Effect_37 extends AbstractEffectInfo
   {
       
      
      public function Effect_37()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "自身HP小于1/" + param1[0] + "时威力为" + param1[1] + "倍";
      }
   }
}
