package com.robot.app.mapProcess
{
   import com.robot.app.task.control.TaskController_1887;
   
   public class MapProcess_10416 extends SceneAnimationMapProcess
   {
       
      
      public function MapProcess_10416()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         TaskController_1887.start();
      }
   }
}
