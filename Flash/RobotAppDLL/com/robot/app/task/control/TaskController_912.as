package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task912;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_912
   {
      
      public static const TASK_ID:uint = 912;
      
      private static var panel:AppModel;
       
      
      public function TaskController_912()
      {
         super();
      }
      
      public static function start() : void
      {
         TasksManager.accept(TASK_ID,function():void
         {
            Task912.startPro_0();
         });
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            if(!param1[0])
            {
               Task912.startPro_0();
            }
         });
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
