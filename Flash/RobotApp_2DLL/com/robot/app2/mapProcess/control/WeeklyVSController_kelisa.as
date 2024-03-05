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
   import com.robot.core.manager.SystemTimerManager;
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
   
   public class WeeklyVSController_kelisa
   {
      
      public static const TARGET_MAP:uint = 931;
      
      private static const BUFFER_ID:uint = 1156;
      
      private static const FOREVER_ID:uint = 14032;
      
      private static const MARK_ID:uint = 20263;
      
      private static const MARK_TASK:uint = 1587;
      
      private static const ENTER_POS:int = 3;
      
      private static const FIRST_POS:int = 5;
      
      private static const SECOND_POS:int = 7;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginDate:Date = new Date(2016,3 - 1,4);
      
      private static var endDate:Date = new Date(2016,3 - 1,10);
      
      private static var activeTimes:Array = [13,19];
      
      private static const KELISA:String = "kelisa";
      
      private static const YELIMEISI:String = "yelimeisi";
      
      public static const TIME_TXT:String = "3月4日—3月10日，每天中午13：00-14：00，晚上19:00—20:00！";
      
      private static const TIME_STR:String = "0xff0000" + TIME_TXT + "0xffffff";
      
      private static var _widget:MovieClip;
      
      private static var taskMc:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_kelisa()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_kelisa",0,false,null,null,1);
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
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_931_vs_kelisa"),function(param1:MovieClip):void
         {
            taskMc = param1["act_kelisa"];
            _map.conLevel.addChild(taskMc);
            addEvents();
            initEquipAndNPC(_map);
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
         SocketConnection.send(1022,86060764);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_kelisa"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/KelisaEvolutionPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         if(SystemTimerManager.time < beginDate.time / 1000)
         {
            NpcDialog.show(NPC.AIXINGE,["所有的精灵都要完全被我们控制了！整个宇宙都将是我们的！哈哈哈！即便是克利萨和耶里梅斯也不例外！"],["耶里梅斯？天蛇星盟主！"],[function():void
            {
               NpcDialog.show(NPC.AIXINGE,["天蛇星盟主又怎么样？他们只不过是我们的棋子！" + TIME_STR + "前往空间裂隙，你会看到谁才是真正的强大！"],["可恶，你不会得逞的！"],[function():void
               {
               }]);
            }]);
         }
         else if(activeStatus != PAST)
         {
            NpcDialog.show(NPC.AIXINGE,[MainManager.actorInfo.formatNick + "对决的时刻马上就要到了！" + TIME_STR + "来见证克利萨和到耶里梅斯底谁技高一筹吧！"],["不好，我一定要阻止他们！","我准备一下就来！"],[function():void
            {
               MapManager.changeMap(TARGET_MAP);
            }]);
            if(MapManager.currentMap.id == 1)
            {
               SocketConnection.send(1022,86060760);
            }
            else if(MapManager.currentMap.id == 7)
            {
               SocketConnection.send(1022,86060761);
            }
         }
      }
      
      public static function initEquipAndNPC(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86059684);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86059685);
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
         taskMc = null;
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case KELISA:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     isFight = true;
                     FightManager.fightWithBoss("克利萨",_curStep + 0);
                  }
                  else
                  {
                     NpcDialog.show(NPC.KELISA,["耶里梅斯，我会让你看到这个擂台上，我是不会被打倒的。拿出你最强的实力吧！"],["克利萨一定会成功的！"]);
                  }
                  break;
               case YELIMEISI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     isFight = true;
                     FightManager.fightWithBoss("耶里梅斯",_curStep + 0);
                  }
                  else
                  {
                     NpcDialog.show(NPC.YELIMEISI,["发挥你最强的战斗力吧！" + MainManager.actorInfo.formatNick + "记得我和你说的，0xff0000每五分钟0xffffff可以挑战我和克利萨其中一个。"],["我明白了！"]);
                  }
            }
         }
         else
         {
            switch(_loc2_)
            {
               case KELISA:
                  NpcDialog.show(NPC.KELISA,[TIME_STR + "，我一定会证明自己是天马星合格的守护者！天马星不会失败！"],["克利萨，加油啊！"]);
                  break;
               case YELIMEISI:
                  NpcDialog.show(NPC.YELIMEISI,[MainManager.actorInfo.formatNick + "，" + TIME_STR + "来见证我胜利的时刻吧！"],["耶里梅斯，我看好你的！"]);
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
         if(_curStep % 2 == 0)
         {
            stopAtChildFrame(FIRST_POS + 1,1);
            endFightFirst();
         }
         if(_curStep % 2 == 1)
         {
            stopAtChildFrame(SECOND_POS + 1,1);
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.KELISA,["天蛇星盟主，让我见识一下传说中天蛇星的瞳之神能到底有多强吧！"],["尽管来吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["这里充满了逆界的能量，你竟然还能承受！果然实力不俗！让我见识一下天马星守护者的威力！"],["好朋友？哈哈哈！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["你就是你最强的实力吗？看来我高估天马星了！还是趁早离开这里吧！你没办法和逆界之门的精灵对抗！"],["耶里梅斯，话说的太早了！"]]],[TaskStoryPlayer.DIALOG,[NPC.KELISA,[MainManager.actorInfo.formatNick + "，" + TIME_STR + "你就作为我们的见证者，我会证明天马星的守护者绝对不是软弱无能的！"],["黑色天马！加油啊！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.KELISA,["这才刚刚开始！耶里梅斯，我会让你见识到我黑色天马有多强大的！"],["那我就不客气了！"]]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["想要和我对抗，没有强大的实力是不行的！看看强大的你能接我几招！"],["尽管来吧！我不会退缩！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["逆界之门的阴谋已经被识破了。我要提醒大家一起联合起来，抗衡暗黑联盟！"],["抗衡暗黑联盟！"]]]];
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
            NpcDialog.show(NPC.KELISA,["耶里梅斯，怎么样？比你想象中的实力要强吧！"],["克利萨，让我见识你的实力吧！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FIRST_POS);
            }]);
         });
      }
      
      private static function endFightFirst() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.KELISA,[MainManager.actorInfo.formatNick + "，暗黑联盟只有看到我们一直对战，才会认为这里的精灵只懂互相争斗，才会对我们放松警惕，我们才有机会击败他们！ "],["嗯！我明白了！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
            {
               NpcDialog.show(NPC.YELIMEISI,["克利萨，别以为就这样轻易的赢了，接下来让你见识一下什么才是真正的强大！"],["耶里梅斯，加油啊！"],[function():void
               {
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
            NpcDialog.show(NPC.YELIMEISI,["看来我的确高估天马星了！所谓的守护者就是这点实力！认输吧！"],["耶里梅斯，克利萨不会输得！"],[function():void
            {
               addYellowArrow(SECOND_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightSecond() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.YELIMEISI,[MainManager.actorInfo.formatNick + "记住，我们的敌人只有上面的这些暗黑精灵！我一定要击败他们！"],["耶里梅斯，加油啊！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
            {
               NpcDialog.show(NPC.KELISA,[MainManager.actorInfo.formatNick + "我是不会轻易被打败的！尽管来吧！不管你有多强大的实力，都不可能击败我！"],["克利萨，加油啊！"],[function():void
               {
               }]);
            });
         }]);
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         stopAtChildFrame(9);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,["到此为止吧，克利萨！天马星的确实力非凡，但是想要战胜我？痴心妄想！"],["我是不会放弃的！！"]]],[TaskStoryPlayer.DIALOG,[NPC.KELISA,["没到最后，胜负都是未知数。有本事我们再战！"],["你不可能战胜我！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI,[MainManager.actorInfo.formatNick + "我一定会战胜里耶里梅斯，让你看到我们谁才是最强的！"],["明天你再来吧！"]]]];
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
         stopAtChildFrame(11);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.KELISA,["耶里梅斯，怎么样？见识到我天马星的威力了吧！ "],["天马星名不虚传！"]]],[TaskStoryPlayer.DIALOG,[NPC.AIXINGE,["精彩！可是总让你们自己打，看得我都羡慕啊！伊兰迪不如你来一场啊！"],["就凭他们？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["他就是伊兰迪！天啊，情况一发不可收拾了！怎么办？"],["加油吧！正义的伙伴们！！"]]]];
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
      
      public static function get adTips() : String
      {
         return "克利萨VS耶里梅斯 狭路相逢勇者胜，这场战役的胜利者是谁呢？快去空间裂隙吧！立刻前往";
      }
      
      public static function get evoTips() : String
      {
         return "最强精灵超进化对抗赛";
      }
      
      public static function get vsTips() : String
      {
         return "克利萨VS耶里梅斯";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "本轮可获得克利萨的精元/暗夜聚能/天马晶石/神能之力";
         }
         if(_loc1_ == 12)
         {
            return "耶里梅斯的精元/暗夜聚能/神能之光以及十万经验券";
         }
         if(_loc1_ % 2 == 0)
         {
            return "神能之光、S级技能石、一万经验券！";
         }
         return "神能之力、S级技能石、一万经验券！";
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
         var _loc1_:CronTimeVo = new CronTimeVo("*","15-23",endDate.date.toString(),(endDate.month + 1).toString(),"*",endDate.fullYear.toString());
         if(_loc1_.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return false;
         }
         return true;
      }
   }
}
