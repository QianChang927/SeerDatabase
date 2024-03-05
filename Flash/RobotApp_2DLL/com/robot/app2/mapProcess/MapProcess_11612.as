package com.robot.app2.mapProcess
{
   import com.robot.app2.control.SmallMantisForAllPeopleToSendController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11612 extends BaseMapProcess
   {
       
      
      public function MapProcess_11612()
      {
         super();
      }
      
      override protected function init() : void
      {
         SmallMantisForAllPeopleToSendController.initToMap();
         super.init();
      }
      
      override public function destroy() : void
      {
         SmallMantisForAllPeopleToSendController.destroy();
         super.destroy();
      }
   }
}
