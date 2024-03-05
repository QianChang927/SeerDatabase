package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_110
   {
      
      private static var panel:AppModel = null;
      
      public static var taskBool:Boolean = false;
       
      
      public function TaskController_110()
      {
         super();
      }
      
      public static function start() : void
      {
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_110"),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function setup() : void
      {
      }
      
      public static function showIcon() : void
      {
      }
      
      public static function delIcon() : void
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
