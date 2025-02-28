package com.robot.app2.mapProcess
{
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.app2.control.LedaRedPacketRainControl;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1471 extends BaseMapProcess
   {
       
      
      public function MapProcess_1471()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         if(ActivityTimeControl.getIsinTime(280))
         {
            conLevel["npc"].visible = true;
         }
         else
         {
            conLevel["npc"].visible = false;
         }
         conLevel["npc"].addEventListener(MouseEvent.CLICK,this.clickHandle);
         LedaRedPacketRainControl.setup();
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("Yearvip2021MainPanel");
      }
      
      override public function destroy() : void
      {
         conLevel["npc"].removeEventListener(MouseEvent.CLICK,this.clickHandle);
         LedaRedPacketRainControl.destroy();
         super.destroy();
      }
   }
}
