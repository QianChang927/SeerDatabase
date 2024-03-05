package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1393 extends BaseMapProcess
   {
       
      
      public function MapProcess_1393()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         depthLevel["mc3"].visible = false;
         depthLevel["mc1"].visible = false;
         depthLevel["mc2"].visible = false;
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
            case "wood":
               depthLevel["mc1"].visible = true;
               AnimateManager.playMcAnimate(depthLevel["mc1"],1,"mcc1",function():void
               {
                  depthLevel["mc1"]["mcc1"].gotoAndStop(depthLevel["mc1"]["mcc1"].totalFrames);
               },false,true);
               break;
            case "stone":
               depthLevel["mc2"].visible = true;
               AnimateManager.playMcAnimate(depthLevel["mc2"],1,"mcc2",function():void
               {
                  depthLevel["mc2"]["mcc2"].gotoAndStop(depthLevel["mc2"]["mcc2"].totalFrames);
                  depthLevel["mc3"].visible = true;
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
