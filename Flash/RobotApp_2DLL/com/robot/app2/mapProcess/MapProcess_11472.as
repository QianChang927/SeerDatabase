package com.robot.app2.mapProcess
{
   import com.robot.app2.control.YanhuangZhuqueCompleteController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11472 extends BaseMapProcess
   {
       
      
      public function MapProcess_11472()
      {
         super();
      }
      
      override public function destroy() : void
      {
         YanhuangZhuqueCompleteController.destroy();
         super.destroy();
      }
      
      override protected function init() : void
      {
         YanhuangZhuqueCompleteController.inMap();
         super.init();
      }
   }
}
