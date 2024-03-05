package com.robot.app.mapProcess
{
   import com.robot.app.mapProcess.active.PKMapActive;
   import com.robot.app.protectSys.ProtectSystem;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app.toolBar.pkTool.TeamPkTool;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.FortressItemXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.event.TeamPKEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.info.teamPK.TeamPkBuildingInfo;
   import com.robot.core.info.teamPK.TeamPkStInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ShotBehaviorManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.mode.PKArmModel;
   import com.robot.core.mode.SpriteModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.teamPK.TeamInfoPanel;
   import com.robot.core.teamPK.TeamPKManager;
   import com.robot.core.teamPK.TeamPKMyHpPanel;
   import com.robot.core.teamPK.shotActive.AutoShotManager;
   import com.robot.core.ui.alert.Answer;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.component.containers.HBox;
   import org.taomee.component.control.UIMovieClip;
   import org.taomee.component.layout.FlowLayout;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class PKMap extends BaseMapProcess
   {
       
      
      private var _teamPKST_icon:InteractiveObject;
      
      private var _teamPkSt_panel:AppModel;
      
      private var _radius:uint;
      
      private var _teaminfo_panel:MovieClip;
      
      private var _homeScore_txt:TextField;
      
      private var _awayScore_txt:TextField;
      
      private var _time_txt:TextField;
      
      private var _time:Timer;
      
      private var _mySt_panel:TeamPKMyHpPanel;
      
      private var _go_0:MovieClip;
      
      private var _go_1:MovieClip;
      
      private var box:HBox;
      
      private var quitBtn:SimpleButton;
      
      private var firstLogin:Boolean = true;
      
      private var active:PKMapActive;
      
      private var teamInfo_panel:TeamInfoPanel;
      
      private var _type:uint;
      
      private var dis:uint;
      
      private var les:uint;
      
      private var inBuildingArr:Array;
      
      private var outBuildingArr:Array;
      
      private var sendBuildArr:Array;
      
      private var building_txt:TextField;
      
      public function PKMap()
      {
         this.inBuildingArr = new Array();
         this.sendBuildArr = new Array();
         super();
      }
      
      override protected function init() : void
      {
         var _loc1_:Point = null;
         ProtectSystem.lock = true;
         this._type = TeamPKManager.type;
         LevelManager.iconLevel.visible = false;
         if(MainManager.actorInfo.actionType != 0)
         {
            SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,0);
         }
         this.box = new HBox(30);
         this.box.halign = FlowLayout.RIGHT;
         this.box.valign = FlowLayout.MIDLLE;
         this.box.setSizeWH(950,70);
         if(this._type == 1)
         {
            this._go_0 = conLevel["go1_mc"];
            this._go_1 = conLevel["go2_mc"];
            this._go_0.gotoAndStop(1);
            this._go_1.gotoAndStop(1);
            TeamPKManager.REDX = 1880;
            TeamPKManager.REDY = 0;
         }
         else
         {
            TeamPKManager.REDX = 476;
            TeamPKManager.REDY = 234;
         }
         TeamPkTool.instance.show();
         TeamPkTool.instance.open();
         TeamPKManager.addEventListener(TeamPKEvent.COUNT_TIME,this.onTimeCount);
         TeamPKManager.addEventListener(TeamPKEvent.OPEN_DOOR,this.onOpenDoor);
         if(this._type == 1)
         {
            TeamPKManager.addEventListener(TeamPKEvent.GET_BUILDING_LIST,this.onGetBuilding);
         }
         TeamPKManager.inMap = true;
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimat);
         AutoShotManager.setup();
         DebugTrace.show("pkmap:" + TeamPKManager.TEAM);
         if(TeamPKManager.TEAM == TeamPKManager.AWAY)
         {
            _loc1_ = new Point(MainManager.actorModel.pos.x + TeamPKManager.REDX,MainManager.actorModel.pos.y + TeamPKManager.REDY);
            MainManager.actorModel.x = _loc1_.x;
            MainManager.actorModel.y = _loc1_.y;
            MainManager.actorModel.walkAction(_loc1_);
            _loc1_ = null;
            LevelManager.moveToRight();
            MainManager.actorModel.additiveInfo.info = TeamPKManager.AWAY;
         }
         else
         {
            MainManager.actorModel.additiveInfo.info = TeamPKManager.HOME;
         }
         LevelManager.topLevel.addChild(this.box);
         if(this._type == 1)
         {
            this._teamPKST_icon = UIManager.getButton("TeamPkSt_icon");
            LevelManager.iconLevel.addChild(this._teamPKST_icon);
            ToolTipManager.add(this._teamPKST_icon,"战队战况");
            this._teamPKST_icon.addEventListener(MouseEvent.CLICK,this.clickPkStHandler);
         }
         this.quitBtn = ShotBehaviorManager.getButton("pk_quit_btn");
         this.quitBtn.addEventListener(MouseEvent.CLICK,this.quit);
         ToolTipManager.add(this.quitBtn,"离开战场");
         this.box.append(new UIMovieClip(this._teamPKST_icon));
         this.box.append(new UIMovieClip(this.quitBtn));
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.walkEnterHandler);
         ToolBarController.aimatOff();
         ToolBarController.closeOrOpenGroupBtn(false);
         ToolBarController.bagOff();
         ToolBarController.homeOff();
         ToolBarController.panel.closeMap();
         this.teamInfo_panel = new TeamInfoPanel();
         this.teamInfo_panel.setup();
         TeamPKManager.teamPanel = this.teamInfo_panel;
         TeamPKManager.addEventListener(TeamPKManager.INIT_INFO,this.initInfoHandler);
         TeamPKManager.addEventListener(TeamPKManager.INIT_HP,this.initHpHandler);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_REGISTER,this.onSingUpSucHandler);
      }
      
      private function onSingUpSucHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.TEAM_PK_REGISTER,this.onSingUpSucHandler);
         this.initInfoHandler();
         this.getStatus();
         this._time = new Timer(10000,0);
         this._time.addEventListener(TimerEvent.TIMER,this.timerHandler);
         if(this._type == 2)
         {
            this._time.start();
         }
         this._mySt_panel = new TeamPKMyHpPanel();
         this._mySt_panel.setup();
         this._mySt_panel.show();
         this.active = new PKMapActive();
      }
      
      private function quit(param1:MouseEvent) : void
      {
         Answer.show("现在离开战场将无法返回本场保卫战，你确定要离开吗？",this.quitMap);
      }
      
      private function quitMap() : void
      {
         TeamPKManager.levelMapInt();
         MapManager.changeMap(1);
      }
      
      private function getStatus() : void
      {
         TeamPKManager.getTeamSituation();
      }
      
      private function initHpHandler(param1:Event) : void
      {
         if(this._mySt_panel)
         {
            this._mySt_panel.init();
         }
      }
      
      private function timerHandler(param1:TimerEvent) : void
      {
         TeamPKManager.getTeamSituation();
      }
      
      private function initInfoHandler(param1:Event = null) : void
      {
         if(TeamPKManager.type == 1)
         {
            TeamPKManager.getBuildingList();
         }
         if(!TeamPKManager.teamPkSituationInfo)
         {
            return;
         }
         if(this.firstLogin)
         {
            this.firstLogin = false;
            TeamPKManager.PK_STATUS = TeamPKManager.teamPkSituationInfo.pkStatus;
            if(TeamPKManager.PK_STATUS == TeamPKManager.START || TeamPKManager.PK_STATUS == TeamPKManager.OPEN_DOOR)
            {
               if(TeamPKManager.PK_STATUS == TeamPKManager.OPEN_DOOR)
               {
                  this.onOpenDoor(null);
               }
            }
         }
         if(TeamPKManager.isShowPanel)
         {
            if(!this._teamPkSt_panel)
            {
               this._teamPkSt_panel = new AppModel(ClientConfig.getAppModule("TeamPkStPanel"),"打开战队战况");
               this._teamPkSt_panel.setup();
            }
            this._teamPkSt_panel.init(TeamPKManager.teamPkSituationInfo);
            this._teamPkSt_panel.show();
         }
         var _loc2_:TeamPkStInfo = TeamPKManager.teamPkSituationInfo;
         var _loc3_:uint = uint(_loc2_.time);
         _loc3_ = Math.ceil(_loc3_ / 60);
         var _loc4_:uint = uint(_loc2_.awayKillBuilding * 50 + _loc2_.awayKillPlayer * 25);
         var _loc5_:uint = uint(_loc2_.homeKillBuilding * 50 + _loc2_.homeKillPlayer * 25);
         this.teamInfo_panel.setTime(_loc3_);
         this.teamInfo_panel.setAwayScore(_loc4_);
         this.teamInfo_panel.setHomeScore(_loc5_);
         this.walkEnterHandler();
      }
      
      private function walkEnterHandler(param1:RobotEvent = null) : void
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:ByteArray = null;
         var _loc5_:uint = 0;
         var _loc6_:TeamPkBuildingInfo = null;
         if(this._type != 1)
         {
            return;
         }
         if(TeamPKManager.PK_STATUS == TeamPKManager.OPEN_DOOR)
         {
            this.sendBuildArr = [];
            if(!this.outBuildingArr)
            {
               this.outBuildingArr = TeamPKManager.enemyBuildingList;
            }
            _loc2_ = 0;
            while(_loc2_ < this.outBuildingArr.length)
            {
               this.dis = Point.distance(this.outBuildingArr[_loc2_].pos,MainManager.actorModel.pos);
               this.les = uint(FortressItemXMLInfo.getShootRadius(this.outBuildingArr[_loc2_].id,this.outBuildingArr[_loc2_].form));
               if(this.dis <= this.les)
               {
                  this.inBuildingArr.push(this.outBuildingArr[_loc2_]);
                  this.sendBuildArr.push(this.outBuildingArr[_loc2_]);
                  this.outBuildingArr.splice(_loc2_,1);
               }
               _loc2_++;
            }
            _loc3_ = 0;
            while(_loc3_ < this.inBuildingArr.length)
            {
               this.dis = Point.distance(this.inBuildingArr[_loc3_].pos,MainManager.actorModel.pos);
               this.les = uint(FortressItemXMLInfo.getShootRadius(this.inBuildingArr[_loc3_].id,this.inBuildingArr[_loc3_].form));
               if(this.dis > this.les)
               {
                  this.outBuildingArr.push(this.inBuildingArr[_loc3_]);
                  this.sendBuildArr.push(this.inBuildingArr[_loc3_]);
                  this.inBuildingArr.splice(_loc3_,1);
               }
               _loc3_++;
            }
            if(this.sendBuildArr.length > 0)
            {
               _loc4_ = new ByteArray();
               _loc5_ = this.sendBuildArr.length;
               _loc4_.writeUnsignedInt(_loc5_);
               for each(_loc6_ in this.sendBuildArr)
               {
                  _loc4_.writeUnsignedInt(_loc6_.buyTime);
                  _loc4_.writeUnsignedInt(Point.distance(_loc6_.pos,MainManager.actorModel.pos));
               }
               SocketConnection.send(CommandID.TEAM_PK_REFRESH_DISTANCE,_loc4_);
            }
         }
      }
      
      private function clickPkStHandler(param1:MouseEvent) : void
      {
         TeamPKManager.getTeamSituation();
         TeamPKManager.isShowPanel = true;
      }
      
      override public function destroy() : void
      {
         ProtectSystem.lock = false;
         if(this.active)
         {
            this.active.destroy();
            this.active = null;
         }
         AutoShotManager.destroy();
         LevelManager.openMouseEvent();
         if(this.box)
         {
            DisplayUtil.removeForParent(this.box);
            this.box.destroy();
            this.box = null;
         }
         if(this._mySt_panel)
         {
            this._mySt_panel.destroy();
         }
         MainManager.actorModel.removeBloodBar();
         MainManager.actorModel.hideRadius();
         MainManager.actorModel.removeAllAditive(true);
         TeamPkTool.instance.hide();
         TeamPKManager.removeEventListener(TeamPKEvent.COUNT_TIME,this.onTimeCount);
         TeamPKManager.removeEventListener(TeamPKEvent.GET_BUILDING_LIST,this.onGetBuilding);
         TeamPKManager.removeEventListener(TeamPKEvent.OPEN_DOOR,this.onOpenDoor);
         if(this._teamPKST_icon)
         {
            DisplayUtil.removeForParent(this._teamPKST_icon);
            this._teamPKST_icon.removeEventListener(MouseEvent.CLICK,this.clickPkStHandler);
            this._teamPKST_icon = null;
         }
         TeamPKManager.gameOver();
         LevelManager.iconLevel.visible = true;
         if(this._time)
         {
            this._time.removeEventListener(TimerEvent.TIMER,this.timerHandler);
            this._time.stop();
            this._time = null;
         }
         if(this.teamInfo_panel)
         {
            this.teamInfo_panel.destroy();
            this.teamInfo_panel = null;
         }
         TeamPKManager.removeEventListener(TeamPKManager.INIT_INFO,this.initInfoHandler);
         TeamPKManager.removeEventListener(TeamPKManager.INIT_HP,this.initHpHandler);
         this.inBuildingArr = null;
         this.outBuildingArr = null;
         this.sendBuildArr = null;
         this._mySt_panel = null;
         MainManager.actorModel.additiveInfo.destroy();
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.walkEnterHandler);
         if(this._teamPkSt_panel)
         {
            this._teamPkSt_panel.destroy();
         }
         this._teamPkSt_panel = null;
         TeamPKManager.inMap = false;
         TeamPKManager.isGetBuilding = false;
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
         ToolBarController.aimatOn();
         ToolBarController.bagOn();
         ToolBarController.homeOn();
         ToolBarController.panel.openMap();
         ToolBarController.closeOrOpenGroupBtn(true);
      }
      
      private function onGetBuilding(param1:TeamPKEvent) : void
      {
         var _loc2_:PKArmModel = null;
         var _loc3_:TeamPkBuildingInfo = null;
         TeamPKManager.isGetBuilding = true;
         TeamPKManager.removeEventListener(TeamPKEvent.GET_BUILDING_LIST,this.onGetBuilding);
         for each(_loc3_ in TeamPKManager.homeBuildinList)
         {
            _loc2_ = new PKArmModel(_loc3_,true,TeamPKManager.HOME);
            if(TeamPKManager.TEAM == TeamPKManager.AWAY)
            {
               _loc2_.isEnemy = true;
            }
            _loc2_.x = MainManager.getStageWidth() - _loc2_.pos.x;
            _loc2_.info.pos.x = _loc2_.x;
            _loc2_.info.pos.y = _loc2_.y;
            TeamPKManager.homeBuildingMap.add(_loc3_.buyTime,_loc2_);
            TeamPKManager.buildingMap.add(_loc3_.buyTime,_loc2_);
            depthLevel.addChild(_loc2_);
            ToolTipManager.add(_loc2_,FortressItemXMLInfo.getName(_loc2_.info.id));
         }
         for each(_loc3_ in TeamPKManager.awayBuildinList)
         {
            _loc2_ = new PKArmModel(_loc3_,false,TeamPKManager.AWAY);
            if(TeamPKManager.TEAM == TeamPKManager.HOME)
            {
               _loc2_.isEnemy = true;
            }
            _loc2_.x = _loc2_.pos.x + TeamPKManager.REDX;
            _loc2_.info.pos.x = _loc2_.x;
            _loc2_.info.pos.y = _loc2_.y - _loc2_.height;
            TeamPKManager.awayBuildingMap.add(_loc3_.buyTime,_loc2_);
            TeamPKManager.buildingMap.add(_loc3_.buyTime,_loc2_);
            depthLevel.addChild(_loc2_);
            ToolTipManager.add(_loc2_,FortressItemXMLInfo.getName(_loc2_.info.id));
         }
         TeamPKManager.initBuildList();
         if(this._time)
         {
            this._time.start();
         }
      }
      
      private function onOpenDoor(param1:TeamPKEvent) : void
      {
         DisplayUtil.removeForParent(typeLevel["mask_1"]);
         DisplayUtil.removeForParent(typeLevel["mask_2"]);
         DisplayUtil.removeAllChild(btnLevel);
         MapManager.currentMap.makeMapArray();
         if(this._type == 1)
         {
            this._go_0.gotoAndPlay(2);
            this._go_1.gotoAndPlay(2);
         }
         if(TeamPKManager.TEAM == TeamPKManager.HOME)
         {
            TeamPKManager.updateDistance(TeamPKManager.awayBuildingMap.getValues());
         }
         else
         {
            TeamPKManager.updateDistance(TeamPKManager.homeBuildingMap.getValues());
         }
      }
      
      private function onAimat(param1:AimatEvent) : void
      {
         var _loc4_:SpriteModel = null;
         if(TeamPKManager.PK_STATUS != TeamPKManager.OPEN_DOOR)
         {
            return;
         }
         var _loc2_:AimatInfo = param1.info;
         var _loc3_:Array = UserManager.getUserModelList().concat(TeamPKManager.buildingMap.getValues());
         for each(_loc4_ in _loc3_)
         {
            if(Boolean(_loc4_.hitTestPoint(_loc2_.endPos.x + LevelManager.mapLevel.x,_loc2_.endPos.y,true)) && param1.info.userID == MainManager.actorID)
            {
               if(_loc4_ is BasePeoleModel)
               {
                  if((_loc4_ as BasePeoleModel).isShield)
                  {
                     (_loc4_ as BasePeoleModel).showShieldMovie();
                  }
                  else
                  {
                     TeamPKManager.shot((_loc4_ as BasePeoleModel).info.userID,0,Math.floor(Point.distance(_loc4_.pos,MainManager.actorModel.pos)));
                  }
               }
               else
               {
                  TeamPKManager.shot(0,(_loc4_ as PKArmModel).info.buyTime,Math.floor(Point.distance(_loc4_.pos,MainManager.actorModel.pos)));
               }
               break;
            }
         }
      }
      
      private function onTimeCount(param1:TeamPKEvent) : void
      {
      }
      
      public function clickPoit() : void
      {
         this.active.clickHandler();
      }
   }
}
