package com.robot.core.info.skillEffectInfo
{
   public class Effect_152 extends AbstractEffectInfo
   {
       
      
      public function Effect_152()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return param1[0] + "回合内，若对方使用属性技能，则" + param1[1] + "%使对方" + statusDict[param1[2]];
      }
   }
}
