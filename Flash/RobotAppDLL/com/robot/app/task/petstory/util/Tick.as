package com.robot.app.task.petstory.util
{
   import flash.display.Shape;
   import flash.events.Event;
   import flash.utils.Dictionary;
   
   public class Tick
   {
      
      private static var _o:Shape = new Shape();
      
      public static var timeScaleAll:Number = 1;
      
      private static var _instance:com.robot.app.task.petstory.util.Tick;
       
      
      private var _running:Boolean;
      
      private var _renderoutLength:int;
      
      private var _nextTime:Number;
      
      private var _timeoutMap:Dictionary;
      
      private var _renderoutMap:Dictionary;
      
      private var _valueTime:uint;
      
      private var _renderMap:Dictionary;
      
      private var _timeoutLength:int;
      
      private var _renderLength:int;
      
      public var timeScale:Number = 1;
      
      private var _prevTime:Number;
      
      public function Tick()
      {
         super();
         this._renderMap = new Dictionary();
         this._timeoutMap = new Dictionary();
         this._renderoutMap = new Dictionary();
      }
      
      public static function get instance() : com.robot.app.task.petstory.util.Tick
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.util.Tick();
            _instance.start();
         }
         return _instance;
      }
      
      public function removeRender(param1:Function) : void
      {
         var _loc2_:int = 0;
         if(param1 in this._renderMap)
         {
            delete this._renderMap[param1];
            _loc2_ = this._renderLength - 1;
            this._renderLength = _loc2_;
         }
      }
      
      public function stop() : void
      {
         _o.removeEventListener(Event.ENTER_FRAME,this.onEnter);
      }
      
      public function removeTimeout(param1:Function) : void
      {
         var _loc2_:int = 0;
         if(param1 in this._timeoutMap)
         {
            delete this._timeoutMap[param1];
            _loc2_ = this._timeoutLength - 1;
            this._timeoutLength = _loc2_;
         }
      }
      
      public function hasRenderAndOut(param1:Function) : Boolean
      {
         return param1 in this._renderoutMap;
      }
      
      public function addTimeout(param1:uint, param2:Function) : void
      {
         var _loc3_:int = 0;
         if(param2 in this._timeoutMap == false)
         {
            this._timeoutMap[param2] = new TimeoutInfo(param1);
            _loc3_ = this._timeoutLength + 1;
            this._timeoutLength = _loc3_;
         }
      }
      
      public function removeRenderAndOut(param1:Function) : void
      {
         var _loc2_:int = 0;
         if(param1 in this._renderoutMap)
         {
            delete this._renderoutMap[param1];
            _loc2_ = this._renderoutLength - 1;
            this._renderoutLength = _loc2_;
         }
      }
      
      public function hasTimeout(param1:Function) : Boolean
      {
         return param1 in this._timeoutMap;
      }
      
      private function onRender() : void
      {
         var _loc1_:* = null;
         var _loc2_:* = null;
         if(this._renderLength > 0)
         {
            for(_loc2_ in this._renderMap)
            {
               _loc1_ = this._renderMap[_loc2_];
               if(_loc1_.delay > 0)
               {
                  if(_loc1_.count >= _loc1_.delay)
                  {
                     _loc2_(_loc1_.count);
                     _loc1_.count = 0;
                  }
               }
               else
               {
                  _loc2_(this._valueTime);
               }
               _loc1_.count += this._valueTime;
            }
         }
      }
      
      public function addRender(param1:Function, param2:int = 0) : void
      {
         var _loc3_:int = 0;
         if(param1 in this._renderMap == false)
         {
            this._renderMap[param1] = new TimeoutInfo(param2);
            _loc3_ = this._renderLength + 1;
            this._renderLength = _loc3_;
         }
      }
      
      public function dispose() : void
      {
         this.stop();
         this._renderMap = null;
         this._timeoutMap = null;
         this._renderoutMap = null;
      }
      
      public function start() : void
      {
         _o.addEventListener(Event.ENTER_FRAME,this.onEnter);
      }
      
      private function onTimeout() : void
      {
         var _loc1_:* = null;
         var _loc2_:* = null;
         if(this._timeoutLength > 0)
         {
            for(_loc2_ in this._timeoutMap)
            {
               _loc1_ = this._timeoutMap[_loc2_];
               if(_loc1_.count >= _loc1_.delay)
               {
                  delete this._timeoutMap[_loc2_];
                  --this._timeoutLength;
                  _loc2_();
               }
               else
               {
                  _loc1_.count += this._valueTime;
               }
            }
         }
      }
      
      private function onRenderAndOut() : void
      {
         var _loc3_:int = 0;
         var _loc1_:* = null;
         var _loc2_:* = null;
         if(this._renderoutLength > 0)
         {
            for(_loc2_ in this._renderoutMap)
            {
               _loc1_ = this._renderoutMap[_loc2_];
               if(_loc1_.count >= _loc1_.delay)
               {
                  delete this._renderoutMap[_loc2_];
                  _loc3_ = this._renderoutLength - 1;
                  this._renderoutLength = _loc3_;
                  _loc2_(true);
               }
               else
               {
                  _loc2_(false);
                  _loc1_.count += this._valueTime;
               }
            }
         }
      }
      
      public function addRenderAndOut(param1:uint, param2:Function) : void
      {
         var _loc3_:int = 0;
         if(param2 in this._renderoutMap == false)
         {
            this._renderoutMap[param2] = new TimeoutInfo(param1);
            _loc3_ = this._renderoutLength + 1;
            this._renderoutLength = _loc3_;
         }
      }
      
      public function hasRender(param1:Function) : Boolean
      {
         return param1 in this._renderMap;
      }
      
      private function onEnter(param1:Event) : void
      {
         this._nextTime = new Date().getTime();
         if(this._prevTime > 0)
         {
            this._valueTime = (this._nextTime - this._prevTime) * this.timeScale * timeScaleAll;
            this.onRender();
            this.onTimeout();
            this.onRenderAndOut();
         }
         this._prevTime = this._nextTime;
      }
   }
}

class TimeoutInfo
{
    
   
   public var delay:uint;
   
   public var count:uint;
   
   public function TimeoutInfo(param1:uint)
   {
      super();
      this.delay = param1;
   }
}
