package com.robot.core.ui
{
   import com.robot.core.uic.UIScrollBar;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import org.taomee.events.DynamicEvent;
   
   public class VScrollerBoxNoMaskUi extends EventDispatcher
   {
       
      
      private var initWidth:Number;
      
      private var initHeight:Number;
      
      private var scollerbar:UIScrollBar;
      
      private var container:DisplayObjectContainer;
      
      private var needScoll:Boolean;
      
      private var allData:Array;
      
      private var objStr:String;
      
      public function VScrollerBoxNoMaskUi(param1:Number, param2:Number, param3:DisplayObjectContainer)
      {
         super();
         this.initWidth = param1;
         this.initHeight = param2;
         this.container = param3;
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
         }
      }
      
      protected function onScrollMove(param1:MouseEvent = null) : void
      {
         var _loc2_:Array = this.allData.slice(this.scollerbar.index * this.container.numChildren,(this.scollerbar.index + 1) * this.container.numChildren);
         this.visibleItem(_loc2_);
      }
      
      public function updateScoll(param1:Array, param2:String) : void
      {
         this.allData = param1;
         this.objStr = param2;
         if(this.scollerbar)
         {
            this.container.parent["bar"].visible = Math.max(0,Math.ceil(this.allData.length / this.container.numChildren)) > 1;
            this.scollerbar.totalLength = Math.max(0,Math.ceil(this.allData.length / this.container.numChildren));
            this.scollerbar.index = 0;
            this.onScrollMove();
         }
      }
      
      public function clearContainer() : void
      {
      }
      
      public function visibleItem(param1:Array) : void
      {
         var _loc4_:DisplayObject = null;
         var _loc2_:Array = [];
         var _loc3_:int = 0;
         while(_loc3_ < this.container.numChildren)
         {
            _loc4_ = this.container.getChildAt(_loc3_);
            if(_loc3_ < param1.length)
            {
               _loc4_.visible = true;
               _loc4_[this.objStr] = param1[_loc3_];
               _loc2_.push(_loc4_);
            }
            else
            {
               _loc4_.visible = false;
            }
            _loc3_++;
         }
         if(_loc2_.length)
         {
            dispatchEvent(new DynamicEvent("vScrollerVisibleChange",_loc2_));
         }
      }
      
      public function destroy() : void
      {
         this.container = null;
         this.allData = null;
      }
   }
}
