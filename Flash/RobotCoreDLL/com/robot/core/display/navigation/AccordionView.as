package com.robot.core.display.navigation
{
   import com.robot.core.display.events.AccordionEvent;
   import flash.display.DisplayObject;
   import flash.display.Graphics;
   import flash.display.MovieClip;
   import flash.events.Event;
   import gs.TweenLite;
   import gs.easing.Bounce;
   
   public class AccordionView extends MovieClip implements IListView
   {
       
      
      private var __contentContainer:MovieClip;
      
      private var _direction:String;
      
      private var _items:Array;
      
      private var _itemViewClass:Class;
      
      private var _model:XMLList;
      
      private var _previousItem:com.robot.core.display.navigation.IAccordionItemView;
      
      private var _selectedIndex:int;
      
      private var _spacing:Number;
      
      public function AccordionView(param1:Number = 0)
      {
         super();
         this.__contentContainer = this.getChildByName("_contentContainer") as MovieClip || this;
         this._selectedIndex = -1;
         this._direction = "down";
         this._items = [];
         this.spacing = param1;
      }
      
      public function createBG() : void
      {
         var _loc1_:Graphics = this.graphics;
         _loc1_.beginFill(16711680);
         _loc1_.drawRect(0,0,this.width,this.height);
         _loc1_.endFill();
      }
      
      public function get model() : XMLList
      {
         return this._model;
      }
      
      public function set model(param1:XMLList) : void
      {
         this._model = param1;
         this._setContent();
      }
      
      public function get itemViewClass() : Class
      {
         return this._itemViewClass;
      }
      
      public function set itemViewClass(param1:Class) : void
      {
         this._itemViewClass = param1;
      }
      
      public function set spacing(param1:Number) : void
      {
         if(param1 < 0)
         {
            throw new Error("AccordionView only suppports a positive number for it\'s spacing.");
         }
         this._spacing = param1;
         this.selectedIndex = this.selectedIndex;
      }
      
      public function get spacing() : Number
      {
         return this._spacing;
      }
      
      public function get numItems() : Number
      {
         return this._items.length;
      }
      
      public function set direction(param1:String) : void
      {
         this._direction = param1;
      }
      
      public function get direction() : String
      {
         return this._direction;
      }
      
      public function set selectedIndex(param1:int) : void
      {
         this._previousItem = this._items[this._selectedIndex];
         this._selectedIndex = param1;
         if(this.selectedIndex == -1)
         {
            this.closeAll();
         }
         else
         {
            this._positionItems();
         }
         this.dispatchEvent(new Event(Event.CHANGE,true,false));
      }
      
      public function get selectedIndex() : int
      {
         return this._selectedIndex;
      }
      
      public function closeAll() : void
      {
         var _loc2_:com.robot.core.display.navigation.IAccordionItemView = null;
         var _loc3_:Number = NaN;
         var _loc1_:int = 0;
         while(_loc1_ < this.numItems)
         {
            _loc2_ = this._items[_loc1_] as com.robot.core.display.navigation.IAccordionItemView;
            _loc3_ = _loc1_ * (_loc2_.minimumHeight + this.spacing);
            _loc2_.close();
            this.moveItem(_loc2_,_loc3_,_loc1_);
            _loc1_++;
         }
      }
      
      public function showItemAt(param1:int) : void
      {
         this.selectedIndex = param1;
      }
      
      protected function moveItem(param1:com.robot.core.display.navigation.IAccordionItemView, param2:Number, param3:uint) : void
      {
         var obj:AccordionView = null;
         var item:com.robot.core.display.navigation.IAccordionItemView = param1;
         var position:Number = param2;
         var childIndex:uint = param3;
         obj = this;
         TweenLite.to(item,0.3,{
            "y":position,
            "ease":Bounce.easeOut,
            "onComplete":function():void
            {
               if(childIndex == obj.numChildren - 1)
               {
                  obj.dispatchEvent(new AccordionEvent(AccordionEvent.CHANGEEND));
               }
            }
         });
      }
      
      private function _setContent() : void
      {
         var _loc3_:com.robot.core.display.navigation.IAccordionItemView = null;
         this.addEventListener(AccordionEvent.OPEN,this._accordionEventHandler);
         this.addEventListener(AccordionEvent.CLOSE,this._accordionEventHandler);
         var _loc1_:int = this._model.length();
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = new this._itemViewClass();
            _loc3_.model = this._model[_loc2_];
            _loc3_.y = _loc2_ * (_loc3_.minimumHeight + this.spacing);
            this.__contentContainer.addChild(_loc3_ as DisplayObject);
            this._items[_loc2_] = _loc3_;
            _loc2_++;
         }
      }
      
      private function _accordionEventHandler(param1:AccordionEvent) : void
      {
         var _loc2_:com.robot.core.display.navigation.IAccordionItemView = param1.target as com.robot.core.display.navigation.IAccordionItemView;
         var _loc3_:Number = this._items.indexOf(_loc2_);
         if(_loc3_ == this.selectedIndex)
         {
            this.selectedIndex = -1;
         }
         else
         {
            this.selectedIndex = _loc3_;
         }
         this.dispatchEvent(new Event(Event.CHANGE,true,false));
      }
      
      private function _positionItems() : void
      {
         var _loc4_:com.robot.core.display.navigation.IAccordionItemView = null;
         var _loc5_:Number = NaN;
         var _loc1_:Number = 0;
         var _loc2_:com.robot.core.display.navigation.IAccordionItemView = this._items[this.selectedIndex];
         var _loc3_:int = 0;
         while(_loc3_ < this.numItems)
         {
            _loc4_ = this._items[_loc3_] as com.robot.core.display.navigation.IAccordionItemView;
            if(this._direction == "down")
            {
               if(_loc3_ <= this.selectedIndex)
               {
                  _loc1_ = _loc3_ * (_loc4_.minimumHeight + this.spacing);
               }
               else if(_loc3_ == this.selectedIndex + 1)
               {
                  _loc1_ += _loc2_.maximumHeight + this.spacing;
               }
               else if(_loc3_ > this.selectedIndex + 1)
               {
                  _loc1_ += _loc4_.minimumHeight + this.spacing;
               }
            }
            else
            {
               _loc5_ = this.selectedIndex * (_loc4_.minimumHeight + this.spacing) - (_loc2_.maximumHeight - _loc2_.minimumHeight + this.spacing);
               if(_loc3_ > this.selectedIndex)
               {
                  _loc1_ = _loc3_ * (_loc4_.minimumHeight + this.spacing);
               }
               else if(_loc3_ == this.selectedIndex)
               {
                  _loc1_ = _loc5_ + this.spacing;
               }
               else if(_loc3_ < this.selectedIndex)
               {
                  _loc1_ = _loc5_ + this.spacing - (this.selectedIndex - _loc3_) * (_loc4_.minimumHeight + this.spacing);
               }
            }
            this.moveItem(_loc4_,_loc1_,_loc3_);
            if(this._previousItem)
            {
               this._previousItem.close();
               this._previousItem = null;
            }
            if(_loc2_ == _loc4_)
            {
               _loc2_.open();
            }
            _loc3_++;
         }
      }
   }
}
