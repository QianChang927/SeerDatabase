package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.task.control.TaskController_768;
   import com.robot.app.task.taskscollection.Task768;
   import com.robot.app.task.taskscollection.Task912;
   import com.robot.app.task.taskscollection.Task973;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_16 extends BaseMapProcess
   {
       
      
      public function MapProcess_16()
      {
         super();
      }
      
      override protected function init() : void
      {
         if(TasksManager.getTaskStatus(TaskController_768.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            Task768.initTaskForMap16(this);
         }
         if(TasksManager.getTaskStatus(1868) != TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(conLevel["task912MC"]);
            getDefinitionByName("com.robot.app2.control.FlameGameController").initFor16(this);
         }
         else
         {
            Task912.initTaskForMap16(this);
         }
         Task973.initTaskFor16(this);
      }
      
      override public function destroy() : void
      {
         Task768.destroy();
         Task973.destroy();
      }
      
      public function exploitGas() : void
      {
         EnergyController.exploit(6);
         getDefinitionByName("com.robot.app2.control.FlameGameController").destroyFor16();
      }
   }
}
