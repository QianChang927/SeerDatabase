package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
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
   
   public class WeeklyVSController_kenzhade
   {
      
      public static const TARGET_MAP:uint = 936;
      
      private static const BUFFER_ID:uint = 852;
      
      private static const CHECKBOSS_CMD:int = 9253;
      
      private static const ENTER_POS:int = 3;
      
      private static const FIRST_POS:int = 4;
      
      private static const SECOND_POS:int = 5;
      
      private static const THIRD_POS:int = 6;
      
      private static const FOURTH_POS:int = 7;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginTime:CronTimeVo = new CronTimeVo("*","14","11","12","*","2015");
      
      private static var activeAc:ActivityControl = new ActivityControl([new CronTimeVo("*","14,19","11-17","12","*","2015")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","17","12","*","2015");
      
      private static var broadcastAc:ActivityControl = new ActivityControl([new CronTimeVo("50","13,18","11-17","12","*","2015")]);
      
      private static const TIME_STR:String = "0xff000012月11日—12月17日，每天14:00—15:00， 19:00—20:000xffffff";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
      
      private static var taskMc:MovieClip;
       
      
      public function WeeklyVSController_kenzhade()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_kenzhade",0,false,null,null,1);
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
         _widget["round"].text = "第" + (Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1) + "轮对战开始";
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
         SocketConnection.send(1022,_curStep + 86063147);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86063141);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86063144);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         SocketConnection.send(1022,86062598);
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_936_vs_kenzhade"),function(param1:MovieClip):void
         {
            taskMc = param1["act_kenzhade"];
            _map.conLevel.addChild(taskMc);
            addEvents();
            checkActivity();
            OgreController.isShow = false;
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
         SocketConnection.send(1022,86063146);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_kenzhade"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/KendierEvolutionPanel_2"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.MAFALIAO,["双子星精灵带着一只0xff0000神秘精灵0xffffff来到逆界之门寻求帮助。" + TIME_STR + "，同我一起前去查看发生了什么！"],["我一定会去的！ ","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86063142);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86063143);
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
         _loc2_();
      }
      
      private static function completeTask(param1:Function) : void
      {
         param1();
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
         KTool.getLimitNum(15006,function(param1:int):void
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
         CommonUI.removeYellowArrow(_map.topLevel);
         stopAtChildFrame(ENTER_POS,1);
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
         if(param1 == FIRST_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,720,146,0);
         }
         else if(param1 == SECOND_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,478,212,0);
         }
         else if(param1 == THIRD_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,800,219,0);
         }
         else if(param1 == FOURTH_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,478,211,0);
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
            startFightThird();
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
      
      private static function checkBoss(param1:int) : void
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(param1);
         _loc2_.position = 0;
         _fightStatus = KTool.readDataByBits(_loc2_,32);
         CommonUI.removeYellowArrow(_map.topLevel);
         if(_fightStatus[11] == 1)
         {
            finishAcitivty();
            return;
         }
         var _loc3_:uint = SystemTimerManager.sysBJDate.minutes / 5;
         if(_loc3_ == 0 || _loc3_ == 4 || _loc3_ == 8)
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
            taskMc = null;
         }
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = String(param1.target.name.split("_"));
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case "kendite":
                  if(_fightStatus && !_fightStatus[_curStep] && (_curStep == 0 || _curStep == 4 || _curStep == 8))
                  {
                     isFight = true;
                     FightManager.fightWithBoss("肯迪特",_curStep + 3);
                  }
                  else
                  {
                     NpcDialog.show(NPC.KENDITE,[user + "0xff0000每5分钟0xffffff可以挑战我们其中一个。雷光之翼的能量！无人可挡！"],["嗯！你一定要击败伊兰迪啊！"]);
                  }
                  break;
               case "kenzhade":
                  if(_fightStatus && !_fightStatus[_curStep] && (_curStep == 2 || _curStep == 6 || _curStep == 10))
                  {
                     isFight = true;
                     FightManager.fightWithBoss("肯扎德",_curStep + 3);
                  }
                  else
                  {
                     NpcDialog.show(NPC.KENZHADE,["发挥你最强的战斗力吧！" + user + "0xff0000每5分钟0xffffff你可以挑战我们其中一个，我一定要帮肯巴莱塔变得更加强大！"],["嗯！我们一起加油！"]);
                  }
                  break;
               case "kenlai":
                  if(_fightStatus && !_fightStatus[_curStep] && (_curStep == 1 || _curStep == 5 || _curStep == 9 || _curStep == 3 || _curStep == 7 || _curStep == 11))
                  {
                     isFight = true;
                     FightManager.fightWithBoss("肯莱",_curStep + 3);
                  }
                  else
                  {
                     NpcDialog.show(NPC.KENLAI,[user + "0xff0000每5分钟0xffffff你可以挑战我们其中一个，可以挑战我们其中一个。我一定会变得更加强大的！但是我感觉有一股异界能量存在我的体内！"],["不要担心！我们一定会帮你的！"]);
                  }
                  break;
               case "mafaliao":
                  NpcDialog.show(NPC.MAFALIAO,[user + "0xff0000每5分钟0xffffff可以挑战他们其中一个。只有使肯巴莱塔通过了初始试炼，才能够激发潜能变得更加强大！"],["嗯！我知道该怎么做！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "kendite":
               NpcDialog.show(NPC.KENDITE,[TIME_STR + "与我们一起进入肯巴莱塔的初始试炼！肯巴莱塔一定会变得更加强大的！"],["我一定会帮忙的！"]);
               break;
            case "mafaliao":
               NpcDialog.show(NPC.MAFALIAO,[TIME_STR + "只有使肯巴莱塔通过了初始试炼，才能够接受我的试炼，激发潜能变得更加强大！"],["你要帮助肯巴莱塔！"]);
               break;
            case "kenzhade":
               NpcDialog.show(NPC.KENZHADE,[TIME_STR + "与我们一起进入肯巴莱塔的初始试炼！肯巴莱塔一定会变得更加强大的！"],["我一定会帮忙的！"]);
               break;
            case "kenlai":
               NpcDialog.show(NPC.KENLAI,[TIME_STR + "一起进入我的初始试炼！我一定会变得更加强大的！但是我感觉有一股异界能量存在我的体内"],["有我们在，不要担心！"]);
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
         if(_curStep == 0 || _curStep == 4 || _curStep == 8)
         {
            stopAtChildFrame(FIRST_POS,1);
            endFightFirst();
         }
         else if(_curStep == 1 || _curStep == 5 || _curStep == 9)
         {
            stopAtChildFrame(SECOND_POS,1);
            endFightSecond();
         }
         else if(_curStep == 2 || _curStep == 6 || _curStep == 10)
         {
            stopAtChildFrame(THIRD_POS,1);
            endFightThird();
         }
         else if(_curStep == 3 || _curStep == 7 || _curStep == 11)
         {
            stopAtChildFrame(FOURTH_POS,1);
            endFightFourth();
         }
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86063139);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.MAFALIAO,["肯巴莱塔完全阻挡了我的能量，但是似乎能够和你们双子星精灵的能量产生共鸣！到底发生了什么？"],["都怪我们！"]]],[TaskStoryPlayer.DIALOG,[NPC.KENDITE,["肯巴莱塔是我们双子星精灵的守护者。世代守护着双子星精灵。可是为了我们击败伊兰迪，已经闭关修炼的他将所有的能量释放。"],["原来是这样！"]]],[TaskStoryPlayer.DIALOG,[NPC.MAFALIAO,["我能够感觉到他实力非凡，只要经过精心试炼，他日必定能够恢复到最初的能量，甚至能够激发潜能，变得更加强大！"],["那我们该怎么办？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.MAFALIAO,["看来，初始试炼，只能靠你们双子星精灵啦！只有通过了初始试炼，才能够接受我的试炼。不然我也无能为力！"],["那我们先来！"]]],[TaskStoryPlayer.DIALOG,[NPC.KENDITE,[user + TIME_STR + "和我兄弟二人一起进入肯巴莱塔的初始试炼。帮助双子星守护者重现威力！"],["加油吧！肯巴莱塔一定会重现威力！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster(false);
            showNpcs();
            SocketConnection.send(1022,86063140);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            OgreController.isShow = false;
            _map.depthLevel.visible = true;
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
      
      private static function startFightFirst() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
         {
            NpcDialog.show(NPC.KENDITE,["不好，肯莱一时还没办法接受这么多能量。快来控制我的能量！千万不能伤害到肯莱！"],["嗯嗯！我明白的！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FIRST_POS);
            }]);
         });
      }
      
      private static function endFightFirst() : void
      {
         stopAtChildFrame(FIRST_POS);
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.KENDITE,[user + "感激不尽。我必须要控制能量，一点点的将肯莱的能量激发出来！只有这样，他才能进化为肯巴莱塔！"],["现在再试试！"]);
      }
      
      private static function startFightSecond() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
         {
            NpcDialog.show(NPC.KENLAI,["肯迪特，你没事吧！我现在完全无法控制自己的能量，我感觉仿佛有一股异界的能量在我的体内游走！"],["肯莱，我来帮你！"],[function():void
            {
               addYellowArrow(SECOND_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightSecond() : void
      {
         stopAtChildFrame(SECOND_POS);
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.KENLAI,[user + "我已经感觉自己的能量在一点点的恢复，但是那股莫名的能量仿佛变得更强烈了！"],["肯莱，挺住！"]);
      }
      
      private static function startFightThird() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
         {
            NpcDialog.show(NPC.KENZHADE,["不好，肯莱一定受到了那股异界能量的影响，根本没办法接受这么多能量。快来控制我的能量！千万不能伤害到肯莱！"],["嗯嗯！我明白的！"],[function():void
            {
               addYellowArrow(THIRD_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightThird() : void
      {
         stopAtChildFrame(THIRD_POS);
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.KENZHADE,[user + "谢谢你。我必须要控制能量，一点点的将肯莱的能量激发出来！不知道肯莱体内的那股异界能量怎么样了！"],["现在再试试！"]);
      }
      
      private static function startFightFourth() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
         {
            NpcDialog.show(NPC.KENLAI,["你们没事吧！我现在完全无法控制自己的能量，我感觉一股异界的能量在我的体内游走！好难受！"],["肯莱，我来帮你！"],[function():void
            {
               addYellowArrow(FOURTH_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightFourth() : void
      {
         stopAtChildFrame(FOURTH_POS);
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.KENLAI,[user + "我已经感觉自己的能量在一点点的恢复，但是那股莫名的能量仿佛变得更强烈了！"],["肯莱，挺住！"]);
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.MAFALIAO,["索伦森就在周围。我们激发能量很有可能会被索伦森利用。明天我们再继续试炼肯莱，我感觉肯莱在一点点的变得强大！"],["嗯！肯莱坚持住！"]]]];
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
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["没想到你们居然可以把肯巴莱克恢复起来。哈哈！肯巴莱克，真是上天都眷顾你啊！可是……就到此为止了！ "],["小心！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.MAFALIAO,["接下来进入肯巴莱塔的激发试炼。不知道索伦森到底又做了些什么！希望肯巴莱塔能够坚持住！"],["我们一起努力！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["接下来的试炼估计会变得更加困难。我们不能放弃！可恶的索伦森，我们一定要消灭他的阴谋！"],["加油吧！正义的伙伴们！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            _map.conLevel["act"].visible = false;
            if(cb != null)
            {
               cb();
            }
         };
         storyPlayer.start();
      }
      
      public static function get adTips() : String
      {
         return "双子星守护者肯巴莱塔现世！只有经过不断的试炼才能肩负保卫双子星精灵的重担。勇敢的赛尔，10月11日—10月17日，让我们同玛法里奥一起帮助双子星守护者重现光芒！";
      }
      
      public static function get evoTips() : String
      {
         return "双子星守护者现世！逆界之门的试炼！";
      }
      
      public static function get vsTips() : String
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:uint = Math.floor(_loc1_.minutes / 5) + 1;
         if(_loc2_ == 1 && _loc2_ == 2 && _loc2_ == 5 && _loc2_ == 6 && _loc2_ == 9 && _loc2_ == 10)
         {
            return "肯巴莱塔VS肯迪特";
         }
         return "肯巴莱塔VS肯扎德";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:uint = Math.floor(_loc1_.minutes / 5) + 1;
         if(_loc1_.date == 13)
         {
            if(_loc2_ == 12)
            {
               return "肯巴莱塔的精元，宿命之光碎片，十万经验券";
            }
            return "宿命之光碎片，一万经验券";
         }
         if(_loc2_ == 12)
         {
            return "肯巴莱塔的精元（50%）宿命之光碎片（50%）";
         }
         return "宿命之光碎片（50%），一万经验券";
      }
      
      private static function get canBroadcast() : Boolean
      {
         if(broadcastAc.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      private static function get isLastDay() : Boolean
      {
         if(lastDay.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return false;
         }
         return true;
      }
      
      public static function get activeStatus() : String
      {
         if(beginTime.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return INCOMING;
         }
         if(activeAc.isPast)
         {
            return PAST;
         }
         if(activeAc.isInActivityTime)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
      
      private static function get user() : String
      {
         return MainManager.actorInfo.formatNick;
      }
   }
}
