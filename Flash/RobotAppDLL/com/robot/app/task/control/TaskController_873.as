package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   
   public class TaskController_873
   {
      
      public static const TASK_ID:uint = 873;
      
      private static var panel:AppModel;
       
      
      public function TaskController_873()
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
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_873_1"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_873_2"),function():void
            {
               TasksManager.complete(TASK_ID,0,function():void
               {
                  TasksManager.complete(TASK_ID,1,function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_873_3"),function():void
                     {
                        MapManager.changeMap(701);
                     });
                  });
               });
            });
         },false);
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
