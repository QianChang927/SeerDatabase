package com.robot.app2.control.nonoAlarm.alarms
{
   public class SptTaskAlarm extends AbstractTaskAlarm
   {
       
      
      public function SptTaskAlarm()
      {
         super();
      }
      
      override protected function get taskId() : int
      {
         return 2101;
      }
      
      override public function get showText() : String
      {
         return this.name;
      }
   }
}
