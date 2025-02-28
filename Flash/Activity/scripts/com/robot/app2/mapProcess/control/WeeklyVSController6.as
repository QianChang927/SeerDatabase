package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
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
   
   public class WeeklyVSController6
   {
      
      public static const TARGET_MAP:uint = 19;
      
      private static const BUFFER_ID:uint = 1002;
      
      private static const FOREVER_ID:uint = 13575;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginTime:CronTimeVo = new CronTimeVo("*","*","13-18","1","*","2015");
      
      private static var activeTime:CronTimeVo = new CronTimeVo("*","*","13-18","1","*","2015");
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","13","1","*","2015");
      
      private static var broadcastTime:CronTimeVo = new CronTimeVo("*","*","*","1","*","2015");
      
      private static var petObj:Object = {
         "huolidisi":{
            "npc":NPC.HUOLIDISI,
            "name":"霍利迪斯"
         },
         "zelasi":{
            "npc":NPC.ZELASI,
            "name":"泽拉斯"
         },
         "akenisi":{
            "npc":NPC.AKENISI,
            "name":"阿克妮丝"
         },
         "tianma":{
            "npc":NPC.SHENGGUANGTIANMA,
            "name":"圣光天马"
         },
         "bosidijia":{
            "npc":NPC.BOSIDIJIA,
            "name":"波斯蒂加"
         }
      };
      
      private static var roundMapArr:Array = ["huolidisi","zelasi","akenisi","tianma"];
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController6()
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
            LocalMsgController.addLocalMsg("StarPetArenaSpringMsgPanel",0,false,null,null,1);
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
         _widget["round"].text = "第" + (currentRound + 1) + "轮对战开始";
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
         SocketConnection.send(1022,_curStep + 86067907);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86066702);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86066705);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         SocketConnection.send(1022,86067886);
         addEvents();
      }
      
      private static function addEvents() : void
      {
         _map.depthLevel["envoBtn"].addEventListener(MouseEvent.CLICK,onEnvoBtnClickHandler);
      }
      
      private static function onEnvoBtnClickHandler(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         NpcDialog.show(NPC.AISIFEIYA,["哥哥，别闹了你快下来吧！这里是提尔瑞斯，难道你不怕恶灵兽吗？"],["真是胆小，恶灵兽有什么好怕！"],[function():void
         {
            NpcDialog.show(NPC.AISIFEIGE,["难道你忘记了吗？我们是超能一族，只要我们兄弟齐心，任何邪恶势力都不是我们的对手！弟弟，让自己变的更强大吧！"],["艾斯菲亚，你哥哥这是怎么了？"],[function():void
            {
               NpcDialog.show(NPC.AISIFEIYA,["哦哦哦…" + nick + "你来的正好，快帮我劝劝哥哥吧！据说恶灵兽的冰封之门会在这里开启，哥哥它想…对抗恶灵兽！"],["什么，就靠艾斯菲格一个人？"],[function():void
               {
                  _map.conLevel["activityMv"].gotoAndPlay(6);
                  _map.conLevel["activityMv"].stop();
                  NpcDialog.show(NPC.AISIFEIYA,["哥哥，你不要勉强自己了，还是先下来吧！我相信到时一定有宇宙英雄出现的！赛尔你说对吗？"],["没错，难道是在说我？？"],[function():void
                  {
                     NpcDialog.show(NPC.AISIFEIGE,["艾斯菲亚你一点都不像超能一族的成员，怎么可以靠别人呢？超能一族的含义就是无所不能，我们一定要依靠自己的能力！"],["但是如何才能提升自己的能力呢？"],[function():void
                     {
                        _map.conLevel["activityMv"].gotoAndPlay(6);
                        _map.conLevel["activityMv"].stop();
                        NpcDialog.show(NPC.AISIFEIGE,["超能之光是我们超能一族独有的特殊能力，每当我们将自己的能力提升到一定的高度，超能之光就会被激发！"],["哥哥，这是真的吗？"],[function():void
                        {
                           NpcDialog.show(NPC.AISIFEIGE,["那当然，所以艾斯菲亚记住我说的话，一定要提升自己，不断超越，超能一族是最强的！"],["哥哥，我会加油的！"],[function():void
                           {
                              _map.conLevel["activityMv"].gotoAndPlay(6);
                              _map.conLevel["activityMv"].stop();
                              NpcDialog.show(NPC.AISIFEIGE,["很好，看样子恶灵兽要现身了，冰封之门即将打开！来的正好，让你看看我们超能一族的实力吧！"],["不好，艾斯菲格有危险！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["艾斯菲格你快下来，否则就来不及了！艾斯菲亚，你们快想想办法啊！"],["我艾斯菲格是不会退缩的！"],[function():void
                                 {
                                    _map.conLevel["activityMv"].gotoAndPlay(6);
                                    _map.conLevel["activityMv"].stop();
                                    NpcDialog.show(NPC.AISIFEIYA,["哥哥，可恶究竟是谁？恶灵兽如果是你的话，就现身吧！我不会让你这么欺负我哥哥的！"],["哈哈哈哈！"],[function():void
                                    {
                                       _map.conLevel["activityMv"].gotoAndPlay(6);
                                       _map.conLevel["activityMv"].stop();
                                       NpcDialog.show(NPC.ELINGSHOU,["哼哼，终于再次被我同见天日了，黑暗的感觉太难受了，所有阻止冰封之门开启的，都不会有好下场的！"],["恶灵兽，你不会得逞的！"],[function():void
                                       {
                                          _map.conLevel["activityMv"].gotoAndPlay(6);
                                          _map.conLevel["activityMv"].stop();
                                          NpcDialog.show(NPC.ELINGSHOU,["萨菲罗…推特星的守护者，不过想阻止我可没这么容易，冰封之门的开启一定势在必行！"],["那就先过我这关吧！"],[function():void
                                          {
                                             NpcDialog.show(NPC.SAFEILUO,["艾斯菲亚、艾斯菲格，只要我们超能系齐力同心，守护提尔瑞斯恶灵兽的冰封之门就无法顺利开启！"],["大家一起努力！"],[function():void
                                             {
                                                _map.conLevel["activityMv"].gotoAndPlay(6);
                                                _map.conLevel["activityMv"].stop();
                                                NpcDialog.show(NPC.ELINGSHOU,["提尔瑞斯的命运已经注定，1月16日—1月18日，每天下午0xff0000 13：00—14:00 0xffffff以及0xff0000 19:00—20:00 0xffffff就是冰封之门开启的时刻，到时见吧！"],["我们会守护这里的！"],[function():void
                                                {
                                                   _map.conLevel["activityMv"].gotoAndPlay(6);
                                                   _map.conLevel["activityMv"].stop();
                                                   NpcDialog.show(NPC.SAFEILUO,["看来恶灵兽的能力比之前要强大许多，超能系伙伴们激发自己的潜能吧！守护提尔瑞斯星是我们的义务！"],["恩恩，我们知道了！"],[function():void
                                                   {
                                                      NpcDialog.show(NPC.AISIFEIYA,["哥哥，就让我替代你的位置吧！我一定会领悟超能之光的能量，" + nick + "，我哥哥就交给你了！"],["恩恩，放心吧！"],[function():void
                                                      {
                                                         _map.conLevel["activityMv"].gotoAndPlay(6);
                                                         _map.conLevel["activityMv"].stop();
                                                         NpcDialog.show(NPC.AISIFEIYA,["萨菲罗，让我们一起提升能量吧！为了哥哥、为了提尔瑞斯！恶灵兽我一定要击败你！"],["加油！艾斯菲亚！！"],[function():void
                                                         {
                                                            _map.conLevel["activityMv"].gotoAndPlay(6);
                                                            _map.conLevel["activityMv"].stop();
                                                            NpcDialog.show(NPC.AISIFEIYA,[nick + "你可一定要帮助艾斯菲亚它们哦！0xff0000 1月16日—1月18日0xffffff，每天下午0xff0000 13：00—14:00 0xffffff以及0xff0000 19:00—20:00 0xffffff是最关键的时刻！"],["恩恩，我一定会来的！"],[function():void
                                                            {
                                                            }]);
                                                         }]);
                                                      }]);
                                                   }]);
                                                }]);
                                             }]);
                                          }]);
                                       }]);
                                    }]);
                                 }]);
                              }]);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
      }
      
      public static function initEquip() : void
      {
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("StarPetArenaSpringMsgPanel"),"正在努力打开面板...");
         }
         else
         {
            SocketConnection.send(1022,86066707);
            ModuleManager.showModule(ClientConfig.getAppModule("StarPetArenaMainPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.GAIYA_EVO,[timeTip + "；我将迎来艾辛格的最终挑战，虽然他的力量和形象多得到了脱胎换骨的提升，但是我会证明我才是唯一的战神！"],["可以获得盖亚超进化，我一定要去！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86066703);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86066704);
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
         stopAtChildFrame(3);
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
         if(_curStep != param1)
         {
            return;
         }
         CommonUI.removeYellowArrow(_map.topLevel);
         CommonUI.addYellowArrow(_map.topLevel,483,273,0);
      }
      
      private static function checkBoss(param1:int) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(param1);
         _loc2_.position = 0;
         _fightStatus = KTool.readDataByBits(_loc2_,32);
         if(_fightStatus[23] == 1)
         {
            finishAcitivty();
            return;
         }
         var _loc3_:uint = uint(currentRound);
         if(_fightStatus[_loc3_] == 1)
         {
            _curStep = _loc3_;
            holdFight();
         }
         else if(_loc3_ != _curStep)
         {
            _curStep = _loc3_;
            if(_loc3_ == 0)
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
            _curStep = _loc3_;
            holdFight();
            addYellowArrow(_loc3_);
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
            _taskMc = null;
         }
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               if(_loc2_ == currentBoss)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss(petObj[_loc2_].name,3011 + _curStep);
               }
            }
            else
            {
               if(!(_loc2_ in petObj))
               {
                  return;
               }
               NpcDialog.show(petObj[_loc2_].npc,[nick + "，加入春季擂主争夺赛吧。0xff0000每5分钟0xffffff可以挑战我，泽拉斯，阿克妮丝和圣光天马其中一个！" + "战胜我们获得0xff0000明星精灵召唤令0xffffff更多，得到足够的明星精灵召唤令就能获得我们！"],["我一定会来的！"]);
            }
         }
         else
         {
            if(!(_loc2_ in petObj))
            {
               return;
            }
            NpcDialog.show(petObj[_loc2_].npc,[timeTip + "；我将在这里等待你的挑战，一起看看谁能成为明星精灵大擂台春季擂主！" + "0xff0000参加活动100%获得圣光天马，阿克妮丝，泽拉斯，霍利迪斯！0xffffff"],["我一定会来的！"]);
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         isFight = false;
         SocketConnection.send(1022,86057590);
         if(_curStep >= 23)
         {
            return;
         }
         endFight();
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86067887);
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,["又到了一年一度的明星精灵大擂台，今年又有这么多明星精灵涌现，看来竞争会非常激烈啊！"],["皮神，等待你好久了……"]]],[TaskStoryPlayer.DIALOG,[NPC.BALUOKANA,["皮神，快点开始吧，让我们看看今年谁能赢下明星精灵大擂台！"],["我们也都迫不及待了！"]]],[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,["今年的大擂台还有一个重要的使命，需要选拔出最强力的精灵组织成正义联军，去第六星系击败暗黑魔君索伦森！"],["太好了，其中必须要有我一员！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,["看来今年的明星精灵大擂台果然很激烈，那么这样吧，我们每一季度选拔出一位擂主，最后来角逐我们的年度明星精灵！"],["这是个不错的主意！"]]],[TaskStoryPlayer.DIALOG,[NPC.BALUOKANA,["那么我们就从春季开始吧，看看有哪些精灵可以从春季明星精灵中脱颖而出，承受住大家的挑战！"],["好，我们马上就开始。"]]],[TaskStoryPlayer.FUL_MOVIE,["star_pet_arena_spring",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,[timeTip + "，你们要在这里证明你们擂主的实力，坚持到最后的，就可以在春季大擂台中胜出！"],["我们明白了！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            showNpcs();
            SocketConnection.send(1022,86067888);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            ModuleManager.showModule(ClientConfig.getAppModule("StarPetArenaMainPanel"));
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         };
         storyPlayer.start();
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
         var frameIndex:int;
         var round:int = 0;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         round = _curStep;
         frameIndex = 4 + round % 4;
         AnimateManager.playMcAnimate(taskMc,frameIndex,"mc" + frameIndex,function():void
         {
            addYellowArrow(round);
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
         });
      }
      
      private static function endFight() : void
      {
         KTool.showMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(true);
         NpcDialog.show(petObj[currentBoss].npc,[nick + "，没想到你的实力也这么强，快来和我们一起参加明星精灵大擂台！" + "0xff0000参加活动100%获得圣光天马，阿克妮丝，泽拉斯，霍利迪斯！0xffffff"],["我会坚持到最后的！"],[function():void
         {
            if(_curStep % 4 == 3 && currentRound != 23)
            {
               AnimateManager.playMcAnimate(taskMc,8,"mc8");
            }
         }]);
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ % 4 == 0)
         {
            stopAtChildFrame(4);
         }
         else if(_loc1_ % 4 == 1)
         {
            stopAtChildFrame(5);
         }
         else if(_loc1_ % 4 == 2)
         {
            stopAtChildFrame(6);
         }
         else if(_loc1_ % 4 == 3)
         {
            if(_fightStatus[_curStep] == 1)
            {
               stopAtChildFrame(8);
            }
            else
            {
               stopAtChildFrame(7);
            }
         }
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,["春季擂主的争夺就这么激烈，真是越来越期待后面的擂台赛了！"],["竞争确实很激烈。"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["今天的战斗到此为止，我们明天继续一决胜负！"],["好，那就继续战斗下去！"]]],[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,["那么明天继续，不要忘记了时间哦！" + timeTip + "！"],["不会忘，我会回来的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
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
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["看来今年的擂主争夺会非常激烈了，不知道后面还有哪些明星精灵可以脱颖而出！"],["我也非常期待！"]]],[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,["接下来就是夏季的明星擂主争夺赛了，看看有哪些精灵愿意登上擂台接受挑战！"],["夏季的明星要登场了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,["很好，夏季擂主争夺赛又会是一场激战！期待你们的表现！"],["夏季擂主，非我莫属！"]]],[TaskStoryPlayer.DIALOG,[NPC.KESALEIEN,["我们早就迫不及待了，我们的守擂时间是什么呢？"],["下周就轮到你们登场了！"]]],[TaskStoryPlayer.DIALOG,[NPC.BOSIDIJIA,["不要忘了时间哦！1月24日—1月28日，16:00—18:00！"],["我们不会忘的！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
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
         return "明星精灵大擂台盛大开幕！一起看看谁能成为春季擂主争夺赛的赢家！参加活动100%获得圣光天马，阿克妮丝，泽拉斯，霍利迪斯！";
      }
      
      public static function get evoTips() : String
      {
         return "明星精灵大擂台";
      }
      
      public static function get vsTips() : String
      {
         return "明星精灵大擂台";
      }
      
      private static function get currentStepTips() : String
      {
         return "本轮可获得明星精灵召唤令及一万经验券";
      }
      
      private static function get timeTip() : String
      {
         return "0xff00001月17日—1月23日，16:00—18:000xffffff";
      }
      
      private static function get canBroadcast() : Boolean
      {
         if(broadcastTime.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            return true;
         }
         return false;
      }
      
      public static function get activeStatus() : String
      {
         if(beginTime.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return INCOMING;
         }
         if(activeTime.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.PAST)
         {
            return PAST;
         }
         if(activeTime.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
      
      private static function get isLastDay() : Boolean
      {
         if(lastDay.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return false;
         }
         return true;
      }
      
      private static function get nick() : String
      {
         return MainManager.actorInfo.formatNick;
      }
      
      private static function get currentBoss() : String
      {
         return roundMapArr[Math.abs(_curStep % 4)];
      }
      
      private static function get currentRound() : int
      {
         return int(SystemTimerManager.sysBJDate.minutes / 5);
      }
   }
}
