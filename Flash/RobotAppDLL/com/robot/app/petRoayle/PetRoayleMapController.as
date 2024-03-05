package com.robot.app.petRoayle
{
   import com.robot.app.ParseSocketError;
   import com.robot.app.petRoayle.ui.FightInfoMC;
   import com.robot.app.petRoayle.ui.FightShowMC;
   import com.robot.app.petRoayle.ui.FightTargetMC;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.event.UserEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.roomFight.SignUpManager;
   import com.robot.core.temp.TempInfo;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class PetRoayleMapController
   {
      
      private static const POS_ARR:Array = [new Point(480,138),new Point(670,180),new Point(780,290),new Point(675,375),new Point(470,390),new Point(270,375),new Point(160,285),new Point(280,180)];
      
      public static var _applicationStatus:int = 0;
      
      private static var _roayleManager:com.robot.app.petRoayle.RoaylePeopleModelManager;
      
      private static var _hasWinFight:Boolean;
      
      private static var _shouldShowApplicationEnd:Boolean;
      
      private static var _winID:uint;
      
      private static var _fightTargetMC:FightTargetMC;
      
      private static var _fightInfoMC:FightInfoMC;
      
      private static var _fightShowMC:FightShowMC;
      
      private static var _map:BaseMapProcess;
      
      private static var _startFightEffectMC:MovieClip;
       
      
      public function PetRoayleMapController()
      {
         super();
      }
      
      public static function get roayleManager() : com.robot.app.petRoayle.RoaylePeopleModelManager
      {
         return _roayleManager;
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         var t:uint = 0;
         var map:BaseMapProcess = param1;
         _map = map;
         if(!_roayleManager)
         {
            if(PetRoayleTimerController.isOverTime())
            {
               t = setTimeout(function():void
               {
                  switchOutMap(true);
                  clearTimeout(t);
               },500);
               return;
            }
            _roayleManager = new com.robot.app.petRoayle.RoaylePeopleModelManager();
            _shouldShowApplicationEnd = false;
            _applicationStatus = 0;
            _winID = 0;
            initListeners();
            _fightInfoMC = new FightInfoMC();
            _fightShowMC = new FightShowMC();
            TempInfo.isInPetRoayleFight = true;
         }
         initResource();
         _roayleManager.getWrapperByID(MainManager.actorID).setInteractiveAction();
      }
      
      private static function initListeners() : void
      {
         EventManager.addEventListener(RobotEvent.CREATED_MAP_USER,onCreateMapUser);
         UserManager.addEventListener(UserEvent.REMOVED_FROM_MAP,onRemovedFromMap);
         SocketConnection.addCmdListener(CommandID.PETROAYLE_SERVERREADY,onServerReady);
         SocketConnection.addCmdListener(CommandID.PETROAYLE_FIGHT_START,onFightStart);
         SocketConnection.addCmdListener(CommandID.PETROAYLE_FIGHT_CHASE,onPetChase);
         SocketConnection.addCmdListener(CommandID.PETROAYLE_KILL_NOTICE,onKillNotice);
         SocketConnection.addCmdListener(CommandID.PETROAYLE_UI_CLEAN,onPetUIClean);
         SocketConnection.addCmdListener(CommandID.PETROAYLE_APPLICATION_END,onApplicationEnd);
         ParseSocketError.addErrorListener(14222,onError14222);
         FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,onFightClose);
         EventManager.addEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onUIClean);
         LevelManager.stage.addEventListener(MouseEvent.CLICK,onStageClick,true);
         SocketConnection.send(CommandID.PETROAYLE_CLIENTREADY,SignUpManager.struct);
      }
      
      private static function restoreListeners() : void
      {
         EventManager.removeEventListener(RobotEvent.CREATED_MAP_USER,onCreateMapUser);
         UserManager.removeEventListener(UserEvent.REMOVED_FROM_MAP,onRemovedFromMap);
         SocketConnection.removeCmdListener(CommandID.PETROAYLE_SERVERREADY,onServerReady);
         SocketConnection.removeCmdListener(CommandID.PETROAYLE_FIGHT_START,onFightStart);
         SocketConnection.removeCmdListener(CommandID.PETROAYLE_FIGHT_CHASE,onPetChase);
         SocketConnection.removeCmdListener(CommandID.PETROAYLE_KILL_NOTICE,onKillNotice);
         SocketConnection.removeCmdListener(CommandID.PETROAYLE_UI_CLEAN,onPetUIClean);
         SocketConnection.removeCmdListener(CommandID.PETROAYLE_APPLICATION_END,onApplicationEnd);
         ParseSocketError.removeErrorListener(14222,onError14222);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,onFightClose);
         EventManager.removeEventListener(RobotEvent.FIGHT_OVER_UI_CLEAN,onUIClean);
         LevelManager.stage.removeEventListener(MouseEvent.CLICK,onStageClick,true);
      }
      
      private static function initResource() : void
      {
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         _fightTargetMC = new FightTargetMC(_map.conLevel["targetMC"]);
         _fightShowMC.initMC(MapManager.currentMap.libManager.getClass("FightShowItem"));
         _fightInfoMC.initMC(_map.btnLevel["fightInfoMC"],MapManager.currentMap.libManager.getClass("FightInfoItem"));
         if(_applicationStatus != 0)
         {
            DisplayUtil.removeForParent(_map.topLevel["waitMC"]);
         }
         else
         {
            _startFightEffectMC = MapManager.currentMap.libManager.getMovieClip("StartFightEffect");
         }
      }
      
      private static function onCreateMapUser(param1:RobotEvent) : void
      {
         _roayleManager.initModel();
         if(_applicationStatus == 0 || _applicationStatus == 2)
         {
            initModel();
         }
      }
      
      private static function onRemovedFromMap(param1:UserEvent) : void
      {
         var _loc2_:uint = uint(param1.userInfo.userID);
         _roayleManager.removeModel(_loc2_);
      }
      
      private static function onServerReady(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var count:uint;
         var i:int;
         var info:PetRoayleInfo = null;
         var e:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.PETROAYLE_SERVERREADY,onServerReady);
         data = e.data as ByteArray;
         count = data.readUnsignedInt();
         i = 0;
         while(i < count)
         {
            info = new PetRoayleInfo(data);
            _roayleManager.addInfo(info);
            i++;
         }
         _applicationStatus = 1;
         initModel();
         _fightInfoMC.show(_roayleManager.infoHashMap.getValues(),true);
         DisplayUtil.removeForParent(_map.topLevel["waitMC"]);
         if(_startFightEffectMC)
         {
            _startFightEffectMC.x = 370;
            _startFightEffectMC.y = 145;
            _startFightEffectMC.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(_startFightEffectMC.totalFrames == _startFightEffectMC.currentFrame)
               {
                  _startFightEffectMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  DisplayUtil.removeForParent(_startFightEffectMC,false);
               }
            });
            LevelManager.appLevel.addChild(_startFightEffectMC);
            _startFightEffectMC.gotoAndPlay(1);
         }
      }
      
      private static function onFightStart(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         _roayleManager.startFight(_loc3_,_loc4_);
         _fightShowMC.addInfo(_roayleManager.getInfoByID(_loc3_),_roayleManager.getInfoByID(_loc4_));
         if(_loc3_ == MainManager.actorID || _loc4_ == MainManager.actorID)
         {
            PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER;
            if(_loc3_ == MainManager.actorID)
            {
               PetFightModel.enemyName = _roayleManager.getInfoByID(_loc4_).nick;
            }
            else
            {
               PetFightModel.enemyName = _roayleManager.getInfoByID(_loc3_).nick;
            }
            _applicationStatus = 6;
         }
      }
      
      private static function onPetChase(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         _roayleManager.changeTarget(_loc3_,_loc4_);
      }
      
      private static function onPetUIClean(param1:SocketEvent) : void
      {
         var _loc6_:RoaylePeopleModelWrapper = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:PetRoayleInfo;
         (_loc5_ = _roayleManager.getInfoByID(_loc3_)).status = 0;
         _loc5_.posIndex = _loc4_;
         if(_applicationStatus == 2)
         {
            _loc6_ = _roayleManager.getWrapperByID(_loc3_);
            initWrapper(_loc6_);
            initPostions(_loc6_,_loc4_);
         }
         if(_loc3_ == MainManager.actorID)
         {
            initModel();
         }
      }
      
      private static function onFightClose(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = param1.dataObj.data as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            _hasWinFight = true;
         }
         else
         {
            _hasWinFight = false;
         }
      }
      
      private static function onUIClean(param1:RobotEvent) : void
      {
         ToolBarController.panel.hide();
         LevelManager.iconLevel.visible = false;
         _fightInfoMC.show(_roayleManager.infoHashMap.getValues());
         _fightShowMC.showMC();
         var _loc2_:PetRoayleInfo = _roayleManager.getInfoByID(MainManager.actorID);
         if(!_hasWinFight)
         {
            _applicationStatus = 4;
            showApplicationEndMC(0);
         }
         else if(_shouldShowApplicationEnd)
         {
            showApplicationOver();
         }
         else
         {
            _applicationStatus = 3;
            SocketConnection.send(CommandID.PETROAYLE_UI_CLEAN);
         }
      }
      
      private static function showApplicationOver() : void
      {
         if(_winID > 0)
         {
            showApplicationEndMC(2);
         }
         else
         {
            showApplicationEndMC(1);
         }
      }
      
      private static function showApplicationEndMC(param1:int) : void
      {
         var mc:MovieClip = null;
         var type:int = param1;
         var info:PetRoayleInfo = _roayleManager.getInfoByID(MainManager.actorID);
         switch(type)
         {
            case 0:
               mc = MapManager.currentMap.libManager.getMovieClip("LostPanelMC");
               break;
            case 1:
               mc = MapManager.currentMap.libManager.getMovieClip("EndPanelMC");
               break;
            case 2:
               info.medalNum -= 5;
               mc = MapManager.currentMap.libManager.getMovieClip("WinPanelMC");
         }
         mc["mc"].gotoAndStop(8 - info.killNum);
         mc["count"].text = String(info.medalNum);
         mc["btn"].addEventListener(MouseEvent.CLICK,function():void
         {
            mc["btn"].removeEventListener(MouseEvent.CLICK,arguments.callee);
            switchOutMap();
         });
         DisplayUtil.align(mc,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(mc);
      }
      
      private static function onKillNotice(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         var _loc6_:uint = _loc2_.readUnsignedInt();
         var _loc7_:uint = _loc2_.readUnsignedInt();
         var _loc8_:uint = _loc2_.readUnsignedInt();
         var _loc9_:uint = _loc2_.readUnsignedInt();
         var _loc10_:uint = _loc2_.readUnsignedInt();
         var _loc11_:PetRoayleInfo;
         if(_loc11_ = _roayleManager.getInfoByID(_loc3_))
         {
            _loc11_.killNum = _loc5_;
            _loc11_.medalNum = _loc6_;
            _loc11_.maxHP = _loc8_;
            _loc11_.curHP = _loc9_;
         }
         _fightInfoMC.show(_roayleManager.infoHashMap.getValues());
         _fightShowMC.removeInfo(_loc3_);
      }
      
      private static function onApplicationEnd(param1:SocketEvent) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:String = null;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc8_:PetRoayleInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 4;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         _winID = _loc2_.readUnsignedInt();
         var _loc9_:int = 0;
         while(_loc9_ < _loc3_)
         {
            _loc4_ = _loc2_.readUnsignedInt();
            _loc5_ = _loc2_.readUTFBytes(16);
            _loc6_ = _loc2_.readUnsignedInt();
            _loc7_ = _loc2_.readUnsignedInt();
            (_loc8_ = _roayleManager.getInfoByID(_loc4_)).killNum = _loc6_;
            _loc8_.medalNum = _loc7_;
            _loc9_++;
         }
         if(_applicationStatus != 4)
         {
            if(_applicationStatus != 6)
            {
               showApplicationOver();
            }
            else
            {
               _shouldShowApplicationEnd = true;
            }
         }
      }
      
      private static function onError14222(param1:Event) : void
      {
         startModel(MainManager.actorModel);
      }
      
      private static function onStageClick(param1:MouseEvent) : void
      {
         var _loc2_:PetRoayleInfo = _roayleManager.getInfoByID(MainManager.actorID);
         if(Boolean(_loc2_) && _loc2_.status <= 2)
         {
            _roayleManager.changeTarget(0,0);
         }
      }
      
      private static function switchOutMap(param1:Boolean = false) : void
      {
         if(param1)
         {
            _applicationStatus = 7;
         }
         else
         {
            _applicationStatus = 5;
         }
         SignUpManager.stutas = SignUpManager.ROOM_TO_ONLINE;
         MapManager.changeMap(SignUpManager.oldMapID);
      }
      
      public static function initModel() : void
      {
         var t1:uint = 0;
         switch(_applicationStatus)
         {
            case 0:
               stopAllOtherModel();
               break;
            case 1:
               t1 = setTimeout(function():void
               {
                  initAction();
                  initPostions();
                  _applicationStatus = 2;
                  clearTimeout(t1);
               },500);
               break;
            case 2:
               initAction();
               break;
            case 3:
               initAction();
               _applicationStatus = 2;
               break;
            case 4:
            case 5:
         }
      }
      
      private static function initAction() : void
      {
         var _loc2_:RoaylePeopleModelWrapper = null;
         var _loc1_:HashMap = _roayleManager.modelHashMap;
         for each(_loc2_ in _loc1_.getValues())
         {
            initWrapper(_loc2_);
         }
      }
      
      private static function initWrapper(param1:RoaylePeopleModelWrapper) : void
      {
         var _loc2_:PetRoayleInfo = _roayleManager.getInfoByID(param1.userID);
         if(_loc2_)
         {
            param1.setInteractiveAction();
            handlerWrapper(param1);
            param1.showPetBloodBar(_loc2_.curHP,_loc2_.maxHP);
            if(_loc2_.posIndex > 0)
            {
               initPostions(param1,_loc2_.posIndex);
               _loc2_.posIndex = 0;
            }
         }
      }
      
      private static function initPostions(param1:RoaylePeopleModelWrapper = null, param2:uint = 0) : void
      {
         var _loc3_:Point = null;
         var _loc4_:HashMap = null;
         var _loc5_:int = 0;
         var _loc6_:uint = 0;
         if(param1)
         {
            _loc3_ = POS_ARR[param2 - 1];
            param1.model.pos = _loc3_;
            param1.model.pet.pos = _loc3_.subtract(new Point(50,40));
         }
         else
         {
            _loc4_ = _roayleManager.infoHashMap;
            _loc5_ = 0;
            for each(_loc6_ in _loc4_.getKeys())
            {
               _loc3_ = POS_ARR[_loc5_++];
               _roayleManager.getWrapperByID(_loc6_).model.pos = _loc3_;
               if(_roayleManager.getWrapperByID(_loc6_).model.pet)
               {
                  _roayleManager.getWrapperByID(_loc6_).model.pet.pos = _loc3_.subtract(new Point(50,40));
               }
            }
         }
      }
      
      private static function initWrappers() : void
      {
         var _loc1_:RoaylePeopleModelWrapper = null;
         for each(_loc1_ in _roayleManager.modelHashMap)
         {
            handlerWrapper(_loc1_);
         }
      }
      
      public static function handlerWrapper(param1:RoaylePeopleModelWrapper) : void
      {
         var _loc2_:PetRoayleInfo = _roayleManager.getInfoByID(param1.userID);
         if(_loc2_)
         {
            switch(_loc2_.status)
            {
               case 0:
                  startModel(param1.model);
                  startModel(param1.model);
                  startModel(param1.model);
                  break;
               case 3:
                  stopModel(param1.model);
            }
         }
      }
      
      public static function showTarget(param1:RoaylePeopleModelWrapper) : void
      {
         var _loc2_:PetRoayleInfo = !!param1 ? _roayleManager.getInfoByID(param1.userID) : null;
         _fightTargetMC.show(_loc2_);
      }
      
      public static function stopAllOtherModel() : void
      {
         var _loc1_:BasePeoleModel = null;
         for each(_loc1_ in UserManager.getUserModelList())
         {
            stopModel(_loc1_);
         }
      }
      
      public static function stopModel(param1:BasePeoleModel) : void
      {
         if(Boolean(param1) && Boolean(param1.pet))
         {
            param1.stop();
            param1.visible = false;
            param1.pet.visible = false;
            param1.addEventListener(RobotEvent.WALK_START,onBodyWalkStart);
         }
      }
      
      public static function startModel(param1:BasePeoleModel) : void
      {
         if(Boolean(param1) && Boolean(param1.pet))
         {
            param1.visible = true;
            param1.pet.visible = true;
            param1.removeEventListener(RobotEvent.WALK_START,onBodyWalkStart);
         }
      }
      
      private static function onBodyWalkStart(param1:RobotEvent) : void
      {
         var _loc2_:BasePeoleModel = param1.currentTarget as BasePeoleModel;
         _loc2_.stop();
         _loc2_.skeleton.stop();
      }
      
      public static function startAllOtherModel() : void
      {
         var _loc1_:BasePeoleModel = null;
         for each(_loc1_ in UserManager.getUserModelList())
         {
            startModel(_loc1_);
         }
      }
      
      public static function destroy() : void
      {
         if(_applicationStatus == 7)
         {
            return;
         }
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         _fightInfoMC.restoreMC();
         _fightShowMC.restoreMC();
         _fightTargetMC.destroy();
         if(_applicationStatus == 5)
         {
            restoreListeners();
            _roayleManager.destroy();
            _roayleManager = null;
            _fightInfoMC.destroy();
            _fightInfoMC = null;
            _fightShowMC.destroy();
            _fightShowMC = null;
            startModel(MainManager.actorModel);
            TempInfo.isInPetRoayleFight = false;
            MainManager.actorModel.interactiveAction = null;
         }
      }
   }
}
