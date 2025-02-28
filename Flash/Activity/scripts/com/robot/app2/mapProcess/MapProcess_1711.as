package com.robot.app2.mapProcess
{
   import com.robot.app2.mapProcess.control.ACallThatSpansThousandsOfYearsController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1711 extends BaseMapProcess
   {
       
      
      public function MapProcess_1711()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ACallThatSpansThousandsOfYearsController.initMap1711(this);
      }
      
      override public function destroy() : void
      {
         ACallThatSpansThousandsOfYearsController.destroyMap1711();
         super.destroy();
      }
   }
}
