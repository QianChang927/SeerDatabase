package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1645 extends BaseMapProcess
   {
       
      
      public function MapProcess_1645()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "goto_1":
               ModuleManager.showAppModule("VIP12AnniversaryGoToMapPanel");
               break;
            case "goto_2":
               ModuleManager.showAppModule("PopUp20231117MainPanel");
         }
      }
      
      override public function destroy() : void
      {
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
