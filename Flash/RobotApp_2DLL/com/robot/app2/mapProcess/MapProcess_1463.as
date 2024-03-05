package com.robot.app2.mapProcess
{
   import com.robot.app2.control.LedaRedPacketRainControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1463 extends BaseMapProcess
   {
       
      
      public function MapProcess_1463()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
         LedaRedPacketRainControl.setup();
      }
      
      public function update(param1:* = null) : void
      {
         conLevel["mc"].gotoAndStop(1);
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn_1":
               conLevel["mc"].gotoAndStop(2);
               AnimateManager.playMcAnimate(conLevel["mc"],2,"ani",function():void
               {
               },false,true);
         }
      }
      
      override public function destroy() : void
      {
         LedaRedPacketRainControl.destroy();
         super.destroy();
      }
   }
}
