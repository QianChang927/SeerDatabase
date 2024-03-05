package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.control.SaveMaitianCountry;
   import com.robot.core.manager.map.config.BaseMapProcess;
   
   public class MapProcess_38 extends BaseMapProcess
   {
       
      
      public function MapProcess_38()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         SaveMaitianCountry.setup(this);
      }
      
      override public function destroy() : void
      {
         SaveMaitianCountry.destroy();
      }
   }
}
