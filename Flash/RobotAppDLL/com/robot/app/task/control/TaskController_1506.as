package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task1506;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.MainManager;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_1506
   {
      
      public static const TASK_ID:uint = 1506;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1506()
      {
         super();
      }
      
      public static function start() : void
      {
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         startPro();
      }
      
      public static function startPro() : void
      {
         Task1506.startState_1();
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
