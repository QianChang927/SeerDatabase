package com.robot.app2.control.DiamondTask2022.view
{
   import com.robot.app2.control.DiamondTask.view.GoodIcon;
   import com.robot.app2.control.DiamondTask2022.DiamondTask2022Event;
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskLivenessData;
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskLivenessGiftData;
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskRoutineData;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.uic.UIScrollBar;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DiamondTaskRoutineComponent extends Sprite implements IDiamondTask2022Component
   {
       
      
      protected var routineType:int;
      
      protected var GiftCount:int;
      
      protected var livenessData:DiamondTaskLivenessData;
      
      protected var routineDataArr:Array;
      
      protected var _ui:MovieClip;
      
      protected var _taskPanelMC:Sprite;
      
      protected var _scrollBar:UIScrollBar;
      
      protected var taskLineArr:Array;
      
      protected var tipMc:MovieClip;
      
      protected var livenessBarMc:MovieClip;
      
      protected const IconOffset:Array = [2,2];
      
      protected const TaskPanelX:Number = 160;
      
      protected const TaskPanelY:Number = 80;
      
      protected const TaskPanelWidth:Number = 520;
      
      protected const TaskPanelHeight:Number = 455;
      
      private var curShowTipIdx:int = -1;
      
      private var isShow:Boolean = false;
      
      protected var livenessPoints:Array;
      
      private const TaskPriority:Array = [1,2,0];
      
      public function DiamondTaskRoutineComponent(param1:int, param2:ByteArray)
      {
         var _loc5_:DiamondTaskRoutineData = null;
         this.routineDataArr = [];
         this.taskLineArr = [];
         this.livenessPoints = [1,5,9,13,17,21];
         super();
         this.routineType = param1;
         this.livenessData = new DiamondTaskLivenessData(this.routineType,param2);
         var _loc3_:int = param2.readInt();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = new DiamondTaskRoutineData(this.routineType,param2);
            this.routineDataArr.push(_loc5_);
            _loc4_++;
         }
         this.routineDataArr.sort(this.sortRoutineData);
         this.GiftCount = DiamondTaskLivenessData.GiftCount[param1];
      }
      
      public function loadPanel() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("update/diamondTask2022/DiamondTaskRoutineUI"),function(param1:MovieClip):void
         {
            _ui = param1;
            initUI();
            addChild(_ui);
            show();
         });
      }
      
      protected function initUI() : void
      {
         var _loc4_:DiamondTaskLivenessGiftData = null;
         var _loc5_:DiamondTaskLineUI = null;
         this._taskPanelMC = new Sprite();
         this._taskPanelMC.x = this.TaskPanelX;
         this._taskPanelMC.y = this.TaskPanelY;
         var _loc1_:Shape = new Shape();
         _loc1_.graphics.beginFill(65280,1);
         _loc1_.graphics.drawRect(this.TaskPanelX,this.TaskPanelY,this.TaskPanelX + this.TaskPanelWidth,this.TaskPanelHeight);
         this._ui.addChild(_loc1_);
         this._taskPanelMC.mask = _loc1_;
         this._ui.addChild(this._taskPanelMC);
         this._scrollBar = new UIScrollBar(this._ui.bar.slider,this._ui.bar.track,50,this._ui.bar.upBtn,this._ui.bar.downBtn);
         this._scrollBar.wheelObject = this._ui;
         this._ui.bar.slider.height = 200 * 7 / this.routineDataArr.length;
         this._scrollBar.totalLength = 13 * this.routineDataArr.length - 32;
         this._scrollBar.wheelObject = this._taskPanelMC;
         this._scrollBar.upDateScroll();
         this._ui.curLivenessTxt.text = this.livenessData.getLiveness();
         this.tipMc = this._ui.tipMc;
         this.tipMc.gotoAndStop(1);
         this.tipMc.visible = false;
         this._ui.setChildIndex(this.tipMc,this._ui.numChildren - 1);
         this.livenessBarMc = this._ui.livenessBar;
         this.livenessBarMc.gotoAndStop(this.calLivenessGiftBarFrame());
         var _loc2_:int = 1;
         while(_loc2_ <= this.GiftCount)
         {
            _loc4_ = this.livenessData.getGiftData(_loc2_ - 1);
            this._ui["giftMc_" + _loc2_].gotoAndStop(_loc4_.giftState == 0 ? 2 : 1);
            this._ui["giftBtnMc_" + _loc2_].gotoAndStop(_loc4_.giftState + 1);
            this._ui["giftRequireTxt_" + _loc2_].text = _loc4_.giftLimit;
            _loc2_++;
         }
         var _loc3_:int = 0;
         while(_loc3_ < this.routineDataArr.length)
         {
            (_loc5_ = new DiamondTaskLineUI(this.routineDataArr[_loc3_])).y = _loc3_ * 60;
            _loc5_.x = 0;
            this._taskPanelMC.addChild(_loc5_);
            this.taskLineArr.push(_loc5_);
            _loc3_++;
         }
      }
      
      protected function onScrollMove(param1:MouseEvent = null) : void
      {
         var _loc2_:int = int(this._scrollBar.index);
         this._taskPanelMC.y = this.TaskPanelY - _loc2_ * 5;
      }
      
      protected function onUIClick(param1:*) : void
      {
         var _loc3_:String = null;
         var _loc4_:int = 0;
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "getGiftBtn":
               _loc3_ = String(param1.target.parent.name);
               _loc4_ = int(_loc3_.split("_")[1]);
               this.dispatchEvent(new DiamondTask2022Event(DiamondTask2022Event.GetLivenessGift,this.routineType,_loc4_ + (this.routineType == 2 ? 100 : 0),[this.livenessData.getGiftData(_loc4_ - 1).diamond]));
         }
      }
      
      protected function onGiftOver(param1:*) : void
      {
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc2_:String = String(param1.currentTarget.name);
         var _loc3_:int = int(_loc2_.split("_")[1]);
         if(this.curShowTipIdx != _loc3_)
         {
            this.curShowTipIdx = _loc3_;
            this.tipMc.x = 540;
            this.tipMc.y = this._ui["giftMc_" + this.curShowTipIdx].y;
            this.tipMc.gotoAndStop(this.curShowTipIdx == this.GiftCount ? 2 : 1);
            this.tipMc.visible = true;
            var _loc4_:Array = this.livenessData.getGiftData(this.curShowTipIdx - 1).rewardArr;
            var _loc5_:int = this.livenessData.getGiftData(this.curShowTipIdx - 1).diamond;
            var _loc6_:int = 1;
            while(_loc6_ <= 4)
            {
               if(_loc6_ <= _loc4_.length)
               {
                  _loc7_ = int(_loc4_[_loc6_ - 1].split("_")[1]);
                  _loc8_ = int(_loc4_[_loc6_ - 1].split("_")[2]);
                  this.tipMc["icon_" + _loc6_].visible = true;
                  this.tipMc["iconBg_" + _loc6_].visible = true;
                  this.tipMc["cnt_" + _loc6_].visible = true;
                  this.tipMc["nameTxt_" + _loc6_].visible = true;
                  DisplayUtil.removeAllChild(this.tipMc["icon_" + _loc6_]);
                  this.tipMc["icon_" + _loc6_].addChild(new GoodIcon(_loc7_,0.8,this.IconOffset));
                  this.tipMc["cnt_" + _loc6_].text = this.translateNum(_loc8_);
                  this.tipMc["nameTxt_" + _loc6_].text = ItemXMLInfo.getItemInfo(_loc7_).Name;
               }
               else if(_loc5_ > 0)
               {
                  this.tipMc["icon_" + _loc6_].visible = true;
                  this.tipMc["iconBg_" + _loc6_].visible = true;
                  this.tipMc["cnt_" + _loc6_].visible = true;
                  this.tipMc["nameTxt_" + _loc6_].visible = true;
                  DisplayUtil.removeAllChild(this.tipMc["icon_" + _loc6_]);
                  this.tipMc["icon_" + _loc6_].addChild(new GoodIcon(5,1,this.IconOffset));
                  this.tipMc["cnt_" + _loc6_].text = _loc5_.toString();
                  this.tipMc["nameTxt_" + _loc6_].text = "钻石";
                  _loc5_ = 0;
               }
               else
               {
                  this.tipMc["icon_" + _loc6_].visible = false;
                  this.tipMc["iconBg_" + _loc6_].visible = false;
                  this.tipMc["cnt_" + _loc6_].visible = false;
                  this.tipMc["nameTxt_" + _loc6_].visible = false;
               }
               _loc6_++;
            }
            return;
         }
      }
      
      protected function onGiftOut(param1:*) : void
      {
         this.tipMc.visible = false;
         this.curShowTipIdx = -1;
      }
      
      public function show() : void
      {
         var _loc1_:int = 0;
         var _loc2_:DiamondTaskLineUI = null;
         if(this.isShow)
         {
            return;
         }
         if(this._ui)
         {
            this.isShow = true;
            this._ui.visible = true;
            this._ui.addEventListener(MouseEvent.CLICK,this.onUIClick);
            this._scrollBar.addEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
            this._scrollBar.index = 0;
            _loc1_ = 1;
            while(_loc1_ <= this.GiftCount)
            {
               this._ui["giftMc_" + _loc1_].addEventListener(MouseEvent.MOUSE_OVER,this.onGiftOver);
               this._ui["giftMc_" + _loc1_].addEventListener(MouseEvent.MOUSE_OUT,this.onGiftOut);
               _loc1_++;
            }
            for each(_loc2_ in this.taskLineArr)
            {
               _loc2_.show();
            }
         }
      }
      
      public function update(param1:ByteArray) : void
      {
         this.livenessData.updateData(param1);
         var _loc2_:int = param1.readInt();
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            this.routineDataArr[_loc3_].updateData(param1);
            _loc3_++;
         }
         this.routineDataArr.sort(this.sortRoutineData);
         this.updateUI();
      }
      
      private function updateUI() : void
      {
         var _loc3_:DiamondTaskLivenessGiftData = null;
         if(!this._ui)
         {
            this.loadPanel();
            return;
         }
         this._ui.curLivenessTxt.text = this.livenessData.getLiveness();
         this.livenessBarMc.gotoAndStop(this.calLivenessGiftBarFrame());
         var _loc1_:int = 1;
         while(_loc1_ <= this.GiftCount)
         {
            _loc3_ = this.livenessData.getGiftData(_loc1_ - 1);
            this._ui["giftMc_" + _loc1_].gotoAndStop(_loc3_.giftState == 0 ? 2 : 1);
            this._ui["giftBtnMc_" + _loc1_].gotoAndStop(_loc3_.giftState + 1);
            this._ui["giftRequireTxt_" + _loc1_].text = _loc3_.giftLimit;
            _loc1_++;
         }
         var _loc2_:int = 0;
         while(_loc2_ < this.routineDataArr.length)
         {
            this.taskLineArr[_loc2_].updateUI(this.routineDataArr[_loc2_]);
            _loc2_++;
         }
      }
      
      public function hide() : void
      {
         var _loc1_:DiamondTaskLineUI = null;
         var _loc2_:int = 0;
         if(this._ui)
         {
            this.isShow = false;
            this._ui.visible = false;
            this._ui.removeEventListener(MouseEvent.CLICK,this.onUIClick);
            _loc2_ = 1;
            while(_loc2_ <= this.GiftCount)
            {
               this._ui["giftMc_" + _loc2_].removeEventListener(MouseEvent.MOUSE_OVER,this.onGiftOver);
               this._ui["giftMc_" + _loc2_].removeEventListener(MouseEvent.MOUSE_OUT,this.onGiftOut);
               _loc2_++;
            }
            this._scrollBar.removeEventListener(MouseEvent.MOUSE_MOVE,this.onScrollMove);
         }
         for each(_loc1_ in this.taskLineArr)
         {
            _loc1_.hide();
         }
      }
      
      public function destroy() : void
      {
         var _loc1_:DiamondTaskLineUI = null;
         this.hide();
         if(this._scrollBar)
         {
            this._scrollBar.destroy();
         }
         for each(_loc1_ in this.taskLineArr)
         {
            _loc1_.destroy();
         }
         this._ui = null;
      }
      
      public function showRedPoint() : Boolean
      {
         var _loc1_:DiamondTaskRoutineData = null;
         if(this.livenessData.hasUngot())
         {
            return true;
         }
         for each(_loc1_ in this.routineDataArr)
         {
            if(_loc1_.getCurState() == 1)
            {
               return true;
            }
         }
         return false;
      }
      
      private function calLivenessGiftBarFrame() : int
      {
         var _loc1_:int = this.livenessData.getCurLivenessGiftProgress();
         if(_loc1_ == 0)
         {
            return 0;
         }
         if(_loc1_ == this.GiftCount)
         {
            return this.livenessPoints[this.GiftCount - 1];
         }
         var _loc2_:int = int(this.livenessPoints[_loc1_ - 1]);
         var _loc3_:int = this.livenessData.getGiftData(_loc1_).giftLimit - this.livenessData.getGiftData(_loc1_ - 1).giftLimit;
         var _loc4_:int = this.livenessData.getLiveness() - this.livenessData.getGiftData(_loc1_ - 1).giftLimit;
         var _loc5_:int = this.livenessPoints[_loc1_] - this.livenessPoints[_loc1_ - 1];
         var _loc6_:int = _loc4_ * _loc5_ / Number(_loc3_);
         return _loc2_ + _loc6_;
      }
      
      private function sortRoutineData(param1:DiamondTaskRoutineData, param2:DiamondTaskRoutineData) : int
      {
         var _loc3_:int = int(this.TaskPriority[param1.getCurState()]);
         var _loc4_:int = int(this.TaskPriority[param2.getCurState()]);
         if(_loc3_ > _loc4_)
         {
            return -1;
         }
         if(_loc3_ < _loc4_)
         {
            return 1;
         }
         return param1.getTaskId() > param2.getTaskId() ? 1 : -1;
      }
      
      protected function translateNum(param1:int, param2:String = "W") : String
      {
         if(param1 >= 10000)
         {
            return param1 / 10000 + param2;
         }
         return param1.toString();
      }
   }
}
