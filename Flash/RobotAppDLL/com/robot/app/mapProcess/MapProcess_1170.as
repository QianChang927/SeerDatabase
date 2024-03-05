package com.robot.app.mapProcess
{
   import com.robot.app.control.FireFestivalController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1170 extends BaseMapProcess
   {
       
      
      public function MapProcess_1170()
      {
         super();
      }
      
      override protected function init() : void
      {
         FireFestivalController.init(this);
      }
      
      override public function destroy() : void
      {
         FireFestivalController.destroy();
         super.destroy();
      }
   }
}
