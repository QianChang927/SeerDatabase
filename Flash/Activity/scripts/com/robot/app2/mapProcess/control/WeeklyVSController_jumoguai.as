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
   import com.robot.core.config.xml.ItemXMLInfo;
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
   import com.robot.core.ui.alert.ItemInBagAlert;
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
   
   public class WeeklyVSController_jumoguai
   {
      
      public static const TARGET_MAP:uint = 931;
      
      private static const BUFFER_ID:uint = 707;
      
      private static const FOREVER_ID:uint = 14200;
      
      private static const END_TASK:uint = 472;
      
      private static const MARK_ID:uint = 20263;
      
      private static const MARK_TASK:uint = 1587;
      
      private static const ENTER_POS:int = 5;
      
      private static const FIRST_POS:int = 7;
      
      private static const SECOND_POS:int = 9;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static const TIME_STR:String = "0xff00006月19日—6月25日，每天下午13:00—14:00，晚上19:00—20:000xffffff";
      
      private static var time_p:CronTimeVo = new CronTimeVo("*","13","19","6","*","2015");
      
      private static var time_p0:CronTimeVo = new CronTimeVo("*","13","19-25","6","*","2015");
      
      private static var time_p1:CronTimeVo = new CronTimeVo("*","19","19-25","6","*","2015");
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","25","6","*","2015");
      
      private static var time_e3:CronTimeVo = new CronTimeVo("55","12","19-25","6","*","2015");
      
      private static var time_e4:CronTimeVo = new CronTimeVo("55","18","19-25","6","*","2015");
      
      private static const JUMOGUAI:String = "jumoguai";
      
      private static const LUDINUOSI:String = "ludinuosi";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_jumoguai()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_jumoguai",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86059305);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86059299);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86059302);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_931_1017"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.conLevel.addChild(taskMc);
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_jumoguai"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/JumoguaiEvolutionPanel"),"正在努力打开面板...");
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
         SocketConnection.removeCmdListener(CommandID.FIRESTATUEAWAKE_CHECK_BOSS,onCheckBoss);
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
         KTool.getLimitNum(FOREVER_ID,function(param1:int):void
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
      
      private static function onCheckBoss(param1:int) : void
      {
         var _loc4_:uint = 0;
         CommonUI.removeYellowArrow(_map.topLevel);
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(param1);
         _loc2_.position = 0;
         _fightStatus = KTool.readDataByBits(_loc2_,32);
         if(_fightStatus[11] == 1)
         {
            finishAcitivty();
            return;
         }
         if(time_p1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            _loc4_ = 0;
            while(_loc4_ < 12)
            {
               _fightStatus[_loc4_] = _fightStatus[12 + _loc4_];
               _loc4_++;
            }
         }
         if(_fightStatus[11] == 1)
         {
            finishAcitivty();
            return;
         }
         var _loc3_:uint = SystemTimerManager.sysDate.minutes / 5;
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
         SocketConnection.removeCmdListener(CommandID.FIRESTATUEAWAKE_CHECK_BOSS,onCheckBoss);
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
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case JUMOGUAI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("巨蘑怪",_curStep + 2538);
                  }
                  else
                  {
                     NpcDialog.show(NPC.JUMOGUAI,["鲁迪诺斯…你和我的对抗一定要发挥比往常强百倍的实力才行，否则很难战胜我的！" + MainManager.actorInfo.formatNick + "0xff0000每五分钟0xffffff可以挑战我们的其中一个哦！"],["恩恩，我明白了！！"]);
                  }
                  break;
               case LUDINUOSI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("鲁迪诺斯",_curStep + 2538);
                  }
                  else
                  {
                     NpcDialog.show(NPC.LUDINUOSI,["少废话…我一定会胜利的，发挥你最强的战斗力吧！"],["你们别太认真啊！"]);
                  }
            }
         }
         else
         {
            switch(_loc2_)
            {
               case JUMOGUAI:
                  NpcDialog.show(NPC.JUMOGUAI,[TIME_STR + "，你就作为我们的见证者吧！"],["没问题，我一定会来的！"]);
                  break;
               case LUDINUOSI:
                  NpcDialog.show(NPC.LUDINUOSI,[MainManager.actorInfo.formatNick + "，" + TIME_STR + "！一定要击败巨蘑怪，我才是这个擂台上的霸主！"],["鲁迪诺斯，你不是我的对手！"]);
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
            if(TasksManager.getTaskStatus(MARK_TASK) != TasksManager.COMPLETE)
            {
               ItemInBagAlert.show(MARK_ID,"1个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(MARK_ID)) + "已经放入你的背包中！");
            }
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
         SocketConnection.send(1022,86059297);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["巨蘑菇，究竟是怎么会事情啊！你们真的要分出高下吗？！"],["这不管你的事！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["又是你们！为什么你们老是出现在这里！！！"],["和你说了，你不配知道这些！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIKA,[MainManager.actorInfo.formatNick + "，这些黑影的能量已经超出我们的想象，看来这些都是命运的安排，在这里的所有人都将面临自己的对手！"],["这可怎么办呢！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.MIKA,[MainManager.actorInfo.formatNick + "没用的，这些精灵仿佛已经被催眠一样，就算你再怎么劝说，都阻止不了他们的决斗！"],["看来只能用实力说话了！"]]],[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,["鲁迪诺斯…我很早就想和你切磋了，你的对手是我！"],["就凭你也可以当我的对手？"]]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["那就让你尝尝我的实力吧！我可是云霄星的首领，战胜你不在话下！"],["难道真的要打起来了？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["你和我只有一个可以站在这个擂台上，识相的话就滚回去吧！"],["巨蘑怪，话别说的太早！"]]],[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,[MainManager.actorInfo.formatNick + "，0xff000010月17日—10月23日，每天下午13:00—14:00，晚上19:00—20:000xffffff！你就作为我们的见证者吧！"],["我不想做可以吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["哼哼…那你就等着看到巨蘑怪倒在这个擂台上吧！哈哈哈！"],["不会的，巨蘑怪是不会输的！"]]]];
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
            SocketConnection.send(1022,86059298);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            _map.depthLevel.visible = true;
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         };
         storyPlayer.start();
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         var story:Array = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,["什么首领…你的对手可是我巨蘑怪！别想这么轻易的战胜我，我可是很能打的！"],["哼哼…这样才有意思嘛！"]]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["那就让我们在这里一决高下吧！让你知道什么才叫强大！"],["巨蘑怪，我一定会干掉你的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.MIKA,[MainManager.actorInfo.formatNick + "，我一定会找到其中的原因，我绝不能让这些黑影的诡计得逞！"],["恩恩，一定可以的！"]]]];
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
      
      private static function startFightSecond() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         AnimateManager.playMcAnimate(taskMc,9,"mc9",function():void
         {
            NpcDialog.show(NPC.LUDINUOSI,["什么叫实力，你现在明白了吗？你就被埋在这里吧！"],["鲁迪诺斯，你也冷静点！！"],[function():void
            {
               addYellowArrow(SECOND_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightSecond() : void
      {
         NpcDialog.show(NPC.LUDINUOSI,[MainManager.actorInfo.formatNick + "，是这家伙先来挑衅我的，这次我非得好好教训一下他不可！"],["不…切磋而已，千万别动真格的！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,10,"mc10",function():void
            {
               NpcDialog.show(NPC.JUMOGUAI,["鲁迪诺斯…别以为用这样的石头就能困住我，继续开始吧！"],["我才不会怕你！"],[function():void
               {
               }]);
            });
         }]);
      }
      
      private static function startFightFirst() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
         {
            NpcDialog.show(NPC.JUMOGUAI,["让你尝尝我力大无比拳头吧！怎么样…下跪的滋味一定不错吧！"],["巨蘑怪，我别伤害鲁迪诺斯！！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FIRST_POS);
            }]);
         });
      }
      
      private static function endFightFirst() : void
      {
         NpcDialog.show(NPC.JUMOGUAI,["我很早就说过，想在空间裂隙击败我，几乎是不可能完成的任务！！你最好不要阻止我！"],["不…切磋而已，千万别动真格的！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
            {
               NpcDialog.show(NPC.LUDINUOSI,["巨蘑怪…别以为这样就算是胜利了，我还是毫无完损的站到这里！"],["可恶…真是个难缠的对手！"],[function():void
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
         taskMc.gotoAndStop(11);
         story = [[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,["鲁迪诺斯…结果你还是没有战胜我，你还是省省吧！"],["不…我是不会放弃的！！"]]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["没到最后胜负都是未知数，有本事我们再战！"],["你还是放弃吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,["鲁迪诺斯，看来你是一定要和我分个高下，那你就等着吧！？"],["少废话！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,[MainManager.actorInfo.formatNick + "我和鲁迪诺斯会向你证明，谁才是最强的！"],["明天你再来吧！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            if(cb != null)
            {
               cb();
            }
            if((SystemTimerManager.sysDate.hours == 13 || SystemTimerManager.sysDate.hours == 14) && (SystemTimerManager.sysDate.date >= 17 && SystemTimerManager.sysDate.date <= 20))
            {
               MapManager.changeMap(1);
            }
         };
         storyPlayer.start();
      }
      
      private static function startFinishMc(param1:Function = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         taskMc.gotoAndStop(13);
         story = [[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["巨蘑怪你果然很强，我的体能已经维持不了多久了！怎么样，你还想再战吗？"],["不用了，这次算平手吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,["现在不仅仅是我和你之间争斗，相信这场超进化对抗赛一定会非常有意思的！"],["我们还是先下去吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,["这场战役我一定要想办法获胜，只有这样我才能进入空间裂隙，击败那些黑影！"],["我是不会输的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["原来是这样！那我可要每次都来，一定要帮助巨蘑怪战胜所有的对手！"],["加油吧！正义的伙伴们！！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            DisplayUtil.removeForParent(taskMc);
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
         return "巨蘑怪vs鲁迪诺斯！曾经的敌人如今变成强劲的对手，这场战役谁才是最后的赢家呢？快去空间裂隙吧！";
      }
      
      public static function get evoTips() : String
      {
         return "最强精灵超进化对抗赛";
      }
      
      public static function get vsTips() : String
      {
         return "巨蘑怪vs鲁迪诺斯";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "本轮可获得黑石之力以及十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "本轮可获得石化之能以及十万经验券";
         }
         return "本轮可获得一万经验券！";
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
