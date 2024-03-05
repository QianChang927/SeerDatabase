package com.robot.app.control
{
   import com.robot.core.manager.TasksManager;
   
   public class ServiceSurveyController
   {
       
      
      public function ServiceSurveyController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(TasksManager.getTaskStatus(1369) == TasksManager.ALR_ACCEPT)
         {
            LocalMsgController.addLocalMsg("ServiceSurveyPanel");
         }
      }
   }
}
