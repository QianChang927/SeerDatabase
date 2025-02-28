package com.robot.app2.mapProcess
{
   import com.robot.app2.control.DisillusionmentNightmareController;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_1327 extends BaseMapProcess
   {
       
      
      public function MapProcess_1327()
      {
         super();
      }
      
      override protected function init() : void
      {
         DisillusionmentNightmareController.initToMap();
         super.init();
      }
      
      override public function destroy() : void
      {
         DisillusionmentNightmareController.destroy();
         super.destroy();
      }
   }
}
