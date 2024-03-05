package com.robot.app.user
{
   import com.robot.app.bag.UserInfoPanelPreview;
   import com.robot.app.fight.FightManager;
   import com.robot.app.group.GroupController;
   import com.robot.app.popup.FollowPanel;
   import com.robot.app.task.SeerInstructor.NewInstructorController;
   import com.robot.app.team.TeamController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.config.xml.MedalsXMLInfo;
   import com.robot.core.event.RelationEvent;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.relation.OnLineInfo;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.manager.FriendManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.teamInstallation.TeamInfoManager;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.system.System;
   import flash.utils.ByteArray;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class OtherUserInfoPanel implements IUserInfoPanel
   {
       
      
      private var _ui:MovieClip;
      
      private var _info:UserInfo;
      
      private var _preview:UserInfoPanelPreview;
      
      private var _teamInfo:SimpleTeamInfo;
      
      public function OtherUserInfoPanel()
      {
         super();
      }
      
      public function hide() : void
      {
         DisplayUtil.removeForParent(this._ui);
      }
      
      public function show(param1:uint, param2:Boolean = false) : void
      {
         this._info = new UserInfo();
         this._info.userID = param1;
         if(this._ui == null)
         {
            this.loadUI();
         }
         else
         {
            this.getUserInfo();
         }
      }
      
      private function addEvent() : void
      {
         if(!this._ui)
         {
            return;
         }
         this._ui.addEventListener(MouseEvent.CLICK,this.onClickHandler);
      }
      
      private function removeEvent() : void
      {
         if(!this._ui)
         {
            return;
         }
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClickHandler);
      }
      
      protected function onClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name);
         switch(_loc2_)
         {
            case "btnClose":
               this.hide();
               break;
            case "btnAddFriend":
               this.onClickAddFriend();
               break;
            case "btnDelFriend":
               this.onClickDelFriend();
               break;
            case "btnGroupSelect":
               this.onClickSelectGroup();
               break;
            case "btnInviteToGroup":
               this.onInviteJoinGroup();
               break;
            case "btnInviteToTeam":
               this.hide();
               TeamController.invite(this._info.userID);
               break;
            case "btnApplyJoinGroup":
               this.hide();
               GroupController.applyJoin(this._info.userID);
               break;
            case "btnHome":
               this.onHome();
               break;
            case "btnFight":
               this.onFight();
               break;
            case "btnFind":
               this.onFind();
               break;
            case "btnBlackChoice":
               this.onBlackChoice();
               break;
            case "btnBlack":
               this.onBlack();
               break;
            case "btnComplain":
               this.onComplain();
               break;
            case "btnIns":
               this.onClickIns();
               break;
            case "btnInstructor":
               this.onClickInstructor();
               break;
            case "btnStudent":
               NewInstructorController.sendToBeInstructor(this._info.userID);
               this.onClickIns();
               break;
            case "btnPveIntro":
               ModuleManager.showModule(ClientConfig.getAppModule("UserPvePointPanel"),"正在加载....",this._info);
               break;
            case "btnFire":
               this.onFire();
               break;
            case "btnPvpIntro":
               ModuleManager.showModule(ClientConfig.getAppModule("UserPvpPointPanel"),"正在加载....",this._info);
               break;
            case "copy":
               System.setClipboard(this._info.userID.toString());
               Alarm.show("米米号复制成功！");
               break;
            default:
               this._ui["mcGroup"].visible = false;
               this._ui["mcBlackList"].visible = false;
               this._ui["mcStudy"].visible = false;
         }
      }
      
      private function onFire() : void
      {
         if(Boolean(this._info) && this._info.fireBuff > 0)
         {
            if(MainManager.actorInfo.fireBuff == 0)
            {
               Alert.show("你是否希望得到" + this._info.nick + "的火焰效果吗？",function():void
               {
                  SocketConnection.send(CommandID.FIRE_ACT_COPY,_info.userID);
               });
            }
            else
            {
               Alarm.show("你当前拥有火焰效果，无法用其他效果替代！");
            }
         }
      }
      
      private function onClickAddFriend() : void
      {
         if(FriendManager.isBlack(this._info.userID))
         {
            Alarm.show("黑名单用户不能相互添加好友");
         }
         else
         {
            Alert.show("你想和" + this._info.nick + "(" + this._info.userID + ")\r成为好友吗？",function():void
            {
               FriendManager.addFriend(_info.userID).then(function():void
               {
                  _info.isFriend = true;
               });
            });
         }
      }
      
      private function onClickDelFriend() : void
      {
         Alert.show("你要删除好友" + this._info.nick + "(" + this._info.userID + ")吗？",function():void
         {
            FriendManager.removeFriend(_info.userID);
         });
      }
      
      private function onClickIns() : void
      {
         if(this._ui["mcStudy"].visible)
         {
            this.hideTipIcon();
         }
         else
         {
            this.hideTipIcon();
            this._ui["mcStudy"].visible = true;
         }
      }
      
      private function onClickStudent() : void
      {
         NewInstructorController.sendToBeInstructor(this._info.userID);
         this.onClickIns();
      }
      
      private function onClickInstructor() : void
      {
         NewInstructorController.sendToBeStudent(this._info.userID);
         this.onClickIns();
      }
      
      private function onBlackChoice() : void
      {
         if(this._ui["mcBlackList"].visible)
         {
            this.hideTipIcon();
         }
         else
         {
            this.hideTipIcon();
            this._ui["mcBlackList"].visible = true;
         }
      }
      
      private function onBlack() : void
      {
         Alert.show("你确定要把" + this._info.nick + "(" + this._info.userID + ")加入黑名单吗？",function():void
         {
            FriendManager.addBlack(_info.userID);
         });
      }
      
      private function onComplain() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ComplainNewPanel"),"正在加载举报系统....",[this._info,""]);
      }
      
      private function onFind() : void
      {
         UserInfoManager.upDateSimpleInfo(this._info,function():void
         {
            UserInfoManager.seeOnLine([_info.userID],function(param1:Array):void
            {
               var _loc2_:OnLineInfo = null;
               var _loc3_:OnLineInfo = null;
               if(param1.length > 0)
               {
                  for each(_loc3_ in param1)
                  {
                     if(_loc3_.userID == _info.userID)
                     {
                        _loc2_ = _loc3_;
                        break;
                     }
                  }
                  _info.serverID = _loc2_.serverID;
                  if(_info.mapID == 0 || _info.serverID == MainManager.actorInfo.serverID)
                  {
                     _info.mapID = _loc2_.mapID;
                  }
                  if(_info.mapID > MapManager.ID_MAX)
                  {
                     Alarm.show("你的好友" + _info.nick + "(" + _info.userID + ")\n在<font color=\'#FF0000\'>基地</font>里！");
                     return;
                  }
                  if(_loc2_.serverID != MainManager.serverID)
                  {
                     Alarm.show("你的好友" + _info.nick + "(" + _info.userID + ")在" + TextFormatUtil.getRedTxt(_loc2_.serverID + "号") + "服务器！");
                     return;
                  }
                  if(_info.mapID == MainManager.actorInfo.mapID)
                  {
                     Alarm.show("你的好友" + _info.nick + "(" + _info.userID + ")\n就在您的身边哦！");
                     return;
                  }
                  FollowPanel.show(_info);
                  return;
               }
               Alarm.show("你的好友" + _info.nick + "(" + _info.userID + ")\n现在不在线哦！");
            });
         });
      }
      
      private function onFight() : void
      {
         this.hide();
         FightManager.fightWithPlayer(this._info);
      }
      
      private function onHome() : void
      {
         this.hide();
         MapManager.changeMap(this._info.userID);
      }
      
      private function onClickSelectGroup() : void
      {
         if(this._ui["mcGroup"].visible == false)
         {
            this.hideTipIcon();
            this._ui["mcGroup"].visible = true;
            if(!GroupManager.isInGroup && !this._info.groupInfo || MainManager.actorInfo.groupInfo && GroupManager.isInGroup)
            {
               this._ui["mcGroup"]["btnInviteToGroup"].visible = true;
               this._ui["mcGroup"]["btnApplyJoinGroup"].visible = false;
            }
            else if(!GroupManager.isInGroup)
            {
               this._ui["mcGroup"]["btnInviteToGroup"].visible = false;
               this._ui["mcGroup"]["btnApplyJoinGroup"].visible = true;
            }
         }
         else
         {
            this.hideTipIcon();
         }
      }
      
      private function onInviteJoinGroup() : void
      {
         if(MainManager.actorID == MainManager.actorInfo.mapID || MainManager.actorInfo.mapID == this._info.userID)
         {
            return;
         }
         this.hide();
         if(FriendManager.isFriend(this._info.userID))
         {
            RelationManager.addEventListener(RelationEvent.FRIEND_UPDATE_ONLINE,this.onCheckOnline);
            RelationManager.setOnLineFriend();
         }
         else if(!MainManager.actorInfo.groupInfo && !GroupManager.isInGroup)
         {
            GroupController.setGroupStatus(function():void
            {
               GroupController.inviteJoin(_info);
            });
         }
         else
         {
            GroupController.inviteJoin(this._info);
         }
      }
      
      private function onCheckOnline(param1:RelationEvent) : void
      {
         var _loc2_:UserInfo = null;
         RelationManager.removeEventListener(RelationEvent.FRIEND_UPDATE_ONLINE,this.onCheckOnline);
         _loc2_ = FriendManager.getFriendInfo(this._info.userID);
         var _loc3_:Array = RelationManager.friendOnLineIDs;
         if(Boolean(_loc2_) && _loc2_.serverID != MainManager.serverID)
         {
            if(_loc2_.serverID == 0)
            {
               Alarm.show("该好友当前不在线！");
            }
            else
            {
               Alarm.show("该好友当前在" + TextFormatUtil.getRedTxt(_loc2_.serverID.toString()) + "号服务器，没有和你在一个服务器哦。");
            }
            return;
         }
         SocketConnection.addCmdListener(CommandID.SEE_ONLINE,this.onSeeOnline);
         SocketConnection.send(CommandID.SEE_ONLINE,1,_loc2_.userID);
      }
      
      private function onSeeOnline(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var count:uint;
         var mapID:uint;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.SEE_ONLINE,this.onSeeOnline);
         data = e.data as ByteArray;
         count = data.readUnsignedInt();
         data.readUnsignedInt();
         data.readUnsignedInt();
         data.readUnsignedInt();
         mapID = data.readUnsignedInt();
         if(!GroupManager.isInGroup)
         {
            GroupController.setGroupStatus(function():void
            {
               GroupController.inviteJoin(_info);
            });
         }
         else
         {
            GroupController.inviteJoin(this._info);
         }
      }
      
      private function getUserInfo() : void
      {
         this.addEvent();
         UserInfoManager.upDateSimpleInfo(this._info,function():void
         {
            UserInfoManager.upDateMoreInfo(_info,function():void
            {
               updatePanel();
            });
         });
      }
      
      private function showFire() : void
      {
         var _loc1_:Array = ["红色火焰(增加赛尔20%的移动速度)","蓝色火焰(每回合回复50点HP)","紫色火焰(增加20%伤害)","金色火焰(减免20%伤害)","绿色火焰(全属性+1)","加强型绿色火焰(全属性+1)","加强型蓝色火焰(每回合回复60点HP)","加强型紫色火焰(增加25%伤害)","加强型金色火焰(减免25%伤害)"];
         if(this._info.fireBuff > 0)
         {
            this._ui["mcFire"].gotoAndStop(this._info.fireBuff);
            ToolTipManager.add(this._ui["mcFire"],_loc1_[this._info.fireBuff - 1]);
         }
         else
         {
            this._ui["mcFire"].gotoAndStop(10);
         }
      }
      
      private function updatePanel() : void
      {
         LevelManager.appLevel.addChild(this._ui);
         this._ui["txtUserId"].text = this._info.userID;
         this._ui["txtNick"].text = this._info.nick;
         var _loc1_:Date = new Date(this._info.regTime * 1000);
         var _loc2_:String = _loc1_.getFullYear().toString() + "-" + (_loc1_.getMonth() + 1).toString() + "-" + _loc1_.getDate().toString();
         this._ui["txtLoginTime"].text = _loc2_;
         this._ui["rankicon_mc"].gotoAndStop(17 - this.getMediaIndex());
         this._ui["txtTitle"].text = AchieveXMLInfo.getTitle(this._info.curTitle);
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
         this.showTeamInfo();
         this._ui["txtLvlName"].text = this.getAchieveTitle();
         this._ui["txtAchieve"].text = "" + this._info.totalAchieve;
         this.showPetBook();
         this.showAvatar();
         this.showFire();
         if(FriendManager.isFriend(this._info.userID))
         {
            this._ui["btnAddFriend"].visible = false;
            this._ui["btnDelFriend"].visible = true;
            this._ui["btnFind"].mouseEnabled = true;
            this._ui["btnFind"].filters = [];
         }
         else
         {
            this._ui["btnAddFriend"].visible = true;
            this._ui["btnDelFriend"].visible = false;
            this._ui["btnFind"].mouseEnabled = false;
            this._ui["btnFind"].filters = [ColorFilter.setGrayscale()];
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
      
      private function showTeamInfo() : void
      {
         if(this._info.teamID == 0)
         {
            this._ui["txtTeamName"].text = "暂未加入";
         }
         else
         {
            TeamInfoManager.getSimpleTeamInfo(this._info.teamID,function(param1:SimpleTeamInfo):void
            {
               _teamInfo = param1;
               _ui["txtTeamName"].text = "" + param1.name;
            });
         }
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
         ResourceManager.getResource(ClientConfig.getAppResource("2015/0619/OtherUserInfoPanel"),function(param1:MovieClip):void
         {
            _ui = param1;
            CommonUI.resetUiAllTxtFont(_ui);
            initIcon();
            getUserInfo();
         });
      }
      
      private function initIcon() : void
      {
         this.hideTipIcon();
         ToolTipManager.add(this._ui["btnAddFriend"],"加为好友");
         ToolTipManager.add(this._ui["btnDelFriend"],"删除好友");
         ToolTipManager.add(this._ui["btnGroupSelect"],"组队 / 战队");
         ToolTipManager.add(this._ui["mcGroup"]["btnInviteToGroup"],"邀请他加入小队");
         ToolTipManager.add(this._ui["mcGroup"]["btnApplyJoinGroup"],"申请加入小队");
         ToolTipManager.add(this._ui["mcGroup"]["btnInviteToTeam"],"邀请他加入战队");
         ToolTipManager.add(this._ui["btnHome"],"基地访问");
         ToolTipManager.add(this._ui["btnFight"],"发起对战");
         ToolTipManager.add(this._ui["btnFind"],"查找好友位置");
         ToolTipManager.add(this._ui["btnBlackChoice"],"拉黑 / 举报");
         ToolTipManager.add(this._ui["mcBlackList"]["btnBlack"],"加入黑名单");
         ToolTipManager.add(this._ui["mcBlackList"]["btnComplain"],"举报该用户");
         ToolTipManager.add(this._ui["mcStudy"]["btnInstructor"],"申请成为我的教官");
         ToolTipManager.add(this._ui["mcStudy"]["btnStudent"],"申请成为我的学员");
         ToolTipManager.add(this._ui["btnIns"],"教官 / 学员");
      }
      
      private function hideTipIcon() : void
      {
         this._ui["mcGroup"].visible = false;
         this._ui["mcBlackList"].visible = false;
         this._ui["mcStudy"].visible = false;
      }
   }
}
