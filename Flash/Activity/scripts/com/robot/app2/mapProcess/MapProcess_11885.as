package com.robot.app2.mapProcess
{
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_11885 extends BaseMapProcess
   {
       
      
      public function MapProcess_11885()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            conLevel.addEventListener(MouseEvent.CLICK,this.onClick);
            _loc1_++;
         }
         this.update();
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "btn":
               ModuleManager.showAppModule("BigMovies0802SubPanel");
         }
      }
      
      private function update() : void
      {
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         super.destroy();
      }
   }
}
