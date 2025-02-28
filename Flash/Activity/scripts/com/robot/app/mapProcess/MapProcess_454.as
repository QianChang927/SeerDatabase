package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task673;
   import com.robot.app.task.taskscollection.Task683;
   import com.robot.app.task.taskscollection.Task789;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_454 extends BaseMapProcess
   {
       
      
      public function MapProcess_454()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.conLevel["pointMC"].visible = false;
         Task673.initTaskForMap454(this);
         Task683.initTaskForMap454(this);
         Task789.initTaskForMap454(this);
      }
      
      override public function destroy() : void
      {
         Task673.destroy();
         Task683.destroy();
         Task789.destroy();
      }
   }
}
