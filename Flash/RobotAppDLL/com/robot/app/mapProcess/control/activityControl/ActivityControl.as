package com.robot.app.mapProcess.control.activityControl
{
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import org.taomee.debug.DebugTrace;
   
   public class ActivityControl
   {
       
      
      private var _cronTimes:Array;
      
      public function ActivityControl(param1:Array)
      {
         super();
         this._cronTimes = param1;
      }
      
      public function get isInActivityTime() : Boolean
      {
         var _loc1_:CronTimeVo = null;
         for each(_loc1_ in this._cronTimes)
         {
            DebugTrace.show(_loc1_.toString());
            if(_loc1_.isActive(SystemTimerManager.sysBJDate))
            {
               return true;
            }
         }
         return false;
      }
      
      public function get isPast() : Boolean
      {
         var _loc1_:CronTimeVo = null;
         var _loc2_:* = undefined;
         for each(_loc1_ in this._cronTimes)
         {
            _loc2_ = _loc1_.checkTimeHit(SystemTimerManager.sysBJDate);
            if(_loc1_.checkTimeHit(SystemTimerManager.sysBJDate) != CronTimeVo.PAST)
            {
               return false;
            }
         }
         return true;
      }
      
      public function get isIncoming() : Boolean
      {
         if(this.isPast || this.isInActivityTime)
         {
            return false;
         }
         return true;
      }
      
      public function get cronTimes() : Array
      {
         return this._cronTimes;
      }
      
      public function set cronTimes(param1:Array) : void
      {
         this._cronTimes = param1;
      }
   }
}
