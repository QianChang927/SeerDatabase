package com.robot.app.mapProcess
{
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.utils.getDefinitionByName;
   
   public class MapProcess_415 extends BaseMapProcess
   {
       
      
      public function MapProcess_415()
      {
         super();
      }
      
      override protected function init() : void
      {
         getDefinitionByName("com.robot.app2.control.ThreeRockController").initRocks(this);
      }
      
      override public function destroy() : void
      {
         getDefinitionByName("com.robot.app2.control.ThreeRockController").destroy();
         super.destroy();
      }
   }
}
