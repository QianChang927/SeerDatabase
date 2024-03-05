package com.robot.app.mapProcess.control.spcaeMaze
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.EventDispatcher;
   import flash.utils.ByteArray;
   import org.taomee.ds.HashMap;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   
   public class SpaceMazeController extends EventDispatcher
   {
      
      private static var _instance:com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController;
      
      public static var CHALLENGE:String = "challenge";
      
      public static var CHANGE_ROOM:String = "changeRoom";
      
      public static var START_EVENT:String = "startEvent";
      
      public static var LEAVE:String = "leave";
      
      public static var GET_SROCE:String = "getScore";
      
      public static var ROOM_COMPLETE:String = "roomComplete";
       
      
      private var _cls:Class;
      
      private var _xml:XML;
      
      private var _stage:XML;
      
      private var _stageMap:HashMap;
      
      private var _isFirst:Boolean;
      
      private var _currentRoom:uint;
      
      private var _currentType:uint;
      
      private var _currentItemId:Array;
      
      private var _roomCache:Array;
      
      public function SpaceMazeController()
      {
         this._cls = SpaceMazeController__cls;
         this._roomCache = [0];
         super();
      }
      
      public static function getInstance() : com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController();
            _instance.setup();
         }
         return _instance;
      }
      
      public static function showPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ChallengeSpaceMazePanel"),"正在打开面板....");
      }
      
      private static function destroy() : void
      {
         _instance.destroy();
         _instance = null;
      }
      
      public function get isFirst() : Boolean
      {
         var _loc1_:Boolean = this._isFirst;
         if(_loc1_)
         {
            this._isFirst = false;
         }
         return _loc1_;
      }
      
      public function get currentRoom() : uint
      {
         return this._currentRoom;
      }
      
      public function get currentType() : uint
      {
         return this._currentType;
      }
      
      public function get currentItemId() : Array
      {
         return this._currentItemId;
      }
      
      private function setup() : void
      {
         this._xml = XML(new this._cls());
         SocketConnection.addCmdListener(CommandID.SPACE_MAZE_CHALLENGE,this.onChallenge);
         SocketConnection.addCmdListener(CommandID.SPACE_MAZE_CHANGE_ROOM,this.onChangeRoom);
         SocketConnection.addCmdListener(CommandID.SPACE_MAZE_START_EVENT,this.onStartEvent);
         SocketConnection.addCmdListener(CommandID.SPACE_MAZE_LEAVE,this.onLeave);
         SocketConnection.addCmdListener(CommandID.SPACE_MAZE_GET_SROCE,this.onGetScore);
         SocketConnection.addCmdListener(CommandID.SPACE_MAZE_ROOM_COMPLETE,this.onRoomComplete);
      }
      
      private function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SPACE_MAZE_CHALLENGE,this.onChallenge);
         SocketConnection.removeCmdListener(CommandID.SPACE_MAZE_CHANGE_ROOM,this.onChangeRoom);
         SocketConnection.removeCmdListener(CommandID.SPACE_MAZE_START_EVENT,this.onStartEvent);
         SocketConnection.removeCmdListener(CommandID.SPACE_MAZE_LEAVE,this.onLeave);
         SocketConnection.removeCmdListener(CommandID.SPACE_MAZE_GET_SROCE,this.onGetScore);
         SocketConnection.removeCmdListener(CommandID.SPACE_MAZE_ROOM_COMPLETE,this.onRoomComplete);
      }
      
      public function setData(param1:uint) : void
      {
         var list:XMLList = null;
         var room:XML = null;
         var stage:uint = param1;
         this._stage = this._xml.children().(@id == stage)[0];
         this._stageMap = new HashMap();
         list = this._stage.descendants("room");
         for each(room in list)
         {
            this._roomCache.push(0);
            this._stageMap.add(uint(room.@id),room);
         }
      }
      
      private function onChallenge(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         dispatchEvent(new DynamicEvent(CHALLENGE,_loc3_));
      }
      
      private function onChangeRoom(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._currentType = _loc2_.readUnsignedInt();
         this._currentItemId = [];
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = 0;
         while(_loc4_ < _loc3_)
         {
            this._currentItemId.push(_loc2_.readUnsignedInt());
            _loc4_++;
         }
         dispatchEvent(new DynamicEvent(CHANGE_ROOM));
      }
      
      private function onStartEvent(param1:SocketEvent) : void
      {
         dispatchEvent(new DynamicEvent(START_EVENT));
      }
      
      private function onLeave(param1:SocketEvent) : void
      {
         MapManager.changeMap(14);
         SpaceMazeMiniMap.destroy(true);
         com.robot.app.mapProcess.control.spcaeMaze.SpaceMazeController.destroy();
      }
      
      private function onGetScore(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         dispatchEvent(new DynamicEvent(GET_SROCE,_loc3_));
      }
      
      private function onRoomComplete(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         this._roomCache[_loc2_.readUnsignedInt()] = 1;
         this._currentType = 0;
         this._currentItemId = [];
         dispatchEvent(new DynamicEvent(ROOM_COMPLETE));
      }
      
      public function challenge(param1:uint) : void
      {
         this._isFirst = true;
         this._currentRoom = this.getRoomId(param1);
         this._currentType = 0;
         this._currentItemId = [];
         SocketConnection.send(CommandID.SPACE_MAZE_CHALLENGE,param1);
      }
      
      public function changeRoom(param1:uint) : void
      {
         this._currentRoom = this.getDoorTarget(param1);
         SocketConnection.send(CommandID.SPACE_MAZE_CHANGE_ROOM,this._currentRoom);
      }
      
      public function startEvent(param1:uint) : void
      {
         this._currentItemId[param1] = 0;
         SocketConnection.send(CommandID.SPACE_MAZE_START_EVENT,param1 + 1);
      }
      
      public function leave() : void
      {
         SocketConnection.send(CommandID.SPACE_MAZE_LEAVE);
      }
      
      public function getSroce() : void
      {
         SocketConnection.send(CommandID.SPACE_MAZE_GET_SROCE);
      }
      
      public function getMapId(param1:uint) : uint
      {
         var id:uint = 0;
         var stage:uint = param1;
         id = uint(this._xml.children().(@id == stage)[0].@map);
         return id;
      }
      
      public function getRoomId(param1:uint) : uint
      {
         var id:uint = 0;
         var stage:uint = param1;
         id = uint(this._xml.children().(@id == stage)[0].@room);
         return id;
      }
      
      public function getRoomStatus() : Boolean
      {
         var _loc1_:Boolean = false;
         if(this._roomCache[this._currentRoom] == 0)
         {
            _loc1_ = false;
         }
         else
         {
            _loc1_ = true;
         }
         return _loc1_;
      }
      
      public function getDoorType(param1:uint) : uint
      {
         var door:XML = null;
         var doorId:uint = param1;
         var room:XML = this._stageMap.getValue(this._currentRoom);
         if(room != null)
         {
            door = room.children().(@id == doorId)[0];
            if(door.hasOwnProperty("@type"))
            {
               return uint(door.@type);
            }
            return 0;
         }
         return 0;
      }
      
      public function getDoorEnable(param1:uint) : Boolean
      {
         var door:XML = null;
         var doorId:uint = param1;
         var room:XML = this._stageMap.getValue(this._currentRoom);
         if(room != null)
         {
            door = room.children().(@id == doorId)[0];
            if(door.@enable == "0")
            {
               return false;
            }
            return true;
         }
         return false;
      }
      
      public function getDoorLimit(param1:uint) : Boolean
      {
         var door:XML = null;
         var doorId:uint = param1;
         var room:XML = this._stageMap.getValue(this._currentRoom);
         if(room != null)
         {
            door = room.children().(@id == doorId)[0];
            if(uint(door.@limit) == 0)
            {
               return true;
            }
            if(this._roomCache[uint(door.@limit)] == 0)
            {
               return false;
            }
            return true;
         }
         return true;
      }
      
      public function getDoorTarget(param1:uint) : uint
      {
         var door:XML = null;
         var doorId:uint = param1;
         var room:XML = this._stageMap.getValue(this._currentRoom);
         if(room != null)
         {
            door = room.children().(@id == doorId)[0];
            return uint(door.@target);
         }
         return 0;
      }
      
      public function getDoorTip(param1:uint) : String
      {
         var door:XML = null;
         var doorId:uint = param1;
         var room:XML = this._stageMap.getValue(this._currentRoom);
         if(room != null)
         {
            door = room.children().(@id == doorId)[0];
            return String(door.@tip);
         }
         return "";
      }
   }
}
