package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.GoldenTwelvePalaceController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_10259 extends BaseMapProcess
   {
       
      
      public function MapProcess_10259()
      {
         super();
      }
      
      override protected function init() : void
      {
         GoldenTwelvePalaceController.init(this);
      }
      
      override public function destroy() : void
      {
         GoldenTwelvePalaceController.destroy();
      }
   }
}
