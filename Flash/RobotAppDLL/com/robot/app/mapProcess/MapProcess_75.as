package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task1424;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_75 extends BaseMapProcess
   {
       
      
      public function MapProcess_75()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         Task1424.initForMap75(this);
      }
      
      override public function destroy() : void
      {
         Task1424.destroy();
      }
   }
}
