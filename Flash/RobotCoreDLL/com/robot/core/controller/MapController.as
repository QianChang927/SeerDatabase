package com.robot.core.controller
{
   import com.robot.core.CommandID;
   import com.robot.core.aticon.FlyAction;
   import com.robot.core.aticon.WalkAction;
   import com.robot.core.battleRoyale.BattleRoyaleManager;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.event.ArmEvent;
   import com.robot.core.event.FitmentEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.group.point.MapSeatPointConfig;
   import com.robot.core.info.UserInfo;
   import com.robot.core.manager.ArmManager;
   import com.robot.core.manager.FitmentManager;
   import com.robot.core.manager.HeadquarterManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.MapTransEffect;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.manager.map.config.MapProcessConfig;
   import com.robot.core.mode.MapModel;
   import com.robot.core.mode.PeopleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcController;
   import com.robot.core.roomFight.SignUpManager;
   import com.robot.core.skeleton.FakeClothSkeleton;
   import com.robot.core.teamPK.TeamPKManager;
   import com.robot.core.teamPK.shotActive.PKInteractiveAction;
   import com.robot.core.utils.Direction;
   import com.robot.core.utils.UserState;
   import flash.events.ErrorEvent;
   import flash.events.Event;
   import flash.geom.Rectangle;
   import flash.system.System;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   import flash.utils.getDefinitionByName;
   import org.taomee.algo.AStar;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.DepthManager;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapController
   {
      
      public static var _isSwitching:Boolean = false;
      
      private static var _isLogin:Boolean = true;
      
      private static var _isReMap:Boolean = false;
      
      private static var _isChange:Boolean = false;
      
      public static var forceChange:Boolean = false;
       
      
      public var isChangeLocal:Boolean = false;
      
      private var _newMapID:uint;
      
      private var _mapModel:MapModel;
      
      private var _dir:int = 0;
      
      private var _isShowLoading:Boolean = true;
      
      private var _mapType:uint;
      
      private var _tempStyleID:uint;
      
      private var _curServerMapId:int;
      
      private var _isInit:Boolean = true;
      
      public function MapController()
      {
         super();
      }
      
      public static function get isReMap() : Boolean
      {
         return _isReMap;
      }
      
      public function get newMapID() : uint
      {
         return this._newMapID;
      }
      
      public function set newMapID(param1:uint) : void
      {
         this._newMapID = param1;
      }
      
      public function changeLocalMap(param1:uint, param2:uint = 0) : void
      {
         this._isInit = true;
         this.isChangeLocal = true;
         this._dir = param2;
         this._newMapID = param1;
         this._mapType = 0;
         this._tempStyleID = 0;
         _isChange = true;
         _isReMap = false;
         this.startSwitch();
      }
      
      public function closeChange() : void
      {
         this._mapModel.closeChange();
      }
      
      public function changeMap(param1:uint, param2:int = 0, param3:uint = 0) : void
      {
         this._isInit = true;
         this.isChangeLocal = false;
         if(_isSwitching)
         {
            return;
         }
         if(!_isLogin)
         {
            if(param1 == MainManager.actorInfo.mapID && !forceChange || param1 == this._newMapID)
            {
               if(param3 == this._mapType)
               {
                  if(param3 <= MapManager.TYPE_MAX && param1 != MapManager.TOWER_MAP && param1 != MapManager.FRESH_TRIALS && (param1 != this._newMapID || this._newMapID < 11664))
                  {
                     return;
                  }
               }
            }
            MouseController.removeMouseEvent();
         }
         this._dir = param2;
         this._newMapID = param1;
         this._mapType = param3;
         this._tempStyleID = MapManager.styleID;
         _isChange = true;
         _isReMap = false;
         this.startSwitch();
      }
      
      public function refMap(param1:Boolean = true, param2:Boolean = true) : void
      {
         this._isInit = param2;
         if(_isSwitching)
         {
            return;
         }
         this._isShowLoading = param1;
         _isChange = true;
         _isReMap = true;
         this.startSwitch();
      }
      
      public function destroy() : void
      {
         MapManager.isInMap = false;
         MainManager.actorModel.stop();
         MainManager.actorModel.aimatStateManager.clear();
         MapConfig.clear();
         MapProcessConfig.destroy();
         NpcController.destory();
         SceneActivityNpcController.destroy();
         if(MapManager.currentMap)
         {
            MapManager.dispatchEvent(new MapEvent(MapEvent.MAP_DESTROY,MapManager.currentMap));
            MapManager.currentMap.destroy();
            MapManager.currentMap = null;
         }
         if(ModuleManager.moduleNum > 0)
         {
            ModuleManager.destroyAll();
         }
         System.gc();
      }
      
      private function startSwitch() : void
      {
         CameraController.clear();
         _isSwitching = true;
         LevelManager.closeMouseEvent();
         if(this._newMapID > MapManager.ID_MAX)
         {
            switch(this._mapType)
            {
               case MapType.HOOM:
                  FitmentManager.addEventListener(FitmentEvent.USED_LIST,function(param1:FitmentEvent):void
                  {
                     FitmentManager.removeEventListener(FitmentEvent.USED_LIST,arguments.callee);
                     startLoadSwitch();
                  });
                  FitmentManager.getUsedInfo(this._newMapID);
                  break;
               case MapType.CAMP:
                  ArmManager.addEventListener(ArmEvent.USED_LIST,function(param1:ArmEvent):void
                  {
                     ArmManager.removeEventListener(ArmEvent.USED_LIST,arguments.callee);
                     startLoadSwitch();
                  });
                  ArmManager.getUsedInfoForServer(this._newMapID);
                  break;
               case MapType.HEAD:
                  HeadquarterManager.addEventListener(FitmentEvent.USED_LIST,function(param1:FitmentEvent):void
                  {
                     HeadquarterManager.removeEventListener(FitmentEvent.USED_LIST,arguments.callee);
                     startLoadSwitch();
                  });
                  HeadquarterManager.getUsedInfo(this._newMapID);
                  break;
               default:
                  this.startLoadSwitch();
            }
         }
         else
         {
            this.startLoadSwitch();
         }
      }
      
      private function startLoadSwitch() : void
      {
         MapManager.addEventListener(MapEvent.MAP_INIT,this.onMapInit);
         MapManager.addEventListener(ErrorEvent.ERROR,this.onMapFail);
         MapManager.addEventListener(MapEvent.MAP_LOADER_CLOSE,this.onMapFail);
         DisplayUtil.removeAllChild(LevelManager.appLevel);
         this._mapModel = new MapModel(this._newMapID,!_isLogin,this._isShowLoading);
         MapManager.initPos = MapConfig.getMapPeopleXY(MainManager.actorInfo.mapID,this._newMapID);
         ResourceManager.stop();
      }
      
      private function comeInMap() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:* = undefined;
         if(this.isChangeLocal || this._newMapID == MapManager.FRESH_TRIALS || this._newMapID == MapManager.TOWER_MAP)
         {
            this.initMapFunction(false);
            return;
         }
         if(PetManager.showInfo)
         {
            _loc1_ = PetManager.showInfo.catchTime;
         }
         if(this._newMapID < MapManager.ID_MAX)
         {
            if(MainManager.actorInfo.mapID > MapManager.ID_MAX || this._curServerMapId > MapManager.ID_MAX)
            {
               SocketConnection.send(CommandID.LEAVE_ROOM,1,this._newMapID,_loc1_,MainManager.actorInfo.changeShape,MainManager.actorInfo.actionType);
            }
            else
            {
               SocketConnection.send(CommandID.ENTER_MAP,this._mapType,this._newMapID,MapManager.initPos.x,MapManager.initPos.y);
            }
         }
         else
         {
            if(BattleRoyaleManager.stutas == BattleRoyaleManager.ROOM_TO_ROOM)
            {
               SocketConnection.send(CommandID.ENTER_MAP,this._mapType,this._newMapID,MapManager.initPos.x,MapManager.initPos.y);
               return;
            }
            if(SignUpManager.stutas == SignUpManager.ROOM_TO_ROOM)
            {
               SocketConnection.send(CommandID.ENTER_MAP,this._mapType,this._newMapID,MapManager.initPos.x,MapManager.initPos.y);
               return;
            }
            _loc2_ = getDefinitionByName("com.robot.app.control.SpaceArenaController");
            if(_loc2_.stutas == _loc2_.ROOM_TO_ROOM)
            {
               SocketConnection.send(CommandID.ENTER_MAP,this._mapType,this._newMapID,MapManager.initPos.x,MapManager.initPos.y);
               return;
            }
            if(MainManager.actorInfo.mapID > MapManager.ID_MAX)
            {
               SocketConnection.send(CommandID.ENTER_MAP,this._mapType,this._newMapID,MapManager.initPos.x,MapManager.initPos.y);
            }
            else
            {
               SocketConnection.send(CommandID.ROOM_LOGIN,_loc1_,this._mapType,this._newMapID,MapManager.initPos.x,MapManager.initPos.y);
            }
         }
      }
      
      private function initMapFunction(param1:Boolean = true) : void
      {
         var mapIDs:Array;
         var mte:MapTransEffect = null;
         var title1:String = null;
         var title2:String = null;
         var isGetUser:Boolean = param1;
         MapManager.removeEventListener(MapEvent.MAP_LOADER_CLOSE,this.onMapFail);
         LevelManager.openMouseEvent();
         ResourceManager.play();
         mte = new MapTransEffect(this._mapModel,this._dir);
         mte.addEventListener(MapEvent.MAP_EFFECT_COMPLETE,function(param1:MapEvent):void
         {
            mte.removeEventListener(MapEvent.MAP_EFFECT_COMPLETE,arguments.callee);
            DisplayUtil.removeAllChild(LevelManager.mapLevel);
            LevelManager.mapLevel.addChild(_mapModel.root);
         });
         mte.star();
         this.destroy();
         MapManager.isInMap = true;
         MainManager.actorState = UserState.MAP;
         LevelManager.mapScroll = false;
         MapManager.prevMapID = MainManager.actorInfo.mapID;
         MainManager.actorInfo.mapType = this._mapType;
         MainManager.actorInfo.mapID = this._newMapID;
         if(this._newMapID <= 10000 || this._newMapID >= 50000)
         {
            this._curServerMapId = this._newMapID;
         }
         MapManager.currentMap = this._mapModel;
         AStar.init(MapManager.currentMap,1500);
         MapConfig.configMap(MapManager.getResMapID(this._newMapID));
         MapSeatPointConfig.configMap(MapManager.getResMapID(this._newMapID));
         if(!_isReMap)
         {
            MainManager.actorModel.pos = MapManager.initPos;
         }
         MapProcessConfig.configMap(MapManager.getResMapID(this._newMapID),this._mapType,this._isInit);
         if(MapManager.currentMap.id == 460)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1920,560));
         }
         else if(MapManager.currentMap.id == 461)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1450,1200));
         }
         else if(MapManager.currentMap.id == 792)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,2300,560));
         }
         else if(MapManager.currentMap.id >= 550 && MapManager.currentMap.id <= 560)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1920,1120));
         }
         else if(MapManager.currentMap.id >= 10829 && MapManager.currentMap.id <= 10832)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1920,1120));
         }
         else if(MapManager.currentMap.id >= 11292 && MapManager.currentMap.id <= 11294)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1920,1120));
         }
         else if(MapManager.currentMap.id == 11303)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1920,1120));
         }
         else if(MapManager.currentMap.id == 11310)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,3440,560));
         }
         else if(MapManager.currentMap.id >= 11471 && MapManager.currentMap.id <= 11473)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1920,1120));
         }
         else if(MapManager.currentMap.id == 1301)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1920,1120));
         }
         else if(MapManager.currentMap.id == 1456)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1930,560));
         }
         else if(MapManager.currentMap.id == 1572)
         {
            CameraController.setup(MapManager.currentMap,MainManager.actorModel,new Rectangle(0,0,1528,560));
         }
         else if(MapManager.currentMap.id == 335)
         {
            if(!MainManager.actorInfo.superNono)
            {
               MainManager.actorModel.x = 840;
               MainManager.actorModel.y = 220;
            }
         }
         MapManager.currentMap.depthLevel.addChild(MainManager.actorModel);
         MainManager.actorModel.direction = Direction.DOWN;
         if(PetManager.showingInfo)
         {
            MainManager.actorModel.showPet(PetManager.showingInfo);
         }
         MainManager.actorModel.showClothLight();
         MainManager.actorModel.showDarkLight();
         MainManager.actorModel.showTopFightEffect();
         MainManager.actorModel.updateFireBuff();
         DepthManager.swapDepthAll(MapManager.currentMap.depthLevel);
         MouseController.addMouseEvent();
         this._mapModel.closeLoading();
         if(MapManager.currentMap.width > MainManager.getStageWidth())
         {
            LevelManager.mapScroll = true;
         }
         if(isGetUser)
         {
            SocketConnection.send(CommandID.LIST_MAP_PLAYER);
         }
         NpcController.init();
         SceneActivityNpcController.init();
         _isSwitching = false;
         MapManager.dispatchEvent(new MapEvent(MapEvent.MAP_SWITCH_COMPLETE,MapManager.currentMap));
         MapManager.SpecialState = 0;
         mapIDs = [4,1,5,7,103,332,107,9,698,8,6,101];
         if(mapIDs.indexOf(this._newMapID) != -1)
         {
            SocketConnection.send(1022,86051040 + mapIDs.indexOf(this._newMapID));
         }
         if(this._newMapID <= 10000)
         {
            title1 = "普通地图";
            title2 = "进入" + this._newMapID + MapXMLInfo.getName(this._newMapID);
         }
         else if(this._newMapID > 10000 && this._newMapID < 50000)
         {
            title1 = "副本地图";
            title2 = "进入" + this._newMapID + MapXMLInfo.getName(this._newMapID);
         }
         else
         {
            title1 = "小屋";
            title2 = "进入小屋";
         }
         StatManager.sendStat2014(title1,title2,"进入地图");
      }
      
      private function onLeaveMap(param1:SocketEvent) : void
      {
         var _loc4_:* = undefined;
         var _loc5_:* = undefined;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(this.isChangeLocal)
         {
            return;
         }
         if(_loc3_ == MainManager.actorID)
         {
            if(BattleRoyaleManager.willStopSwitchForLeave)
            {
               BattleRoyaleManager.willStopSwitchForLeave = false;
               return;
            }
            if(SignUpManager.willStopSwitchForLeave)
            {
               SignUpManager.willStopSwitchForLeave = false;
               return;
            }
            if((_loc4_ = getDefinitionByName("com.robot.app.control.SpaceArenaController")).stopSwitch_leave)
            {
               _loc4_.stopSwitch_leave = false;
               return;
            }
            if((_loc5_ = getDefinitionByName("com.robot.app.control.FightArenaController")).stopSwitch_leave)
            {
               _loc5_.stopSwitch_leave = false;
               return;
            }
            if(_isChange)
            {
               _isChange = false;
               this.comeInMap();
            }
         }
         else
         {
            if(MapManager.currentMap == null)
            {
               return;
            }
            MapManager.currentMap.removeUser(_loc3_);
         }
         MainManager.actorModel.delProtectMC();
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.CREATED_MAP_USER));
      }
      
      public function setIsChange(param1:Boolean) : void
      {
         _isChange = param1;
      }
      
      private function onEnterMap(param1:SocketEvent) : void
      {
         var _loc3_:* = undefined;
         var _loc4_:* = undefined;
         var _loc5_:PeopleModel = null;
         var _loc6_:FakeClothSkeleton = null;
         if(this._newMapID == MapManager.TOWER_MAP)
         {
            MapManager.changeMap(1153);
            return;
         }
         if(this.isChangeLocal)
         {
            return;
         }
         var _loc2_:UserInfo = new UserInfo();
         UserInfo.setForPeoleInfo(_loc2_,param1.data as IDataInput);
         _loc2_.serverID = MainManager.serverID;
         if(_loc2_.userID == MainManager.actorID)
         {
            if(BattleRoyaleManager.willStopSwitchForEnter)
            {
               BattleRoyaleManager.willStopSwitchForEnter = false;
               return;
            }
            if(SignUpManager.willStopSwitchForEnter)
            {
               SignUpManager.willStopSwitchForEnter = false;
               return;
            }
            _loc3_ = getDefinitionByName("com.robot.app.control.SpaceArenaController");
            if(_loc3_.stopSwitch_enter)
            {
               _loc3_.stopSwitch_enter = false;
               return;
            }
            if((_loc4_ = getDefinitionByName("com.robot.app.control.FightArenaController")).stopSwitch_enter)
            {
               _loc4_.stopSwitch_enter = false;
               return;
            }
            if(_isReMap)
            {
               MainManager.actorModel.pos = _loc2_.pos;
            }
            MainManager.upDateForPeoleInfo(_loc2_);
            this.initMapFunction();
         }
         else
         {
            if(MapManager.currentMap == null)
            {
               return;
            }
            if(UserManager.contains(_loc2_.userID))
            {
               return;
            }
            _loc5_ = new PeopleModel(_loc2_);
            if(_loc2_.actionType == 0)
            {
               _loc5_.walk = new WalkAction();
            }
            else
            {
               _loc5_.walk = new FlyAction(_loc5_);
            }
            if(MainManager.actorInfo.mapType == MapType.PK_TYPE)
            {
               if(_loc2_.teamInfo.id != MainManager.actorInfo.mapID)
               {
                  if(!_isSwitching)
                  {
                     _loc5_.x = _loc2_.pos.x + TeamPKManager.REDX;
                     _loc5_.y = _loc2_.pos.y + TeamPKManager.REDY;
                  }
                  _loc5_.additiveInfo.info = TeamPKManager.AWAY;
               }
               else
               {
                  _loc5_.additiveInfo.info = TeamPKManager.HOME;
               }
               _loc5_.interactiveAction = new PKInteractiveAction(_loc5_);
               if(_loc2_.teamInfo.id != MainManager.actorInfo.teamInfo.id)
               {
                  _loc6_ = new FakeClothSkeleton();
                  _loc5_.skeleton = _loc6_;
                  _loc6_.fakeID = 1;
               }
            }
            MapManager.currentMap.addUser(_loc5_);
         }
         MainManager.actorModel.delProtectMC();
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.CREATED_MAP_USER));
      }
      
      private function onMapInit(param1:Event) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_INIT,this.onMapInit);
         MapManager.removeEventListener(ErrorEvent.ERROR,this.onMapFail);
         MapManager.dispatchEvent(new MapEvent(MapEvent.MAP_SWITCH_OPEN,MapManager.currentMap));
         if(_isLogin)
         {
            SocketConnection.addCmdListener(CommandID.LEAVE_ROOM,this.onLeaveRoom);
            SocketConnection.addCmdListener(CommandID.ENTER_MAP,this.onEnterMap);
            SocketConnection.addCmdListener(CommandID.LEAVE_MAP,this.onLeaveMap);
            SocketConnection.addCmdListener(CommandID.ON_MAP_SWITCH,this.onMapOnSwitch);
            _isLogin = false;
            if(this.isChangeLocal || this._newMapID == MapManager.FRESH_TRIALS || this._newMapID == MapManager.TOWER_MAP)
            {
               this.initMapFunction(false);
            }
            else
            {
               this.initMapFunction();
            }
         }
         else if(MapManager.isInMap)
         {
            if(this._newMapID > MapManager.ID_MAX)
            {
               SocketConnection.send(CommandID.LEAVE_MAP);
               return;
            }
            if(this.isChangeLocal || this._newMapID == MapManager.FRESH_TRIALS || this._newMapID == MapManager.TOWER_MAP)
            {
               this.comeInMap();
               return;
            }
            SocketConnection.send(CommandID.LEAVE_MAP);
         }
         else if(this.isChangeLocal || this._newMapID == MapManager.FRESH_TRIALS || this._newMapID == MapManager.TOWER_MAP)
         {
            this.initMapFunction(false);
         }
         else
         {
            this.initMapFunction();
         }
      }
      
      private function onLeaveRoom(param1:SocketEvent) : void
      {
         SocketConnection.send(CommandID.ENTER_MAP,this._mapType,this._newMapID,MapManager.initPos.x,MapManager.initPos.y);
      }
      
      private function onMapOnSwitch(param1:SocketEvent) : void
      {
         if(this._mapModel)
         {
            this.onMapFail(null);
         }
      }
      
      private function onMapFail(param1:Event) : void
      {
         this._mapModel.closeLoading();
         this._mapType = MainManager.actorInfo.mapType;
         this._newMapID = MainManager.actorInfo.mapID;
         MapManager.styleID = this._tempStyleID;
         LevelManager.openMouseEvent();
         MapManager.removeEventListener(MapEvent.MAP_INIT,this.onMapInit);
         MapManager.removeEventListener(ErrorEvent.ERROR,this.onMapFail);
         MapManager.removeEventListener(MapEvent.MAP_LOADER_CLOSE,this.onMapFail);
         MouseController.addMouseEvent();
         _isSwitching = false;
         MapManager.dispatchEvent(new MapEvent(MapEvent.MAP_ERROR));
      }
      
      public function get isSwitching() : Boolean
      {
         return _isSwitching;
      }
   }
}
