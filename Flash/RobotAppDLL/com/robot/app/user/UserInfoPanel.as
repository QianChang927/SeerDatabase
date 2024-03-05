package com.robot.app.user
{
   import com.robot.app.achieve.AchievePanelController;
   import com.robot.app.achieve.AchieveTitlePanelController;
   import com.robot.app.bag.ChangeNickName;
   import com.robot.app.bag.UserInfoPanelPreview;
   import com.robot.app.fight.FightManager;
   import com.robot.app.group.GroupController;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.mapProcess.control.HonorsHallController;
   import com.robot.app.picturebook.PictureBookController;
   import com.robot.app.popup.FollowPanel;
   import com.robot.app.task.SeerInstructor.NewInstructorController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.team.TeamController;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.AchieveXMLInfo;
   import com.robot.core.config.xml.MedalsXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.RelationEvent;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.info.AchieveTitleInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.relation.OnLineInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.skeleton.ClothPreview;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.uic.UIScrollBar;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextFormat;
   import flash.utils.ByteArray;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class UserInfoPanel implements IUserInfoPanel
   {
       
      
      private var _info:UserInfo;
      
      private var _ui:MovieClip;
      
      private var _showLevel:MovieClip;
      
      private var _iconLevel:MovieClip;
      
      private var _aresIcon:MovieClip;
      
      private var _changeNick:ChangeNickName;
      
      private var _sptScroll:UIScrollBar;
      
      private var _preview:UserInfoPanelPreview;
      
      private var _fireArray:Array;
      
      private var _hideBar:Boolean;
      
      public function UserInfoPanel()
      {
         this._fireArray = ["红色火焰(增加赛尔20%的移动速度)","蓝色火焰(每回合回复50点HP)","紫色火焰(增加20%伤害)","金色火焰(减免20%伤害)","绿色火焰(全属性+1)","加强型绿色火焰(全属性+1)","加强型蓝色火焰(每回合回复60点HP)","加强型紫色火焰(增加25%伤害)","加强型金色火焰(减免25%伤害)"];
         super();
      }
      
      public function show(param1:uint, param2:Boolean = false) : void
      {
         var tf:TextFormat;
         var uid:uint = param1;
         var hideBar:Boolean = param2;
         if(this._ui == null)
         {
            this.init();
         }
         this._hideBar = hideBar;
         this._info = new UserInfo();
         this._info.userID = uid;
         this._ui.mouseEnabled = false;
         this._ui.mouseChildren = false;
         tf = new TextFormat();
         tf.bold = true;
         this._ui["choiceTitle"]["title"].defaultTextFormat = tf;
         this._ui["groupBg"].visible = false;
         this._ui["inviteJoinGroup"].visible = false;
         this._ui["applyJoinGroup"].visible = false;
         this._ui["inviteJoinTeam"].visible = false;
         this._ui["blackBg"].visible = false;
         this._ui["black"].visible = false;
         this._ui["complain"].visible = false;
         this._ui["insBg"].visible = false;
         this._ui["instructorBtn"].visible = false;
         this._ui["studentBtn"].visible = false;
         this._ui["pveIntro"].visible = false;
         this._ui["pvpIntro"].visible = false;
         this._ui["speedIcon"].visible = true;
         this._ui["guanghui"].visible = true;
         this._ui["pvpIntro"].visible = false;
         this._ui["pveIntro"].visible = false;
         this._ui["tips"].visible = false;
         this._ui["tipsOther"].visible = false;
         this._ui["btnSecurity"].visible = false;
         if(this._info.userID == MainManager.actorID)
         {
            this._ui["chNickBtn"].enabled = true;
            this._ui["chNickBtn"].mouseEnabled = true;
            this._ui["chNickBtn"].filters = [];
            this._ui["btnSecurity"].visible = true;
            this._showLevel.y = 55;
            this._ui["bg"].height = 250;
            this._ui["sptPanel"].enabled = true;
            this._ui["sptPanel"].mouseEnabled = true;
            this._ui["pvpIntro"].y = this._ui["guanghui"].y = this._ui["pveIntro"].y = 297;
            this._ui["choiceTitle"].mouseEnabled = true;
            this._ui["petBook"].mouseEnabled = true;
            this._ui["addFriend"].visible = false;
            this._ui["delFriend"].visible = false;
            this._ui["groupChoice"].visible = false;
            this._ui["home"].visible = false;
            this._ui["fight"].visible = false;
            this._ui["find"].visible = false;
            this._ui["blackChoice"].visible = false;
            this._ui["insBtn"].visible = false;
            this._ui["checkAchieve"].visible = true;
            this._ui["choiceTitle"].x = 171;
         }
         else
         {
            this._ui["bg"].height = 215;
            this._showLevel.y = 0;
            this._ui["chNickBtn"].enabled = false;
            this._ui["chNickBtn"].mouseEnabled = false;
            this._ui["petBook"].mouseEnabled = false;
            this._ui["chNickBtn"].filters = [ColorFilter.setGrayscale()];
            this._ui["sptPanel"].enabled = false;
            this._ui["sptPanel"].mouseEnabled = false;
            this._ui["choiceTitle"].mouseEnabled = false;
            this._ui["addFriend"].visible = true;
            this._ui["delFriend"].visible = true;
            this._ui["groupChoice"].visible = true;
            this._ui["home"].visible = true;
            this._ui["fight"].visible = true;
            this._ui["find"].visible = true;
            this._ui["blackChoice"].visible = true;
            this._ui["insBtn"].visible = true;
            this._ui["pvpIntro"].y = this._ui["guanghui"].y = this._ui["pveIntro"].y = 268;
            this._ui["choiceTitle"].x = 204;
            this._ui["checkAchieve"].visible = false;
         }
         UserInfoManager.upDateSimpleInfo(this._info,function():void
         {
            UserInfoManager.upDateMoreInfo(_info,function():void
            {
               updateInfo();
               _ui.mouseEnabled = true;
               _ui.mouseChildren = true;
               if(_info.isVip)
               {
                  _ui["speedIcon"].gotoAndStop(1);
                  ToolTipManager.add(_ui["speedIcon"],"VIP疾速特权");
                  _ui["speedIcon"].mouseEnabled = true;
                  _ui["speedIcon"].mouseChildren = true;
               }
               else
               {
                  _ui["speedIcon"].gotoAndStop(2);
                  ToolTipManager.add(_ui["speedIcon"],"VIP疾速特权未开启");
                  if(_info.userID != MainManager.actorID)
                  {
                     _ui["speedIcon"].mouseEnabled = false;
                     _ui["speedIcon"].mouseChildren = false;
                  }
                  else
                  {
                     _ui["speedIcon"].mouseEnabled = true;
                     _ui["speedIcon"].mouseChildren = true;
                     _ui["speedIcon"].addEventListener(MouseEvent.CLICK,onClickSpeed);
                  }
               }
            });
         });
         this._ui.x = 195;
         this._ui.y = 120;
         LevelManager.appLevel.addChild(this._ui);
         if(this._hideBar == true)
         {
            this._ui["addFriend"].visible = false;
            this._ui["delFriend"].visible = false;
            this._ui["groupChoice"].visible = false;
            this._ui["home"].visible = false;
            this._ui["fight"].visible = false;
            this._ui["find"].visible = false;
            this._ui["blackChoice"].visible = false;
            this._ui["insBtn"].visible = false;
         }
      }
      
      private function onClickChNickBtn(param1:MouseEvent) : void
      {
         this.hide();
         ModuleManager.showModule(ClientConfig.getAppModule("VipNickEditor"));
      }
      
      private function init() : void
      {
         this._ui = UIManager.getMovieClip("UserInfoPanel_ui");
         this._showLevel = this._ui["showLevel"];
         this._iconLevel = this._ui["iconLevel"];
         this._ui["chNickBtn"].addEventListener(MouseEvent.CLICK,this.onClickChNickBtn);
         this._ui["choiceTitle"].buttonMode = true;
         this._ui["choiceTitle"].mouseChildren = false;
         this._ui["levelName"].mouseChildren = false;
         this._ui["levelName"].mouseEnabled = false;
         this._ui["pet"].mouseEnabled = false;
         this._ui["pet"].mouseChildren = false;
         this._ui["close"].addEventListener(MouseEvent.CLICK,this.onClose);
         this._ui["sptVideo"].addEventListener(MouseEvent.CLICK,this.onSptVideo);
         this._ui["sptPanel"].addEventListener(MouseEvent.CLICK,this.onSptPanel);
         this._ui["pveIntro"].addEventListener(MouseEvent.CLICK,this.onPveIntro);
         this._ui["pvpIntro"].addEventListener(MouseEvent.CLICK,this.onPvpIntro);
         this._ui["choiceTitle"].addEventListener(MouseEvent.CLICK,this.onchoiceTitle);
         this._ui["checkAchieve"].addEventListener(MouseEvent.CLICK,this.onMyAchiieve);
         this._ui["addFriend"].addEventListener(MouseEvent.CLICK,this.onAddFriend);
         this._ui["delFriend"].addEventListener(MouseEvent.CLICK,this.onDelFriend);
         this._ui["groupChoice"].addEventListener(MouseEvent.CLICK,this.onGroupChoice);
         this._ui["inviteJoinGroup"].addEventListener(MouseEvent.CLICK,this.onInviteJoinGroup);
         this._ui["applyJoinGroup"].addEventListener(MouseEvent.CLICK,this.onApplyJoinGroup);
         this._ui["inviteJoinTeam"].addEventListener(MouseEvent.CLICK,this.onInviteJoinTeam);
         this._ui["home"].addEventListener(MouseEvent.CLICK,this.onHome);
         this._ui["fight"].addEventListener(MouseEvent.CLICK,this.onFight);
         this._ui["find"].addEventListener(MouseEvent.CLICK,this.onFind);
         this._ui["blackChoice"].addEventListener(MouseEvent.CLICK,this.onBlackChoice);
         this._ui["black"].addEventListener(MouseEvent.CLICK,this.onBlack);
         this._ui["complain"].addEventListener(MouseEvent.CLICK,this.onComplain);
         this._ui["insBtn"].addEventListener(MouseEvent.CLICK,this.onClickIns);
         this._ui["instructorBtn"].addEventListener(MouseEvent.CLICK,this.onClickInstructor);
         this._ui["studentBtn"].addEventListener(MouseEvent.CLICK,this.onClickStudent);
         this._ui["guanghui"].addEventListener(MouseEvent.CLICK,this.onClickGuangHuiBtn);
         this._ui["btnSecurity"].addEventListener(MouseEvent.CLICK,this.onClickSecurity);
         this._ui["petBook"].addEventListener(MouseEvent.CLICK,this.onClickPetBookBtn);
         this._ui["vip_lv_icon"].addEventListener(MouseEvent.ROLL_OVER,this.onOver);
         this._ui["vip_lv_icon"].addEventListener(MouseEvent.CLICK,this.onBeNono);
         this._ui["vip_lv_icon"].addEventListener(MouseEvent.ROLL_OUT,this.onOut);
         ToolTipManager.add(this._ui["sptPanel"],"赛尔先锋队任务");
         ToolTipManager.add(this._ui["addFriend"],"加为好友");
         ToolTipManager.add(this._ui["delFriend"],"删除好友");
         ToolTipManager.add(this._ui["groupChoice"],"组队 / 战队");
         ToolTipManager.add(this._ui["inviteJoinGroup"],"邀请他加入小队");
         ToolTipManager.add(this._ui["applyJoinGroup"],"申请加入小队");
         ToolTipManager.add(this._ui["inviteJoinTeam"],"邀请他加入战队");
         ToolTipManager.add(this._ui["home"],"基地访问");
         ToolTipManager.add(this._ui["fight"],"发起对战");
         ToolTipManager.add(this._ui["find"],"查找好友位置");
         ToolTipManager.add(this._ui["blackChoice"],"拉黑 / 举报");
         ToolTipManager.add(this._ui["black"],"加入黑名单");
         ToolTipManager.add(this._ui["complain"],"举报该用户");
         ToolTipManager.add(this._ui["instructorBtn"],"申请成为我的教官");
         ToolTipManager.add(this._ui["studentBtn"],"申请成为我的学员");
         ToolTipManager.add(this._ui["insBtn"],"教官 / 学员");
         ToolTipManager.add(this._ui["petCatNum"],"获得过的精灵种类");
         ToolTipManager.add(this._ui["petNum"],"当前拥有的精灵数量");
         this._iconLevel["fire"].buttonMode = true;
         this._iconLevel["fire"].addEventListener(MouseEvent.CLICK,this.onFire);
      }
      
      public function get ui() : MovieClip
      {
         return this._ui;
      }
      
      private function onClickSecurity(param1:MouseEvent) : void
      {
         this.hide();
         ModuleManager.showModule(ClientConfig.getAppModule("securityGuard/SecurityGuardPanel"));
      }
      
      private function onOver(param1:MouseEvent) : void
      {
         if(this._info.userID == MainManager.actorID)
         {
            this._ui["tips"].visible = true;
         }
         else
         {
            this._ui["tipsOther"].visible = true;
         }
      }
      
      private function onOut(param1:MouseEvent) : void
      {
         if(this._info.userID == MainManager.actorID)
         {
            this._ui["tips"].visible = false;
         }
         else
         {
            this._ui["tipsOther"].visible = false;
         }
      }
      
      private function onClickGuangHuiBtn(param1:MouseEvent) : void
      {
         if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
         {
            Alarm2.show("完成新手任务后开放");
            return;
         }
         param1.currentTarget.visible = false;
         this._ui["pvpIntro"].visible = true;
         this._ui["pveIntro"].visible = true;
      }
      
      private function onClickRankBtn(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getBookModule("RankBook"));
      }
      
      private function onClickSpeed(param1:Event) : void
      {
         SocketConnection.send(1022,86052544);
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
      }
      
      private function onClose(param1:MouseEvent) : void
      {
         this.hide();
      }
      
      private function onClickStudent(param1:MouseEvent) : void
      {
         NewInstructorController.sendToBeInstructor(this._info.userID);
         this.onClickIns(null);
      }
      
      private function onClickInstructor(param1:MouseEvent) : void
      {
         NewInstructorController.sendToBeStudent(this._info.userID);
         this.onClickIns(null);
      }
      
      private function onClickIns(param1:MouseEvent) : void
      {
         if(this._ui["insBg"].visible)
         {
            this._ui["instructorBtn"].visible = false;
            this._ui["insBg"].visible = false;
            this._ui["studentBtn"].visible = false;
         }
         else
         {
            this._ui["instructorBtn"].visible = true;
            this._ui["insBg"].visible = true;
            this._ui["studentBtn"].visible = true;
         }
      }
      
      private function onSptPanel(param1:MouseEvent) : void
      {
         this.hide();
         ModuleManager.showModule(ClientConfig.getAppModule("SptPanelNew"),"正在打开赛尔先锋队任务....");
      }
      
      private function onSptVideo(param1:MouseEvent) : void
      {
         Alarm.show("录像功能已下架！");
      }
      
      private function onPveIntro(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("UserPvePointPanel"),"正在加载....",this._info);
      }
      
      private function onPvpIntro(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("UserPvpPointPanel"),"正在加载....",this._info);
      }
      
      private function onchoiceTitle(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.addCmdListener(CommandID.ACHIEVETITLELIST,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.ACHIEVETITLELIST,arguments.callee);
            var _loc3_:AchieveTitleInfo = param1.data as AchieveTitleInfo;
            AchieveTitlePanelController.show(_loc3_,_ui);
         });
         SocketConnection.send(CommandID.ACHIEVETITLELIST);
      }
      
      private function onMyAchiieve(param1:MouseEvent) : void
      {
         if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
         {
            Alarm2.show("完成新手任务后开放");
            return;
         }
         this.hide();
         AchievePanelController.showNew();
      }
      
      private function onAddFriend(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("你想和" + this._info.nick + "(" + this._info.userID + ")\r成为好友吗？",function():void
         {
            RelationManager.addFriend(_info.userID);
         });
      }
      
      private function onDelFriend(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("你要删除好友" + this._info.nick + "(" + this._info.userID + ")吗？",function():void
         {
            RelationManager.removeFriend(_info.userID);
         });
      }
      
      private function onGroupChoice(param1:MouseEvent) : void
      {
         if(this._ui["groupBg"].visible)
         {
            this._ui["groupBg"].visible = false;
            this._ui["inviteJoinGroup"].visible = false;
            this._ui["applyJoinGroup"].visible = false;
            this._ui["inviteJoinTeam"].visible = false;
         }
         else
         {
            this._ui["groupBg"].visible = true;
            this._ui["inviteJoinTeam"].visible = true;
            if(!GroupManager.isInGroup && !this._info.groupInfo)
            {
               this._ui["inviteJoinGroup"].visible = true;
               this._ui["applyJoinGroup"].visible = false;
            }
            else if(!GroupManager.isInGroup)
            {
               this._ui["inviteJoinGroup"].visible = false;
               this._ui["applyJoinGroup"].visible = true;
            }
            else if(Boolean(MainManager.actorInfo.groupInfo) && Boolean(GroupManager.isInGroup))
            {
               this._ui["inviteJoinGroup"].visible = true;
               this._ui["applyJoinGroup"].visible = false;
            }
         }
      }
      
      private function onInviteJoinGroup(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         this.hide();
         if(RelationManager.isFriend(this._info.userID))
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
         _loc2_ = RelationManager.getFriendInfo(this._info.userID);
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
      
      private function onApplyJoinGroup(param1:MouseEvent) : void
      {
         this.hide();
         GroupController.applyJoin(this._info.userID);
      }
      
      private function onInviteJoinTeam(param1:MouseEvent) : void
      {
         this.hide();
         TeamController.invite(this._info.userID);
      }
      
      private function onHome(param1:MouseEvent) : void
      {
         this.hide();
         MapManager.changeMap(this._info.userID);
      }
      
      private function onFight(param1:MouseEvent) : void
      {
         this.hide();
         FightManager.fightWithPlayer(this._info);
      }
      
      private function onFind(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
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
      
      private function onBlackChoice(param1:MouseEvent) : void
      {
         if(this._ui["blackBg"].visible)
         {
            this._ui["blackBg"].visible = false;
            this._ui["black"].visible = false;
            this._ui["complain"].visible = false;
         }
         else
         {
            this._ui["blackBg"].visible = true;
            this._ui["black"].visible = true;
            this._ui["complain"].visible = true;
         }
      }
      
      private function onBlack(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         Alert.show("你确定要把" + this._info.nick + "(" + this._info.userID + ")加入黑名单吗？",function():void
         {
            RelationManager.addBlack(_info.userID);
         });
      }
      
      private function onComplain(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ComplainNewPanel"),"正在加载举报系统....",[this._info,""]);
      }
      
      private function onNoNo(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(this._info.userID != MainManager.actorID)
         {
            return;
         }
         if(this._info.superNono)
         {
            if(this._info.isExtremeNono)
            {
               Alert.show("确认要续费至尊NoNo吗？",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               });
            }
            else
            {
               Alert.show("确认要续费超能NoNo吗？",function():void
               {
                  LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               });
            }
         }
         else
         {
            Alert.show("确认要开通超能NoNo吗？",function():void
            {
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
            });
         }
      }
      
      private function onHonor(param1:MouseEvent) : void
      {
         this.hide();
         HonorsHallController.showBadgePanel(this._info.userID);
      }
      
      private function onFire(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
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
      
      private function onClickPetBookBtn(param1:MouseEvent) : void
      {
         if(MainManager.newSeerProgress >= 0 && MainManager.newSeerProgress < 15)
         {
            Alarm2.show("完成新手任务后开放");
            return;
         }
         PictureBookController.show();
      }
      
      private function getRankLv() : uint
      {
         var _loc1_:Array = null;
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         if(this._info.totalAchieve < 600)
         {
            _loc1_ = MedalsXMLInfo.getMedalIcon(this._info.totalAchieve);
            return _loc1_[0].icon;
         }
         _loc2_ = uint(this._info.achieRank);
         _loc3_ = 0;
         while(_loc3_ < 32)
         {
            if(BitUtil.getBit(_loc2_,_loc3_) == 0)
            {
               return _loc3_ + 4;
            }
            _loc3_++;
         }
         return 0;
      }
      
      private function updateInfo() : void
      {
         var _loc5_:String = null;
         var _loc6_:String = null;
         var _loc7_:Object = null;
         var _loc8_:uint = 0;
         var _loc9_:XML = null;
         this._ui["userId"].text = this._info.userID;
         this._ui["name_txt"].text = this._info.nick;
         var _loc1_:Date = new Date(this._info.regTime * 1000);
         this._ui["regTime"].text = _loc1_.getFullYear().toString() + "年" + (_loc1_.getMonth() + 1).toString() + "月" + _loc1_.getDate().toString() + "日";
         this._ui["choiceTitle"]["title"].text = AchieveXMLInfo.getTitle(this._info.curTitle);
         var _loc2_:uint = 0;
         var _loc3_:int = 0;
         while(_loc3_ < MainManager.BOSS_IDS.length)
         {
            if(MainManager.BOSS_IDS[_loc3_] != 0)
            {
               _loc2_++;
            }
            _loc3_++;
         }
         this._sptScroll = new UIScrollBar(this._ui["barBall"],this._ui["barBg"],5,this._ui["upBtn"],this._ui["downBtn"]);
         this._sptScroll.wheelObject = this._ui;
         this._sptScroll.totalLength = Math.ceil(_loc2_ / 2);
         this._sptScroll.addEventListener(MouseEvent.MOUSE_MOVE,this.onSptScroll);
         this.updateSptItem(0);
         var _loc4_:Sprite;
         (_loc4_ = UIManager.getSprite("ComposeMC")).x = 228;
         if(this._info.userID == MainManager.actorID)
         {
            _loc4_.y = 74;
         }
         else
         {
            _loc4_.y = 120;
         }
         _loc4_.mouseEnabled = false;
         _loc4_.scaleX = _loc4_.scaleY = 0.9;
         this._showLevel.addChild(_loc4_);
         this._preview = new UserInfoPanelPreview(_loc4_,null,ClothPreview.MODEL_SHOW);
         this._preview.showCloths(this._info.clothes);
         this._preview.showDoodle(this._info.texture);
         this._preview.changeColor(this._info.color);
         if(this._info.totalAchieve < 600)
         {
            _loc5_ = String((_loc7_ = MedalsXMLInfo.getMedalIcon(this._info.totalAchieve)[0]).icon);
            _loc6_ = String(_loc7_.title);
         }
         else
         {
            _loc8_ = 0;
            while(_loc8_ < 32)
            {
               if(BitUtil.getBit(this._info.achieRank,_loc8_) == 0)
               {
                  _loc5_ = (_loc9_ = MedalsXMLInfo.getMedalByIndex(_loc8_ + 4)).@medalicon;
                  _loc6_ = _loc9_.@title;
                  break;
               }
               _loc8_++;
            }
         }
         if(this._info.fireBuff > 0 && this._info.userID != MainManager.actorID)
         {
            this._iconLevel["fire"].gotoAndStop(this._info.fireBuff);
            ToolTipManager.add(this._iconLevel["fire"],this._fireArray[this._info.fireBuff - 1]);
         }
         else
         {
            this._iconLevel["fire"].gotoAndStop(10);
         }
         KTool.showScore(this._ui["score_achieve"],this._info.totalAchieve,0,true);
         KTool.showScore(this._ui["petNum"],this._info.petAllNum,0,true);
         this._ui["levelName"].gotoAndStop(this.getRankLv() + 1);
         SocketConnection.addCmdListener(CommandID.SEEROL_GET_MON_CLASS_CNT,this.onResult);
         SocketConnection.send(CommandID.SEEROL_GET_MON_CLASS_CNT,this._info.userID);
         if(this._info.isVip)
         {
            this._ui["vip_lv_icon"]["lv"].gotoAndStop(this._info.vipLevel);
            this._ui["vip_lv_icon"].visible = true;
            this._ui["nono"].visible = false;
         }
         else
         {
            this._ui["vip_lv_icon"].visible = false;
            this._ui["nono"].visible = true;
            KTool.initBenonoBtn(this._ui["nono"]);
         }
         if(this._info.userID != MainManager.actorID)
         {
            this._ui["tipsOther"]["txt"].gotoAndStop(!!MainManager.actorInfo.isVip ? 2 : 1);
            this._ui["tipsOther"]["icons"].filters = !!MainManager.actorInfo.isVip ? null : [ColorFilter.setGrayscale()];
            this._ui["tipsOther"]["txt2"].gotoAndStop(!!this._info.isVip ? 2 : 1);
            this._ui["tipsOther"]["icons2"].filters = !!this._info.isVip ? null : [ColorFilter.setGrayscale()];
            if(RelationManager.isFriend(this._info.userID))
            {
               this._ui["addFriend"].visible = false;
               this._ui["delFriend"].visible = true;
               this._ui["find"].mouseEnabled = true;
               this._ui["find"].filters = [];
            }
            else
            {
               if(this._hideBar == false)
               {
                  this._ui["addFriend"].visible = true;
               }
               this._ui["delFriend"].visible = false;
               this._ui["find"].mouseEnabled = false;
               this._ui["find"].filters = [ColorFilter.setGrayscale()];
            }
         }
         else
         {
            if(!this._info.isVip)
            {
               ToolTipManager.add(this._ui["checkAchieve"],"开通VIP可排名优先");
            }
            this._ui["tips"]["txt"].gotoAndStop(!!MainManager.actorInfo.isVip ? 2 : 1);
            this._ui["tips"]["icons"].filters = !!MainManager.actorInfo.isVip ? null : [ColorFilter.setGrayscale()];
         }
      }
      
      private function onResult(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SEEROL_GET_MON_CLASS_CNT,this.onResult);
         KTool.showScore(this._ui["petCatNum"],(param1.data as ByteArray).readUnsignedInt(),0,true);
      }
      
      private function onSptScroll(param1:MouseEvent) : void
      {
         this.updateSptItem(this._sptScroll.index);
      }
      
      private function onBeNono(param1:MouseEvent) : void
      {
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
      }
      
      private function updateSptItem(param1:uint) : void
      {
         var _loc8_:uint = 0;
         var _loc9_:Sprite = null;
         var _loc2_:int = int(this._ui["sptCon"].numChlidren);
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            ToolTipManager.remove(this._ui["sptCon"].getChildAt(_loc3_));
            _loc3_++;
         }
         DisplayUtil.removeAllChild(this._ui["sptCon"]);
         var _loc4_:uint = 0;
         var _loc5_:uint = param1 * 2;
         var _loc6_:uint = param1 * 2 + 9;
         var _loc7_:int = 0;
         while(_loc7_ < MainManager.BOSS_IDS.length)
         {
            if(MainManager.BOSS_IDS[_loc7_] != 0)
            {
               if(_loc4_ >= _loc5_ && _loc4_ <= _loc6_)
               {
                  _loc8_ = uint(MainManager.BOSS_IDS[_loc7_]);
                  (_loc9_ = UIManager.getSprite("spt_" + _loc8_)).x = this._ui["sptCon"].numChildren % 2 * 42;
                  _loc9_.y = Math.floor(this._ui["sptCon"].numChildren / 2) * 40;
                  ToolTipManager.add(_loc9_,PetXMLInfo.getName(_loc8_));
                  this._ui["sptCon"].addChild(_loc9_);
                  if(this._info.bossAchievement[_loc7_])
                  {
                     _loc9_.filters = [];
                  }
                  else
                  {
                     _loc9_.filters = [ColorFilter.setGrayscale()];
                  }
               }
               if(++_loc4_ > _loc6_)
               {
                  return;
               }
            }
            _loc7_++;
         }
      }
      
      private function updateNum(param1:uint, param2:uint, param3:MovieClip, param4:String) : void
      {
         var _loc5_:String = param1.toString();
         while(_loc5_.length < param2)
         {
            _loc5_ = "0" + _loc5_;
         }
         var _loc6_:uint = 0;
         while(_loc6_ < param2)
         {
            param3[param4 + _loc6_].gotoAndStop(uint(_loc5_.substr(_loc6_,1)) + 1);
            _loc6_++;
         }
      }
      
      private function removeEvent() : void
      {
         this._ui["speedIcon"].removeEventListener(MouseEvent.CLICK,this.onClickSpeed);
         ToolTipManager.remove(this._ui["speedIcon"]);
      }
      
      public function hide() : void
      {
         this.removeEvent();
         if(this._sptScroll)
         {
            this._sptScroll.destroy();
            this._sptScroll = null;
         }
         if(this._preview)
         {
            this._preview.destroy();
            this._preview = null;
         }
         if(this._aresIcon)
         {
            DisplayUtil.removeForParent(this._aresIcon);
            this._aresIcon = null;
         }
         DisplayUtil.removeAllChild(this._showLevel);
         KTool.destroyBenonoBtn(this._ui["nono"]);
         ToolTipManager.remove(this._iconLevel["fire"]);
         ToolTipManager.remove(this._ui["checkAchieve"]);
         DisplayUtil.removeForParent(this._ui);
      }
   }
}
