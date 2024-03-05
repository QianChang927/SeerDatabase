package com.robot.core.info.skillEffectInfo
{
   public class Effect_5 extends AbstractEffectInfo
   {
       
      
      public function Effect_5()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "技能使用成功时，" + param1[1] + "%改变对方" + propDict[param1[0]] + "等级" + param1[2];
      }
   }
}
