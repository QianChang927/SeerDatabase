package com.robot.app.control
{
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   
   public class TrionesController
   {
       
      
      public function TrionesController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(TasksManager.getTaskStatus(1071) != TasksManager.COMPLETE || TasksManager.getTaskStatus(1087) != TasksManager.COMPLETE || TasksManager.getTaskStatus(1109) != TasksManager.COMPLETE || TasksManager.getTaskStatus(1127) != TasksManager.COMPLETE || TasksManager.getTaskStatus(1170) != TasksManager.COMPLETE || TasksManager.getTaskStatus(1250) != TasksManager.COMPLETE)
         {
            LocalMsgController.addLocalMsg("triones/TrionesMessage");
         }
      }
   }
}
