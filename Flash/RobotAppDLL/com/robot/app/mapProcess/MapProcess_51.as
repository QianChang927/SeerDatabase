package com.robot.app.mapProcess
{
   import com.robot.app.control.DivingGameController;
   import com.robot.app.games.FerruleGame.FerruleGamePanel;
   import com.robot.app.games.GameStorageManager;
   import com.robot.app.task.taskscollection.Task572;
   import com.robot.app.task.taskscollection.Task973;
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.DialogBox;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_51 extends BaseMapProcess
   {
      
      private static var panel:AppModel = null;
       
      
      private var mushroom:MovieClip;
      
      private var box:DialogBox;
      
      private var timer:Timer;
      
      private var wordArr:Array;
      
      private var timerIndex:uint = 0;
      
      private var snow_mc:MovieClip;
      
      private var iceGameBtn:MovieClip;
      
      private var thimbleGameBtn:MovieClip;
      
      private var divingGameBtn:MovieClip;
      
      private var greenDoor:SimpleButton;
      
      private var _isActive:Boolean;
      
      private var snowBallGameLevel:uint;
      
      private var snowBalldis:DisplayObject;
      
      private var inSnowGame:Boolean = false;
      
      private var t:uint;
      
      private var gameSwitch:Boolean = false;
      
      private var icePanel:AppModel;
      
      public function MapProcess_51()
      {
         this.wordArr = ["这是米鲁族千年才有一次的枯石仪式！","赛尔历41年9月30日晚上20点切莫错过！","当闪电电击枯石，它是否会出现？"];
         super();
      }
      
      override protected function init() : void
      {
         var _loc1_:int = 0;
         var _loc2_:String = null;
         var _loc3_:MovieClip = null;
         conLevel["door_1"].buttonMode = false;
         conLevel["door_1"].mouseEnabled = false;
         this.mushroom = conLevel["mushroomMC"];
         this.mushroom.gotoAndStop(1);
         this.mushroom.buttonMode = true;
         this.mushroom.addEventListener(MouseEvent.CLICK,this.onClickMushroom);
         _loc1_ = 0;
         while(_loc1_ < 6)
         {
            _loc2_ = "snow_" + _loc1_;
            _loc3_ = conLevel[_loc2_];
            _loc3_.buttonMode = true;
            _loc3_.gotoAndStop(1);
            _loc3_.addEventListener(MouseEvent.CLICK,this.onClickSnow);
            _loc1_++;
         }
         this.snow_mc = conLevel["snow_mc"];
         this.snow_mc.buttonMode = true;
         this.snow_mc.addEventListener(MouseEvent.CLICK,this.clickSnowMcHandler);
         ToolTipManager.add(this.snow_mc,"米鲁雪地疾走");
         this.iceGameBtn = conLevel["iceGameBtn"];
         this.iceGameBtn.buttonMode = true;
         this.iceGameBtn.addEventListener(MouseEvent.CLICK,this.startIceGame);
         this.thimbleGameBtn = conLevel["thimbleGameBtn"];
         this.thimbleGameBtn.buttonMode = true;
         this.thimbleGameBtn.addEventListener(MouseEvent.CLICK,this.startThimbleGame);
         this.divingGameBtn = conLevel["divingGameBtn"];
         this.divingGameBtn.buttonMode = true;
         this.divingGameBtn.addEventListener(MouseEvent.CLICK,this.startDivingGame);
         SocketConnection.send(1022,86060809);
         ToolTipManager.add(this.iceGameBtn,"智勇闯冰关");
         ToolTipManager.add(this.thimbleGameBtn,"赛尔套圈大赛");
         ToolTipManager.add(this.divingGameBtn,"大脚过木桩");
         this.greenDoor = conLevel["greendoor"];
         this.greenDoor.addEventListener(MouseEvent.CLICK,this.onGreenDoorClickHandler);
         ToolTipManager.add(this.greenDoor,"兑换米鲁套装");
         Task572.initTask_51(this);
      }
      
      private function _clickBinqiling(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("PetMeetPanel"));
      }
      
      private function onGreenDoorClickHandler(param1:MouseEvent) : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getAppModule("MiluClothPanel"),"正在套装兑换面板");
            panel.setup();
            panel.show();
         }
         else
         {
            panel.show();
         }
      }
      
      private function clickSnowMcHandler(param1:MouseEvent) : void
      {
         if(this._isActive)
         {
            getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.PetMeetController").isShowTips(false);
         }
         MapManager.removeAppArrow();
         this.starGame();
      }
      
      public function starGame() : void
      {
         if(this.gameSwitch)
         {
            return;
         }
         this.gameSwitch = true;
         this.resetGameSwicth();
         SocketConnection.addCmdListener(CommandID.JOIN_GAME,this.onJoin);
         SocketConnection.send(CommandID.JOIN_GAME,3);
      }
      
      private function onJoin(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.JOIN_GAME,this.onJoin);
         GameStorageManager.freshLastGame(41008);
         var _loc2_:MCLoader = new MCLoader(ClientConfig.getResPath("Games/SnowBallGame_old.swf"),LevelManager.appLevel,1,"正在加载游戏");
         _loc2_.addEventListener(MCLoadEvent.SUCCESS,this.onSuccess);
         _loc2_.doLoad();
         SocketConnection.send(1022,86060813);
      }
      
      private function onSuccess(param1:MCLoadEvent) : void
      {
         param1.currentTarget.removeEventListener(MCLoadEvent.SUCCESS,this.onSuccess);
         this.inSnowGame = true;
         this.snowBalldis = param1.getContent();
         LevelManager.gameLevel.addChild(this.snowBalldis);
         this.snowBalldis.addEventListener("outgamenow",this.outSnowBallGame);
         SoundManager.stopSound();
      }
      
      private function outSnowBallGame(param1:Event) : void
      {
         if(!this.inSnowGame)
         {
            return;
         }
         this.snowBalldis.removeEventListener("outgamenow",this.outSnowBallGame);
         SoundManager.playSound();
         this.inSnowGame = false;
         var _loc2_:* = param1.target as Sprite;
         var _loc3_:Object = _loc2_.scoreObj;
         var _loc4_:uint = uint(_loc3_.level) * 10 + 10;
         DisplayUtil.removeForParent(this.snowBalldis);
         var _loc5_:uint = 0;
         if(_loc4_ > 30 && _loc4_ < 60)
         {
            _loc5_ = 100;
         }
         else if(_loc4_ >= 60 && _loc4_ <= 80)
         {
            _loc5_ = 200;
         }
         else if(_loc4_ > 80)
         {
            _loc5_ = 300;
         }
         SocketConnection.send(CommandID.GAME_OVER,_loc4_,_loc4_);
      }
      
      private function onClickSnow(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var t1:uint = 0;
         var evt:MouseEvent = param1;
         mc = evt.currentTarget as MovieClip;
         mc.buttonMode = false;
         mc.mouseEnabled = false;
         mc.gotoAndStop(2);
         t1 = setTimeout(function():void
         {
            clearTimeout(t1);
            TweenLite.to(mc,2,{"alpha":0});
         },1500);
         this.t = setTimeout(this.snowBackStatus,3500,mc);
      }
      
      private function snowBackStatus(param1:MovieClip) : void
      {
         var t2:uint = 0;
         var mc:MovieClip = param1;
         clearTimeout(this.t);
         mc.gotoAndStop(1);
         TweenLite.to(mc,2,{"alpha":1});
         t2 = setTimeout(function():void
         {
            clearTimeout(t2);
            mc.buttonMode = true;
            mc.mouseEnabled = true;
         },3500,mc);
      }
      
      private function onClickMushroom(param1:MouseEvent = null) : void
      {
         var t3:uint = 0;
         var evt:MouseEvent = param1;
         this.mushroom.buttonMode = false;
         this.mushroom.removeEventListener(MouseEvent.CLICK,this.onClickMushroom);
         this.mushroom.gotoAndStop(2);
         t3 = setTimeout(function():void
         {
            clearTimeout(t3);
            conLevel["door_1"].buttonMode = true;
            conLevel["door_1"].mouseEnabled = true;
         },2500);
      }
      
      override public function destroy() : void
      {
         var _loc2_:String = null;
         var _loc3_:MovieClip = null;
         Task973.destroy();
         this.greenDoor.removeEventListener(MouseEvent.CLICK,this.onGreenDoorClickHandler);
         this.divingGameBtn.removeEventListener(MouseEvent.CLICK,this.startDivingGame);
         this.iceGameBtn.removeEventListener(MouseEvent.CLICK,this.startIceGame);
         this.snow_mc.removeEventListener(MouseEvent.CLICK,this.clickSnowMcHandler);
         this.mushroom.removeEventListener(MouseEvent.CLICK,this.onClickMushroom);
         var _loc1_:int = 0;
         while(_loc1_ < 6)
         {
            _loc2_ = "snow_" + _loc1_;
            _loc3_ = conLevel[_loc2_];
            _loc3_.removeEventListener(MouseEvent.CLICK,this.onClickSnow);
            _loc1_++;
         }
         Task572.destory();
         DivingGameController.destroy();
      }
      
      private function startIceGame(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         MapManager.removeAppArrow();
         if(this.gameSwitch)
         {
            return;
         }
         this.gameSwitch = true;
         this.resetGameSwicth();
         SocketConnection.addCmdListener(CommandID.JOIN_GAME,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.JOIN_GAME,arguments.callee);
            GameStorageManager.freshLastGame(41010);
            if(!icePanel)
            {
               icePanel = ModuleManager.getModule(ClientConfig.getGameModule("PetSkateGame_old"),"正在加载游戏");
            }
            icePanel.show();
            SocketConnection.send(1022,86060811);
         });
         SocketConnection.send(CommandID.JOIN_GAME,2);
      }
      
      private function startThimbleGame(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         if(this._isActive)
         {
            getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.PetMeetController").isShowTips(false);
         }
         MapManager.removeAppArrow();
         if(this.gameSwitch)
         {
            return;
         }
         this.gameSwitch = true;
         this.resetGameSwicth();
         SocketConnection.addCmdListener(CommandID.JOIN_GAME,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.JOIN_GAME,arguments.callee);
            GameStorageManager.freshLastGame(41009);
            FerruleGamePanel.getInstance().loadGame();
            SocketConnection.send(1022,86060812);
         });
         SocketConnection.send(CommandID.JOIN_GAME,4);
      }
      
      private function startDivingGame(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         if(this._isActive)
         {
            getDefinitionByName("com.robot.app2.mapProcess.control.activityControl.PetMeetController").isShowTips(false);
         }
         if(this.gameSwitch)
         {
            return;
         }
         this.gameSwitch = true;
         this.resetGameSwicth();
         SocketConnection.addCmdListener(CommandID.JOIN_GAME,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(CommandID.JOIN_GAME,arguments.callee);
            DivingGameController.showGame();
            EventManager.addEventListener("DivingGame_Pass",passDivingGame);
            EventManager.addEventListener("DivingGame_Over",loseDivingGame);
         });
         SocketConnection.send(CommandID.JOIN_GAME,1);
      }
      
      private function passDivingGame(param1:DynamicEvent) : void
      {
         SocketConnection.send(CommandID.GAME_OVER,100,100);
      }
      
      private function loseDivingGame(param1:DynamicEvent) : void
      {
         var _loc3_:uint = 0;
         var _loc2_:uint = param1.paramObject as uint;
         if(_loc2_ < 4)
         {
            _loc3_ = 0;
         }
         if(_loc2_ >= 4 && _loc2_ < 7)
         {
            _loc3_ = 40;
         }
         if(_loc2_ >= 7 && _loc2_ < 10)
         {
            _loc3_ = 80;
         }
         SocketConnection.send(CommandID.GAME_OVER,_loc3_,_loc3_);
      }
      
      private function resetGameSwicth() : void
      {
         var t4:uint = 0;
         t4 = setTimeout(function():void
         {
            clearTimeout(t4);
            gameSwitch = false;
         },1000);
      }
   }
}
