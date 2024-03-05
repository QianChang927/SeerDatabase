package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app.tasksRecord.TasksRecordConfig;
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.config.xml.TasksXMLInfo;
   import com.robot.core.event.TaskEvent;
   import com.robot.core.manager.TasksManager;
   
   public class ZhuXianAlarm extends AlarmItem
   {
       
      
      private var taskId:int;
      
      public function ZhuXianAlarm()
      {
         super();
         this.taskId = TasksRecordConfig.getNewMainLineTaskId();
         TasksManager.addListener(TaskEvent.ACCEPT,this.taskId,0,function(param1:* = null):void
         {
            checkStatu();
         });
      }
      
      override public function get showText() : String
      {
         return TasksXMLInfo.getName(this.taskId);
      }
      
      override public function checkStatu() : void
      {
         if(TasksManager.getTaskStatus(this.taskId) == TasksManager.UN_ACCEPT)
         {
            NoNoAlarmControl.addAlarm(this);
         }
         else
         {
            NoNoAlarmControl.removeAlarm(this);
         }
      }
   }
}
