package com.robot.core.uic
{
   import flash.display.InteractiveObject;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   
   public class UIScrollBarX extends EventDispatcher
   {
       
      
      private var _barBack:Sprite;
      
      private var _barBlock:Sprite;
      
      private var _upBtn:SimpleButton;
      
      private var _downBtn:SimpleButton;
      
      private var _scrollRect:Rectangle;
      
      private var _maxCount:int;
      
      private var _per:Number = 0;
      
      private var _index:int = 0;
      
      private var _totalLength:int = 0;
      
      private var _lineNum:uint = 1;
      
      private var _wheelObject:InteractiveObject;
      
      private var _scrollY:Number = 3;
      
      private var _upNum:Number = 0;
      
      private var _downNum:Number = 0;
      
      private var _timeOutKey:uint;
      
      public function UIScrollBarX(param1:Sprite, param2:Sprite, param3:int, param4:SimpleButton = null, param5:SimpleButton = null)
      {
         super();
         this._barBlock = param1;
         this._barBack = param2;
         this._maxCount = param3;
         this._upBtn = param4;
         this._downBtn = param5;
         if(this._upBtn)
         {
            this._upNum = this._upBtn.width;
            this._upBtn.x = this._barBack.x;
            this._upBtn.mouseEnabled = false;
         }
         if(this._downBtn)
         {
            this._downNum = this._downBtn.width;
            this._downBtn.x = this._barBack.x + this._barBack.width - this._downBtn.width;
            this._downBtn.mouseEnabled = false;
         }
         this._barBlock.buttonMode = true;
         this._barBlock.mouseEnabled = false;
         this.upDateScroll();
         this._barBlock.x = this._scrollRect.x;
         this._barBlock.visible = false;
      }
      
      public function get index() : int
      {
         return this._index;
      }
      
      public function get lineNum() : int
      {
         return this._lineNum;
      }
      
      public function set lineNum(param1:int) : void
      {
         this._lineNum = param1;
      }
      
      public function set index(param1:int) : void
      {
         if(param1 < 0 || param1 > this._totalLength)
         {
            return;
         }
         this._index = param1;
         this._barBlock.x = this._index * this._per + this._scrollRect.x;
         dispatchEvent(new MouseEvent(MouseEvent.MOUSE_MOVE));
      }
      
      public function set totalLength(param1:int) : void
      {
         this._totalLength = param1;
         this._barBlock.x = this._scrollRect.x;
         this._index = 0;
         if(param1 > this._maxCount)
         {
            this._barBlock.mouseEnabled = true;
            this._barBlock.visible = true;
            this._per = this._scrollRect.width / (param1 - this._maxCount);
            DebugTrace.show("拖动的比例\t " + this._per);
            this._barBlock.addEventListener(MouseEvent.MOUSE_DOWN,this.onBarBlockDown);
            this._barBack.addEventListener(MouseEvent.MOUSE_DOWN,this.onBackDown);
            if(this._wheelObject)
            {
               this._wheelObject.addEventListener(MouseEvent.MOUSE_WHEEL,this.onWheel);
            }
            if(this._upBtn)
            {
               this._upBtn.mouseEnabled = true;
               this._upBtn.addEventListener(MouseEvent.MOUSE_DOWN,this.onUpDown);
            }
            if(this._downBtn)
            {
               this._downBtn.mouseEnabled = true;
               this._downBtn.addEventListener(MouseEvent.MOUSE_DOWN,this.onDownDown);
            }
         }
         else
         {
            this._barBlock.mouseEnabled = false;
            this._barBlock.visible = false;
            this._barBlock.removeEventListener(MouseEvent.MOUSE_DOWN,this.onBarBlockDown);
            this._barBack.removeEventListener(MouseEvent.MOUSE_DOWN,this.onBackDown);
            if(this._wheelObject)
            {
               this._wheelObject.removeEventListener(MouseEvent.MOUSE_WHEEL,this.onWheel);
            }
            if(this._upBtn)
            {
               this._upBtn.mouseEnabled = false;
               this._upBtn.removeEventListener(MouseEvent.MOUSE_DOWN,this.onUpDown);
               if(this._upBtn.stage)
               {
                  this._upBtn.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onUpUp);
               }
            }
            if(this._downBtn)
            {
               this._downBtn.mouseEnabled = false;
               this._downBtn.removeEventListener(MouseEvent.MOUSE_DOWN,this.onDownDown);
               if(this._downBtn.stage)
               {
                  this._downBtn.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onDownUp);
               }
            }
         }
      }
      
      public function set wheelObject(param1:InteractiveObject) : void
      {
         this._wheelObject = param1;
         if(this._barBlock.mouseEnabled)
         {
            this._wheelObject.addEventListener(MouseEvent.MOUSE_WHEEL,this.onWheel);
         }
      }
      
      public function get wheelObject() : InteractiveObject
      {
         return this._wheelObject;
      }
      
      public function destroy() : void
      {
         if(this._barBlock)
         {
            this._barBlock.removeEventListener(MouseEvent.MOUSE_DOWN,this.onBarBlockDown);
         }
         if(this._barBack)
         {
            this._barBack.removeEventListener(MouseEvent.MOUSE_DOWN,this.onBackDown);
         }
         if(this._wheelObject)
         {
            this._wheelObject.removeEventListener(MouseEvent.MOUSE_WHEEL,this.onWheel);
            this._wheelObject = null;
         }
         if(this._upBtn)
         {
            this._upBtn.removeEventListener(MouseEvent.MOUSE_DOWN,this.onUpDown);
            if(this._upBtn.stage)
            {
               this._upBtn.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onUpUp);
            }
            this._upBtn = null;
         }
         if(this._downBtn)
         {
            this._downBtn.removeEventListener(MouseEvent.MOUSE_DOWN,this.onDownDown);
            if(this._downBtn.stage)
            {
               this._downBtn.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onDownUp);
            }
            this._downBtn = null;
         }
         this._barBlock = null;
         this._barBack = null;
         this._scrollRect = null;
      }
      
      private function upDateScroll() : void
      {
         var _loc1_:Number = this._barBack.x + this._upNum;
         var _loc2_:Number = this._barBack.y - (this._barBlock.height - this._barBack.height) / 2;
         var _loc3_:Number = this._barBack.width - this._barBlock.width - this._upNum - this._downNum;
         var _loc4_:Number = 0;
         this._scrollRect = new Rectangle(_loc1_,_loc2_,_loc3_,_loc4_);
      }
      
      private function onBarBlockDown(param1:MouseEvent) : void
      {
         this._barBlock.startDrag(false,this._scrollRect);
         this._barBlock.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.onBarBlockMove);
         this._barBlock.stage.addEventListener(MouseEvent.MOUSE_UP,this.onBarBlockUp);
         this._barBlock.removeEventListener(MouseEvent.MOUSE_DOWN,this.onBarBlockDown);
      }
      
      private function onBarBlockMove(param1:MouseEvent) : void
      {
         if(this._barBlock.x < this._scrollRect.x)
         {
            this._barBlock.x = this._scrollRect.x;
         }
         if(this._barBlock.x > this._scrollRect.right)
         {
            this._barBlock.x = this._scrollRect.right;
         }
         var _loc2_:int = Math.round((this._barBlock.x - this._scrollRect.x) / this._per);
         if(_loc2_ < 0)
         {
            _loc2_ = 0;
         }
         if(Math.ceil(_loc2_ / this._lineNum) != this._index)
         {
            this._index = Math.ceil(_loc2_ / this.lineNum);
            dispatchEvent(new MouseEvent(MouseEvent.MOUSE_MOVE));
         }
      }
      
      private function onBarBlockUp(param1:MouseEvent) : void
      {
         this._barBlock.stopDrag();
         this._barBlock.addEventListener(MouseEvent.MOUSE_DOWN,this.onBarBlockDown);
         this._barBlock.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onBarBlockMove);
         this._barBlock.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onBarBlockUp);
      }
      
      private function onBackDown(param1:MouseEvent) : void
      {
         this._barBlock.x = (this._barBack.parent.mouseX - this._scrollRect.x) / (this._scrollRect.width + this._barBlock.width) * this._scrollRect.width + this._scrollRect.x;
         this.onBarBlockMove(null);
      }
      
      private function onWheel(param1:MouseEvent) : void
      {
         if(this._barBlock.x >= this._scrollRect.x && this._barBlock.x <= this._scrollRect.right)
         {
            this._barBlock.x -= param1.delta;
            this.onBarBlockMove(null);
         }
      }
      
      private function onUpDown(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         clearTimeout(this._timeOutKey);
         this._timeOutKey = setTimeout(function():void
         {
            _upBtn.addEventListener(Event.ENTER_FRAME,onUpEnter);
         },300);
         this.onUpEnter(null);
         if(this._upBtn.stage)
         {
            this._upBtn.stage.addEventListener(MouseEvent.MOUSE_UP,this.onUpUp);
         }
      }
      
      private function onUpUp(param1:MouseEvent) : void
      {
         clearTimeout(this._timeOutKey);
         if(this._upBtn.stage)
         {
            this._upBtn.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onUpUp);
         }
         this._upBtn.removeEventListener(Event.ENTER_FRAME,this.onUpEnter);
      }
      
      private function onUpEnter(param1:Event) : void
      {
         if(this._index > 0)
         {
            this.index = this._index - 1;
            this.onBarBlockMove(null);
         }
         else
         {
            this._barBlock.x = this._scrollRect.x;
            this._upBtn.removeEventListener(Event.ENTER_FRAME,this.onUpEnter);
         }
      }
      
      private function onDownDown(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         clearTimeout(this._timeOutKey);
         this._timeOutKey = setTimeout(function():void
         {
            _downBtn.addEventListener(Event.ENTER_FRAME,onDownEnter);
         },300);
         this.onDownEnter(null);
         if(this._downBtn.stage)
         {
            this._downBtn.stage.addEventListener(MouseEvent.MOUSE_UP,this.onDownUp);
         }
      }
      
      private function onDownUp(param1:MouseEvent) : void
      {
         clearTimeout(this._timeOutKey);
         if(this._downBtn.stage)
         {
            this._downBtn.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onDownUp);
         }
         this._downBtn.removeEventListener(Event.ENTER_FRAME,this.onDownEnter);
      }
      
      private function onDownEnter(param1:Event) : void
      {
         if(this._index < this._totalLength)
         {
            this.index = this._index + 1;
            this.onBarBlockMove(null);
         }
         else
         {
            this._barBlock.x = this._scrollRect.right;
            this._downBtn.removeEventListener(Event.ENTER_FRAME,this.onDownEnter);
         }
      }
      
      public function set scrollY(param1:Number) : void
      {
         this._scrollY = param1;
      }
      
      public function get scrollY() : Number
      {
         return this._scrollY;
      }
      
      public function get per() : Number
      {
         return this._per;
      }
   }
}
