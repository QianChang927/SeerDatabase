package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.control.BroadcastController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
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
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class MeyersPrefectivePreViewController
   {
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = 0;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      private static var _buySkipTime:uint;
      
      public static const TARGET_MAP:uint = 10952;
      
      private static const BUFFER_ID:uint = 22885;
      
      private static const FOREVER_ID:uint = 10467;
      
      private static var _startBossId:int = 5184;
      
      private static var _mapAnimate:String = "map_741_0";
      
      private static var _fulMovie:String = "active_20140530_4";
      
      private static var _mainPanel:String = "MeyersPrefectivePreViewMainPanel";
      
      private static var beginDate:Date = new Date(2015,9,25,12);
      
      private static var endDate:Date = new Date(2015,9,29,19);
      
      private static var activeTimes:Array = [12,13,17,18];
      
      private static var _reward:String = "圣灵之爪";
      
      private static var _broadcastMsg:String = " ";
      
      private static var _tipStr:String = "圣灵迈尔斯VS邪灵威斯克";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
      
      private static var bosses:Array = [];
       
      
      public function MeyersPrefectivePreViewController()
      {
         super();
      }
      
      private static function startPreTask() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
         {
            NpcDialog.show(NPC.WEISIKE_SUPER,["我还以为是谁呢，这么大口气，原来是你迈尔斯"],["还轮不到你教训我！"],[function():void
            {
               NpcDialog.show(NPC.WEISIKE_SUPER,["迈尔斯，你还以为你一只圣灵系精灵就代表着绝对的权威吗？如今时代已经变了！现在的你不过是井底之蛙而已！"],[""],[function():void
               {
                  NpcDialog.show(NPC.MAIERSI,["我的力量究竟强不强，这我不知道。但我知道的是，正邪不两立！威斯克，你满手血腥，如今你闯上门来，就让我亲手将你伏法吧！"],[""],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
                     {
                        _map.topLevel.visible = true;
                        KTool.showMapAllPlayerAndMonster();
                        _map.depthLevel.visible = true;
                        LevelManager.iconLevel.visible = true;
                        MapObjectControl.hideOrShowAllObjects(true);
                        taskMc.gotoAndStop(taskMc.totalFrames);
                        BitBuffSetClass.setState(BUFFER_ID,1);
                        showNpcs();
                        SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
                        onCheckStartTime();
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var name:String = null;
         var e:MouseEvent = param1;
         name = String(String(e.target.name).split("_")[0]);
         if(activeStatus == ACTIVE && _curStep < 12)
         {
            KTool.getMultiValue([12326],function(param1:Number):void
            {
               var _loc2_:Number = Number(SystemTimerManager.time);
               if(_loc2_ - param1 > 300)
               {
                  if(name == "sl" && _curStep % 2 == 0 || name == "xl" && _curStep % 2 == 1)
                  {
                     startFight();
                  }
                  else
                  {
                     switch(name)
                     {
                        case "sl":
                           NpcDialog.show(NPC.MAIERSI,[nick + "，来帮助我打败邪皇•威斯克吧！0xff0000每5分钟0xffffff可以挑战我和邪皇•威斯克其中一个！参与活动即可获得0xff0000迈尔斯和迈尔斯完全体的进化道具0xffffff哦！"],["我会继续努力的！"]);
                           break;
                        case "xl":
                           if(!BitBuffSetClass.getState(BUFFER_ID))
                           {
                              startPreTask();
                           }
                           else
                           {
                              NpcDialog.show(NPC.WEISIKE_SUPER,[nick + "，来帮助我打败迈尔斯吧！0xff0000每5分钟0xffffff可以挑战我和迈尔斯其中一个！参与活动即可获得0xff0000迈尔斯和迈尔斯完全体的进化道具0xffffff哦！"],["我会继续努力的！"]);
                           }
                     }
                  }
               }
               else
               {
                  switch(name)
                  {
                     case "sl":
                        NpcDialog.show(NPC.MAIERSI,[nick + "，来帮助我打败威斯克吧！0xff0000每两轮挑战间需要休息5分钟0xffffff，你已经完成了0xff0000" + _curStep + "/120xffffff轮挑战。参与活动即可获得0xff0000迈尔斯和迈尔斯完全体的进化道具0xffffff哦！"],["我会继续努力的！"]);
                        break;
                     case "xl":
                        NpcDialog.show(NPC.WEISIKE_SUPER,[nick + "，来帮助我打败迈尔斯吧！0xff0000每两轮挑战间需要休息5分钟0xffffff，你已经完成了0xff0000" + _curStep + "/120xffffff挑战。参与活动即可获得0xff0000迈尔斯和迈尔斯完全体的进化道具0xffffff哦！"],["我会继续努力的！"]);
                  }
               }
            });
            return;
         }
         if(BitBuffSetClass.getState(BUFFER_ID))
         {
            switch(name)
            {
               case "sl":
                  NpcDialog.show(NPC.MAIERSI,["0xff00009月25日—9月29日，12:00-14:00；17:00-19:000xffffff，我会在此与迈尔斯展开较量！究竟谁的力量更强，等你来揭晓！参与活动即可获得0xff0000迈尔斯和迈尔斯完全体的进化道具0xffffff哦！9月30日，迈尔斯完全体即将登场！"],["我一定会来的！"]);
                  break;
               case "xl":
                  NpcDialog.show(NPC.WEISIKE_SUPER,["0xff00009月25日—9月29日，12:00-14:00；17:00-19:000xffffff，我会在此与威斯克展开较量！究竟谁的力量更强，等你来揭晓！参与活动即可获得0xff0000迈尔斯和迈尔斯完全体的进化道具0xffffff哦！9月30日，我将以完全体形态即将登场！"],["我一定会来的！"]);
            }
         }
         else
         {
            startPreTask();
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
            CommonUI.addYellowArrow(_map.topLevel,150,150,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,505,275,0);
         }
         _map.topLevel.visible = true;
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
         var round:int = 0;
         BonusController.addDelay(1482);
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = false;
         _map.depthLevel.visible = false;
         round = _curStep;
         _map.topLevel.visible = false;
         if(round % 2 == 0)
         {
            if(round == round)
            {
               if(!BitBuffSetClass.getState(BUFFER_ID))
               {
                  startPreTask();
               }
               else
               {
                  AnimateManager.playMcAnimate(taskMc,4,"mc",function():void
                  {
                     NpcDialog.show(NPC.MAIERSI,["想不到你也有不俗的实力！不错，值得我认真出手了！当前为第0xff0000" + Number(round + 1) + "/120xffffff轮挑战。"],["尽管放马过来！","我再准备一下"],[function():void
                     {
                        _map.depthLevel.visible = true;
                        taskMc.gotoAndStop(taskMc.totalFrames);
                        LevelManager.iconLevel.visible = true;
                        CommonUI.removeYellowArrow(_map.topLevel);
                        KTool.showMapAllPlayerAndMonster();
                        FightManager.fightNoMapBoss("迈尔斯",_startBossId + _curStep % 2);
                     },function():void
                     {
                        _map.depthLevel.visible = true;
                        taskMc.gotoAndStop(taskMc.totalFrames);
                        LevelManager.iconLevel.visible = true;
                        CommonUI.removeYellowArrow(_map.topLevel);
                        KTool.showMapAllPlayerAndMonster();
                        SocketConnection.send(CommandID.SYSTEM_TIME);
                     }]);
                  });
               }
            }
            else
            {
               _map.depthLevel.visible = true;
               taskMc.gotoAndStop(taskMc.totalFrames);
               NpcDialog.show(NPC.MAIERSI,["想不到你也有不俗的实力！不错，值得我认真出手了！当前为第0xff0000" + Number(round + 1) + "/120xffffff轮挑战。"],["尽管放马过来！","我先准备一下。"],[function():void
               {
                  _map.depthLevel.visible = true;
                  taskMc.gotoAndStop(taskMc.totalFrames);
                  CommonUI.removeYellowArrow(_map.topLevel);
                  KTool.showMapAllPlayerAndMonster();
                  LevelManager.iconLevel.visible = true;
                  FightManager.fightNoMapBoss("迈尔斯",_startBossId + _curStep % 2);
               },function():void
               {
                  _map.depthLevel.visible = true;
                  taskMc.gotoAndStop(taskMc.totalFrames);
                  CommonUI.removeYellowArrow(_map.topLevel);
                  LevelManager.iconLevel.visible = true;
                  KTool.showMapAllPlayerAndMonster();
                  SocketConnection.send(CommandID.SYSTEM_TIME);
               }]);
            }
         }
         else if(round % 2 == 1)
         {
            if(round == round)
            {
               AnimateManager.playMcAnimate(taskMc,3,"mc",function():void
               {
                  NpcDialog.show(NPC.WEISIKE_SUPER,["还算不错嘛，没有堕了圣灵系的名头！刚才只是试探攻击，接下来我要动真格的了！当前为第0xff0000" + Number(round + 1) + "/120xffffff轮挑战。"],["尽管放马过来！","我再准备一下"],[function():void
                  {
                     _map.depthLevel.visible = true;
                     taskMc.gotoAndStop(taskMc.totalFrames);
                     CommonUI.removeYellowArrow(_map.topLevel);
                     KTool.showMapAllPlayerAndMonster();
                     LevelManager.iconLevel.visible = true;
                     FightManager.fightNoMapBoss("威斯克",_startBossId + _curStep % 2);
                  },function():void
                  {
                     _map.depthLevel.visible = true;
                     taskMc.gotoAndStop(taskMc.totalFrames);
                     CommonUI.removeYellowArrow(_map.topLevel);
                     LevelManager.iconLevel.visible = true;
                     KTool.showMapAllPlayerAndMonster();
                     SocketConnection.send(CommandID.SYSTEM_TIME);
                  }]);
               });
            }
            else
            {
               NpcDialog.show(NPC.WEISIKE_SUPER,["还算不错嘛，没有堕了圣灵系的名头！刚才只是试探攻击，接下来我要动真格的了！当前为第0xff0000" + Number(round + 1) + "/120xffffff轮挑战。"],["尽管放马过来！","我再准备一下"],[function():void
               {
                  _map.depthLevel.visible = true;
                  taskMc.gotoAndStop(taskMc.totalFrames);
                  CommonUI.removeYellowArrow(_map.topLevel);
                  KTool.showMapAllPlayerAndMonster();
                  LevelManager.iconLevel.visible = true;
                  FightManager.fightNoMapBoss("威斯克",_startBossId + _curStep % 2);
               },function():void
               {
                  _map.depthLevel.visible = true;
                  taskMc.gotoAndStop(taskMc.totalFrames);
                  LevelManager.iconLevel.visible = true;
                  CommonUI.removeYellowArrow(_map.topLevel);
                  KTool.showMapAllPlayerAndMonster();
                  SocketConnection.send(CommandID.SYSTEM_TIME);
               }]);
            }
         }
      }
      
      private static function endFight() : void
      {
         taskMc.gotoAndStop(taskMc.totalFrames);
      }
      
      private static function holdFight() : void
      {
         taskMc.gotoAndStop(taskMc.totalFrames);
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         LevelManager.iconLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.WEISIKE_SUPER,["接招！"],[""]]],[TaskStoryPlayer.DIALOG,[NPC.MAIERSI,["哼！"],[""]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc"]],[TaskStoryPlayer.DIALOG,[NPC.MAIERSI,["今日天色已晚，不如各自稍作休整，再做继续，如何？！"],[""]]],[TaskStoryPlayer.DIALOG,[NPC.WEISIKE_SUPER,["也好！老时间老地点，可别忘了哦！0xff00009月25日—9月29日，12:00-14:00；17:00-19:000xffffff，较量继续！"],["我一定会来的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            BonusController.showDelayBonus(1482);
            KTool.showMapAllPlayerAndMonster();
            CommonUI.removeYellowArrow(_map.topLevel);
            LevelManager.iconLevel.visible = true;
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
         LevelManager.iconLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc"]],[TaskStoryPlayer.DIALOG,[NPC.WEISIKE_SUPER,["哼，你还想挣扎？"],[""]]],[TaskStoryPlayer.DIALOG,[NPC.MAIERSI,["我修炼多年，终于在刚才的战斗中领悟了成为完全体的力量！0xff00009月30日，便是我完全体觉醒的日子0xffffff！我会让你明白，邪恶，终究不能战胜正义！"],["那我便等着！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            BonusController.showDelayBonus(1482);
            KTool.showMapAllPlayerAndMonster();
            CommonUI.removeYellowArrow(_map.topLevel);
            _map.topLevel.visible = true;
            _map.depthLevel.visible = true;
            LevelManager.iconLevel.visible = true;
            if(cb != null)
            {
               cb();
            }
            MapManager.changeMap(10952);
         };
         storyPlayer.start();
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = uint(getCurrRound());
         if(_loc1_ == 11 || _loc1_ == 12)
         {
            return "奖励泰坦之灵X300，霜之哀伤X1，十万经验券";
         }
         return "奖励泰坦之灵X300，霜之哀伤X1，一万经验券";
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
         if(getCurrRound() == 12 && _fightStatus && _fightStatus[11] == 1)
         {
            MapNamePanel.show();
            destroyWidget();
            return;
         }
         MapNamePanel.hide();
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
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            changeMap();
         }
      }
      
      public static function clickVSAd() : void
      {
         changeMap();
      }
      
      public static function clickTextAd() : void
      {
         changeMap();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(MapManager.currentMap.id == TARGET_MAP)
         {
            _map = map;
            KTool.getMultiValue([FOREVER_ID],function(param1:Array):void
            {
               var values:Array = param1;
               ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
               {
                  taskMc = param1;
                  taskMc.gotoAndStop(taskMc.totalFrames);
                  taskMc["sl"];
                  SocketConnection.send(CommandID.SYSTEM_TIME);
                  _map.btnLevel.addChild(taskMc);
                  _map.topLevel.visible = false;
                  addEvents();
                  checkActivity();
               },"movie");
            });
         }
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/MeyersPrefectiveLetter"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
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
         changeMap();
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
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
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
         CommonUI.removeYellowArrow(_map.topLevel);
      }
      
      private static function onCheckStartTime(param1:SocketEvent = null) : void
      {
         if(activeStatus == ACTIVE)
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            startActivity();
         }
      }
      
      public static function onRefreshTime(param1:SocketEvent = null) : void
      {
         checkBoss();
         onIconTimer();
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
         showNpcs();
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
      
      private static function checkBoss(param1:int = 0) : void
      {
         var value:int = param1;
         _fightStatus = new Array();
         KTool.getMultiValue([12324],function(param1:Array):void
         {
            var _loc2_:int = 0;
            while(_loc2_ < 12)
            {
               _fightStatus[_loc2_] = param1[0] > _loc2_ ? 1 : 0;
               _loc2_++;
            }
            _curStep = param1[0];
         });
         if(activeStatus == ACTIVE && SystemTimerManager.sysBJDate.hours != activeTimes[0] && SystemTimerManager.sysBJDate.hours != activeTimes[1])
         {
            KTool.getMultiValue([12325],function(param1:Array):void
            {
               var _loc2_:int = 0;
               while(_loc2_ < 12)
               {
                  _fightStatus[_loc2_] = param1[0] > _loc2_ ? 1 : 0;
                  _loc2_++;
               }
               _curStep = param1[0];
            });
         }
         holdFight();
         if(_curStep < 12)
         {
            addYellowArrow(_curStep);
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
            _map = null;
            _taskMc = null;
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         isFight = false;
         if(_curStep > 11)
         {
            finishAcitivty();
         }
         else if(_curStep % 2 == 0)
         {
            NpcDialog.show(NPC.MAIERSI,[nick + "，你也挺有两把刷子的嘛！0xff0000每5分钟0xffffff可以挑战我和迈尔斯其中一个！参与活动即可获得0xff0000迈尔斯和迈尔斯完全体的进化道具0xffffff哦！"],["我会继续努力的！"],[function():void
            {
               BonusController.showDelayBonus(1482);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.WEISIKE_SUPER,[nick + "，你也挺有两把刷子的嘛！0xff0000每5分钟0xffffff可以挑战我和迈尔斯其中一个！参与活动即可获得0xff0000迈尔斯和迈尔斯完全体的进化道具0xffffff哦！"],["我会继续努力的！"],[function():void
            {
               BonusController.showDelayBonus(1482);
            }]);
         }
         holdFight();
         SocketConnection.send(CommandID.SYSTEM_TIME);
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
         var _loc1_:Date = new Date(beginDate.fullYear,beginDate.month - 1,beginDate.date,activeTimes[0]);
         var _loc2_:Date = new Date(endDate.fullYear,endDate.month - 1,endDate.date,activeTimes[activeTimes.length - 1] + 1);
         var _loc3_:Number = Number(SystemTimerManager.sysBJDate.time);
         var _loc4_:Date = new Date(_loc3_);
         if(SystemTimerManager.sysBJDate.time < _loc1_.time)
         {
            return INCOMING;
         }
         if(SystemTimerManager.sysBJDate.time > _loc2_.time)
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
         var _loc1_:Date = new Date(2015,9 - 1,29,17,0,0,0);
         if(SystemTimerManager.sysBJDate.time > _loc1_.time)
         {
            return true;
         }
         return false;
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
