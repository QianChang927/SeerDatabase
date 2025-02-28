package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task427;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_353 extends BaseMapProcess
   {
       
      
      public function MapProcess_353()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         Task427.initTaskForMap353(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.MengYouYiActionController").initMap353(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.MengYouYiActionController").destroy();
         Task427.destroy();
      }
   }
}
