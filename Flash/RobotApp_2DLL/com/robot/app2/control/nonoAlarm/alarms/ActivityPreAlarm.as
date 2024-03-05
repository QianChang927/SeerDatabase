package com.robot.app2.control.nonoAlarm.alarms
{
   public class ActivityPreAlarm extends ActivityAlarm
   {
       
      
      public function ActivityPreAlarm()
      {
         super();
      }
      
      override public function get showText() : String
      {
         return "<font color=\'#3cfecc\'>" + name + "</font> 快去看看吧！";
      }
   }
}
