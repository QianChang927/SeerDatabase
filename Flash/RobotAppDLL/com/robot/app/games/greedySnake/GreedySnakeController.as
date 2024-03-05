package com.robot.app.games.greedySnake
{
   import com.robot.core.manager.MainManager;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.ui.Keyboard;
   import gs.TweenLite;
   import gs.easing.Linear;
   import org.taomee.utils.DisplayUtil;
   
   public class GreedySnakeController
   {
       
      
      private var _endCallback:Function;
      
      private var _moveCallback:Function;
      
      private var _mapArr:Array;
      
      private var _moveArr:Array;
      
      private var _moveDirectionArr:Array;
      
      private var _cellWidth:Number = 21.3;
      
      private var _cellHeight:Number = 21.3;
      
      private var _direction:int = 0;
      
      private var _currentDirection:int = 0;
      
      private var _getGingersnap:Boolean = false;
      
      private var _firstOpen:Boolean = true;
      
      private var _ui:MovieClip;
      
      private var _targetMc:MovieClip;
      
      private var _targetClass:Class;
      
      private var _snake:MovieClip;
      
      private var _targetNum:uint;
      
      private var _dialogDelay:int;
      
      private var _moveTime:Number = 0.45;
      
      private var _moveTime_o:Number = 0.45;
      
      private var _lastX:int = 0;
      
      private var _lastY:int = 0;
      
      private var _pause:Boolean;
      
      private var _isPlaying:Boolean;
      
      public function GreedySnakeController(param1:MovieClip, param2:Class, param3:Number, param4:Number)
      {
         super();
         this._cellWidth = param4;
         this._cellHeight = param3;
         this._ui = param1;
         this._snake = this._ui.snake;
         this._targetClass = param2;
         this._targetMc = new this._targetClass() as MovieClip;
         this._targetMc.stop();
         this._moveArr = [];
         this._moveDirectionArr = [];
      }
      
      public function set endCallback(param1:Function) : void
      {
         this._endCallback = param1;
      }
      
      public function get isPlaying() : Boolean
      {
         return this._isPlaying;
      }
      
      public function set moveTime(param1:Number) : void
      {
         this._moveTime_o = param1;
      }
      
      public function set moveCallback(param1:Function) : void
      {
         this._moveCallback = param1;
      }
      
      public function pause() : void
      {
         this._pause = true;
         this._isPlaying = false;
         this.removeEvent();
      }
      
      public function resumePlay() : void
      {
         this._pause = false;
         this._isPlaying = true;
         this.addEvent();
         this.move(this._currentDirection);
      }
      
      public function restart() : void
      {
         this.start();
      }
      
      public function start() : void
      {
         var _loc2_:int = 0;
         this._isPlaying = true;
         this._moveTime = this._moveTime_o;
         this._targetNum = 0;
         this._moveDirectionArr = [];
         this.addEvent();
         this._direction = 3;
         this._mapArr = [];
         var _loc1_:int = 0;
         while(_loc1_ < 15)
         {
            this._mapArr[_loc1_] = new Array();
            _loc2_ = 0;
            while(_loc2_ < 15)
            {
               this._mapArr[_loc1_][_loc2_] = 0;
               _loc2_++;
            }
            _loc1_++;
         }
         if(this._ui.gameField.numChildren > 0)
         {
            DisplayUtil.removeAllChild(this._ui.gameField);
         }
         _loc1_ = 0;
         while(_loc1_ < this._moveArr.length)
         {
            TweenLite.killTweensOf(this._moveArr[_loc1_],false);
            this._moveArr[_loc1_].stop();
            DisplayUtil.removeForParent(this._moveArr[_loc1_]);
            this._moveArr[_loc1_] = null;
            _loc1_++;
         }
         this._moveArr.splice(0,this._moveArr.length);
         this._moveArr.push(this._snake);
         this._ui.gameField.addChild(this._snake);
         this._snake.visible = true;
         this._snake.x = this._cellWidth / 2;
         this._snake.y = this._cellHeight / 2;
         this._snake.gotoAndStop(1);
         this._mapArr[0][0] = 1;
         this.addTarget();
         this._ui.gameField.addChildAt(this._targetMc,0);
         this.move(this._direction);
      }
      
      private function addTarget() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         do
         {
            _loc1_ = Math.floor(Math.random() * 15);
            _loc2_ = Math.floor(Math.random() * 15);
            _loc3_++;
         }
         while(this._mapArr != null && this.checkHit(_loc1_,_loc2_) != 0 && _loc3_ <= 1000);
         
         this._targetMc.visible = true;
         this._targetMc.x = _loc1_ * this._cellWidth + this._cellWidth / 2 + 2;
         this._targetMc.y = _loc2_ * this._cellHeight + this._cellHeight / 2 + 2;
         this._mapArr[_loc2_][_loc1_] = 2;
      }
      
      private function checkHit(param1:int, param2:int, param3:Function = null) : int
      {
         if(param1 >= this._mapArr.length || param1 < 0 || param2 >= this._mapArr.length || param2 < 0 || this._mapArr[param2][param1] == 1)
         {
            if(param3 != null)
            {
               param3(-1);
            }
            return -1;
         }
         if(this._mapArr[param2][param1] == 2)
         {
            param3(1);
            return 1;
         }
         if(this._mapArr[param2][param1] == 0)
         {
            if(param3 != null)
            {
               param3(0);
            }
            return 0;
         }
         if(param3 != null)
         {
            param3(2);
         }
         return 2;
      }
      
      private function move(param1:int) : void
      {
         var x:int = 0;
         var y:int = 0;
         var index:int = param1;
         x = Math.floor(this._moveArr[0].x / this._cellWidth);
         y = Math.floor(this._moveArr[0].y / this._cellHeight);
         switch(index)
         {
            case 2:
               y--;
               break;
            case 4:
               y += 1;
               break;
            case 1:
               x--;
               break;
            case 3:
               x += 1;
         }
         this._moveDirectionArr[0] = index;
         this._mapArr[this._lastY][this._lastX] = 0;
         this._lastX = this._moveArr[this._moveArr.length - 1].x / this._cellWidth;
         this._lastY = this._moveArr[this._moveArr.length - 1].y / this._cellHeight;
         this.checkHit(x,y,function(param1:int):void
         {
            var _loc2_:MovieClip = null;
            var _loc3_:Number = NaN;
            switch(param1)
            {
               case 1:
                  _loc2_ = new _targetClass() as MovieClip;
                  _loc2_.scaleX = _loc2_.scaleY = 0.8;
                  _ui.gameField.addChildAt(_loc2_,0);
                  index = _moveDirectionArr[_moveDirectionArr.length - 1];
                  _loc3_ = 0;
                  switch(index)
                  {
                     case 2:
                        _loc2_.x = _moveArr[_moveArr.length - 1].x;
                        _loc3_ = int(_moveArr[_moveArr.length - 1].y / _cellHeight + 1) * _cellHeight + _cellHeight / 2;
                        _loc2_.y = _loc3_;
                        break;
                     case 4:
                        _loc2_.x = _moveArr[_moveArr.length - 1].x;
                        _loc3_ = int(_moveArr[_moveArr.length - 1].y / _cellHeight - 1) * _cellHeight + _cellHeight / 2;
                        _loc2_.y = _loc3_;
                        break;
                     case 1:
                        _loc3_ = int(_moveArr[_moveArr.length - 1].x / _cellWidth + 1) * _cellWidth + _cellWidth / 2;
                        _loc2_.x = _loc3_;
                        _loc2_.y = _moveArr[_moveArr.length - 1].y;
                        break;
                     case 3:
                        _loc3_ = int(_moveArr[_moveArr.length - 1].x / _cellWidth - 1) * _cellWidth + _cellWidth / 2;
                        _loc2_.x = _loc3_;
                        _loc2_.y = _moveArr[_moveArr.length - 1].y;
                  }
                  _moveArr.push(_loc2_);
                  _moveDirectionArr.push(index);
                  _getGingersnap = true;
                  ++_targetNum;
                  if(_targetNum == 40 || _targetNum == 100)
                  {
                     _moveTime *= 0.9;
                  }
               case 0:
                  if(_moveCallback != null)
                  {
                     _moveCallback(_targetNum,_getGingersnap);
                  }
                  _mapArr[y][x] = 1;
                  if(_getGingersnap)
                  {
                     _getGingersnap = false;
                     addTarget();
                  }
                  TweenLite.to(_moveArr[0],_moveTime,{
                     "x":x * _cellWidth + _cellWidth / 2,
                     "y":y * _cellHeight + _cellHeight / 2,
                     "onComplete":onFrame,
                     "ease":Linear.easeNone
                  });
                  param1 = int(_moveArr.length - 1);
                  while(param1 >= 1)
                  {
                     moveTaget(param1);
                     _moveDirectionArr[param1] = _moveDirectionArr[param1 - 1];
                     param1--;
                  }
                  break;
               case -1:
                  gameOver();
            }
         });
      }
      
      protected function onFrame(param1:Event = null) : void
      {
         if(this._ui != null)
         {
            if(Math.abs(this._currentDirection - this._direction) != 2 || this._moveArr.length == 1)
            {
               this._currentDirection = this._direction;
            }
            if(this._pause)
            {
               return;
            }
            this.move(this._currentDirection);
         }
      }
      
      private function moveTaget(param1:int) : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:int = int(this._moveDirectionArr[param1]);
         if(Math.abs(this._moveArr[param1].x - this._moveArr[param1 - 1].x) <= 6 && Math.abs(this._moveArr[param1].y - this._moveArr[param1 - 1].y) <= 6)
         {
            _loc2_ = Number(this._moveArr[param1].x);
            _loc3_ = Number(this._moveArr[param1].y);
         }
         else
         {
            switch(_loc4_)
            {
               case 2:
                  _loc2_ = int(this._moveArr[param1].x / this._cellWidth) * this._cellWidth + this._cellWidth / 2;
                  _loc3_ = int(this._moveArr[param1].y / this._cellHeight - 1) * this._cellHeight + this._cellHeight / 2;
                  break;
               case 4:
                  _loc2_ = int(this._moveArr[param1].x / this._cellWidth) * this._cellWidth + this._cellWidth / 2;
                  _loc3_ = int(this._moveArr[param1].y / this._cellHeight + 1) * this._cellHeight + this._cellHeight / 2;
                  break;
               case 1:
                  _loc2_ = int(this._moveArr[param1].x / this._cellWidth - 1) * this._cellWidth + this._cellWidth / 2;
                  _loc3_ = int(this._moveArr[param1].y / this._cellHeight) * this._cellHeight + this._cellHeight / 2;
                  break;
               case 3:
                  _loc2_ = int(this._moveArr[param1].x / this._cellWidth + 1) * this._cellWidth + this._cellWidth / 2;
                  _loc3_ = int(this._moveArr[param1].y / this._cellHeight) * this._cellHeight + this._cellHeight / 2;
            }
            TweenLite.to(this._moveArr[param1],this._moveTime,{
               "x":_loc2_,
               "y":_loc3_,
               "ease":Linear.easeNone
            });
         }
         var _loc5_:int = _loc2_ / this._cellWidth;
         var _loc6_:int = _loc3_ / this._cellHeight;
         this._mapArr[_loc6_][_loc5_] = 1;
      }
      
      private function addEvent() : void
      {
         this._ui.gameField.addEventListener(KeyboardEvent.KEY_DOWN,this.onDown);
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
         this._ui.gameField.mouseChildren = false;
         MainManager.getStage().focus = this._ui.gameField;
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         if(this._ui)
         {
            MainManager.getStage().focus = this._ui.gameField;
         }
      }
      
      private function removeEvent() : void
      {
         this._ui.gameField.mouseChildren = true;
         this._ui.gameField.removeEventListener(KeyboardEvent.KEY_UP,this.onUp);
         this._ui.gameField.removeEventListener(KeyboardEvent.KEY_DOWN,this.onDown);
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onUp(param1:KeyboardEvent) : void
      {
         this._ui.gameField.removeEventListener(KeyboardEvent.KEY_UP,this.onUp);
         if(param1.keyCode == 87 || param1.keyCode == Keyboard.UP)
         {
            this._direction = 2;
         }
         else if(param1.keyCode == 83 || param1.keyCode == Keyboard.DOWN)
         {
            this._direction = 4;
         }
         else if(param1.keyCode == 65 || param1.keyCode == Keyboard.LEFT)
         {
            this._direction = 1;
         }
         else if(param1.keyCode == 68 || param1.keyCode == Keyboard.RIGHT)
         {
            this._direction = 3;
         }
      }
      
      private function onDown(param1:KeyboardEvent) : void
      {
         if(this._ui)
         {
            this._ui.gameField.addEventListener(KeyboardEvent.KEY_UP,this.onUp);
         }
      }
      
      private function gameOver() : void
      {
         if(this._ui == null)
         {
            return;
         }
         this._isPlaying = false;
         this.removeEvent();
         if(this._endCallback != null)
         {
            this._endCallback();
         }
      }
      
      public function destroy() : void
      {
         this.removeEvent();
         if(this._ui != null)
         {
            this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
            this._ui = null;
            this._snake = null;
            DisplayUtil.removeForParent(this._snake);
            this._targetClass = null;
            this._targetMc = null;
            DisplayUtil.removeForParent(this._targetMc);
         }
         if(this._endCallback != null)
         {
            this._endCallback = null;
         }
         if(this._moveCallback != null)
         {
            this._moveCallback = null;
         }
         this._mapArr = null;
         var _loc1_:int = 0;
         while(_loc1_ < this._moveArr.length)
         {
            TweenLite.killTweensOf(this._moveArr[_loc1_],false);
            this._moveArr[_loc1_].stop();
            DisplayUtil.removeForParent(this._moveArr[_loc1_]);
            this._moveArr[_loc1_] = null;
            _loc1_++;
         }
         this._moveArr.splice(0,this._moveArr.length);
      }
   }
}
