package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task836;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_681 extends BaseMapProcess
   {
       
      
      public function MapProcess_681()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task836.initForMap681(this);
      }
      
      override public function destroy() : void
      {
         Task836.destroy();
      }
   }
}
