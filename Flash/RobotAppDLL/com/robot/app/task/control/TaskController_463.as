package com.robot.app.task.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_463
   {
      
      public static const TASK_ID:uint = 463;
      
      private static var _panel:AppModel = null;
       
      
      public function TaskController_463()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         var _loc1_:String = "TaskPanel_" + TASK_ID;
         if(_panel == null)
         {
            _panel = new AppModel(ClientConfig.getTaskModule(_loc1_),"正在打开任务信息");
            _panel.setup();
         }
         _panel.show();
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
         if(_panel)
         {
            _panel.destroy();
            _panel = null;
         }
      }
   }
}
