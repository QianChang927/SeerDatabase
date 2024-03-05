package com.robot.app.task.control
{
   import com.robot.core.manager.TasksManager;
   
   public class TaskController_201
   {
       
      
      public function TaskController_201()
      {
         super();
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(201,function(param1:Array):void
         {
            if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && Boolean(param1[4]) && Boolean(param1[5]) && !param1[6])
            {
               TasksManager.complete(201,6);
            }
         });
      }
   }
}
