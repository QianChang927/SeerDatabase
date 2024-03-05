package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task561;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_462 extends BaseMapProcess
   {
       
      
      public function MapProcess_462()
      {
         super();
      }
      
      override protected function init() : void
      {
         Task561.initTask_462(this);
      }
      
      override public function destroy() : void
      {
         Task561.destory();
      }
   }
}
