package com.robot.core.info.skillEffectInfo
{
   public class Effect_4 extends AbstractEffectInfo
   {
       
      
      public function Effect_4()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         if(param1[2] > 0)
         {
            return "技能使用成功时，" + param1[1] + "%改变自身" + propDict[param1[0]] + "等级+" + param1[2];
         }
         return "技能使用成功时，" + param1[1] + "%改变自身" + propDict[param1[0]] + "等级" + param1[2];
      }
   }
}
