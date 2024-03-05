package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task535;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_436 extends BaseMapProcess
   {
       
      
      public function MapProcess_436()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task535.initTask_3(this);
      }
      
      override public function destroy() : void
      {
         Task535.destroyTask_3();
      }
   }
}
