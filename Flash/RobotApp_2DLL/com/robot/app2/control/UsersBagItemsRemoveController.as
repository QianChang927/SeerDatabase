package com.robot.app2.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.core.manager.TasksManager;
   
   public class UsersBagItemsRemoveController
   {
       
      
      public function UsersBagItemsRemoveController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(TasksManager.getTaskStatus(1464) == TasksManager.ALR_ACCEPT)
         {
            LocalMsgController.addLocalMsg("UsersBagItemsRemoveEnvelopePanel");
         }
      }
   }
}
