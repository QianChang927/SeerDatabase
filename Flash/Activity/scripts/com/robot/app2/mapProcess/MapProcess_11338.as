package com.robot.app2.mapProcess
{
   import com.robot.app2.control.WeisikeTongjiController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_11338 extends BaseMapProcess
   {
       
      
      public function MapProcess_11338()
      {
         super();
      }
      
      override public function destroy() : void
      {
         WeisikeTongjiController.destroy();
         super.destroy();
      }
      
      override protected function init() : void
      {
         WeisikeTongjiController.init(this);
         super.init();
      }
   }
}
