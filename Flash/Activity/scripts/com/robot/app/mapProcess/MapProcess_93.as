package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_93 extends BaseMapProcess
   {
       
      
      public function MapProcess_93()
      {
         super();
      }
      
      override protected function init() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.SunGodController").init(this);
         getDefinitionByName("com.robot.app2.mapProcess.control.RescueFireLandController").init(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.mapProcess.control.SunGodController").destroy();
         getDefinitionByName("com.robot.app2.mapProcess.control.RescueFireLandController").destroy();
      }
   }
}
