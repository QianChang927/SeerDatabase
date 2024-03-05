package com.robot.app.group
{
   import com.robot.app.action.GroupActionManager;
   import com.robot.core.CommandID;
   import com.robot.core.group.info.AnswerJoinGpInfo;
   import com.robot.core.group.info.GroupIDInfo;
   import com.robot.core.group.info.GroupInfo;
   import com.robot.core.group.manager.GroupInviteManager;
   import com.robot.core.group.manager.GroupManager;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.ArrayUtils;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   
   public class GroupController
   {
      
      public static var isInGroup:Boolean = false;
      
      public static var gpInfo:GroupInfo;
      
      public static var gpStatus:uint = 1;
      
      private static var memberList:Array = [];
      
      private static var cancelTimer:Timer;
      
      private static var inviteUserInfo:UserInfo;
       
      
      public function GroupController()
      {
         super();
      }
      
      public static function inviteJoin(param1:UserInfo) : void
      {
         inviteUserInfo = param1;
         SocketConnection.addCmdListener(CommandID.INVITE_JOIN_GROUP,onJoinGroup);
         SocketConnection.send(CommandID.INVITE_JOIN_GROUP,param1.userID);
      }
      
      private static function onJoinGroup(param1:SocketEvent) : void
      {
         GroupInviteManager.addInvitee(inviteUserInfo);
      }
      
      public static function cancelInviteGp(param1:uint) : void
      {
         SocketConnection.send(CommandID.CANCEL_INVITE_GROUP,param1);
      }
      
      public static function answerInviteJoin(param1:uint, param2:Boolean) : void
      {
         SocketConnection.addCmdListener(CommandID.ANSWER_JOIN_GROUP,onAnswerInviteJoin);
         if(param2)
         {
            SocketConnection.send(CommandID.ANSWER_JOIN_GROUP,param1,1);
         }
         else
         {
            SocketConnection.send(CommandID.ANSWER_JOIN_GROUP,param1,0);
         }
      }
      
      private static function onAnswerInviteJoin(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ANSWER_JOIN_GROUP,onAnswerInviteJoin);
         memberList = [];
         var _loc2_:AnswerJoinGpInfo = param1.data as AnswerJoinGpInfo;
         if(_loc2_.leaderID == 0 || _loc2_.membList.length == 0)
         {
            return;
         }
         memberList = _loc2_.membList.concat();
         var _loc3_:GroupInfo = new GroupInfo();
         _loc3_.groupIDInfo = _loc2_.groupIDInfo;
         _loc3_.leaderID = _loc2_.leaderID;
         var _loc4_:int;
         if((_loc4_ = memberList.indexOf(_loc2_.leaderID)) != -1)
         {
            ArrayUtils.exchangeIndex(memberList,_loc4_,0);
         }
         _loc3_.memberList = memberList;
         MainManager.actorInfo.groupInfo = _loc3_;
         GroupManager.isInGroup = true;
         GroupActionManager.setIsInGroup(true);
         Alarm.show("你已经成功加入了小队");
      }
      
      public static function setGroupStatus(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(CommandID.STATUS_INOUT_GROUP,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.STATUS_INOUT_GROUP,arguments.callee);
            var _loc3_:GroupIDInfo = param1.data as GroupIDInfo;
            Alarm.show("你已经光荣的成为<font color=\'#ff0000\'>队长</font>了,你可以邀请别人加入你的小队!");
            memberList = [MainManager.actorID];
            var _loc4_:GroupInfo;
            (_loc4_ = new GroupInfo()).groupIDInfo = _loc3_;
            _loc4_.leaderID = MainManager.actorID;
            _loc4_.memberList = memberList;
            MainManager.actorInfo.groupInfo = _loc4_;
            GroupManager.isInGroup = true;
            GroupActionManager.setIsInGroup(true);
            GroupMembItemList.setup();
            if(fun != null)
            {
               fun();
            }
         });
         SocketConnection.send(CommandID.STATUS_INOUT_GROUP,1);
      }
      
      public static function quitGroup() : void
      {
         SocketConnection.send(CommandID.QUIT_GROUP);
      }
      
      private static function onQuitGroup(param1:SocketEvent) : void
      {
         GroupManager.isInGroup = false;
         MainManager.actorInfo.groupInfo = null;
         GroupActionManager.setIsInGroup(false);
         GroupInviteManager.clear();
         GroupMembItemList.setup();
      }
      
      public static function seatPoint(param1:uint, param2:uint) : void
      {
         SocketConnection.send(CommandID.GROUP_SEAT_POINT,param1,param2);
      }
      
      public static function downPoint() : void
      {
         SocketConnection.send(CommandID.GROUP_DOWN_POINT);
      }
      
      public static function seatPointToGroup() : void
      {
         SocketConnection.send(CommandID.SEAT_POINT_TO_GROUP);
      }
      
      public static function applyJoin(param1:uint) : void
      {
         SocketConnection.send(CommandID.APPLY_JOIN_GROUP,param1);
      }
      
      public static function answerApplyJoin(param1:uint, param2:Boolean = false) : void
      {
         if(param2)
         {
            SocketConnection.send(CommandID.ANSWER_APPLY_JOIN_GP,param1,1);
         }
         else
         {
            SocketConnection.send(CommandID.ANSWER_APPLY_JOIN_GP,param1,0);
         }
      }
   }
}
