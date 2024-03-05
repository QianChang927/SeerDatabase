package com.robot.core.display.navigation
{
   import com.robot.core.display.events.AccordionEvent;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import gs.easing.Bounce;
   
   public class AccordionItemView extends MovieClip implements IAccordionItemView
   {
       
      
      private var __content:DisplayObject;
      
      private var __button:InteractiveObject;
      
      private var __mask:DisplayObject;
      
      private var _mouseEventType:String;
      
      private var _maximumHeight:Number;
      
      private var _minimumHeight:Number;
      
      private var _model:Object;
      
      private var _open:Boolean;
      
      public function AccordionItemView()
      {
         super();
      }
      
      public function set model(param1:Object) : void
      {
         this._model = param1;
         this._init();
      }
      
      public function get model() : Object
      {
         return this._model;
      }
      
      public function get maximumHeight() : Number
      {
         return this._maximumHeight;
      }
      
      public function set maximumHeight(param1:Number) : void
      {
         this._maximumHeight = param1;
      }
      
      public function set minimumHeight(param1:Number) : void
      {
         this._minimumHeight = param1;
      }
      
      public function get minimumHeight() : Number
      {
         return this._minimumHeight;
      }
      
      public function set mouseEventType(param1:String) : void
      {
         if(this._mouseEventType)
         {
            this.__button.removeEventListener(this._mouseEventType,this._openCloseHandler);
         }
         this._mouseEventType = param1;
         this.__button.addEventListener(param1,this._openCloseHandler);
      }
      
      public function open() : void
      {
         TweenLite.to(this.getMask(),0.3,{
            "height":this.maximumHeight,
            "ease":Bounce.easeOut
         });
      }
      
      public function close() : void
      {
         TweenLite.to(this.getMask(),0.3,{
            "height":this.minimumHeight,
            "ease":Bounce.easeOut
         });
      }
      
      protected function getMask() : DisplayObject
      {
         return this.__mask;
      }
      
      protected function getButton() : InteractiveObject
      {
         return this.__button;
      }
      
      private function _init() : void
      {
         var _loc1_:int = 0;
         var _loc2_:Shape = null;
         var _loc3_:Shape = null;
         this.buttonMode = true;
         this.__button = this.getChildByName("_button") as InteractiveObject;
         if(!this.__button)
         {
            throw new Error("AccordionItemView is missing a button!");
         }
         this.__mask = this.getChildByName("_mask") as Sprite;
         if(!this.__mask)
         {
            _loc1_ = 0;
            while(_loc1_ < this.numChildren)
            {
               _loc2_ = this.getChildAt(_loc1_) as Shape;
               if(_loc2_)
               {
                  this.__mask = _loc2_;
                  break;
               }
               _loc1_++;
            }
         }
         this.__content = this.getChildByName("_content") as DisplayObject;
         this.maximumHeight = this.height;
         this.minimumHeight = this.__button.height;
         this.mouseEventType = MouseEvent.CLICK;
         this._open = false;
         if(!this.__mask)
         {
            _loc3_ = new Shape();
            _loc3_.graphics.beginFill(0);
            _loc3_.graphics.drawRect(0,0,this.__content.width,this.__button.height);
            _loc3_.graphics.endFill();
            this.addChild(_loc3_);
            this.__mask = _loc3_;
         }
         else
         {
            this.__mask.height = this.__button.height;
            this.__mask.width = this.__content.width;
         }
         this.mask = this.__mask;
      }
      
      private function _openCloseHandler(param1:MouseEvent) : void
      {
         this._open = !this._open;
         if(this._open)
         {
            this.dispatchEvent(new AccordionEvent(AccordionEvent.OPEN,true));
         }
         else
         {
            this.dispatchEvent(new AccordionEvent(AccordionEvent.CLOSE,true));
         }
      }
   }
}
