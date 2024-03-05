package com.robot.app2.control
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.core.info.pvpMatchSysInfo.PvpMatchSysPlayerInfo;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class PvPMatchSystemController
   {
      
      public static var QUIT_MATCH:String = "quit_match";
      
      public static var GAME_READY:String = "game_ready";
      
      public static var GAME_START:String = "game_start";
       
      
      public function PvPMatchSystemController()
      {
         super();
      }
      
      public static function initCmdListener() : void
      {
         SocketConnection.addCmdListener(41440,onQuitMatch);
         SocketConnection.addCmdListener(41437,onReadyNotice);
         SocketConnection.addCmdListener(41438,onStartNotice);
      }
      
      public static function removeCmdListener() : void
      {
         SocketConnection.removeCmdListener(41440,onQuitMatch);
         SocketConnection.removeCmdListener(41437,onReadyNotice);
         SocketConnection.removeCmdListener(41438,onStartNotice);
      }
      
      public static function onQuitMatch(param1:SocketEvent) : void
      {
         EventManager.dispatchEvent(new DynamicEvent("quit_match"));
      }
      
      public static function onReadyNotice(param1:SocketEvent) : void
      {
         var _loc8_:PvpMatchSysPlayerInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:Array = [];
         var _loc7_:int = 0;
         while(_loc7_ < _loc5_)
         {
            (_loc8_ = new PvpMatchSysPlayerInfo()).userId = _loc2_.readUnsignedInt();
            _loc8_.nick = _loc2_.readUTFBytes(16);
            _loc6_.push(_loc8_);
            _loc7_++;
         }
         EventManager.dispatchEvent(new DynamicEvent("game_ready",_loc6_));
      }
      
      public static function onStartNotice(param1:SocketEvent) : void
      {
         EventManager.dispatchEvent(new DynamicEvent("game_start"));
      }
      
      public static function joinMatch(param1:int, param2:int = 1) : Promise
      {
         var deferred:Deferred = null;
         var gameId:int = param1;
         var gameType:int = param2;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41436,[gameType,gameId]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            if(_loc3_ == 1)
            {
            }
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function exitMatch(param1:int, param2:int = 1) : Promise
      {
         var deferred:Deferred = null;
         var gameId:int = param1;
         var gameType:int = param2;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41439,[gameType]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            if(_loc3_ == 1)
            {
            }
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function operation(param1:int, param2:int = 0, param3:int = 0, param4:int = 0) : Promise
      {
         var deferred:Deferred = null;
         var op_type:int = param1;
         var chess_pos:int = param2;
         var from_board_pos:int = param3;
         var to_board_pos:int = param4;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41442,[op_type,chess_pos,from_board_pos,to_board_pos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            if(_loc3_ == 1)
            {
            }
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function legionStruggleOperation(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var troop_num:int = param1;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41841,[troop_num]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            if(_loc3_ == 1)
            {
            }
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function arenaContendOperation(param1:int) : Promise
      {
         var deferred:Deferred = null;
         var troop_num:int = param1;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41844,[troop_num]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            if(_loc3_ == 1)
            {
            }
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function flashSpiritPvPCopyNewOperation(param1:int, param2:int = 0, param3:int = 0, param4:int = 0) : Promise
      {
         var deferred:Deferred = null;
         var op_type:int = param1;
         var chess_pos:int = param2;
         var from_board_pos:int = param3;
         var to_board_pos:int = param4;
         deferred = new Deferred();
         SocketConnection.sendWithPromise(41469,[op_type,chess_pos,from_board_pos,to_board_pos]).then(function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:uint = _loc2_.readUnsignedInt();
            if(_loc3_ == 1)
            {
            }
            deferred.resolve(_loc3_);
         },function():void
         {
            deferred.reject(0);
         });
         return deferred.promise;
      }
      
      public static function destroy() : void
      {
         removeCmdListener();
      }
   }
}
