package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1659 extends BaseMapProcess
   {
       
      
      public function MapProcess_1659()
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
         conLevel["mc"].visible = false;
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "doorBtn":
               ModuleManager.showAppModule("OldCastleClueS2Panel",11);
               break;
            case "getBtn":
               ModuleManager.showAppModule("OldCastleClueS2Panel",22);
         }
      }
      
      override public function destroy() : void
      {
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
