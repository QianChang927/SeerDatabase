package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_1495;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_89 extends BaseMapProcess
   {
       
      
      public function MapProcess_89()
      {
         super();
      }
      
      override protected function init() : void
      {
         this._changeBoliState();
         KTool.showMapAllPlayerAndMonster();
         MainManager.selfVisible = true;
         TaskController_1495.comTask(this._changeBoliState);
      }
      
      private function _changeBoliState(param1:Boolean = true) : void
      {
         if(TasksManager.getTaskStatus(TaskController_1495.TASK_ID) == TasksManager.COMPLETE)
         {
            this.topLevel["boli1"].gotoAndStop(2);
            this.topLevel["boli2"].gotoAndStop(2);
         }
         else
         {
            this.topLevel["boli1"].gotoAndStop(1);
            this.topLevel["boli2"].gotoAndStop(1);
         }
      }
      
      override public function destroy() : void
      {
      }
   }
}
