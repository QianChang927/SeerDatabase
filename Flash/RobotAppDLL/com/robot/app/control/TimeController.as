package com.robot.app.control
{
   import com.robot.core.manager.SystemTimerManager;
   
   public class TimeController
   {
      
      public static const isLocal:Boolean = false;
       
      
      public function TimeController()
      {
         super();
      }
      
      public static function getTime() : Number
      {
         if(isLocal)
         {
            return new Date().time;
         }
         return SystemTimerManager.time * 1000;
      }
   }
}
