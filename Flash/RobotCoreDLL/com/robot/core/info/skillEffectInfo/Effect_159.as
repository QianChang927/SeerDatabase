package com.robot.core.info.skillEffectInfo
{
   public class Effect_159 extends AbstractEffectInfo
   {
       
      
      public function Effect_159()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "自身体力小于最大值的1/" + param1[0] + "时，" + param1[1] + "%几率令对方" + statusDict[param1[2]];
      }
   }
}
