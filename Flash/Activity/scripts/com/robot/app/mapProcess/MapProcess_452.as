package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task663;
   import com.robot.app.task.taskscollection.Task669;
   import com.robot.app.task.taskscollection.Task687;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_452 extends BaseMapProcess
   {
       
      
      public function MapProcess_452()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task663.initTaskForMap452(this);
         Task669.initTaskForMap452(this);
         Task687.initTaskForMap452(this);
      }
      
      override public function destroy() : void
      {
         Task663.destroy();
         Task669.destroy();
         Task687.destroy();
      }
   }
}
