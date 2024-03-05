package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.manager.BufferRecordManager;
   import flash.events.Event;
   
   public class AbstractRegistrationActivitityAlarm extends AlarmItem
   {
       
      
      public function AbstractRegistrationActivitityAlarm()
      {
         super();
         BufferRecordManager.addEventListener(BufferRecordManager.VALUE_CHANGE,function(param1:Event):void
         {
            checkStatu();
         });
      }
      
      public function get bufferId() : int
      {
         return int(xml.@bufferId);
      }
      
      override public function checkStatu() : void
      {
         if(this.bufferId == 0)
         {
            NoNoAlarmControl.addAlarm(this);
            return;
         }
         if(BufferRecordManager.getMyState(this.bufferId))
         {
            NoNoAlarmControl.addAlarm(this);
         }
         else
         {
            NoNoAlarmControl.removeAlarm(this);
         }
      }
      
      override public function get showText() : String
      {
         return "<font color=\'#3cfecc\'>" + name + "</font>";
      }
   }
}
