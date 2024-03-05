package com.robot.app.mapProcess.control
{
   public class SuperNoSeekJewelryController
   {
      
      public static var randomGroup:uint;
      
      private static const _rate:Array = [0.1,0.2,0.35,0.4,0.55,0.6,0.7,0.8,0.9,1];
       
      
      public function SuperNoSeekJewelryController()
      {
         super();
      }
      
      public static function setup() : void
      {
         randomGroup = getRandomGroupIndex();
      }
      
      private static function getRandomGroupIndex() : uint
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         var _loc1_:Number = Math.random();
         _loc3_ = 0;
         while(_loc3_ < 10)
         {
            if(_loc3_ == 0 && _loc1_ < _rate[_loc3_])
            {
               _loc2_ = _loc3_;
               break;
            }
            if(_loc3_ > 0 && _loc1_ < _rate[_loc3_] && _loc1_ >= _rate[_loc3_ - 1])
            {
               _loc2_ = _loc3_;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
   }
}
