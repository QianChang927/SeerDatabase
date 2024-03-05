package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task735;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_735
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 735;
       
      
      public function TaskController_735()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         TasksManager.accept(TASK_ID,function(param1:Boolean):void
         {
            if(param1)
            {
               Task735.acceptTask();
            }
         });
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
