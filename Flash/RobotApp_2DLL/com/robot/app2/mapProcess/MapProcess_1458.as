package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1458 extends BaseMapProcess
   {
       
      
      public function MapProcess_1458()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
      }
      
      public function update(param1:* = null) : void
      {
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.target.name.split("_")[1]);
         switch(param1.target.name)
         {
            case "btn":
               ModuleManager.showAppModule("SceneMonsterMainPanel");
         }
      }
   }
}