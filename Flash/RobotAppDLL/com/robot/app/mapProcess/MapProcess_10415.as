package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_10415 extends BaseMapProcess
   {
       
      
      public function MapProcess_10415()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
