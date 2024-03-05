package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.event.ChatEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.ChatInfo;
   import com.robot.core.info.FriendsNoticeInfo;
   import com.robot.core.info.InformInfo;
   import com.robot.core.info.TeamChatInfo;
   import com.robot.core.info.team.TeamInformInfo;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   
   public class MessageManager
   {
      
      public static const SYS_TYPE:uint = 1;
      
      public static const TEAM_TYPE:uint = 2;
      
      public static const TEAM_CHAT_TYPE:uint = 3;
      
      public static const GROUP_INVITE_NOTICE:uint = 4;
      
      public static const QUIT_GROUP_NOTICE:uint = 5;
      
      public static const CHG_GROUP__NOTICE:uint = 6;
      
      public static const CHG_GROUP_NAME:uint = 7;
      
      public static const SHOW_MODULE:uint = 8;
      
      private static const MAX:int = 300;
      
      private static var _userMap:HashMap = new HashMap();
      
      public static var _unReadList:Array = [];
      
      public static var teamAddInfoMap:HashMap = new HashMap();
      
      public static var inviteJoinTeamMap:HashMap = new HashMap();
      
      public static var friendAddInfoMap:HashMap = new HashMap();
      
      public static var friendsNoticeMap:HashMap = new HashMap();
      
      public static var instructorNoticeMap:HashMap = new HashMap();
      
      private static var clearTimer:Timer;
      
      private static var instance:EventDispatcher;
      
      {
         timerClearMsg();
      }
      
      public function MessageManager()
      {
         super();
      }
      
      private static function timerClearMsg() : void
      {
         if(clearTimer == null)
         {
            clearTimer = new Timer(60000);
         }
         clearTimer.addEventListener(TimerEvent.TIMER,onClearTimer);
         clearTimer.start();
      }
      
      private static function onClearTimer(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         if(clearTimer)
         {
            if(clearTimer.currentCount % 3 == 0)
            {
               _unReadList = _unReadList.filter(function(param1:*, param2:uint, param3:Array):Boolean
               {
                  var _loc4_:*;
                  if((_loc4_ = uint(param1._id)) == CommandID.GROUP_INVITE_NOTICE || _loc4_ == CommandID.APPLY_JOIN_GP_NOTICE)
                  {
                     return false;
                  }
                  return true;
               });
               dispatchEvent(new RobotEvent(RobotEvent.MESSAGE));
            }
         }
      }
      
      public static function addChatInfo(param1:ChatInfo) : void
      {
         if(FriendManager.isBlack(param1.senderID))
         {
            return;
         }
         var _loc2_:String = ChatEvent.TALK + param1.talkID.toString();
         if(hasEventListener(_loc2_))
         {
            dispatchEvent(new ChatEvent(_loc2_,param1));
         }
         else
         {
            _unReadList.push({
               "_id":param1.talkID,
               "_info":param1
            });
            dispatchEvent(new RobotEvent(RobotEvent.MESSAGE));
         }
         var _loc3_:Array = _userMap.getValue(param1.talkID);
         if(_loc3_ == null)
         {
            _loc3_ = [];
            _userMap.add(param1.talkID,_loc3_);
         }
         _loc3_.push(param1);
         if(_loc3_.length > MAX)
         {
            _loc3_.shift();
         }
      }
      
      public static function addModuleMsg(param1:String) : void
      {
         _unReadList.push({
            "_id":SHOW_MODULE,
            "key":param1,
            "module":param1
         });
         dispatchEvent(new RobotEvent(RobotEvent.MESSAGE));
      }
      
      public static function removeModuleMsg(param1:String) : void
      {
         var key:String = param1;
         _unReadList = _unReadList.filter(function(param1:Object, param2:int, param3:Array):Boolean
         {
            if(param1.key == key)
            {
               return false;
            }
            return true;
         });
      }
      
      public static function addInformInfo(param1:InformInfo) : void
      {
         if(param1.type == CommandID.FRIEND_ADD)
         {
            if(RelationManager.friendLength >= RelationManager.F_MAX)
            {
               return;
            }
            friendAddInfoMap.add(param1.userID,param1);
         }
         else if(param1.type == CommandID.TEAM_ADD)
         {
            if(teamAddInfoMap.containsKey(param1.userID))
            {
               return;
            }
            teamAddInfoMap.add(param1.userID,param1);
         }
         else if(param1.type == CommandID.FLOWER_REQUIRE)
         {
            DebugTrace.show(123);
         }
         else if(param1.type == CommandID.INSTRUCTOR_TOBESTUDENT || param1.type == CommandID.INSTRUCTOR_TOBEINS)
         {
            if(instructorNoticeMap.containsKey(param1.userID))
            {
               return;
            }
            instructorNoticeMap.add(param1.userID,param1);
         }
         _unReadList.push({
            "_id":SYS_TYPE,
            "_info":param1
         });
         dispatchEvent(new RobotEvent(RobotEvent.MESSAGE));
      }
      
      public static function addTeamInformInfo(param1:TeamInformInfo) : void
      {
         var info:TeamInformInfo = param1;
         if(info.type == CommandID.TEAM_INVITE_TO_JOIN)
         {
            inviteJoinTeamMap.add(info.userID,info);
         }
         if(info.type == CommandID.TEAM_DELET_MEMBER)
         {
            if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == MainManager.actorInfo.teamInfo.id)
            {
               Alarm.show("你已经被移出战队了！",function():void
               {
                  MainManager.actorInfo.teamInfo.id = 0;
                  MapManager.changeMap(1);
               });
               return;
            }
            MainManager.actorInfo.teamInfo.id = 0;
         }
         if(info.type == CommandID.NEW_TEAM_DISBAND_NOTICE)
         {
            if(Boolean(MapManager.currentMap) && MapManager.currentMap.id == MainManager.actorInfo.teamInfo.id)
            {
               Alarm.show("你所在的战队已经解散！",function():void
               {
                  MainManager.actorInfo.teamInfo.id = 0;
                  MapManager.changeMap(1);
               });
               return;
            }
            MainManager.actorInfo.teamInfo.id = 0;
         }
         if(info.type == CommandID.TEAM_ANSWER)
         {
            if(info.data1 != 0)
            {
               MainManager.actorInfo.teamInfo.id = info.data2;
               MainManager.actorInfo.teamInfo.priv = 2;
            }
         }
         _unReadList.push({
            "_id":TEAM_TYPE,
            "_info":info
         });
         dispatchEvent(new RobotEvent(RobotEvent.MESSAGE));
      }
      
      public static function removeUnUserID(param1:uint) : void
      {
         var userID:uint = param1;
         _unReadList = _unReadList.filter(function(param1:Object, param2:int, param3:Array):Boolean
         {
            if(param1._id == userID)
            {
               return false;
            }
            return true;
         });
      }
      
      public static function getChatInfo(param1:uint) : Array
      {
         return _userMap.getValue(param1);
      }
      
      public static function getInformInfo() : InformInfo
      {
         var _loc3_:InformInfo = null;
         var _loc1_:int = int(_unReadList.length);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            if(_unReadList[_loc2_]._id == SYS_TYPE)
            {
               _loc3_ = _unReadList[_loc2_]._info;
               _unReadList.splice(_loc2_,1);
               if(_loc3_.type == CommandID.TEAM_ADD)
               {
                  if(teamAddInfoMap.containsKey(_loc3_.userID))
                  {
                     teamAddInfoMap.remove(_loc3_.userID);
                  }
               }
               else if(_loc3_.type == CommandID.FRIEND_ADD)
               {
                  if(friendAddInfoMap.containsKey(_loc3_.userID))
                  {
                     friendAddInfoMap.remove(_loc3_.userID);
                  }
               }
               else if(_loc3_.type == CommandID.INSTRUCTOR_TOBESTUDENT || _loc3_.type == CommandID.INSTRUCTOR_TOBEINS || _loc3_.type == CommandID.INSTRUCTOR_ANSWERSTUDENT || _loc3_.type == CommandID.INSTRUCTOR_ANSWERINS)
               {
                  if(instructorNoticeMap.containsKey(_loc3_.userID))
                  {
                     instructorNoticeMap.remove(_loc3_.userID);
                  }
               }
               return _loc3_;
            }
            _loc2_++;
         }
         return null;
      }
      
      public static function addGroupNotice(param1:uint, param2:*) : void
      {
         _unReadList.push({
            "_id":param1,
            "_info":param2
         });
         sortListData();
         dispatchEvent(new RobotEvent(RobotEvent.MESSAGE));
      }
      
      private static function sortListData() : void
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < _unReadList.length)
         {
            _loc3_ = uint(_unReadList[_loc2_]._id);
            _loc4_ = _unReadList.length - 1;
            while(_loc4_ > 0)
            {
               if(_loc3_ == _unReadList[_loc4_]._id)
               {
                  _unReadList.splice(_loc4_,1);
               }
               _loc4_--;
            }
            _loc2_++;
         }
      }
      
      public static function getInviteJoinTeamInfo(param1:uint) : TeamInformInfo
      {
         if(inviteJoinTeamMap.containsKey(param1))
         {
            return inviteJoinTeamMap.getValue(param1);
         }
         return null;
      }
      
      public static function getTeamAddInfo(param1:uint) : InformInfo
      {
         if(teamAddInfoMap.containsKey(param1))
         {
            return teamAddInfoMap.getValue(param1);
         }
         return null;
      }
      
      public static function removeTeamAddInfo(param1:uint) : void
      {
         if(teamAddInfoMap.containsKey(param1))
         {
            teamAddInfoMap.remove(param1);
         }
      }
      
      public static function getFriendsNoticeInfo(param1:uint) : FriendsNoticeInfo
      {
         if(friendsNoticeMap.containsKey(param1))
         {
            return friendsNoticeMap.getValue(param1);
         }
         return null;
      }
      
      public static function removeFriendsNoticeInfo(param1:uint) : void
      {
         if(friendsNoticeMap.containsKey(param1))
         {
            friendsNoticeMap.remove(param1);
         }
      }
      
      public static function removeAddFridInfo(param1:uint) : void
      {
         if(friendAddInfoMap.containsKey(param1))
         {
            friendAddInfoMap.remove(param1);
         }
      }
      
      public static function removeInviteJoinTeamInfo(param1:uint) : void
      {
         if(inviteJoinTeamMap.containsKey(param1))
         {
            inviteJoinTeamMap.remove(param1);
         }
      }
      
      public static function getTeamInformInfo() : TeamInformInfo
      {
         var _loc3_:TeamInformInfo = null;
         var _loc1_:int = int(_unReadList.length);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            if(_unReadList[_loc2_]._id == TEAM_TYPE)
            {
               _loc3_ = _unReadList[_loc2_]._info;
               _unReadList.splice(_loc2_,1);
               return _loc3_;
            }
            _loc2_++;
         }
         return null;
      }
      
      public static function getTeamChatInfo() : TeamChatInfo
      {
         var _loc3_:TeamChatInfo = null;
         var _loc1_:int = int(_unReadList.length);
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_)
         {
            if(_unReadList[_loc2_]._id == TEAM_CHAT_TYPE)
            {
               _loc3_ = _unReadList[_loc2_]._info;
               _unReadList.splice(_loc2_,1);
               return _loc3_;
            }
            _loc2_++;
         }
         return null;
      }
      
      public static function getFristUnReadID() : uint
      {
         if(_unReadList.length > 0)
         {
            return _unReadList[0]._id;
         }
         return 0;
      }
      
      public static function unReadLength() : int
      {
         return _unReadList.length;
      }
      
      private static function getInstance() : EventDispatcher
      {
         if(instance == null)
         {
            instance = new EventDispatcher();
         }
         return instance;
      }
      
      public static function addEventListener(param1:String, param2:Function, param3:Boolean = false, param4:int = 0, param5:Boolean = false) : void
      {
         getInstance().addEventListener(param1,param2,param3,param4,param5);
      }
      
      public static function removeEventListener(param1:String, param2:Function, param3:Boolean = false) : void
      {
         getInstance().removeEventListener(param1,param2,param3);
      }
      
      public static function dispatchEvent(param1:Event) : void
      {
         getInstance().dispatchEvent(param1);
      }
      
      public static function hasEventListener(param1:String) : Boolean
      {
         return getInstance().hasEventListener(param1);
      }
      
      public static function willTrigger(param1:String) : Boolean
      {
         return getInstance().willTrigger(param1);
      }
   }
}
