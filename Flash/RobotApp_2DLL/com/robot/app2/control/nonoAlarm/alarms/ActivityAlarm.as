package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.utils.CronTimeVo;
   import org.taomee.debug.DebugTrace;
   
   public class ActivityAlarm extends AlarmItem
   {
       
      
      public var _isStart:Boolean = false;
      
      public function ActivityAlarm()
      {
         super();
      }
      
      override public function get showText() : String
      {
         return "<font color=\'#3cfecc\'>" + name + "</font> 开始啦";
      }
      
      override public function checkStatu() : void
      {
         var _loc1_:CronTimeVo = null;
         for each(_loc1_ in cTimes)
         {
            if(_loc1_.isTimeActive(SystemTimerManager.sysBJDate))
            {
               if(!this._isStart)
               {
                  NoNoAlarmControl.addAlarm(this);
                  this._isStart = true;
                  DebugTrace.show("活动" + name + "符合时间");
                  return;
               }
            }
         }
         DebugTrace.show("活动" + name + "不符合时间");
         this._isStart = false;
         NoNoAlarmControl.removeAlarm(this);
      }
   }
}
