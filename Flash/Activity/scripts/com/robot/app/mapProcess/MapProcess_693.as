package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1025;
   import com.robot.app.task.taskscollection.Task819;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_693 extends BaseMapProcess
   {
       
      
      public function MapProcess_693()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task819.initTaskForMap693(this);
         Task1025.initTaskForMap693(this);
      }
      
      override public function destroy() : void
      {
         Task819.destroy();
         Task1025.destroy();
      }
   }
}
