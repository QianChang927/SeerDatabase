package com.robot.core.ui.chat
{
   import com.robot.core.uic.UIScrollBar;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import org.taomee.events.DynamicEvent;
   
   public class VScrollerBoxUi extends EventDispatcher
   {
       
      
      private var initWidth:Number;
      
      private var initHeight:Number;
      
      private var maskUi:Shape;
      
      private var contentWidth:Number;
      
      private var contentHeight:Number;
      
      private var scollerbar:UIScrollBar;
      
      private var container:DisplayObjectContainer;
      
      private var boxOy:Number;
      
      private var needScoll:Boolean;
      
      public function VScrollerBoxUi(param1:Number, param2:Number, param3:DisplayObjectContainer)
      {
         super();
         this.initWidth = param1;
         this.initHeight = param2;
         this.container = param3;
         this.boxOy = this.container.y;
         this.maskUi = new Shape();
         this.maskUi.graphics.beginFill(16777215);
         this.maskUi.graphics.drawRect(0,0,param1,param2);
         this.maskUi.graphics.endFill();
         this.maskUi.x = this.container.x;
         this.maskUi.y = this.container.y;
         this.container.mask = this.maskUi;
         param3.parent.addChild(this.maskUi);
         param3.addEventListener(MouseEvent.MOUSE_WHEEL,this.wheelHandle);
         if(param3.parent["bar"])
         {
            this.scollerbar = new UIScrollBar(param3.parent["bar"]["slider"],param3.parent["bar"]["track"],1,param3.parent["bar"]["upArrow"],param3.parent["bar"]["downArrow"]);
            this.scollerbar.wheelObject = param3.parent;
            this.scollerbar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         }
      }
      
      private function wheelHandle(param1:MouseEvent) : void
      {
         if(this.needScoll)
         {
            if(this.scollerbar)
            {
               this.scollerbar.index -= param1.delta;
            }
            else
            {
               this.container.y += param1.delta;
               if(this.container.y > this.boxOy)
               {
                  this.container.y = this.boxOy;
               }
               if(this.container.y < this.initHeight - this.contentHeight)
               {
                  this.container.y = this.initHeight - this.contentHeight;
               }
               this.visibleItem();
            }
         }
      }
      
      protected function onScrollMove(param1:MouseEvent = null) : void
      {
         if(this.needScoll)
         {
            this.container.y = this.boxOy - this.scollerbar.index;
            if(this.container.y > this.boxOy)
            {
               this.container.y = this.boxOy;
            }
         }
         else
         {
            this.container.y = this.boxOy;
         }
         this.visibleItem();
      }
      
      public function updateScoll(param1:Boolean = true) : void
      {
         var _loc2_:Rectangle = this.container.getBounds(this.container);
         this.contentWidth = _loc2_.width;
         this.contentHeight = _loc2_.height;
         this.needScoll = this.contentHeight > this.initHeight;
         (this.container as MovieClip).graphics.clear();
         (this.container as MovieClip).graphics.beginFill(16777215,0.01);
         (this.container as MovieClip).graphics.drawRect(0,0,_loc2_.width,_loc2_.height);
         (this.container as MovieClip).graphics.endFill();
         if(this.scollerbar)
         {
            this.container.parent["bar"].visible = this.needScoll;
            this.scollerbar.totalLength = Math.max(0,int(this.contentHeight - this.initHeight));
            if(param1)
            {
               this.scollerbar.index = Math.max(0,int(this.contentHeight - this.initHeight));
            }
            else
            {
               this.scollerbar.index = 0;
            }
         }
         else
         {
            if(this.needScoll)
            {
               if(param1)
               {
                  this.container.y = this.initHeight - this.contentHeight;
               }
               else
               {
                  this.container.y = this.boxOy;
               }
            }
            else
            {
               this.container.y = this.boxOy;
            }
            this.visibleItem();
         }
      }
      
      public function clearContainer() : void
      {
         (this.container as MovieClip).graphics.clear();
      }
      
      public function visibleItem() : void
      {
         var _loc3_:DisplayObject = null;
         var _loc4_:Rectangle = null;
         var _loc5_:Rectangle = null;
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         while(_loc2_ < this.container.numChildren)
         {
            _loc3_ = this.container.getChildAt(_loc2_);
            _loc4_ = _loc3_.getBounds(this.container);
            if((_loc5_ = new Rectangle(-this.container.x,-this.container.y,this.initWidth,this.initHeight)).intersects(_loc4_))
            {
               _loc3_.visible = true;
               _loc1_.push(_loc3_);
            }
            else
            {
               _loc3_.visible = false;
            }
            _loc2_++;
         }
         if(_loc1_.length)
         {
            dispatchEvent(new DynamicEvent("vScrollerVisibleChange",_loc1_));
         }
      }
      
      public function destroy() : void
      {
         if(this.maskUi)
         {
            this.maskUi.graphics.clear();
            if(this.maskUi.parent)
            {
               this.maskUi.parent.removeChild(this.maskUi);
            }
            this.maskUi = null;
         }
         this.container.mask = null;
         this.container = null;
      }
   }
}
