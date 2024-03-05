package com.robot.app2.control
{
   import com.robot.app.systems.ErrorType;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.ArrayUtils;
   import com.robot.core.utils.EventListenerUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SuperNoCakeFightController
   {
      
      private static const SHOT_CMD:int = 41152;
      
      private static const BOSS_DEFEAT_CMD:int = 41151;
      
      private static const GET_CAKE_INFO_CMD:int = 41149;
      
      private static const GET_CAKE_CMD:int = 41150;
      
      private static const FIGHT_RESTART_CMD:int = 41154;
      
      private static var _map:BaseMapProcess;
      
      private static var _lastTime:uint = 0;
      
      private static var _smallCakes:Array = [];
      
      private static var _cakeNum:int = 0;
      
      private static var _myCakeNum:int = 0;
      
      private static var _allCakeNum:int = 0;
      
      private static var _cakeBlood:int = 0;
      
      private static var _isPlayAnim:Boolean = false;
      
      private static var _eventUtil:EventListenerUtil;
      
      private static var _currCake:MovieClip;
      
      private static var _cakePos:Array = [[167,426],[219,407],[235,377],[118,403],[213,448],[273,385],[455,370],[496,363],[543,363],[587,370],[587,402],[569,378],[529,392],[491,388],[450,397],[408,406],[369,406],[408,441],[448,426],[491,421],[537,421],[581,432],[662,392],[710,397],[731,374],[739,403],[561,400],[543,376],[517,374],[509,406],[473,406],[473,435],[432,348],[468,341],[507,334],[543,334],[581,341],[623,356],[623,389],[619,417],[731,423],[197,407],[219,387],[256,399],[287,421],[200,426],[167,399],[256,428],[320,431],[356,441],[458,464],[496,464],[517,445],[561,455]];
       
      
      public function SuperNoCakeFightController()
      {
         super();
      }
      
      public static function setUp(param1:BaseMapProcess) : void
      {
         _map = param1;
         _eventUtil = new EventListenerUtil();
         cake.visible = false;
         bar.visible = false;
         DisplayUtil.removeForParent(_map.btnLevel["mcSmallCake1"]);
         DisplayUtil.removeForParent(_map.btnLevel["mcSmallCake2"]);
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.hoursUTC >= 4 && _loc2_.hoursUTC <= 11)
         {
            SocketConnection.sendWithCallback(GET_CAKE_INFO_CMD,onGetCakeInfo,3);
         }
         AimatController.addEventListener(AimatEvent.PLAY_START,onPlayStartHandler);
         AimatController.addEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onTimer);
         SocketConnection.addCmdListener(BOSS_DEFEAT_CMD,onBossDefeat);
         SocketConnection.addCmdListener(FIGHT_RESTART_CMD,onRestartFight);
         EventManager.addEventListener(ErrorType.getErr0rType(1910041),onCantGotCake);
         EventManager.addEventListener(ErrorType.getErr0rType(1910042),onOtherGotCake);
         EventManager.addEventListener(ErrorType.getErr0rType(1910043),onGetTooMuchCake);
      }
      
      private static function onCantGotCake(param1:RobotEvent) : void
      {
         SimpleAlarm.show("大蛋糕还没有被击落，没有小蛋糕可捡。");
      }
      
      private static function onOtherGotCake(param1:RobotEvent) : void
      {
         removeCake(_currCake);
         SocketConnection.sendWithCallback(GET_CAKE_INFO_CMD,onGetCakeInfo,3);
         SimpleAlarm.show("由于你下手太慢，已经被别的玩家捡到了！");
      }
      
      private static function onGetTooMuchCake(param1:RobotEvent) : void
      {
         SimpleAlarm.show("你拾取这个蛋糕的碎片已经达到5个，等下一个整点参加新一轮打蛋糕活动吧！");
      }
      
      private static function onBossDefeat(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         bar.visible = false;
         _isPlayAnim = true;
         AnimateManager.playMcAnimate(cake,2,"mc",function():void
         {
            _isPlayAnim = false;
            var _loc1_:Array = ArrayUtils.shuffle(_cakePos);
            _smallCakes.splice(0);
            createSmallCake(_loc1_,30);
         });
      }
      
      private static function onRestartFight(param1:SocketEvent) : void
      {
         initBigCake();
         hideAllSmallCake();
      }
      
      private static function createSmallCake(param1:Array, param2:int) : void
      {
         var _loc4_:Array = null;
         var _loc5_:MovieClip = null;
         var _loc3_:int = 0;
         while(_loc3_ < param2)
         {
            _loc4_ = param1[_loc3_];
            (_loc5_ = getNewCake()).id = _loc3_;
            _loc5_.x = _loc4_[0];
            _loc5_.y = _loc4_[1];
            _smallCakes.push(_loc5_);
            _map.conLevel.addChild(_loc5_);
            _loc5_.buttonMode = true;
            _eventUtil.addEventListener(_loc5_,MouseEvent.CLICK,onClickCake);
            _loc3_++;
         }
      }
      
      private static function onClickCake(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         _currCake = e.currentTarget as MovieClip;
         SocketConnection.sendWithCallback(GET_CAKE_CMD,function(param1:SocketEvent):void
         {
            removeCake(_currCake);
            DebugTrace.show("GET_CAKE_CMD");
         });
      }
      
      private static function onTimer(param1:SocketEvent) : void
      {
         var _loc2_:Date = SystemTimerManager.sysDate;
         if(_loc2_.hoursUTC >= 4 && _loc2_.hoursUTC <= 11)
         {
            if(_loc2_.minutesUTC == 0)
            {
               initBigCake();
               hideAllSmallCake();
            }
            else
            {
               SocketConnection.sendWithCallback(GET_CAKE_INFO_CMD,onGetCakeInfo,3);
            }
         }
         else
         {
            cake.visible = false;
            bar.visible = false;
         }
      }
      
      private static function onGetCakeInfo(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 3)
         {
            _allCakeNum = _loc4_;
            if(_loc4_ > 0)
            {
               SocketConnection.sendWithCallback(GET_CAKE_INFO_CMD,onGetCakeInfo,2);
            }
         }
         else if(_loc3_ == 2)
         {
            _cakeBlood = _loc4_;
            if(_loc4_ > 0)
            {
               showBigCake();
               hideAllSmallCake();
            }
            else if(!_isPlayAnim)
            {
               hideBigCake();
               showSmallCake();
            }
         }
      }
      
      private static function initBigCake() : void
      {
         cake.visible = true;
         bar.visible = true;
         cake.gotoAndStop(1);
         KTool.showScore(bar.mcNum,0,0,true);
         MovieClip(bar.mcBar).gotoAndStop(1);
      }
      
      private static function showBigCake() : void
      {
         cake.visible = true;
         bar.visible = true;
         cake.gotoAndStop(1);
         KTool.showScore(bar.mcNum,_cakeBlood,0,true);
         MovieClip(bar.mcBar).gotoAndStop(int((3000 - _cakeBlood) / 100));
      }
      
      private static function hideBigCake() : void
      {
         cake.visible = false;
         bar.visible = false;
      }
      
      private static function showSmallCake() : void
      {
         KTool.getForeverNum(1007,function(param1:int):void
         {
            var _loc2_:Array = null;
            _cakeNum = _allCakeNum > 30 - _myCakeNum ? 30 - _myCakeNum : _allCakeNum;
            hideAllSmallCake();
            if(_cakeNum <= _smallCakes.length)
            {
               addOldCake();
            }
            else
            {
               _loc2_ = ArrayUtils.shuffle(_cakePos);
               _smallCakes.splice(0);
               createSmallCake(_loc2_,_cakeNum);
            }
         });
      }
      
      private static function addOldCake() : void
      {
         var _loc2_:MovieClip = null;
         _smallCakes = _smallCakes.slice(0,_cakeNum);
         var _loc1_:int = 0;
         while(_loc1_ < _smallCakes.length)
         {
            _loc2_ = _smallCakes[_loc1_];
            _map.conLevel.addChild(_loc2_);
            _eventUtil.addEventListener(_loc2_,MouseEvent.CLICK,onClickCake);
            _loc1_++;
         }
      }
      
      private static function hideAllSmallCake() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:int = 0;
         while(_loc1_ < _smallCakes.length)
         {
            _loc2_ = _smallCakes[_loc1_];
            if(_loc2_)
            {
               DisplayUtil.removeForParent(_loc2_);
            }
            _loc1_++;
         }
      }
      
      private static function removeCake(param1:MovieClip) : void
      {
         var _loc3_:MovieClip = null;
         var _loc2_:int = 0;
         while(_loc2_ < _smallCakes.length)
         {
            _loc3_ = _smallCakes[_loc2_];
            if(param1 == _loc3_)
            {
               _smallCakes.splice(_loc2_,1);
               DisplayUtil.removeForParent(param1);
               return;
            }
            _loc2_++;
         }
      }
      
      private static function onPlayStartHandler(param1:AimatEvent) : void
      {
      }
      
      private static function onPlayEndHandler(param1:AimatEvent) : void
      {
         var ainfo:AimatInfo = null;
         var e:AimatEvent = param1;
         if(MainManager.actorID == e.info.userID)
         {
            ainfo = e.info;
            if(cake.hitTestPoint(ainfo.endPos.x,ainfo.endPos.y))
            {
               SocketConnection.send(1022,86062984);
               SocketConnection.sendWithCallback(SHOT_CMD,function(param1:SocketEvent):void
               {
                  SocketConnection.sendWithCallback(GET_CAKE_INFO_CMD,onGetCakeInfo,2);
               });
            }
         }
      }
      
      private static function get cake() : MovieClip
      {
         return _map.btnLevel["mcCake"];
      }
      
      private static function get smallCake() : MovieClip
      {
         var _loc1_:int = 1;
         if(Math.random() > 0.5)
         {
            _loc1_ = 2;
         }
         return _map.btnLevel["mcSmallCake" + _loc1_];
      }
      
      private static function getNewCake() : MovieClip
      {
         var _loc1_:Class = smallCake.constructor as Class;
         return new _loc1_() as MovieClip;
      }
      
      private static function get bar() : MovieClip
      {
         return _map.btnLevel["mcBar"];
      }
      
      private static function removeEvent() : void
      {
         AimatController.removeEventListener(AimatEvent.PLAY_START,onPlayStartHandler);
         AimatController.removeEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onTimer);
         SocketConnection.removeCmdListener(BOSS_DEFEAT_CMD,onBossDefeat);
         SocketConnection.removeCmdListener(FIGHT_RESTART_CMD,onRestartFight);
         EventManager.removeEventListener(ErrorType.getErr0rType(1910041),onCantGotCake);
         EventManager.removeEventListener(ErrorType.getErr0rType(1910042),onOtherGotCake);
         EventManager.removeEventListener(ErrorType.getErr0rType(1910043),onGetTooMuchCake);
      }
      
      public static function destroy() : void
      {
         removeEvent();
         _eventUtil.dispose();
         _eventUtil = null;
         AimatController.removeEventListener(AimatEvent.PLAY_START,onPlayStartHandler);
         AimatController.removeEventListener(AimatEvent.PLAY_END,onPlayEndHandler);
         _map = null;
      }
   }
}
