package com.robot.app.mapProcess.control.activityControl
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.event.MapEvent;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class TwelveRoundsFightController extends ActivityControl
   {
       
      
      private var _lastStatu:Boolean;
      
      protected var _currentStep:int;
      
      private var _getBossStatuCmID:int;
      
      private var _statisticStartID:uint;
      
      private var _mapID:int;
      
      private var _enterMapFun:Function;
      
      private var _localMsgName:String;
      
      private var _vsIcon:DisplayObject;
      
      private var _iconX:Number;
      
      private var _iconY:Number;
      
      private var _vsIconName:String = "vs_icon";
      
      private var _vsIconTip:String = "12轮";
      
      private var _vsIconTextArry:Array;
      
      private var _broadCastText:String;
      
      private var _roundChangeFun:Function;
      
      private var _lastRoundEndFun:Function;
      
      private var _fightStatus:Array;
      
      private var _inPreTask:Boolean;
      
      private var _boosFightEndFun:Function;
      
      public function TwelveRoundsFightController(param1:Array)
      {
         super(param1);
         this._currentStep = -1;
      }
      
      public function startUp(param1:Function = null) : void
      {
         var startFun:Function = param1;
         SocketConnection.addCmdListener(this._getBossStatuCmID,this.onCheckBoss);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,function():void
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,arguments.callee);
            if(null != startFun)
            {
               startFun.call();
            }
            if(!isPast)
            {
               if(_localMsgName)
               {
                  LocalMsgController.addLocalMsg(_localMsgName);
               }
               initVSicon();
               if(isInActivityTime)
               {
                  initBroadcast();
               }
               SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onTimeCheck);
               if(isInActivityTime)
               {
                  _currentStep = getCurrentStep();
               }
            }
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         });
      }
      
      private function onTimeCheck(param1:*) : void
      {
         if(null == MapManager.currentMap)
         {
            return;
         }
         if(this._inPreTask)
         {
            return;
         }
         if(this._lastStatu && !this.isInActivityTime && this.isInActivityMap)
         {
            if(null != this._lastRoundEndFun)
            {
               this._lastRoundEndFun.call();
            }
         }
         this._lastStatu = super.isInActivityTime;
         if(this.isInActivityTime && this._currentStep != this.getCurrentStep() && this.isInActivityMap)
         {
            this._currentStep = this.getCurrentStep();
            if(null != this._roundChangeFun)
            {
               this._roundChangeFun(this.getCurrentStep());
            }
         }
         this._currentStep = this.getCurrentStep();
         this.updateVSicon();
         this.updateCountDown();
      }
      
      private function initBroadcast() : void
      {
         var t:uint = 0;
         t = setTimeout(function():void
         {
            var _loc1_:* = undefined;
            clearTimeout(t);
            if(!isInActivityMap)
            {
               _loc1_ = new BroadcastInfo();
               _loc1_.isLocal = true;
               _loc1_.map = _mapID;
               if(_broadCastText)
               {
                  _loc1_.txt = _broadCastText;
                  BroadcastController.addBroadcast(_loc1_);
               }
            }
         },3000);
      }
      
      private function initVSicon() : void
      {
         this._vsIcon = UIManager.getMovieClip(this._vsIconName);
         ToolTipManager.add(this._vsIcon as InteractiveObject,this._vsIconTip);
         LevelManager.iconLevel.addChild(this._vsIcon);
         this._vsIcon.x = this.iconX;
         this._vsIcon.y = this.iconY;
         this._vsIcon.addEventListener(MouseEvent.CLICK,function():void
         {
            SocketConnection.send(1022,_statisticStartID + _currentStep);
            MapManager.changeMap(_mapID);
         });
         this.updateVSicon();
      }
      
      protected function updateCountDown() : void
      {
         if(!this.isInActivityMap)
         {
            return;
         }
         if(this.countDownMv)
         {
            this.countDownMv["timeText"].text = this.nextRoundTime;
            if(this.isInActivityTime)
            {
               MapNamePanel.hide();
            }
            else
            {
               MapNamePanel.show();
            }
            this.countDownMv.visible = this.getCurrentStep() < this.allRound - 1;
            this.countDownMv.visible = this.isInActivityTime && !this.canFight && this.countDownMv.visible;
         }
         if(!this.isInActivityTime)
         {
            if(this.countDownMv)
            {
               this.countDownMv.visible = false;
            }
            MapNamePanel.show();
         }
      }
      
      private function get countDownMv() : MovieClip
      {
         if(this.isInActivityMap)
         {
            return MapManager.currentMap.topLevel["countDown"];
         }
         return null;
      }
      
      private function updateVSicon() : void
      {
         var _loc1_:int = 0;
         if(!this._vsIcon)
         {
            return;
         }
         if(this.isInActivityTime)
         {
            this._vsIcon.visible = true;
            if(this.isInActivityMap)
            {
               _loc1_ = this._currentStep;
            }
            else
            {
               _loc1_ = this.getCurrentStep();
            }
            this.setRundText(_loc1_);
         }
         else
         {
            this._vsIcon.visible = false;
         }
      }
      
      private function setRundText(param1:int) : void
      {
         if(this._vsIcon)
         {
            this._vsIcon["info"]["text"].text = this._vsIconTextArry[param1];
         }
      }
      
      private function onMapChange(param1:*) : void
      {
         if(this.isInActivityMap)
         {
            if(!this.isPast)
            {
               SocketConnection.send(this._getBossStatuCmID);
            }
            else if(null != this._enterMapFun)
            {
               this._enterMapFun.call();
            }
            this.updateCountDown();
         }
      }
      
      private function onCheckBoss(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:Array = KTool.readDataByBits(_loc2_,this.readBossStatuBits);
         var _loc4_:Array = this._fightStatus;
         this._fightStatus = _loc3_;
         if(null != this._enterMapFun)
         {
            this._enterMapFun.call();
         }
         var _loc5_:int = 0;
         while(_loc5_ < this.allRound)
         {
            if(1 == _loc3_[_loc5_] && _loc4_ && 0 == _loc4_[_loc5_])
            {
               this.bossfightEnd(_loc5_);
               break;
            }
            _loc5_++;
         }
         if(this.canFight && this.isInActivityTime)
         {
            if(null != this._roundChangeFun)
            {
               this._roundChangeFun(this._currentStep);
            }
         }
      }
      
      private function bossfightEnd(param1:int) : void
      {
         if(null != this._boosFightEndFun)
         {
            this._boosFightEndFun(param1);
         }
         if(param1 == this.allRound - 1)
         {
            if(this._lastRoundEndFun != null)
            {
               this._lastRoundEndFun.call();
               this._lastRoundEndFun = null;
            }
         }
      }
      
      protected function get nextRoundTime() : String
      {
         var _loc1_:int = 0;
         var _loc2_:Date = null;
         if(this._currentStep >= 0 && this._currentStep < this.allRound)
         {
            _loc2_ = SystemTimerManager.sysDate;
            _loc1_ = (this._currentStep + 1) * 5 - _loc2_.minutes;
            _loc1_ = _loc1_ <= 0 ? 1 : _loc1_;
         }
         return _loc1_ + "";
      }
      
      protected function getCurrentStep() : int
      {
         var _loc1_:int = 0;
         var _loc2_:Date = SystemTimerManager.sysDate;
         return int(Math.floor(_loc2_.minutes / 5));
      }
      
      public function get allRound() : int
      {
         return 12;
      }
      
      public function get isInActivityMap() : Boolean
      {
         return Boolean(MapManager.currentMap) && MapManager.currentMap.id == this._mapID;
      }
      
      public function destory() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,this.onTimeCheck);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapChange);
      }
      
      public function get canFight() : Boolean
      {
         if(this._fightStatus)
         {
            return this._fightStatus[this._currentStep] == 0;
         }
         return false;
      }
      
      public function set getBossStatuCmID(param1:int) : void
      {
         this._getBossStatuCmID = param1;
      }
      
      public function set statisticStartID(param1:uint) : void
      {
         this._statisticStartID = param1;
      }
      
      public function set mapID(param1:int) : void
      {
         this._mapID = param1;
      }
      
      public function set enterMapFun(param1:Function) : void
      {
         this._enterMapFun = param1;
      }
      
      public function set localMsgName(param1:String) : void
      {
         this._localMsgName = param1;
      }
      
      public function set boosFightEndFun(param1:Function) : void
      {
         this._boosFightEndFun = param1;
      }
      
      public function set vsIconName(param1:String) : void
      {
         this._vsIconName = param1;
      }
      
      public function set vsIconTip(param1:String) : void
      {
         this._vsIconTip = param1;
      }
      
      public function set vsIconTextArry(param1:Array) : void
      {
         this._vsIconTextArry = param1;
      }
      
      public function set broadCastText(param1:String) : void
      {
         this._broadCastText = param1;
      }
      
      public function set roundChangeFun(param1:Function) : void
      {
         this._roundChangeFun = param1;
      }
      
      public function get currentStep() : int
      {
         return this._currentStep;
      }
      
      public function get iconY() : Number
      {
         return this._iconY;
      }
      
      public function set iconY(param1:Number) : void
      {
         this._iconY = param1;
      }
      
      public function get iconX() : Number
      {
         return this._iconX;
      }
      
      public function set iconX(param1:Number) : void
      {
         this._iconX = param1;
      }
      
      public function set lastRoundEndFun(param1:Function) : void
      {
         this._lastRoundEndFun = param1;
      }
      
      public function set inPreTask(param1:Boolean) : void
      {
         this._inPreTask = param1;
      }
      
      override public function get isInActivityTime() : Boolean
      {
         if(this.currentStep == this.allRound - 1 && null != this._fightStatus && this.canFight == false)
         {
            return false;
         }
         return super.isInActivityTime;
      }
      
      override public function get isPast() : Boolean
      {
         if(this.currentStep == this.allRound - 1 && null != this._fightStatus && this.canFight == false && (cronTimes[cronTimes.length - 1] as CronTimeVo).checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT)
         {
            return true;
         }
         return super.isPast;
      }
      
      protected function get readBossStatuBits() : int
      {
         if(this.allRound <= 16)
         {
            return 16;
         }
         return 32;
      }
   }
}
