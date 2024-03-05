package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task764;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_764
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 764;
       
      
      public function TaskController_764()
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
         Task764.applyTask();
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
