package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1411;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_72 extends BaseMapProcess
   {
       
      
      public function MapProcess_72()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task1411.initForMap72(this);
      }
      
      override public function destroy() : void
      {
         Task1411.destroy();
      }
   }
}
