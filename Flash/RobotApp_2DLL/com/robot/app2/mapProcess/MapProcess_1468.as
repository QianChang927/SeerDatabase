package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1468 extends BaseMapProcess
   {
       
      
      public function MapProcess_1468()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      public function update(param1:* = null) : void
      {
         conLevel["ani"].visible = false;
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn":
               conLevel["ani"].visible = true;
               btnLevel["btn"].visible = false;
               AnimateManager.playMcAnimate(conLevel["ani"],1,"mc",function():void
               {
               },false,true);
         }
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
