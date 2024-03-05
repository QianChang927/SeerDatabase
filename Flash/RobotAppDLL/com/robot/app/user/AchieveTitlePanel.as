package com.robot.app.user
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.info.AchieveTitleInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.StringUtil;
   
   public class AchieveTitlePanel
   {
       
      
      private var _ui:MovieClip;
      
      private var _titles:HashMap;
      
      private var _currList:Array;
      
      private var _allList:Array;
      
      private var _abilityList:Array;
      
      private var _currLab:int = 0;
      
      private var _selectTitle:int = -1;
      
      private var _titleScroll:UIScrollBar;
      
      private var _callBack:Function;
      
      private var _searchStr:String = "";
      
      private const SEARCH_TITLE:String = "搜索称号";
      
      private const LEN:int = 8;
      
      public function AchieveTitlePanel(param1:MovieClip, param2:Function)
      {
         this._currList = [];
         this._allList = [];
         this._abilityList = [];
         super();
         this._ui = param1;
         this._callBack = param2;
         this._ui.visible = false;
         this._titles = new HashMap();
         this.init();
         this.addEvent();
         MovieClip(this._ui["mcLabel_0"]).gotoAndStop(2);
         MovieClip(this._ui["mcLabel_1"]).gotoAndStop(1);
         CommonUI.setEnabled(this._ui["btnOk"],false,true);
         this._titleScroll = new UIScrollBar(this._ui["barBall"],this._ui["barBg"],this.LEN,this._ui["upBtn"],this._ui["downBtn"]);
         this._titleScroll.wheelObject = this._ui;
         this._titleScroll.addEventListener(MouseEvent.MOUSE_MOVE,this.onSptScroll);
      }
      
      private function onSptScroll(param1:MouseEvent) : void
      {
         this.updateSptItem(this._titleScroll.index);
      }
      
      public function show() : void
      {
         if(StringUtil.trim(this._ui["txtSearch"].text) == "")
         {
            this._ui["txtSearch"].text = this.SEARCH_TITLE;
         }
         this._ui.visible = true;
      }
      
      public function hide() : void
      {
         this._ui.visible = false;
      }
      
      private function init() : void
      {
         SocketConnection.sendWithCallback(CommandID.ACHIEVETITLELIST,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.ACHIEVETITLELIST,arguments.callee);
            var _loc3_:AchieveTitleInfo = param1.data as AchieveTitleInfo;
            var _loc4_:Array = _loc3_.titleArr;
            _allList.splice(0);
            _titles.add(0,"无称号");
            _allList.push(0);
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_.length)
            {
               _titles.add(_loc4_[_loc5_],AchieveXMLInfo.getTitle(_loc4_[_loc5_]));
               _allList.push(_loc4_[_loc5_]);
               if(AchieveXMLInfo.isAbilityTitle(_loc4_[_loc5_]))
               {
                  _abilityList.push(_loc4_[_loc5_]);
               }
               _loc5_++;
            }
            _currList = _allList;
            showTitles();
         });
      }
      
      private function showTitles() : void
      {
         this._titleScroll.totalLength = this._currList.length;
         this.updateSptItem(0);
      }
      
      private function updateSptItem(param1:uint) : void
      {
         var _loc4_:MovieClip = null;
         this.initItems();
         var _loc2_:int = int(this._currList.length);
         var _loc3_:int = 0;
         while(_loc3_ < this.LEN)
         {
            _loc4_ = this._ui["mcItem_" + _loc3_];
            if(param1 + _loc3_ < _loc2_)
            {
               _loc4_.mouseChildren = _loc4_.mouseEnabled = true;
               _loc4_.id = this._currList[param1 + _loc3_];
               _loc4_["txtTitle"].text = this._titles.getValue(this._currList[param1 + _loc3_]);
               if(MainManager.actorInfo.curTitle == _loc4_.id || this._selectTitle == _loc4_.id)
               {
                  _loc4_.gotoAndStop(3);
                  this._selectTitle = MainManager.actorInfo.curTitle;
               }
            }
            else
            {
               _loc4_.id = -1;
               _loc4_.mouseChildren = _loc4_.mouseEnabled = false;
               _loc4_.gotoAndStop(1);
            }
            _loc3_++;
         }
      }
      
      private function initItems() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:int = 0;
         while(_loc1_ < this.LEN)
         {
            _loc2_ = this._ui["mcItem_" + _loc1_];
            _loc2_["txtTitle"].text = "";
            _loc2_.id = 0;
            _loc2_.gotoAndStop(1);
            _loc1_++;
         }
      }
      
      private function addEvent() : void
      {
         var _loc2_:MovieClip = null;
         this._ui["btnClose"].addEventListener(MouseEvent.CLICK,this.onClose);
         this._ui["btnOk"].addEventListener(MouseEvent.CLICK,this.onOk);
         this._ui["mcLabel_0"].addEventListener(MouseEvent.CLICK,this.onSelectLabel);
         this._ui["mcLabel_1"].addEventListener(MouseEvent.CLICK,this.onSelectLabel);
         this._ui["txtSearch"].addEventListener(MouseEvent.CLICK,this.onSelectText);
         TextField(this._ui["txtSearch"]).addEventListener(Event.CHANGE,this.onTextChange);
         var _loc1_:int = 0;
         while(_loc1_ < this.LEN)
         {
            _loc2_ = this._ui["mcItem_" + _loc1_];
            _loc2_.addEventListener(MouseEvent.CLICK,this.onClickItem);
            _loc2_.addEventListener(MouseEvent.ROLL_OVER,this.onRollOver);
            _loc2_.addEventListener(MouseEvent.ROLL_OUT,this.onRollOut);
            _loc1_++;
         }
      }
      
      protected function onTextChange(param1:Event) : void
      {
         var _loc2_:Array = null;
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         var _loc6_:String = null;
         if(this._currLab == 0)
         {
            _loc2_ = this._allList;
         }
         else
         {
            _loc2_ = this._abilityList;
         }
         if(this._ui["txtSearch"].text == "")
         {
            this._currList = _loc2_;
            this.showTitles();
         }
         else
         {
            _loc3_ = String(StringUtil.trim(this._ui["txtSearch"].text));
            if(_loc3_.length > 0)
            {
               _loc4_ = [];
               _loc5_ = 0;
               while(_loc5_ < _loc2_.length)
               {
                  if((_loc6_ = String(this._titles.getValue(_loc2_[_loc5_]))).indexOf(_loc3_) >= 0)
                  {
                     _loc4_.push(_loc2_[_loc5_]);
                  }
                  _loc5_++;
               }
               this._currList = _loc4_;
               this.showTitles();
            }
         }
      }
      
      protected function onSelectText(param1:MouseEvent) : void
      {
         if(this._ui["txtSearch"].text == this.SEARCH_TITLE)
         {
            this._ui["txtSearch"].text = "";
         }
      }
      
      protected function onClickItem(param1:MouseEvent) : void
      {
         var _loc4_:MovieClip = null;
         var _loc2_:int = 0;
         while(_loc2_ < this.LEN)
         {
            (_loc4_ = this._ui["mcItem_" + _loc2_]).gotoAndStop(1);
            _loc2_++;
         }
         var _loc3_:MovieClip = param1.currentTarget as MovieClip;
         this._selectTitle = _loc3_.id;
         CommonUI.setEnabled(this._ui["btnOk"],true,false);
         _loc3_.gotoAndStop(3);
      }
      
      protected function onRollOver(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(this._selectTitle != _loc2_.id)
         {
            _loc2_.gotoAndStop(2);
         }
      }
      
      protected function onRollOut(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(!(this._selectTitle >= 0 && this._selectTitle == _loc2_.id))
         {
            _loc2_.gotoAndStop(1);
         }
      }
      
      private function onOk(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this._selectTitle >= 0 && this._selectTitle != MainManager.actorInfo.curTitle)
         {
            Alert.show("你确认要将当前称号换成" + TextFormatUtil.getRedTxt(this._titles.getValue(this._selectTitle)) + "吗？",function():void
            {
               SocketConnection.sendWithCallback(CommandID.SETTITLE,function(param1:SocketEvent):void
               {
                  var _loc2_:ByteArray = null;
                  if(param1.data)
                  {
                     _loc2_ = param1.data as ByteArray;
                     MainManager.actorInfo.curTitle = _loc2_.readUnsignedInt();
                     DebugTrace.show(MainManager.actorInfo.curTitle);
                  }
                  else
                  {
                     MainManager.actorInfo.curTitle = 0;
                  }
                  MainManager.actorModel.refreshTitle(MainManager.actorInfo.curTitle);
                  Alarm2.show("称号更换成功！");
                  _callBack();
               },_selectTitle);
            });
         }
      }
      
      private function onSelectLabel(param1:MouseEvent) : void
      {
         var _loc2_:int = int(String(param1.currentTarget.name).split("_")[1]);
         if(_loc2_ != this._currLab)
         {
            this._currLab = _loc2_;
            this._selectTitle = -1;
            CommonUI.setEnabled(this._ui["btnOk"],false,true);
            if(this._currLab == 0)
            {
               this._currList = this._allList;
               MovieClip(this._ui["mcLabel_0"]).gotoAndStop(2);
               MovieClip(this._ui["mcLabel_1"]).gotoAndStop(1);
            }
            else
            {
               this._currList = this._abilityList;
               MovieClip(this._ui["mcLabel_0"]).gotoAndStop(1);
               MovieClip(this._ui["mcLabel_1"]).gotoAndStop(2);
            }
            this.showTitles();
         }
      }
      
      private function onClose(param1:MouseEvent) : void
      {
         this.hide();
         param1.stopImmediatePropagation();
      }
      
      private function removeEvent() : void
      {
         var _loc2_:MovieClip = null;
         this._ui["btnClose"].removeEventListener(MouseEvent.CLICK,this.onClose);
         this._ui["btnOk"].removeEventListener(MouseEvent.CLICK,this.onOk);
         this._ui["mcLabel_0"].removeEventListener(MouseEvent.CLICK,this.onSelectLabel);
         this._ui["mcLabel_1"].removeEventListener(MouseEvent.CLICK,this.onSelectLabel);
         var _loc1_:int = 0;
         while(_loc1_ < this.LEN)
         {
            _loc2_ = this._ui["mcItem_" + _loc1_];
            _loc2_.removeEventListener(MouseEvent.CLICK,this.onClickItem);
            _loc2_.removeEventListener(MouseEvent.ROLL_OVER,this.onRollOver);
            _loc2_.removeEventListener(MouseEvent.ROLL_OUT,this.onRollOut);
            _loc1_++;
         }
      }
      
      private function dispose() : void
      {
         this._callBack = null;
         this._titles = null;
         this._currList = null;
         this._allList = null;
         this._abilityList = null;
         this._titleScroll.removeEventListener(MouseEvent.MOUSE_MOVE,this.onSptScroll);
         this._titleScroll.destroy();
         this._ui = null;
      }
   }
}
