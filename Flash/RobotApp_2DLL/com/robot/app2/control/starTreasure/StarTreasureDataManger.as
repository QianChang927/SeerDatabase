package com.robot.app2.control.starTreasure
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.protobuf.clientproto.cli_pb_get_recently_played_online_p_in;
   import com.protobuf.clientproto.cli_pb_get_recently_played_online_p_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_do_action_in;
   import com.protobuf.clientproto.cli_pb_team_game_proto_do_action_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_frtd_in;
   import com.protobuf.clientproto.cli_pb_team_game_proto_frtd_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_leave_game_in;
   import com.protobuf.clientproto.cli_pb_team_game_proto_start_game_in;
   import com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out;
   import com.protobuf.clientproto.cli_pb_team_game_proto_vote_in;
   import com.protobuf.clientproto.cli_pb_team_game_proto_vote_out;
   import com.protobuf.clientproto.match_room_info;
   import com.protobuf.clientproto.player_create_room_in;
   import com.protobuf.clientproto.player_create_room_out;
   import com.protobuf.clientproto.player_get_room_in;
   import com.protobuf.clientproto.player_get_room_out;
   import com.protobuf.clientproto.player_leave_room_in;
   import com.protobuf.clientproto.player_leave_room_out;
   import com.protobuf.clientproto.player_match_action_in;
   import com.protobuf.clientproto.player_match_action_out;
   import com.protobuf.clientproto.room_ivit_in;
   import com.protobuf.clientproto.room_ivit_notice_out;
   import com.protobuf.clientproto.room_ivit_out;
   import com.protobuf.clientproto.room_ivit_rsp_in;
   import com.protobuf.clientproto.room_ivit_rsp_out;
   import com.protobuf.clientproto.room_match_action_in;
   import com.protobuf.clientproto.room_match_action_out;
   import com.protobuf.clientproto.room_start_game_in;
   import com.protobuf.clientproto.room_start_game_notice_out;
   import com.protobuf.clientproto.room_start_game_out;
   import com.protobuf.clientproto.treasure_room_action_in;
   import com.protobuf.clientproto.treasure_room_action_out;
   import com.protobuf.commonproto.ArgsInfo;
   import com.protobuf.commonproto.room_player_info;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class StarTreasureDataManger
   {
      
      private static var _instance:com.robot.app2.control.starTreasure.StarTreasureDataManger;
      
      private static var _roomInfo:match_room_info;
      
      private static var _initTeamInfo:room_start_game_notice_out;
      
      private static var _teamInfo:cli_pb_team_game_proto_start_notice_out;
       
      
      public function StarTreasureDataManger()
      {
         super();
      }
      
      public static function getInstance() : com.robot.app2.control.starTreasure.StarTreasureDataManger
      {
         if(!com.robot.app2.control.starTreasure.StarTreasureDataManger._instance)
         {
            com.robot.app2.control.starTreasure.StarTreasureDataManger._instance = new com.robot.app2.control.starTreasure.StarTreasureDataManger();
         }
         return com.robot.app2.control.starTreasure.StarTreasureDataManger._instance;
      }
      
      public static function creatRoom(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var roommode:int = param1;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:player_create_room_in = new player_create_room_in();
         cs.roommode = roommode;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50100,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:player_create_room_out = new player_create_room_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.result >= 0)
            {
               udpateRoomInfo(_loc3_.roomInfo);
            }
            deferred.resolve(_loc3_.roomInfo);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function upateRoom(param1:int, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var roomid:int = param1;
         var roommode:int = param2;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:player_get_room_in = new player_get_room_in();
         cs.roomid = roomid;
         cs.roommode = roommode;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50104,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:player_get_room_out = new player_get_room_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.result != 1)
            {
               udpateRoomInfo(_loc3_.roomInfo);
            }
            deferred.resolve(_loc3_.result);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function quitRoom(param1:int, param2:int, param3:int) : Promise
      {
         var deferred:Deferred = null;
         var userid:int = param1;
         var roomid:int = param2;
         var roommode:int = param3;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:player_leave_room_in = new player_leave_room_in();
         cs.userid = userid;
         cs.roomid = roomid;
         cs.roommode = roommode;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50102,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:player_leave_room_out = new player_leave_room_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.result >= 0)
            {
            }
            clearRoomInfo();
            deferred.resolve(_loc3_.result);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function roomAction(param1:Array) : Promise
      {
         var deferred:Deferred = null;
         var arr:Array = param1;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:treasure_room_action_in = new treasure_room_action_in();
         cs.flag = arr[0];
         cs.choice = arr[1];
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50099,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:treasure_room_action_out = new treasure_room_action_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.result >= 0)
            {
            }
            deferred.resolve(_loc3_.roomInfo);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function ready() : Promise
      {
         return roomAction([1,1]);
      }
      
      public static function cancelReady() : Promise
      {
         return roomAction([1,2]);
      }
      
      public static function kickout(param1:int) : Promise
      {
         return roomAction([2,param1]);
      }
      
      public static function startGame() : Promise
      {
         return roomAction([2,4]);
      }
      
      public static function inviteToRoom(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var userid:int = param1;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:room_ivit_in = new room_ivit_in();
         cs.userid = userid;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50095,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:room_ivit_out = new room_ivit_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.result > 0)
            {
               if(_loc3_.result == 1)
               {
                  Alarm2.show("对方不在线");
               }
               else if(_loc3_.result == 2)
               {
                  Alarm2.show("对方游戏中");
               }
               else if(_loc3_.result == 3)
               {
                  Alarm2.show("当前房间不存在");
               }
               else if(_loc3_.result == 4)
               {
                  Alarm2.show("对方已经在房间");
               }
            }
            else
            {
               deferred.resolve(_loc3_.result);
            }
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function handleRoomInvite(param1:room_ivit_notice_out, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var info:room_ivit_notice_out = param1;
         var accept:int = param2;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:room_ivit_rsp_in = new room_ivit_rsp_in();
         cs.roomid = info.roomid;
         cs.roommode = info.roommode;
         cs.accept = accept;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50096,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:room_ivit_rsp_out = new room_ivit_rsp_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.result > 0)
            {
               if(_loc3_.result == 1)
               {
                  Alarm2.show("房间不存在");
               }
               else if(_loc3_.result == 2)
               {
                  Alarm2.show("房间人数已满");
               }
               else if(_loc3_.result == 3)
               {
                  Alarm2.show("房间已开始游戏");
               }
               else if(_loc3_.result == 4)
               {
                  Alarm2.show("邀请已过期");
               }
            }
            else
            {
               deferred.resolve(_loc3_);
               udpateRoomInfo(_loc3_.roomInfo);
            }
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function startGameInRoom(param1:match_room_info) : Promise
      {
         var deferred:Deferred = null;
         var info:match_room_info = param1;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:room_start_game_in = new room_start_game_in();
         cs.roomid = info.roomid;
         cs.roommode = info.roommode;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50112,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:room_start_game_out = new room_start_game_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.result >= 0)
            {
            }
            deferred.resolve(_loc3_.result);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function udpateRoomInfo(param1:match_room_info) : void
      {
         _roomInfo = param1;
      }
      
      public static function clearRoomInfo() : void
      {
         _roomInfo = null;
      }
      
      public static function set roomInfo(param1:match_room_info) : void
      {
         _roomInfo = param1;
      }
      
      public static function get roomInfo() : match_room_info
      {
         return _roomInfo;
      }
      
      public static function getUserIsInRoomByUserId(param1:int) : Boolean
      {
         var _loc2_:room_player_info = null;
         for each(_loc2_ in roomInfo.players)
         {
            if(_loc2_.userid == param1)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function readyToGame(param1:room_start_game_notice_out) : Promise
      {
         var deferred:Deferred = null;
         var info:room_start_game_notice_out = param1;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:cli_pb_team_game_proto_start_game_in = new cli_pb_team_game_proto_start_game_in();
         cs.mode = info.mode;
         cs.gameGrpId = info.gameGrpid;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50201,[cTos]).then(function(param1:SocketEvent):void
         {
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function doAction(param1:int, param2:int, param3:ArgsInfo = null) : Promise
      {
         var deferred:Deferred = null;
         var type:int = param1;
         var choice:int = param2;
         var argsInfo:ArgsInfo = param3;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:cli_pb_team_game_proto_do_action_in = new cli_pb_team_game_proto_do_action_in();
         cs.eventIdx = type;
         cs.choice = choice;
         if(argsInfo != null)
         {
            cs.args = argsInfo;
         }
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50202,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:cli_pb_team_game_proto_do_action_out = new cli_pb_team_game_proto_do_action_out();
            _loc3_.mergeFrom(_loc2_);
            deferred.resolve([_loc3_.result,_loc3_.args]);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function leaveGame() : Promise
      {
         var deferred:Deferred = null;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:cli_pb_team_game_proto_leave_game_in = new cli_pb_team_game_proto_leave_game_in();
         cs.mode = initIeamInfo.mode;
         cs.gameGrpId = initIeamInfo.gameGrpid;
         cs.eventIdx = 2;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50203,[cTos]).then(function(param1:SocketEvent):void
         {
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function leaveVoteAction(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var falg:int = param1;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:cli_pb_team_game_proto_vote_in = new cli_pb_team_game_proto_vote_in();
         cs.flag = falg;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50204,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:cli_pb_team_game_proto_vote_out = new cli_pb_team_game_proto_vote_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.result >= 0)
            {
            }
            deferred.resolve(_loc3_.result);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function recoverTeamData(param1:int = 1) : Promise
      {
         var deferred:Deferred = null;
         var gameMode:int = param1;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:cli_pb_team_game_proto_frtd_in = new cli_pb_team_game_proto_frtd_in();
         cs.mode = gameMode;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50205,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:cli_pb_team_game_proto_frtd_out = new cli_pb_team_game_proto_frtd_out();
            _loc3_.mergeFrom(_loc2_);
            if(_loc3_.eventIdx >= 0)
            {
               initIeamInfo = _loc3_.roomStartInfos;
               teamInfo = _loc3_.teamStartInfos;
            }
            else
            {
               Alarm2.show("不在组队中！");
            }
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function getLatelyPlayer(param1:int = 1) : Promise
      {
         var deferred:Deferred = null;
         var flag:int = param1;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:cli_pb_get_recently_played_online_p_in = new cli_pb_get_recently_played_online_p_in();
         cs.flag = flag;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50114,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:cli_pb_get_recently_played_online_p_out = new cli_pb_get_recently_played_online_p_out();
            _loc3_.mergeFrom(_loc2_);
            deferred.resolve(_loc3_.players);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function udpateInitTeamInfo(param1:room_start_game_notice_out) : void
      {
         _initTeamInfo = param1;
      }
      
      public static function set initIeamInfo(param1:room_start_game_notice_out) : void
      {
         _initTeamInfo = param1;
      }
      
      public static function get initIeamInfo() : room_start_game_notice_out
      {
         return _initTeamInfo;
      }
      
      public static function udpateTeamInfo(param1:cli_pb_team_game_proto_start_notice_out) : void
      {
         _teamInfo = param1;
      }
      
      public static function clearTeamInfo() : void
      {
         _teamInfo = null;
      }
      
      public static function set teamInfo(param1:cli_pb_team_game_proto_start_notice_out) : void
      {
         _teamInfo = param1;
      }
      
      public static function get teamInfo() : cli_pb_team_game_proto_start_notice_out
      {
         return _teamInfo;
      }
      
      public static function startOrCancelByRoomMatch(param1:match_room_info, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var roomInfo:match_room_info = param1;
         var flag:int = param2;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:room_match_action_in = new room_match_action_in();
         cs.roomid = roomInfo.roomid;
         cs.roommode = roomInfo.roommode;
         cs.flag = flag;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50105,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:room_match_action_out = new room_match_action_out();
            _loc3_.mergeFrom(_loc2_);
            deferred.resolve(_loc3_.result);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function startOrCancelByOneMatch(param1:int, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var mode:int = param1;
         var flag:int = param2;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:player_match_action_in = new player_match_action_in();
         cs.mode = mode;
         cs.flag = flag;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50106,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:player_match_action_out = new player_match_action_out();
            _loc3_.mergeFrom(_loc2_);
            deferred.resolve(_loc3_.result);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function sureMatch(param1:int, param2:int) : Promise
      {
         var deferred:Deferred = null;
         var mode:int = param1;
         var flag:int = param2;
         deferred = new Deferred();
         var cTos:ByteArray = new ByteArray();
         var cs:player_match_action_in = new player_match_action_in();
         cs.mode = mode;
         cs.flag = flag;
         cs.writeTo(cTos);
         SocketConnection.sendWithPromise(50107,[cTos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:player_match_action_out = new player_match_action_out();
            _loc3_.mergeFrom(_loc2_);
            deferred.resolve(_loc3_.result);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function destroy() : void
      {
         clearRoomInfo();
         clearTeamInfo();
      }
   }
}
