package com.robot.core.utils
{
   public class NumberUtils
   {
       
      
      public function NumberUtils()
      {
         super();
      }
      
      public static function random(param1:int, param2:int) : int
      {
         var _loc5_:Number = NaN;
         param2 += 1;
         if(param1 > param2)
         {
            _loc5_ = param1;
            param1 = param2;
            param2 = _loc5_;
         }
         var _loc3_:Number = param2 - param1;
         var _loc4_:Number = (_loc4_ = Math.random() * _loc3_) + param1;
         return Math.floor(_loc4_);
      }
      
      public static function getGaussian(param1:Number = 0, param2:Number = 1) : Number
      {
         var _loc3_:Number = Math.random();
         var _loc4_:Number = Math.random();
         return Math.sqrt(-2 * Math.log(_loc3_)) * Math.cos(2 * Math.PI * _loc4_) * param2 + param1;
      }
   }
}
