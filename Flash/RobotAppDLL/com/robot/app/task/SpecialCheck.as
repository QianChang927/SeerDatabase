package com.robot.app.task
{
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   
   public class SpecialCheck
   {
       
      
      public function SpecialCheck()
      {
         super();
      }
      
      public static function initCheck() : void
      {
         if(TasksManager.getTaskStatus(1237) == TasksManager.COMPLETE)
         {
            SocketConnection.send(9288);
         }
      }
   }
}
