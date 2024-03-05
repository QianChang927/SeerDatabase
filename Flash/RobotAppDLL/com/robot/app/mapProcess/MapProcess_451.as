package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_739;
   import com.robot.app.task.taskscollection.Task662;
   import com.robot.app.task.taskscollection.Task663;
   import com.robot.app.task.taskscollection.Task673;
   import com.robot.app.task.taskscollection.Task678;
   import com.robot.app.task.taskscollection.Task683;
   import com.robot.app.task.taskscollection.Task687;
   import com.robot.app.task.taskscollection.Task739;
   import com.robot.app.task.taskscollection.Task789;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_451 extends BaseMapProcess
   {
       
      
      public function MapProcess_451()
      {
         super();
      }
      
      override protected function init() : void
      {
         var map:* = undefined;
         this.conLevel["Task663MC"].visible = false;
         this.conLevel["task673MC"].visible = false;
         this.conLevel["task678MC"].visible = false;
         Task662.initTaskForMap451(this);
         Task663.initTaskForMap451(this);
         Task673.initTaskForMap451(this);
         Task678.initTaskForMap451(this);
         Task683.initTaskForMap451(this);
         Task687.initTaskForMap451(this);
         map = this;
         TasksManager.getProStatusList(TaskController_739.TASK_ID,function(param1:Array):void
         {
            if(Boolean(param1[0]) && !param1[1])
            {
               Task739.initTaskForMap451(map);
            }
            else
            {
               Task789.initTaskForMap451(map);
            }
         });
         getDefinitionByName("com.robot.app2.spt.DarkTriangleMonsterController").initMap(this);
      }
      
      override public function destroy() : void
      {
         Task662.destroy();
         Task663.destroy();
         Task673.destroy();
         Task678.destroy();
         Task683.destroy();
         Task687.destroy();
         Task739.destroy();
         Task789.destroy();
         getDefinitionByName("com.robot.app2.spt.DarkTriangleMonsterController").destroy();
      }
   }
}
