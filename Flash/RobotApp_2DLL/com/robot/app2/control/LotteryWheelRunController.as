package com.robot.app2.control
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class LotteryWheelRunController
   {
       
      
      private var _wheelMc:MovieClip;
      
      private var _wheelRun:Boolean;
      
      private var _blockNum:uint;
      
      private var _skewRotation:Number;
      
      private var _Qmax:uint;
      
      private var _Qmin:uint;
      
      private var _locationBlock:uint;
      
      private var _offset:Number;
      
      private var _initRotation:Number;
      
      private var _maxSpeed:Number;
      
      private var _minSpeed:Number;
      
      private var _currentSpeed:Number;
      
      private var _acceleration:Number;
      
      private var _recallFun:Function;
      
      public function LotteryWheelRunController(param1:MovieClip, param2:uint, param3:uint, param4:Number, param5:Boolean = true)
      {
         super();
         this._wheelMc = param1;
         this._blockNum = param2;
         this._locationBlock = param3;
         this._initRotation = param4;
         this._wheelRun = param5;
         this._Qmax = 1;
         this._Qmin = 0;
         this._offset = 0.5;
         this._maxSpeed = 20;
         this._minSpeed = 0;
         this._skewRotation = 0;
      }
      
      public function start(param1:Function = null) : void
      {
         this._recallFun = param1;
         var _loc2_:Number = this.getTotalRotation();
         this._acceleration = (this._maxSpeed * this._maxSpeed - this._minSpeed * this._minSpeed) / _loc2_;
         this._currentSpeed = 0;
         this._wheelMc.addEventListener(Event.ENTER_FRAME,this.onRotation);
      }
      
      private function onRotation(param1:Event) : void
      {
         if(this._currentSpeed >= this._maxSpeed)
         {
            this._currentSpeed = 2 * this._maxSpeed - this._currentSpeed;
            this._acceleration = -this._acceleration;
         }
         this._currentSpeed += this._acceleration;
         if(this._currentSpeed > 0)
         {
            this._wheelMc.rotation += this._currentSpeed;
         }
         else
         {
            this._wheelMc.removeEventListener(Event.ENTER_FRAME,this.onRotation);
            if(null != this._recallFun)
            {
               this._recallFun();
            }
         }
      }
      
      private function getTotalRotation() : Number
      {
         var _loc1_:Number = 360 * (Math.floor(Math.random() * (this._Qmax - this._Qmin)) + this._Qmin);
         var _loc2_:Number = 360 / this._blockNum * this._skewRotation;
         var _loc3_:Number = 360 / this._blockNum * this._locationBlock;
         var _loc4_:Number = Math.floor(Math.random() * (360 / this._blockNum) * (1 - 2 * this._offset)) + 360 / this._blockNum * this._offset;
         if(this._wheelRun)
         {
            return _loc1_ + _loc2_ + (360 - _loc3_) + _loc4_ + Math.abs(360 - (this._wheelMc.rotation - this._initRotation)) % 360;
         }
         return _loc1_ + _loc2_ + _loc3_ + _loc4_ + 360 - Math.abs(360 - (this._wheelMc.rotation - this._initRotation)) % 360;
      }
      
      public function set BlockNum(param1:Number) : void
      {
         this._blockNum = param1;
      }
      
      public function set SkewRotation(param1:int) : void
      {
         this._skewRotation = param1;
      }
      
      public function set Qmax(param1:uint) : void
      {
         this._Qmax = param1;
      }
      
      public function set Qmin(param1:uint) : void
      {
         this._Qmin = param1;
      }
      
      public function set LocationBlock(param1:uint) : void
      {
         this._locationBlock = param1;
      }
      
      public function set Offset(param1:Number) : void
      {
         this._offset = param1;
      }
      
      public function set MaxSpeed(param1:Number) : void
      {
         this._maxSpeed = param1;
      }
      
      public function set MinSpeed(param1:Number) : void
      {
         this._minSpeed = param1;
      }
      
      public function set InitRotation(param1:Number) : void
      {
         this._initRotation = param1;
      }
   }
}
