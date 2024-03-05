package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_695;
   import com.robot.app.task.taskscollection.Task695;
   import com.robot.app.task.taskscollection.Task789;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_357 extends BaseMapProcess
   {
       
      
      public function MapProcess_357()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.topLevel.mouseChildren = this.topLevel.mouseEnabled = false;
         Task695.initTaskForMap357(this);
         if(TasksManager.getTaskStatus(TaskController_695.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            DisplayUtil.removeForParent(conLevel["task789boss"]);
            DisplayUtil.removeForParent(conLevel["task789mc"]);
         }
         else
         {
            Task789.initTaskForMap357(this);
         }
      }
      
      override public function destroy() : void
      {
         Task695.destroy();
         Task789.destroy();
      }
   }
}
