package com.robot.core.ui.chat
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.NewChatInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.ChatManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Rectangle;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.StringUtil;
   
   public class ChatPanel extends MovieClip
   {
       
      
      private var _ui:MovieClip;
      
      private var _tab:int;
      
      private var all:Array;
      
      private const PERPAGE:int = 6;
      
      private var _curList:Array;
      
      private var _scrollBar:UIScrollBar;
      
      private const LIST_LENGTH:uint = 1;
      
      private var _scrollBar1:UIScrollBar;
      
      private var expMc:MovieClip;
      
      private var sendMc:MovieClip;
      
      private var btnExpression:SimpleButton;
      
      private var _etype:int;
      
      private var cdNums:Array;
      
      private var inputTxt:TextField;
      
      private var notalkMc:MovieClip;
      
      private var showMc:MovieClip;
      
      private var pChat:MovieClip;
      
      private var vui:com.robot.core.ui.chat.VScrollerBoxUi;
      
      private var pvui:com.robot.core.ui.chat.VScrollerBoxUi;
      
      private var pnamevui:com.robot.core.ui.chat.VScrollerBoxUi;
      
      private var _userTxt:String;
      
      private var complainPlayerId:int = 0;
      
      private var _selectPChatObj:Object;
      
      private var pchatUsrs:Array;
      
      public function ChatPanel()
      {
         var _loc4_:Array = null;
         var _loc5_:Object = null;
         super();
         this._ui = UIManager.getMovieClip("bchat");
         addChild(this._ui);
         EventManager.addEventListener(ChatManager.RECEIVE_NEW_INFO,this.newMsgHandle);
         this.expMc = this._ui["expressionMc"];
         this.expMc.visible = false;
         this.showMc = this._ui["showMc"];
         this.sendMc = this._ui["showMc"]["sendMc"];
         this.inputTxt = this._ui["showMc"]["inputTxt"];
         this.btnExpression = this._ui["showMc"]["expBtn"];
         this.notalkMc = this._ui["noTalk"];
         this.notalkMc.visible = false;
         this.cdNums = [0,0,0,0,0];
         this._ui.addEventListener(MouseEvent.CLICK,this.onClickHandle);
         this.inputTxt.text = "";
         this.inputTxt.addEventListener(Event.CHANGE,this.changeHandle);
         this.pChat = this._ui["mc1"];
         var _loc1_:Array = ChatManager.getinstance().getPchatUserIds();
         var _loc2_:Array = [];
         this.pchatUsrs = [];
         var _loc3_:int = 0;
         while(_loc3_ < _loc1_.length)
         {
            _loc2_.push(int(_loc1_[_loc3_]));
            if((Boolean(_loc4_ = ChatManager.getinstance().getPchatInfos(int(_loc1_[_loc3_])))) && Boolean(_loc4_.length))
            {
               _loc5_ = {
                  "name":(MainManager.actorID == int(_loc4_[0]["senderID"]) ? _loc4_[0]["toNickName"] : _loc4_[0]["senderNicName"]),
                  "id":int(_loc1_[_loc3_])
               };
               this.pchatUsrs.push(_loc5_);
            }
            _loc3_++;
         }
         this.vui = new com.robot.core.ui.chat.VScrollerBoxUi(495,206,this._ui["mc"]["chatVui"]["chatCon"]);
         this.pvui = new com.robot.core.ui.chat.VScrollerBoxUi(365,175,this._ui["mc1"]["pchatUi"]["pchatCon"]);
         this.pnamevui = new com.robot.core.ui.chat.VScrollerBoxUi(100,220,this.pChat["pnameUi"]["pnameCon"]);
         SystemTimerManager.addTickFun(this.timerHandle);
         this.tab = 0;
         EventManager.addEventListener(ChatManager.PCHAT_NAME_CLICK,this.pnameClickHandle);
      }
      
      private function pnameClickHandle(param1:DynamicEvent) : void
      {
         var _loc2_:Object = param1.paramObject;
         if(this.selectPChatObj == null || this.selectPChatObj.id != _loc2_.id)
         {
            this.selectPChatObj = _loc2_;
         }
      }
      
      private function checkPnameSelect(param1:Object) : void
      {
         var _loc4_:PchatItemRender = null;
         var _loc2_:int = int(this.pChat["pnameUi"]["pnameCon"].numChildren);
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            _loc4_ = this.pChat["pnameUi"]["pnameCon"].getChildAt(_loc3_) as PchatItemRender;
            if(Boolean(param1) && param1.id == _loc4_.obj.id)
            {
               _loc4_.select = true;
            }
            else
            {
               _loc4_.select = false;
            }
            _loc3_++;
         }
      }
      
      public function gotoTab(param1:int) : void
      {
         this.tab = param1;
      }
      
      private function changeHandle(param1:Event) : void
      {
         var _loc2_:String = String(StringUtil.trim(this.inputTxt.text));
         if(_loc2_.length > 100)
         {
            Alarm.show("最大输入字数100个");
            _loc2_ = _loc2_.substr(0,100);
            this.inputTxt.text = _loc2_;
         }
      }
      
      private function onClickHandle(param1:MouseEvent) : void
      {
         var _loc3_:int = 0;
         var _loc4_:String = null;
         var _loc5_:String = null;
         var _loc6_:String = null;
         var _loc7_:Array = null;
         var _loc8_:ChatBWinItemRender = null;
         var _loc2_:String = String(param1.target.name);
         _loc3_ = parseInt(_loc2_.split("_")[1]);
         switch(_loc2_)
         {
            case "e_" + _loc3_:
               this.etype = _loc3_;
               break;
            case "setBtn":
               ChatManager.getinstance().showSetPanel(true);
               break;
            case "close":
               ChatManager.getinstance().showChatPanel(false);
               this.expMc.visible = false;
               break;
            case "expBtn":
               this.expMc.visible = !this.expMc.visible;
               this.etype = 0;
               break;
            case "fle_" + _loc3_:
               this.expMc.visible = false;
               _loc4_ = "$" + _loc3_;
               this.sendMsg(_loc4_);
               break;
            case "h5e_" + _loc3_:
               this.expMc.visible = false;
               _loc5_ = "#" + (_loc3_ + 1);
               this.sendMsg(_loc5_);
               break;
            case "send":
               if(SystemTimerManager.mingganshiqiChat())
               {
                  return;
               }
               _loc6_ = this.inputTxt.text;
               this.sendMsg(_loc6_);
               break;
            case "btn_" + _loc3_:
               this.tab = _loc3_;
               break;
            case "pclose":
               _loc7_ = this.pchatUsrs.concat();
               _loc7_.splice(_loc7_.indexOf(this.selectPChatObj),1);
               this.pchatUsrs = _loc7_.concat();
               ChatManager.getinstance().removePchat(this.selectPChatObj["id"]);
               this.showPchats(this.pchatUsrs);
               this._ui.complainBtn.visible = this.pchatUsrs.length;
               break;
            case "head":
               this.complainPlayerId = int(param1.target.parent.name);
               _loc8_ = param1.target.parent.parent as ChatBWinItemRender;
               this._userTxt = _loc8_.strMsg;
               if(this.complainPlayerId != 0)
               {
                  this.complainPlayer(this.complainPlayerId);
               }
               break;
            case "complainBtn":
               if(this.tab == 4)
               {
                  Alarm.show("请点击你要举报的用户头像进行举报！");
               }
               else
               {
                  Alarm.show("请点击你要举报的用户头像进行举报！");
               }
         }
      }
      
      private function timerHandle() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < this.cdNums.length)
         {
            if(this.cdNums[_loc1_] > 0)
            {
               --this.cdNums[_loc1_];
               if(_loc1_ == this.tab)
               {
                  if(this.cdNums[_loc1_] <= 0)
                  {
                     this.sendMc.gotoAndStop(1);
                     CommonUI.setEnabled(this.btnExpression,true);
                     if(this.tab == 4 && this.pchatUsrs.length == 0)
                     {
                        CommonUI.setEnabled(this.btnExpression,false,true);
                        CommonUI.setEnabled(this.sendMc,false,true);
                     }
                     else
                     {
                        CommonUI.setEnabled(this.sendMc,true);
                     }
                     if(this.tab == 3)
                     {
                        CommonUI.setEnabled(this.btnExpression,ChatManager.getinstance().showBattleTeamInfoNote);
                        CommonUI.setEnabled(this.sendMc,ChatManager.getinstance().showBattleTeamInfoNote);
                     }
                  }
                  else
                  {
                     this.sendMc.gotoAndStop(2);
                     CommonUI.setEnabled(this.sendMc,false);
                     CommonUI.setEnabled(this.btnExpression,false);
                  }
                  if(this.sendMc["txt"])
                  {
                     this.sendMc["txt"].text = this.cdNums[_loc1_].toString() + "S";
                  }
               }
            }
            else if(this.tab == 3 && _loc1_ == this.tab)
            {
               CommonUI.setEnabled(this.btnExpression,ChatManager.getinstance().showBattleTeamInfoNote);
               CommonUI.setEnabled(this.sendMc,ChatManager.getinstance().showBattleTeamInfoNote);
            }
            _loc1_++;
         }
      }
      
      protected function onScrollMove(param1:MouseEvent = null) : void
      {
         this._curList = this.all.slice(this._scrollBar.index * this.PERPAGE,(this._scrollBar.index + this.LIST_LENGTH) * this.PERPAGE);
         this.showAwards(this._curList);
      }
      
      private function showAwards(param1:Array) : void
      {
         this.clearItem();
         var _loc2_:int = 0;
         while(_loc2_ < this.PERPAGE * this.LIST_LENGTH)
         {
            if(_loc2_ < param1.length)
            {
               this._ui["mc_" + _loc2_].visible = true;
               this._ui["mc_" + _loc2_].markObj = param1[_loc2_];
               this._ui["mc_" + _loc2_]["con"].cid = param1[_loc2_];
               this.loadItem(param1[_loc2_],this._ui["mc_" + _loc2_]["con"]);
            }
            else
            {
               this._ui["mc_" + _loc2_].visible = false;
            }
            _loc2_++;
         }
      }
      
      private function clearItem() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < this.PERPAGE * this.LIST_LENGTH)
         {
            DisplayUtil.removeAllChild(this._ui["mc_" + _loc1_]["con"]);
            _loc1_++;
         }
      }
      
      private function loadItem(param1:uint, param2:DisplayObjectContainer, param3:int = 1) : void
      {
         var str:String;
         var id:uint = param1;
         var container:DisplayObjectContainer = param2;
         var scale:int = param3;
         DisplayUtil.removeAllChild(container as MovieClip);
         str = "CountermarkXMLInfo.getIconURL(id)";
         ResourceManager.getResource(str,function(param1:DisplayObject):void
         {
            if(container["cid"] != id)
            {
               return;
            }
            var _loc2_:MovieClip = param1 as MovieClip;
            var _loc3_:Rectangle = _loc2_.getBounds(_loc2_);
            _loc2_.x = -_loc3_.x;
            _loc2_.y = -_loc3_.y;
            container.addChild(_loc2_);
         },"item");
      }
      
      private function newMsgHandle(param1:DynamicEvent) : void
      {
         var _loc3_:int = 0;
         var _loc4_:String = null;
         var _loc2_:int = int(param1.paramObject["type"]);
         if(_loc2_ == 5)
         {
            _loc2_ = 2;
         }
         if(_loc2_ == 4)
         {
            if(param1.paramObject["senderID"] == MainManager.actorID)
            {
               _loc3_ = int(param1.paramObject["toID"]);
               _loc4_ = String(param1.paramObject["toNickName"]);
            }
            else
            {
               _loc3_ = int(param1.paramObject["senderID"]);
               _loc4_ = String(param1.paramObject["senderNicName"]);
            }
         }
         if(this.tab == _loc2_ || this.tab == 0)
         {
            if(this.tab == 4)
            {
               if(_loc2_ == 4)
               {
                  this.showPchat(_loc3_,_loc4_,false);
                  if(Boolean(this.selectPChatObj) && _loc3_ == this.selectPChatObj["id"])
                  {
                     this.showPwinTalks(ChatManager.getinstance().getContent(this.selectPChatObj["id"]));
                  }
               }
            }
            else
            {
               if(_loc2_ == 4)
               {
                  this.showPchat(_loc3_,_loc4_,false);
               }
               this.showBwinTalks(ChatManager.getinstance().getContent(this.tab));
            }
         }
      }
      
      private function set selectPChatObj(param1:Object) : void
      {
         this._selectPChatObj = param1;
         if(this.selectPChatObj != null)
         {
            this.pChat["pchatMc"]["txt"].text = "与" + this.selectPChatObj["name"] + "聊天中......";
         }
         this.checkPnameSelect(this.selectPChatObj);
         this.showPrivateContent();
      }
      
      private function showPrivateContent() : void
      {
         if(this.selectPChatObj)
         {
            this.showPwinTalks(ChatManager.getinstance().getContent(this.selectPChatObj["id"]));
         }
      }
      
      private function get selectPChatObj() : Object
      {
         return this._selectPChatObj;
      }
      
      public function showPwinTalks(param1:Array) : void
      {
         var _loc3_:ChatBWinItemRender = null;
         while(this.pChat["pchatUi"]["pchatCon"].numChildren)
         {
            _loc3_ = this.pChat["pchatUi"]["pchatCon"].removeChildAt(0) as ChatBWinItemRender;
            _loc3_.destroy();
            _loc3_ = null;
         }
         this.pvui.clearContainer();
         this.pvui.updateScoll();
         this.all = param1.concat();
         var _loc2_:int = 0;
         while(_loc2_ < this.all.length)
         {
            this.addbTalk(this.all[_loc2_] as NewChatInfo,this.pChat["pchatUi"]["pchatCon"],365,this.pvui);
            _loc2_++;
         }
      }
      
      public function showBwinTalks(param1:Array) : void
      {
         var _loc3_:ChatBWinItemRender = null;
         while(this._ui["mc"]["chatVui"]["chatCon"].numChildren)
         {
            _loc3_ = this._ui["mc"]["chatVui"]["chatCon"].removeChildAt(0) as ChatBWinItemRender;
            _loc3_.destroy();
            _loc3_ = null;
         }
         this.vui.clearContainer();
         this.vui.updateScoll();
         this.all = param1.concat();
         var _loc2_:int = 0;
         while(_loc2_ < this.all.length)
         {
            this.addbTalk(this.all[_loc2_] as NewChatInfo,this._ui["mc"]["chatVui"]["chatCon"],495,this.vui);
            _loc2_++;
         }
      }
      
      private function addbTalk(param1:NewChatInfo, param2:DisplayObjectContainer, param3:Number = 200, param4:com.robot.core.ui.chat.VScrollerBoxUi = null, param5:Boolean = true) : void
      {
         var _loc6_:ChatBWinItemRender;
         (_loc6_ = new ChatBWinItemRender()).dataChanged(param1,param3);
         var _loc7_:Rectangle;
         var _loc8_:Number = (_loc7_ = param2.getBounds(param2)).height;
         _loc6_.y = _loc8_ + 20;
         param2.addChild(_loc6_);
         if(param4)
         {
            param4.updateScoll();
         }
      }
      
      public function showPchat(param1:int, param2:String, param3:Boolean = true) : void
      {
         var _loc4_:Boolean = false;
         var _loc5_:* = undefined;
         var _loc6_:int = 0;
         var _loc7_:Object = null;
         var _loc8_:int = 0;
         if(this.pchatUsrs)
         {
            _loc4_ = false;
            _loc7_ = {
               "name":param2,
               "id":param1
            };
            _loc8_ = 0;
            while(_loc8_ < this.pchatUsrs.length)
            {
               if(this.pchatUsrs[_loc8_]["id"] == param1)
               {
                  _loc4_ = true;
                  _loc5_ = this.pchatUsrs[_loc8_];
                  _loc6_ = _loc8_;
                  break;
               }
               _loc8_++;
            }
            if(!_loc4_)
            {
               this.pchatUsrs = [_loc7_].concat(this.pchatUsrs);
            }
            else
            {
               this.pchatUsrs.splice(_loc6_,1);
               this.pchatUsrs = [_loc5_].concat(this.pchatUsrs);
               _loc7_ = _loc5_;
            }
         }
         else
         {
            this.pchatUsrs = [];
            this.pchatUsrs.push(_loc7_);
         }
         if(param3)
         {
            this.selectPChatObj = _loc7_;
            this.tab = 4;
         }
      }
      
      private function sendMsg(param1:String) : void
      {
         var KTool:*;
         var str:String = param1;
         str = String(StringUtil.trim(str));
         if(this.tab == 4 && !this.selectPChatObj || this.tab == 1 || str == "")
         {
            if(str == "")
            {
               Alarm.show("请输入聊天内容哦");
            }
            return;
         }
         KTool = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         KTool.getMultiValue([124651],function(param1:Array):void
         {
            var time:Date = null;
            var bytearr:ByteArray = null;
            var bytearr2:ByteArray = null;
            var bytearr3:ByteArray = null;
            var va:Array = param1;
            var tempTime:int = int(SystemTimerManager.time);
            if(va[0] > tempTime)
            {
               time = new Date(va[0] * 1000);
               Alarm.show("您已被禁言，暂时无法发布任何信息！（禁言结束时间为" + time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "日" + time.getHours() + "时" + time.getMinutes() + "分)");
            }
            else
            {
               bytearr = new ByteArray();
               bytearr.writeUnsignedInt(tab == 0 ? 2 : uint(tab));
               bytearr.writeUnsignedInt(tab == 4 ? uint(selectPChatObj["id"]) : 0);
               bytearr2 = new ByteArray();
               bytearr2.writeUTFBytes(tab == 4 ? String(selectPChatObj["name"]) : "");
               bytearr2.length = 16;
               bytearr.writeBytes(bytearr2,0,16);
               bytearr3 = new ByteArray();
               bytearr3.writeUTFBytes(str);
               if(bytearr3.length > 400)
               {
                  bytearr3.length = 400;
               }
               bytearr.writeUnsignedInt(bytearr3.length);
               bytearr.writeBytes(bytearr3,0,bytearr3.length);
               SocketConnection.sendByQueue(47340,[bytearr],function(param1:SocketEvent):void
               {
                  inputTxt.text = "";
                  if(tab != 4)
                  {
                     if(tab == 0 || tab == 2)
                     {
                        cdNums[2] = 6;
                        cdNums[0] = 6;
                     }
                     else
                     {
                        cdNums[tab] = 6;
                     }
                     showCd(true);
                     timerHandle();
                  }
               },function(param1:SocketErrorEvent):void
               {
                  inputTxt.text = "";
               });
            }
         });
      }
      
      private function showCd(param1:Boolean) : void
      {
      }
      
      public function destroy() : void
      {
         EventManager.addEventListener(ChatManager.RECEIVE_NEW_INFO,this.newMsgHandle);
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClickHandle);
         this.inputTxt.removeEventListener(Event.CHANGE,this.changeHandle);
         EventManager.removeEventListener(ChatManager.PCHAT_NAME_CLICK,this.pnameClickHandle);
      }
      
      public function get tab() : int
      {
         return this._tab;
      }
      
      public function set tab(param1:int) : void
      {
         this._tab = param1;
         if(param1 != 4)
         {
            this._ui.complainBtn.visible = true;
         }
         else
         {
            this._ui.complainBtn.visible = this.pchatUsrs.length;
         }
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            this._ui["type_" + _loc2_].gotoAndStop(_loc2_ == param1 ? 2 : 1);
            _loc2_++;
         }
         CommonUI.setEnabled(this.btnExpression,this.cdNums[this.tab] <= 0);
         this.sendMc.gotoAndStop(this.cdNums[this.tab] <= 0 ? 1 : 2);
         if(this.sendMc["txt"])
         {
            this.sendMc["txt"].text = this.cdNums[this.tab] + "S";
         }
         ChatManager.getinstance().showType = this._tab;
         this.pChat.visible = this.tab == 4;
         this.notalkMc.visible = this.tab == 1;
         this.showMc.visible = this.tab != 1;
         this._ui["mc"].visible = this.tab != 4;
         if(this.pChat.visible)
         {
            this.showPchats(this.pchatUsrs);
         }
         else
         {
            this.selectPChatObj = null;
            this.showBwinTalks(ChatManager.getinstance().getContent());
            if(this.cdNums[this.tab] <= 0)
            {
               this.sendMc.gotoAndStop(1);
               CommonUI.setEnabled(this.btnExpression,true);
               CommonUI.setEnabled(this.sendMc,true);
               if(this.tab == 3)
               {
                  CommonUI.setEnabled(this.btnExpression,ChatManager.getinstance().showBattleTeamInfoNote);
                  CommonUI.setEnabled(this.sendMc,ChatManager.getinstance().showBattleTeamInfoNote);
               }
            }
            else
            {
               this.sendMc.gotoAndStop(2);
               CommonUI.setEnabled(this.sendMc,false);
               CommonUI.setEnabled(this.btnExpression,false);
            }
            if(this.sendMc["txt"])
            {
               this.sendMc["txt"].text = this.cdNums[this.tab].toString() + "S";
            }
         }
      }
      
      private function showPchats(param1:Array) : void
      {
         var _loc2_:int = 0;
         this.pChat["pchatMc"].visible = param1.length > 0;
         this.addPnames(param1);
         if(param1.length)
         {
            if(this.selectPChatObj)
            {
               _loc2_ = param1.indexOf(this.selectPChatObj);
               if(_loc2_ != -1)
               {
                  this.selectPChatObj = param1[_loc2_];
               }
               else
               {
                  this.selectPChatObj = param1[0];
               }
            }
            else
            {
               this.selectPChatObj = param1[0];
            }
            CommonUI.setEnabled(this.btnExpression,true,false);
            CommonUI.setEnabled(this.sendMc,true);
            this.sendMc.gotoAndStop(1);
         }
         else
         {
            CommonUI.setEnabled(this.btnExpression,false,true);
            this.sendMc.gotoAndStop(1);
            CommonUI.setEnabled(this.sendMc,false,true);
            this.selectPChatObj = null;
            this.showPwinTalks([]);
         }
      }
      
      private function addPnames(param1:Array) : void
      {
         var _loc3_:PchatItemRender = null;
         while(this.pChat["pnameUi"]["pnameCon"].numChildren)
         {
            _loc3_ = this.pChat["pnameUi"]["pnameCon"].removeChildAt(0) as PchatItemRender;
            _loc3_.destroy();
            _loc3_ = null;
         }
         this.pnamevui.clearContainer();
         this.pnamevui.updateScoll();
         var _loc2_:int = 0;
         while(_loc2_ < param1.length)
         {
            this.addPname(param1[_loc2_]);
            _loc2_++;
         }
      }
      
      public function addPname(param1:Object) : void
      {
         var _loc2_:PchatItemRender = new PchatItemRender();
         _loc2_.dataChanged(param1);
         var _loc3_:Rectangle = this.pChat["pnameUi"]["pnameCon"].getBounds(this.pChat["pnameUi"]["pnameCon"]);
         var _loc4_:Number = _loc3_.height;
         _loc2_.y = _loc4_ + 17;
         _loc2_.x = 50;
         this.pChat["pnameUi"]["pnameCon"].addChild(_loc2_);
         this.pnamevui.updateScoll();
      }
      
      public function get etype() : int
      {
         return this._etype;
      }
      
      public function set etype(param1:int) : void
      {
         this._etype = param1;
         this.expMc.gotoAndStop(this.etype + 1);
         var _loc2_:int = 0;
         while(_loc2_ < 2)
         {
            this.expMc["ebtnmc_" + _loc2_].gotoAndStop(_loc2_ == this.etype ? 2 : 1);
            _loc2_++;
         }
         this.expMc["ebtnmc_1"].visible = false;
      }
      
      private function complainPlayer(param1:int) : void
      {
         var _info:UserInfo = null;
         var uid:int = param1;
         _info = new UserInfo();
         _info.userID = uid;
         UserInfoManager.upDateSimpleInfo(_info,function():void
         {
            ChatManager.getinstance().showChatPanel(false);
            expMc.visible = false;
            ModuleManager.showModule(ClientConfig.getAppModule("ComplainNewPanel"),"正在加载举报系统....",[_info,_userTxt]);
         });
      }
   }
}
