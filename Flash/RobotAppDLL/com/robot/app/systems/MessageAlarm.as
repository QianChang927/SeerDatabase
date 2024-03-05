package com.robot.app.systems
{
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MessageManager;
   import org.taomee.bean.BaseBean;
   import org.taomee.utils.DisplayUtil;
   
   public class MessageAlarm extends BaseBean
   {
      
      private static var _m:MessageAlarmImpl;
       
      
      public function MessageAlarm()
      {
         super();
      }
      
      public static function get ma() : MessageAlarmImpl
      {
         if(_m == null)
         {
            _m = new MessageAlarmImpl();
         }
         return _m;
      }
      
      public static function set ma(param1:*) : void
      {
         _m = param1;
      }
      
      public static function show() : void
      {
         if(MessageManager.unReadLength() > 0)
         {
            if(!DisplayUtil.hasParent(ma))
            {
               ma.show();
            }
            ma.setNum();
         }
         else
         {
            ma.hide();
         }
      }
      
      public static function hide() : void
      {
      }
      
      override public function start() : void
      {
         MessageManager.addEventListener(RobotEvent.MESSAGE,this.onMessage);
         show();
         finish();
      }
      
      private function onMessage(param1:RobotEvent) : void
      {
         show();
      }
   }
}

import com.robot.app.group.GroupController;
import com.robot.app.im.TeamChatController;
import com.robot.app.linkManager.LinkToUrlManager;
import com.robot.app.superParty.SPConfig;
import com.robot.app.task.SeerInstructor.NewInstructorController;
import com.robot.app.team.TeamMessageManager;
import com.robot.app.toolBar.ToolBarController;
import com.robot.app.user.UserInfoController;
import com.robot.core.CommandID;
import com.robot.core.config.ClientConfig;
import com.robot.core.config.xml.MapXMLInfo;
import com.robot.core.event.MapEvent;
import com.robot.core.info.InformInfo;
import com.robot.core.info.UserInfo;
import com.robot.core.info.team.TeamInformInfo;
import com.robot.core.manager.ChatManager;
import com.robot.core.manager.LevelManager;
import com.robot.core.manager.MainManager;
import com.robot.core.manager.MapManager;
import com.robot.core.manager.MessageManager;
import com.robot.core.manager.ModuleManager;
import com.robot.core.manager.RelationManager;
import com.robot.core.net.SocketConnection;
import com.robot.core.teamInstallation.TeamJoinMsg;
import com.robot.core.ui.alert.Alarm;
import com.robot.core.ui.alert.Alert;
import com.robot.core.ui.alert.Answer;
import com.robot.core.userHoldParty.PartyMapManager;
import com.robot.core.utils.CommonUI;
import com.robot.core.utils.TextFormatUtil;
import flash.display.SimpleButton;
import flash.display.Sprite;
import flash.events.MouseEvent;
import flash.events.TextEvent;
import flash.text.TextField;
import flash.utils.clearTimeout;
import flash.utils.getDefinitionByName;
import flash.utils.setTimeout;
import org.taomee.events.SocketEvent;

class MessageAlarmImpl extends Sprite
{
    
   
   private var _mainUI:Sprite;
   
   private var _btn:SimpleButton;
   
   private var _txt:TextField;
   
   private var _IsOpen:Boolean = false;
   
   public function MessageAlarmImpl()
   {
      super();
      this._mainUI = ToolBarController.getpanelUi();
      this._mainUI["uiDot"].visible = false;
      if(this._mainUI == null)
      {
         return;
      }
   }
   
   public function show() : void
   {
      if(this._mainUI != null)
      {
         this._mainUI["friendBtn"].addEventListener(MouseEvent.CLICK,this.onClick,false,3);
         switch(MessageManager.getFristUnReadID())
         {
            case MessageManager.TEAM_TYPE:
            case CommandID.TEAM_ADD:
               this._mainUI["uiDot"].visible = true;
               this._mainUI["uiDot"]["NewMaiIconMcl"].gotoAndStop(3);
               break;
            case MessageManager.SYS_TYPE:
               this._mainUI["uiDot"].visible = true;
               this._mainUI["uiDot"]["NewMaiIconMcl"].gotoAndStop(3);
               break;
            default:
               this._IsOpen = true;
               this._mainUI["uiDot"].visible = true;
               this._mainUI["uiDot"]["NewMaiIconMcl"].gotoAndStop(5);
         }
      }
   }
   
   public function hide() : void
   {
      var _loc1_:Class = null;
      if(this._mainUI != null)
      {
         this._mainUI["uiDot"].visible = false;
         --this._mainUI["alarmNum"];
         this._mainUI["friendBtn"].removeEventListener(MouseEvent.CLICK,this.onClick);
         _loc1_ = getDefinitionByName("com.robot.app2.control.SeerBoxIconController") as Class;
         _loc1_["updateDot"]();
      }
      MessageAlarm.ma = null;
   }
   
   public function setNum() : void
   {
   }
   
   private function onClick(param1:MouseEvent) : void
   {
      var id:uint;
      var info:* = undefined;
      var moduleName:String = null;
      var e:MouseEvent = param1;
      e.stopImmediatePropagation();
      id = uint(MessageManager.getFristUnReadID());
      if(id > 7000)
      {
         info = MessageManager._unReadList.shift()._info;
      }
      switch(id)
      {
         case MessageManager.SYS_TYPE:
            info = MessageManager.getInformInfo() as InformInfo;
            if(info)
            {
               this.showInform(info);
            }
            break;
         case MessageManager.TEAM_TYPE:
            info = MessageManager.getTeamInformInfo() as TeamInformInfo;
            if(info)
            {
               TeamMessageManager.show(info);
            }
            break;
         case MessageManager.TEAM_CHAT_TYPE:
            MessageManager.getTeamChatInfo();
            TeamChatController.show();
            break;
         case MessageManager.SHOW_MODULE:
            moduleName = String(MessageManager._unReadList.shift().module);
            if(Boolean(moduleName) && moduleName.length > 0)
            {
               ModuleManager.showModule(ClientConfig.getAppModule(moduleName),"正在打开面板……");
            }
            break;
         case CommandID.GROUP_INVITE_NOTICE:
            if(info == null)
            {
               return;
            }
            switch(info.evtType)
            {
               case 0:
                  Alert.show("<font color=\'#ff0000\'>" + info.fromUserNick + "</font>邀请你加入小队，你确定接受吗？",function():void
                  {
                     GroupController.answerInviteJoin(info.fromUserID,true);
                  },function():void
                  {
                     GroupController.answerInviteJoin(info.fromUserID,false);
                  });
                  break;
               case 1:
                  Alarm.show("<font color=\'#ff0000\'>" + info.fromUserNick + "</font>取消了对你的邀请！");
                  break;
               case 2:
                  if(info.data == 1)
                  {
                     Alarm.show("<font color=\'#ff0000\'>" + info.fromUserNick + "</font>加入了你的小队！");
                  }
                  else
                  {
                     Alarm.show("<font color=\'#ff0000\'>" + info.fromUserNick + "</font>拒绝加入小队！");
                  }
            }
            break;
         case CommandID.APPLY_JOIN_GP_NOTICE:
            Alert.show("<font color=\'#ff0000\'>" + info.applierNick + "</font>申请加入你的小队！",function():void
            {
               GroupController.answerApplyJoin(info.applierID,true);
            },function():void
            {
               GroupController.answerApplyJoin(info.applierID,false);
            });
            break;
         default:
            if(this._IsOpen = true)
            {
               MessageManager.removeUnUserID(id);
               ChatManager.getinstance().showPchat(id,info.senderNickName);
               this._IsOpen = false;
            }
            else
            {
               MessageManager.removeUnUserID(id);
               ChatManager.getinstance().showChatPanel(false);
            }
      }
      if(MessageManager.unReadLength() == 0)
      {
         this.hide();
      }
      this.setNum();
   }
   
   private function showInform(param1:InformInfo) : void
   {
      var rel:UserInfo = null;
      var sprite:Sprite = null;
      var mapName:String = null;
      var msg:TeamJoinMsg = null;
      var des:String = null;
      var info:InformInfo = param1;
      rel = new UserInfo();
      rel.userID = info.userID;
      rel.timePoke = 0;
      rel.nick = info.nick;
      rel.mapID = info.mapID;
      rel.serverID = info.serverID;
      switch(info.type)
      {
         case CommandID.FRIEND_ANSWER:
            if(info.accept)
            {
               RelationManager.addFriendInfo(rel);
               RelationManager.upDateInfo(info.userID);
               sprite = Alarm.show(TextFormatUtil.getEventTxt(info.nick + "(" + info.userID + ")",info.userID.toString()) + "接受成为了你的好友！",null,false,true);
               sprite.addEventListener(TextEvent.LINK,function(param1:TextEvent):void
               {
                  UserInfoController.show(uint(param1.text));
               });
            }
            else
            {
               Alarm.show(info.nick + "拒绝成为你的好友！");
            }
            break;
         case CommandID.FRIEND_ADD:
            if(!RelationManager.allowAdd)
            {
               RelationManager.answerFriend(info.userID,false);
               return;
            }
            sprite = Answer.show("你是否允许" + TextFormatUtil.getEventTxt(info.nick + "(" + info.userID + ")",info.userID.toString()) + "\n成为你的好友？",function():void
            {
               RelationManager.answerFriend(info.userID,true);
               RelationManager.addFriendInfo(rel);
               RelationManager.upDateInfo(info.userID);
               Alarm.show("恭喜你与" + info.nick + "\n成为了好友！");
            },function():void
            {
               RelationManager.answerFriend(info.userID,false);
            });
            sprite.addEventListener(TextEvent.LINK,function(param1:TextEvent):void
            {
               UserInfoController.show(uint(param1.text));
            });
            break;
         case CommandID.REQUEST_OUT:
            mapName = "";
            if(info.mapID > MapManager.ID_MAX)
            {
               mapName = info.nick + "的基地";
            }
            else
            {
               mapName = String(info.mapName);
            }
            sprite = Answer.show(TextFormatUtil.getEventTxt(info.nick + "(" + info.userID + ")",info.userID.toString()) + "邀请你前往<font color=\'#FF0000\'>" + mapName + "</font>，你同意吗？",function():void
            {
               if(SPConfig.allIdA.length == 0)
               {
                  SPConfig.makeInfo();
               }
               if(SPConfig.allIdA.indexOf(info.mapID) != -1)
               {
                  Alarm.show("你的朋友处在超能时空通道中，你不可以过去哦！");
                  return;
               }
               if(MapXMLInfo.getIsLocal(MainManager.actorInfo.mapID) == true)
               {
                  Alarm.show("你现在还不可以过去哦！");
                  return;
               }
               SocketConnection.addCmdListener(CommandID.REQUEST_ANSWER,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(CommandID.REQUEST_ANSWER,arguments.callee);
                  MapManager.changeMap(info.mapID);
               });
               SocketConnection.send(CommandID.REQUEST_ANSWER,info.userID,1);
            },function():void
            {
               SocketConnection.send(CommandID.REQUEST_ANSWER,info.userID,0);
            });
            sprite.addEventListener(TextEvent.LINK,function(param1:TextEvent):void
            {
               UserInfoController.show(uint(param1.text));
            });
            break;
         case CommandID.REQUEST_ANSWER:
            if(info.accept)
            {
               sprite = Alarm.show(info.nick + "接受了你的邀请！");
            }
            else
            {
               sprite = Alarm.show(info.nick + "拒绝了你的邀请！");
            }
            sprite.addEventListener(TextEvent.LINK,function(param1:TextEvent):void
            {
               UserInfoController.show(uint(param1.text));
            });
            break;
         case CommandID.REQUEST_REGISTER:
            if(info.accept == 0)
            {
               return;
            }
            sprite = Alarm.show(TextFormatUtil.getEventTxt(info.nick + "(" + info.userID + ")",info.userID.toString()) + "\n    接受了你的邀请，并登陆赛尔号，自动成为你的好友，快去打招呼吧！");
            sprite.addEventListener(TextEvent.LINK,function(param1:TextEvent):void
            {
               UserInfoController.show(uint(param1.text));
            });
            RelationManager.addFriendInfo(rel);
            RelationManager.upDateInfo(info.userID);
            break;
         case CommandID.TEAM_ADD:
            msg = new TeamJoinMsg();
            msg.show(info);
            break;
         case CommandID.FIGHTARENA_ADD_FRIEND:
            Alert.show("你是否允许" + TextFormatUtil.getEventTxt(info.nick + "(" + info.userID + ")",info.userID.toString()) + "\n成为你的战斗好友？",function():void
            {
               SocketConnection.send(CommandID.FIGHTARENA_REPLY_FRIEND,info.userID,1);
            },function():void
            {
               SocketConnection.send(CommandID.FIGHTARENA_REPLY_FRIEND,info.userID,0);
            });
            break;
         case CommandID.FIGHTARENA_REPLY_FRIEND:
            if(info.accept == 0)
            {
               Alarm.show(info.nick + "拒绝成为你的战斗好友！");
            }
            if(info.accept == 1)
            {
               Alarm.show("恭喜你与" + info.nick + "\n成为了战斗好友！赶快一起去圣地决斗场战斗吧！");
            }
            break;
         case CommandID.USER_PARTY_INVITE_FRIEND_INFORM:
            if(info.exInfo["hostID"] == info.exInfo["inviterID"])
            {
               if(info.exInfo["serverID"] == MainManager.serverID)
               {
                  des = TextFormatUtil.getRedTxt(info.exInfo["hostName"]) + "邀请你去参加由他举办的" + TextFormatUtil.getRedTxt(PartyMapManager.partyList[info.exInfo["partyID"]]) + "，你要前往参加吗？";
                  Alert.show(des,function():void
                  {
                     var t:uint = 0;
                     PartyMapManager.setup();
                     t = setTimeout(function():void
                     {
                        MapManager.changeMap(28);
                        clearTimeout(t);
                     },1000);
                  },null);
               }
               else
               {
                  des = TextFormatUtil.getRedTxt(info.exInfo["inviterName"]) + "邀请你去参加由" + TextFormatUtil.getRedTxt(info.exInfo["hostName"]) + "在" + info.exInfo["serverID"] + "号服务器举办的" + TextFormatUtil.getRedTxt(PartyMapManager.partyList[info.exInfo["partyID"]]) + "，请前往参加！";
                  Alarm.show(des);
               }
            }
            else if(info.exInfo["serverID"] == MainManager.serverID)
            {
               des = TextFormatUtil.getRedTxt(info.exInfo["inviterName"]) + "邀请你去参加由" + TextFormatUtil.getRedTxt(info.exInfo["hostName"]) + "举办的" + TextFormatUtil.getRedTxt(PartyMapManager.partyList[info.exInfo["partyID"]]) + "，请前往参加！";
               Alert.show(des,function():void
               {
                  var t:uint = 0;
                  PartyMapManager.setup();
                  t = setTimeout(function():void
                  {
                     MapManager.changeMap(28);
                     clearTimeout(t);
                  },1000);
               },null);
            }
            else
            {
               des = TextFormatUtil.getRedTxt(info.exInfo["inviterName"]) + "邀请你去参加由" + TextFormatUtil.getRedTxt(info.exInfo["hostName"]) + "在" + info.exInfo["serverID"] + "号服务器举办的" + TextFormatUtil.getRedTxt(PartyMapManager.partyList[info.exInfo["partyID"]]) + "，请前往参加！";
               Alarm.show(des);
            }
            break;
         case CommandID.INSTRUCTOR_TOBESTUDENT:
            Alert.show("<font color=\'#ff0000\'>" + info.nick + "</font>想成为你的学员，是否同意？",function():void
            {
               NewInstructorController.answerStudent(info.userID,true);
            },function():void
            {
               NewInstructorController.answerStudent(info.userID,false);
            });
            break;
         case CommandID.INSTRUCTOR_TOBEINS:
            Alert.show("<font color=\'#ff0000\'>" + info.nick + "</font>想成为你的教官，是否同意？",function():void
            {
               NewInstructorController.answerInstructor(info.userID,true);
            },function():void
            {
               NewInstructorController.answerInstructor(info.userID,false);
            });
            break;
         case CommandID.INSTRUCTOR_ANSWERINS:
            if(info.accept)
            {
               Alarm.show("<font color=\'#ff0000\'>" + info.nick + "</font>已经同意成为你的学员！");
            }
            else
            {
               Alarm.show("<font color=\'#ff0000\'>" + info.nick + "</font>拒绝成为你的学员！");
            }
            break;
         case CommandID.INSTRUCTOR_ANSWERSTUDENT:
            if(info.accept)
            {
               Alarm.show("<font color=\'#ff0000\'>" + info.nick + "</font>已经同意成为你的教官！");
            }
            else
            {
               Alarm.show("<font color=\'#ff0000\'>" + info.nick + "</font>拒绝成为你的教官！");
            }
            break;
         case CommandID.USER_PARTY_RECEIVE_INFORM:
            Alarm.show("恭喜你获得" + info.exInfo["ticket"] + "礼券！");
            break;
         case CommandID.GET_ALARM_AFTER_PAY_NONO:
            SocketConnection.send(1022,86056754);
            ModuleManager.showModule(ClientConfig.getAppModule("nonoPanel/SuperNoNoPanel"),"",info);
            break;
         case CommandID.ITEM_LIST:
            SocketConnection.send(1022,86051828);
            Alert.show("你还有" + info.exInfo["num"] + "张蝙蝠战侠套装三元优惠券没有使用哦（有效期至11月29日）,是否现在就去？",function():void
            {
               SocketConnection.send(1022,86051829);
               MapManager.changeMap(103);
            });
            break;
         case CommandID.LOSTVIP_IS_SHOW_INVITE_PANEL:
         case CommandID.IS_ALARM_VIP:
            Alert.show("亲爱的赛尔，超能NONO的特权一定给你带来了极大的方便吧！开通超能NONO即可享受所有超NO特权，是否立即开通？",function():void
            {
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
            });
            break;
         case CommandID.TALK_COUNT:
            break;
         case CommandID.LOGIN_CHECK_GET_STATUS:
            SocketConnection.send(1022,86061686);
            Alert.show("你参与超NO折扣活动已获得的" + info.exInfo["zk"] + "折优惠券还没有使用，赶快去使用吧！",function():void
            {
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  var _loc3_:* = getDefinitionByName("com.robot.app2.control.DoubleGiftBagController");
                  CommonUI.addYellowArrow(LevelManager.iconLevel,_loc3_.icon.x - 20,_loc3_.icon.y - 20,330);
               });
               MapManager.changeMap(107);
            });
            break;
         case CommandID.BREAKSKY_EZEL_VIEW_INFORM:
            ModuleManager.showModule(ClientConfig.getAppModule("BreakSkyMarksmanEzelMoneyBackPanel"));
            break;
         case 661:
            Alert.show("亲爱的赛尔，你今天还有免费领取“超能巨蟹套装”的机会哟！是否立即前往？",function():void
            {
               SocketConnection.send(1022,86060954);
               MapManager.addAppArrowListener(107,110,306,30);
               MapManager.changeMap(107);
            });
            break;
         case 5020:
            Alert.show("亲爱的赛尔，你今天还有免费领取“超No狮子座套装”的机会哟！是否立即前往？",function():void
            {
               SocketConnection.send(1022,86060954);
               MapManager.addAppArrowListener(107,110,306,30);
               MapManager.changeMap(107);
            });
      }
   }
   
   private function calculateStoneNum(param1:int) : int
   {
      var _loc3_:int = 0;
      var _loc6_:int = 0;
      var _loc2_:Array = [[1,20],[3,70],[6,150],[12,320]];
      var _loc4_:int = 0;
      var _loc5_:int = param1;
      while(_loc5_ > 0)
      {
         _loc6_ = int(_loc2_.length - 1);
         while(_loc6_ >= 0)
         {
            if(_loc2_[_loc6_][0] <= _loc5_)
            {
               _loc3_ = int(_loc2_[_loc6_][0]);
               _loc4_ += _loc2_[_loc6_][1];
               _loc5_ -= _loc2_[_loc6_][0];
               break;
            }
            _loc6_--;
         }
      }
      return _loc4_;
   }
}
