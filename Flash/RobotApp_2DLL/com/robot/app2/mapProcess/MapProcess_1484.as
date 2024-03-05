package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1484 extends BaseMapProcess
   {
       
      
      public function MapProcess_1484()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.addEventListener(MouseEvent.CLICK,this.topLevelClickHandle);
      }
      
      private function topLevelClickHandle(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "go":
               ModuleManager.showAppModule("NewMap20210326TipPanel");
         }
      }
      
      override public function destroy() : void
      {
         topLevel.removeEventListener(MouseEvent.CLICK,this.topLevelClickHandle);
         super.destroy();
      }
   }
}
