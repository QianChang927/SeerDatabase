package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_628
   {
      
      private static var panel:AppModel;
      
      public static const TASK_ID:uint = 628;
       
      
      public function TaskController_628()
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
