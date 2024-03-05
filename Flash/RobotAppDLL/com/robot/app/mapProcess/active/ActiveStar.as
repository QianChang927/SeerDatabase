package com.robot.app.mapProcess.active
{
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   
   public class ActiveStar
   {
       
      
      private var start:Point;
      
      private var end:Point;
      
      private var timer:Timer;
      
      public function ActiveStar(param1:Point, param2:Point)
      {
         super();
         this.start = param1;
         this.end = param2;
         var _loc3_:Date = SystemTimerManager.sysDate;
         if(_loc3_.getDate() >= 24)
         {
            this.timer = new Timer(500);
            this.timer.addEventListener(TimerEvent.TIMER,this.onTimer);
            this.timer.start();
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var _loc3_:Star = null;
         var _loc2_:Number = this.start.x + Math.random() * (this.end.x - this.end.y);
         _loc3_ = new Star();
         _loc3_.x = _loc2_;
         _loc3_.y = -10;
         MapManager.currentMap.animatorLevel["mc"].addChild(_loc3_);
      }
      
      public function destroy() : void
      {
         if(this.timer)
         {
            this.timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this.timer.stop();
            this.timer = null;
         }
      }
   }
}

import com.robot.core.manager.MainManager;
import com.robot.core.manager.MapManager;
import flash.display.MovieClip;
import flash.display.Sprite;
import flash.events.Event;

class Star extends Sprite
{
    
   
   private var mc:MovieClip;
   
   public function Star()
   {
      super();
      this.mc = MapManager.currentMap.libManager.getMovieClip("star");
      if(!this.mc)
      {
         return;
      }
      addChild(this.mc);
      this.mc.alpha = 0.8;
      this.mc.scaleX = this.mc.scaleY = 0.8;
      this.addEventListener(Event.ENTER_FRAME,this.onEnter);
   }
   
   private function onEnter(param1:Event) : void
   {
      var _loc2_:uint = Math.floor(Math.random() * 4) + 8;
      this.mc.x += _loc2_ * 1.3;
      this.mc.y += _loc2_;
      if(this.mc.x > MainManager.getStageWidth() || this.mc.y > MainManager.getStageHeight())
      {
         removeEventListener(Event.ENTER_FRAME,this.onEnter);
         this.mc = null;
      }
   }
}
