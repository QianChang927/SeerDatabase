package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_44 extends BaseMapProcess
   {
       
      
      public function MapProcess_44()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController_zudi_family").initForMap(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.WeeklyVSController_zudi_family").destroy();
      }
   }
}
