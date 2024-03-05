package com.robot.core.battleRoyale
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class BattleRoyaleManager
   {
      
      public static const ONLINE_TO_ROOM:String = "onlineToRoom";
      
      public static const ROOM_TO_ROOM:String = "roomToRoom";
      
      public static const ROOM_TO_ONLINE:String = "roomToOnline";
      
      public static var stutas:String;
      
      public static var oldMapID:uint = 101;
      
      public static var willStopSwitchForEnter:Boolean;
      
      public static var willStopSwitchForLeave:Boolean;
      
      public static var struct:ByteArray;
      
      private static var _func:Function;
       
      
      public function BattleRoyaleManager()
      {
         super();
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
               SocketConnection.send(CommandID.ROOM_LOGIN,_loc5_,MapType.BATTLEROYALE,MainManager.actorID,0,0);
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
            SocketConnection.addCmdListener(CommandID.BATTLEROYALE_BEGIN,onRoyaleBegin);
            SocketConnection.send(CommandID.BATTLEROYALE_ENTER);
         }
      }
      
      private static function onRoyaleBegin(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.BATTLEROYALE_BEGIN,onRoyaleBegin);
         var _loc2_:ByteArray = param1.data as ByteArray;
         struct = new ByteArray();
         _loc2_.readBytes(struct,0,16);
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == MapType.BATTLEROYALE)
         {
            stutas = ROOM_TO_ROOM;
            MapManager.styleID = 700003;
            MapManager.changeMap(_loc4_,0,_loc3_);
         }
      }
      
      public static function unRegister(param1:Function = null) : void
      {
         willStopSwitchForLeave = true;
         _func = param1;
         SocketConnection.addCmdListener(CommandID.LEAVE_MAP,onLeaveMap);
         SocketConnection.send(CommandID.LEAVE_MAP);
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
            SocketConnection.send(CommandID.LEAVE_ROOM,1,oldMapID,catchTime,MainManager.actorInfo.changeShape,MainManager.actorInfo.actionType);
         }
      }
   }
}
