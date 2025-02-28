package com.robot.app2.mapProcess
{
   import com.robot.app2.mapProcess.control.ACallThatSpansThousandsOfYearsController;
   import com.robot.app2.mapProcess.control.ASignalThatNeverDisappearsController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1709 extends BaseMapProcess
   {
       
      
      public function MapProcess_1709()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ASignalThatNeverDisappearsController.initMap1709(this);
         ACallThatSpansThousandsOfYearsController.initMap1709(this);
      }
      
      override public function destroy() : void
      {
         ASignalThatNeverDisappearsController.destroyMap1709();
         ACallThatSpansThousandsOfYearsController.destroyMap1709();
         super.destroy();
      }
   }
}
