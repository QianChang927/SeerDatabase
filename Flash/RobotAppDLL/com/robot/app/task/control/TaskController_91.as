package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.mode.AppModel;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   
   public class TaskController_91
   {
      
      public static const TASK_ID:uint = 91;
      
      private static var icon:InteractiveObject;
      
      private static var panel:AppModel = null;
      
      private static var lightMC:MovieClip;
       
      
      public function TaskController_91()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_91"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
      }
      
      public static function showIcon() : void
      {
      }
      
      public static function delIcon() : void
      {
      }
   }
}
