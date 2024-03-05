package com.robot.core.teamPK
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.MouseController;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PeopleActionEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.event.TeamPKEvent;
   import com.robot.core.info.UserInfo;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.team.SimpleTeamInfo;
   import com.robot.core.info.teamPK.ShooterInfo;
   import com.robot.core.info.teamPK.SomeoneJoinInfo;
   import com.robot.core.info.teamPK.SuperNonoShieldInfo;
   import com.robot.core.info.teamPK.TeamPKBeShotInfo;
   import com.robot.core.info.teamPK.TeamPKBuildingListInfo;
   import com.robot.core.info.teamPK.TeamPKFreezeInfo;
   import com.robot.core.info.teamPK.TeamPKJoinInfo;
   import com.robot.core.info.teamPK.TeamPKNoteInfo;
   import com.robot.core.info.teamPK.TeamPKResultInfo;
   import com.robot.core.info.teamPK.TeamPKSignInfo;
   import com.robot.core.info.teamPK.TeamPKTeamInfo;
   import com.robot.core.info.teamPK.TeamPkStInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ShotBehaviorManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.MapType;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.mode.AppModel;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.PKArmModel;
   import com.robot.core.mode.spriteModelAdditive.PeopleBloodBar;
   import com.robot.core.mode.spriteModelAdditive.SpriteBloodBar;
   import com.robot.core.mode.spriteModelAdditive.SpriteFreeze;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.teamInstallation.TeamInfoManager;
   import com.robot.core.teamPK.shotActive.AutoShotManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.InteractiveObject;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class TeamPKManager
   {
      
      private static var URL:String = ClientConfig.getResPath("eff/shotEffect.swf");
      
      private static const MAP_ID:uint = 700001;
      
      public static var type:uint;
      
      private static var homeTeamID:uint;
      
      private static var awayTeamID:uint;
      
      public static var sign:ByteArray;
      
      public static var PK_STATUS:uint = 0;
      
      public static const START:uint = 1;
      
      public static const OPEN_DOOR:uint = 2;
      
      public static const OVER:uint = 3;
      
      private static var homeList:Array;
      
      private static var awayList:Array;
      
      public static var inMap:Boolean = false;
      
      public static var isGetBuilding:Boolean = false;
      
      public static var buildingMap:HashMap = new HashMap();
      
      public static var homeBuildingMap:HashMap = new HashMap();
      
      public static var awayBuildingMap:HashMap = new HashMap();
      
      public static var TEAM:uint;
      
      public static const HOME:uint = 1;
      
      public static const AWAY:uint = 2;
      
      private static var freezeIDs:Array = [];
      
      private static var noModelMaps:HashMap = new HashMap();
      
      private static var loader:Loader;
      
      public static var REDX:uint = 1880;
      
      public static var REDY:uint = 0;
      
      private static var waitPanel:MovieClip;
      
      public static var enemyInfo:TeamPKTeamInfo;
      
      public static var enemyBuildingList:Array;
      
      public static var homeHeaderHp:uint;
      
      public static var awayHeaderHp:uint;
      
      public static var isShowPanel:Boolean;
      
      public static const INIT_INFO:String = "initinfo";
      
      public static const INIT_HP:String = "inithp";
      
      public static var myMaxHp:uint;
      
      public static var myHp:uint;
      
      private static var oldMap:uint;
      
      private static var infoIcon:InteractiveObject;
      
      private static var fun:Function;
      
      public static var teamPanel:com.robot.core.teamPK.TeamInfoPanel;
      
      private static var infoPanel:MovieClip;
      
      private static var teamPKMessPanel:com.robot.core.teamPK.TeamPKMessPanel;
      
      private static var win_mc:MovieClip;
      
      private static var _data:TeamPKResultInfo;
      
      private static var _app:AppModel;
      
      public static var teamPkSituationInfo:TeamPkStInfo;
      
      private static var isSendB:Boolean = false;
      
      private static var instance:EventDispatcher;
       
      
      public function TeamPKManager()
      {
         super();
      }
      
      public static function closeWait() : void
      {
         var t:uint = 0;
         t = setTimeout(function():void
         {
            if(oldMap != 0)
            {
               MapManager.changeMap(oldMap);
            }
            DisplayUtil.removeForParent(waitPanel,false);
            clearTimeout(t);
         },200);
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.TEAM_PK_SIGN,onGetTeamSign);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_NOTE,onTeamPKNote);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_JOIN,onPKJoin);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_SOMEONE_JOIN_INFO,onSomeoneJoin);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_GET_BUILDING_INFO,onGetBuildingInfo);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_BE_SHOT,beShotHandler);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_FREEZE,onFreeze);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_USE_SHIELD,onUseShield);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_RESULT,resultHandler);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_NO_PET,noPetHandler);
         EventManager.addEventListener(RobotEvent.CREATED_MAP_USER,onCreateMapUser);
         if(!enemyInfo)
         {
            enemyInfo = new TeamPKTeamInfo();
         }
         if(!infoIcon)
         {
            infoIcon = UIManager.getMovieClip("TeamPK_icon");
            infoIcon.addEventListener(MouseEvent.CLICK,showTaskPanel);
            ToolTipManager.add(infoIcon,"对抗赛消息");
         }
      }
      
      private static function noPetHandler(param1:SocketEvent) : void
      {
         Alarm.show("精灵对战失败！你没有可出战的精灵应对敌方的挑战。");
      }
      
      public static function showIcon() : void
      {
         TaskIconManager.addIcon(infoIcon,TaskIconManager.RIGHT,6);
      }
      
      public static function removeIcon() : void
      {
         TaskIconManager.delIcon(infoIcon);
         if(teamPKMessPanel)
         {
            teamPKMessPanel.destroy();
         }
      }
      
      private static function showTaskPanel(param1:MouseEvent) : void
      {
         if(!teamPKMessPanel)
         {
            teamPKMessPanel = new com.robot.core.teamPK.TeamPKMessPanel();
            teamPKMessPanel.setup();
         }
         else
         {
            teamPKMessPanel.setup();
         }
      }
      
      public static function register(param1:uint) : void
      {
         type = param1;
         SocketConnection.send(CommandID.TEAM_PK_SIGN,type);
      }
      
      public static function joinPK() : void
      {
         oldMap = MainManager.actorInfo.mapID;
         if(MainManager.actorInfo.teamPKInfo.homeTeamID == 0)
         {
            Alarm.show("你现在不能进入对抗赛");
         }
         fun = join;
         var _loc1_:MCLoader = new MCLoader(URL,LevelManager.appLevel,1,"正在进入对战系统");
         _loc1_.addEventListener(MCLoadEvent.SUCCESS,onLoadByJoin);
         _loc1_.doLoad();
      }
      
      private static function onLoadByRegister(param1:MCLoadEvent) : void
      {
         var closeBtn:SimpleButton;
         var num:uint;
         var event:MCLoadEvent = param1;
         ShotBehaviorManager.setup(event.getLoader());
         waitPanel = ShotBehaviorManager.getMovieClip("pk_wait_panel");
         closeBtn = waitPanel["closeBtn"];
         closeBtn.addEventListener(MouseEvent.CLICK,function(param1:MouseEvent):void
         {
            closeWait();
         });
         num = Math.ceil(Math.random() * 3);
         waitPanel["mc"].gotoAndStop(num);
         MainManager.getStage().addChild(waitPanel);
         fun();
      }
      
      private static function onLoadByJoin(param1:MCLoadEvent) : void
      {
         ShotBehaviorManager.setup(param1.getLoader());
         fun();
      }
      
      public static function initBuildList() : void
      {
         if(TEAM == HOME)
         {
            enemyBuildingList = awayBuildinList;
         }
         else
         {
            enemyBuildingList = homeBuildinList;
         }
      }
      
      private static function onCreateMapUser(param1:RobotEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:TeamPKFreezeInfo = null;
         var _loc5_:BasePeoleModel = null;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc8_:BasePeoleModel = null;
         var _loc9_:Point = null;
         var _loc2_:Array = noModelMaps.getKeys();
         for each(_loc3_ in _loc2_)
         {
            if(_loc5_ = UserManager.getUserModel(_loc3_))
            {
               if(_loc5_.info.teamInfo.id == homeTeamID)
               {
                  _loc5_.bloodBar.colorType = PeopleBloodBar.RED;
               }
               else
               {
                  _loc5_.bloodBar.colorType = PeopleBloodBar.BLUE;
               }
               noModelMaps.remove(_loc3_);
            }
         }
         for each(_loc4_ in freezeIDs)
         {
            _loc6_ = uint(_loc4_.flag);
            DebugTrace.show("freeze flag ---------->",_loc6_);
            _loc7_ = _loc4_.uid;
            if(_loc8_ = UserManager.getUserModel(_loc7_))
            {
               if(_loc6_ == 1)
               {
                  _loc9_ = MapConfig.getMapPeopleXY(0,homeTeamID);
                  if(_loc8_.info.teamInfo.id == homeTeamID)
                  {
                     _loc8_.x = _loc9_.x;
                     _loc8_.y = _loc9_.y;
                  }
                  else
                  {
                     _loc8_.x = _loc9_.x + REDX;
                     _loc9_.x += REDX;
                     _loc8_.y = _loc9_.y;
                  }
                  _loc8_.additive = [new SpriteFreeze(type)];
                  if(_loc7_ == MainManager.actorID)
                  {
                     if(TEAM == HOME)
                     {
                        LevelManager.moveToLeft();
                     }
                     else
                     {
                        LevelManager.moveToRight();
                     }
                     _loc8_.walkAction(_loc9_);
                     dispatchEvent(new Event(INIT_INFO));
                     LevelManager.closeMouseEvent();
                  }
               }
               else
               {
                  _loc8_.filters = [];
                  if(_loc7_ == MainManager.actorID)
                  {
                     LevelManager.openMouseEvent();
                  }
               }
            }
         }
         freezeIDs = [];
      }
      
      private static function showWin(param1:uint) : void
      {
         if(param1 != 2)
         {
            if(TEAM == HOME)
            {
               if(param1 == 0)
               {
                  win_mc = ShotBehaviorManager.getMovieClip("AwayWin");
               }
               else
               {
                  win_mc = ShotBehaviorManager.getMovieClip("HomeWin");
               }
            }
            else if(param1 == 0)
            {
               win_mc = ShotBehaviorManager.getMovieClip("HomeWin");
            }
            else
            {
               win_mc = ShotBehaviorManager.getMovieClip("AwayWin");
            }
            if(win_mc)
            {
               win_mc.x = MainManager.getStageWidth() / 2 - 100;
               win_mc.y = MainManager.getStageHeight() / 2;
               win_mc.addFrameScript(win_mc.totalFrames - 1,onEnd);
               LevelManager.topLevel.addChild(win_mc);
            }
         }
      }
      
      private static function onEnd() : void
      {
         win_mc.addFrameScript(win_mc.totalFrames - 1,null);
         LevelManager.topLevel.removeChild(win_mc);
         win_mc = null;
      }
      
      public static function resultHandler(param1:SocketEvent) : void
      {
         var _loc2_:TeamPKResultInfo = param1.data as TeamPKResultInfo;
         var _loc3_:TeamPKResultPanel = new TeamPKResultPanel();
         _loc3_.setup(_loc2_);
         _data = new TeamPKResultInfo();
         _data.isCan = _loc2_.isCan;
         showWin(_loc2_.result);
         PK_STATUS = 0;
      }
      
      public static function showChoicePanel() : void
      {
         if(_data)
         {
            if(_data.isCan)
            {
               _app = new AppModel(ClientConfig.getAppModule("ChoicePanel"),"正在打开面板");
               _app.setup();
               _app.show();
            }
            else if(_app)
            {
               _app.destroy();
               _app = null;
            }
         }
      }
      
      public static function getTeamSituation() : void
      {
         SocketConnection.send(CommandID.TEAM_PK_SITUATION);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_SITUATION,getPkSituationHandler);
      }
      
      private static function getPkSituationHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TEAM_PK_SITUATION,getPkSituationHandler);
         var _loc2_:TeamPkStInfo = param1.data as TeamPkStInfo;
         if(_loc2_.flag == 0)
         {
            return;
         }
         teamPkSituationInfo = _loc2_;
         dispatchEvent(new Event(INIT_INFO));
      }
      
      private static function _register() : void
      {
         if(type == 1)
         {
            MapManager.styleID = MAP_ID;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         if(type == 1)
         {
            MapManager.changeMap(MainManager.actorInfo.teamInfo.id,0,MapType.PK_TYPE);
         }
      }
      
      private static function onGetTeamSign(param1:SocketEvent) : void
      {
         var _loc3_:MCLoader = null;
         var _loc2_:TeamPKSignInfo = param1.data as TeamPKSignInfo;
         sign = _loc2_.sign;
         oldMap = MainManager.actorInfo.mapID;
         if(MainManager.actorModel.pet)
         {
            UserManager.addEventListener(MainManager.actorID.toString(),onHideHandler);
            SocketConnection.send(CommandID.PET_SHOW,MainManager.actorModel.pet.info.catchTime,0);
         }
         else
         {
            fun = _register;
            _loc3_ = new MCLoader(URL,LevelManager.appLevel,1,"正在进入对战系统");
            _loc3_.addEventListener(MCLoadEvent.SUCCESS,onLoadByRegister);
            _loc3_.doLoad();
         }
      }
      
      private static function onHideHandler(param1:PeopleActionEvent) : void
      {
         UserManager.removeEventListener(MainManager.actorID.toString(),onHideHandler);
         fun = _register;
         var _loc2_:MCLoader = new MCLoader(URL,LevelManager.appLevel,1,"正在进入对战系统");
         _loc2_.addEventListener(MCLoadEvent.SUCCESS,onLoadByRegister);
         _loc2_.doLoad();
      }
      
      private static function onSwitchMap(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitchMap);
         SocketConnection.send(CommandID.TEAM_PK_REGISTER,TeamPKManager.sign);
      }
      
      private static function getEnamyTeamInfo() : void
      {
         if(awayTeamID == 0)
         {
            return;
         }
         TeamInfoManager.getSimpleTeamInfo(awayTeamID,function(param1:SimpleTeamInfo):void
         {
            var info:SimpleTeamInfo = param1;
            enemyInfo.ename = info.name;
            enemyInfo.elevel = info.level;
            enemyInfo.eInfo = info;
            UserInfoManager.getInfo(info.leader,function(param1:UserInfo):void
            {
               enemyInfo.eLeader = param1.nick;
               getMyTeamInfo();
            });
         });
      }
      
      private static function getMyTeamInfo() : void
      {
         TeamInfoManager.getSimpleTeamInfo(homeTeamID,function(param1:SimpleTeamInfo):void
         {
            var info1:SimpleTeamInfo = param1;
            enemyInfo.myName = info1.name;
            enemyInfo.myLevel = info1.level;
            enemyInfo.myInfo = info1;
            UserInfoManager.getInfo(info1.leader,function(param1:UserInfo):void
            {
               enemyInfo.myLeader = param1.nick;
            });
         });
      }
      
      private static function onTeamPKNote(param1:SocketEvent) : void
      {
         var _loc2_:TeamPKNoteInfo = param1.data as TeamPKNoteInfo;
         homeTeamID = _loc2_.homeTeamID;
         awayTeamID = _loc2_.awayTeamID;
         type = _loc2_.mode;
         PK_STATUS = _loc2_.event;
         if(PK_STATUS == START || PK_STATUS == OPEN_DOOR)
         {
            if(!inMap)
            {
               TeamPKManager.showIcon();
            }
         }
         if((PK_STATUS == START || PK_STATUS == OPEN_DOOR) && inMap && !isGetBuilding)
         {
            if(inMap)
            {
               if(type == 1)
               {
                  getBuildingList();
               }
               else
               {
                  getEnamyTeamInfo();
               }
               AutoShotManager.setup();
            }
         }
         DisplayUtil.removeForParent(waitPanel);
         if(PK_STATUS == START)
         {
            MainManager.actorInfo.teamPKInfo.homeTeamID = _loc2_.homeTeamID;
            if(_loc2_.homeTeamID != _loc2_.selfTeamID)
            {
               TEAM = AWAY;
               if(inMap)
               {
                  if(type == 1)
                  {
                     MapManager.styleID = MAP_ID;
                     MapManager.changeMap(_loc2_.homeTeamID,0,MapType.PK_TYPE);
                  }
                  else if(type == 2)
                  {
                  }
               }
            }
            else
            {
               TEAM = HOME;
            }
            if(!isSendB)
            {
               isSendB = true;
               initBuildList();
               if(inMap)
               {
                  getTeamSituation();
               }
            }
            DebugTrace.show("teampkmanage:" + TeamPKManager.TEAM);
         }
         else if(PK_STATUS == OPEN_DOOR && inMap)
         {
            dispatchEvent(new TeamPKEvent(TeamPKEvent.OPEN_DOOR));
         }
         else if(PK_STATUS == OVER)
         {
            DebugTrace.show("team pk note info ----------->" + _loc2_.event);
            removeIcon();
            PK_STATUS = 0;
         }
      }
      
      public static function levelMapInt() : void
      {
         TEAM = 0;
         teamPkSituationInfo = null;
      }
      
      public static function outTeamMap() : void
      {
         levelMapInt();
         gameOver();
      }
      
      public static function gameOver() : void
      {
         MapManager.DESTROY_SWITCH = true;
         buildingMap.clear();
         homeBuildingMap.clear();
         awayBuildingMap.clear();
         if(_data)
         {
            if(_data.isCan)
            {
               showChoicePanel();
            }
            else
            {
               MapManager.changeMap(1);
            }
            _data = null;
         }
         else
         {
            MapManager.changeMap(1);
         }
         EventManager.dispatchEvent(new Event("TeamPKOver"));
      }
      
      private static function join() : void
      {
         if(type == 1)
         {
            MapManager.styleID = MAP_ID;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchWithJoin);
         if(MainManager.actorInfo.teamInfo.id == MainManager.actorInfo.teamPKInfo.homeTeamID)
         {
            TEAM = HOME;
         }
         else
         {
            TEAM = AWAY;
         }
         if(type == 1)
         {
            MapManager.changeMap(MainManager.actorInfo.teamPKInfo.homeTeamID,0,MapType.PK_TYPE);
         }
      }
      
      private static function onMapSwitchWithJoin(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapSwitchWithJoin);
         SocketConnection.send(CommandID.TEAM_PK_JOIN);
      }
      
      private static function isMySelf(param1:BasePeoleModel) : Boolean
      {
         if(MainManager.actorInfo.userID == param1.info.userID)
         {
            return true;
         }
         return false;
      }
      
      private static function onPKJoin(param1:SocketEvent) : void
      {
         var data:TeamPKJoinInfo = null;
         var t:uint = 0;
         var event:SocketEvent = param1;
         data = event.data as TeamPKJoinInfo;
         homeTeamID = data.homeTeamId;
         awayTeamID = data.awayTeamId;
         getEnamyTeamInfo();
         t = setTimeout(function():void
         {
            var _loc1_:* = undefined;
            var _loc2_:* = undefined;
            var _loc3_:* = undefined;
            for each(_loc1_ in data.homeUserList)
            {
               _loc2_ = UserManager.getUserModel(_loc1_.uid);
               if(_loc2_)
               {
                  _loc2_.bloodBar.colorType = PeopleBloodBar.RED;
                  _loc2_.bloodBar.setHp(_loc1_.hp,_loc1_.maxHp);
                  if(isMySelf(_loc2_))
                  {
                     myMaxHp = _loc1_.maxHp;
                     myHp = _loc1_.hp;
                     TeamPKManager.dispatchEvent(new Event(INIT_HP));
                  }
                  if(!_loc1_.isFreeze)
                  {
                  }
               }
               else
               {
                  noModelMaps.add(_loc1_.uid,_loc1_.uid);
               }
            }
            for each(_loc1_ in data.awayUserList)
            {
               _loc2_ = UserManager.getUserModel(_loc1_.uid);
               if(_loc2_)
               {
                  _loc2_.bloodBar.colorType = PeopleBloodBar.BLUE;
                  _loc2_.bloodBar.setHp(_loc1_.hp,_loc1_.maxHp);
                  _loc3_ = MapConfig.getMapPeopleXY(0,homeTeamID);
                  _loc2_.x = _loc3_.x + REDX;
                  _loc2_.y = _loc3_.y + REDY;
                  if(isMySelf(_loc2_))
                  {
                     myMaxHp = _loc1_.maxHp;
                     myHp = _loc1_.hp;
                     TeamPKManager.dispatchEvent(new Event(INIT_HP));
                  }
                  if(!_loc1_.isFreeze)
                  {
                  }
               }
               else
               {
                  noModelMaps.add(_loc1_.uid,_loc1_.uid);
               }
            }
            clearTimeout(t);
         },1000);
      }
      
      private static function onSomeoneJoin(param1:SocketEvent) : void
      {
         var data:SomeoneJoinInfo = null;
         var t:uint = 0;
         var event:SocketEvent = param1;
         data = event.data as SomeoneJoinInfo;
         t = setTimeout(function():void
         {
            var _loc1_:* = undefined;
            if(data.userID != MainManager.actorID)
            {
               _loc1_ = UserManager.getUserModel(data.userID);
               if(!_loc1_)
               {
                  noModelMaps.add(data.userID,data.userID);
               }
               else
               {
                  if(_loc1_.info.teamInfo.id == homeTeamID)
                  {
                     _loc1_.bloodBar.colorType = PeopleBloodBar.RED;
                  }
                  else
                  {
                     _loc1_.bloodBar.colorType = PeopleBloodBar.BLUE;
                  }
                  _loc1_.bloodBar.setHp(data.hp,data.maxHp);
               }
            }
            clearTimeout(t);
         },1000);
      }
      
      public static function petFight(param1:uint) : void
      {
         PetFightModel.status = PetFightModel.FIGHT_WITH_PLAYER;
         PetFightModel.mode = PetFightModel.SINGLE_MODE;
         SocketConnection.send(CommandID.TEAM_PK_PET_FIGHT,param1);
      }
      
      public static function shot(param1:uint, param2:uint, param3:uint) : void
      {
         DebugTrace.show("someone shot---->",param1);
         SocketConnection.send(CommandID.TEAM_PK_SHOT,param1,param2,param3);
      }
      
      private static function beShotHandler(param1:SocketEvent) : void
      {
         var _loc5_:BasePeoleModel = null;
         var _loc6_:BasePeoleModel = null;
         var _loc7_:PKArmModel = null;
         var _loc8_:SpriteBloodBar = null;
         var _loc2_:TeamPKBeShotInfo = param1.data as TeamPKBeShotInfo;
         var _loc3_:ShooterInfo = _loc2_.shooter();
         var _loc4_:ShooterInfo = _loc2_.beShooer();
         DebugTrace.show("======================= some one be shot =======================");
         DebugTrace.show(_loc2_.shotType,_loc3_.leftHp,_loc4_.leftHp);
         DebugTrace.show("======================= end of shot =======================");
         switch(_loc2_.shotType)
         {
            case TeamPKBeShotInfo.BUILDING_TO_PLAYER:
               if(_loc5_ = UserManager.getUserModel(_loc4_.userID))
               {
                  _loc5_.bloodBar.setHp(_loc4_.leftHp,_loc4_.maxHp,_loc2_.damage);
               }
               (_loc8_ = new SpriteBloodBar(ShotBehaviorManager.getMovieClip("pk_blood_bar"))).setHp(_loc3_.leftHp,_loc3_.maxHp);
               (_loc7_ = buildingMap.getValue(_loc3_.buyTime)).additive = [_loc8_];
               if(_loc3_.leftHp == 0)
               {
                  _loc7_.freeze();
               }
               _loc6_ = _loc5_;
               _loc7_.shot(_loc5_);
               if(TEAM == HOME)
               {
                  if(Boolean(awayBuildingMap.containsKey(_loc3_.buyTime)) && _loc3_.leftHp == 0)
                  {
                     win();
                  }
               }
               else if(Boolean(homeBuildingMap.containsKey(_loc3_.buyTime)) && _loc3_.leftHp == 0)
               {
                  win();
               }
               break;
            case TeamPKBeShotInfo.PLAYER_TO_BUILDING:
               _loc8_ = new SpriteBloodBar(ShotBehaviorManager.getMovieClip("pk_blood_bar"));
               (_loc7_ = buildingMap.getValue(_loc4_.buyTime)).additive = [_loc8_];
               _loc8_.setHp(_loc4_.leftHp,_loc4_.maxHp,_loc2_.damage);
               if(_loc4_.leftHp == 0)
               {
                  _loc7_.freeze();
               }
               if(_loc5_ = UserManager.getUserModel(_loc3_.userID))
               {
                  _loc5_.bloodBar.setHp(_loc3_.leftHp,_loc3_.maxHp);
               }
               if(TEAM == HOME)
               {
                  if(Boolean(awayBuildingMap.containsKey(_loc4_.buyTime)) && _loc4_.leftHp == 0)
                  {
                     win();
                  }
               }
               else if(Boolean(homeBuildingMap.containsKey(_loc4_.buyTime)) && _loc4_.leftHp == 0)
               {
                  win();
               }
               break;
            case TeamPKBeShotInfo.PLAYER_TO_PLAYER:
               if(_loc5_ = UserManager.getUserModel(_loc4_.userID))
               {
                  _loc5_.bloodBar.setHp(_loc4_.leftHp,_loc4_.maxHp,_loc2_.damage);
               }
               _loc6_ = _loc5_;
               if(_loc5_ = UserManager.getUserModel(_loc3_.userID))
               {
                  _loc5_.bloodBar.setHp(_loc3_.leftHp,_loc3_.maxHp);
               }
         }
         if(!_loc6_)
         {
            return;
         }
         if(isMySelf(_loc6_))
         {
            myHp = _loc4_.leftHp;
            TeamPKManager.dispatchEvent(new Event(INIT_HP));
         }
      }
      
      public static function updateDistance(param1:Array) : void
      {
         var _loc4_:PKArmModel = null;
         var _loc2_:ByteArray = new ByteArray();
         var _loc3_:uint = param1.length;
         _loc2_.writeUnsignedInt(_loc3_);
         for each(_loc4_ in param1)
         {
            _loc2_.writeUnsignedInt(_loc4_.info.buyTime);
            _loc2_.writeUnsignedInt(Point.distance(_loc4_.info.pos,MainManager.actorModel.pos));
         }
         SocketConnection.send(CommandID.TEAM_PK_REFRESH_DISTANCE,_loc2_);
      }
      
      public static function win() : void
      {
         SocketConnection.send(CommandID.TEAM_PK_WIN);
      }
      
      public static function getBuildingList() : void
      {
         SocketConnection.send(CommandID.TEAM_PK_GET_BUILDING_INFO);
      }
      
      private static function onGetBuildingInfo(param1:SocketEvent) : void
      {
         MapManager.DESTROY_SWITCH = false;
         var _loc2_:TeamPKBuildingListInfo = param1.data as TeamPKBuildingListInfo;
         homeList = _loc2_.homeList;
         awayList = _loc2_.awayList;
         TeamPKManager.dispatchEvent(new TeamPKEvent(TeamPKEvent.GET_BUILDING_LIST));
         getEnamyTeamInfo();
      }
      
      public static function get homeBuildinList() : Array
      {
         return homeList;
      }
      
      public static function get awayBuildinList() : Array
      {
         return awayList;
      }
      
      private static function onFreeze(param1:SocketEvent) : void
      {
         var _loc6_:Point = null;
         var _loc2_:TeamPKFreezeInfo = param1.data as TeamPKFreezeInfo;
         var _loc3_:uint = _loc2_.flag;
         var _loc4_:uint = _loc2_.uid;
         var _loc5_:BasePeoleModel = UserManager.getUserModel(_loc4_);
         DebugTrace.show("======================= freeze =======================");
         DebugTrace.show("flag",_loc3_,"uid",_loc4_);
         DebugTrace.show("======================= end of freeze =======================");
         if(!_loc5_)
         {
            freezeIDs.push(_loc2_);
            return;
         }
         if(_loc3_ == 1)
         {
            if(_loc5_.info.teamInfo.id == homeTeamID)
            {
               teamPanel.addAwayScore(25);
            }
            else
            {
               teamPanel.addHomeScore(25);
            }
            _loc5_.additive = [new SpriteFreeze(type)];
            _loc6_ = MapConfig.getMapPeopleXY(0,homeTeamID);
            if(_loc5_.info.teamInfo.id == homeTeamID)
            {
               _loc5_.x = _loc6_.x;
               _loc5_.y = _loc6_.y;
            }
            else
            {
               _loc5_.x = _loc6_.x + REDX;
               _loc6_.x = _loc5_.x;
               _loc5_.y = _loc6_.y + REDY;
               _loc6_.y = _loc5_.y;
            }
            if(_loc4_ == MainManager.actorID)
            {
               if(TEAM == HOME)
               {
                  LevelManager.moveToLeft();
               }
               else
               {
                  LevelManager.moveToRight();
               }
               _loc5_.walkAction(_loc6_);
               MouseController.removeMouseEvent();
               TeamPKManager.dispatchEvent(new TeamPKEvent(TeamPKEvent.CLOSE_TOOL));
            }
         }
         else
         {
            _loc5_.skeleton.getBodyMC().filters = [];
            if(_loc4_ == MainManager.actorID)
            {
               myHp = TeamPKManager.myMaxHp;
               _loc5_.bloodBar.setHp(myHp,myHp);
               dispatchEvent(new Event(INIT_HP));
               MouseController.addMouseEvent();
               TeamPKManager.dispatchEvent(new TeamPKEvent(TeamPKEvent.OPEN_TOOL));
            }
         }
      }
      
      private static function onUseShield(param1:SocketEvent) : void
      {
         var _loc2_:SuperNonoShieldInfo = param1.data as SuperNonoShieldInfo;
         if(_loc2_.uid == 0)
         {
            return;
         }
         var _loc3_:BasePeoleModel = UserManager.getUserModel(_loc2_.uid);
         _loc3_.showNonoShield(_loc2_.leftTime);
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
