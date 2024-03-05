package com.robot.app2.control.SeerBox
{
   import com.robot.app2.email.EmailController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SeerBoxSixPanel implements ISeerBoxSubPanel
   {
      
      private static const PAGE_SIZE:uint = 6;
       
      
      private var _xml:XML;
      
      private var _ui:MovieClip;
      
      private var content:MovieClip;
      
      private var isShow:Boolean = false;
      
      private var _currentPage:uint = 1;
      
      private var _total:uint;
      
      private var _count:uint;
      
      private var _emailListArray:Array;
      
      private var _selectedArray:Array;
      
      private var _isSelectedAll:Boolean;
      
      public function SeerBoxSixPanel()
      {
         this._emailListArray = [];
         this._selectedArray = [];
         super();
      }
      
      public function show() : void
      {
         StatManager.sendStat2014("1202推送盒子","点击邮件标签","2016运营活动");
         if(!this.content)
         {
            this.isShow = true;
            return;
         }
         (this._ui["body"] as MovieClip).addChild(this.content);
         this.updateUI();
      }
      
      public function init(param1:XML, param2:MovieClip) : void
      {
         var scName:String;
         var xml:XML = param1;
         var ui:MovieClip = param2;
         this._xml = xml;
         this._ui = ui;
         scName = this._xml.@res;
         if(scName == null)
         {
            scName = "SeerBoxSixPanel";
         }
         ResourceManager.getResource(ClientConfig.getAppResource("update/SeerBox/" + scName),function(param1:MovieClip):void
         {
            var _loc3_:MovieClip = null;
            content = param1;
            var _loc2_:int = 0;
            while(_loc2_ < PAGE_SIZE)
            {
               _loc3_ = content["itemMc_" + _loc2_];
               _loc3_["cbx"].buttonMode = true;
               _loc3_["cbx"].addEventListener(MouseEvent.CLICK,onComboBoxClick);
               _loc3_["titleTxt"].addEventListener(MouseEvent.CLICK,onEmailItemClick);
               _loc2_++;
            }
            content["prevBtn"].addEventListener(MouseEvent.CLICK,onPrevClick);
            content["nextBtn"].addEventListener(MouseEvent.CLICK,onNextClick);
            content["selectAllBtn"].addEventListener(MouseEvent.CLICK,onSelectAllClick);
            content["delBtn"].addEventListener(MouseEvent.CLICK,onDelClick);
            if(isShow)
            {
               show();
            }
         });
      }
      
      private function onComboBoxClick(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.parent.name);
         var _loc3_:int = int(_loc2_.substr(_loc2_.indexOf("_") + 1,1));
         var _loc4_:int;
         if((_loc4_ = this._selectedArray.indexOf(this._emailListArray[_loc3_].mId)) >= 0)
         {
            this.content[_loc2_]["cbx"].gotoAndStop(1);
            this._selectedArray.splice(_loc4_,1);
         }
         else
         {
            this.content[_loc2_]["cbx"].gotoAndStop(2);
            this._selectedArray.push(this._emailListArray[_loc3_].mId);
         }
      }
      
      private function onEmailItemClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var itemName:String = String(e.currentTarget.parent.name);
         var index:int = int(itemName.substr(itemName.indexOf("_") + 1,1));
         this.content["mouseChildren"] = this.content["mouseEnabled"] = false;
         SocketConnection.sendWithCallback(CommandID.MAIL_OPEN,function(param1:SocketEvent):void
         {
            content["mouseChildren"] = content["mouseEnabled"] = true;
            ModuleManager.showModule(ClientConfig.getAppModule("email/EmailInfoPanel"),"",{
               "emailInfo":param1.data,
               "currentPage":_currentPage
            });
         },this._emailListArray[index].mId);
      }
      
      private function onSelectAllClick(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         if(this._isSelectedAll)
         {
            this._isSelectedAll = false;
         }
         else
         {
            this._isSelectedAll = true;
         }
         this._selectedArray = [];
         if(this._isSelectedAll)
         {
            _loc2_ = 0;
            while(_loc2_ < this._count)
            {
               this._selectedArray.push(uint(this._emailListArray[_loc2_].mId));
               this.content["itemMc_" + _loc2_]["cbx"].gotoAndStop(2);
               _loc2_++;
            }
         }
         else
         {
            _loc3_ = 0;
            while(_loc3_ < this._count)
            {
               this.content["itemMc_" + _loc3_]["cbx"].gotoAndStop(1);
               _loc3_++;
            }
            this._selectedArray = [];
         }
      }
      
      private function onDelClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this._selectedArray.length <= 0)
         {
            Alarm.show("你还没有选择想要删除的邮件哦！");
         }
         else
         {
            Alert.show("邮件一旦删除就不能恢复了哦，你确定要删除选定邮件吗？",function():void
            {
               var tempArr:Array = _selectedArray.slice();
               tempArr.unshift(_selectedArray.length);
               SocketConnection.sendByQueue(CommandID.MAIL_DEL,tempArr,function(param1:SocketEvent):void
               {
                  updateUI();
                  Alarm.show("删除成功！");
               },function(param1:SocketEvent):void
               {
                  Alarm.show("邮件删除失败！");
               });
            });
         }
      }
      
      private function onPrevClick(param1:MouseEvent) : void
      {
         var _loc2_:Number = Math.max(Math.min(this._currentPage - 1,this.maxPage),0);
         if(_loc2_ != this._currentPage && _loc2_ >= 1)
         {
            this._currentPage = _loc2_;
            this.updateUI();
         }
      }
      
      private function onNextClick(param1:MouseEvent) : void
      {
         var _loc2_:Number = Math.max(Math.min(this._currentPage + 1,this.maxPage),0);
         if(_loc2_ <= 0)
         {
            return;
         }
         if(_loc2_ != this._currentPage && _loc2_ <= this.maxPage)
         {
            this._currentPage = _loc2_;
            this.updateUI();
         }
      }
      
      private function updateUI() : void
      {
         this._emailListArray = [];
         this._selectedArray = [];
         this._isSelectedAll = false;
         SocketConnection.sendWithCallback(CommandID.MAIL_LIST,function(param1:SocketEvent):void
         {
            var _loc5_:EmailListInfo = null;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _total = _loc2_.readUnsignedInt();
            _count = _loc2_.readUnsignedInt();
            var _loc3_:uint = _loc2_.readUnsignedInt();
            var _loc4_:int = 0;
            while(_loc4_ < _loc3_)
            {
               _loc5_ = new EmailListInfo(_loc2_);
               _emailListArray.push(_loc5_);
               _loc4_++;
            }
            setEmailView();
         },this._currentPage,PAGE_SIZE);
      }
      
      private function setEmailView() : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:EmailListInfo = null;
         this.content["pageTxt"].text = this._currentPage + " / " + this.maxPage;
         var _loc1_:int = 0;
         while(_loc1_ < PAGE_SIZE)
         {
            _loc2_ = this.content["itemMc_" + _loc1_];
            if(_loc1_ > this._count - 1)
            {
               _loc2_.visible = false;
            }
            else
            {
               _loc3_ = this._emailListArray[_loc1_] as EmailListInfo;
               _loc2_.visible = true;
               _loc2_["senderTxt"].text = _loc3_.sender;
               (_loc2_["titleTxt"] as TextField).htmlText = "<a href=\'event:#\'>" + _loc3_.title + "</a>";
               _loc2_["dateTxt"].text = _loc3_.date;
               _loc2_["cbx"].gotoAndStop(1);
               if(!_loc3_.status)
               {
                  _loc2_["statusMc"].gotoAndStop(1);
                  _loc2_["item"].gotoAndStop(1);
               }
               else
               {
                  _loc2_["statusMc"].gotoAndStop(2);
                  _loc2_["item"].gotoAndStop(2);
               }
               if(_loc3_.hasAttachment)
               {
                  if(_loc3_.attachmentGetFlag)
                  {
                     _loc2_["attachmentMc"].visible = false;
                  }
                  else
                  {
                     _loc2_["attachmentMc"].visible = true;
                  }
               }
               else
               {
                  _loc2_["attachmentMc"].visible = false;
               }
            }
            _loc1_++;
         }
      }
      
      public function get dotNum() : int
      {
         return EmailController._UnReadNum;
      }
      
      public function hide() : void
      {
         if(this.content != null && this.content.parent != null)
         {
            this.content.parent.removeChild(this.content);
         }
         EmailController.onShowEmail();
      }
      
      private function get maxPage() : uint
      {
         return Math.max(Math.ceil(this._total / PAGE_SIZE),0);
      }
      
      public function destroy() : void
      {
         var _loc2_:MovieClip = null;
         this.hide();
         this._xml = null;
         this._ui = null;
         if(this.content == null)
         {
            return;
         }
         var _loc1_:int = 0;
         while(_loc1_ < PAGE_SIZE)
         {
            _loc2_ = this.content["itemMc_" + _loc1_];
            _loc2_["cbx"].buttonMode = true;
            _loc2_["cbx"].removeEventListener(MouseEvent.CLICK,this.onComboBoxClick);
            _loc2_["titleTxt"].removeEventListener(MouseEvent.CLICK,this.onEmailItemClick);
            _loc1_++;
         }
         this.content["prevBtn"].removeEventListener(MouseEvent.CLICK,this.onPrevClick);
         this.content["nextBtn"].removeEventListener(MouseEvent.CLICK,this.onNextClick);
         this.content["selectAllBtn"].removeEventListener(MouseEvent.CLICK,this.onSelectAllClick);
         this.content["delBtn"].removeEventListener(MouseEvent.CLICK,this.onDelClick);
         this.content = null;
      }
   }
}
