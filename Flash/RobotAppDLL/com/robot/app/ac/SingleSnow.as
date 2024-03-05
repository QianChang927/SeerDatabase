package com.robot.app.ac
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import org.taomee.utils.DisplayUtil;
   
   public class SingleSnow extends Sprite
   {
       
      
      private var mc:MovieClip;
      
      private var speed:Number;
      
      private var p:Number = 0;
      
      public function SingleSnow()
      {
         super();
         this.mc = new MovieClip();
         this.cacheAsBitmap = true;
         this.addChild(this.mc);
         this.mouseChildren = false;
         this.mouseEnabled = false;
         this.scaleX = this.scaleY = 0.8 + Math.random() * 0.3;
         this.alpha = this.scaleX;
         this.speed = Math.random() + 2.5;
         this.addEventListener(Event.ENTER_FRAME,this.onEnter);
      }
      
      private function onEnter(param1:Event) : void
      {
         this.y += this.speed;
         this.p += 0.1;
         this.x += Math.sin(this.p) * 2;
         if(this.y > 580)
         {
            this.destroy();
         }
      }
      
      public function destroy() : void
      {
         this.removeEventListener(Event.ENTER_FRAME,this.onEnter);
         DisplayUtil.removeForParent(this);
         this.mc = null;
      }
   }
}
