package com.robot.core.info.skillEffectInfo
{
   public class Effect_538 extends AbstractEffectInfo
   {
       
      
      public function Effect_538()
      {
         super();
         _argsNum = 6;
      }
      
      override public function getInfo(param1:Array = null) : String
      {
         var _loc3_:* = null;
         var _loc4_:String = null;
         var _loc2_:String = "";
         var _loc5_:int = 0;
         while(_loc5_ < 6)
         {
            if(param1[_loc5_] != 0)
            {
               _loc3_ = propDict[_loc5_] + "+" + param1[_loc5_] + ",";
               _loc2_ += _loc3_;
            }
            _loc5_++;
         }
         _loc4_ = _loc2_.slice(0,_loc2_.length - 1);
         return "消除对手能力强化状态，若消除成功则自身" + _loc4_;
      }
   }
}
