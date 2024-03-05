package com.robot.app2.component
{
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.components.EventComponent;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   
   public class McDrawComponent extends EventComponent
   {
       
      
      private var _drawTimer:Timer;
      
      private var _rotateTimes:int;
      
      private var _currentRotate:int;
      
      private var _funcAfterAnimate:Function;
      
      private var _currentOnTimer:Function;
      
      private var _currentTimerComplete:Function;
      
      private var _parent:MovieClip;
      
      private var _roundTimes:uint;
      
      private var _mcCount:uint;
      
      private var _rate:uint;
      
      private var _mcName:String;
      
      private var _isChoice:Boolean;
      
      private var _isSwitchFrame:Boolean;
      
      public function McDrawComponent(param1:MovieClip, param2:uint, param3:Boolean = false, param4:uint = 2, param5:uint = 180, param6:String = "mc_", param7:Boolean = false)
      {
         super();
         this._parent = param1;
         this._mcCount = param2;
         this._roundTimes = param4;
         this._rate = param5;
         this._mcName = param6;
         this._isChoice = param3;
         this._currentRotate = 0;
         this._isSwitchFrame = param7;
      }
      
      public function doDrawAnimate(param1:int, param2:Function) : void
      {
         var _loc3_:MovieClip = null;
         this._parent.mouseChildren = this._parent.mouseEnabled = false;
         this._funcAfterAnimate = param2;
         if(this._isSwitchFrame)
         {
            this._currentOnTimer = this.onSwitchTimer;
            this._currentTimerComplete = this.onSwitchTimerComplete;
            this._rotateTimes = this._mcCount * this._roundTimes + param1 - 2;
         }
         else
         {
            _loc3_ = this._parent[this._mcName + this._rotateTimes % this._mcCount];
            _loc3_.gotoAndStop(1);
            this._currentOnTimer = this.onTimer;
            this._currentTimerComplete = this.onTimerComplete;
            this._rotateTimes = this._mcCount * this._roundTimes + param1 - 1;
         }
         this._currentRotate = 0;
         this._drawTimer = new Timer(this._rate,this._rotateTimes + 1);
         this._drawTimer.addEventListener(TimerEvent.TIMER,this._currentOnTimer);
         this._drawTimer.addEventListener(TimerEvent.TIMER_COMPLETE,this._currentTimerComplete);
         this._drawTimer.start();
      }
      
      private function onSwitchTimer(param1:TimerEvent) : void
      {
         ++this._currentRotate;
         this._parent.gotoAndStop(this._currentRotate % this._mcCount + 1);
      }
      
      private function onSwitchTimerComplete(param1:TimerEvent) : void
      {
         this._drawTimer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this._drawTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,this.onTimerComplete);
         this._drawTimer = null;
         this._currentRotate = 0;
         SystemTimerManager.addTickFun(this.onTick);
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var _loc3_:MovieClip = null;
         var _loc2_:MovieClip = this._parent[this._mcName + this._currentRotate % this._mcCount];
         if(this._currentRotate != 0)
         {
            _loc3_ = this._parent[this._mcName + (this._currentRotate - 1) % this._mcCount];
            _loc3_.gotoAndStop(1);
         }
         _loc2_.gotoAndStop(2);
         this._currentRotate += 1;
      }
      
      private function onTimerComplete(param1:TimerEvent) : void
      {
         this._drawTimer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this._drawTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,this.onTimerComplete);
         this._drawTimer = null;
         var _loc2_:MovieClip = this._parent[this._mcName + this._rotateTimes % this._mcCount];
         if(this._isChoice)
         {
            _loc2_.gotoAndStop(2);
         }
         else
         {
            _loc2_.gotoAndStop(1);
         }
         this._currentRotate = 0;
         SystemTimerManager.addTickFun(this.onTick);
      }
      
      protected function onTick() : void
      {
         this._parent.mouseChildren = this._parent.mouseEnabled = true;
         SystemTimerManager.removeTickFun(this.onTick);
         if(null != this._funcAfterAnimate)
         {
            this._funcAfterAnimate();
            this._funcAfterAnimate = null;
         }
      }
      
      override public function destroy() : void
      {
         if(this._parent)
         {
            this._parent.stop();
            this._parent = null;
         }
         if(this._drawTimer)
         {
            this._drawTimer.stop();
            this._drawTimer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._drawTimer.removeEventListener(TimerEvent.TIMER_COMPLETE,this.onTimerComplete);
            this._drawTimer = null;
         }
      }
   }
}
