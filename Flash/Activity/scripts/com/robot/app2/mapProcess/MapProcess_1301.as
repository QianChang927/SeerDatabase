package com.robot.app2.mapProcess
{
   import com.robot.app2.control.TrackRareSpiritsController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1301 extends BaseMapProcess
   {
       
      
      public function MapProcess_1301()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         TrackRareSpiritsController.initToMap();
      }
      
      override public function destroy() : void
      {
         super.destroy();
         TrackRareSpiritsController.destory();
      }
   }
}
