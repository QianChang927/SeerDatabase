package com.robot.app2.mapProcess
{
   import com.robot.app2.control.GhostFaceAltarTrapController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11651 extends BaseMapProcess
   {
       
      
      public function MapProcess_11651()
      {
         super();
      }
      
      override protected function init() : void
      {
      }
      
      override public function destroy() : void
      {
         GhostFaceAltarTrapController.destroy();
         super.destroy();
      }
   }
}
