package com.robot.app.petRoayle
{
   import flash.utils.getTimer;
   
   public class PetRoayleTimerController
   {
      
      private static const LIMIT_SECONDS:uint = 50;
      
      private static var _startTime:uint;
       
      
      public function PetRoayleTimerController()
      {
         super();
      }
      
      public static function startTimer() : void
      {
         _startTime = getTimer();
      }
      
      public static function isOverTime() : Boolean
      {
         var _loc1_:int = int((getTimer() - _startTime) / 1000);
         return _loc1_ >= LIMIT_SECONDS;
      }
   }
}
