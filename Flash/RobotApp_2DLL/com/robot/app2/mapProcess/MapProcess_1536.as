package com.robot.app2.mapProcess
{
   import com.robot.app2.control.LedaRedPacketRainControl;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1536 extends BaseMapProcess
   {
       
      
      public function MapProcess_1536()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         LedaRedPacketRainControl.setup();
      }
      
      override public function destroy() : void
      {
         LedaRedPacketRainControl.destroy();
         super.destroy();
      }
   }
}
