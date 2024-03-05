package com.robot.core.effect
{
   import flash.display.DisplayObject;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   
   public class Earthquake
   {
      
      private static const FRAME_RATE:int = 20;
      
      private static var _timer:Timer;
      
      private static var _displayObject:DisplayObject;
      
      private static var _originalX:int;
      
      private static var _originalY:int;
      
      private static var _intensity:int;
      
      private static var _intensityOffset:int;
      
      private static var _func:Function;
       
      
      public function Earthquake()
      {
         super();
      }
      
      public static function go(param1:DisplayObject, param2:Number = 10, param3:Number = 1, param4:Function = null) : void
      {
         if(_timer)
         {
            _timer.stop();
         }
         _func = param4;
         _displayObject = param1;
         _originalX = param1.x;
         _originalY = param1.y;
         _intensity = param2;
         _intensityOffset = param2 / 2;
         var _loc5_:int = int(1000 / FRAME_RATE);
         var _loc6_:int = int(param3 * 1000 / _loc5_);
         _timer = new Timer(_loc5_,_loc6_);
         _timer.addEventListener(TimerEvent.TIMER,quake);
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,resetImage);
         _timer.start();
      }
      
      private static function quake(param1:TimerEvent) : void
      {
         var _loc2_:int = _originalX + Math.random() * _intensity - _intensityOffset;
         var _loc3_:int = _originalY + Math.random() * _intensity - _intensityOffset;
         _displayObject.x = _loc2_;
         _displayObject.y = _loc3_;
      }
      
      private static function resetImage(param1:TimerEvent = null) : void
      {
         _displayObject.x = _originalX;
         _displayObject.y = _originalY;
         if(_func != null)
         {
            _func();
         }
         cleanup();
      }
      
      private static function cleanup() : void
      {
         _timer = null;
         _displayObject = null;
         _func = null;
      }
   }
}
