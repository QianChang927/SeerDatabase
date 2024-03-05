package com.robot.core.ui.itemTip
{
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.event.CountermarkEvent;
   import com.robot.core.info.userItem.CountermarkInfo;
   import com.robot.core.info.userItem.CountermarkType;
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
   
   public class CountermarkItemGrid
   {
       
      
      private const DRAG_MIN_DISTANCE:int = 10;
      
      public var useNewStyle:Boolean = false;
      
      private var _info:CountermarkInfo;
      
      private var _markIcon:MovieClip;
      
      private var _grid:MovieClip;
      
      private var _bg:Sprite;
      
      private var _tf:TextField;
      
      private var _isMouseEnabled:Boolean;
      
      private var _isDragEnabled:Boolean;
      
      private var _originX:Number;
      
      private var _originY:Number;
      
      private var _showName:Boolean = false;
      
      private var id:int;
      
      private var showTO:int;
      
      public function CountermarkItemGrid(param1:CountermarkInfo, param2:MovieClip, param3:Boolean = true, param4:Boolean = false)
      {
         super();
         this._info = param1;
         this._grid = param2;
         this._isMouseEnabled = param3;
         this._isDragEnabled = param4;
      }
      
      public function show(param1:Boolean = false) : void
      {
         this._showName = param1;
         if(this._markIcon)
         {
            this.destroyIcon();
         }
         if(this._info)
         {
            this.loadIcon();
         }
      }
      
      private function loadIcon() : void
      {
         ResourceManager.getResource(CountermarkXMLInfo.getIconURL(this._info.markID),function(param1:MovieClip):void
         {
            if(_info == null)
            {
               return;
            }
            init(param1);
         });
      }
      
      private function init(param1:MovieClip) : void
      {
         var _loc3_:String = null;
         var _loc4_:String = null;
         var _loc5_:String = null;
         if(!this._grid || !param1)
         {
            this.destroy();
            return;
         }
         this._markIcon = param1;
         var _loc2_:Number = 0.9;
         if(!CountermarkXMLInfo.isUniversalMark(this._info.markID))
         {
            _loc2_ = 0.8;
         }
         this._originX = this._markIcon.x;
         this._originY = this._markIcon.y;
         this._markIcon.buttonMode = true;
         this._markIcon.mouseChildren = false;
         if(this.useNewStyle)
         {
            this.setAlignAndScale(this._markIcon,this._grid.mintMc,_loc2_);
            this._grid.mintMc.addChild(this._markIcon);
            _loc3_ = CountermarkItemTip.getColorName(this._info.markID);
            _loc4_ = String(_loc3_.split(">")[0]);
            _loc5_ = CountermarkXMLInfo.getDes(this._info.markID);
            if(this._grid.mintNameTxt)
            {
               if(_loc5_.length > "一二三四五六七".length)
               {
                  this._grid.mintNameTxt.htmlText = _loc4_ + ">" + _loc5_.substr(0,"一二三四五六七".length) + "\r" + _loc5_.substr("一二三四五六七".length) + "</font>";
               }
               else
               {
                  this._grid.mintNameTxt.htmlText = CountermarkItemTip.getColorName(this._info.markID);
               }
            }
            if(this._grid.mintLevelTxt)
            {
               this._grid.mintLevelTxt.visible = true;
               if(CountermarkXMLInfo.isUniversalMark(this._info.markID))
               {
                  this._grid.mintLevelTxt.text = "Lv." + CountermarkXMLInfo.getCurrentGrade(this._info.markID,this._info.adjArray);
               }
               else
               {
                  this._grid.mintLevelTxt.visible = false;
               }
            }
         }
         else
         {
            this.setAlignAndScale(this._markIcon,this._grid,_loc2_);
            this._grid.addChild(this._markIcon);
            this.showName();
         }
         this.addEvents();
      }
      
      private function showName() : void
      {
         var _loc1_:String = null;
         if(!this._showName)
         {
            return;
         }
         if(CountermarkXMLInfo.getType(this._info.markID) == CountermarkType.MARK_IS_UNIVERSAL && !CountermarkXMLInfo.isExclusive(this._info.markID))
         {
            _loc1_ = CountermarkXMLInfo.getDes(this._info.markID);
            if(_loc1_.length > "全能刻印才".length)
            {
               return;
            }
            this.createBg();
            this.createTf();
         }
      }
      
      private function createBg() : void
      {
         var _loc1_:Sprite = new Sprite();
         _loc1_.graphics.clear();
         _loc1_.graphics.beginFill(0,0.7);
         _loc1_.graphics.drawRoundRect(0,0,this._grid.width,16,2,2);
         _loc1_.graphics.endFill();
         _loc1_.x = 0;
         _loc1_.y = 0;
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
         _loc1_.y = 0;
         _loc1_.width = this._grid.width;
         _loc1_.height = this._grid.height;
         _loc1_.htmlText = CountermarkItemTip.getColorName(this._info.markID);
         this._grid.addChild(_loc1_);
         this._tf = _loc1_;
      }
      
      private function setAlignAndScale(param1:MovieClip, param2:MovieClip, param3:Number = 1) : void
      {
         var _loc4_:Number = param2.width * param3 / param1.width;
         var _loc5_:Number = param2.height * param3 / param1.height;
         param1.scaleX = param1.scaleY = Math.min(_loc4_,_loc5_);
         param1.x = (param2.width - param1.width) / 2;
         param1.y = (param2.height - param1.height) / 2;
      }
      
      private function addEvents() : void
      {
         if(this._isMouseEnabled && !this._isDragEnabled)
         {
            this._markIcon.addEventListener(MouseEvent.CLICK,this.onMarkClick);
         }
         this._markIcon.addEventListener(MouseEvent.ROLL_OVER,this.onMarkOver);
         this._markIcon.addEventListener(MouseEvent.ROLL_OUT,this.onMarkOut);
         if(this._isDragEnabled)
         {
            this._markIcon.addEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
            this._markIcon.addEventListener(MouseEvent.MOUSE_UP,this.onMouseUp);
         }
      }
      
      private function removeEvents(param1:Boolean = false) : void
      {
         if(!this._markIcon)
         {
            return;
         }
         if(this._isMouseEnabled && !this._isDragEnabled || param1)
         {
            this._markIcon.removeEventListener(MouseEvent.CLICK,this.onMarkClick);
         }
         this._markIcon.removeEventListener(MouseEvent.ROLL_OVER,this.onMarkOver);
         this._markIcon.removeEventListener(MouseEvent.ROLL_OUT,this.onMarkOut);
         if(this._isDragEnabled || param1)
         {
            this._markIcon.removeEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
            this._markIcon.removeEventListener(MouseEvent.MOUSE_UP,this.onMouseUp);
         }
      }
      
      private function onMouseDown(param1:MouseEvent) : void
      {
         this.onMarkOut(null);
         this._markIcon.startDrag();
         this._markIcon.removeEventListener(MouseEvent.ROLL_OVER,this.onMarkOver);
         this._markIcon.removeEventListener(MouseEvent.ROLL_OUT,this.onMarkOut);
         EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.GRID_DRAG_BEGIN,this.instance));
      }
      
      private function onMouseUp(param1:MouseEvent) : void
      {
         this._markIcon.stopDrag();
         var _loc2_:Point = this._grid.localToGlobal(new Point(this._originX,this._originY));
         if(Math.sqrt(Math.pow(this._markIcon.x - _loc2_.x,2) + Math.pow(this._markIcon.y - _loc2_.y,2)) <= this.DRAG_MIN_DISTANCE)
         {
            if(this._isMouseEnabled)
            {
               EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.GRID_CLICK,this.instance));
               this.onMarkOut(null);
            }
         }
         else
         {
            this._markIcon.addEventListener(MouseEvent.ROLL_OVER,this.onMarkOver);
            this._markIcon.addEventListener(MouseEvent.ROLL_OUT,this.onMarkOut);
            EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.GRID_DRAG_END,this.instance));
         }
         if(this.useNewStyle)
         {
            this._grid.mintMc.addChild(this._markIcon);
         }
         else
         {
            this._grid.addChild(this._markIcon);
            if(Boolean(this._tf) && Boolean(this._bg))
            {
               this._grid.swapChildren(this._markIcon,this._tf);
               this._grid.swapChildren(this._markIcon,this._bg);
            }
         }
         this._markIcon.x = this._originX;
         this._markIcon.y = this._originY;
      }
      
      private function onMarkClick(param1:MouseEvent) : void
      {
         param1.stopImmediatePropagation();
         EventManager.dispatchEvent(new CountermarkEvent(CountermarkEvent.GRID_CLICK,this.instance));
         this.onMarkOut(null);
      }
      
      private function onMarkOver(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this.id = setTimeout(function():void
         {
            clearTimeout(id);
            CountermarkItemTip.show(instance);
            showTO = setTimeout(function():void
            {
               clearTimeout(showTO);
               CountermarkItemTip.destroy();
            },10000);
         },500);
      }
      
      private function onMarkOut(param1:MouseEvent) : void
      {
         clearTimeout(this.id);
         clearTimeout(this.showTO);
         CountermarkItemTip.destroy();
      }
      
      private function destroyIcon(param1:Boolean = false) : void
      {
         this.removeEvents(param1);
         DisplayUtil.removeForParent(this._markIcon);
         this._markIcon = null;
         if(!this.useNewStyle)
         {
            DisplayUtil.removeForParent(this._bg);
            DisplayUtil.removeForParent(this._tf);
            this._bg = null;
            this._tf = null;
         }
      }
      
      public function destroy() : void
      {
         this.destroyIcon(true);
         this._grid = null;
         this._info = null;
      }
      
      public function get markIcon() : MovieClip
      {
         return this._markIcon;
      }
      
      public function get grid() : MovieClip
      {
         return this._grid;
      }
      
      public function get info() : CountermarkInfo
      {
         return this._info;
      }
      
      public function set info(param1:CountermarkInfo) : void
      {
         this._info = param1;
      }
      
      public function get instance() : CountermarkItemGrid
      {
         return this;
      }
   }
}
