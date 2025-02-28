package com.robot.app.mapProcess
{
   import com.robot.app.task.petstory.PetStory_1;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_481 extends BaseMapProcess
   {
       
      
      public function MapProcess_481()
      {
         super();
      }
      
      override protected function init() : void
      {
         PetStory_1.initTask(this);
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
