package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.mode.AppModel;
   import flash.events.MouseEvent;
   
   public class TaskController_114
   {
      
      public static const TASK_ID:uint = 114;
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_114()
      {
         super();
      }
      
      public static function showPanel(param1:MouseEvent = null) : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_114"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
      }
   }
}
