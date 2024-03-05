package com.robot.app.user
{
   import com.robot.app.ParseSocketError;
   import com.robot.app.achieve.AchievePanelController;
   import com.robot.app.bag.UserInfoPanelPreview;
   import com.robot.app.buyItem.ProductAction;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.picturebook.PictureBookController;
   import com.robot.app.team.TeamController;
   import com.robot.core.CommandID;
   import com.robot.core.behavior.ChangeNickBehavior;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.config.xml.MedalsXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.teamInstallation.TeamInfoManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.system.System;
   import flash.text.TextField;
   import flash.text.TextFieldType;
   import flash.text.TextFormat;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   import org.taomee.utils.StringUtil;
   
   public class NewUserInfoPanel implements IUserInfoPanel
   {
       
      
      private var _ui:MovieClip;
      
      private var _info:UserInfo;
      
      private var _preview:UserInfoPanelPreview;
      
      private var _sptScroll:UIScrollBar;
      
      private var _teamInfo:SimpleTeamInfo;
      
      private var result:int;
      
      private var _achievePanel:com.robot.app.user.AchieveTitlePanel;
      
      public function NewUserInfoPanel()
      {
         super();
      }
      
      public function hide() : void
      {
         if(this._ui)
         {
            DisplayUtil.removeForParent(this._ui);
            this.removeEvent();
         }
         this._ui = null;
         this._info = null;
         this._preview = null;
         this._teamInfo = null;
      }
      
      public function show(param1:uint, param2:Boolean = false) : void
      {
         this._info = MainManager.actorInfo;
         this.getUserInfo();
         if(this._ui == null)
         {
            this.loadUI();
         }
         else
         {
            this.initPanel();
         }
      }
      
      private function addEvent() : void
      {
         if(!this._ui)
         {
            return;
         }
         this._ui.addEventListener(MouseEvent.CLICK,this.onClickHandler);
         ParseSocketError.addErrorListener(10005,this.onBadName);
         EventManager.addEventListener(RobotEvent.DIAMOND_BUY,this.afterBuy);
         SocketConnection.addCmdListener(CommandID.TEAM_ADD,this.onTeamAdd);
         SocketConnection.addCmdListener(CommandID.TEAM_CREATE,this.onTeamAdd);
      }
      
      private function removeEvent() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClickHandler);
         ParseSocketError.removeErrorListener(10005,this.onBadName);
         EventManager.removeEventListener(RobotEvent.DIAMOND_BUY,this.afterBuy);
         SocketConnection.removeCmdListener(CommandID.TEAM_ADD,this.onTeamAdd);
         SocketConnection.removeCmdListener(CommandID.TEAM_CREATE,this.onTeamAdd);
      }
      
      private function afterBuy(param1:DynamicEvent) : void
      {
         this.showMoney();
      }
      
      private function startChangeNick() : void
      {
         TextField(this._ui["txtNick"]).type = TextFieldType.INPUT;
         MovieClip(this._ui["mcChangeNick"]).gotoAndStop(2);
         LevelManager.stage.focus = TextField(this._ui["txtNick"]);
         TextField(this._ui["txtNick"]).background = true;
         TextField(this._ui["txtNick"]).backgroundColor = 11065592;
         TextField(this._ui["txtNick"]).setSelection(0,this._ui["txtNick"].text.length);
         var _loc1_:TextFormat = new TextFormat();
         _loc1_.color = 16777215;
         TextField(this._ui["txtNick"]).setTextFormat(_loc1_);
      }
      
      protected function onFocusOut() : void
      {
         MovieClip(this._ui["mcChangeNick"]).gotoAndStop(1);
         TextField(this._ui["txtNick"]).text = StringUtil.trim(this._ui["txtNick"].text);
         TextField(this._ui["txtNick"]).background = false;
         if(TextField(this._ui["txtNick"]).text == "")
         {
            TextField(this._ui["txtNick"]).text = MainManager.actorInfo.nick;
         }
         TextField(this._ui["txtNick"]).type = TextFieldType.DYNAMIC;
         var _loc1_:TextFormat = new TextFormat();
         _loc1_.color = 10092543;
         TextField(this._ui["txtNick"]).setTextFormat(_loc1_);
      }
      
      protected function onClickNick(param1:MouseEvent) : void
      {
         TextField(this._ui["txtNick"]).background = true;
         TextField(this._ui["txtNick"]).backgroundColor = 11065592;
         TextField(this._ui["txtNick"]).setSelection(0,this._ui["txtNick"].text.length);
         var _loc2_:TextFormat = new TextFormat();
         _loc2_.color = 16777215;
         TextField(this._ui["txtNick"]).setTextFormat(_loc2_);
      }
      
      private function onBadName(param1:Event) : void
      {
         TextField(this._ui["txtNick"]).text = MainManager.actorInfo.nick;
      }
      
      private function saveNick() : void
      {
         if(TextField(this._ui["txtNick"]).text == "")
         {
            Alarm.show("昵称不能为空！");
            TextField(this._ui["txtNick"]).text = MainManager.actorInfo.nick;
            return;
         }
         var _loc1_:ByteArray = new ByteArray();
         _loc1_.writeUTFBytes(TextField(this._ui["txtNick"]).text);
         if(_loc1_.length > 15)
         {
            Alarm.show("输入的文字太长了！");
            TextField(this._ui["txtNick"]).text = MainManager.actorInfo.nick;
            return;
         }
         this.onFocusOut();
         if(TextField(this._ui["txtNick"]).text == MainManager.actorInfo.nick)
         {
            return;
         }
         MainManager.actorModel.execBehavior(new ChangeNickBehavior(TextField(this._ui["txtNick"]).text));
      }
      
      protected function onClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var targetName:String = String(e.target.name);
         switch(targetName)
         {
            case "btnClose":
               this.hide();
               break;
            case "btnSecurity":
               this.hide();
               ModuleManager.showAppModule("securityGuard/SecurityGuardPanel");
               break;
            case "btnChangeNick":
               if(SystemTimerManager.mingganshiqi())
               {
                  return;
               }
               this.startChangeNick();
               break;
            case "btnSaveNick":
               this.saveNick();
               break;
            case "btnChangeTitle":
               this._achievePanel.show();
               break;
            case "btnVip":
               ModuleManager.showAppModule("NewVIPEquityPanel");
               break;
            case "btnFortress":
               TeamController.enter(MainManager.actorInfo.teamInfo.id);
               break;
            case "btnIntoTeam":
               if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
               {
                  Alarm2.show("完成新手任务后开放");
                  return;
               }
               ModuleManager.showAppModule("TeamJoinPanel");
               break;
            case "btnLevel":
               if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
               {
                  Alarm2.show("完成新手任务后开放");
                  return;
               }
               this.hide();
               AchievePanelController.showNew();
               break;
            case "btnVip":
               this.hide();
               ModuleManager.showAppModule("NewVIPEquityPanel");
               break;
            case "btnAddCoin":
               this.hide();
               ModuleManager.showAppModule("ResourceCopyMainPanel");
               break;
            case "btnAddGold":
               ModuleManager.showAppModule("GoldBuyPanel");
               break;
            case "btnAddMoney":
               ProductAction.checkPhoneBinding();
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_2,"2",function():void
               {
                  initPanel();
               });
               break;
            case "btnSPT":
               if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
               {
                  Alarm2.show("完成新手任务后开放");
                  return;
               }
               this.hide();
               ModuleManager.showAppModule("SptVanguardFightMainPanel");
               break;
            case "btnPVE":
               if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
               {
                  Alarm2.show("完成新手任务后开放");
                  return;
               }
               ModuleManager.showModule(ClientConfig.getAppModule("UserPvePointPanel"),"正在加载....",this._info);
               break;
            case "btnPVP":
               if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
               {
                  Alarm2.show("完成新手任务后开放");
                  return;
               }
               ModuleManager.showModule(ClientConfig.getAppModule("UserPvpPointPanel"),"正在加载....",this._info);
               break;
            case "btnStorage":
               this.hide();
               ModuleManager.showAppModule("FittingRoomPanel");
               break;
            case "btnPetBook":
               if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
               {
                  Alarm2.show("完成新手任务后开放");
                  return;
               }
               PictureBookController.show();
               break;
            case "copy":
               StatManager.sendStat2014("0611米米号展示优化","点击了米米号【复制】按钮","2021运营活动");
               System.setClipboard(MainManager.actorInfo.userID.toString());
               Alarm.show("米米号复制成功！");
         }
      }
      
      private function initPanel() : void
      {
         this.addEvent();
         LevelManager.appLevel.addChild(this._ui);
         TextField(this._ui["txtNick"]).type = TextFieldType.DYNAMIC;
         this._ui["txtUserId"].text = this._info.userID;
         this._ui["txtNick"].text = this._info.nick;
         var _loc1_:Date = new Date(this._info.regTime * 1000);
         var _loc2_:* = _loc1_.getFullYear().toString() + "-" + (_loc1_.getMonth() + 1).toString() + "-" + _loc1_.getDate().toString() + "";
         this._ui["txtLoginTime"].text = _loc2_;
         this._ui["rankicon_mc"].gotoAndStop(17 - this.getMediaIndex());
         MovieClip(this._ui["mcChangeNick"]).gotoAndStop(1);
         this.showAchieveTitle();
         this.showVip();
         this.showTeamInfo();
         this._ui["txtLvlName"].text = this.getAchieveTitle();
         this._ui["txtAchieve"].text = "" + this._info.totalAchieve;
         this.showMoney();
         this.showPetBook();
         this.showAvatar();
         this._achievePanel = new com.robot.app.user.AchieveTitlePanel(this._ui["mcAchievePanel"],this.showAchieveTitle);
      }
      
      private function getUserInfo() : void
      {
         UserInfoManager.upDateSimpleInfo(this._info,function():void
         {
            UserInfoManager.upDateMoreInfo(_info,function():void
            {
            });
         });
      }
      
      private function showAchieveTitle() : void
      {
         this._ui["txtTitle"].text = AchieveXMLInfo.getTitle(this._info.curTitle);
      }
      
      private function showVip() : void
      {
         if(this._info.isVip)
         {
            this._ui["mcVip"].gotoAndStop(this._info.vipLevel + 1);
            this._ui["mcVipIcon"]["lv"].gotoAndStop(this._info.vipLevel);
            this._ui["mcVipIcon"].visible = true;
         }
         else
         {
            this._ui["mcVip"].gotoAndStop(1);
            this._ui["mcVipIcon"].visible = false;
         }
      }
      
      private function showAvatar() : void
      {
         while(MovieClip(this._ui["mcAvatar"]).numChildren > 0)
         {
            MovieClip(this._ui["mcAvatar"]).removeChildAt(0);
         }
         var _loc1_:Sprite = UIManager.getSprite("ComposeMC");
         _loc1_.mouseEnabled = false;
         _loc1_.scaleX = _loc1_.scaleY = 0.9;
         this._ui["mcAvatar"].addChild(_loc1_);
         this._preview = new UserInfoPanelPreview(_loc1_,null,ClothPreview.MODEL_SHOW);
         this._preview.showCloths(this._info.clothes);
         this._preview.showDoodle(this._info.texture);
         this._preview.changeColor(this._info.color);
      }
      
      private function onTeamAdd(param1:SocketEvent) : void
      {
         setTimeout(this.showTeamInfo,300);
      }
      
      private function showTeamInfo() : void
      {
         if(!this._ui)
         {
            return;
         }
         if(MainManager.actorInfo.teamInfo.id == 0)
         {
            MovieClip(this._ui["mcTeam"]).gotoAndStop(2);
            this._ui["txtTeamName"].text = "暂未加入";
         }
         else
         {
            MovieClip(this._ui["mcTeam"]).gotoAndStop(1);
            TeamInfoManager.getSimpleTeamInfo(MainManager.actorInfo.teamInfo.id,function(param1:SimpleTeamInfo):void
            {
               _teamInfo = param1;
               _ui["txtTeamName"].text = "" + param1.name;
            });
         }
      }
      
      private function showMoney() : void
      {
         this._ui["txtCoin"].text = "" + this._info.coins;
         SocketConnection.sendByQueue(CommandID.GOLD_CHECK_REMAIN,[],function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.GOLD_CHECK_REMAIN,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _ui["txtGold"].text = (_loc3_.readUnsignedInt() / 100).toString();
         });
         SocketConnection.sendWithCallback(CommandID.MONEY_CHECK_REMAIN,function(param1:*):void
         {
            var _loc2_:ByteArray = param1.data;
            _loc2_.position = 0;
            _ui["txtMoney"].text = "" + _loc2_.readUnsignedInt() / 100;
         });
      }
      
      private function showPetBook() : void
      {
         this._ui["txtPetCount"].text = this._info.petAllNum.toString();
         SocketConnection.send(CommandID.SEEROL_GET_MON_CLASS_CNT,this._info.userID);
         SocketConnection.sendWithCallback(CommandID.SEEROL_GET_MON_CLASS_CNT,function(param1:SocketEvent):void
         {
            var _loc2_:int = int((param1.data as ByteArray).readUnsignedInt());
            _ui["txtCateCount"].text = _loc2_.toString();
         },this._info.userID);
      }
      
      private function getMediaIndex() : int
      {
         var _loc1_:Array = null;
         var _loc2_:int = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         if(this._info.totalAchieve < 600)
         {
            _loc1_ = MedalsXMLInfo.getMedalIcon(this._info.totalAchieve);
            return _loc1_[0].id;
         }
         _loc2_ = 0;
         _loc3_ = uint(this._info.achieRank);
         _loc4_ = 0;
         while(_loc4_ < 32)
         {
            if(BitUtil.getBit(_loc3_,_loc4_) == 0)
            {
               _loc2_ = _loc4_ + 4;
               break;
            }
            _loc4_++;
         }
         return _loc2_;
      }
      
      private function getAchieveTitle() : String
      {
         var _loc1_:Array = null;
         var _loc2_:int = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         if(this._info.totalAchieve < 600)
         {
            _loc1_ = MedalsXMLInfo.getMedalIcon(this._info.totalAchieve);
            return _loc1_[0].title;
         }
         _loc2_ = 0;
         _loc3_ = uint(this._info.achieRank);
         _loc4_ = 0;
         while(_loc4_ < 32)
         {
            if(BitUtil.getBit(_loc3_,_loc4_) == 0)
            {
               _loc2_ = _loc4_ + 4;
               break;
            }
            _loc4_++;
         }
         return MedalsXMLInfo.getTitleList()[_loc2_];
      }
      
      private function loadUI() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("2015/0619/UserInfoUI"),function(param1:MovieClip):void
         {
            _ui = param1;
            CommonUI.resetUiAllTxtFont(_ui);
            initPanel();
         });
      }
   }
}
