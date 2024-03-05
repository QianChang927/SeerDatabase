package com.robot.app2.control.DiamondTask2022.view
{
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskLivenessData;
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskLivenessGiftData;
   import com.robot.app2.control.DiamondTask2022.data.DiamondTaskRetrieveData;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.DiamondTask2022XMLInfo;
   import com.robot.core.config.xml.HelpTipXMLInfo;
   import com.robot.core.uic.UIScrollBar;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.manager.ResourceManager;
   
   public class DiamondTaskRetrieveComponent extends Sprite implements IDiamondTask2022Component
   {
       
      
      protected var routineType:int = 1;
      
      protected var retrieveData:DiamondTaskRetrieveData;
      
      protected var _ui:MovieClip;
      
      protected var _taskPanelMC:Sprite;
      
      protected var _scrollBar:UIScrollBar;
      
      protected var retrieveLineArr:Array;
      
      protected const TaskPanelX:Number = 160;
      
      protected const TaskPanelY:Number = 80;
      
      protected const TaskPanelWidth:Number = 520;
      
      protected const TaskPanelHeight:Number = 455;
      
      private var isShow:Boolean = false;
      
      public function DiamondTaskRetrieveComponent(param1:int, param2:ByteArray)
      {
         this.retrieveLineArr = [];
         super();
         this.routineType = param1;
         this.retrieveData = new DiamondTaskRetrieveData(param2);
      }
      
      public function loadPanel() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("update/diamondTask2022/DiamondTaskRetrieveUI"),function(param1:MovieClip):void
         {
            _ui = param1;
            initUI();
            addChild(_ui);
            show();
         });
      }
      
      protected function initUI() : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:XML = null;
         var _loc5_:DiamondRetrieveLineUI = null;
         this._taskPanelMC = new Sprite();
         this._taskPanelMC.x = this.TaskPanelX;
         this._taskPanelMC.y = this.TaskPanelY;
         var _loc1_:Shape = new Shape();
         _loc1_.graphics.beginFill(65280,1);
         _loc1_.graphics.drawRect(this.TaskPanelX,this.TaskPanelY,this.TaskPanelX + this.TaskPanelWidth,this.TaskPanelHeight);
         this._ui.addChild(_loc1_);
         this._taskPanelMC.mask = _loc1_;
         this._ui.addChild(this._taskPanelMC);
         this._ui.bar.slider.visible = false;
         this._ui.bar.track.visible = false;
         this._ui.bar.upBtn.visible = false;
         this._ui.bar.downBtn.visible = false;
         if(this.retrieveData.isInLimit())
         {
            _loc2_ = 0;
            _loc3_ = 0;
            while(_loc3_ < DiamondTaskLivenessData.GiftCount[1])
            {
               if(!this.retrieveData.isGot(_loc3_))
               {
                  _loc4_ = DiamondTask2022XMLInfo.getDailyGiftInfo(_loc3_ + 1);
                  (_loc5_ = new DiamondRetrieveLineUI(1 + _loc3_,new DiamondTaskLivenessGiftData(_loc4_),this.retrieveData)).y = _loc2_ * 60;
                  _loc5_.x = 0;
                  this._taskPanelMC.addChild(_loc5_);
                  this.retrieveLineArr.push(_loc5_);
                  _loc2_++;
                  this._ui.noRetrieveFlag.visible = false;
               }
               else
               {
                  this.retrieveLineArr.push(null);
               }
               _loc3_++;
            }
         }
         else
         {
            this._ui.noRetrieveFlag.visible = true;
         }
         this._ui.retrieveTip.visible = false;
         try
         {
            this._ui.retrieveTip.wordTxt.htmlText = HelpTipXMLInfo.getHelpTipDesc(99);
         }
         catch(e:*)
         {
         }
         this._ui.setChildIndex(this._ui.retrieveTip,this._ui.numChildren - 1);
         this._ui.retrieveRecordTxt.text = this.retrieveData.getRetrieveTime() + "/" + this.retrieveData.retrieveLimit;
      }
      
      protected function onScrollMove(param1:MouseEvent = null) : void
      {
         var _loc2_:int = int(this._scrollBar.index);
         this._taskPanelMC.y = this.TaskPanelY - (_loc2_ - 1) * 5;
      }
      
      protected function onUIClick(param1:*) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "closeRetrieveTip":
               this._ui.retrieveTip.visible = false;
               break;
            case "retrieveTipBtn":
               this._ui.retrieveTip.visible = true;
         }
      }
      
      public function update(param1:ByteArray) : void
      {
         this.retrieveData.updateData(param1);
         this.updateUI();
      }
      
      protected function updateUI() : void
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:DiamondRetrieveLineUI = null;
         if(!this._ui)
         {
            this.loadPanel();
            return;
         }
         this._ui.retrieveRecordTxt.text = this.retrieveData.getRetrieveTime() + "/" + this.retrieveData.retrieveLimit;
         if(this.retrieveData.isInLimit())
         {
            _loc1_ = 0;
            while(_loc1_ < DiamondTaskLivenessData.GiftCount[1])
            {
               if(this.retrieveData.isGot(_loc1_))
               {
                  if(this.retrieveLineArr[_loc1_])
                  {
                     this.retrieveLineArr[_loc1_].hide();
                     this.retrieveLineArr[_loc1_].destroy();
                     this.retrieveLineArr[_loc1_] = null;
                  }
               }
               _loc1_++;
            }
            this._ui.noRetrieveFlag.visible = true;
            _loc2_ = 0;
            _loc3_ = 0;
            while(_loc3_ < this.retrieveLineArr.length)
            {
               if(this.retrieveLineArr[_loc3_] != null)
               {
                  this.retrieveLineArr[_loc3_].y = _loc2_ * 60;
                  this.retrieveLineArr[_loc3_].updateUI(this.retrieveData);
                  _loc2_++;
                  this._ui.noRetrieveFlag.visible = false;
               }
               _loc3_++;
            }
         }
         else
         {
            for each(_loc4_ in this.retrieveLineArr)
            {
               if(_loc4_)
               {
                  _loc4_.hide();
               }
            }
            this.retrieveLineArr = [];
            this._ui.noRetrieveFlag.visible = true;
         }
      }
      
      public function show() : void
      {
         var _loc1_:DiamondRetrieveLineUI = null;
         if(this.isShow)
         {
            return;
         }
         if(this._ui)
         {
            this.isShow = true;
            this._ui.visible = true;
            this._ui.addEventListener(MouseEvent.CLICK,this.onUIClick);
            for each(_loc1_ in this.retrieveLineArr)
            {
               if(_loc1_)
               {
                  _loc1_.show();
               }
            }
            if(this._ui.displayMc)
            {
               this._ui.displayMc.gotoAndPlay(1);
            }
         }
      }
      
      public function hide() : void
      {
         var _loc1_:DiamondRetrieveLineUI = null;
         if(this._ui)
         {
            this.isShow = false;
            this._ui.visible = false;
            this._ui.removeEventListener(MouseEvent.CLICK,this.onUIClick);
            for each(_loc1_ in this.retrieveLineArr)
            {
               if(_loc1_)
               {
                  _loc1_.hide();
               }
            }
            if(this._ui.displayMc)
            {
               this._ui.displayMc.gotoAndStop(1);
            }
         }
      }
      
      public function destroy() : void
      {
         var _loc1_:DiamondRetrieveLineUI = null;
         this.hide();
         for each(_loc1_ in this.retrieveLineArr)
         {
            if(_loc1_)
            {
               _loc1_.destroy();
            }
         }
         this._ui = null;
      }
      
      public function showRedPoint() : Boolean
      {
         return false;
      }
   }
}
