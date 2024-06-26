package com.robot.app2.systems.mapObject
{
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Matrix;
   import flash.geom.Point;
   import flash.geom.Rectangle;
   
   public class InteractivePNG extends Sprite
   {
       
      
      protected var _threshold:uint = 128;
      
      protected var _transparentMode:Boolean = false;
      
      protected var _interactivePngActive:Boolean = false;
      
      protected var _bitmapHit:Boolean = false;
      
      protected var _basePoint:Point;
      
      protected var _mousePoint:Point;
      
      protected var _bitmapForHitDetection:Bitmap;
      
      protected var _buttonModeCache:Number = NaN;
      
      public function InteractivePNG()
      {
         super();
         this._basePoint = new Point();
         this._mousePoint = new Point();
         this.enableInteractivePNG();
      }
      
      public function get interactivePngActive() : Boolean
      {
         return this._interactivePngActive;
      }
      
      public function get alphaTolerance() : uint
      {
         return this._threshold;
      }
      
      public function set alphaTolerance(param1:uint) : void
      {
         this._threshold = Math.min(255,param1);
      }
      
      override public function set hitArea(param1:Sprite) : void
      {
         if(param1 != null && super.hitArea == null)
         {
            this.disableInteractivePNG();
         }
         else if(param1 == null && super.hitArea != null)
         {
            this.enableInteractivePNG();
         }
         super.hitArea = param1;
      }
      
      override public function set mouseEnabled(param1:Boolean) : void
      {
         if(isNaN(this._buttonModeCache) == false)
         {
            this.disableInteractivePNG();
         }
         super.mouseEnabled = param1;
      }
      
      public function drawBitmapHitArea(param1:Event = null) : void
      {
         var _loc2_:* = this._bitmapForHitDetection != null;
         if(_loc2_)
         {
            try
            {
               removeChild(this._bitmapForHitDetection);
            }
            catch(e:Error)
            {
            }
         }
         var _loc3_:Rectangle = getBounds(this);
         var _loc4_:Number = _loc3_.left;
         var _loc5_:Number = _loc3_.top;
         var _loc6_:BitmapData = new BitmapData(_loc3_.width,_loc3_.height,true,0);
         this._bitmapForHitDetection = new Bitmap(_loc6_);
         this._bitmapForHitDetection.name = "interactivePngHitMap";
         this._bitmapForHitDetection.visible = false;
         var _loc7_:Matrix;
         (_loc7_ = new Matrix()).translate(-_loc4_,-_loc5_);
         _loc6_.draw(this,_loc7_);
         addChildAt(this._bitmapForHitDetection,0);
         this._bitmapForHitDetection.x = _loc4_;
         this._bitmapForHitDetection.y = _loc5_;
      }
      
      public function disableInteractivePNG() : void
      {
         this.deactivateMouseTrap();
         removeEventListener(Event.ENTER_FRAME,this.trackMouseWhileInBounds);
         try
         {
            removeChild(this._bitmapForHitDetection);
         }
         catch(e:Error)
         {
         }
         this._bitmapForHitDetection == null;
         super.mouseEnabled = true;
         this._transparentMode = false;
         this.setButtonModeCache(true);
         this._bitmapHit = false;
         this._interactivePngActive = false;
      }
      
      public function enableInteractivePNG() : void
      {
         this.disableInteractivePNG();
         if(hitArea != null)
         {
            return;
         }
         this.activateMouseTrap();
         this._interactivePngActive = true;
      }
      
      protected function activateMouseTrap() : void
      {
         addEventListener(MouseEvent.ROLL_OVER,this.captureMouseEvent,false,10000,true);
         addEventListener(MouseEvent.MOUSE_OVER,this.captureMouseEvent,false,10000,true);
         addEventListener(MouseEvent.ROLL_OUT,this.captureMouseEvent,false,10000,true);
         addEventListener(MouseEvent.MOUSE_OUT,this.captureMouseEvent,false,10000,true);
         addEventListener(MouseEvent.MOUSE_MOVE,this.captureMouseEvent,false,10000,true);
      }
      
      protected function deactivateMouseTrap() : void
      {
         removeEventListener(MouseEvent.ROLL_OVER,this.captureMouseEvent);
         removeEventListener(MouseEvent.MOUSE_OVER,this.captureMouseEvent);
         removeEventListener(MouseEvent.ROLL_OUT,this.captureMouseEvent);
         removeEventListener(MouseEvent.MOUSE_OUT,this.captureMouseEvent);
         removeEventListener(MouseEvent.MOUSE_MOVE,this.captureMouseEvent);
      }
      
      protected function captureMouseEvent(param1:Event) : void
      {
         if(!this._transparentMode)
         {
            if(param1.type == MouseEvent.MOUSE_OVER || param1.type == MouseEvent.ROLL_OVER)
            {
               this.setButtonModeCache();
               this._transparentMode = true;
               super.mouseEnabled = false;
               addEventListener(Event.ENTER_FRAME,this.trackMouseWhileInBounds,false,10000,true);
               this.trackMouseWhileInBounds();
            }
         }
         if(!this._bitmapHit)
         {
            param1.stopImmediatePropagation();
         }
      }
      
      protected function trackMouseWhileInBounds(param1:Event = null) : void
      {
         if(this.bitmapHitTest() != this._bitmapHit)
         {
            this._bitmapHit = !this._bitmapHit;
            if(this._bitmapHit)
            {
               this.deactivateMouseTrap();
               this.setButtonModeCache(true,true);
               this._transparentMode = false;
               super.mouseEnabled = true;
            }
            else if(!this._bitmapHit)
            {
               this._transparentMode = true;
               super.mouseEnabled = false;
            }
         }
         var _loc2_:Point = this._bitmapForHitDetection.localToGlobal(this._mousePoint);
         if(hitTestPoint(_loc2_.x,_loc2_.y) == false)
         {
            removeEventListener(Event.ENTER_FRAME,this.trackMouseWhileInBounds);
            this._transparentMode = false;
            this.setButtonModeCache(true);
            super.mouseEnabled = true;
            this.activateMouseTrap();
         }
      }
      
      protected function bitmapHitTest() : Boolean
      {
         if(this._bitmapForHitDetection == null)
         {
            this.drawBitmapHitArea();
         }
         this._mousePoint.x = this._bitmapForHitDetection.mouseX;
         this._mousePoint.y = this._bitmapForHitDetection.mouseY;
         return this._bitmapForHitDetection.bitmapData.hitTest(this._basePoint,this._threshold,this._mousePoint);
      }
      
      protected function setButtonModeCache(param1:Boolean = false, param2:Boolean = false) : void
      {
         if(param1)
         {
            if(this._buttonModeCache == 1)
            {
               buttonMode = true;
            }
            if(!param2)
            {
               this._buttonModeCache = NaN;
            }
            return;
         }
         this._buttonModeCache = buttonMode == true ? 1 : 0;
         buttonMode = false;
      }
   }
}
