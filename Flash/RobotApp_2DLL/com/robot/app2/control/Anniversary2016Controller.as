package com.robot.app2.control
{
   import com.robot.core.manager.SystemTimerManager;
   
   public class Anniversary2016Controller
   {
      
      public static const ANNIVERSARY_DATE:Date = new Date(2016,6 - 1,8);
       
      
      public function Anniversary2016Controller()
      {
         super();
      }
      
      public static function get leftDays() : int
      {
         var _loc1_:int = Math.floor((ANNIVERSARY_DATE.time - SystemTimerManager.sysBJDate.time) / (1000 * 60 * 60 * 24)) + 1;
         if(ANNIVERSARY_DATE.time - SystemTimerManager.sysBJDate.time <= 0)
         {
            _loc1_ = 0;
         }
         return _loc1_;
      }
   }
}
