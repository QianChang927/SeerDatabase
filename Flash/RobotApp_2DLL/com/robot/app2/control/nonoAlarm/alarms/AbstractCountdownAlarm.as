package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.core.manager.SystemTimerManager;
   
   public class AbstractCountdownAlarm extends AlarmItem
   {
       
      
      public var allTime:int;
      
      public var targetDate:Date;
      
      public function AbstractCountdownAlarm()
      {
         super();
      }
      
      public function get leftTime() : int
      {
         var _loc1_:int = 0;
         var _loc2_:Date = null;
         if(this.targetDate)
         {
            _loc2_ = SystemTimerManager.sysBJDate;
            _loc1_ = (this.targetDate.getTime() - _loc2_.getTime()) / 1000;
            return _loc1_ < 0 ? 0 : _loc1_;
         }
         return _loc1_;
      }
      
      public function set leftTime(param1:int) : void
      {
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         _loc2_.setTime(_loc2_.time + param1 * 1000);
         this.targetDate = _loc2_;
      }
      
      override public function get showText() : String
      {
         return "<font color=\'#3cfecc\'>" + name + "</font>";
      }
   }
}
