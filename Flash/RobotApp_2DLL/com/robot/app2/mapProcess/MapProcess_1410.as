package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1410 extends BaseMapProcess
   {
       
      
      public function MapProcess_1410()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         btnLevel["mc"].gotoAndStop(1);
      }
      
      public function update(param1:* = null) : void
      {
      }
      
      public function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "btn":
               btnLevel["mc"].gotoAndStop(2);
               AnimateManager.playMcAnimate(btnLevel["mc"],2,"ani",function():void
               {
                  btnLevel["mc"]["ani"].gotoAndStop(btnLevel["mc"]["ani"].totalFrames);
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
