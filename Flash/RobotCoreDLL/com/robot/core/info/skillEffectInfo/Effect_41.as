package com.robot.core.info.skillEffectInfo
{
   public class Effect_41 extends AbstractEffectInfo
   {
       
      
      public function Effect_41()
      {
         super();
         _argsNum = 2;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         var _loc2_:* = null;
         if(param1[0] != param1[1])
         {
            _loc2_ = param1[0] + "~" + param1[1] + "回合本方受到的火系攻击伤害减半";
         }
         else
         {
            _loc2_ = param1[0] + "回合本方受到的火系攻击伤害减半";
         }
         return _loc2_;
      }
   }
}
