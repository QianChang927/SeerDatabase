package com.robot.app2.mapProcess
{
   import com.robot.app2.control.LookingforSorensenSeriesActivitiesControl;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1212 extends BaseMapProcess
   {
       
      
      public function MapProcess_1212()
      {
         super();
      }
      
      override protected function init() : void
      {
         LookingforSorensenSeriesActivitiesControl.initToMap();
         super.init();
      }
      
      override public function destroy() : void
      {
         LookingforSorensenSeriesActivitiesControl.destroy();
         super.destroy();
      }
   }
}
