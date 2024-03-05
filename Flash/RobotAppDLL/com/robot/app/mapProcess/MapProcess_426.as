package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task524;
   import com.robot.app.task.taskscollection.Task811;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_426 extends BaseMapProcess
   {
       
      
      public function MapProcess_426()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task811.initTaskForMap426(this);
         TasksManager.getProStatusList(811,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               return;
            }
         });
         Task524.initTask(this);
      }
      
      override public function destroy() : void
      {
         Task524.destory();
         Task811.destroy();
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
