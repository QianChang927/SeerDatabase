package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   
   public class TaskController_664
   {
      
      public static const TASK_ID:uint = 664;
      
      public static var name:String;
       
      
      public function TaskController_664()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         name = "TaskPanel_" + TASK_ID;
         ModuleManager.showModule(ClientConfig.getTaskModule(name),"初登果然星");
      }
      
      public static function setup() : void
      {
      }
      
      public static function start() : void
      {
         showPanel();
      }
      
      public static function destroy() : void
      {
         ModuleManager.destroy(ClientConfig.getTaskModule(name));
      }
   }
}
