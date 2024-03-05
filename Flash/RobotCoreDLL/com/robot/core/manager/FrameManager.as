package com.robot.core.manager
{
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.utils.getTimer;
   import org.taomee.ds.HashMap;
   
   public class FrameManager
   {
      
      private static var _tick:int;
      
      private static var _lastTick:int = 0;
      
      private static var _now:Date;
      
      private static var _obj:Sprite;
      
      private static var _frameItemMap:HashMap;
      
      private static var _tickItemMap:HashMap;
      
      private static var _delayFrameItemMap:HashMap;
      
      private static var _fps:uint;
      
      private static var _fpsDelay:uint = 0;
      
      private static var _fpsLast:uint = 0;
      
      {
         initialize();
      }
      
      public function FrameManager(param1:Blocker)
      {
         super();
      }
      
      private static function initialize() : void
      {
         _obj = new Sprite();
         _obj.addEventListener(Event.ENTER_FRAME,enterFrameHandler);
         _tick = getTimer();
         _lastTick = _tick;
         _fpsLast = _tick;
         _now = new Date();
         _frameItemMap = new HashMap();
         _tickItemMap = new HashMap();
         _delayFrameItemMap = new HashMap();
      }
      
      public static function addTickListener(param1:int, param2:Function, param3:* = null, param4:int = 0) : void
      {
         var _loc5_:FrameItem = null;
         if(param1 > 0 && param2 != null)
         {
            if(!_tickItemMap.containsKey(param2))
            {
               (_loc5_ = new FrameItem()).delay = param1;
               _loc5_.args = param3;
               _loc5_.last = _tick;
               _loc5_.repeat = param4;
               _tickItemMap.add(param2,_loc5_);
            }
         }
      }
      
      public static function removeTickListener(param1:Function) : void
      {
         _tickItemMap.remove(param1);
      }
      
      public static function addFrameListener(param1:Function, param2:* = null, param3:int = 0) : void
      {
         var _loc4_:FrameItem = null;
         if(param1 != null)
         {
            if(!_frameItemMap.containsKey(param1))
            {
               (_loc4_ = new FrameItem()).args = param2;
               _loc4_.repeat = param3;
               _frameItemMap.add(param1,_loc4_);
            }
         }
      }
      
      public static function removeFrameListener(param1:Function) : void
      {
         _frameItemMap.remove(param1);
      }
      
      public static function addDelayFramesListener(param1:Function, param2:* = null, param3:int = 1) : void
      {
         var _loc4_:FrameItem = null;
         if(param1 != null)
         {
            if(!_delayFrameItemMap.containsKey(param1))
            {
               (_loc4_ = new FrameItem()).args = param2;
               _loc4_.repeat = param3;
               _delayFrameItemMap.add(param1,_loc4_);
            }
         }
      }
      
      public static function removeDelayFrameListener(param1:Function) : void
      {
         _delayFrameItemMap.remove(param1);
      }
      
      private static function enterFrameHandler(param1:Event) : void
      {
         _tick = getTimer();
         ++_fpsDelay;
         if(_fpsDelay >= 10)
         {
            _fpsDelay = 0;
            _fps = int(10000 / (_tick - _fpsLast));
            _fpsLast = _tick;
         }
         _now.time += _tick - _lastTick;
         _lastTick = _tick;
         _tickItemMap.eachKey(tickItemHandler);
         _frameItemMap.eachKey(frameItemHandler);
         _delayFrameItemMap.eachKey(delayFrameItemHandler);
      }
      
      private static function tickItemHandler(param1:Function) : void
      {
         var _loc2_:FrameItem = _tickItemMap.getValue(param1);
         if(_tick - _loc2_.last >= _loc2_.delay)
         {
            _loc2_.last = _tick;
            if(_loc2_.args != null && param1.length > 0)
            {
               param1(_loc2_.args);
            }
            else
            {
               param1();
            }
            if(_loc2_.repeat > 0)
            {
               if(_loc2_.repeat == 1)
               {
                  removeTickListener(param1);
               }
               else
               {
                  --_loc2_.repeat;
               }
            }
         }
      }
      
      private static function frameItemHandler(param1:Function) : void
      {
         var _loc2_:FrameItem = _frameItemMap.getValue(param1);
         if(_loc2_.args != null && param1.length > 0)
         {
            param1(_loc2_.args);
         }
         else
         {
            param1();
         }
         if(_loc2_.repeat > 0)
         {
            if(_loc2_.repeat == 1)
            {
               removeFrameListener(param1);
            }
            else
            {
               --_loc2_.repeat;
            }
         }
      }
      
      private static function delayFrameItemHandler(param1:Function) : void
      {
         var _loc2_:FrameItem = _delayFrameItemMap.getValue(param1);
         if(_loc2_.repeat > 0)
         {
            --_loc2_.repeat;
         }
         else
         {
            if(_loc2_.args != null && param1.length > 0)
            {
               param1(_loc2_.args);
            }
            else
            {
               param1();
            }
            removeDelayFrameListener(param1);
         }
      }
      
      public static function syncTime(param1:Number) : void
      {
         _now.time = param1;
      }
      
      public static function get now() : Date
      {
         return _now;
      }
      
      public static function get tick() : int
      {
         return _tick;
      }
      
      public static function get fps() : uint
      {
         return _fps;
      }
   }
}

class Blocker
{
    
   
   public function Blocker()
   {
      super();
   }
}

class FrameItem
{
    
   
   public var args = null;
   
   public var delay:int = 0;
   
   public var repeat:int = 0;
   
   public var last:int = 0;
   
   public function FrameItem()
   {
      super();
   }
}
