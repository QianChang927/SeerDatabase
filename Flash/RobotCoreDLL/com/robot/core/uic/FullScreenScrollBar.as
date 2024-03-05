package com.robot.core.uic
{
   import com.robot.core.manager.LevelManager;
   import flash.display.DisplayObjectContainer;
   import flash.display.Graphics;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import gs.TweenLite;
   
   public class FullScreenScrollBar extends Sprite
   {
       
      
      private var _content:DisplayObjectContainer;
      
      private var _trackColor:uint;
      
      private var _grabberColor:uint;
      
      private var _grabberPressColor:uint;
      
      private var _gripColor:uint;
      
      private var _trackThickness:int;
      
      private var _grabberThickness:int;
      
      private var _easeAmount:int;
      
      private var _hasShine:Boolean;
      
      private var _track:Sprite;
      
      private var _grabber:Sprite;
      
      private var _grabberGrip:Sprite;
      
      private var _grabberArrow1:Sprite;
      
      private var _grabberArrow2:Sprite;
      
      private var _tH:Number;
      
      private var _cH:Number;
      
      private var _scrollValue:Number;
      
      private var _defaultPosition:Number;
      
      private var _stageW:Number;
      
      private var _stageH:Number;
      
      private var _pressed:Boolean = false;
      
      private var _offsetX:Number = 0;
      
      private var _offsetY:Number = 0;
      
      private var _lock:Boolean = false;
      
      private var _isLock:Boolean = false;
      
      private var _ctime:Number = 0.3;
      
      public function FullScreenScrollBar(param1:DisplayObjectContainer, param2:Number, param3:Number, param4:uint, param5:uint, param6:uint, param7:uint, param8:int, param9:int, param10:int, param11:Boolean, param12:Number = 0, param13:Number = 0)
      {
         super();
         this._offsetX = param12;
         this._offsetY = param13;
         this._stageW = param3;
         this._stageH = param2;
         this._content = param1;
         this._trackColor = param4;
         this._grabberColor = param5;
         this._grabberPressColor = param6;
         this._gripColor = param7;
         this._trackThickness = param8;
         this._grabberThickness = param9;
         this._easeAmount = param10;
         this._hasShine = param11;
         this.init();
      }
      
      public function lock() : void
      {
         this._isLock = true;
      }
      
      public function unLock() : void
      {
         this._isLock = false;
      }
      
      public function setSize(param1:Number, param2:Number) : void
      {
         this._stageW = param1;
         this._stageH = param2;
         this.adjustSize();
      }
      
      private function init() : void
      {
         this.createTrack();
         this.createGrabber();
         this.createGrips();
         addEventListener(Event.ADDED_TO_STAGE,this.onAddedToStage,false,0,true);
         this._defaultPosition = Math.round(this._content.y);
         this._grabber.y = 0;
      }
      
      public function kill() : void
      {
         LevelManager.stage.removeEventListener(Event.RESIZE,this.onStageResize);
      }
      
      public function setBarPosition(param1:Number) : void
      {
         this._grabber.y = param1;
         this.scrollContent(null);
      }
      
      private function stopScroll(param1:Event) : void
      {
         this.onUpListener();
      }
      
      private function scrollContent(param1:Event) : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         _loc2_ = -((this._cH - this._tH) * (this._grabber.y / this._scrollValue));
         _loc3_ = _loc2_ - this._content.y + this._defaultPosition;
         _loc4_ = _loc3_ / this._easeAmount;
         this._content.y += Math.round(_loc4_);
         if(Math.abs(this._content.y - _loc2_ - this._defaultPosition) < 1.5)
         {
            this._grabber.removeEventListener(Event.ENTER_FRAME,this.scrollContent);
            this._content.y = Math.round(_loc2_) + this._defaultPosition;
         }
         this.positionGrips();
      }
      
      public function adjustSize() : void
      {
         this.x = this._content.width + this._content.x + this._offsetX;
         this.y = 0;
         this._track.height = this._stageH;
         this._track.y = 0;
         this._tH = this._track.height;
         this._cH = this._content.height + this._defaultPosition;
         if(this._cH > this._tH)
         {
            this._lock = false;
            this.visible = true;
            this._grabber.getChildByName("bg").height = Math.ceil(this._tH / this._cH * this._tH);
            if(this._grabber.getChildByName("bg").height < 35)
            {
               this._grabber.getChildByName("bg").height = 35;
            }
            if(this._hasShine)
            {
               this._grabber.getChildByName("shine").height = this._grabber.getChildByName("bg").height;
            }
            if(this._grabber.y + this._grabber.getChildByName("bg").height > this._tH)
            {
               this._grabber.y = this._tH - this._grabber.getChildByName("bg").height;
            }
            this._grabber.y = this._cH < this._tH ? 0 : this._grabber.y;
            this._scrollValue = this._tH - this._grabber.getChildByName("bg").height;
            this._content.y = Math.round(-((this._cH - this._tH) * (this._grabber.y / this._scrollValue)) + this._defaultPosition);
            this.positionGrips();
            return;
         }
         this._lock = true;
         this.visible = false;
         this._content.y = 0;
      }
      
      private function positionGrips() : void
      {
         this._grabberGrip.y = Math.ceil(this._grabber.getChildByName("bg").y + this._grabber.getChildByName("bg").height / 2 - this._grabberGrip.height / 2);
         this._grabberArrow1.y = this._grabber.getChildByName("bg").y + 8;
         this._grabberArrow2.y = this._grabber.getChildByName("bg").height - 8;
      }
      
      private function createTrack() : void
      {
         this._track = new Sprite();
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.beginFill(this._trackColor);
         _loc1_.graphics.drawRect(0,0,this._trackThickness,this._trackThickness);
         _loc1_.graphics.endFill();
         this._track.addChild(_loc1_);
         addChild(this._track);
      }
      
      private function createGrabber() : void
      {
         var _loc2_:Sprite = null;
         var _loc3_:Graphics = null;
         this._grabber = new Sprite();
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.beginFill(this._grabberColor);
         _loc1_.graphics.drawRect(0,0,this._grabberThickness,this._grabberThickness);
         _loc1_.graphics.endFill();
         _loc1_.name = "bg";
         this._grabber.addChild(_loc1_);
         if(this._hasShine)
         {
            _loc2_ = new Sprite();
            _loc3_ = _loc2_.graphics;
            _loc3_.beginFill(16777215,0.15);
            _loc3_.drawRect(0,0,Math.ceil(this._trackThickness / 2),this._trackThickness);
            _loc3_.endFill();
            _loc2_.x = Math.floor(this._trackThickness / 2);
            _loc2_.name = "shine";
            this._grabber.addChild(_loc2_);
         }
         addChild(this._grabber);
      }
      
      private function createGrips() : void
      {
         this._grabberGrip = this.createGrabberGrip();
         this._grabber.addChild(this._grabberGrip);
         this._grabberArrow1 = this.createPixelArrow();
         this._grabber.addChild(this._grabberArrow1);
         this._grabberArrow2 = this.createPixelArrow();
         this._grabber.addChild(this._grabberArrow2);
         this._grabberArrow1.rotation = -90;
         this._grabberArrow1.x = (this._grabberThickness - 7) / 2 + 1;
         this._grabberArrow2.rotation = 90;
         this._grabberArrow2.x = (this._grabberThickness - 7) / 2 + 6;
      }
      
      private function createGrabberGrip() : Sprite
      {
         var _loc1_:int = 7;
         var _loc2_:int = (this._grabberThickness - _loc1_) / 2;
         var _loc3_:Sprite = new Sprite();
         _loc3_.graphics.beginFill(this._gripColor,1);
         _loc3_.graphics.drawRect(_loc2_,0,_loc1_,1);
         _loc3_.graphics.drawRect(_loc2_,0 + 2,_loc1_,1);
         _loc3_.graphics.drawRect(_loc2_,0 + 4,_loc1_,1);
         _loc3_.graphics.drawRect(_loc2_,0 + 6,_loc1_,1);
         _loc3_.graphics.drawRect(_loc2_,0 + 8,_loc1_,1);
         _loc3_.graphics.endFill();
         return _loc3_;
      }
      
      private function createPixelArrow() : Sprite
      {
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.beginFill(this._gripColor,1);
         _loc1_.graphics.drawRect(0,0,1,1);
         _loc1_.graphics.drawRect(1,1,1,1);
         _loc1_.graphics.drawRect(2,2,1,1);
         _loc1_.graphics.drawRect(1,3,1,1);
         _loc1_.graphics.drawRect(0,4,1,1);
         _loc1_.graphics.endFill();
         return _loc1_;
      }
      
      private function mouseWheelListener(param1:MouseEvent) : void
      {
         if(this._lock)
         {
            return;
         }
         if(this._isLock)
         {
            return;
         }
         var _loc2_:Number = param1.delta;
         if(_loc2_ > 0)
         {
            if(this._grabber.y - _loc2_ * 4 >= 0)
            {
               this._grabber.y -= _loc2_ * 4;
            }
            else
            {
               this._grabber.y = 0;
            }
            if(!this._grabber.hasEventListener(Event.ENTER_FRAME))
            {
               this._grabber.addEventListener(Event.ENTER_FRAME,this.scrollContent);
            }
         }
         else
         {
            if(this._grabber.y + this._grabber.height + Math.abs(_loc2_) * 4 <= this._stageH)
            {
               this._grabber.y += Math.abs(_loc2_) * 4;
            }
            else
            {
               this._grabber.y = this._stageH - this._grabber.height;
            }
            if(!this._grabber.hasEventListener(Event.ENTER_FRAME))
            {
               this._grabber.addEventListener(Event.ENTER_FRAME,this.scrollContent);
            }
         }
      }
      
      private function onDownListener(param1:MouseEvent) : void
      {
         this._pressed = true;
         this._grabber.startDrag(false,new Rectangle(0,0,0,this._stageH - this._grabber.getChildByName("bg").height));
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,this.onMouseMoveListener,false,0,true);
         TweenLite.to(this._grabber.getChildByName("bg"),this._ctime,{"tint":this._grabberPressColor});
      }
      
      private function onUpListener(param1:MouseEvent = null) : void
      {
         if(this._pressed)
         {
            this._pressed = false;
            this._grabber.stopDrag();
            LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMouseMoveListener);
            TweenLite.to(this._grabber.getChildByName("bg"),this._ctime,{"tint":null});
         }
      }
      
      private function onMouseMoveListener(param1:MouseEvent) : void
      {
         param1.updateAfterEvent();
         this._grabber.addEventListener(Event.ENTER_FRAME,this.scrollContent,false,0,true);
      }
      
      private function onTrackClick(param1:MouseEvent) : void
      {
         var p:int = 0;
         var reset:Function = null;
         var e:MouseEvent = param1;
         reset = function():void
         {
            if(_grabber.y < 0)
            {
               _grabber.y = 0;
            }
            if(_grabber.y + _grabber.getChildByName("bg").height > _track.height)
            {
               _grabber.y = _stageH - _grabber.getChildByName("bg").height;
            }
         };
         var s:int = 150;
         p = Math.ceil(e.stageY);
         if(p < this._grabber.y)
         {
            if(this._grabber.y < this._grabber.height)
            {
               TweenLite.to(this._grabber,this._ctime,{
                  "y":0,
                  "onComplete":reset,
                  "overwrite":1
               });
            }
            else
            {
               TweenLite.to(this._grabber,this._ctime,{
                  "y":"-150",
                  "onComplete":reset
               });
            }
            if(this._grabber.y < 0)
            {
               this._grabber.y = 0;
            }
         }
         else
         {
            if(this._grabber.y + this._grabber.height > this._stageH - this._grabber.height)
            {
               TweenLite.to(this._grabber,this._ctime,{
                  "y":this._stageH - this._grabber.height,
                  "onComplete":reset,
                  "overwrite":1
               });
            }
            else
            {
               TweenLite.to(this._grabber,this._ctime,{
                  "y":"150",
                  "onComplete":reset
               });
            }
            if(this._grabber.y + this._grabber.getChildByName("bg").height > this._track.height)
            {
               this._grabber.y = this._stageH - this._grabber.getChildByName("bg").height;
            }
         }
         this._grabber.addEventListener(Event.ENTER_FRAME,this.scrollContent,false,0,true);
      }
      
      private function onAddedToStage(param1:Event) : void
      {
         LevelManager.stage.addEventListener(Event.MOUSE_LEAVE,this.stopScroll);
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_WHEEL,this.mouseWheelListener);
         LevelManager.stage.addEventListener(Event.RESIZE,this.onStageResize,false,0,true);
         LevelManager.stage.addEventListener(MouseEvent.MOUSE_UP,this.onUpListener,false,0,true);
         this._grabber.addEventListener(MouseEvent.MOUSE_DOWN,this.onDownListener,false,0,true);
         this._grabber.buttonMode = true;
         this._track.addEventListener(MouseEvent.CLICK,this.onTrackClick,false,0,true);
         removeEventListener(Event.ADDED_TO_STAGE,this.onAddedToStage);
      }
      
      public function destory() : void
      {
         LevelManager.stage.removeEventListener(Event.MOUSE_LEAVE,this.stopScroll);
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_WHEEL,this.mouseWheelListener);
         LevelManager.stage.removeEventListener(Event.RESIZE,this.onStageResize);
         LevelManager.stage.removeEventListener(MouseEvent.MOUSE_UP,this.onUpListener);
         this._grabber.removeEventListener(MouseEvent.MOUSE_DOWN,this.onDownListener);
         this._track.removeEventListener(MouseEvent.CLICK,this.onTrackClick);
      }
      
      private function onStageResize(param1:Event) : void
      {
         this.adjustSize();
      }
   }
}
