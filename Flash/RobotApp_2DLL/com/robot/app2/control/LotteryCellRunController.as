package com.robot.app2.control
{
   import com.robot.core.manager.LevelManager;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.EventDispatcher;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.DynamicEvent;
   
   public class LotteryCellRunController extends EventDispatcher
   {
      
      public static const STEP_CHANGE:String = "stepchange";
       
      
      private var _timer:Timer;
      
      private var _cellList:Array;
      
      private var _curIndex:uint;
      
      private var _step:uint;
      
      private var _awardIndex:uint;
      
      private var _bufferStep:uint = 0;
      
      private var _itemList:Array;
      
      private var _endfun:Function;
      
      private var _roundArray:Array;
      
      public function LotteryCellRunController(param1:DisplayObjectContainer, param2:*, param3:int, param4:String = "mc_", param5:Array = null)
      {
         var _loc6_:int = 0;
         this._cellList = [];
         this._roundArray = [2,4,6];
         super();
         this._awardIndex = param3;
         if(param5 != null)
         {
            this._roundArray = param5;
         }
         if(param2 is Array)
         {
            this._cellList = param2;
            this._awardIndex = this._cellList.indexOf(param1[param4 + param3]);
         }
         else
         {
            _loc6_ = 0;
            while(_loc6_ < param2)
            {
               this._cellList.push(param1[param4 + _loc6_]);
               if(null == param1[param4 + _loc6_])
               {
                  throw new Error("没有" + param4 + _loc6_);
               }
               _loc6_++;
            }
         }
      }
      
      public function start(param1:Function, param2:uint = 100) : void
      {
         this._endfun = param1;
         this._timer = new Timer(100);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._curIndex = 0;
         this._timer.delay = param2;
         this._bufferStep = 0;
         this._step = 0;
         this._timer.reset();
         this._timer.start();
         LevelManager.closeMouseEvent();
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         this._curIndex = this._curIndex + 1 < this._cellList.length ? uint(this._curIndex + 1) : 0;
         this.effectLight();
         DebugTrace.show("当前步伐",this._timer.currentCount);
         this.slowSpeed();
      }
      
      private function effectLight() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < this._cellList.length)
         {
            if(_loc1_ == this._curIndex)
            {
               (this._cellList[this._curIndex] as MovieClip).gotoAndStop(2);
               dispatchEvent(new DynamicEvent(STEP_CHANGE,this._curIndex));
            }
            else
            {
               (this._cellList[_loc1_] as MovieClip).gotoAndStop(1);
            }
            _loc1_++;
         }
      }
      
      private function slowSpeed() : void
      {
         if(this.getCircle() == this._roundArray[0] && this._step == 0)
         {
            this._timer.delay /= 1.2;
            this._step = 1;
         }
         else if(this.getCircle() == this._roundArray[1] && this._step == 1)
         {
            this._timer.delay /= 0.6;
            this._step = 2;
         }
         else if(this.getCircle() >= this._roundArray[2] && this._step == 2)
         {
            if(this._curIndex == this._awardIndex)
            {
               this._step = 3;
               this._timer.delay /= 0.4;
            }
         }
         else if(this._step == 3)
         {
            if(this._curIndex == this._awardIndex)
            {
               this._timer.stop();
               if(null != this._endfun)
               {
                  this._endfun();
                  this.destory();
                  LevelManager.openMouseEvent();
               }
            }
         }
      }
      
      private function getCircle() : uint
      {
         return uint(this._timer.currentCount / this._cellList.length);
      }
      
      public function destory() : void
      {
         this._cellList = null;
         this._endfun = null;
         if(this._timer)
         {
            this._timer.stop();
            this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         }
      }
   }
}
