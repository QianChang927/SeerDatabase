package com.robot.core.uic
{
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import org.taomee.debug.DebugTrace;
   
   public class UIScrollBlockBar
   {
       
      
      private var _barBack:Sprite;
      
      private var _barBlock:Sprite;
      
      private var _upBtn:SimpleButton;
      
      private var _downBtn:SimpleButton;
      
      private var _scrollRect:Rectangle;
      
      private var _scrollY:uint = 5;
      
      private var _upNum:Number;
      
      private var _downNum:Number;
      
      private var _targetMc:Sprite;
      
      private var _maxWidth:Number;
      
      private var _maxHeight:Number;
      
      private var _container:Sprite;
      
      private var _y:Number;
      
      public function UIScrollBlockBar(param1:Sprite, param2:Number, param3:Number, param4:Sprite, param5:Sprite, param6:SimpleButton = null, param7:SimpleButton = null)
      {
         super();
         this._container = new Sprite();
         this._targetMc = param1;
         this._y = this._targetMc.y;
         this._maxWidth = param2;
         this._maxHeight = param3;
         this._barBlock = param4;
         this._barBack = param5;
         this._upBtn = param6;
         this._downBtn = param7;
         var _loc8_:Sprite = this.makeMask();
         this._targetMc.parent.addChild(_loc8_);
         _loc8_.x = this._targetMc.x - 2.5;
         _loc8_.y = this._targetMc.y - 2;
         this._targetMc.mask = _loc8_;
         this._barBlock.addEventListener(MouseEvent.MOUSE_DOWN,this.onBarBlockDown);
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
         this.layout();
         this.upDateScroll();
      }
      
      private function makeMask() : Sprite
      {
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.lineStyle(1,0,1);
         _loc1_.graphics.beginFill(0);
         _loc1_.graphics.drawRect(0,0,this._maxWidth + 5,this._maxHeight + 4);
         _loc1_.graphics.endFill();
         return _loc1_;
      }
      
      private function layout() : void
      {
         if(this._upBtn)
         {
            this._upNum = this._upBtn.height;
            this._upBtn.x = this._barBack.x;
            this._upBtn.y = this._barBack.y;
         }
         if(this._downBtn)
         {
            this._downNum = this._downBtn.height;
            this._downBtn.x = this._barBack.x;
            this._downBtn.y = this._barBack.y + this._barBack.height - this._downBtn.height;
         }
         this._barBlock.buttonMode = true;
         this.upDateScroll();
         this._barBlock.x = this._scrollRect.x;
         this._barBlock.y = this._scrollRect.y;
      }
      
      public function destroy() : void
      {
         this._barBlock.removeEventListener(MouseEvent.MOUSE_DOWN,this.onBarBlockDown);
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
         this._scrollRect = new Rectangle(this._barBack.x - (this._barBlock.width - this._barBack.width) / 2,this._barBack.y + this._upNum,0,this._barBack.height - this._barBlock.height - this._upNum - this._downNum);
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
         if(this._barBlock.y < this._scrollRect.y)
         {
            this._barBlock.y = this._scrollRect.y;
         }
         if(this._barBlock.y > this._scrollRect.bottom)
         {
            this._barBlock.y = this._scrollRect.bottom;
         }
         var _loc2_:Number = (this._barBlock.y - this._scrollRect.y) / this._scrollRect.height;
         DebugTrace.show("sca==" + _loc2_);
         this._targetMc.y = -(this._targetMc.height - this._maxHeight) * _loc2_ + this._y;
      }
      
      private function onBarBlockUp(param1:MouseEvent) : void
      {
         this._barBlock.stopDrag();
         this._barBlock.addEventListener(MouseEvent.MOUSE_DOWN,this.onBarBlockDown);
         this._barBlock.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onBarBlockMove);
         this._barBlock.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onBarBlockUp);
      }
      
      private function onUpDown(param1:MouseEvent) : void
      {
         this._upBtn.addEventListener(Event.ENTER_FRAME,this.onUpEnter);
         if(this._upBtn.stage)
         {
            this._upBtn.stage.addEventListener(MouseEvent.MOUSE_UP,this.onUpUp);
         }
      }
      
      private function onUpUp(param1:MouseEvent) : void
      {
         if(this._upBtn.stage)
         {
            this._upBtn.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onUpUp);
         }
         this._upBtn.removeEventListener(Event.ENTER_FRAME,this.onUpEnter);
      }
      
      private function onUpEnter(param1:Event) : void
      {
         if(this._barBlock.y >= this._scrollRect.y)
         {
            this._barBlock.y -= this._scrollY;
            this.onBarBlockMove(null);
         }
         else
         {
            this._barBlock.y = this._scrollRect.y;
            this._upBtn.removeEventListener(Event.ENTER_FRAME,this.onUpEnter);
         }
      }
      
      private function onDownDown(param1:MouseEvent) : void
      {
         this._downBtn.addEventListener(Event.ENTER_FRAME,this.onDownEnter);
         if(this._downBtn.stage)
         {
            this._downBtn.stage.addEventListener(MouseEvent.MOUSE_UP,this.onDownUp);
         }
      }
      
      private function onDownUp(param1:MouseEvent) : void
      {
         if(this._downBtn.stage)
         {
            this._downBtn.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onDownUp);
         }
         this._downBtn.removeEventListener(Event.ENTER_FRAME,this.onDownEnter);
      }
      
      private function onDownEnter(param1:Event) : void
      {
         if(this._barBlock.y <= this._scrollRect.bottom)
         {
            this._barBlock.y += this._scrollY;
            this.onBarBlockMove(null);
         }
         else
         {
            this._barBlock.y = this._scrollRect.bottom;
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
   }
}
