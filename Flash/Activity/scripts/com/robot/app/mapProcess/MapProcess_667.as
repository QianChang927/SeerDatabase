package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_667 extends BaseMapProcess
   {
       
      
      public function MapProcess_667()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
      }
      
      override public function destroy() : void
      {
      }
   }
}
