package com.robot.core.ui.itemTip
{
   import com.robot.core.config.xml.GemsXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.CountermarkEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.text.TextFormat;
   import flash.text.TextFormatAlign;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class CountermarkGemGrid
   {
       
      
      private const PATH:String = "countermark/gem/";
      
      private const DRAG_MIN_DISTANCE:int = 10;
      
      public var useNewStyle:Boolean;
      
      private var _item:SingleItemInfo;
      
      private var _gemIcon:MovieClip;
      
      private var _grid:MovieClip;
      
      private var _isMouseEnabled:Boolean;
      
      private var _isDragEnabled:Boolean;
      
      private var _originX:Number;
      
      private var _originY:Number;
      
      private var _showNum:Boolean;
      
      private var _bg:Sprite;
      
      private var _tf:TextField;
      
      private var id:int;
      
      public function CountermarkGemGrid(param1:SingleItemInfo, param2:MovieClip, param3:Boolean = true, param4:Boolean = false)
      {
         super();
         this._item = param1;
         this._grid = param2;
         this._isMouseEnabled = param3;
         this._isDragEnabled = param4;
      }
      
      public function show(param1:Boolean = true) : void
      {
         this._showNum = param1;
         if(this._gemIcon)
         {
            this.destroyIcon();
         }
         this.loadIcon();
      }
      
      private function loadIcon() : void
      {
         ResourceManager.getResource(ItemXMLInfo.getIconURL(this.info.itemID),function(param1:MovieClip):void
         {
            if(!_grid || !param1)
            {
               return;
            }
            _gemIcon = param1;
            _gemIcon.mouseChildren = false;
            _gemIcon.buttonMode = true;
            _gemIcon.x = 0;
            _gemIcon.y = 0;
            if(useNewStyle)
            {
               _grid.gemMc.addChild(param1);
               setAlignAndScale(_grid.gemMc);
               if(_showNum)
               {
                  _grid.numTxt.text = "x" + _item.itemNum.toString();
                  _grid.attriTxt.text = GemsXMLInfo.getEffect(_item.itemID);
                  _grid.nameTxt.text = ItemXMLInfo.getName(_item.itemID);
               }
            }
            else
            {
               setAlignAndScale(_grid);
               _grid.addChild(param1);
               addItemNum();
            }
            addEvents();
         });
      }
      
      private function addItemNum() : void
      {
         if(!this._showNum)
         {
            return;
         }
         this.createBg();
         this.createTf();
      }
      
      private function createBg() : void
      {
         var _loc1_:Sprite = null;
         _loc1_ = new Sprite();
         _loc1_.graphics.clear();
         _loc1_.graphics.beginFill(0,0.7);
         _loc1_.graphics.drawRoundRect(0,0,this._grid.width,14,2,2);
         _loc1_.graphics.endFill();
         _loc1_.x = 0;
         _loc1_.y = this._grid.height * 0.65;
         this._grid.addChild(_loc1_);
         this._bg = _loc1_;
      }
      
      private function createTf() : void
      {
         var _loc1_:TextField = new TextField();
         var _loc2_:TextFormat = new TextFormat();
         _loc2_.align = TextFormatAlign.CENTER;
         _loc2_.size = 12;
         _loc1_.defaultTextFormat = _loc2_;
         _loc1_.mouseEnabled = false;
         _loc1_.textColor = 16777215;
         _loc1_.x = 0;
         _loc1_.y = this._grid.height * 0.65;
         _loc1_.width = this._grid.height;
         _loc1_.height = 30;
         _loc1_.text = this._item.itemNum.toString();
         this._grid.addChild(_loc1_);
         this._tf = _loc1_;
      }
      
      private function setAlignAndScale(param1:MovieClip) : void
      {
         var _loc2_:Number = param1.width * 0.9 / this._gemIcon.width;
         var _loc3_:Number = param1.height * 0.9 / this._gemIcon.height;
         this._gemIcon.scaleX = this._gemIcon.scaleY = Math.min(_loc2_,_loc3_);
         this._gemIcon.x = (param1.width - this._gemIcon.width) / 2;
         this._gemIcon.y = (param1.height - this._gemIcon.height) / 2;
         this._originX = this._gemIcon.x;
         this._originY = this._gemIcon.y;
      }
      
      private function destroyIcon() : void
      {
         this.removeEvents();
         DisplayUtil.removeForParent(this._gemIcon);
         DisplayUtil.removeForParent(this._bg);
         DisplayUtil.removeForParent(this._tf);
         this._gemIcon = null;
      }
      
      private function addEvents() : void
      {
         if(this._isMouseEnabled && !this._isDragEnabled)
         {
            this._gemIcon.addEventListener(MouseEvent.CLICK,this.onGemClick);
         }
         this._gemIcon.addEventListener(MouseEvent.MOUSE_OVER,this.onGemOver);
         this._gemIcon.addEventListener(MouseEvent.MOUSE_OUT,this.onGemOut);
         if(this._isDragEnabled)
         {
            this._gemIcon.addEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
            this._gemIcon.addEventListener(MouseEvent.MOUSE_UP,this.onMouseUp);
         }
      }
      
      private function removeEvents() : void
      {
         if(this._isMouseEnabled && !this._isDragEnabled && Boolean(this._gemIcon))
         {
            this._gemIcon.removeEventListener(MouseEvent.CLICK,this.onGemClick);
         }
         this._gemIcon.removeEventListener(MouseEvent.MOUSE_OVER,this.onGemOver);
         this._gemIcon.removeEventListener(MouseEvent.MOUSE_OUT,this.onGemOut);
         if(this._isDragEnabled)
         {
            this._gemIcon.removeEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
            this._gemIcon.removeEventListener(MouseEvent.MOUSE_UP,this.onMouseUp);
         }
      }
      
      private function onMouseDown(param1:MouseEvent) : void
      {
         this.onGemOut(null);
         this._originX = this._gemIcon.x;
         this._originY = this._gemIcon.y;
         this._gemIcon.startDrag();
         this._gemIcon.removeEventListener(MouseEvent.MOUSE_OVER,this.onGemOver);
         this._gemIcon.removeEventListener(MouseEvent.MOUSE_OUT,this.onGemOut);
         CountermarkEvent.GRID_DRAG_BEGIN;
         EventManager.dispatchEvent(new this.instance());
      }
      
      private function onMouseUp(param1:MouseEvent) : void
      {
         this._gemIcon.stopDrag();
         var _loc2_:Point = this._grid.localToGlobal(new Point(this._originX,this._originY));
         if(Math.sqrt(Math.pow(this._gemIcon.x - _loc2_.x,2) + Math.pow(this._gemIcon.y - _loc2_.y,2)) <= this.DRAG_MIN_DISTANCE)
         {
            if(this._isMouseEnabled)
            {
               EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.GRID_CLICK,this.instance));
            }
         }
         else
         {
            this._gemIcon.addEventListener(MouseEvent.MOUSE_OVER,this.onGemOver);
            this._gemIcon.addEventListener(MouseEvent.MOUSE_OUT,this.onGemOut);
            EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.GRID_DRAG_END,this.instance));
         }
         this._gemIcon.x = this._originX;
         this._gemIcon.y = this._originY;
         this._grid.addChild(this._gemIcon);
      }
      
      private function onGemClick(param1:MouseEvent) : void
      {
         param1.stopImmediatePropagation();
         EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.GRID_GEM_CLICK,this.instance));
      }
      
      private function onGemOver(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(ItemXMLInfo.getCatID(this._item.itemID) == 14)
         {
            return;
         }
         this.id = setTimeout(function():void
         {
            clearTimeout(id);
            ItemInfoTip.show(_item);
         },500);
      }
      
      private function onGemOut(param1:MouseEvent) : void
      {
         clearTimeout(this.id);
         ItemInfoTip.hide();
      }
      
      public function destroy() : void
      {
         if(this._gemIcon)
         {
            this.destroyIcon();
         }
         this._grid = null;
      }
      
      public function get info() : SingleItemInfo
      {
         return this._item;
      }
      
      public function get gemIcon() : MovieClip
      {
         return this._gemIcon;
      }
      
      public function get grid() : MovieClip
      {
         return this._grid;
      }
      
      private function get instance() : CountermarkGemGrid
      {
         return this;
      }
   }
}
