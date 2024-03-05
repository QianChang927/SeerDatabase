package com.robot.core.manager
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.CommandID;
   import com.robot.core.event.RelationEvent;
   import com.robot.core.info.BasePlayerInfo;
   import com.robot.core.info.UserInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class FriendManager
   {
      
      public static var friendList:Array = [];
      
      public static var aplyList:Array = [];
      
      public static var blackList:Array = [];
      
      public static var MAX_FRIEND_COUNT:int = 50;
      
      public static var MAX_BLACK_COUNT:int = 50;
      
      private static var _friendListHashMap:HashMap;
      
      private static var _blackListHashMap:HashMap;
      
      private static var _isInit:Boolean = false;
       
      
      public function FriendManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         getFriendList().then(function():void
         {
            getBlackList().then(function():void
            {
               _isInit = true;
               ChatManager.setup();
            });
         });
      }
      
      public static function getFriendList() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(CommandID.GET_FRIEND_LIST,[]).then(function(param1:SocketEvent):void
         {
            var _loc6_:BasePlayerInfo = null;
            friendList.splice(0);
            _friendListHashMap = new HashMap();
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            MAX_FRIEND_COUNT = _loc2_.readUnsignedInt();
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_)
            {
               _loc6_ = new BasePlayerInfo(_loc2_);
               friendList.push(_loc6_);
               _friendListHashMap.add(_loc6_.id,_loc6_);
               _loc5_++;
            }
            deferred.resolve(friendList);
         },function(param1:*):void
         {
            deferred.reject([]);
         });
         return deferred.promise;
      }
      
      public static function getApplyList() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(CommandID.GET_APLY_FRIEND_LIST,[]).then(function(param1:SocketEvent):void
         {
            var _loc7_:BasePlayerInfo = null;
            aplyList.splice(0);
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            var _loc5_:int = int(_loc2_.readUnsignedInt());
            var _loc6_:int = 0;
            while(_loc6_ < _loc5_)
            {
               _loc7_ = new BasePlayerInfo(_loc2_);
               aplyList.push(_loc7_);
               _loc6_++;
            }
            deferred.resolve(aplyList);
         },function(param1:*):void
         {
            deferred.reject([]);
         });
         return deferred.promise;
      }
      
      public static function getBlackList() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(CommandID.GET_BLACK_LIST,[]).then(function(param1:SocketEvent):void
         {
            var _loc6_:BasePlayerInfo = null;
            blackList.splice(0);
            _blackListHashMap = new HashMap();
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            MAX_BLACK_COUNT = _loc2_.readUnsignedInt();
            var _loc4_:int = int(_loc2_.readUnsignedInt());
            var _loc5_:int = 0;
            while(_loc5_ < _loc4_)
            {
               _loc6_ = new BasePlayerInfo(_loc2_);
               blackList.push(_loc6_);
               _blackListHashMap.add(_loc6_.id,_loc6_);
               _loc5_++;
            }
            deferred.resolve(blackList);
         },function(param1:*):void
         {
            deferred.reject([]);
         });
         return deferred.promise;
      }
      
      public static function getRecommendedList() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(CommandID.GET_RECOMMEND_FRIEND_LIST,[]).then(function(param1:SocketEvent):void
         {
            var _loc7_:BasePlayerInfo = null;
            var _loc2_:Array = [];
            var _loc3_:ByteArray = param1.data as ByteArray;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            MAX_BLACK_COUNT = _loc3_.readUnsignedInt();
            var _loc5_:int = int(_loc3_.readUnsignedInt());
            var _loc6_:int = 0;
            while(_loc6_ < _loc5_)
            {
               _loc7_ = new BasePlayerInfo(_loc3_);
               _loc2_.push(_loc7_);
               _loc6_++;
            }
            deferred.resolve(_loc2_);
         },function(param1:*):void
         {
            deferred.reject([]);
         });
         return deferred.promise;
      }
      
      public static function replyFriend(param1:int, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var uid:int = param1;
         var accept:int = param2;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(CommandID.REPLY_ADD_FRIEND,[uid,accept]).then(function(param1:SocketEvent):void
         {
            EventManager.dispatchEvent(new RelationEvent(RelationEvent.DEAL_FRIEND_APLY,uid));
            if(!accept)
            {
            }
            deferred.resolve(0);
         },function(param1:SocketErrorEvent):void
         {
            deferred.reject(param1.headInfo.result);
         });
         return deferred.promise;
      }
      
      public static function addFriend(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var uid:int = param1;
         deferred = new Deferred();
         if(MainManager.actorID == uid)
         {
            Alarm.show("不能加自己为好友");
            deferred.reject(null);
         }
         else
         {
            SocketConnection.sendWithPromise(CommandID.FRIEND_ADD,[uid]).then(function(param1:SocketEvent):void
            {
               Alarm.show("好友申请发送成功");
               deferred.resolve(0);
            },function(param1:SocketErrorEvent):void
            {
               deferred.reject(param1.headInfo.result);
               if(param1.headInfo.result != 103102)
               {
                  if(param1.headInfo.result != 103103)
                  {
                     if(param1.headInfo.result == 103105)
                     {
                     }
                  }
               }
            });
         }
         return deferred.promise;
      }
      
      public static function removeFriend(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var uid:int = param1;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(CommandID.FRIEND_REMOVE,[uid]).then(function(param1:SocketEvent):void
         {
            deferred.resolve(0);
            _friendListHashMap.remove(uid);
            Alarm.show("删除成功");
            EventManager.dispatchEvent(new RelationEvent(RelationEvent.FRIEND_REMOVE,uid));
         },function(param1:SocketErrorEvent):void
         {
            deferred.reject(param1.headInfo.result);
            if(param1.headInfo.result == 103102)
            {
               Alarm.show("对方在你的黑名单中！");
            }
            else if(param1.headInfo.result == 103103)
            {
               Alarm.show("好友已存在！");
            }
            else if(param1.headInfo.result == 103105)
            {
               Alarm.show("到达好友个数上限！");
            }
         });
         return deferred.promise;
      }
      
      public static function removeBlack(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var uid:int = param1;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(CommandID.BLACK_REMOVE,[uid]).then(function(param1:SocketEvent):void
         {
            deferred.resolve(uid);
            _blackListHashMap.remove(uid);
            Alarm.show("移除成功");
            EventManager.dispatchEvent(new RelationEvent(RelationEvent.BLACK_REMOVE,uid));
         },function(param1:SocketErrorEvent):void
         {
            deferred.reject(null);
            if(param1.headInfo.result == 103116)
            {
               Alarm.show("被移除的用户不在黑名单中");
            }
         });
         return deferred.promise;
      }
      
      public static function addBlack(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var userID:int = param1;
         deferred = new Deferred();
         if(MainManager.actorID == userID)
         {
            Alarm.show("不能把自己添加进黑名单！");
            deferred.reject(null);
         }
         if(_blackListHashMap.containsKey(userID))
         {
            Alarm.show("用户已经存在于黑名单！");
            deferred.reject(null);
         }
         SocketConnection.sendWithPromise(CommandID.BLACK_ADD,[userID]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:UserInfo;
            (_loc4_ = new UserInfo()).userID = _loc3_;
            _loc4_.timePoke = 0;
            if(_friendListHashMap.remove(_loc3_))
            {
               EventManager.dispatchEvent(new RelationEvent(RelationEvent.FRIEND_REMOVE,_loc3_));
            }
            _blackListHashMap.add(_loc3_,_loc4_);
            EventManager.dispatchEvent(new RelationEvent(RelationEvent.BLACK_ADD,_loc3_));
            upDateInfo(_loc3_);
            Alarm.show("已将该玩家拉黑！");
            deferred.resolve(_loc3_);
         },function(param1:SocketErrorEvent):void
         {
            deferred.reject(null);
         });
         return deferred.promise;
      }
      
      public static function upDateInfo(param1:int) : void
      {
         var id:int = param1;
         var rel:UserInfo = _friendListHashMap.getValue(id) as UserInfo;
         if(rel == null)
         {
            rel = _blackListHashMap.getValue(id) as UserInfo;
         }
         if(rel)
         {
            UserInfoManager.upDateSimpleInfo(rel,function():void
            {
               EventManager.dispatchEvent(new RelationEvent(RelationEvent.UPDATE_INFO,id));
            });
         }
      }
      
      public static function get isInit() : Boolean
      {
         return _isInit;
      }
      
      public static function isFriend(param1:int) : Boolean
      {
         return _friendListHashMap.containsKey(param1);
      }
      
      public static function isBlack(param1:int) : Boolean
      {
         return _blackListHashMap.containsKey(param1);
      }
      
      public static function getFriendInfo(param1:int) : UserInfo
      {
         return _friendListHashMap.getValue(param1) as UserInfo;
      }
      
      public static function getBlackInfo(param1:int) : UserInfo
      {
         return _blackListHashMap.getValue(param1) as UserInfo;
      }
   }
}
