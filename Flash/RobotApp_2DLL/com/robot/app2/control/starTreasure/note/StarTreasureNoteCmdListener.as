package com.robot.app2.control.starTreasure.note
{
   import com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out;
   import com.protobuf.clientproto.match_result_notice_out;
   import com.protobuf.clientproto.room_ivit_notice_out;
   import com.protobuf.clientproto.room_ivit_rsp_notice_out;
   import com.protobuf.clientproto.room_start_game_notice_out;
   import com.robot.app.user.UserInfoController;
   import com.robot.app2.control.starTreasure.StarTreasureDataManger;
   import com.robot.app2.control.starTreasure.StarTreasureManger;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.fightInfo.NoteReadyToFightInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.Sprite;
   import flash.events.TextEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class StarTreasureNoteCmdListener
   {
      
      public static var isInFightModule:Boolean = false;
       
      
      private var readyData:NoteReadyToFightInfo;
      
      public function StarTreasureNoteCmdListener()
      {
         super();
      }
      
      public static function start() : void
      {
         SocketConnection.addCmdListener(50097,noteInviteToRoom);
         SocketConnection.addCmdListener(50098,noteHandlerRoomInvite);
         SocketConnection.addCmdListener(50113,noteHandlerReadyGame);
         SocketConnection.addCmdListener(50301,noteHandlerRoomGameStart);
         SocketConnection.addCmdListener(50108,noteHandlerMatchSucces);
      }
      
      private static function noteInviteToRoom(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:room_ivit_notice_out = new room_ivit_notice_out();
         _loc3_.mergeFrom(_loc2_);
         StarTreasureManger.add(_loc3_);
      }
      
      private static function noteHandlerRoomInvite(param1:SocketEvent) : void
      {
         var data:room_ivit_rsp_notice_out = null;
         var event:SocketEvent = param1;
         var sToc:ByteArray = event.data as ByteArray;
         sToc.position = 0;
         data = new room_ivit_rsp_notice_out();
         data.mergeFrom(sToc);
         if(data.accept == 0)
         {
            UserInfoManager.getInfo(data.userid,function(param1:UserInfo):void
            {
               var info:UserInfo = param1;
               var sprite:Sprite = Alarm.show("<a href=\'event:\'><u><font color=\'#ff0000\'>" + info.nick + "(" + info.userID + ")</font></u></a>拒绝了你的邀请！");
               sprite.addEventListener(TextEvent.LINK,function():void
               {
                  UserInfoController.show(data.userid);
               });
            });
         }
      }
      
      private static function noteHandlerReadyGame(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:room_start_game_notice_out = new room_start_game_notice_out();
         _loc3_.mergeFrom(_loc2_);
         StarTreasureDataManger.initIeamInfo = _loc3_;
         StarTreasureDataManger.readyToGame(_loc3_);
      }
      
      private static function noteHandlerRoomGameStart(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:cli_pb_team_game_proto_start_notice_out = new cli_pb_team_game_proto_start_notice_out();
         _loc3_.mergeFrom(_loc2_);
         StarTreasureDataManger.teamInfo = _loc3_;
         ModuleManager.hideAllModule();
         ModuleManager.showAppModule("StarTreasureTeamModelPanel");
      }
      
      private static function noteHandlerMatchSucces(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:match_result_notice_out = new match_result_notice_out();
         _loc3_.mergeFrom(_loc2_);
         ModuleManager.hideAllModule();
         ModuleManager.showAppModule("StarTreasureTeamMatchPanel",_loc3_.groupInfo);
      }
   }
}
