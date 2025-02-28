package com.robot.app.mapProcess
{
   import com.robot.app.task.petstory.Task_890;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_354 extends BaseMapProcess
   {
       
      
      public function MapProcess_354()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         Task_890.getInstance().init(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.MengYouYiActionController").initMap354(this);
      }
      
      override public function destroy() : void
      {
         Task_890.getInstance().destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.MengYouYiActionController").destroy();
      }
   }
}
