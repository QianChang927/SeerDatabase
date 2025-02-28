package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
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
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyVSController_yelimeisi
   {
      
      public static const TARGET_MAP:uint = 931;
      
      private static const BUFFER_ID:uint = 1170;
      
      private static const FOREVER_ID:uint = 14131;
      
      private static const BOSS_ID:uint = 1815;
      
      private static const MARK_ID:uint = 20263;
      
      private static const MARK_TASK:uint = 1587;
      
      private static const ENTER_POS:int = 3;
      
      private static const FIRST_POS:int = 5;
      
      private static const SECOND_POS:int = 7;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginDate:Date = new Date(2015,8 - 1,7);
      
      private static var endDate:Date = new Date(2015,8 - 1,13);
      
      private static var activeTimes:Array = [13,19];
      
      private static const HUANGJINTIANMA:String = "huangjingtianma";
      
      private static const YELIMEISI:String = "yelimeisi";
      
      private static const _timeStr:String = "8月7日—8月13日，13:00-14:00,19:00-20:00";
      
      private static var _mainPanel:String = "TwelveRounds/HuangjintianmaVsYilimeisiPanel";
      
      private static var _mapAnimate:String = "map_931_0";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_yelimeisi()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_yelimeisi",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86060765);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86060759);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86060762);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.btnLevel.addChild(taskMc);
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
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_yelimeisi"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.HUANGJINTIANMA,[timeTip + ";黄金天马VS耶里梅斯，赌上天马家族的荣耀，我必将获胜！"],["可以获得黄金天马了，我一定要去！","我准备一下就来！"],[function():void
         {
            changeMap();
         }]);
         if(MapManager.currentMap.id != 1)
         {
            if(MapManager.currentMap.id == 7)
            {
            }
         }
      }
      
      private static function changeMap() : void
      {
         if(TARGET_MAP < 10000)
         {
            MapManager.changeMap(TARGET_MAP);
         }
         else
         {
            MapManager.changeLocalMap(TARGET_MAP);
         }
      }
      
      public static function initEquipAndNPC(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id != 1)
         {
            if(MapManager.currentMap.id == 7)
            {
            }
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
         var _loc1_:Function = null;
         var _loc2_:Function = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         destroyWidget();
         if(!isLastDay)
         {
            _loc2_ = checkPreTask;
            _loc1_ = startOverMc;
         }
         else
         {
            _loc2_ = destroy;
            _loc1_ = startFinishMc;
         }
         _loc1_(_loc2_);
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
         KTool.getLimitNum(FOREVER_ID,function(param1:int):void
         {
            checkBoss(param1);
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
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.showMapAllPlayerAndMonster();
         if(param1 == FIRST_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,475,225,0);
         }
         else if(param1 == SECOND_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,475,225,0);
         }
      }
      
      private static function setFirstBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(FIRST_POS + 1);
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
            stopAtChildFrame(SECOND_POS + 1);
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
      
      private static function checkBoss(param1:int) : void
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
         var _loc3_:uint = SystemTimerManager.sysBJDate.minutes / 5;
         if(_loc3_ % 2 == 0)
         {
            setFirstBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
         else if(_loc3_ % 2 == 1)
         {
            setSecondBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
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
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case YELIMEISI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("耶里梅斯",_curStep + BOSS_ID);
                  }
                  else
                  {
                     NpcDialog.show(NPC.YELIMEISI,["发挥你最强的战斗力吧！" + MainManager.actorInfo.formatNick + "记得我和你说的，0xff0000每5分钟0xffffff可以挑战我们其中一个。"],["我明白了！"]);
                  }
                  break;
               case HUANGJINTIANMA:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("黄金天马",_curStep + BOSS_ID);
                  }
                  else
                  {
                     NpcDialog.show(NPC.HUANGJINTIANMA,["耶里梅斯，我会让你看到这个擂台上，我是不会被打倒的。拿出你最强的实力吧！"],["黄金天马一定会成功的！"]);
                  }
            }
         }
         else
         {
            switch(_loc2_)
            {
               case HUANGJINTIANMA:
                  NpcDialog.show(NPC.HUANGJINTIANMA,[timeTip + "；我将代表天马一族打败天蛇星盟主耶里梅斯！0xff0000参加活动100%获得黄金天马，耶里梅斯精元！0xffffff"],["我一定会来的！"]);
                  break;
               case YELIMEISI:
                  NpcDialog.show(NPC.YELIMEISI,[timeTip + "；我将迎来黄金天马的挑战！0xff0000参加活动100%获得黄金天马，耶里梅斯！0xffffff"],["我一定会来的！"]);
            }
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         isFight = false;
         StatManager.sendStat2014("强强对决！黄金天马VS耶里梅斯","参加第" + (_curStep + 1).toString() + "轮",StatManager.RUN_ACT);
         if(_curStep >= 11)
         {
            return;
         }
         if(_curStep % 2 == 0)
         {
            stopAtChildFrame(FIRST_POS + 1);
            endFightFirst();
         }
         if(_curStep % 2 == 1)
         {
            stopAtChildFrame(SECOND_POS + 1);
            endFightSecond();
         }
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86060757);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["你是天马一族的最强战力——黄金天马？"],["对！没错！就是我！！！"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["听说你得到了圣剑，我就想来会会你！"],["就算没有圣剑，你也不是我的对手！！！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["没想到你还是挺能干的啊！"],["才知道么！"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["蔑视天马一族的人我都不会放过！包括你梅里耶斯！"],["来！再战300回合！！！"]]]];
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
            SocketConnection.send(1022,86060758);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            _map.depthLevel.visible = true;
            ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["这才刚刚开始！耶里梅斯，我会让你见识到我黄金天马有多强大的！"],["那我就不客气了！"]]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["想要和我对抗，没有强大的实力是不行的！看看强大的你能接我几招！"],["尽管来吧！我不会退缩！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["两位强者的对决真是精彩，究竟谁能获胜呢？"],["我会见证到最后的！"]]]];
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
         AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
         {
            NpcDialog.show(NPC.YELIMEISI,["看来我的确高估天马一族了！所谓的守护者就是这点实力！认输吧！"],["耶里梅斯，黄金天马不会输的！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FIRST_POS);
            }]);
         });
      }
      
      private static function endFightFirst() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.YELIMEISI,[MainManager.actorInfo.formatNick + "，记住，我的目标是消灭一切的邪恶，我不能在这里就躺下！"],["耶里梅斯，加油啊！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
            {
               NpcDialog.show(NPC.HUANGJINTIANMA,[MainManager.actorInfo.formatNick + "，我是不会轻易被打败的！尽管来吧！不管你有多强大的实力，都不可能击败我！"],["黄金天马，加油啊！"],[function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               }]);
            });
         }]);
      }
      
      private static function startFightSecond() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
         {
            NpcDialog.show(NPC.HUANGJINTIANMA,["耶里梅斯，怎么样？比你想象中的实力要强吧！"],["黄金天马，让我见识你的实力吧！"],[function():void
            {
               addYellowArrow(SECOND_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightSecond() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.HUANGJINTIANMA,[MainManager.actorInfo.formatNick + "，身为天马一族的最强战力，我绝对不能输！"],["嗯！我明白了！"],[function():void
         {
            KTool.showMapAllPlayerAndMonster();
         }]);
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         stopAtChildFrame(9);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["到此为止吧，黄金天马！天马一族的确实力非凡，但是想要战胜我？痴心妄想！"],["我是不会放弃的！！"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["没到最后，胜负都是未知数。有本事我们再战！"],["你不可能战胜我！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,[MainManager.actorInfo.formatNick + "空间裂隙的争斗先告一段落，但是我感觉庞贝古城聚集着巨大的暗黑能量，你快去帮忙看一下吧！"],["好的。我马上就去！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            if(cb != null)
            {
               cb();
            }
            MapManager.changeLocalMap(10487);
         };
         storyPlayer.start();
      }
      
      private static function startFinishMc(param1:Function = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         stopAtChildFrame(11);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["耶里梅斯，怎么样？见识到我天马星的威力了吧！ "],["天马星名不虚传！"]]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["既然这次交手不分高下，那就换个地方再看看各自的本事吧！"],["你说得对！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["他就是伊兰迪！天啊，情况一发不可收拾了！怎么办？"],["加油吧！正义的伙伴们！！"]]]];
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
         return "黄金天马VS耶里梅斯！一起帮助黄金天马擢升王者之路！黄金天马来就领！立刻前往";
      }
      
      public static function get vsTips() : String
      {
         return "黄金天马VS耶里梅斯";
      }
      
      private static function get timeTip() : String
      {
         return TextFormatUtil.getRedTxtInStory(_timeStr);
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "可获得强者之证×2、小型升级秘药及十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "可获得强者之证×3、小型升级秘药及十万经验券";
         }
         if(_loc1_ % 2 == 0)
         {
            return "可获得强者之证、小型升级秘药及一万经验券！";
         }
         return "可获得S级技能石、小型升级秘药及一万经验券！";
      }
      
      private static function get canBroadcast() : Boolean
      {
         var _loc1_:Date = new Date(endDate.fullYear,endDate.month,endDate.date,23,59);
         if(SystemTimerManager.sysBJDate.time > beginDate.time && SystemTimerManager.sysBJDate.time < _loc1_.time)
         {
            if(activeTimes.indexOf(SystemTimerManager.sysBJDate.hours + 1) >= 0 && SystemTimerManager.sysBJDate.minutes > 54)
            {
               return true;
            }
         }
         return false;
      }
      
      public static function get activeStatus() : String
      {
         var _loc1_:Date = new Date(beginDate.fullYear,beginDate.month,beginDate.date,activeTimes[0]);
         var _loc2_:Date = new Date(endDate.fullYear,endDate.month,endDate.date,activeTimes[activeTimes.length - 1] + 1);
         var _loc3_:Number = Number(SystemTimerManager.sysBJDate.time);
         var _loc4_:Date = new Date(_loc3_);
         if(SystemTimerManager.sysBJDate.time < _loc1_.time)
         {
            return INCOMING;
         }
         if(_loc4_.time > _loc2_.time)
         {
            return PAST;
         }
         if(activeTimes.indexOf(_loc4_.hours) >= 0)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
      
      private static function get isLastDay() : Boolean
      {
         var _loc1_:CronTimeVo = new CronTimeVo("*","*",endDate.date.toString(),(endDate.month + 1).toString(),"*",endDate.fullYear.toString());
         if(_loc1_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return false;
         }
         return true;
      }
   }
}
