package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.BroadcastInfo;
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
   
   public class WeeklyVSController_bulukaka
   {
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      private static var _buySkipTime:uint;
      
      private static var _timeState:uint = 0;
      
      public static const TARGET_MAP:uint = 771;
      
      private static const BUFFER_ID:uint = 22440;
      
      private static const FOREVER_ID:uint = 12127;
      
      private static var _startBossId:int = 1316;
      
      private static var _mapAnimate:String = "map_771_0";
      
      private static var _fulMovie:String = "active_20140430_2";
      
      private static var _mainPanel:String = "GeLinEvolveAgainMainPanel";
      
      private static var beginDate:Date = new Date(2015,5 - 1,22);
      
      private static var endDate:Date = new Date(2015,5,28);
      
      private static var activeTimes:Array = [13,19];
      
      private static var timeStr:String = "5月22日—5月28日，13:00-14:00，19:00-20:00";
      
      private static var _reward:String = "布鲁卡卡超进化道具";
      
      private static var _broadcastMsg:String = "布鲁卡卡vs格鲁斯特，超进化的可怕魔咒能否顺利破解？布鲁能否唤醒昔日挚友？  ";
      
      private static var _tipStr:String = "布鲁卡卡VS克鲁斯特";
      
      private static const ENTER_MAP_CODE:int = 86073423;
      
      private static const GET_PRE_TASK_CODE:int = 86073424;
      
      private static const COMPLETE_PRE_TASK_CODE:int = 86073425;
      
      private static const CLICK_MAP_ICON_CODE:int = 86073426;
      
      private static const CLICK_TRANSMIT_CABIN_EQUIP_CODE:int = 86073427;
      
      private static const CLICK_LOOK_CABIN_EQUIP_CODE:int = 86073428;
      
      private static const CLICK_ACTIVE_ICON_CODE:int = 86073429;
      
      private static const FIGHT_START_TIMES_CODE:int = 86073445;
      
      private static const CLICK_MSG_PANEL_GO_CODE:int = 86070654;
      
      private static const CLICK_OPEN_MAIN_UI_CODE:int = 86070654;
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
      
      private static var bosses:Array = [];
       
      
      public function WeeklyVSController_bulukaka()
      {
         super();
      }
      
      private static function startPreTask() : void
      {
         /*
          * Decompilation error
          * Timeout (1 minute) was reached
          * Instruction count: 33
          */
         throw new flash.errors.IllegalOperationError("Not decompiled due to timeout");
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = String(String(param1.target.name).split("_")[0]);
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               if(_loc2_ == "gelusite" && _curStep % 2 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("格鲁斯特",_startBossId + _curStep);
               }
               else if(_loc2_ == "bulukaka" && _curStep % 2 == 1)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("布鲁卡卡",_startBossId + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "gelusite":
                  NpcDialog.show(NPC.GELUSITE,["这个自称是我朋友的家伙到底是谁？胆敢如此不自量力前来挑战。"],["格林，快清醒过来吧。"]);
                  break;
               case "bulukaka":
                  NpcDialog.show(NPC.BULUKAKA,["0xff0000每五分钟0xffffff，就可以帮助我提升能力，或者帮助我打败格鲁斯特，唤回曾经的格林，赛尔，我需要你的帮助。"],["嗯，我们一起加油！"]);
                  break;
               case "bulinkeke":
                  NpcDialog.show(NPC.BULINKEKE,["想要找回那个善良的格林？除非你们能打落它身上的0xff0000魔咒之砂0xffffff。看着这对挚友相互厮杀，真是太有趣了，哈哈。"],["我和布鲁不会让你的阴谋得逞的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "gelusite":
               NpcDialog.show(NPC.GELUSITE,["哈哈！我觉得体内充满了能量！那个自称是我朋友的家伙到底是谁？它要挑战我？" + timeTip + ",哈哈，我正好试试自己全新的能量。"],["格林，快醒过来吧。"]);
               break;
            case "bulukaka":
               NpcDialog.show(NPC.BULUKAKA,["赛尔，我不想失去格林。" + timeTip + ",帮助我，一起唤回格林的理智。"],["嗯嗯，我一定会来的。"]);
               break;
            case "bulinkeke":
               NpcDialog.show(NPC.BULINKEKE,["有意思，有意思。什么友情？还不是不堪一击？赛尔，" + timeTip + ",一场好朋友之间的厮杀即将上演，太期待了。"],["哼，你的阴谋不会得逞的！"]);
         }
      }
      
      private static function addYellowArrow(param1:int) : void
      {
         if(_curStep != param1)
         {
            return;
         }
         CommonUI.removeYellowArrow(_map.topLevel);
         if(param1 % 2 == 0)
         {
            CommonUI.addYellowArrow(_map.topLevel,707,234,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,240,240,0);
         }
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         if(param1 != null)
         {
            param1();
         }
      }
      
      private static function startFight() : void
      {
         var round:int;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         round = _curStep;
         _map.topLevel.visible = false;
         if(round % 2 == 0)
         {
            if(round == 0)
            {
               AnimateManager.playMcAnimate(taskMc,10,"mc",function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
            }
            else
            {
               AnimateManager.playMcAnimate(taskMc,12,"mc",function():void
               {
                  AnimateManager.playMcAnimate(taskMc,10,"mc",function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                  });
               });
            }
         }
         else if(round % 2 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,9,"mc",function():void
            {
               AnimateManager.playMcAnimate(taskMc,13,"mc",function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
            });
         }
      }
      
      private static function endFight() : void
      {
         var round:int = _curStep;
         if(round % 2 == 0)
         {
            NpcDialog.show(NPC.SHENWANGZHOUSI,[nick + "，感谢你的帮助，相信再过不久，我一定可以战胜万神之王克罗诺斯！ "],["恩，我也会继续努力的！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMc,8,"mc",function():void
               {
               });
            }]);
         }
         else if(round % 2 == 1)
         {
            NpcDialog.show(NPC.KULUOLUOSI,[nick + "，没想到你也有如此强大的能量，看来我是小看你们了，下次就没这么幸运了！"],["你是不会得逞的！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMc,11,"mc",function():void
               {
               });
            }]);
         }
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ % 2 == 0)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               stopAtChildFrame(10);
            }
            else
            {
               taskMc.gotoAndStop(8);
            }
         }
         else if(_loc1_ % 2 == 1)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               stopAtChildFrame(13);
            }
            else
            {
               taskMc.gotoAndStop(11);
            }
         }
         else
         {
            stopAtChildFrame(12);
         }
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc"]],[TaskStoryPlayer.DIALOG,[NPC.BULINKEKE,["小家伙，你已经受伤了。还是放弃吧，就让你这个朋友，随我一起追随海妖大人吧！  "],null]],[TaskStoryPlayer.DIALOG,[NPC.BULUKAKA,["我是不会放弃的！赛尔，0xff00005月23日—5月29日13:00-14:00和19:00-20:000xffffff和，我会继续与格鲁斯特对战，你愿意继续帮我吗？"],["当然，我还会来帮助你的!"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
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
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         _map.topLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,15,"mc"]],[TaskStoryPlayer.DIALOG,[NPC.BULINKEKE,["怎么可能？海妖赐予的超进化魔咒是无人能破的！就凭你们这两个小不点...怎么可能？   "],["你永远不懂，友谊和爱的力量！"]]],[TaskStoryPlayer.DIALOG,[NPC.BULINKEKE,["幻境入口降临到裂空星系后，出现各种异常...即便如此，海妖大人是不会食言的，我还是会送你们安全离开这里。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,16,"mc"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.topLevel.visible = true;
            _map.depthLevel.visible = true;
            if(cb != null)
            {
               cb();
            }
            BitBuffSetClass.setState(22451,1);
            MapManager.changeMap(666);
         };
         storyPlayer.start();
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = uint(getCurrRound());
         return "奖励小型升级秘药，海妖之力碎片，一万经验券";
      }
      
      private static function showNpcs() : void
      {
         holdFight();
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_bulukaka",0,false,null,null,1);
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
         if(getCurrRound() == 12 && _fightStatus[11] == 1)
         {
            MapNamePanel.show();
            destroyWidget();
            return;
         }
         MapNamePanel.hide();
         _widget["title"].text = vsTips;
         _widget["txt_info"].text = currentStepTips;
         _widget["round"].text = "第" + getCurrRound() + "轮对战开始";
      }
      
      private static function getCurrRound() : int
      {
         var _loc1_:Date = new Date(SystemTimerManager.sysBJDate.time + _buySkipTime * 1000 + 3 * 1000);
         var _loc2_:int = Math.floor(_loc1_.minutes / 5) + 1;
         return _loc2_ > 12 ? 12 : _loc2_;
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
         StatManager.sendStat2014("超进化魔咒格林超进化绝版再临","点击第" + (_curStep + 1) + "轮icon人次人数",StatManager.RUN_ACT);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            changeMap();
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,CLICK_MAP_ICON_CODE);
         StatManager.sendStat2014("超进化魔咒格林超进化绝版再临","点击星际地图icon",StatManager.RUN_ACT);
         changeMap();
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,CLICK_ACTIVE_ICON_CODE);
         StatManager.sendStat2014("超进化魔咒格林超进化绝版再临","点击活动icon前往活动场景",StatManager.RUN_ACT);
         changeMap();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("超进化魔咒格林超进化绝版再临","进入活动场景",StatManager.RUN_ACT);
         if(MapManager.currentMap.id == TARGET_MAP)
         {
            _map = map;
            KTool.getMultiValue([FOREVER_ID,14075,14076],function(param1:Array):void
            {
               var values:Array = param1;
               _timeState = values[2];
               _buySkipTime = 0;
               if(SystemTimerManager.sysBJDate.hours == activeTimes[0] && _timeState == 1)
               {
                  _buySkipTime = values[1];
               }
               else if(SystemTimerManager.sysBJDate.hours == activeTimes[1] && _timeState == 2)
               {
                  _buySkipTime = values[1];
               }
               StatManager.sendStat2014("圣光天马vs黑天马","进入活动场景",StatManager.RUN_ACT);
               ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
               {
                  taskMc = param1;
                  taskMc.gotoAndStop(taskMc.totalFrames);
                  _map.btnLevel.addChild(taskMc);
                  _map.topLevel.visible = false;
                  addEvents();
                  if(BitBuffSetClass.getState(22451))
                  {
                     destroy();
                  }
                  else
                  {
                     checkActivity();
                  }
               });
            });
         }
      }
      
      public static function initForMap666(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(Boolean(BitBuffSetClass.getState(22451)) && !BitBuffSetClass.getState(22450))
         {
            finishActivtyFor666();
         }
         else
         {
            destroy();
         }
      }
      
      private static function finishActivtyFor666() : void
      {
         _map.conLevel["act"].visible = true;
         AnimateManager.playMcAnimate(_map.conLevel["act"],1,"mc",function():void
         {
            NpcDialog.show(NPC.BULU,["(*^__^*) 嘻嘻...没什么啦，只要你没事就好！太好了，我们可以继续我们的旅行了！"],["哇，你们俩又要开始旅行了吗？"],[function():void
            {
               NpcDialog.show(NPC.GELIN,["对啊对啊，下一站我们要去魔神星，赛尔，谢谢你这段时间的帮助，我们走啦！"],["好啊好啊，再见...我会想你们的。"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["act"],2,"mc",function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120914_2"),function():void
                     {
                        BitBuffSetClass.setState(22450,1);
                        destroy();
                     });
                  });
               }]);
            }]);
         });
      }
      
      private static function addEvents() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         if(taskMc)
         {
            taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
         }
      }
      
      public static function initEquip() : void
      {
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_bulukaka"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
         }
         if(MapManager.currentMap.id == 1)
         {
            StatManager.sendStat2014("卡修斯VS暗夜冰狐超进化","点击传送舱装置",StatManager.RUN_ACT);
         }
         else if(MapManager.currentMap.id == 7)
         {
            StatManager.sendStat2014("卡修斯VS暗夜冰狐超进化","点击瞭望舱装置",StatManager.RUN_ACT);
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
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.LEILINGSHI,[timeTip + _tipStr + "参加活动100%免费获得" + reward],["我一定要去！","我准备一下就来！"],[function():void
         {
            changeMap();
         }]);
         if(MapManager.currentMap.id == 1)
         {
            StatManager.sendStat2014("超进化魔咒格林超进化绝版再临","点击传送舱装置",StatManager.RUN_ACT);
         }
         else if(MapManager.currentMap.id == 7)
         {
            StatManager.sendStat2014("超进化魔咒格林超进化绝版再临","点击瞭望舱装置",StatManager.RUN_ACT);
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
      
      public static function onRefreshTime(param1:SocketEvent = null) : void
      {
         var e:SocketEvent = param1;
         KTool.getMultiValue([FOREVER_ID,14075,14076],function(param1:Array):void
         {
            _timeState = param1[2];
            _buySkipTime = 0;
            if(SystemTimerManager.sysBJDate.hours == activeTimes[0] && _timeState == 1)
            {
               _buySkipTime = param1[1];
            }
            else if(SystemTimerManager.sysBJDate.hours == activeTimes[1] && _timeState == 2)
            {
               _buySkipTime = param1[1];
            }
            checkBoss(param1[0]);
            onIconTimer();
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
         if(BitBuffSetClass.getState(BUFFER_ID))
         {
            showNpcs();
         }
         else
         {
            startPreTask();
         }
      }
      
      private static function stopAtChildFrame(param1:uint, param2:uint = 0) : void
      {
         var frameIndex:uint = param1;
         var subFrameIndex:uint = param2;
         KTool.getFrameMc(taskMc,frameIndex,"mc",function(param1:MovieClip):void
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
      
      private static function checkBoss(param1:int) : void
      {
         var _loc5_:int = 0;
         var _loc6_:uint = 0;
         CommonUI.removeYellowArrow(_map.topLevel);
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(param1);
         _loc2_.position = 0;
         _fightStatus = KTool.readDataByBits(_loc2_,32);
         if(activeStatus == ACTIVE && SystemTimerManager.sysBJDate.hours != activeTimes[0])
         {
            _loc5_ = activeTimes.indexOf(SystemTimerManager.sysBJDate.hours);
            _loc6_ = 0;
            while(_loc6_ < 12)
            {
               _fightStatus[_loc6_] = _fightStatus[12 * _loc5_ + _loc6_];
               _loc6_++;
            }
         }
         if(_fightStatus[11] == 1)
         {
            finishAcitivty();
            return;
         }
         var _loc3_:Date = new Date(SystemTimerManager.sysBJDate.time + _buySkipTime * 1000 + 3 * 1000);
         var _loc4_:int = _loc3_.minutes / 5;
         if(_fightStatus[_loc4_] == 1)
         {
            _curStep = _loc4_;
            holdFight();
         }
         else if(_loc4_ != _curStep)
         {
            _curStep = _loc4_;
            if(_loc4_ == 0)
            {
               startEnterMc(startFight);
            }
            else
            {
               startFight();
            }
         }
         else
         {
            holdFight();
            addYellowArrow(_loc4_);
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         bosses = null;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(_map)
         {
            removeEvents();
            DisplayUtil.removeForParent(taskMc);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
            _taskMc = null;
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         isFight = false;
         if(_curStep >= 11)
         {
            return;
         }
         holdFight();
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
         return "" + _broadcastMsg;
      }
      
      public static function get evoTips() : String
      {
         return _tipStr;
      }
      
      public static function get vsTips() : String
      {
         return _tipStr;
      }
      
      private static function get timeTip() : String
      {
         return TextFormatUtil.getRedTxtInStory(timeStr);
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
         var _loc4_:Date = new Date(_loc3_ + _buySkipTime * 1000);
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
      
      private static function get nick() : String
      {
         return MainManager.actorInfo.formatNick;
      }
      
      private static function get reward() : String
      {
         return TextFormatUtil.getRedTxtInStory(_reward);
      }
   }
}
