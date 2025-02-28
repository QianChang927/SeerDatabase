package com.robot.app2.mapProcess
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_1598 extends BaseMapProcess
   {
       
      
      private var anim:MovieClip;
      
      private var state:Boolean = true;
      
      private var canClick:Boolean = true;
      
      public function MapProcess_1598()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         conLevel["sw"].addEventListener(MouseEvent.CLICK,this.clickHandle);
         this.anim = conLevel["anim"];
         this.anim.gotoAndStop(1);
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(!this.canClick)
         {
            return;
         }
         this.canClick = false;
         this.state = !this.state;
         AnimateManager.playMcAnimate(this.anim,this.state ? 3 : 2,"anim",function():void
         {
            canClick = true;
         });
      }
      
      override public function destroy() : void
      {
         conLevel["sw"].removeEventListener(MouseEvent.CLICK,this.clickHandle);
         super.destroy();
      }
   }
}
