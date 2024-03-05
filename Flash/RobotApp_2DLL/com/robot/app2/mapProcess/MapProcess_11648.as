package com.robot.app2.mapProcess
{
   import com.robot.app2.mapProcess.control.CardCoolStarsController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11648 extends BaseMapProcess
   {
       
      
      public function MapProcess_11648()
      {
         super();
      }
      
      override protected function init() : void
      {
         CardCoolStarsController.initToMap();
      }
      
      override public function destroy() : void
      {
         CardCoolStarsController.destroy();
         super.destroy();
      }
   }
}
