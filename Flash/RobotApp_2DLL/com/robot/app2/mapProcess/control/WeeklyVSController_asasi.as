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
   
   public class WeeklyVSController_asasi
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
      
      public static const TARGET_MAP:uint = 1000;
      
      private static const BUFFER_ID:uint = 22454;
      
      private static const FOREVER_ID:uint = 10467;
      
      private static var _startBossId:int = 1393;
      
      private static var _mapAnimate:String = "map_1000_0";
      
      private static var _fulMovie:String = "active_20140530_4";
      
      private static var _mainPanel:String = "TwelveRounds/AsasiVSBosaidongMainPanel";
      
      private static var beginDate:Date = new Date(2015,11 - 1,27);
      
      private static var endDate:Date = new Date(2015,12 - 1,3);
      
      private static var activeTimes:Array = [13,19];
      
      private static var timeStr:String = "0xff000011月27日—12月3日，13:00-14:00，19:00-20:000xffffff";
      
      private static var _reward:String = "霜之哀伤";
      
      private static var _broadcastMsg:String = "阿萨斯VS波塞冬，冰封山巅的王者之战！狭路相逢勇者胜！精元、强力刻印、超强特性，奖励多少，由你决定！ ";
      
      private static var _tipStr:String = "阿萨斯VS波塞冬";
      
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
       
      
      public function WeeklyVSController_asasi()
      {
         super();
      }
      
      private static function startPreTask() : void
      {
         StatManager.sendStat2014("冰封山巅的王者之战","参与前置任务",StatManager.RUN_ACT);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,1,"mc",function():void
         {
            NpcDialog.show(NPC.BOSAIDONG,["当你手中握起哀伤之剑的那一刻，你就已经背叛了暗夜城的誓言！内心巨大的杀戮已经让你不再是原先的暗夜公爵！"],["还轮不到你教训我！"],[function():void
            {
               NpcDialog.show(NPC.ASASI,["我的命运就是为了复兴暗夜城而征战一生！我从来没有忘记过，暗夜城被神域的那些家伙摧毁的那一刻！"],["但是你带来了更多的亡灵！"],[function():void
               {
                  NpcDialog.show(NPC.BOSAIDONG,["魔灵王将魔石能量注入哀伤之剑，从而激发你内心的杀戮！你早已经成为魔灵王的傀儡！"],["闭嘴！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMc,2,"mc",function():void
                     {
                        NpcDialog.show(NPC.ASASI,["如今我的哀伤之剑充满能量！不管是谁，都无法阻挡我！我就是世界的王！"],["狂妄的家伙！"],[function():void
                        {
                           NpcDialog.show(NPC.BOSAIDONG,["你早已经被仇恨蒙蔽的双眼！在你看来，只有杀戮才能解决一切！阿萨斯，苏醒吧！"],["一派胡言！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMc,3,"mc",function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(_fulMovie),function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMc,4,"mc",function():void
                                    {
                                       _map.topLevel.visible = true;
                                       KTool.showMapAllPlayerAndMonster();
                                       _map.depthLevel.visible = true;
                                       showNpcs();
                                       BitBuffSetClass.setState(BUFFER_ID,1);
                                       ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
                                       SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
                                       onCheckStartTime();
                                       SocketConnection.send(1022,COMPLETE_PRE_TASK_CODE);
                                       StatManager.sendStat2014("阿萨斯VS波塞冬","完成前置任务",StatManager.RUN_ACT);
                                    });
                                 });
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = String(String(param1.target.name).split("_")[0]);
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               if(_loc2_ == "asasi" && _curStep % 2 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("阿萨斯",_startBossId + _curStep);
                  return;
               }
               if(_loc2_ == "bosaidong" && _curStep % 2 == 1)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("波塞冬",_startBossId + _curStep);
                  return;
               }
            }
            switch(_loc2_)
            {
               case "asasi":
                  NpcDialog.show(NPC.ASASI,[nick + "，你实力不错！不过也休想阻挡我！让开！"],["我不会放弃的！"]);
                  break;
               case "bosaidong":
                  NpcDialog.show(NPC.BOSAIDONG,[nick + "0xffffff，与我一起抵抗阿萨斯吧！参加活动收集“霜之哀伤”，100%获得精元、强力刻印，更能够激活超强特性，攻击力提升8%！"],["我会继续努力的！"]);
                  break;
               case "moling":
                  NpcDialog.show(NPC.MOLINGKING,[nick + "0xffffff，来见证阿萨斯与波塞冬的王者之战吧！参加活动收集“霜之哀伤”，100%获得精元、强力刻印，更能够激活超强特性，攻击力提升8%！"],["我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "asasi":
               NpcDialog.show(NPC.ASASI,[timeStr + "来见证我与波塞冬的决战吧！参加活动收集“霜之哀伤”，100%获得精元、强力刻印，更能够激活超强特性，攻击力提升8%！"],["我一定会来的！"],[openAsasi]);
               break;
            case "bosaidong":
               NpcDialog.show(NPC.BOSAIDONG,[timeStr + "来见证我与阿萨斯的决战吧！参加活动收集“霜之哀伤”，100%获得精元、强力刻印，更能够激活超强特性，攻击力提升8%！"],["我一定会来的！"],[openAsasi]);
               break;
            case "moling":
               NpcDialog.show(NPC.MOLINGKING,[timeStr + "来见证阿萨斯与波塞冬的决战吧！参加活动收集“霜之哀伤”，100%获得精元、强力刻印，更能够激活超强特性，攻击力提升8%！"],["我一定会来的！"],[openAsasi]);
               break;
            case "yiluoweiqi":
               NpcDialog.show(NPC.YELIMEISI_XIE,[timeStr + "来见证阿萨斯与波塞冬的决战吧！参加活动收集“霜之哀伤”，100%获得精元、强力刻印，更能够激活超强特性，攻击力提升8%！"],["我一定会来的！"],[openAsasi]);
         }
      }
      
      private static function openAsasi() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/AsasiVSBosaidongAsasiPanel"));
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
            CommonUI.addYellowArrow(_map.topLevel,164,345,315);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,788,339,45);
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
         var round:int;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         round = _curStep;
         _map.topLevel.visible = false;
         if(round % 2 == 0)
         {
            if(round == 0)
            {
               AnimateManager.playMcAnimate(taskMc,5,"mc",function():void
               {
                  NpcDialog.show(NPC.ASASI,["怎么办！阿萨斯被魔石的能量控制，已经彻底失去理智了！波塞冬能不能够的当他的攻击呀！"],["父亲大人！"],[function():void
                  {
                     NpcDialog.show(NPC.BOSAIDONG,["你清醒点！所有一切的争斗都已经过去了！现在的暗夜城子民需要的是安宁！"],["闭嘴！"],[function():void
                     {
                        NpcDialog.show(NPC.ASASI,["谁都不能阻挡我！我要为了暗夜城的复兴，战斗的最后一刻！"],["那就来吧！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
                           {
                              _map.depthLevel.visible = true;
                              taskMc.gotoAndStop(12);
                              NpcDialog.show(NPC.ASASI,["波塞冬，不想灭亡的话，就赶紧离开这里！我的哀伤之剑可不会对你手下留情！  "],["来吧，我不会畏惧！（点击直接进入对战）","我先准备一下。"],[function():void
                              {
                                 CommonUI.removeYellowArrow(_map.topLevel);
                                 KTool.showMapAllPlayerAndMonster();
                                 FightManager.fightNoMapBoss("阿萨斯",_startBossId + _curStep);
                              },function():void
                              {
                                 addYellowArrow(_curStep);
                                 addEvents();
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
            }
            else
            {
               AnimateManager.playMcAnimate(taskMc,6,"mc",function():void
               {
                  _map.depthLevel.visible = true;
                  taskMc.gotoAndStop(12);
                  NpcDialog.show(NPC.ASASI,["波塞冬，不想灭亡的话，就赶紧离开这里！我的哀伤之剑可不会对你手下留情！  "],["来吧，我不会畏惧！（点击直接进入对战）","我先准备一下。"],[function():void
                  {
                     CommonUI.removeYellowArrow(_map.topLevel);
                     KTool.showMapAllPlayerAndMonster();
                     FightManager.fightNoMapBoss("阿萨斯",_startBossId + _curStep);
                  },function():void
                  {
                     addYellowArrow(_curStep);
                     addEvents();
                  }]);
               });
            }
         }
         else if(round % 2 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,7,"mc",function():void
            {
               _map.depthLevel.visible = true;
               taskMc.gotoAndStop(12);
               NpcDialog.show(NPC.BOSAIDONG,["阿萨斯，放弃你的野心吧！不要再被魔灵王控制了！你可以带领暗夜城强大起来的！"],["让我见识你的实力！（点击直接进入对战）","我先准备一下。"],[function():void
               {
                  CommonUI.removeYellowArrow(_map.topLevel);
                  KTool.showMapAllPlayerAndMonster();
                  FightManager.fightNoMapBoss("波塞冬",_startBossId + _curStep);
               },function():void
               {
                  addYellowArrow(_curStep);
                  addEvents();
               }]);
            });
         }
      }
      
      private static function endFight() : void
      {
         taskMc.gotoAndStop(12);
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ % 2 == 0)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               stopAtChildFrame(6);
            }
            else
            {
               taskMc.gotoAndStop(12);
            }
         }
         else if(_loc1_ % 2 == 1)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               stopAtChildFrame(7);
            }
            else
            {
               taskMc.gotoAndStop(12);
            }
         }
         else
         {
            stopAtChildFrame(7);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.BOSAIDONG,["阿萨斯，今天就到这里了！你最好收起你的野心！不要再被魔石的能量迷惑了！"],["还轮不到你教训我！"]]],[TaskStoryPlayer.DIALOG,[NPC.ASASI,["别以为你能够阻挡我！当我手中握起哀伤之剑的那一刻开始，我就无人可挡！我要让神域为了曾经的行为付出代价！"],["看来阿萨斯完全不听劝告？"]]],[TaskStoryPlayer.DIALOG,[NPC.BOSAIDONG,[nick + "，来见证我与阿萨斯的决战吧！" + timeStr + "！"],["不会忘，我会回来的！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc"]],[TaskStoryPlayer.DIALOG,[NPC.MOLINGKING,["谁都不能够阻挡暗夜城的复兴！就算是你——伊洛维奇！也不可以！"],["可恶！"]]],[TaskStoryPlayer.DIALOG,[NPC.YELIMEISI_XIE,["父亲大人！魔灵王一直在欺骗你！你不要被他蒙蔽了！暗夜城会被他毁灭的！"],["一派胡言！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc"]],[TaskStoryPlayer.DIALOG,[NPC.ASASI,["魔灵王，我们都错了！我不想在最后，再失去我最亲密的人！"],["父亲！"]]],[TaskStoryPlayer.DIALOG,[NPC.ASASI,["其实没有谁利用谁，也没有谁被迷惑！是我们被仇恨蒙蔽了双眼！"],["好了！不要再说了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc"]],[TaskStoryPlayer.DIALOG,[NPC.BOSAIDONG,["看来必须要突破极限，领悟第五技能！爆发吧！海神！"],["波塞冬领悟第五技能了！"]]]];
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
            BitBuffSetClass.setState(BUFFER_ID,1);
            MapManager.changeMap(1000);
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_asasi",0,false,null,null,1);
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
         ResourceManager.getResource(ClientConfig.getAppRes("TwelveRoundsCountDownPanel2"),function(param1:MovieClip):void
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
         StatManager.sendStat2014("冰封山巅的王者之战","点击第" + (_curStep + 1) + "轮icon人次人数",StatManager.RUN_ACT);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            changeMap();
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,CLICK_MAP_ICON_CODE);
         StatManager.sendStat2014("冰封山巅的王者之战","点击星际地图icon",StatManager.RUN_ACT);
         changeMap();
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,CLICK_ACTIVE_ICON_CODE);
         StatManager.sendStat2014("冰封山巅的王者之战","点击活动icon前往活动场景",StatManager.RUN_ACT);
         changeMap();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("冰封山巅的王者之战","进入活动场景",StatManager.RUN_ACT);
         if(MapManager.currentMap.id == TARGET_MAP)
         {
            _map = map;
            KTool.getMultiValue([FOREVER_ID],function(param1:Array):void
            {
               var values:Array = param1;
               _timeState = 0;
               _buySkipTime = 0;
               if(SystemTimerManager.sysBJDate.hours == activeTimes[0] && _timeState == 1)
               {
                  _buySkipTime = 0;
               }
               else if(SystemTimerManager.sysBJDate.hours == activeTimes[1] && _timeState == 2)
               {
                  _buySkipTime = 0;
               }
               StatManager.sendStat2014("阿萨斯VS波塞冬","进入活动场景",StatManager.RUN_ACT);
               ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
               {
                  taskMc = param1;
                  taskMc.gotoAndStop(taskMc.totalFrames);
                  _map.btnLevel.addChild(taskMc);
                  _map.topLevel.visible = false;
                  addEvents();
                  checkActivity();
               },"movie");
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_asasi"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
         }
         if(MapManager.currentMap.id == 1)
         {
            StatManager.sendStat2014("冰封山巅的王者之战","点击传送舱装置",StatManager.RUN_ACT);
         }
         else if(MapManager.currentMap.id == 7)
         {
            StatManager.sendStat2014("冰封山巅的王者之战","点击瞭望舱装置",StatManager.RUN_ACT);
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
         if(MapManager.currentMap.id == 1)
         {
            StatManager.sendStat2014("阿萨斯VS波塞冬","点击传送舱装置",StatManager.RUN_ACT);
         }
         else if(MapManager.currentMap.id == 7)
         {
            StatManager.sendStat2014("阿萨斯VS波塞冬","点击瞭望舱装置",StatManager.RUN_ACT);
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
