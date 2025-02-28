package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.events.MouseEvent;
   
   public class MapProcess_1235 extends BaseMapProcess
   {
       
      
      public function MapProcess_1235()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         NpcDialogNew_1._HasDanmu = false;
         switch(_loc2_)
         {
            case "btn":
               ModuleManager.showAppModule("FireAndElectricityPetGetPetPanel",1);
         }
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
