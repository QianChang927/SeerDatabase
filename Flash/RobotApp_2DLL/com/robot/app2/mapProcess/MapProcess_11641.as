package com.robot.app2.mapProcess
{
   import com.robot.app2.mapProcess.control.DaysStarsAbsurdStarControl;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11641 extends BaseMapProcess
   {
       
      
      public function MapProcess_11641()
      {
         super();
      }
      
      override protected function init() : void
      {
         DaysStarsAbsurdStarControl.initToMap();
      }
      
      override public function destroy() : void
      {
         DaysStarsAbsurdStarControl.destroy();
         super.destroy();
      }
   }
}
