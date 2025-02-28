package com.robot.app2.mapProcess
{
   import com.robot.app.control.YearVip2016Controller;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1652 extends BaseMapProcess
   {
       
      
      public function MapProcess_1652()
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
         ModuleManager.showAppModule(YearVip2016Controller.curYearVipMainAppName);
      }
      
      override public function destroy() : void
      {
         super.destroy();
      }
   }
}
