package com.robot.app2.mapProcess
{
   import com.robot.app2.control.LookingforSorensenSeriesActivities2Control;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11393 extends BaseMapProcess
   {
       
      
      public function MapProcess_11393()
      {
         super();
      }
      
      override protected function init() : void
      {
         LookingforSorensenSeriesActivities2Control.initToMap();
         super.init();
      }
      
      override public function destroy() : void
      {
         LookingforSorensenSeriesActivities2Control.destroy();
         super.destroy();
      }
   }
}
