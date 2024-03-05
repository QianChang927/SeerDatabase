package com.robot.app.toolBar.msgButton
{
   import com.robot.app.group.GroupController;
   import com.robot.app.group.manager.GroupNoticeManager;
   import com.robot.app.im.AddFriendMsgController;
   import com.robot.app.toolBar.IToolBarButton;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.group.info.ChgLeaderInfo;
   import com.robot.core.group.info.GpInviteNoticeInfo;
   import com.robot.core.group.info.QuitGroupInfo;
   import com.robot.core.info.InformInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.team.TeamInformInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import org.taomee.manager.EventManager;
   
   public class MessageButton implements IMsgButton
   {
       
      
      private var _ui:MovieClip;
      
      private var _noticeBtn:IToolBarButton;
      
      private var _txt:TextField;
      
      private var _type:String;
      
      public function MessageButton(param1:MovieClip)
      {
         super();
         this._ui = param1;
         this._txt = param1["txt"];
         this._txt.mouseEnabled = false;
      }
      
      public function show(param1:String, param2:Boolean = true) : void
      {
         if(this._ui)
         {
            this._type = param1;
            this.showTxtContent(param1);
            this._ui.visible = true;
            this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
            if(param2)
            {
               this._ui.buttonMode = true;
               this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
            }
         }
      }
      
      public function onClick(param1:MouseEvent = null) : void
      {
         var userID:uint = 0;
         var evt:MouseEvent = param1;
         userID = 0;
         switch(this._type)
         {
            case RobotEvent.ADD_FRIEND_MSG:
               AddFriendMsgController.showAddFridPanel();
               break;
            case RobotEvent.FRIENDS_NOTICE:
               AddFriendMsgController.showAddFridPanel();
               break;
            case RobotEvent.INVITE_TEAM_MSG:
               userID = uint(MessageManager.inviteJoinTeamMap.getKeys()[0]);
               UserInfoManager.getInfo(userID,function(param1:UserInfo):void
               {
                  AddFriendMsgController.showInviteTeamPanel(param1.teamID);
                  MessageManager.inviteJoinTeamMap.remove(userID);
                  if(MessageManager.inviteJoinTeamMap.length > 1)
                  {
                     MessageManager.dispatchEvent(new RobotEvent(RobotEvent.INVITE_TEAM_MSG));
                  }
               });
               break;
            case RobotEvent.ADD_TEAM_MSG:
               AddFriendMsgController.showAddTeamPanel();
               break;
            case RobotEvent.INVITE_JOIN_GROUP:
               Alert.show("<font color=\'#ff0000\'>" + GroupNoticeManager.ivtNoticeInfo.fromUserNick + "</font>邀请你加入小队，你确定接受吗？",function():void
               {
                  GroupController.answerInviteJoin(GroupNoticeManager.ivtNoticeInfo.fromUserID,true);
               },function():void
               {
                  GroupController.answerInviteJoin(GroupNoticeManager.ivtNoticeInfo.fromUserID,false);
               });
               break;
            case RobotEvent.ANSWER_JOIN_GROUP:
            case RobotEvent.CANCEL_INVITE_GROUP:
         }
         this.hide();
         EventManager.dispatchEvent(new Event("Msg_btn_click"));
      }
      
      public function hide() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui.visible = false;
      }
      
      public function showTxtContent(param1:String) : void
      {
         var _loc3_:GpInviteNoticeInfo = null;
         var _loc4_:QuitGroupInfo = null;
         var _loc5_:ChgLeaderInfo = null;
         var _loc2_:String = "";
         switch(param1)
         {
            case RobotEvent.ADD_FRIEND_MSG:
               if(MessageManager.friendAddInfoMap.length > 1)
               {
                  this._txt.htmlText = "有<font color=\'#ff0000\'>" + MessageManager.friendAddInfoMap.length + "</font>个赛尔添加你为好友";
               }
               else
               {
                  _loc2_ = String((MessageManager.friendAddInfoMap.getValues()[0] as InformInfo).nick);
                  this._txt.htmlText = "<font color=\'#ff0000\'>" + _loc2_ + "</font>想要添加你为好友";
               }
               break;
            case RobotEvent.INVITE_TEAM_MSG:
               if(MessageManager.inviteJoinTeamMap.length > 1)
               {
                  this._txt.htmlText = "有<font color=\'#ff0000\'>" + MessageManager.inviteJoinTeamMap.length + "</font>个赛尔邀請你加入战队";
               }
               else
               {
                  _loc2_ = String((MessageManager.inviteJoinTeamMap.getValues()[0] as TeamInformInfo).nick);
                  this._txt.htmlText = "<font color=\'#ff0000\'>" + _loc2_ + "</font>邀請你加入战队";
               }
               break;
            case RobotEvent.ADD_TEAM_MSG:
               if(MessageManager.teamAddInfoMap.length > 1)
               {
                  this._txt.htmlText = "有<font color=\'#ff0000\'>" + MessageManager.teamAddInfoMap.length + "</font>个赛尔请求加入你的战队";
               }
               else
               {
                  _loc2_ = String((MessageManager.teamAddInfoMap.getValues()[0] as InformInfo).nick);
                  this._txt.htmlText = "<font color=\'#ff0000\'>" + _loc2_ + "</font>请求加入你的战队";
               }
               break;
            case RobotEvent.INVITE_JOIN_GROUP:
               this._txt.htmlText = "<font color=\'#ff0000\'>" + GroupNoticeManager.ivtNoticeInfo.fromUserNick + "</font>邀请你加入小队";
               break;
            case RobotEvent.ANSWER_JOIN_GROUP:
               _loc3_ = GroupNoticeManager.ivtNoticeInfo;
               if(_loc3_.data == 1)
               {
                  this._txt.htmlText = "<font color=\'#ff0000\'>" + _loc3_.fromUserNick + "</font>加入了你的小队";
               }
               else
               {
                  this._txt.htmlText = "<font color=\'#ff0000\'>" + _loc3_.fromUserNick + "</font>拒绝加入小队。";
               }
               break;
            case RobotEvent.CANCEL_INVITE_GROUP:
               this._txt.htmlText = "<font color=\'#ff0000\'>" + GroupNoticeManager.ivtNoticeInfo.fromUserNick + "</font>取消了对你的邀请";
               break;
            case RobotEvent.QUIT_GROUP:
               if((_loc4_ = GroupNoticeManager.quitGroupInfo).userID == MainManager.actorID)
               {
                  _loc4_.userNick = "你";
               }
               this._txt.htmlText = "<font color=\'#ff0000\'>" + _loc4_.userNick + "</font>退出了小队";
               break;
            case RobotEvent.NEW_LEADER_GROUP:
               if((_loc5_ = GroupNoticeManager.chgLeaderInfo).leaderID == MainManager.actorID)
               {
                  _loc5_.leaderNick = "你";
               }
               this._txt.htmlText = "<font color=\'#ff0000\'>" + _loc5_.leaderNick + "</font>成为了小队队长";
               break;
            case RobotEvent.NEW_GROUP_NAME:
               if(GroupNoticeManager.chgGpNameInfo.leaderID == MainManager.actorID)
               {
                  this._txt.htmlText = "你已更换队名为<font color=\'#ff0000\'>" + GroupNoticeManager.chgGpNameInfo.groupName + "</font>";
               }
               else
               {
                  this._txt.htmlText = "队长已更换队名为<font color=\'#ff0000\'>" + GroupNoticeManager.chgGpNameInfo.groupName + "</font>";
               }
         }
      }
   }
}
