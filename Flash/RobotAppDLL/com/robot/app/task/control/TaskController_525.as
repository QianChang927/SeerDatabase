package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_525
   {
      
      public static const TASK_ID:int = 525;
      
      private static var panel:AppModel = null;
       
      
      public function TaskController_525()
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
         TasksManager.getProStatusList(TaskController_525.TASK_ID,function(param1:Array):void
         {
            var array:Array = param1;
            if(!array[0])
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_525_00"),function():void
               {
                  MapManager.changeMap(424);
               });
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
