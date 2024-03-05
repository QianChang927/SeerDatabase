package com.robot.core.roomFight
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class SignUpManager
   {
      
      public static const SIGN_UP:String = "sign_up";
      
      public static const SIGN_NOTICE:String = "sign_notice";
      
      public static const MATCH_SUCCESSFULLY:String = "match_successfully";
      
      public static const ONLINE_TO_ROOM:String = "rFightOnlineToRoom";
      
      public static const ROOM_TO_ROOM:String = "rFightRoomToRoom";
      
      public static const ROOM_TO_ONLINE:String = "rFightRoomToOnline";
      
      public static var stutas:String;
      
      private static var _mapType:uint;
      
      private static var _styleID:uint;
      
      private static var _oldMapID:uint;
      
      private static var _signUpID:uint;
      
      private static var _noticeID:uint;
      
      private static var _readyID:uint;
      
      private static var _cancelID:uint;
      
      public static var willStopSwitchForEnter:Boolean;
      
      public static var willStopSwitchForLeave:Boolean;
      
      public static var struct:ByteArray;
      
      private static var _func:Function;
       
      
      public function SignUpManager()
      {
         super();
      }
      
      public static function setup(param1:uint, param2:uint, param3:uint, param4:uint, param5:uint, param6:uint, param7:uint, param8:uint) : void
      {
         _mapType = param1;
         _styleID = param3;
         _oldMapID = param4;
         _signUpID = param5;
         _noticeID = param6;
         _readyID = param7;
         _cancelID = param8;
      }
      
      public static function get oldMapID() : uint
      {
         return _oldMapID;
      }
      
      public static function register() : void
      {
         SocketConnection.addCmdListener(CommandID.LEAVE_MAP,function(param1:SocketEvent):void
         {
            var _loc5_:uint = 0;
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:uint;
            if((_loc4_ = _loc3_.readUnsignedInt()) == MainManager.actorID)
            {
               SocketConnection.removeCmdListener(CommandID.LEAVE_MAP,arguments.callee);
               willStopSwitchForEnter = true;
               SocketConnection.addCmdListener(CommandID.ENTER_MAP,onEnterMap);
               if(PetManager.showInfo)
               {
                  _loc5_ = PetManager.showInfo.catchTime;
               }
               SocketConnection.send(CommandID.ROOM_LOGIN,_loc5_,_mapType,MainManager.actorID,0,0);
            }
         });
         willStopSwitchForLeave = true;
         SocketConnection.send(CommandID.LEAVE_MAP);
      }
      
      private static function onEnterMap(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 4;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MainManager.actorID)
         {
            SocketConnection.removeCmdListener(CommandID.ENTER_MAP,onEnterMap);
            SocketConnection.addCmdListener(_noticeID,onNotice);
            SocketConnection.addCmdListener(_readyID,onReady);
            SocketConnection.addCmdListener(_signUpID,onSignUp);
            SocketConnection.send(_signUpID);
         }
      }
      
      private static function onNotice(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         EventManager.dispatchEvent(new DynamicEvent(SIGN_NOTICE,_loc2_));
         if(_loc3_ == _loc4_)
         {
            SocketConnection.removeCmdListener(_noticeID,onNotice);
         }
      }
      
      private static function onReady(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(_readyID,onReady);
         var _loc2_:ByteArray = param1.data as ByteArray;
         struct = new ByteArray();
         _loc2_.readBytes(struct,0,16);
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         EventManager.dispatchEvent(new DynamicEvent(MATCH_SUCCESSFULLY));
         if(_loc3_ == _mapType)
         {
            stutas = ROOM_TO_ROOM;
            MapManager.styleID = _styleID;
            MapManager.changeMap(_loc4_,0,_loc3_);
         }
      }
      
      private static function onSignUp(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(_signUpID,onSignUp);
         EventManager.dispatchEvent(new DynamicEvent(SIGN_UP));
      }
      
      public static function unRegister(param1:Function = null) : void
      {
         var func:Function = param1;
         SocketConnection.addCmdListener(_cancelID,function():void
         {
            SocketConnection.removeCmdListener(_cancelID,arguments.callee);
            willStopSwitchForLeave = true;
            _func = func;
            SocketConnection.addCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
            SocketConnection.send(CommandID.LEAVE_MAP);
         });
         SocketConnection.send(_cancelID);
      }
      
      private static function onLeaveMap(param1:SocketEvent) : void
      {
         var userID:uint;
         var catchTime:uint = 0;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         data.position = 0;
         userID = data.readUnsignedInt();
         if(userID == MainManager.actorID)
         {
            SocketConnection.removeCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
            SocketConnection.addCmdListener(CommandID.ENTER_MAP,function():void
            {
               SocketConnection.removeCmdListener(CommandID.ENTER_MAP,arguments.callee);
               stutas = "";
               if(_func != null)
               {
                  _func();
               }
            });
            willStopSwitchForEnter = true;
            if(PetManager.showInfo)
            {
               catchTime = PetManager.showInfo.catchTime;
            }
            SocketConnection.send(CommandID.LEAVE_ROOM,1,_oldMapID,catchTime,MainManager.actorInfo.changeShape,MainManager.actorInfo.actionType);
         }
      }
   }
}
