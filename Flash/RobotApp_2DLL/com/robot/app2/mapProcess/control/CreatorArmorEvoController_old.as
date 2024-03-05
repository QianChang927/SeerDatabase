package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.Direction;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.BitUtil;
   import org.taomee.utils.DisplayUtil;
   
   public class CreatorArmorEvoController_old
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _pieceStatus:int;
      
      private static var _currentMine:int = -1;
      
      private static var _mineGiftStatus:int;
      
      private static var _mineStartStatus:int;
      
      private static const CUR_TASKNPC:int = 0;
      
      private static const _statues:Array = ["CreatorArmorPanel","SaintArcherMainPanel","GenesisWingPanel","CreatorRingPanel","",""];
      
      private static var _isProcess:Boolean = false;
      
      private static var _timer:Timer;
      
      private static var _exploitPorBar:MovieClip;
       
      
      public function CreatorArmorEvoController_old()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _currentMine = -1;
         _map = param1;
         checkPreTask();
         var _loc2_:int = 0;
         while(_loc2_ < _statues.length)
         {
            MapListenerManager.add(_map.conLevel["statueMc_" + _loc2_],onStatus);
            _loc2_++;
         }
      }
      
      private static function initMap() : void
      {
         KTool.getMultiValue([12197,12201,12198],function(param1:Array):void
         {
            _pieceStatus = param1[0];
            _mineGiftStatus = param1[1];
            _mineStartStatus = param1[2];
            updateMap();
         });
      }
      
      private static function onStatus(param1:MouseEvent) : void
      {
         var _loc2_:int = int(param1.currentTarget.name.split("_")[1]);
         if(param1.currentTarget.currentFrame == 1 && _loc2_ == CUR_TASKNPC)
         {
            startPreTask();
         }
         else if(_statues[_loc2_] != "" && param1.currentTarget.currentFrame == 2)
         {
            ModuleManager.showModule(ClientConfig.getAppModule(_statues[_loc2_]));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SaintArmorMainPanel_old"));
         }
      }
      
      private static function updateMap() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 10)
         {
            if(BitUtil.getBit(_pieceStatus,_loc1_) > 0)
            {
               DisplayUtil.removeForParent(_map.conLevel["stoneMc_" + _loc1_]);
            }
            else
            {
               MapListenerManager.add(_map.conLevel["stoneMc_" + _loc1_],onPiece);
            }
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ < 2)
         {
            if(BitUtil.getBit(_mineGiftStatus,_loc1_) == 0)
            {
               MapListenerManager.add(_map.conLevel["mineMc_" + _loc1_],onMine);
            }
            else
            {
               DisplayUtil.removeForParent(_map.conLevel["mineMc_" + _loc1_]);
            }
            _loc1_++;
         }
      }
      
      private static function onPiece(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.currentTarget.name.split("_")[1]);
         SocketConnection.sendByQueue(CommandID.SAINT_ARMOR_ARCHER_GET_ITEM,[1,index + 1],function(param1:*):void
         {
            initMap();
         });
      }
      
      private static function onMine(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.currentTarget.name.split("_")[1]);
         if(_currentMine == index)
         {
            return;
         }
         _currentMine = index;
         if(BitUtil.getBit(_mineStartStatus,index) > 0)
         {
            exploitNow();
         }
         else
         {
            if(_isProcess)
            {
               return;
            }
            _isProcess = true;
            SocketConnection.sendByQueue(CommandID.SAINT_ARMOR_ARCHER_GET_ITEM,[2,index + 1],function(param1:*):void
            {
               initMap();
               _isProcess = false;
               exploitNow();
            });
         }
      }
      
      private static function exploitNow() : void
      {
         addProBar();
         _timer = new Timer(1000,10);
         _timer.addEventListener(TimerEvent.TIMER,onTimer);
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
         _timer.start();
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMap);
         MainManager.actorModel.sprite.addEventListener(RobotEvent.WALK_START,onWalk);
         MainManager.actorModel.direction = Direction.DOWN;
      }
      
      private static function addProBar() : void
      {
         _exploitPorBar = UIManager.getMovieClip("ExploitPorBarMC");
         _exploitPorBar.y = -80;
         _exploitPorBar.gotoAndStop(1);
         MainManager.actorModel.addChild(_exploitPorBar);
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         _exploitPorBar.gotoAndStop(param1.target.currentCount * 5);
      }
      
      private static function onTimeOver(param1:TimerEvent) : void
      {
         var evt:TimerEvent = param1;
         var index:int = _currentMine;
         destroyMineAnima();
         _exploitPorBar.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            if(_exploitPorBar.currentFrame == _exploitPorBar.totalFrames)
            {
               _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               DisplayUtil.removeForParent(_exploitPorBar);
               _exploitPorBar = null;
            }
         });
         _exploitPorBar.gotoAndPlay(51);
         if(BitUtil.getBit(_mineGiftStatus,_currentMine) == 0)
         {
            SocketConnection.sendByQueue(CommandID.SAINT_ARMOR_ARCHER_GET_ITEM,[3,index + 1],function(param1:*):void
            {
               initMap();
            });
         }
      }
      
      private static function onMap(param1:MapEvent) : void
      {
         destroyMineAnima();
         _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
         DisplayUtil.removeForParent(_exploitPorBar);
         _exploitPorBar = null;
      }
      
      private static function onWalk(param1:RobotEvent) : void
      {
         destroyMineAnima();
         _exploitPorBar.removeEventListener(Event.ENTER_FRAME,arguments.callee);
         DisplayUtil.removeForParent(_exploitPorBar);
         _exploitPorBar = null;
      }
      
      private static function destroyMineAnima() : void
      {
         _currentMine = -1;
         if(_timer)
         {
            _timer.stop();
            _timer.removeEventListener(TimerEvent.TIMER,onTimer);
            _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimeOver);
            _timer = null;
         }
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onMap);
         MainManager.actorModel.stop();
         MainManager.actorModel.sprite.removeEventListener(RobotEvent.WALK_START,onWalk);
      }
      
      private static function checkPreTask() : void
      {
         if(!BitBuffSetClass.getState(22508))
         {
            CommonUI.addYellowExcal(_map.topLevel,132,88);
            _map.conLevel["statueMc_0"].gotoAndStop(1);
            _map.conLevel["statueMc_3"].gotoAndStop(2);
            _map.conLevel["statueMc_2"].gotoAndStop(2);
            _map.conLevel["statueMc_1"].gotoAndStop(2);
            _map.conLevel["statueMc_4"].gotoAndStop(1);
         }
         else
         {
            _map.conLevel["statueMc_0"].gotoAndStop(2);
            _map.conLevel["statueMc_1"].gotoAndStop(2);
            _map.conLevel["statueMc_2"].gotoAndStop(2);
            _map.conLevel["statueMc_3"].gotoAndStop(2);
            _map.conLevel["statueMc_4"].gotoAndStop(1);
         }
         initMap();
      }
      
      private static function startPreTask() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1023_saint_archer_old"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var taskMc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            CommonUI.removeYellowExcal(_map.topLevel);
            KTool.showMapAllPlayerAndMonster(false);
            _map.conLevel["statueMc_0"].gotoAndStop(3);
            _map.conLevel["statueMc_1"].gotoAndStop(3);
            _map.conLevel["statueMc_2"].gotoAndStop(3);
            _map.conLevel["statueMc_3"].gotoAndStop(3);
            _map.conLevel["statueMc_4"].gotoAndStop(1);
            MapManager.currentMap.topLevel.addChild(taskMc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KING_SKYSHATTER,["老伙计，我又回来了。"],["我已经等你很久了。"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHUANGSHI_SHENGGONG,["创世神的最强特防——创世圣甲，我们终于又见面了！"],["让我们再来像以前那样切磋一番吧！"]);
            mod4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4],function():void
            {
               StatManager.sendStat2014("创世神兵超进化觉醒创世圣甲","完成前置任务",StatManager.RUN_ACT);
               MapManager.currentMap.topLevel.removeChild(taskMc);
               BitBuffSetClass.setState(22508,1);
               KTool.showMapAllPlayerAndMonster(true);
               _map.conLevel["statueMc_0"].gotoAndStop(2);
               _map.conLevel["statueMc_1"].gotoAndStop(2);
               _map.conLevel["statueMc_2"].gotoAndStop(2);
               _map.conLevel["statueMc_3"].gotoAndStop(2);
               _map.conLevel["statueMc_4"].gotoAndStop(1);
               initMap();
               getDefinitionByName("com.robot.app.control.MidAutumnCelebrationController").tryFinish(3);
            });
         });
      }
      
      public static function destroy() : void
      {
         destroyMineAnima();
         if(_map)
         {
            _map = null;
         }
      }
   }
}
