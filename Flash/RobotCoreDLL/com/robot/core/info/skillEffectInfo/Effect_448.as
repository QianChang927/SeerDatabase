package com.robot.core.info.skillEffectInfo
{
   public class Effect_448 extends AbstractEffectInfo
   {
       
      
      public function Effect_448()
      {
         super();
         _argsNum = 7;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         var _loc5_:int = 0;
         var _loc2_:Array = [null,"攻击等级","防御等级","特攻等级","特防等级","速度等级","命中等级"];
         var _loc3_:Array = [];
         var _loc4_:String = "";
         _loc5_ = 1;
         while(_loc5_ < 7)
         {
            if(param1[_loc5_] < 0)
            {
               _loc3_.push([_loc2_[_loc5_],param1[_loc5_]]);
            }
            _loc5_++;
         }
         var _loc6_:* = "";
         _loc5_ = 0;
         while(_loc5_ < _loc3_.length)
         {
            _loc6_ = (_loc6_ += _loc3_[_loc5_][0]) + _loc3_[_loc5_][1];
            if(_loc5_ != _loc3_.length - 1)
            {
               _loc6_ += "，";
            }
            _loc5_++;
         }
         return param1[0] + "回合内，每回合对手" + _loc6_;
      }
   }
}
