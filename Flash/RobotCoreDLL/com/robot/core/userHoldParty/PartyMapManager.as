package com.robot.core.userHoldParty
{
   import com.robot.core.CommandID;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.info.InformInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import flash.utils.getDefinitionByName;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   
   public class PartyMapManager
   {
      
      public static const timeList:Array = ["06:00-07:00","07:00-08:00","08:00-09:00","09:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00","18:00-19:00","19:00-20:00","20:00-21:00","21:00-22:00"];
      
      public static const partyList:Array = ["0","生日派对","精灵派对","绿色派对"];
      
      public static var partyType:uint;
      
      public static var masterID:uint;
      
      public static var serverID:uint;
      
      public static var curHour:uint;
      
      public static var isHost:Boolean;
      
      private static var cls;
      
      public static var isFree:uint;
      
      public static var listCnt:uint;
      
      public static var partyTypeArr:Array = [];
      
      public static var hostArr:Array = [];
      
      public static var sloganArr:Array = [];
      
      public static var freeTimeArr:Array = [];
      
      public static var freePartyArr:Array = [];
      
      public static var freeHostArr:Array = [];
      
      public static var freeSloganArr:Array = [];
      
      public static var readyTimeArr:Array = [];
      
      public static var readyPartyArr:Array = [];
      
      public static var readyHostArr:Array = [];
      
      public static var readySloganArr:Array = [];
      
      public static var curPartyTime:String = "";
      
      public static var curPartyType:uint;
      
      public static var curPartyHost:uint;
      
      public static var curPartySlogan:String;
       
      
      public function PartyMapManager()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.USER_PARTY_CHECK_CURRENT_PARTY,getPartyType);
         SocketConnection.send(CommandID.USER_PARTY_CHECK_CURRENT_PARTY);
         var _loc1_:Date = SystemTimerManager.sysDate;
         curHour = _loc1_.hours;
      }
      
      private static function getPartyType(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.USER_PARTY_CHECK_CURRENT_PARTY,getPartyType);
         var _loc2_:ByteArray = param1.data as ByteArray;
         partyType = _loc2_.readUnsignedInt();
         masterID = _loc2_.readUnsignedInt();
         serverID = _loc2_.readUnsignedInt();
         DebugTrace.show("4364---派对类型：" + partyType + ";主人ID：" + masterID + "；派对所在的服务器：" + serverID);
         if(masterID == MainManager.actorID)
         {
            isHost = true;
         }
         else
         {
            isHost = false;
         }
      }
      
      public static function getTargetRes(param1:uint) : uint
      {
         var _loc2_:uint = 0;
         switch(param1)
         {
            case 0:
               _loc2_ = 28;
               break;
            case 1:
               _loc2_ = 600003;
               break;
            case 2:
               _loc2_ = 600004;
               break;
            case 3:
               _loc2_ = 600005;
         }
         return _loc2_;
      }
      
      public static function checkTime() : void
      {
         SocketConnection.addCmdListener(CommandID.USER_PARTY_CHECK_TIME_LIST,getTimeList);
         SocketConnection.send(CommandID.USER_PARTY_CHECK_TIME_LIST);
      }
      
      private static function getTimeList(param1:SocketEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc5_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.USER_PARTY_CHECK_TIME_LIST,getTimeList);
         var _loc2_:ByteArray = param1.data as ByteArray;
         isFree = _loc2_.readUnsignedInt();
         listCnt = _loc2_.readUnsignedInt();
         DebugTrace.show("4363---派对时间列表---是否免费：" + isFree + ";列表长度：" + listCnt + "；");
         var _loc4_:uint = 0;
         while(_loc4_ < listCnt)
         {
            partyTypeArr[_loc4_] = _loc2_.readUnsignedInt();
            hostArr[_loc4_] = _loc2_.readUnsignedInt();
            _loc3_ = _loc2_.readUnsignedInt();
            sloganArr[_loc4_] = _loc2_.readUTFBytes(_loc3_);
            DebugTrace.show(_loc4_ + 1 + "类型--" + partyTypeArr[_loc4_] + "--主人--" + hostArr[_loc4_] + "--口号长度--" + _loc3_ + "--口号--" + sloganArr[_loc4_]);
            _loc4_++;
         }
         var _loc6_:Date;
         var _loc7_:uint = (_loc6_ = SystemTimerManager.sysDate).hours - 6;
         var _loc8_:Date = new Date(_loc6_.time + 3600 * 24 * 1000);
         var _loc9_:uint = 0;
         while(_loc9_ < listCnt)
         {
            if(partyTypeArr[_loc9_] == 0)
            {
               if(_loc9_ > _loc7_ && _loc9_ <= 15)
               {
                  freeTimeArr[_loc5_] = _loc6_.month + 1 + "月" + _loc6_.date + "日" + timeList[_loc9_];
                  _loc5_++;
               }
               else if(_loc9_ > 15 && _loc9_ <= 31)
               {
                  freeTimeArr[_loc5_] = _loc8_.month + 1 + "月" + _loc8_.date + "日" + timeList[_loc9_ - 16];
                  _loc5_++;
               }
            }
            _loc9_++;
         }
         _loc5_ = 0;
         var _loc10_:uint = 0;
         while(_loc10_ < listCnt)
         {
            if(partyTypeArr[_loc10_] == 0)
            {
               if(_loc10_ > _loc7_ && _loc10_ <= 31)
               {
                  freePartyArr[_loc5_] = partyTypeArr[_loc10_];
                  freeHostArr[_loc5_] = hostArr[_loc10_];
                  freeSloganArr[_loc5_] = sloganArr[_loc10_];
                  _loc5_++;
               }
            }
            _loc10_++;
         }
         _loc5_ = 0;
         var _loc11_:uint = 0;
         while(_loc11_ < listCnt)
         {
            if(partyTypeArr[_loc11_] != 0)
            {
               if(_loc11_ > _loc7_ && _loc11_ <= 15)
               {
                  readyTimeArr[_loc5_] = _loc6_.month + 1 + "月" + _loc6_.date + "日" + timeList[_loc11_];
                  _loc5_++;
               }
               else if(_loc11_ > 15 && _loc11_ <= 31)
               {
                  readyTimeArr[_loc5_] = _loc8_.month + 1 + "月" + _loc8_.date + "日" + timeList[_loc11_ - 16];
                  _loc5_++;
               }
            }
            _loc11_++;
         }
         _loc5_ = 0;
         var _loc12_:uint = 0;
         while(_loc12_ < listCnt)
         {
            if(partyTypeArr[_loc12_] != 0)
            {
               if(_loc12_ == _loc7_)
               {
                  curPartyTime = _loc6_.month + 1 + "月" + _loc6_.date + "日" + timeList[_loc12_];
                  curPartyType = partyTypeArr[_loc12_];
                  curPartyHost = hostArr[_loc12_];
                  curPartySlogan = sloganArr[_loc12_];
               }
               else if(_loc12_ > _loc7_ && _loc12_ <= 31)
               {
                  readyPartyArr[_loc5_] = partyTypeArr[_loc12_];
                  readyHostArr[_loc5_] = hostArr[_loc12_];
                  readySloganArr[_loc5_] = sloganArr[_loc12_];
                  _loc5_++;
               }
            }
            _loc12_++;
         }
      }
      
      public static function addInviteListner() : void
      {
         SocketConnection.addCmdListener(CommandID.USER_PARTY_INVITE_FRIEND_INFORM,onReceiveInvite);
         SocketConnection.addCmdListener(CommandID.USER_PARTY_RECEIVE_INFORM,onReceiveTicket);
         cls = getDefinitionByName("com.robot.app.control.BroadcastController");
         SocketConnection.addCmdListener(CommandID.USER_PARTY_RECEIVE_INVITE,onGetPartyInvite);
         SocketConnection.addCmdListener(CommandID.USER_PARTY_GET_PARTY_START,onGetPartyStart);
         SocketConnection.addCmdListener(CommandID.USER_PARTY_CHECK_CURRENT_PARTY,onGetPartyInfo);
         SocketConnection.send(CommandID.USER_PARTY_CHECK_CURRENT_PARTY);
      }
      
      private static function onReceiveInvite(param1:SocketEvent) : void
      {
         var _loc2_:InformInfo = new InformInfo();
         _loc2_.type = CommandID.USER_PARTY_INVITE_FRIEND_INFORM;
         var _loc3_:ByteArray = param1.data as ByteArray;
         var _loc4_:uint = _loc3_.readUnsignedInt();
         var _loc5_:uint = _loc3_.readUnsignedInt();
         var _loc6_:uint = _loc3_.readUnsignedInt();
         var _loc7_:String = _loc3_.readUTFBytes(16);
         var _loc8_:uint = _loc3_.readUnsignedInt();
         var _loc9_:String = _loc3_.readUTFBytes(16);
         DebugTrace.show("4366---邀请去参加自主派对的通知---服务器id：" + _loc4_ + "--派对类型--" + _loc5_ + "--派对主人米米号--" + _loc6_ + "--派对主人昵称--" + _loc7_ + "--邀请者米米号--" + _loc8_ + "--邀请者昵称--" + _loc9_);
         _loc2_.exInfo = {
            "serverID":_loc4_,
            "partyID":_loc5_,
            "hostID":_loc6_,
            "hostName":_loc7_,
            "inviterID":_loc8_,
            "inviterName":_loc9_
         };
         MessageManager.addInformInfo(_loc2_);
      }
      
      private static function onReceiveTicket(param1:SocketEvent) : void
      {
         var _loc2_:InformInfo = new InformInfo();
         _loc2_.type = CommandID.USER_PARTY_RECEIVE_INFORM;
         var _loc3_:ByteArray = param1.data as ByteArray;
         var _loc4_:uint = _loc3_.readUnsignedInt();
         _loc2_.exInfo = {"ticket":_loc4_};
         MessageManager.addInformInfo(_loc2_);
      }
      
      private static function onGetPartyInvite(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:String = _loc2_.readUTFBytes(16);
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:BroadcastInfo;
         (_loc5_ = new BroadcastInfo()).isLocal = true;
         _loc5_.type = 1;
         _loc5_.txt = "由<font color=\'#ff0000\'>" + _loc3_ + "</font>举办的<font color=\'#ff0000\'>" + partyList[_loc4_] + "</font>正在进行！赶快去参加吧！";
         cls.addBroadcast(_loc5_);
      }
      
      private static function onGetPartyStart(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:BroadcastInfo;
         (_loc5_ = new BroadcastInfo()).isLocal = true;
         _loc5_.type = 1;
         _loc5_.txt = "你预定的<font color=\'#ff0000\'>" + partyList[_loc4_] + "</font>已经开始啦！赶快去主持你的派对吧！";
         cls.addBroadcast(_loc5_);
      }
      
      private static function onGetPartyInfo(param1:SocketEvent) : void
      {
         var _loc3_:BroadcastInfo = null;
         SocketConnection.removeCmdListener(CommandID.USER_PARTY_CHECK_CURRENT_PARTY,onGetPartyInfo);
         var _loc2_:ByteArray = param1.data as ByteArray;
         partyType = _loc2_.readUnsignedInt();
         masterID = _loc2_.readUnsignedInt();
         serverID = _loc2_.readUnsignedInt();
         DebugTrace.show("4364---派对类型：" + partyType + ";主人ID：" + masterID + "；派对所在的服务器：" + serverID);
         if(partyType != 0 && masterID == MainManager.actorInfo.userID && serverID == MainManager.serverID)
         {
            _loc3_ = new BroadcastInfo();
            _loc3_.isLocal = true;
            _loc3_.type = 1;
            _loc3_.txt = "你预定的" + partyList[partyType] + "已经开始啦！赶快去主持你的派对吧！";
            cls.addBroadcast(_loc3_);
         }
      }
   }
}
