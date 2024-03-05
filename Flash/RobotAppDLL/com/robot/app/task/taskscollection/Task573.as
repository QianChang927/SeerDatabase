package com.robot.app.task.taskscollection
{
   import com.robot.app.mapProcess.MapProcess_437;
   import com.robot.core.manager.TasksManager;
   
   public class Task573
   {
      
      public static var isDone:Boolean = false;
       
      
      public function Task573()
      {
         super();
      }
      
      public static function startMap437(param1:MapProcess_437) : void
      {
      }
      
      public static function get isComlpete() : Boolean
      {
         if(TasksManager.getTaskStatus(573) == TasksManager.COMPLETE)
         {
            return true;
         }
         return false;
      }
      
      public static function get isAccept() : Boolean
      {
         if(TasksManager.getTaskStatus(573) == TasksManager.ALR_ACCEPT)
         {
            return true;
         }
         return false;
      }
      
      public static function destory() : void
      {
      }
   }
}
