package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyVSController
   {
      
      public static const TARGET_MAP:uint = 931;
      
      private static const BUFFER_ID:uint = 785;
      
      private static const END_TASK:uint = 472;
      
      private static const MARK_ID:uint = 20263;
      
      private static const MARK_TASK:uint = 1587;
      
      private static const ENTER_POS:int = 4;
      
      private static const FIRST_POS:int = 7;
      
      private static const SECOND_POS:int = 8;
      
      private static const THIRD_POS:int = 9;
      
      private static const FOURTH_POS:int = 10;
      
      private static const FIFTH_POS:int = 11;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var activeTimes:Array = [19,13];
      
      private static var time_p:CronTimeVo = new CronTimeVo("*","13","15","4","*","2016");
      
      private static var time_p0:CronTimeVo = new CronTimeVo("*","13","15-21","4","*","2016");
      
      private static var time_p1:CronTimeVo = new CronTimeVo("*","19","15-21","4","*","2016");
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","21","4","*","2016");
      
      private static var time_e3:CronTimeVo = new CronTimeVo("50","12","15-21","4","*","2016");
      
      private static var time_e4:CronTimeVo = new CronTimeVo("50","18","15-21","4","*","2016");
      
      private static var timeStr:String = "4月15日—4月21日";
      
      private static const YILANDI:String = "yilandi";
      
      private static const HELIESI:String = "heliesi";
      
      private static const LEINAERDUO:String = "leinaerduo";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController()
      {
         super();
      }
      
      public static function addMsgAndIcon() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
      }
      
      private static function onGetMsgTime(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onGetMsgTime);
         if(activeStatus != PAST)
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
            onIconTimer();
         }
      }
      
      private static function onIconTimer(param1:SocketEvent = null) : void
      {
         switch(activeStatus)
         {
            case PAST:
               destroyWidget();
               break;
            case ACTIVE:
               if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
               {
                  updateWidget();
               }
               else
               {
                  loadWidget();
               }
               break;
            default:
               if(canBroadcast)
               {
                  showBroadcast();
               }
               if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
               {
                  destroyWidget();
               }
         }
      }
      
      private static function showBroadcast() : void
      {
         var _loc1_:BroadcastInfo = null;
         if(Boolean(MapManager.currentMap) && MapManager.currentMap.id != TARGET_MAP)
         {
            _loc1_ = new BroadcastInfo();
            _loc1_.isLocal = true;
            _loc1_.map = TARGET_MAP;
            _loc1_.txt = adTips;
            BroadcastController.addBroadcast(_loc1_);
         }
      }
      
      private static function loadWidget() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("TwelveRoundsCountDownPanel"),function(param1:MovieClip):void
         {
            _widget = param1;
            DisplayUtil.align(_widget,null,AlignType.TOP_CENTER);
            _widget.y -= 3;
            _widget.buttonMode = true;
            _widget.mouseChildren = false;
            _widget.addEventListener(MouseEvent.CLICK,onGo);
            LevelManager.iconLevel.addChild(_widget);
            _widget.visible = true;
            updateWidget();
            MapNamePanel.hide();
         },"TwelveRoundsCountDownPanel_UI");
      }
      
      private static function updateWidget() : void
      {
         MapNamePanel.hide();
         _widget["title"].text = vsTips;
         _widget["txt_info"].text = currentStepTips;
         _widget["round"].text = "第" + (Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1) + "轮对战开始";
      }
      
      private static function destroyWidget() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
         {
            _widget.removeEventListener(MouseEvent.CLICK,onGo);
            MapNamePanel.show();
            DisplayUtil.removeForParent(_widget);
            _widget = null;
         }
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,_curStep + 86061478);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86061472);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86061130);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_931_shierlun"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
            taskMc.x = 456;
            taskMc.y = 231;
            addEvents();
            checkActivity();
         });
      }
      
      private static function addEvents() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      public static function initEquip() : void
      {
         SocketConnection.send(1022,86061477);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/HelisiEvolationPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         if(activeStatus != PAST)
         {
            NpcDialog.show(NPC.AIXINGE,[MainManager.actorInfo.formatNick + "对决的时刻马上就要到了！0xff0000" + timeStr + "，每天下午13:00—14:00，晚上19:00—20:000xffffff来接受他们被我踩在脚下的结果吧！哈哈哈！"],["可恶，我一定会阻止你的！","我准备一下就来！"],[function():void
            {
               MapManager.changeMap(TARGET_MAP);
            }]);
            if(MapManager.currentMap.id == 1)
            {
               SocketConnection.send(1022,86061473);
            }
            else if(MapManager.currentMap.id == 7)
            {
               SocketConnection.send(1022,86061474);
            }
         }
      }
      
      public static function initEquipAndNPC(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86061473);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86061474);
         }
      }
      
      private static function checkActivity() : void
      {
         switch(activeStatus)
         {
            case ACTIVE:
               startActivity();
               break;
            case PAST:
               destroy();
               break;
            default:
               waitActivity();
         }
      }
      
      private static function waitActivity() : void
      {
         checkPreTask();
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
      }
      
      private static function startActivity() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         onRefreshTime();
      }
      
      private static function finishAcitivty() : void
      {
         var beforeFunc:Function = null;
         var endFunc:Function = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         destroyWidget();
         if(!isLastDay)
         {
            endFunc = checkPreTask;
            beforeFunc = startOverMc;
         }
         else
         {
            endFunc = destroy;
            beforeFunc = startFinishMc;
         }
         if(TasksManager.getTaskStatus(END_TASK) != TasksManager.COMPLETE)
         {
            beforeFunc(function():void
            {
               completeTask(endFunc);
            });
         }
         else
         {
            endFunc();
         }
      }
      
      private static function completeTask(param1:Function) : void
      {
         var cb:Function = param1;
         TasksManager.accept(END_TASK,function():void
         {
            TasksManager.complete(END_TASK,0,function():void
            {
               TasksManager.setTaskStatus(END_TASK,TasksManager.COMPLETE);
               cb();
            });
         });
      }
      
      private static function onCheckStartTime(param1:SocketEvent = null) : void
      {
         if(activeStatus == ACTIVE)
         {
            CommonUI.removeYellowExcal(_map.topLevel);
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            startActivity();
         }
      }
      
      private static function onRefreshTime(param1:SocketEvent = null) : void
      {
         var e:SocketEvent = param1;
         KTool.getLimitNum(15105,function(param1:int):void
         {
            onCheckBoss(param1);
         });
      }
      
      private static function onCheckEndTime(param1:SocketEvent) : void
      {
         if(activeStatus != ACTIVE)
         {
            finishAcitivty();
         }
      }
      
      private static function checkPreTask() : void
      {
         if(BufferRecordManager.getMyState(BUFFER_ID))
         {
            showNpcs();
         }
         else
         {
            startPreTask();
         }
      }
      
      private static function showNpcs() : void
      {
         stopAtChildFrame(ENTER_POS,1);
      }
      
      private static function hideNpcs() : void
      {
      }
      
      private static function stopAtChildFrame(param1:uint, param2:uint = 0) : void
      {
         var frameIndex:uint = param1;
         var subFrameIndex:uint = param2;
         KTool.getFrameMc(taskMc,frameIndex,"mc" + frameIndex,function(param1:MovieClip):void
         {
            if(subFrameIndex != 0)
            {
               param1.gotoAndStop(subFrameIndex);
            }
            else
            {
               param1.gotoAndStop(param1.totalFrames);
            }
         });
      }
      
      private static function addYellowArrow(param1:int) : void
      {
         if(param1 == FIRST_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,475,225,0);
         }
         else if(param1 == SECOND_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,475,225,0);
         }
         else if(param1 == THIRD_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,475,225,0);
         }
         else if(param1 == FOURTH_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,475,225,0);
         }
         else if(param1 == FIFTH_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,475,225,0);
         }
      }
      
      private static function setFirstBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(FIRST_POS);
         }
         else if(_loc3_)
         {
            if(param2 == 0)
            {
               startEnterMc(startFightFirst);
            }
            else
            {
               startFightFirst();
            }
         }
         else
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            stopAtChildFrame(FIRST_POS);
            addYellowArrow(FIRST_POS);
         }
         _curStep = param2;
      }
      
      private static function setSecondBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(SECOND_POS);
         }
         else if(_loc3_)
         {
            startFightSecond();
         }
         else
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            stopAtChildFrame(SECOND_POS);
            addYellowArrow(SECOND_POS);
         }
         _curStep = param2;
      }
      
      private static function setThirdBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(THIRD_POS);
         }
         else if(_loc3_)
         {
            startFightThird(param2);
         }
         else
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            stopAtChildFrame(THIRD_POS);
            addYellowArrow(THIRD_POS);
         }
         _curStep = param2;
      }
      
      private static function setFourthBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(FOURTH_POS);
         }
         else if(_loc3_)
         {
            startFightFourth();
         }
         else
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            stopAtChildFrame(FOURTH_POS);
            addYellowArrow(FOURTH_POS);
         }
         _curStep = param2;
      }
      
      private static function setFifthBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(FIFTH_POS);
         }
         else if(_loc3_)
         {
            startFightFifth(param2);
         }
         else
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            stopAtChildFrame(FIFTH_POS);
            addYellowArrow(FIFTH_POS);
         }
         _curStep = param2;
      }
      
      private static function onCheckBoss(param1:int) : void
      {
         var _loc4_:int = 0;
         var _loc5_:uint = 0;
         CommonUI.removeYellowArrow(_map.topLevel);
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(param1);
         _loc2_.position = 0;
         _fightStatus = KTool.readDataByBits(_loc2_,32);
         if(activeStatus == ACTIVE && SystemTimerManager.sysBJDate.hours != activeTimes[0])
         {
            _loc4_ = activeTimes.indexOf(SystemTimerManager.sysBJDate.hours);
            _loc5_ = 0;
            while(_loc5_ < 12)
            {
               _fightStatus[_loc5_] = _fightStatus[12 * _loc4_ + _loc5_];
               _loc5_++;
            }
         }
         if(_fightStatus[11] == 1)
         {
            finishAcitivty();
            return;
         }
         var _loc3_:uint = SystemTimerManager.sysDate.minutes / 5;
         if(_loc3_ == 0)
         {
            setFirstBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
         else if(_loc3_ == 1 || _loc3_ == 5 || _loc3_ == 9)
         {
            setSecondBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
         else if(_loc3_ == 2 || _loc3_ == 6 || _loc3_ == 10)
         {
            setThirdBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
         else if(_loc3_ == 3 || _loc3_ == 7 || _loc3_ == 11)
         {
            setFourthBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
         else if(_loc3_ == 4 || _loc3_ == 8)
         {
            setFifthBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         if(!isFight)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         }
         if(_map)
         {
            removeEvents();
            DisplayUtil.removeForParent(taskMc);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
         }
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc3_:String = null;
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case YILANDI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     isFight = true;
                     if(_curStep == 0)
                     {
                        _loc3_ = "里奥杰斯";
                     }
                     if(_curStep == 2)
                     {
                        _loc3_ = "索兰特";
                     }
                     if(_curStep == 6)
                     {
                        _loc3_ = "尤米娜";
                     }
                     if(_curStep == 10)
                     {
                        _loc3_ = "圣光天马";
                     }
                     if(_curStep == 4)
                     {
                        _loc3_ = "魔域仙子";
                     }
                     if(_curStep == 8)
                     {
                        _loc3_ = "巨石灵王";
                     }
                     FightManager.fightNoMapBoss("伊兰迪",_curStep + 2799);
                  }
                  else
                  {
                     NpcDialog.show(NPC.YILANDI,["整个世界都将是我们的！我们就是宇宙的主宰！"],["你太狂妄了！"]);
                  }
                  break;
               case HELIESI:
                  if(!_fightStatus[_curStep] && (_curStep == 3 || _curStep == 7 || _curStep == 11))
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("赫利厄斯",_curStep + 2799);
                  }
                  else
                  {
                     NpcDialog.show(NPC.HELIESI,["发挥你最强的战斗力吧！" + MainManager.actorInfo.formatNick + "记得我和你说的，0xff0000每五分钟0xffffff可以挑战我们其中一个。我要超进化成最强大的精灵！"],["我明白了！"]);
                  }
                  break;
               case LEINAERDUO:
                  if(!_fightStatus[_curStep] && (_curStep == 1 || _curStep == 5 || _curStep == 9))
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("雷纳尔多",_curStep + 2799);
                  }
                  else
                  {
                     NpcDialog.show(NPC.LEINAERDUO,["发挥你最强的战斗力吧！" + MainManager.actorInfo.formatNick + "记得我和你说的，0xff0000每五分钟0xffffff可以挑战我们其中一个。"],["我明白了！"]);
                  }
            }
         }
         else
         {
            switch(_loc2_)
            {
               case YILANDI:
                  NpcDialog.show(NPC.YILANDI,["0xff0000" + timeStr + "，每天下午13:00—14:00，晚上19:00—20:00xffffff，记得来看看你们凡域的精灵是多么的弱小！哈哈哈！"],["不要太嚣张！你一定会失败的！"]);
                  break;
               case LEINAERDUO:
                  NpcDialog.show(NPC.LEINAERDUO,[MainManager.actorInfo.formatNick + "，0xff0000" + timeStr + "，每天下午13:00—14:00，晚上19:00—20:000xffffff！我们一定会合力击败伊兰迪！"],["雷纳尔多，加油啊！"]);
                  break;
               case HELIESI:
                  NpcDialog.show(NPC.HELIESI,[MainManager.actorInfo.formatNick + "，0xff0000" + timeStr + "，每天下午13:00—14:00，晚上19:00—20:000xffffff！来见证我们胜利的时刻吧！"],["赫利厄斯，我看好你的！"]);
            }
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         isFight = false;
         SocketConnection.send(1022,86057590);
         if(_curStep >= 11)
         {
            return;
         }
         if(_curStep == 0)
         {
            stopAtChildFrame(FIRST_POS);
            endFightFirst();
         }
         if(_curStep == 1 || _curStep == 5 || _curStep == 9)
         {
            stopAtChildFrame(SECOND_POS);
            endFightSecond();
         }
         if(_curStep == 2 || _curStep == 6 || _curStep == 10)
         {
            stopAtChildFrame(THIRD_POS);
            endFightThird();
         }
         if(_curStep == 3 || _curStep == 7 || _curStep == 11)
         {
            stopAtChildFrame(FOURTH_POS);
            endFightFourth();
         }
         if(_curStep == 4 || _curStep == 8)
         {
            stopAtChildFrame(FIFTH_POS);
            endFightFifth();
         }
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86061470);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.AIXINGE,["伊兰迪，你不会被凡域的精灵吓怕了吧！"],["就凭他们吗？哼！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["你不要太狂妄！我们一定会击败你的！"],["尽管来吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.FUL_MOVIE,["heliesi_full",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["就你们两个吗？哈哈哈！这次和我对战，你们小心被我打成零件！"],["顾好你自己吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.HELIESI,["雷纳尔多，我们两个一定要击败这个狂妄的家伙！"],["没问题！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["你们还不明白什么叫做弱者吗？看看你们的样子！凡域的精灵都是没用的废物！"],["伊兰迪，话说的太早了吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.HELIESI,["该是结束你狂妄自大的时候了！伊兰迪，你一定会被我打败的！光芒万丈！"],["赫利厄斯，加油啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.LEINAERDUO,[MainManager.actorInfo.formatNick + "，0xff0000" + timeStr + "，每天下午13:00—14:00，晚上19:00—20:000xffffff！你就作为我们的见证者，我们一定会击败伊兰迪！"],["雷纳尔多，我一定会帮忙的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            if(ToolBarController.panel.panelIsShow)
            {
               KTool.showMapAllPlayerAndMonster();
            }
            OgreController.isShow = false;
            showNpcs();
            SocketConnection.send(1022,86061471);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            _map.depthLevel.visible = true;
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         };
         storyPlayer.start();
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["我说过了，你们凡域的精灵从来都不知道什么叫做真正的强大！"],["那我要看看你的强大！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看！他们释放的能量是有多强大！赫利厄斯和雷纳尔多一定会击败伊兰迪的！"],["我们一起会击败伊兰迪！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            if(cb != null)
            {
               cb();
            }
         };
         storyPlayer.start();
      }
      
      private static function startFightFirst() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
         {
            NpcDialog.show(NPC.YILANDI,["实力的确不容小觑！但是仅仅在凡域！这里还是由我主宰！"],["伊兰迪，不要太狂妄！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FIRST_POS);
            }]);
         });
      }
      
      private static function endFightFirst() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.YILANDI,[MainManager.actorInfo.formatNick + "，暗黑联盟不会就这样被击败的！整个世界都将是我们的！ "],["话说得太早了！"],[function():void
         {
            NpcDialog.show(NPC.LEINAERDUO,["伊兰迪，别以为就这样轻易的赢了，接下来让你见识一下第二领域首领的威力！"],["雷纳尔多，加油啊！"],[function():void
            {
            }]);
         }]);
      }
      
      private static function startFightSecond() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
         {
            NpcDialog.show(NPC.LEINAERDUO,["清楚到底谁才是弱者了吧！爆发吧！幽暗迷宫的能量！"],["雷纳尔多，我来帮你！"],[function():void
            {
               addYellowArrow(SECOND_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightSecond() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.LEINAERDUO,[MainManager.actorInfo.formatNick + "太棒了！我已经感觉浑身充满着能量，伊兰迪，你的末日到了！"],["你太天真了吧！"],[function():void
         {
            NpcDialog.show(NPC.YILANDI,[MainManager.actorInfo.formatNick + "凡域的精灵怎么可能随随便便的击败我！好戏还在后头呢！ "],["可恶！"],[function():void
            {
            }]);
         }]);
      }
      
      private static function startFightThird(param1:uint) : void
      {
         var _name:String = null;
         var step:uint = param1;
         if(step == 2)
         {
            _name = "索兰特";
         }
         if(step == 6)
         {
            _name = "尤米娜";
         }
         if(step == 10)
         {
            _name = "圣光天马";
         }
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,9,"mc9",function():void
         {
            NpcDialog.show(NPC.YILANDI,["我说过了，就凭你的实力，不可能击败我！这个世界将会由我们主宰！"],["伊兰迪，你太狂妄了！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(THIRD_POS);
            }]);
         });
      }
      
      private static function endFightThird() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.YILANDI,[MainManager.actorInfo.formatNick + "，暗黑联盟不会就这样被击败的！整个世界都将是我们的！ "],["痴人说梦！"],[function():void
         {
            NpcDialog.show(NPC.HELIESI,["伊兰迪，别以为就这样轻易的赢了，还有我呢！光芒万丈！"],["赫利厄斯，加油啊！"],[function():void
            {
            }]);
         }]);
      }
      
      private static function startFightFourth() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,10,"mc10",function():void
         {
            NpcDialog.show(NPC.HELIESI,["伊兰迪，你会为你的狂妄自大付出代价的！爆发吧！我的能量！"],["赫利厄斯，我来帮你！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FOURTH_POS);
            }]);
         });
      }
      
      private static function endFightFourth() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.HELIESI,[MainManager.actorInfo.formatNick + "，太棒了！我已经感觉浑身充满着能量，太阳神的能量即将爆发！"],["很可惜你只能到这里了！"],[function():void
         {
            NpcDialog.show(NPC.YILANDI,["别以为我就这样随随便便的被击败了！你们这些弱者！ "],["可恶！"],[function():void
            {
            }]);
         }]);
      }
      
      private static function startFightFifth(param1:uint) : void
      {
         var _name:String = null;
         var step:uint = param1;
         if(step == 4)
         {
            _name = "魔域仙子";
         }
         if(step == 8)
         {
            _name = "巨石灵王";
         }
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,11,"mc11",function():void
         {
            NpcDialog.show(NPC.YILANDI,["我说过了你不可能击败我！我们将主宰整个世界！"],["伊兰迪，你太嚣张了！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FIFTH_POS);
            }]);
         });
      }
      
      private static function endFightFifth() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.YILANDI,[MainManager.actorInfo.formatNick + "，暗黑联盟不会就这样被击败的！整个世界都将是我们的！ "],["话说得太早了！"],[function():void
         {
            NpcDialog.show(NPC.LEINAERDUO,["伊兰迪，别以为就这样轻易的赢了，接下来让你见识一下第二领域首领的威力！"],["雷纳尔多，加油啊！"],[function():void
            {
            }]);
         }]);
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         stopAtChildFrame(9);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.HELIESI,[MainManager.actorInfo.formatNick + ",太棒了！我已经感觉浑身充满着能量，太阳神的能量即将爆发！"],["很可惜你只能到这里了！"]]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["别以为我就这样随随便便的被击败了！你们这些弱者！我是不可战胜的！  "],["可恶！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,[MainManager.actorInfo.formatNick + "你们这些天生就是没用的家伙！想要战胜我！根本不可能！ "],["我们是不会放弃的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            if(cb != null)
            {
               cb();
            }
         };
         storyPlayer.start();
      }
      
      private static function startFinishMc(param1:Function = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         stopAtChildFrame(9);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["怎……怎么可能！不可能！不可能！！！"],["伊兰迪，你输了！"]]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["不……不可能！你们想要战胜我，痴心妄想！不可能！不可能！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哈哈哈！我们击败伊兰迪啦！我要把这个好消息告诉所有的赛尔们！"],["加油吧！正义的伙伴们！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            _map.depthLevel.visible = true;
            if(cb != null)
            {
               cb();
            }
         };
         storyPlayer.start();
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function get adTips() : String
      {
         return "伊兰迪VS赫利厄斯！ 狭路相逢勇者胜，这场战役的胜利者是谁呢？快去空间裂隙吧！立刻前往";
      }
      
      public static function get evoTips() : String
      {
         return "最强精灵超进化对抗赛";
      }
      
      public static function get vsTips() : String
      {
         return "伊兰迪VS赫利厄斯";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 10)
         {
            return "雷纳进化部件，小型升级秘药，一万经验券";
         }
         if(_loc1_ == 11)
         {
            return "小型升级秘药，一万经验券";
         }
         if(_loc1_ == 12)
         {
            return "赫利斯的精元/烈阳光魄，小型升级秘药，一万经验券";
         }
         return "S级技能石，小型升级秘药，一万经验券";
      }
      
      private static function get canBroadcast() : Boolean
      {
         if(time_e3.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT || time_e4.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT)
         {
            return true;
         }
         return false;
      }
      
      private static function get isLastDay() : Boolean
      {
         if(lastDay.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.INCOMING)
         {
            return false;
         }
         return true;
      }
      
      public static function get activeStatus() : String
      {
         if(time_p.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.INCOMING)
         {
            return INCOMING;
         }
         if(time_p1.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.PAST)
         {
            return PAST;
         }
         if(time_p0.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT || time_p1.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
   }
}
