package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.info.fbGame.FBGameOverInfo;
   import com.robot.core.info.fbGame.GameOverUserInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.ActorModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.filters.GlowFilter;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_10040 extends BaseMapProcess
   {
       
      
      private var _film:MovieClip;
      
      private var mode:ActorModel;
      
      private var isReady:Boolean = false;
      
      private var bossOutMC:MovieClip;
      
      private var bossMC:MovieClip;
      
      private var aimatTimer:Timer;
      
      private var startTime:Number;
      
      private var endTime:Number;
      
      private var aimatCount:uint = 0;
      
      private var rightStage:String;
      
      public function MapProcess_10040()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.bossOutMC = conLevel["effectAndBoss"];
         this.mode = MainManager.actorModel;
         this.mode.addEventListener(RobotEvent.WALK_START,this.onWalkStart);
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimat);
         SocketConnection.addCmdListener(CommandID.FB_GAME_OVER,this.onGameOverHandler);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,this.onMapSwitchHandler);
      }
      
      private function onMapSwitchHandler(param1:MapEvent) : void
      {
         if(this.isReady)
         {
            SocketConnection.addCmdListener(CommandID.LEAVE_GAME,this.onLeaveGameHandler);
            SocketConnection.send(CommandID.LEAVE_GAME,[1]);
            Alarm.show("你已经离开了游戏位置");
         }
      }
      
      private function onGameOverHandler(param1:SocketEvent) : void
      {
         var _loc6_:GameOverUserInfo = null;
         this.isReady = false;
         this.mode.removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
         SocketConnection.removeCmdListener(CommandID.FB_GAME_OVER,this.onGameOverHandler);
         this.conLevel[this.rightStage].filters = null;
         if(this.bossOutMC.currentFrame >= 2)
         {
            this.bossOutMC.gotoAndPlay(1);
         }
         this.bossOutMC.gotoAndPlay(2);
         this.bossOutMC.addEventListener(Event.ENTER_FRAME,this.onBossOutMCFrameHandler);
         var _loc2_:FBGameOverInfo = param1.data as FBGameOverInfo;
         var _loc3_:Array = _loc2_.userList as Array;
         var _loc4_:uint = uint(MainManager.actorModel.info.userID);
         var _loc5_:uint = 0;
         while(_loc5_ < _loc3_.length)
         {
            _loc6_ = _loc3_[_loc5_] as GameOverUserInfo;
            if(_loc4_ == _loc6_.id)
            {
               MainManager.actorModel.walkAction(_loc6_.pos);
            }
            _loc5_++;
         }
      }
      
      private function onBossOutMCFrameHandler(param1:Event) : void
      {
         if(this.bossOutMC.currentFrame == this.bossOutMC.totalFrames)
         {
            this.bossOutMC.removeEventListener(Event.ENTER_FRAME,this.onBossOutMCFrameHandler);
            this.bossMC = this.bossOutMC["bossMC"];
            this.bossMC.buttonMode = true;
            ResourceManager.getResource(ClientConfig.getResPath("eff/film.swf"),this.onLoad);
            this.aimatTimer = new Timer(1000);
            this.aimatTimer.addEventListener(TimerEvent.TIMER,this.onAimatTimerHandler);
            this.aimatTimer.start();
            this.startTime = new Date().getTime();
         }
      }
      
      private function onAimatTimerHandler(param1:TimerEvent) : void
      {
         this.endTime = new Date().getTime();
         if(this.aimatCount >= 5)
         {
            if(this._film)
            {
               AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
               this._film.addFrameScript(this._film.totalFrames - 1,this.onEnter);
               this._film.gotoAndPlay("s_3");
               this.bossMC.addEventListener(MouseEvent.CLICK,this.onBossClickHandler);
               this.aimatTimer.stop();
               this.aimatTimer.removeEventListener(TimerEvent.TIMER,this.onAimatTimerHandler);
               this.aimatTimer = null;
            }
         }
         if((this.endTime - this.startTime) / 1000 / 60 >= 1)
         {
            this.startTime = new Date().getTime();
            this.aimatCount = 0;
         }
      }
      
      private function onBossClickHandler(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("BOSS");
      }
      
      private function onEnter() : void
      {
         if(this._film)
         {
            this._film.addFrameScript(this._film.totalFrames - 1,null);
         }
         DisplayUtil.removeForParent(this._film);
         this._film = null;
      }
      
      private function onLoad(param1:DisplayObject) : void
      {
         this._film = param1 as MovieClip;
         this._film.scaleX = this._film.scaleY = 1.5;
         this._film.y = -10;
         this._film.gotoAndStop("s_1");
         this.bossMC.addChild(this._film);
      }
      
      private function onAimat(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info;
         if(_loc2_.id == 10001)
         {
            if(this._film)
            {
               if(this._film.hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y))
               {
                  ++this.aimatCount;
                  if(this._film.currentLabel != "s_2")
                  {
                     this._film.gotoAndPlay("s_2");
                  }
                  SocketConnection.send(CommandID.ATTACK_BOSS,0);
               }
            }
         }
      }
      
      private function onWalkStart(param1:RobotEvent) : void
      {
         if(this.isReady)
         {
            SocketConnection.addCmdListener(CommandID.LEAVE_GAME,this.onLeaveGameHandler);
            SocketConnection.send(CommandID.LEAVE_GAME,[1]);
         }
      }
      
      override public function destroy() : void
      {
         this.isReady = false;
         this.aimatCount = 0;
         if(this.aimatTimer)
         {
            this.aimatTimer.stop();
            this.aimatTimer.removeEventListener(TimerEvent.TIMER,this.onAimatTimerHandler);
            this.aimatTimer = null;
         }
         if(this.mode)
         {
            this.mode.removeEventListener(RobotEvent.WALK_START,this.onWalkStart);
            this.mode = null;
         }
         if(this.bossOutMC.hasEventListener(Event.ENTER_FRAME))
         {
            this.bossOutMC.removeEventListener(Event.ENTER_FRAME,this.onBossOutMCFrameHandler);
         }
         this.onEnter();
         SocketConnection.removeCmdListener(CommandID.FB_GAME_OVER,this.onGameOverHandler);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_OPEN,this.onMapSwitchHandler);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimat);
         this.bossOutMC = null;
         this.bossMC = null;
      }
      
      public function onStand(param1:MovieClip) : void
      {
         this.rightStage = param1.name;
         var _loc2_:Array = [];
         switch(param1.name)
         {
            case "standMC_0":
               _loc2_.push(1);
               break;
            case "standMC_1":
               _loc2_.push(2);
               break;
            case "standMC_2":
               _loc2_.push(3);
         }
         SocketConnection.addCmdListener(CommandID.JOIN_GAME,this.onJoinGameHandler);
         SocketConnection.send(CommandID.JOIN_GAME,_loc2_);
      }
      
      private function onJoinGameHandler(param1:SocketEvent) : void
      {
         this.isReady = true;
         var _loc2_:GlowFilter = new GlowFilter();
         _loc2_.blurX = 50;
         _loc2_.blurY = 50;
         _loc2_.strength = 8;
         _loc2_.alpha = 1;
         _loc2_.color = 16777215;
         var _loc3_:Array = new Array(_loc2_);
         this.conLevel[this.rightStage].filters = _loc3_;
         this.conLevel["standMC_0"].mouseEnabled = false;
         this.conLevel["standMC_1"].mouseEnabled = false;
         this.conLevel["standMC_2"].mouseEnabled = false;
         SocketConnection.removeCmdListener(CommandID.JOIN_GAME,this.onJoinGameHandler);
      }
      
      private function onLeaveGameHandler(param1:SocketEvent) : void
      {
         this.conLevel[this.rightStage].filters = null;
         this.isReady = false;
         SocketConnection.removeCmdListener(CommandID.LEAVE_GAME,this.onLeaveGameHandler);
         this.conLevel["standMC_0"].mouseEnabled = true;
         this.conLevel["standMC_1"].mouseEnabled = true;
         this.conLevel["standMC_2"].mouseEnabled = true;
      }
   }
}
