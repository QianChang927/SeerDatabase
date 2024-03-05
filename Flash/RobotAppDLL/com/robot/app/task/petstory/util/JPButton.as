package com.robot.app.task.petstory.util
{
   import flash.display.MovieClip;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   
   public class JPButton extends EventDispatcher
   {
       
      
      private var _res:MovieClip;
      
      public var name:String;
      
      public function JPButton(param1:MovieClip)
      {
         super();
         if(param1.totalFrames != 4)
         {
            throw new Error("你丢进来的对象要4种状态才可以");
         }
         this._res = param1;
         this.name = param1.name;
         this._res.stop();
         this._res.mouseChildren = false;
         this.addEvents();
      }
      
      public function addEvents() : void
      {
         this._res.buttonMode = true;
         this._res.addEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         this._res.addEventListener(MouseEvent.MOUSE_OVER,this.onMouseHandler);
         this._res.addEventListener(MouseEvent.MOUSE_OUT,this.onMouseHandler);
         this._res.addEventListener(MouseEvent.MOUSE_DOWN,this.onMouseHandler);
      }
      
      public function removeEvents() : void
      {
         this._res.buttonMode = false;
         this._res.removeEventListener(MouseEvent.CLICK,this.onMouseClickHandler);
         this._res.removeEventListener(MouseEvent.MOUSE_OVER,this.onMouseHandler);
         this._res.removeEventListener(MouseEvent.MOUSE_OUT,this.onMouseHandler);
         this._res.removeEventListener(MouseEvent.MOUSE_DOWN,this.onMouseHandler);
      }
      
      private function onMouseClickHandler(param1:MouseEvent) : void
      {
         this.dispatchEvent(param1);
      }
      
      public function gotoAndStop(param1:uint) : void
      {
         this._res.gotoAndStop(param1);
      }
      
      public function set text(param1:String) : void
      {
         this._res.nameLabel.text = param1;
      }
      
      private function onMouseHandler(param1:MouseEvent) : void
      {
         switch(param1.type)
         {
            case MouseEvent.MOUSE_OVER:
               this._res.gotoAndStop(2);
               break;
            case MouseEvent.MOUSE_OUT:
               this._res.gotoAndStop(1);
               break;
            case MouseEvent.MOUSE_DOWN:
               this._res.gotoAndStop(3);
         }
      }
      
      public function get filters() : Array
      {
         return this._res.filters;
      }
      
      public function set filters(param1:Array) : void
      {
         this._res.filters = param1;
      }
      
      public function get mouseEnabled() : Boolean
      {
         return this._res.mouseEnabled;
      }
      
      public function set mouseEnabled(param1:Boolean) : void
      {
         this._res.mouseEnabled = param1;
      }
      
      public function get mouseChildren() : Boolean
      {
         return this._res.mouseChildren;
      }
      
      public function set mouseChildren(param1:Boolean) : void
      {
         this._res.mouseChildren = param1;
      }
      
      public function get visible() : Boolean
      {
         return this._res.visible;
      }
      
      public function set visible(param1:Boolean) : void
      {
         this._res.visible = param1;
      }
   }
}
