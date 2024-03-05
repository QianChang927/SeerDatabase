package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1272 extends BaseMapProcess
   {
       
      
      public function MapProcess_1272()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         conLevel["npc"].buttonMode = true;
         conLevel["npc"].addEventListener(MouseEvent.CLICK,this.clickHandle);
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("Yearvip2018MainPanel");
      }
      
      override public function destroy() : void
      {
         conLevel["npc"].removeEventListener(MouseEvent.CLICK,this.clickHandle);
         super.destroy();
      }
   }
}
