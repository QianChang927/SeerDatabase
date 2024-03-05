package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1414 extends BaseMapProcess
   {
       
      
      public function MapProcess_1414()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("Yearvip2020MainPanel");
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
