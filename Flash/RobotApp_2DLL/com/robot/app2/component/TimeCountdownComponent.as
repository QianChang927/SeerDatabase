package com.robot.app2.component
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.components.IComponent;
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   public class TimeCountdownComponent implements IComponent
   {
      
      public static const SECOND_ONLY:int = 1;
      
      public static const MINUTE_SECOND:int = 2;
      
      public static const HOUR_MIN_SEC:int = 3;
      
      public static const DAY_HOUR_MIN_SEC:int = 4;
      
      public static const DAY_HOUR_MIN:int = 5;
      
      private static const INDIANASPIRIT0505_TYPE:int = 1;
       
      
      private var _secondLeft:int;
      
      private var _endFunc:Function;
      
      private var _runFunc:Function;
      
      private var _ui;
      
      private var _level:int;
      
      private var _hightAdd:Boolean;
      
      private var _isChangeShow:int;
      
      private var _isSplit:Boolean = false;
      
      public function TimeCountdownComponent(param1:*, param2:int = 2, param3:Boolean = false, param4:int = -1, param5:Boolean = false)
      {
         super();
         this._ui = param1;
         this._isChangeShow = param4;
         this._level = param2;
         this._hightAdd = param3;
      }
      
      public function set initialSeconds(param1:int) : void
      {
         this._secondLeft = param1;
      }
      
      public function get timeLeft() : int
      {
         return this._secondLeft;
      }
      
      public function set endCallback(param1:Function) : void
      {
         this._endFunc = param1;
      }
      
      public function set runCallFunc(param1:Function) : void
      {
         this._runFunc = param1;
      }
      
      public function start(param1:Function = null) : void
      {
         if(param1 != null)
         {
            this._endFunc = param1;
         }
         if(this._secondLeft < 0)
         {
            this._secondLeft = 0;
         }
         this.updateCD();
         SystemTimerManager.addTickFun(this.subSecond);
      }
      
      public function stop() : void
      {
         SystemTimerManager.removeTickFun(this.subSecond);
         this._secondLeft = 0;
      }
      
      private function subSecond() : void
      {
         this.updateCD();
         --this._secondLeft;
         if(this._runFunc != null)
         {
            this._runFunc();
         }
      }
      
      private function updateCD() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:* = null;
         if(this._ui != null)
         {
            _loc1_ = this._secondLeft % 60;
            _loc2_ = this._secondLeft % 3600 / 60;
            _loc3_ = this._secondLeft % 86400 / 3600;
            _loc4_ = this._secondLeft / 86400;
            if(this._hightAdd)
            {
               if(this._level == this._secondLeft)
               {
                  _loc1_ = this._secondLeft;
               }
               if(this._level == MINUTE_SECOND)
               {
                  _loc2_ = this._secondLeft / 60;
               }
               if(this._level == HOUR_MIN_SEC)
               {
                  _loc3_ = this._secondLeft / 3600;
               }
               if(this._level == DAY_HOUR_MIN_SEC)
               {
                  _loc4_ = this._secondLeft / 86400;
               }
            }
            if(this._ui is MovieClip)
            {
               if(this._level >= SECOND_ONLY && this._level != 5)
               {
                  KTool.showScore(this._ui.sec,_loc1_,0,true);
               }
               if(this._level >= MINUTE_SECOND)
               {
                  KTool.showScore(this._ui.min,_loc2_,0,true);
               }
               if(this._level >= HOUR_MIN_SEC)
               {
                  KTool.showScore(this._ui.hour,_loc3_,0,true);
               }
               if(this._level >= DAY_HOUR_MIN_SEC)
               {
                  KTool.showScore(this._ui.day,_loc4_,0,true);
               }
            }
            else if(this._ui is TextField)
            {
               if(this._isSplit)
               {
                  this._ui.min = _loc2_;
                  this._ui.hour = _loc3_;
                  this._ui.day = _loc4_;
               }
               else
               {
                  _loc5_ = "";
                  if(this._isChangeShow == 1)
                  {
                     if(this._level >= SECOND_ONLY)
                     {
                        _loc5_ = this.wrapTime(_loc1_);
                     }
                     if(this._level >= MINUTE_SECOND)
                     {
                        _loc5_ = this.wrapTime(_loc2_) + "分" + _loc5_;
                     }
                     if(this._level >= HOUR_MIN_SEC)
                     {
                        _loc5_ = this.wrapTime(_loc3_) + "时" + _loc5_;
                     }
                     if(this._level >= DAY_HOUR_MIN_SEC)
                     {
                        _loc5_ = this.wrapTime(_loc4_) + "天" + _loc5_ + "秒";
                     }
                  }
                  else
                  {
                     if(this._level >= SECOND_ONLY)
                     {
                        _loc5_ = this.wrapTime(_loc1_);
                     }
                     if(this._level >= MINUTE_SECOND)
                     {
                        _loc5_ = this.wrapTime(_loc2_) + ":" + _loc5_;
                     }
                     if(this._level >= HOUR_MIN_SEC)
                     {
                        _loc5_ = this.wrapTime(_loc3_) + ":" + _loc5_;
                     }
                     if(this._level >= DAY_HOUR_MIN_SEC)
                     {
                        _loc5_ = this.wrapTime(_loc4_) + ":" + _loc5_;
                     }
                  }
                  this._ui.text = _loc5_;
               }
            }
         }
         if(this._secondLeft <= 0)
         {
            SystemTimerManager.removeTickFun(this.subSecond);
            if(this._endFunc != null)
            {
               this._endFunc();
            }
            this._secondLeft = 0;
         }
      }
      
      private function wrapTime(param1:int) : String
      {
         if(param1 < 10)
         {
            return "0" + param1;
         }
         return param1.toString();
      }
      
      public function destroy() : void
      {
         SystemTimerManager.removeTickFun(this.subSecond);
         if(this._ui)
         {
            this._ui = null;
         }
         this._endFunc = null;
         this._runFunc = null;
      }
   }
}
