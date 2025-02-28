package com.robot.app2.mapProcess
{
   import com.robot.app2.mapProcess.control.ASignalThatNeverDisappearsController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1710 extends BaseMapProcess
   {
       
      
      public function MapProcess_1710()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ASignalThatNeverDisappearsController.initMap1710(this);
      }
      
      override public function destroy() : void
      {
         ASignalThatNeverDisappearsController.destroyMap1710();
         super.destroy();
      }
   }
}
