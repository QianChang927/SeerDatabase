package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1399;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_69 extends BaseMapProcess
   {
       
      
      public function MapProcess_69()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task1399.initForMap69(this);
      }
      
      override public function destroy() : void
      {
         Task1399.destroy();
      }
   }
}
