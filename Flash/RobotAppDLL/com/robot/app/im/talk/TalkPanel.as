package com.robot.app.im.talk
{
   import com.robot.app.bag.BagClothPreview;
   import com.robot.app.control.CutBmpController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.imgPanel.ImagePanel;
   import com.robot.app.user.UserInfoController;
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.event.ChatEvent;
   import com.robot.core.event.CutBmpEvent;
   import com.robot.core.info.ChatInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.relation.OnLineInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.TextScrollBar;
   import com.robot.core.uic.UIPanel;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.Shape;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.events.TextEvent;
   import flash.text.TextField;
   import flash.text.TextFormat;
   import flash.ui.Keyboard;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class TalkPanel extends UIPanel
   {
      
      private static const EXP_MAX_TIME:int = 2000;
      
      public static const IMG_LINK:String = "http://";
       
      
      private var _info:UserInfo;
      
      private var _userID:uint;
      
      private var _titleTxt:TextField;
      
      private var _sendBtn:SimpleButton;
      
      private var _inputTxt:TextField;
      
      private var _wordTxt:TextField;
      
      private var _emotionBtn:SimpleButton;
      
      private var _fightInviteBtn:SimpleButton;
      
      private var _composeYou:BagClothPreview;
      
      private var _composeMe:BagClothPreview;
      
      private var _showYou:Sprite;
      
      private var _showMe:Sprite;
      
      private var _meBtn:SimpleButton;
      
      private var _youBtn:SimpleButton;
      
      private var _cutBmpBtn:SimpleButton;
      
      private var _nonoYou:Sprite;
      
      private var _nonoMe:Sprite;
      
      private var _txtBar:TextScrollBar;
      
      private var _emotionPanel:com.robot.app.im.talk.TEmotionPanel;
      
      private var _expMe:MovieClip;
      
      private var _expYou:MovieClip;
      
      private var _outTimeMe:uint;
      
      private var _outTimeYou:uint;
      
      private var _alertTxt:TextField;
      
      private var _isSend:Boolean = false;
      
      public function TalkPanel()
      {
         super(UIManager.getSprite("ChatPanel"));
         this._sendBtn = _mainUI["sendBtn"];
         this._inputTxt = _mainUI["writeTxt"];
         this._titleTxt = _mainUI["titleTxt"];
         this._wordTxt = _mainUI["readTxt"];
         this._wordTxt.height -= 20;
         this._wordTxt.y += 20;
         this._emotionBtn = _mainUI["emotionBtn"];
         CommonUI.setEnabled(this._emotionBtn,false,true);
         this._fightInviteBtn = _mainUI["fightInviteBtn"];
         this._meBtn = _mainUI["meBtn"];
         this._youBtn = _mainUI["youBtn"];
         this._nonoYou = _mainUI["nonoYou"];
         this._nonoMe = _mainUI["nonoMe"];
         addChild(_mainUI);
         this._alertTxt = new TextField();
         this._alertTxt.width = 200;
         this._alertTxt.height = 20;
         this._alertTxt.text = "请不要向任何人透露你的密码哦！";
         this._alertTxt.selectable = false;
         var _loc1_:TextFormat = new TextFormat();
         _loc1_.color = 16711680;
         _loc1_.size = 12;
         _loc1_.bold = true;
         this._alertTxt.setTextFormat(_loc1_);
         this._alertTxt.x = 20;
         this._nonoYou.visible = false;
         if(MainManager.actorInfo.vip)
         {
            this._nonoMe.visible = true;
            this._nonoMe["vipStageMC"].gotoAndStop(MainManager.actorInfo.vipLevel);
            ToolTipManager.add(this._nonoMe,MainManager.actorInfo.vipLevel + "级超能NoNo");
         }
         else
         {
            this._nonoMe.visible = false;
         }
         this._inputTxt.maxChars = 130;
         this._inputTxt.restrict = "^0-9";
         this._txtBar = new TextScrollBar(_mainUI,this._wordTxt,_mainUI["upBtn"],_mainUI["downBtn"]);
         var _loc2_:Shape = new Shape();
         _loc2_.graphics.beginFill(16711680);
         _loc2_.graphics.drawRect(305,47,118.5,135);
         addChild(_loc2_);
         var _loc3_:Shape = new Shape();
         _loc3_.graphics.beginFill(16711680);
         _loc3_.graphics.drawRect(305,195,118.5,135);
         addChild(_loc3_);
         this._showYou = UIManager.getSprite("ComposeMC");
         this._showMe = UIManager.getSprite("ComposeMC");
         this._showYou.mouseEnabled = false;
         this._showYou.mouseChildren = false;
         this._showMe.mouseEnabled = false;
         this._showMe.mouseChildren = false;
         this._showYou.x = 334;
         this._showYou.y = 77;
         this._showYou.mask = _loc2_;
         this._showMe.x = 334;
         this._showMe.y = 229;
         this._showYou.scaleX = 0.5;
         this._showYou.scaleY = 0.5;
         this._showMe.scaleX = 0.5;
         this._showMe.scaleY = 0.5;
         this._showMe.mask = _loc3_;
         addChild(this._showYou);
         addChild(this._showMe);
         addChild(this._nonoYou);
         addChild(this._nonoMe);
         this._composeYou = new BagClothPreview(this._showYou,null,ClothPreview.MODEL_SHOW);
         this._composeMe = new BagClothPreview(this._showMe,null,ClothPreview.MODEL_SHOW);
      }
      
      public function show(param1:uint) : void
      {
         this._userID = param1;
         this._composeMe.changeColor(MainManager.actorInfo.color);
         this._composeMe.showCloths(MainManager.actorInfo.clothes);
         this._composeMe.showDoodle(MainManager.actorInfo.texture);
         _show();
         DisplayUtil.align(this,null,AlignType.MIDDLE_CENTER);
         UserInfoManager.getInfo(this._userID,this.onInfo);
      }
      
      override public function hide() : void
      {
         super.hide();
         EventManager.removeEventListener(CutBmpEvent.CUT_BMP_COMPLETE,this.onCutBmpHandler);
      }
      
      override public function destroy() : void
      {
         super.destroy();
         ToolTipManager.remove(this._nonoYou);
         ToolTipManager.remove(this._nonoMe);
         this.removeExpMe();
         this.removeExpYou();
         this._info = null;
         this._sendBtn = null;
         this._inputTxt = null;
         this._titleTxt = null;
         this._wordTxt = null;
         this._composeYou = null;
         this._composeMe = null;
         this._showMe = null;
         this._showYou = null;
         this._nonoYou = null;
         this._nonoMe = null;
      }
      
      private function onSendHelpNono(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         LevelManager.closeMouseEvent();
         Alert.show("你确认请求" + this._info.nick + "为你开通超能NoNo吗？",function():void
         {
            SocketConnection.addCmdListener(CommandID.SEND_HELP_MESSAGE,getResult);
            SocketConnection.send(CommandID.SEND_HELP_MESSAGE,_info.userID);
            LevelManager.openMouseEvent();
         },function():void
         {
            LevelManager.openMouseEvent();
         });
      }
      
      private function getResult(param1:SocketEvent) : void
      {
         Alarm.show("成功发出请求！");
         SocketConnection.removeCmdListener(CommandID.SEND_HELP_MESSAGE,this.getResult);
      }
      
      private function onInfo(param1:UserInfo) : void
      {
         this._info = param1;
         UserInfoManager.seeOnLine([this._userID],this.onInitOnLine);
         this._composeYou.changeColor(this._info.color);
         this._composeYou.showCloths(this._info.clothes);
         this._composeYou.showDoodle(this._info.texture);
         if(this._info.vip)
         {
            this._nonoYou.visible = true;
            this._nonoYou["vipStageMC"].gotoAndStop(this._info.vipLevel);
            ToolTipManager.add(this._nonoYou,this._info.vipLevel + "级超能NoNo");
         }
         else
         {
            this._nonoYou.visible = false;
         }
         this.addEvent();
         this.initMsg();
      }
      
      private function onInitOnLine(param1:Array) : void
      {
         var _loc4_:OnLineInfo = null;
         var _loc2_:Boolean = false;
         var _loc3_:int = int(param1.length);
         if(_loc3_ > 0)
         {
            if((_loc4_ = param1[0]).serverID == MainManager.actorInfo.serverID)
            {
               _loc2_ = true;
            }
            this._showYou.filters = [];
         }
         else
         {
            _loc2_ = true;
            this._showYou.filters = [ColorFilter.setGrayscale(),ColorFilter.setBrightness(50)];
         }
         if(_loc2_)
         {
            this._titleTxt.htmlText = "<a href=\'event:\'>与好友" + this._info.nick + "(" + this._info.userID + ")通话中</a>";
         }
         else
         {
            this._titleTxt.htmlText = "<a href=\'event:\'>与" + _loc4_.serverID + ".服务器的" + this._info.nick + "(" + this._info.userID + ")通话中</a>";
         }
      }
      
      private function initMsg() : void
      {
         var _loc2_:ChatInfo = null;
         var _loc1_:Array = MessageManager.getChatInfo(this._userID);
         if(_loc1_ != null)
         {
            this._wordTxt.text = "";
            for each(_loc2_ in _loc1_)
            {
               this.wordChange(_loc2_);
            }
            this._txtBar.checkScroll();
         }
      }
      
      override protected function addEvent() : void
      {
         super.addEvent();
         this._sendBtn.addEventListener(MouseEvent.CLICK,this.onSendMsg);
         this._inputTxt.addEventListener(KeyboardEvent.KEY_DOWN,this.onKeyDown);
         this._inputTxt.addEventListener(KeyboardEvent.KEY_UP,this.onKeyUp);
         this._emotionBtn.addEventListener(MouseEvent.CLICK,this.onEmotion);
         this._meBtn.addEventListener(MouseEvent.CLICK,this.onMeShow);
         this._youBtn.addEventListener(MouseEvent.CLICK,this.onYouShow);
         this._titleTxt.addEventListener(TextEvent.LINK,this.onYouShow);
         this._fightInviteBtn.addEventListener(MouseEvent.CLICK,this.onFight);
         this._wordTxt.addEventListener(TextEvent.LINK,this.onTextLink);
         ToolTipManager.add(this._emotionBtn,"发送表情");
         ToolTipManager.add(this._fightInviteBtn,"发起对战");
         MessageManager.addEventListener(ChatEvent.TALK + this._userID.toString(),this.onData);
      }
      
      override protected function removeEvent() : void
      {
         super.removeEvent();
         this._sendBtn.removeEventListener(MouseEvent.CLICK,this.onSendMsg);
         this._inputTxt.removeEventListener(KeyboardEvent.KEY_DOWN,this.onKeyDown);
         this._inputTxt.removeEventListener(KeyboardEvent.KEY_UP,this.onKeyUp);
         this._emotionBtn.removeEventListener(MouseEvent.CLICK,this.onEmotion);
         this._meBtn.removeEventListener(MouseEvent.CLICK,this.onMeShow);
         this._youBtn.removeEventListener(MouseEvent.CLICK,this.onYouShow);
         this._titleTxt.removeEventListener(TextEvent.LINK,this.onYouShow);
         this._fightInviteBtn.removeEventListener(MouseEvent.CLICK,this.onFight);
         this._wordTxt.removeEventListener(TextEvent.LINK,this.onTextLink);
         ToolTipManager.remove(this._emotionBtn);
         ToolTipManager.remove(this._fightInviteBtn);
         MessageManager.removeEventListener(ChatEvent.TALK + this._userID.toString(),this.onData);
      }
      
      private function wordChange(param1:ChatInfo) : void
      {
         var _loc2_:MovieClip = null;
         if(param1.msg.substr(0,1) == "#")
         {
            if(param1.isRead)
            {
               return;
            }
            param1.isRead = true;
            _loc2_ = UIManager.getMovieClip("e" + param1.msg.substring(1,param1.msg.length));
            if(_loc2_)
            {
               _loc2_.mouseChildren = false;
               _loc2_.mouseEnabled = false;
               if(param1.senderID == MainManager.actorID)
               {
                  this.removeExpMe();
                  this.addExpMe(_loc2_);
               }
               else
               {
                  this.removeExpYou();
                  this.addExpYou(_loc2_);
               }
               return;
            }
         }
         if(param1.senderID == MainManager.actorID)
         {
            TextFormatUtil.appSenderFormatText(this._wordTxt,MainManager.actorInfo.nick + ": ",true);
         }
         else
         {
            TextFormatUtil.appSenderFormatText(this._wordTxt,this._info.nick + ": ",false);
         }
         if(param1.msg.substr(0,1) == "$")
         {
            param1.isRead = true;
            DebugTrace.show(param1.msg.substring(1,24),IMG_LINK,IMG_LINK.length);
            if(param1.msg.substring(1,IMG_LINK.length + 1) == IMG_LINK)
            {
               this._wordTxt.htmlText += "<font color=\'#ff9900\'><b><u><a href=\'event:" + param1.msg + "\'>赛尔截图</a></u></b></font>\n";
               return;
            }
         }
         TextFormatUtil.appDefaultFormatText(this._wordTxt,param1.msg + "\n",0);
         param1.isRead = true;
      }
      
      private function addExpMe(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         this._showMe.visible = false;
         this._expMe = mc;
         if(this._expMe)
         {
            this._expMe.x = 355;
            this._expMe.y = 285;
            this._expMe.scaleX = this._expMe.scaleY = 3;
            addChild(this._expMe);
            this._outTimeMe = setTimeout(function():void
            {
               _showMe.visible = true;
               DisplayUtil.removeForParent(_expMe);
               _expMe = null;
            },EXP_MAX_TIME);
         }
      }
      
      private function removeExpMe() : void
      {
         clearTimeout(this._outTimeMe);
         if(this._expMe)
         {
            this._showMe.visible = true;
            DisplayUtil.removeForParent(this._expMe);
            this._expMe = null;
         }
      }
      
      private function addExpYou(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         this._showYou.visible = false;
         this._expYou = mc;
         if(this._expYou)
         {
            this._expYou.x = 355;
            this._expYou.y = 125;
            this._expYou.scaleX = this._expYou.scaleY = 3;
            addChild(this._expYou);
            this._outTimeYou = setTimeout(function():void
            {
               _showYou.visible = true;
               DisplayUtil.removeForParent(_expYou);
               _expYou = null;
            },EXP_MAX_TIME);
         }
      }
      
      private function removeExpYou() : void
      {
         clearTimeout(this._outTimeYou);
         if(this._expYou)
         {
            this._showYou.visible = true;
            DisplayUtil.removeForParent(this._expYou);
            this._expYou = null;
         }
      }
      
      private function onMeShow(param1:MouseEvent) : void
      {
         UserInfoController.show(MainManager.actorInfo.userID);
      }
      
      private function onYouShow(param1:Event) : void
      {
         UserInfoController.show(this._info.userID);
      }
      
      private function onSendMsg(param1:Event) : void
      {
         MainManager.actorModel.execBehavior(new ChatBehavior(this._inputTxt.text,this._userID));
         this._inputTxt.text = "";
      }
      
      override protected function onClose(param1:MouseEvent) : void
      {
         super.onClose(param1);
         TalkPanelManager.closeTalkPanel(this._userID);
      }
      
      private function onKeyDown(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.ENTER)
         {
            this._isSend = true;
            this._inputTxt.multiline = false;
            this._inputTxt.removeEventListener(KeyboardEvent.KEY_DOWN,this.onKeyDown);
         }
      }
      
      private function onKeyUp(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.ENTER)
         {
            this._inputTxt.multiline = true;
            this._inputTxt.addEventListener(KeyboardEvent.KEY_DOWN,this.onKeyDown);
            if(!this._isSend)
            {
               return;
            }
            this._isSend = false;
            if(this._inputTxt.text != "")
            {
               this.onSendMsg(null);
            }
         }
      }
      
      private function onData(param1:ChatEvent) : void
      {
         this.wordChange(param1.info);
         this._txtBar.checkScroll();
      }
      
      private function onEmotion(param1:MouseEvent) : void
      {
         if(this._emotionPanel == null)
         {
            this._emotionPanel = new com.robot.app.im.talk.TEmotionPanel(this._info.userID);
         }
         if(DisplayUtil.hasParent(this._emotionPanel))
         {
            this._emotionPanel.hide();
         }
         else
         {
            this._emotionPanel.show(this._emotionBtn);
         }
      }
      
      private function onFight(param1:MouseEvent) : void
      {
         FightManager.fightWithPlayer(this._info);
      }
      
      private function onTextLink(param1:TextEvent) : void
      {
         var _loc2_:String = param1.text;
         DebugTrace.show(_loc2_.substring(1,_loc2_.length));
         ImagePanel.show(_loc2_.substring(1,_loc2_.length));
      }
      
      private function onCutMap(param1:MouseEvent) : void
      {
         CutBmpController.show(this._info.userID);
         EventManager.addEventListener(CutBmpEvent.CUT_BMP_COMPLETE,this.onCutBmpHandler);
      }
      
      private function onCutBmpHandler(param1:CutBmpEvent) : void
      {
         EventManager.removeEventListener(CutBmpEvent.CUT_BMP_COMPLETE,this.onCutBmpHandler);
         MainManager.actorModel.execBehavior(new ChatBehavior("$" + param1.imgURL,param1.toID));
      }
   }
}
