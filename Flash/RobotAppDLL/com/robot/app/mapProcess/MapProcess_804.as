package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_804 extends BaseMapProcess
   {
       
      
      public function MapProcess_804()
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
      }
   }
}
