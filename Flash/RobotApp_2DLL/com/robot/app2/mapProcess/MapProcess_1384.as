package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1384 extends BaseMapProcess
   {
       
      
      public function MapProcess_1384()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel.addEventListener(MouseEvent.CLICK,this.onConClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
      }
      
      public function onConClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "btn_1":
               ModuleManager.showAppModule("DecennialActivitySummaryMainPanel");
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConClick);
         super.destroy();
      }
   }
}
