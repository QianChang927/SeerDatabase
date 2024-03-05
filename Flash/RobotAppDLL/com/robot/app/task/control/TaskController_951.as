package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task951;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_951
   {
      
      public static const TASK_ID:uint = 951;
      
      private static var panel:AppModel;
       
      
      public function TaskController_951()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         TasksManager.accept(TASK_ID,function():void
         {
            startPro();
         });
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               Task951.startPro0();
            }
            if(Boolean(param1[0]) && !param1[1])
            {
               Task951.startPro1();
            }
            if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
            {
               Task951.startPro2();
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
