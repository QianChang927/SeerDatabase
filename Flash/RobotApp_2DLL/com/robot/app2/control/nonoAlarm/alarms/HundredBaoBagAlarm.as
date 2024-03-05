package com.robot.app2.control.nonoAlarm.alarms
{
   public class HundredBaoBagAlarm extends ActivityAlarm
   {
       
      
      public function HundredBaoBagAlarm()
      {
         super();
      }
      
      override public function get showText() : String
      {
         return "<font color=\'#3cfecc\'>" + name + "</font> 活动快开始啦";
      }
   }
}
