package com.robot.app.storage
{
   import com.robot.core.event.FitmentEvent;
   import com.robot.core.info.FitmentInfo;
   import com.robot.core.manager.FitmentManager;
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
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import gs.TweenLite;
   import gs.easing.Expo;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class StoragePanel extends Sprite
   {
      
      private static const MAX:int = 8;
      
      private static const TYPE_LIST:Array = [5,4,1,11];
       
      
      private var _mainUI:MovieClip;
      
      private var _listCon:Sprite;
      
      private var _dragBtn:SimpleButton;
      
      private var _dataList:Array;
      
      private var _dataLen:int;
      
      private var _isTween:Boolean = false;
      
      private var _pageBar:UIPageBar;
      
      private var _type:uint = 5;
      
      private var _currTab:MovieClip;
      
      private var _isShrink:Boolean = false;
      
      public function StoragePanel()
      {
         var _loc3_:StorageListItem = null;
         var _loc4_:uint = 0;
         var _loc5_:MovieClip = null;
         super();
         this._mainUI = UIManager.getMovieClip("Storage_ToolBar");
         this._dragBtn = this._mainUI["mc_0"]["dragBtn"];
         this._mainUI.mouseEnabled = false;
         addChild(this._mainUI);
         this._mainUI["mc_1"].visible = false;
         this._listCon = new Sprite();
         this._listCon.x = 0;
         this._listCon.y = 0;
         this._mainUI["mc_0"]["itemContainer"].addChild(this._listCon);
         var _loc1_:int = 0;
         while(_loc1_ < MAX)
         {
            _loc3_ = new StorageListItem();
            _loc3_.x = 57 + 90 * _loc1_;
            _loc3_.y = 30;
            this._listCon.addChild(_loc3_);
            _loc1_++;
         }
         this._pageBar = new UIPageBar(this._mainUI["mc_0"]["preBtn"],this._mainUI["mc_0"]["nextBtn"],new TextField(),MAX);
         var _loc2_:int = 1;
         while(_loc2_ < 5)
         {
            _loc4_ = uint(_loc2_ - 1);
            (_loc5_ = this._mainUI["mc_0"].getChildByName("tab_" + _loc2_.toString()) as MovieClip).buttonMode = true;
            _loc5_.mouseChildren = false;
            _loc5_.gotoAndStop(1);
            _loc5_.addEventListener(MouseEvent.CLICK,this.onTabClick);
            _loc5_.typeID = TYPE_LIST[_loc4_];
            if(StorageController.isTab3)
            {
               StorageController.isTab3 = false;
               if(_loc4_ == 1)
               {
                  this._currTab = _loc5_;
               }
            }
            else if(_loc4_ == 0)
            {
               this._currTab = _loc5_;
            }
            _loc2_++;
         }
         this._currTab.gotoAndStop(2);
         this._currTab.mouseEnabled = false;
      }
      
      private function onMainUIClick(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "saveBtn":
               this.hide();
               StorageController.dispatchEvent(new Event(Event.COMPLETE));
               break;
            case "closeBtn":
               Alert.show("是否取消当前基地装饰状态？",function():void
               {
                  hide();
                  StorageController.dispatchEvent(new Event(Event.CANCEL));
               });
               break;
            case "shrinkBtn":
               this._mainUI["mc_0"].visible = false;
               this._mainUI["mc_1"].visible = true;
               this.isShrink = true;
               break;
            case "showBtn":
               this._mainUI["mc_0"].visible = true;
               this._mainUI["mc_1"].visible = false;
               this.isShrink = false;
         }
      }
      
      public function get isShrink() : Boolean
      {
         return this._isShrink;
      }
      
      public function set isShrink(param1:Boolean) : void
      {
         this._isShrink = param1;
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
            "y":MainManager.getStageHeight() - 147,
            "ease":Expo.easeOut
         });
         this._mainUI.addEventListener(MouseEvent.CLICK,this.onMainUIClick);
         this._pageBar.addEventListener(MouseEvent.CLICK,this.onProPage);
         this._dragBtn.addEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
         this._dragBtn.addEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
         FitmentManager.addEventListener(FitmentEvent.ADD_TO_STORAGE,this.onUnUsedFitment);
         FitmentManager.addEventListener(FitmentEvent.REMOVE_TO_STORAGE,this.onUnUsedFitment);
         FitmentManager.addEventListener(FitmentEvent.STORAGE_LIST,this.onUnUsedFitment);
         this.reItem();
      }
      
      public function hide() : void
      {
         this._mainUI.removeEventListener(MouseEvent.CLICK,this.onMainUIClick);
         this._dragBtn.removeEventListener(MouseEvent.MOUSE_DOWN,this.onDragDown);
         this._dragBtn.removeEventListener(MouseEvent.MOUSE_UP,this.onDragUp);
         this._pageBar.removeEventListener(MouseEvent.CLICK,this.onProPage);
         FitmentManager.removeEventListener(FitmentEvent.ADD_TO_STORAGE,this.onUnUsedFitment);
         FitmentManager.removeEventListener(FitmentEvent.REMOVE_TO_STORAGE,this.onUnUsedFitment);
         FitmentManager.removeEventListener(FitmentEvent.STORAGE_LIST,this.onUnUsedFitment);
         TweenLite.to(this,0.6,{
            "alpha":0,
            "onComplete":this.onFinishTween
         });
         this._isTween = true;
      }
      
      public function get isTween() : Boolean
      {
         return this._isTween;
      }
      
      public function destroy() : void
      {
         this.hide();
         this._pageBar.destroy();
         this._pageBar = null;
         this._dataList = null;
         this._listCon = null;
         this._dragBtn = null;
         this._mainUI = null;
      }
      
      public function reItem() : void
      {
         var _loc3_:StorageListItem = null;
         this._dataList = FitmentManager.getUnUsedListForType(this._type);
         this._dataList.sort(this.sortFun);
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
      
      private function sortFun(param1:FitmentInfo, param2:FitmentInfo) : int
      {
         if(param1.id == 500746 || param1.id == 500742)
         {
            return -1;
         }
         if(param1.id == 500742 && param2.id == 500746)
         {
            return 1;
         }
         return 1;
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
               FitmentManager.saveRoomType(item.info,function():void
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
            FitmentManager.doDrag(obj,item.info,item.itemIconContainer,DragTargetType.STORAGE);
         }
      }
      
      private function onUnUsedFitment(param1:FitmentEvent) : void
      {
         this.reItem();
      }
      
      private function onTabClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         this._type = _loc2_.typeID;
         this._currTab.gotoAndStop(1);
         this._currTab.mouseEnabled = true;
         this._currTab = _loc2_;
         this._currTab.gotoAndStop(2);
         this._currTab.mouseEnabled = false;
         this._pageBar.index = 0;
         this.reItem();
      }
   }
}
