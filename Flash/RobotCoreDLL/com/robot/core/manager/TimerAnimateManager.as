package com.robot.core.manager
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class TimerAnimateManager
   {
      
      private static const FRAMERATE:uint = 24;
       
      
      private var _psFrame:Number = 41.666666666666664;
      
      private var _mc:MovieClip;
      
      private var _startTm:uint;
      
      private var _curtTm:uint;
      
      private var _endTm:uint;
      
      private var _stopFrameTm:uint;
      
      private var _fun:Function;
      
      private var _stopFun:Function;
      
      public function TimerAnimateManager()
      {
         super();
      }
      
      public function play(param1:MovieClip, param2:Function = null, param3:uint = 0, param4:Function = null) : void
      {
         this._mc = param1;
         this._fun = param2;
         this._stopFun = param4;
         var _loc5_:Date = new Date();
         this._startTm = _loc5_.getTime();
         if(param1.totalFrames > 1)
         {
            if(param3)
            {
               this._stopFrameTm = this._startTm + param3 * 1000 / FRAMERATE;
            }
            this._endTm = this._startTm + param1.totalFrames * 1000 / FRAMERATE;
            MainManager.getStage().addEventListener(Event.ENTER_FRAME,this.onEntFrame);
         }
         this._mc.addEventListener(Event.REMOVED_FROM_STAGE,this.onRemoveStage);
      }
      
      private function onEntFrame(param1:Event) : void
      {
         var _loc2_:Date = new Date();
         this._curtTm = _loc2_.getTime();
         var _loc3_:uint = (this._curtTm - this._startTm) / this._psFrame;
         if(this._mc.currentFrame != _loc3_)
         {
            this._mc.gotoAndStop(_loc3_);
         }
         if(Boolean(this._stopFrameTm) && this._curtTm >= this._stopFrameTm)
         {
            if(this._stopFun != null)
            {
               this._stopFun();
               this._stopFun = null;
            }
         }
         if(this._curtTm >= this._endTm)
         {
            if(this._fun != null)
            {
               this._fun();
            }
            this.destroy();
         }
      }
      
      public function destroy() : void
      {
         MainManager.getStage().removeEventListener(Event.ENTER_FRAME,this.onEntFrame);
         this._stopFun = null;
         this._fun = null;
      }
      
      private function onRemoveStage(param1:Event) : void
      {
         MainManager.getStage().removeEventListener(Event.ENTER_FRAME,this.onEntFrame);
         this._stopFun = null;
         this._fun = null;
         if(this._mc)
         {
            this._mc.removeEventListener(Event.REMOVED_FROM_STAGE,this.onRemoveStage);
            this._mc.stop();
         }
      }
   }
}
