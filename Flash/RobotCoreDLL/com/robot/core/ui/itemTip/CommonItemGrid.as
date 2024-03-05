package com.robot.core.ui.itemTip
{
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class CommonItemGrid
   {
       
      
      private const DRAG_MIN_DISTANCE:int = 10;
      
      private var _info:SingleItemInfo;
      
      private var _itemIcon:MovieClip;
      
      private var _grid:MovieClip;
      
      private var _isMouseEnabled:Boolean;
      
      private var _isDragEnabled:Boolean;
      
      private var _originX:Number;
      
      private var _originY:Number;
      
      private var _containerName:String;
      
      private var id:int;
      
      private var showTO:int;
      
      public function CommonItemGrid(param1:SingleItemInfo, param2:MovieClip, param3:String = "mc", param4:Boolean = true, param5:Boolean = false)
      {
         super();
         this._info = param1;
         this._grid = param2;
         this._containerName = param3;
         this._isMouseEnabled = param4;
         this._isDragEnabled = param5;
      }
      
      public function show() : void
      {
         if(this._itemIcon)
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
         ResourceManager.getResource(ItemXMLInfo.getIconURL(this._info.itemID),function(param1:MovieClip):void
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
         if(!this._grid || !param1)
         {
            this.destroy();
            return;
         }
         this._itemIcon = param1;
         var _loc2_:Number = 0.9;
         this._originX = this._itemIcon.x;
         this._originY = this._itemIcon.y;
         this._itemIcon.buttonMode = true;
         this._itemIcon.mouseChildren = false;
         this.setAlignAndScale(this._itemIcon,this._grid[this._containerName],_loc2_);
         this._grid[this._containerName].addChild(this._itemIcon);
         this.addEvents();
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
         this._itemIcon.addEventListener(MouseEvent.ROLL_OVER,this.onItemOver);
         this._itemIcon.addEventListener(MouseEvent.ROLL_OUT,this.onItemOut);
      }
      
      private function removeEvents(param1:Boolean = false) : void
      {
         if(!this._itemIcon)
         {
            return;
         }
         this._itemIcon.removeEventListener(MouseEvent.ROLL_OVER,this.onItemOver);
         this._itemIcon.removeEventListener(MouseEvent.ROLL_OUT,this.onItemOut);
      }
      
      private function onItemOver(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this.id = setTimeout(function():void
         {
            clearTimeout(id);
            ItemInfoTip.show(_info);
            showTO = setTimeout(function():void
            {
               clearTimeout(showTO);
               ItemInfoTip.hide();
            },10000);
         },500);
      }
      
      private function onItemOut(param1:MouseEvent) : void
      {
         clearTimeout(this.id);
         clearTimeout(this.showTO);
         ItemInfoTip.hide();
      }
      
      private function destroyIcon(param1:Boolean = false) : void
      {
         this.removeEvents(param1);
         DisplayUtil.removeForParent(this._itemIcon);
         this._itemIcon = null;
      }
      
      public function destroy() : void
      {
         this.destroyIcon(true);
         this._grid = null;
         this._info = null;
      }
      
      public function get ItemIcon() : MovieClip
      {
         return this._itemIcon;
      }
      
      public function get grid() : MovieClip
      {
         return this._grid;
      }
      
      public function get info() : SingleItemInfo
      {
         return this._info;
      }
      
      public function set info(param1:SingleItemInfo) : void
      {
         this._info = param1;
      }
      
      public function get instance() : CommonItemGrid
      {
         return this;
      }
   }
}
