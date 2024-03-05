package com.robot.core.battleRoyale
{
   import flash.events.TimerEvent;
   import flash.text.TextField;
   import flash.utils.Timer;
   
   public class RoyaleClockTime
   {
       
      
      private var _timer:Timer;
      
      private var _text:TextField;
      
      private var _seconds:int;
      
      public function RoyaleClockTime(param1:TextField)
      {
         super();
         this._text = param1;
         this._seconds = 120;
         this._timer = new Timer(1000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer.start();
         this.updateUI();
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         --this._seconds;
         if(this._seconds <= 0)
         {
            this.destroy();
         }
         else
         {
            this.updateUI();
         }
      }
      
      private function updateUI() : void
      {
         var _loc1_:int = this._seconds / 60;
         var _loc2_:int = this._seconds % 60;
         if(this._seconds == 0)
         {
            this._text.text = "0:00";
         }
         else
         {
            this._text.text = _loc1_ + ":" + (_loc2_ < 10 ? "0" + _loc2_ : _loc2_);
         }
      }
      
      public function reset(param1:int) : void
      {
         this._seconds = param1;
         this.updateUI();
      }
      
      public function destroy() : void
      {
         if(this._timer)
         {
            this._timer.stop();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer = null;
         }
      }
   }
}
