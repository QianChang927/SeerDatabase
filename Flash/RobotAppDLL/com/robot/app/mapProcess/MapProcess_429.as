package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.mapProcess.control.BlackCrystalController;
   import com.robot.app.task.taskscollection.Task529;
   import com.robot.app.task.taskscollection.Task530;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_429 extends BaseMapProcess
   {
       
      
      public function MapProcess_429()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task529.initFirstTask(this);
         Task530.initTask_2(this);
         BlackCrystalController.initTaskFor429(this);
      }
      
      public function exploitGas() : void
      {
         EnergyController.exploit(33);
      }
      
      override public function destroy() : void
      {
         Task529.destory();
         Task530.destory();
      }
   }
}
