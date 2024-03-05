package com.robot.app.toolBar
{
   import com.robot.app.action.ActorActionManager;
   import com.robot.app.action.GroupActionManager;
   import com.robot.app.bag.BagController;
   import com.robot.app.control.OnlineServiceController;
   import com.robot.app.control.StarMapController;
   import com.robot.app.emotion.EmotionController;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.panel.ChatPanel;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.protectSys.ProtectSystem;
   import com.robot.app.quickWord.QuickWordController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.subMenu.FriendSubMenu;
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.behavior.ChatBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.effect.GlowTween;
   import com.robot.core.info.team.TeamInformInfo;
   import com.robot.core.manager.ChatManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.DialogBox;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.InputCommand;
   import com.robot.core.utils.RectangleMask;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.media.SoundMixer;
   import flash.media.SoundTransform;
   import flash.net.SharedObject;
   import flash.text.TextField;
   import flash.ui.Keyboard;
   import flash.utils.clearInterval;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setInterval;
   import flash.utils.setTimeout;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ToolBarPanel extends Sprite
   {
       
      
      public var OLDY:Number;
      
      private var _mainUI:Sprite;
      
      private var _chatPanel:ChatPanel;
      
      private var _mapBtn:MovieClip;
      
      private var _starMapBtn:SimpleButton;
      
      private var _inputTxt:TextField;
      
      private var _inputBtn:SimpleButton;
      
      private var _showChatBtn:MovieClip;
      
      private var _friendBtn:SimpleButton;
      
      private var _helperBtn:MovieClip;
      
      private var _bagBtn:MovieClip;
      
      private var _homeBtn:SimpleButton;
      
      private var _petBtn:MovieClip;
      
      private var _cultureBtn:SimpleButton;
      
      private var _shopBtn:MovieClip;
      
      private var _hideUserMc:MovieClip;
      
      private var _soundMc:MovieClip;
      
      private var _questionBtn:SimpleButton;
      
      private var _mailMc:MovieClip;
      
      private var _hideIconMc:MovieClip;
      
      private var _firstShop:Boolean = true;
      
      private var _charTipsPage:MovieClip;
      
      private var _soundTransform:SoundTransform;
      
      private var _lasCheckTime:Date;
      
      public var panelIsShow:Boolean = true;
      
      private var _drawTipCount:int = 0;
      
      private var _mv:MovieClip;
      
      private var _maplock:MovieClip;
      
      private var _newseermc:MovieClip;
      
      private var _chatTipBtnMc:MovieClip;
      
      private var _chatBtn:SimpleButton;
      
      private var _pTalk:SimpleButton;
      
      private var _viplock:MovieClip;
      
      private var _setlock:MovieClip;
      
      private var _mvId:uint;
      
      private var _chatPanelShowBoo:Boolean;
      
      private var _isSend:Boolean;
      
      private var _aimatTween:GlowTween;
      
      public function ToolBarPanel()
      {
         super();
         this._mainUI = UIManager.getSprite("ToolBarMC");
         addChild(this._mainUI);
         this._viplock = this._mainUI["viplock"];
         this._setlock = this._mainUI["setlock"];
         this._inputTxt = this._mainUI["chatMc"]["inputTxt"];
         this._inputTxt.maxChars = 30;
         this._inputTxt.restrict = "^0-9";
         var _loc1_:Array = ["暑期福利放送"];
         this._inputTxt.text = _loc1_[0];
         this._inputTxt.addEventListener(MouseEvent.CLICK,this.onClickText);
         this._inputBtn = this._mainUI["chatMc"]["inputBtn"];
         this._charTipsPage = this._mainUI["charTipsPage"];
         this._showChatBtn = this._mainUI["showChatBtn"];
         this._showChatBtn.gotoAndStop(1);
         this._showChatBtn.buttonMode = true;
         this._mapBtn = this._mainUI["mapBtn"];
         this._starMapBtn = this._mainUI["starMapBtn"];
         this._friendBtn = this._mainUI["friendBtn"];
         this._helperBtn = this._mainUI["helper"];
         this._helperBtn.buttonMode = true;
         this._bagBtn = this._mainUI["bagBtn"];
         this._homeBtn = this._mainUI["homeBtn"];
         this._petBtn = this._mainUI["petBtn"];
         this._mailMc = this._mainUI["mailMc"];
         this._shopBtn = this._mainUI["shopBtn"];
         if(SystemTimerManager.time > new Date(2030,9,6,0,0,0,0).time / 1000)
         {
            this._mainUI["cultureMc"].gotoAndStop(2);
         }
         else
         {
            this._mainUI["cultureMc"].gotoAndStop(1);
         }
         this._cultureBtn = this._mainUI["cultureMc"]["cultureBtn"];
         this._hideUserMc = this._mainUI["userMc"];
         this._hideUserMc.gotoAndStop(1);
         this._hideUserMc.buttonMode = true;
         this._hideIconMc = this._mainUI["iconMc"];
         this._hideIconMc.gotoAndStop(1);
         this._hideIconMc.buttonMode = true;
         this._soundMc = this._mainUI["soundMc"];
         this._soundMc.gotoAndStop(1);
         this._soundMc.buttonMode = true;
         this._questionBtn = this._mainUI["questionMc"];
         this._chatPanel = new ChatPanel(this._mainUI["chatMc"]);
         this._chatPanel.hide();
         this._soundTransform = new SoundTransform();
         ProtectSystem.start(this._mainUI["BatteryMC"]);
         this._maplock = this._mainUI["maplock"];
         this._newseermc = this._mainUI["newseermc"];
         this._chatTipBtnMc = this._mainUI["chatTipBtnMc"];
         this._chatTipBtnMc.visible = false;
         this._chatBtn = this._chatTipBtnMc["chatB"];
         ToolTipManager.add(this._chatTipBtnMc["chatB"],"聊天");
         this._pTalk = this._chatTipBtnMc["pTalk"];
         ToolTipManager.add(this._chatTipBtnMc["pTalk"],"喊话");
         this.hideMapLock();
         this.hidevipLock();
         this.hidesetLock();
         this.addMv();
         getDefinitionByName("com.robot.app2.toolBar.nono.NonoHelperController").start(this._mainUI["nono_helper"]);
         getDefinitionByName("com.robot.app2.email.EmailController").start(this._mailMc);
      }
      
      public function getMainUi() : Sprite
      {
         return this._mainUI;
      }
      
      public function setNonoHelper(param1:Boolean) : void
      {
         this._mainUI["nono_helper"].visible = param1;
      }
      
      public function setShopMv(param1:Boolean) : void
      {
         if(this._mv)
         {
            this._mv.visible = param1;
         }
      }
      
      private function addMv() : void
      {
         var url:String;
         this._mv = new MovieClip();
         url = String(ClientConfig.getAppRes("superMarket/tip"));
         ResourceManager.getResource(url,function(param1:DisplayObject):void
         {
            if(param1)
            {
               _mv.addChild(param1);
            }
         },"item",3,false);
         this._mv.x = 770;
         this._mv.y = 443;
         this._mv.mouseChildren = this._mv.mouseEnabled = false;
         this._mainUI.addChildAt(this._mv,this._mainUI.getChildIndex(this._petBtn) - 1);
         this.updateMv();
      }
      
      private function updateMv() : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            this._mv.visible = false;
         }
         var _loc1_:Date = new Date();
         var _loc2_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         var _loc3_:String = KTool.formatString("shop_mv_{0}_{1}_{2}",_loc1_.fullYear,_loc1_.month,_loc1_.date);
         if(_loc2_.data[_loc3_])
         {
            DisplayUtil.removeAllChild(this._mv);
         }
      }
      
      private function onMv(param1:MouseEvent) : void
      {
         var _loc2_:Date = new Date();
         var _loc3_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         var _loc4_:String = KTool.formatString("shop_mv_{0}_{1}_{2}",_loc2_.fullYear,_loc2_.month,_loc2_.date);
         _loc3_.data[_loc4_] = true;
         _loc3_.flush();
         this.updateMv();
      }
      
      private function onClickText(param1:Event) : void
      {
         this._inputTxt.text = "";
      }
      
      public function show() : void
      {
         if(parent != null)
         {
            return;
         }
         this.addEvent();
         this.checkPetLv();
         this.OLDY = this.y;
         LevelManager.toolsLevel.addChild(this);
      }
      
      public function startMv() : void
      {
         this._mv.play();
         this._mvId = setInterval(function():void
         {
            _mv.play();
         },60 * 1000);
      }
      
      public function clearMv() : void
      {
         clearInterval(this._mvId);
      }
      
      public function hide() : void
      {
         this.removeEvent();
         this.clearMv();
         DisplayUtil.removeForParent(this,false);
      }
      
      public function IsMainIconMc() : void
      {
         clearInterval(this._mvId);
      }
      
      private function addEvent() : void
      {
         this._inputTxt.addEventListener(KeyboardEvent.KEY_DOWN,this.onKeyBoardInput);
         this._inputBtn.addEventListener(MouseEvent.CLICK,this.onInput);
         this._showChatBtn.addEventListener(MouseEvent.CLICK,this.onShowChat);
         this._mapBtn.addEventListener(MouseEvent.CLICK,this.onMap);
         this._starMapBtn.addEventListener(MouseEvent.CLICK,this.onStarMap);
         this._friendBtn.addEventListener(MouseEvent.CLICK,this.onFriend);
         this._helperBtn.addEventListener(MouseEvent.CLICK,this.onHelperBtnClick);
         this._homeBtn.addEventListener(MouseEvent.CLICK,this.onGoHome);
         this._bagBtn.addEventListener(MouseEvent.ROLL_OVER,this.onBagRollOver);
         this._bagBtn.addEventListener(MouseEvent.ROLL_OUT,this.onBagRollOut);
         this._petBtn.addEventListener(MouseEvent.ROLL_OVER,this.onPetRollOver);
         this._petBtn.addEventListener(MouseEvent.ROLL_OUT,this.onPetRollOut);
         this._mailMc.addEventListener(MouseEvent.ROLL_OVER,this.onMailRollOver);
         this._mailMc.addEventListener(MouseEvent.ROLL_OUT,this.onMailRollOut);
         this._shopBtn.buttonMode = true;
         this._shopBtn.mouseChildren = false;
         this._shopBtn.addEventListener(MouseEvent.CLICK,this.onShop);
         this._shopBtn.addEventListener(MouseEvent.ROLL_OVER,this.onShopOver);
         this._shopBtn.addEventListener(MouseEvent.MOUSE_OUT,this.onShopOut);
         this._cultureBtn.addEventListener(MouseEvent.CLICK,this.onCulture);
         this._hideUserMc.addEventListener(MouseEvent.CLICK,this.onUserMcHandler);
         this._soundMc.addEventListener(MouseEvent.CLICK,this.onMusic);
         this._questionBtn.addEventListener(MouseEvent.CLICK,this.onQuestion);
         this._hideIconMc.addEventListener(MouseEvent.CLICK,this.onIconMcHandler);
         this._chatBtn.addEventListener(MouseEvent.CLICK,this.onChatHandle);
         this._pTalk.addEventListener(MouseEvent.CLICK,this.onpTalkHandle);
         SocketConnection.addCmdListener(CommandID.TEAM_INFORM,this.onJoinTeam);
         ToolTipManager.add(this._mapBtn,"星际地图");
         ToolTipManager.add(this._starMapBtn,"小地图");
         ToolTipManager.add(this._friendBtn,"好友");
         ToolTipManager.add(this._helperBtn,"指引小助手");
         ToolTipManager.add(this._homeBtn,"基地");
         ToolTipManager.add(this._showChatBtn,"聊天");
         ToolTipManager.add(this._shopBtn,"火星港商城");
         ToolTipManager.add(this._hideUserMc,"隐藏其他用户");
         ToolTipManager.add(this._soundMc,"静音");
         ToolTipManager.add(this._questionBtn,"在线提问");
         ToolTipManager.add(this._cultureBtn,"精灵养成");
      }
      
      private function emotion(param1:MouseEvent) : void
      {
      }
      
      private function onpTalkHandle(param1:MouseEvent) : void
      {
         if(SystemTimerManager.mingganshiqiChat())
         {
            return;
         }
         if(!this._chatPanelShowBoo)
         {
            this._chatPanel.show();
            this._chatPanelShowBoo = true;
         }
         else
         {
            this._chatPanel.hide();
            this._chatPanelShowBoo = false;
         }
         this.onShowChat(null);
      }
      
      private function onChatHandle(param1:MouseEvent) : void
      {
         if(SystemTimerManager.mingganshiqiChat())
         {
            return;
         }
         ChatManager.getinstance().showChatPanel(true);
         this.onShowChat(null);
         this.hidePTalkPanel();
      }
      
      private function onCulture(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("PetCulturePanel");
      }
      
      private function onMailRollOver(param1:MouseEvent) : void
      {
         this._mailMc.buttonMode = true;
         this._mailMc.gotoAndStop(2);
         ToolTipManager.add(this._mailMc,"你有新邮件");
      }
      
      private function onMailRollOut(param1:MouseEvent) : void
      {
         this._mailMc.gotoAndStop(3);
         ToolTipManager.remove(this._mailMc);
      }
      
      private function onBagRollOver(param1:Event) : void
      {
         this._bagBtn.gotoAndStop(2);
         this._bagBtn["minimark"].addEventListener(MouseEvent.CLICK,this.onClickMinimark);
         this._bagBtn["bagBtn"].addEventListener(MouseEvent.CLICK,this.onBag);
         ToolTipManager.add(this._bagBtn["minimark"],"刻印中心");
         ToolTipManager.add(this._bagBtn["bagBtn"],"储存箱");
      }
      
      private function onBagRollOut(param1:Event) : void
      {
         ToolTipManager.remove(this._bagBtn["partner"]);
         ToolTipManager.remove(this._bagBtn["minimark"]);
         this._bagBtn["minimark"].removeEventListener(MouseEvent.CLICK,this.onClickMinimark);
         this._bagBtn["bagBtn"].removeEventListener(MouseEvent.CLICK,this.onBag);
         this._bagBtn.gotoAndStop(1);
      }
      
      private function onPetRollOver(param1:Event) : void
      {
         this._petBtn.gotoAndStop(2);
         this._petBtn["petBag"].addEventListener(MouseEvent.CLICK,this.onClickPetBag);
         this._petBtn["petBook"].addEventListener(MouseEvent.CLICK,this.onClickPetBook);
         this._petBtn["partner"].addEventListener(MouseEvent.CLICK,this.onClickPartner);
         ToolTipManager.add(this._petBtn["petBag"],"精灵背包");
         ToolTipManager.add(this._petBtn["petBook"],"图鉴");
         ToolTipManager.add(this._petBtn["partner"],"伙伴效果");
         if(NewSeerTaskController.isNewSeer)
         {
            this._petBtn["petBook"].visible = false;
            this._petBtn["bg"].visible = false;
            this._petBtn["partner"].visible = false;
         }
         else
         {
            this._petBtn["petBook"].visible = true;
            this._petBtn["bg"].visible = true;
            this._petBtn["partner"].visible = true;
         }
      }
      
      private function onPetRollOut(param1:Event) : void
      {
         ToolTipManager.remove(this._petBtn["petBag"]);
         ToolTipManager.remove(this._petBtn["petBook"]);
         this._petBtn["petBag"].removeEventListener(MouseEvent.CLICK,this.onClickPetBag);
         this._petBtn["petBook"].removeEventListener(MouseEvent.CLICK,this.onClickPetBook);
         this._petBtn["partner"].removeEventListener(MouseEvent.CLICK,this.onClickPartner);
         this._petBtn.gotoAndStop(1);
      }
      
      private function onClickPartner(param1:Event) : void
      {
         StatManager.sendStat2014("工具条按钮点击","伙伴效果");
         ModuleManager.showAppModule("PetFriendMainPanel");
      }
      
      private function onClickMinimark(param1:Event) : void
      {
         StatManager.sendStat2014("工具条按钮点击","刻印中心");
         ModuleManager.showAppModule("CountermarkCenterNewPanel_2016");
      }
      
      private function onClickPetBag(param1:Event) : void
      {
         StatManager.sendStat2014("工具条按钮点击","精灵背包");
         PetBagControllerNew.showByBuffer();
      }
      
      private function onClickPetBook(param1:Event) : void
      {
         if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
         {
            Alarm.show("完成新手任务后才能开启哦！");
            return;
         }
         StatManager.sendStat2014("工具条按钮点击","精灵图鉴");
         ModuleManager.showModule(ClientConfig.getAppModule("SeerBookEnterPanel"));
      }
      
      private function removeEvent() : void
      {
         this._inputTxt.removeEventListener(KeyboardEvent.KEY_DOWN,this.onKeyBoardInput);
         this._inputBtn.removeEventListener(MouseEvent.CLICK,this.onInput);
         this._showChatBtn.removeEventListener(MouseEvent.CLICK,this.onShowChat);
         this._mapBtn.removeEventListener(MouseEvent.CLICK,this.onMap);
         this._starMapBtn.removeEventListener(MouseEvent.CLICK,this.onStarMap);
         this._friendBtn.removeEventListener(MouseEvent.CLICK,this.onFriend);
         this._homeBtn.removeEventListener(MouseEvent.CLICK,this.onGoHome);
         this._bagBtn.removeEventListener(MouseEvent.ROLL_OVER,this.onBagRollOver);
         this._bagBtn.removeEventListener(MouseEvent.ROLL_OUT,this.onBagRollOut);
         this._petBtn.removeEventListener(MouseEvent.ROLL_OVER,this.onPetRollOver);
         this._petBtn.removeEventListener(MouseEvent.ROLL_OUT,this.onPetRollOut);
         this._mailMc.removeEventListener(MouseEvent.ROLL_OVER,this.onMailRollOver);
         this._mailMc.removeEventListener(MouseEvent.ROLL_OUT,this.onMailRollOut);
         this._shopBtn.removeEventListener(MouseEvent.CLICK,this.onShop);
         this._shopBtn.removeEventListener(MouseEvent.ROLL_OVER,this.onShopOver);
         this._shopBtn.removeEventListener(MouseEvent.MOUSE_OUT,this.onShopOut);
         this._hideUserMc.removeEventListener(MouseEvent.CLICK,this.onUserMcHandler);
         this._soundMc.removeEventListener(MouseEvent.CLICK,this.onMusic);
         this._questionBtn.removeEventListener(MouseEvent.CLICK,this.onQuestion);
         this._hideIconMc.removeEventListener(MouseEvent.CLICK,this.onIconMcHandler);
         this._cultureBtn.removeEventListener(MouseEvent.CLICK,this.onCulture);
         this._chatBtn.removeEventListener(MouseEvent.CLICK,this.onChatHandle);
         this._pTalk.removeEventListener(MouseEvent.CLICK,this.onpTalkHandle);
         SocketConnection.removeCmdListener(CommandID.TEAM_INFORM,this.onJoinTeam);
         ToolTipManager.remove(this._mapBtn);
         ToolTipManager.remove(this._starMapBtn);
         ToolTipManager.remove(this._friendBtn);
         ToolTipManager.remove(this._helperBtn);
         ToolTipManager.remove(this._bagBtn);
         ToolTipManager.remove(this._homeBtn);
         ToolTipManager.remove(this._shopBtn);
         ToolTipManager.remove(this._hideUserMc);
         ToolTipManager.remove(this._hideIconMc);
         ToolTipManager.remove(this._soundMc);
         ToolTipManager.remove(this._questionBtn);
      }
      
      private function onKeyBoardInput(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.ENTER)
         {
            this.onInput(null);
         }
      }
      
      private function onInput(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var KTool:* = getDefinitionByName("com.robot.app.task.petstory.util.KTool");
         KTool.getMultiValue([124651],function(param1:Array):void
         {
            var time:Date = null;
            var t:uint = 0;
            var va:Array = param1;
            var tempTime:int = int(SystemTimerManager.time);
            if(va[0] > tempTime)
            {
               time = new Date(va[0] * 1000);
               Alarm.show("您已被禁言，暂时无法发布任何信息！（禁言结束时间为" + time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "日" + time.getHours() + "时" + time.getMinutes() + "分)");
            }
            else
            {
               if(_isSend)
               {
                  return;
               }
               if(InputCommand.parse(_inputTxt.text))
               {
                  _inputTxt.text = "";
                  return;
               }
               if(_inputTxt.text == "VIP三周岁生日啦！" && TasksManager.getTaskStatus(436) != TasksManager.COMPLETE)
               {
                  TasksManager.accept(436,function():void
                  {
                     TasksManager.complete(436,0);
                  });
               }
               EventManager.dispatchEvent(new DynamicEvent("chatTxtEvent",_inputTxt.text));
               _isSend = true;
               MainManager.actorModel.execBehavior(new ChatBehavior(_inputTxt.text));
               _inputTxt.text = "";
               t = setTimeout(function():void
               {
                  _isSend = false;
                  clearTimeout(t);
               },1000);
            }
         });
      }
      
      public function initInputFor3Years() : void
      {
         this._inputTxt.text = "VIP三周岁生日啦！";
      }
      
      public function closeChatTabMc() : void
      {
         if(this._showChatBtn.currentFrame == 2)
         {
            this.onShowChat(null);
         }
      }
      
      private function onShowChat(param1:MouseEvent) : void
      {
         var t:uint = 0;
         var e:MouseEvent = param1;
         SocketConnection.send(1020,170);
         t = setTimeout(function():void
         {
            _showChatBtn.mouseEnabled = true;
            _showChatBtn.mouseChildren = true;
            clearTimeout(t);
         },1000);
         this._showChatBtn.mouseEnabled = false;
         this._showChatBtn.mouseChildren = false;
         if(this._showChatBtn.currentFrame == 1)
         {
            this._showChatBtn.gotoAndStop(2);
            SocketConnection.send(1020,155);
            e.stopImmediatePropagation();
            this.hidePTalkPanel();
            this._chatTipBtnMc.visible = true;
            ActorActionManager.showMenu(this._chatTipBtnMc);
            ChatManager.getinstance().showChatPanel(false);
            ChatManager.getinstance().hideSchat();
            ModuleManager.hideModule(ClientConfig.getAppModule("NewSeerFriendMainPanel"));
         }
         else
         {
            this._showChatBtn.gotoAndStop(1);
            this._chatTipBtnMc.visible = false;
         }
      }
      
      public function hidePTalkPanel() : void
      {
         if(this._chatPanelShowBoo)
         {
            this._chatPanel.hide();
            this._chatPanelShowBoo = false;
         }
      }
      
      private function onMap(param1:MouseEvent) : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         this.afterPlayGo();
      }
      
      private function afterPlayGo() : void
      {
         StatManager.sendStat2014("工具条按钮点击","大地图");
         if(MapManager.currentMap.id != 11661 && MainManager.actorInfo.mapID != 11661 && Boolean(getDefinitionByName("com.robot.app2.control.SeerReturn201805Controller").IsReturn))
         {
            MapManager.changeMap(11661);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getMapModule("WorldMapPanel"),"正在加载世界地图....");
         }
      }
      
      private function onStarMap(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("工具条按钮点击","小地图");
         if(MapConfig.getMapPlanetIndex(MapManager.currentMap.id) > 0)
         {
            ModuleManager.showAppModule("NewWorldSmallMapPanel",MapConfig.getMapPlanetIndex(MapManager.currentMap.id));
         }
         else
         {
            StarMapController.show();
         }
      }
      
      private function onQuickWord(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,154);
         param1.stopImmediatePropagation();
         QuickWordController.show();
      }
      
      private function onEmotion(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,155);
         param1.stopImmediatePropagation();
         EmotionController.show();
      }
      
      private function onFriend(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("工具条按钮点击","好友");
         param1.stopImmediatePropagation();
         FriendSubMenu.show();
      }
      
      private function onGroup(param1:MouseEvent) : void
      {
         if(MainManager.actorInfo.petMaxLev < 30)
         {
            SocketConnection.send(1022,84807314);
         }
         SocketConnection.send(1020,158);
         param1.stopImmediatePropagation();
         GroupActionManager.showMenu();
      }
      
      private function onBag(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("工具条按钮点击","背包");
         EventManager.dispatchEvent(new Event("newseerToolBarBagClick"));
         BagController.show();
      }
      
      private function onGoHome(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("工具条按钮点击","基地");
         MapManager.changeMap(MainManager.actorID);
      }
      
      private function onShop(param1:MouseEvent) : void
      {
         this.onMv(null);
         StatManager.sendStat2014("工具条按钮点击","商城");
         this._firstShop = false;
         ModuleManager.showModule(ClientConfig.getAppModule("SupermarketPanel"),"","积分商城");
      }
      
      private function onShopOver(param1:MouseEvent) : void
      {
         this._shopBtn.gotoAndStop(2);
      }
      
      private function onShopOut(param1:MouseEvent) : void
      {
         if(this._firstShop)
         {
            this._shopBtn.gotoAndStop(1);
         }
         else
         {
            this._shopBtn.gotoAndStop(3);
         }
      }
      
      private function onMusic(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,165);
         if(this._soundMc.currentFrame == 1)
         {
            this._soundMc.gotoAndStop(2);
            ToolTipManager.add(this._soundMc,"声音");
            this._soundTransform.volume = 0;
            SoundMixer.soundTransform = this._soundTransform;
         }
         else
         {
            this._soundMc.gotoAndStop(1);
            ToolTipManager.add(this._soundMc,"静音");
            this._soundTransform.volume = 1;
            SoundMixer.soundTransform = this._soundTransform;
         }
      }
      
      public function setSound(param1:Boolean) : void
      {
         if(!param1)
         {
            this._soundMc.gotoAndStop(2);
            ToolTipManager.remove(this._soundMc);
            ToolTipManager.add(this._soundMc,"声音");
            SoundManager.setIsPlay = false;
            SoundManager.stopSound();
         }
         else
         {
            this._soundMc.gotoAndStop(1);
            ToolTipManager.remove(this._soundMc);
            ToolTipManager.add(this._soundMc,"静音");
            SoundManager.setIsPlay = true;
            SoundManager.playSound();
         }
      }
      
      public function setCulture(param1:Boolean) : void
      {
         CommonUI.setEnabled(this._cultureBtn,param1,!param1);
      }
      
      private function onUserMcHandler(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,164);
         if(UserManager.isShow)
         {
            UserManager.isShow = false;
            MapManager.currentMap.hideAllUser();
            this._hideUserMc.gotoAndStop(2);
            ToolTipManager.add(this._hideUserMc,"显示其他用户");
            this.panelIsShow = false;
         }
         else
         {
            UserManager.isShow = true;
            MapManager.currentMap.showAllUser();
            this._hideUserMc.gotoAndStop(1);
            ToolTipManager.add(this._hideUserMc,"隐藏其他用户");
            this.panelIsShow = true;
         }
      }
      
      private function onIconMcHandler(param1:MouseEvent) : void
      {
         var b:Boolean = false;
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.isVip)
         {
            b = Boolean(LevelManager.iconLevel.visible);
            if(MapManager.currentMap.id == 11661)
            {
               return;
            }
            LevelManager.iconLevel.visible = !b;
            this._hideIconMc.gotoAndStop(b ? 2 : 1);
            ToolTipManager.add(this._hideIconMc,b ? "显示所有图标" : "隐藏所有图标");
         }
         else
         {
            Alert.show("只有VIP用户才可以使用隐藏图标功能哦，是否现在去开通VIP？",function():void
            {
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
            });
         }
      }
      
      private function onQuestion(param1:MouseEvent) : void
      {
         OnlineServiceController.show();
      }
      
      private function onJoinTeam(param1:SocketEvent) : void
      {
         var _loc2_:TeamInformInfo = param1.data as TeamInformInfo;
      }
      
      private function onHelperBtnClick(param1:*) : void
      {
         StatManager.sendStat2014("工具条按钮点击","指引");
         ModuleManager.showModule(ClientConfig.getAppModule("NewGuide2020Panel"));
         RectangleMask.dispatchEvent(new DynamicEvent(RectangleMask.CLICK_NEXT,220));
      }
      
      public function noticeAimat(param1:Boolean) : void
      {
      }
      
      public function bubble(param1:String) : void
      {
         var _loc2_:DialogBox = new DialogBox();
         _loc2_.show("战队成员" + param1 + "为战队建设做出了贡献，获得奖励并被表彰！",this._friendBtn.x + 25,5,this);
      }
      
      public function showOrHideUser(param1:Boolean) : void
      {
         if(param1)
         {
            if(!UserManager.isShow)
            {
               UserManager.isShow = true;
               MapManager.currentMap.showAllUser();
               this._hideUserMc.gotoAndStop(1);
               ToolTipManager.add(this._hideUserMc,"隐藏其他用户");
            }
         }
         else if(UserManager.isShow)
         {
            UserManager.isShow = false;
            MapManager.currentMap.hideAllUser();
            this._hideUserMc.gotoAndStop(2);
            ToolTipManager.add(this._hideUserMc,"显示其他用户");
         }
      }
      
      public function showMapLock() : void
      {
         this._maplock.visible = true;
      }
      
      public function hideMapLock() : void
      {
         this._maplock.visible = false;
      }
      
      public function showvipLock() : void
      {
         this._viplock.visible = true;
      }
      
      public function hidevipLock() : void
      {
         this._viplock.visible = false;
      }
      
      public function showsetLock() : void
      {
         this._setlock.visible = true;
      }
      
      public function hidesetLock() : void
      {
         this._setlock.visible = false;
      }
      
      public function showNewseermc() : void
      {
         this._hideIconMc.visible = false;
         this._hideIconMc.parent.setChildIndex(this._hideIconMc,0);
         this._newseermc.visible = true;
         this._hideUserMc.x = 874.85;
         this._hideUserMc.y = 485.2;
         this._questionBtn.x = 924;
         this._questionBtn.y = 480.9;
         this._soundMc.x = 899.75;
         this._soundMc.y = 480.95;
      }
      
      public function hideNewseermc() : void
      {
         this._newseermc.visible = false;
         this._hideIconMc.visible = true;
         this._hideIconMc.parent.setChildIndex(this._hideIconMc,this._hideIconMc.parent.numChildren - 1);
         this._hideUserMc.x = 887.85;
         this._hideUserMc.y = 482.5;
         this._questionBtn.x = 931.15;
         this._questionBtn.y = 483.4;
         this._soundMc.x = 911.6;
         this._soundMc.y = 480.6;
      }
      
      public function closeMap() : void
      {
         this._mapBtn.enabled = false;
         this._mapBtn.mouseEnabled = false;
         this._mapBtn.mouseChildren = false;
      }
      
      public function openMap() : void
      {
         this._mapBtn.enabled = true;
         this._mapBtn.mouseEnabled = true;
         this._mapBtn.mouseChildren = true;
      }
      
      public function closeStarMap() : void
      {
         this._starMapBtn.visible = false;
      }
      
      public function openStarMap() : void
      {
         this._starMapBtn.visible = true;
      }
      
      public function emailShow() : void
      {
         this._mailMc.visible = false;
      }
      
      public function emailHide() : void
      {
         this._mailMc.visible = false;
      }
      
      public function guideShine(param1:Boolean) : void
      {
         this._helperBtn.gotoAndStop(param1 ? 2 : 1);
      }
      
      public function vipOff() : void
      {
         this._mainUI["nono_helper"].gotoAndStop(1);
         CommonUI.setEnabled(this._mainUI["nono_helper"],false);
         DisplayUtil.stopAllMovieClip(this._mainUI["nono_helper"]);
      }
      
      public function vipOn() : void
      {
         CommonUI.setEnabled(this._mainUI["nono_helper"],true);
      }
      
      public function closeOrOpenGroupBtn(param1:Boolean) : void
      {
         CommonUI.setEnabled(this._homeBtn,param1);
      }
      
      public function bagOn() : void
      {
         CommonUI.setEnabled(this._bagBtn,true);
      }
      
      public function bagOff() : void
      {
         CommonUI.setEnabled(this._bagBtn,false);
      }
      
      public function closeOrOpenImBtn(param1:Boolean) : void
      {
         CommonUI.setEnabled(this._friendBtn,param1);
      }
      
      public function friendOff() : void
      {
         CommonUI.setEnabled(this._friendBtn,false);
      }
      
      public function friendOn() : void
      {
         CommonUI.setEnabled(this._friendBtn,true);
      }
      
      public function homeOff() : void
      {
         CommonUI.setEnabled(this._homeBtn,false);
      }
      
      public function homeOn() : void
      {
         CommonUI.setEnabled(this._homeBtn,true);
      }
      
      public function closePetBag(param1:Boolean) : void
      {
         CommonUI.setEnabled(this._petBtn,param1);
      }
      
      public function checkPetLv() : void
      {
      }
      
      public function setHomeEnable(param1:Boolean) : void
      {
         this._homeBtn.mouseEnabled = param1;
         if(param1)
         {
            this._homeBtn.filters = null;
         }
         else
         {
            this._homeBtn.filters = [ColorFilter.setGrayscale()];
         }
      }
      
      public function setFriendEnable(param1:Boolean) : void
      {
         this._friendBtn.mouseEnabled = param1;
         if(param1)
         {
            this._friendBtn.filters = null;
         }
         else
         {
            this._friendBtn.filters = [ColorFilter.setGrayscale()];
         }
      }
      
      public function setHelperEnable(param1:Boolean) : void
      {
         this._helperBtn.mouseEnabled = param1;
         this._helperBtn.mouseChildren = param1;
         if(param1)
         {
            this._helperBtn.filters = null;
         }
         else
         {
            this._helperBtn.filters = [ColorFilter.setGrayscale()];
         }
      }
      
      public function setShopEnable(param1:Boolean) : void
      {
         this._shopBtn.mouseEnabled = param1;
         this._shopBtn.mouseChildren = param1;
         if(param1)
         {
            this._shopBtn.filters = null;
         }
         else
         {
            this._shopBtn.filters = [ColorFilter.setGrayscale()];
         }
      }
      
      public function setPlayerEnable(param1:Boolean) : void
      {
         this._hideUserMc.mouseEnabled = param1;
         this._hideUserMc.mouseChildren = param1;
         if(param1)
         {
            this._hideUserMc.filters = null;
         }
         else
         {
            this._hideUserMc.filters = [ColorFilter.setGrayscale()];
         }
      }
      
      public function hideMiddle() : void
      {
         var _loc1_:int = 0;
         var _loc2_:DisplayObject = null;
         if(this._mainUI)
         {
            _loc1_ = 0;
            while(_loc1_ < this._mainUI.numChildren)
            {
               _loc2_ = this._mainUI.getChildAt(_loc1_);
               _loc2_.visible = false;
               _loc1_++;
            }
            this._mainUI["nono_helper"].visible = true;
            this._mainUI["BatteryMC"].visible = true;
            this._mainUI["shopBtn"].visible = true;
            this._mainUI["userMc"].visible = true;
            this._mainUI["soundMc"].visible = true;
            this._mainUI["questionMc"].visible = true;
            this._mainUI["shopBg"].visible = true;
         }
      }
      
      public function showMiddle() : void
      {
         var _loc1_:int = 0;
         var _loc2_:DisplayObject = null;
         if(this._mainUI)
         {
            _loc1_ = 0;
            while(_loc1_ < this._mainUI.numChildren)
            {
               _loc2_ = this._mainUI.getChildAt(_loc1_);
               _loc2_.visible = true;
               _loc1_++;
            }
         }
      }
      
      public function get homeBtn() : SimpleButton
      {
         return this._homeBtn;
      }
      
      public function get inputTxt() : TextField
      {
         return this._inputTxt;
      }
      
      public function hidebtnByNames(param1:Array) : void
      {
         var _loc2_:int = 0;
         var _loc3_:DisplayObject = null;
         if(this._mainUI)
         {
            _loc2_ = 0;
            while(_loc2_ < this._mainUI.numChildren)
            {
               _loc3_ = this._mainUI.getChildAt(_loc2_);
               if(param1.indexOf(_loc3_.name) == -1)
               {
                  _loc3_.visible = true;
               }
               else
               {
                  _loc3_.visible = false;
               }
               _loc2_++;
            }
         }
         this._inputTxt.visible = false;
         this._inputBtn.visible = false;
         this._chatPanel.hide();
         this._mainUI["uiDot"].visible = false;
         this._chatTipBtnMc.visible = false;
         this._showChatBtn.gotoAndStop(1);
         this.updateMv();
      }
   }
}
