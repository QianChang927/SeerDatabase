package com.robot.core.info.skillEffectInfo
{
   public class Effect_21 extends AbstractEffectInfo
   {
       
      
      public function Effect_21()
      {
         super();
         _argsNum = 3;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         var _loc2_:* = null;
         if(param1[0] != param1[1])
         {
            _loc2_ = "作用" + param1[0] + "~" + param1[1] + "回合，每回合反弹对手1/" + param1[2] + "的伤害";
         }
         else
         {
            _loc2_ = "作用" + param1[0] + "回合，每回合反弹对手1/" + param1[2] + "的伤害";
         }
         return _loc2_;
      }
   }
}
