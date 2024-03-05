package com.robot.core.info.skillEffectInfo
{
   public class Effect_200 extends AbstractEffectInfo
   {
       
      
      public function Effect_200()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         return "若对手处于能力提升状态，" + param1[0] + "%几率令对手" + statusDict[param1[1]];
      }
   }
}
