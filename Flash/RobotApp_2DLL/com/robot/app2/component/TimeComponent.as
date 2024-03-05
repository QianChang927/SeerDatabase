package com.robot.app2.component
{
   import com.robot.core.mode.components.EventComponent;
   import flash.display.InteractiveObject;
   import flash.events.Event;
   
   public class TimeComponent extends EventComponent
   {
       
      
      private var _prevTime:Number = 0;
      
      private var _backFun:Function;
      
      private var _intervalTime:Number = 0;
      
      private var _duration:Number = 0;
      
      private var _runing:Boolean;
      
      public function TimeComponent(param1:InteractiveObject, param2:Function, param3:Number = 0)
      {
         super();
         this._backFun = param2;
         this._intervalTime = param3;
         addFrameEvent(param1,this.onFrame);
         this._runing = true;
      }
      
      private function onFrame(param1:Event) : void
      {
         var _loc3_:Number = NaN;
         if(!this._runing)
         {
            return;
         }
         var _loc2_:Date = new Date();
         if(this._prevTime > 0)
         {
            _loc3_ = _loc2_.time - this._prevTime;
            if(_loc3_ > 5000 || _loc3_ <= 0)
            {
               _loc3_ = 42;
            }
            if(this._intervalTime > 0)
            {
               this._duration += _loc3_;
               if(this._duration >= this._intervalTime)
               {
                  this._backFun(this._duration);
                  this._duration = 0;
               }
            }
            else
            {
               this._backFun(_loc3_);
            }
         }
         this._prevTime = _loc2_.time;
      }
      
      public function pause() : void
      {
         this._runing = false;
      }
      
      public function play() : void
      {
         this._runing = true;
      }
      
      public function restart() : void
      {
         this._runing = true;
         this._duration = 0;
      }
      
      override public function destroy() : void
      {
         this._backFun = null;
         super.destroy();
      }
   }
}
