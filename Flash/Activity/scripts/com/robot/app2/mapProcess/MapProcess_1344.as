package com.robot.app2.mapProcess
{
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1344 extends BaseMapProcess
   {
       
      
      public function MapProcess_1344()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         if(ActivityTimeControl.getIsinTime(124))
         {
            conLevel["npc"].visible = true;
         }
         else
         {
            conLevel["npc"].visible = false;
         }
         conLevel["npc"].addEventListener(MouseEvent.CLICK,this.clickHandle);
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("Yearvip2019MainPanel");
      }
      
      override public function destroy() : void
      {
         conLevel["npc"].removeEventListener(MouseEvent.CLICK,this.clickHandle);
         super.destroy();
      }
   }
}
