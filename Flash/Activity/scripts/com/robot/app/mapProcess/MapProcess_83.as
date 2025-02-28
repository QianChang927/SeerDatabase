package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_83 extends BaseMapProcess
   {
       
      
      public function MapProcess_83()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         getDefinitionByName("com.robot.app2.control.MotherDayFireAndIceController").initMap83(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.MotherDayFireAndIceController").destroy();
      }
   }
}
