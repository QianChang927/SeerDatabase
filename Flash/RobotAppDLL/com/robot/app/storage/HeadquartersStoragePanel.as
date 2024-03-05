package com.robot.app.storage
{
   import com.robot.core.event.FitmentEvent;
   import com.robot.core.manager.HeadquarterManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.UIPageBar;
   import com.robot.core.utils.DragTargetType;
   import com.robot.core.utils.SolidType;
   import flash.display.Bitmap;
   import flash.display.BitmapData;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import gs.TweenLite;
   import gs.easing.Expo;
   import org.taomee.events.DynamicEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HeadquartersStoragePanel extends Sprite
   {
      
      private static const MAX:int = 10;
      
      private static const TABID:Array = [4,5,1,11];
       
      
      private var _mainUI:Sprite;
      
      private var _listCon:Sprite;
      
      private var _closeBtn:SimpleButton;
      
      private var _dragBtn:SimpleButton;
      
      private var _dataList:Array;
      
      private var _dataLen:int;
      
      private var _isTween:Boolean = false;
      
      private var _pageBar:UIPageBar;
      
      private var _type:uint = 4;
      
      private var _currTab:MovieClip;
      
      public function HeadquartersStoragePanel()
      {
         var _loc3_:StorageListItem = null;
         var _loc4_:uint = 0;
         var _loc5_:MovieClip = null;
         super();
         this._mainUI = UIManager.getSprite("Storage_ToolBar");
         this._dragBtn = this._mainUI["dragBtn"];
         this._closeBtn = this._mainUI["closeBtn"];
         this._mainUI.mouseEnabled = false;
         addChild(this._mainUI);
         this._listCon = new Sprite();
         this._listCon.x = 62;
         this._listCon.y = 11;
         addChild(this._listCon);
         var _loc1_:int = 0;
         while(_loc1_ < MAX)
         {
            _loc3_ = new StorageListItem();
            _loc3_.x = (_loc3_.width + 8) * _loc1_;
            this._listCon.addChild(_loc3_);
            _loc1_++;
         }
         this._pageBar = new UIPageBar(this._mainUI["preBtn"],this._mainUI["nextBtn"],new TextField(),MAX);
         var _loc2_:int = 1;
         while(_loc2_ < 5)
         {
            _loc4_ = uint(TABID[_loc2_ - 1]);
            (_loc5_ = this._mainUI.getChildByName("tab_" + _loc2_.toString()) as MovieClip).buttonMode = true;
            _loc5_.mouseChildren = false;
            _loc5_.gotoAndStop(1);
            _loc5_.addEventListener(MouseEvent.CLICK,this.onTabClick);
            _loc5_.typeID = _loc4_;
            if(_loc2_ == 1)
            {
               this._currTab = _loc5_;
            }
            _loc2_++;
         }
         this._currTab.gotoAndStop(2);
         this._currTab.mouseEnabled = false;
         DepthManager.bringToTop(this._currTab);
      }
      
      public function show() : void
      {
         if(this._isTween)
         {
            return;
         }
         y = MainManager.getStageHeight();
         x = (MainManager.getStageWidth() - width) / 2;
         alpha = 1;
         LevelManager.appLevel.addChild(this);
         TweenLite.to(this,0.6,{
            "y":MainManager.getStageHeight() - height + 28,
            "ease":Expo.easeOut
         });
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onClose);
         this._dragBtn.addEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
         this._dragBtn.addEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
         this._pageBar.addEventListener(MouseEvent.CLICK,this.onProPage);
         HeadquarterManager.addEventListener(FitmentEvent.ADD_TO_STORAGE,this.onUnUsedFitment);
         HeadquarterManager.addEventListener(FitmentEvent.REMOVE_TO_STORAGE,this.onUnUsedFitment);
         HeadquarterManager.addEventListener(FitmentEvent.STORAGE_LIST,this.onUnUsedFitment);
         this.reItem();
      }
      
      public function hide() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onClose);
         this._dragBtn.removeEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
         this._dragBtn.removeEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
         this._pageBar.removeEventListener(MouseEvent.CLICK,this.onProPage);
         HeadquarterManager.removeEventListener(FitmentEvent.ADD_TO_STORAGE,this.onUnUsedFitment);
         HeadquarterManager.removeEventListener(FitmentEvent.REMOVE_TO_STORAGE,this.onUnUsedFitment);
         HeadquarterManager.removeEventListener(FitmentEvent.STORAGE_LIST,this.onUnUsedFitment);
         TweenLite.to(this,0.6,{
            "alpha":0,
            "onComplete":this.onFinishTween
         });
         this._isTween = true;
      }
      
      public function destroy() : void
      {
         this.hide();
         this._pageBar.destroy();
         this._pageBar = null;
         this._dataList = null;
         this._listCon = null;
         this._dragBtn = null;
         this._closeBtn = null;
         this._mainUI = null;
      }
      
      public function reItem() : void
      {
         var _loc3_:StorageListItem = null;
         this._dataList = HeadquarterManager.getUnUsedListForType(this._type);
         this._dataLen = this._dataList.length;
         this.clearItem();
         if(this._dataLen == 0)
         {
            return;
         }
         this._pageBar.totalLength = this._dataLen;
         var _loc1_:int = Math.min(MAX,this._dataLen);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = this._listCon.getChildAt(_loc2_) as StorageListItem;
            _loc3_.info = this._dataList[_loc2_ + this._pageBar.index];
            _loc3_.addEventListener(MouseEvent.MOUSE_DOWN,this.onItemDown);
            _loc2_++;
         }
      }
      
      private function clearItem() : void
      {
         var _loc3_:StorageListItem = null;
         var _loc1_:int = this._listCon.numChildren;
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            _loc3_ = this._listCon.getChildAt(_loc2_) as StorageListItem;
            _loc3_.removeEventListener(MouseEvent.MOUSE_DOWN,this.onItemDown);
            _loc3_.destroy();
            _loc2_++;
         }
      }
      
      private function onProPage(param1:DynamicEvent) : void
      {
         var _loc5_:StorageListItem = null;
         this.clearItem();
         var _loc2_:uint = param1.paramObject as uint;
         var _loc3_:int = Math.min(MAX,this._pageBar.totalLength - this._pageBar.index * MAX);
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            (_loc5_ = this._listCon.getChildAt(_loc4_) as StorageListItem).destroy();
            _loc5_.info = this._dataList[_loc4_ + this._pageBar.index * MAX];
            _loc5_.addEventListener(MouseEvent.MOUSE_DOWN,this.onItemDown);
            _loc4_++;
         }
      }
      
      private function onFinishTween() : void
      {
         this._isTween = false;
         DisplayUtil.removeForParent(this);
      }
      
      private function onClose(param1:MouseEvent) : void
      {
         this.hide();
      }
      
      private function onDragDown(param1:MouseEvent) : void
      {
         startDrag();
      }
      
      private function onDragUp(param1:MouseEvent) : void
      {
         stopDrag();
      }
      
      private function onItemDown(param1:MouseEvent) : void
      {
         var obj:Sprite;
         var item:StorageListItem = null;
         var p:Point = null;
         var bmd:BitmapData = null;
         var e:MouseEvent = param1;
         item = e.currentTarget as StorageListItem;
         if(item.info.type == SolidType.FRAME)
         {
            Alert.show("你确定换房型吗？",function():void
            {
               LevelManager.closeMouseEvent();
               HeadquarterManager.saveStyleType(item.info,function():void
               {
                  MapManager.refMap();
               });
            });
            return;
         }
         obj = item.obj as Sprite;
         if(obj)
         {
            if(item.info.unUsedCount > 1)
            {
               p = obj.localToGlobal(new Point());
               bmd = new BitmapData(obj.width,obj.height,true,0);
               bmd.draw(obj);
               obj = new Sprite();
               obj.addChild(new Bitmap(bmd));
               obj.x = p.x;
               obj.y = p.y;
            }
            HeadquarterManager.doDrag(obj,item.info,item,DragTargetType.STORAGE);
         }
      }
      
      private function onUnUsedFitment(param1:FitmentEvent) : void
      {
         this.reItem();
      }
      
      private function onTabClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         switch(_loc2_.typeID)
         {
            case TABID[0]:
               this._type = SolidType.PUT;
               break;
            case TABID[1]:
               this._type = SolidType.HANG;
               break;
            case TABID[2]:
               this._type = SolidType.FRAME;
               break;
            case TABID[3]:
               this._type = SolidType.SUPER;
         }
         this._currTab.gotoAndStop(1);
         DepthManager.bringToBottom(this._currTab);
         this._currTab.mouseEnabled = true;
         this._currTab = _loc2_;
         this._currTab.gotoAndStop(2);
         DepthManager.bringToTop(this._currTab);
         this._currTab.mouseEnabled = false;
         this._pageBar.index = 0;
         this.reItem();
      }
   }
}
