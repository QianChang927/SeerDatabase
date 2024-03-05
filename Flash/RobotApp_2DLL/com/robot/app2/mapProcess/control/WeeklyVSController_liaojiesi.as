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
   
   public class WeeklyVSController_liaojiesi
   {
      
      public static const TARGET_MAP:uint = 931;
      
      private static const BUFFER_ID:uint = 729;
      
      private static const FOREVER_ID:uint = 12235;
      
      private static const BOSS_ID:uint = 2708;
      
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
      
      public static const TIME_TEXT:String = "3月25日—3月31日，每天下午13:00—14:00，晚上19:00—20:00";
      
      private static const TIME_STR:String = "0xff0000" + TIME_TEXT + "0xffffff";
      
      private static var beginDate:Date = new Date(2016,3 - 1,25);
      
      private static var endDate:Date = new Date(2016,3 - 1,31);
      
      private static var activeTimes:Array = [13,19];
      
      private static const LIAOJIESI:String = "liaojiesi";
      
      private static const SUOLANTE:String = "suolante";
      
      private static const _mapAnimate:String = "map_931_1124";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_liaojiesi()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_liaojiesi",0,false,null,null,1);
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
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86060148);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86060145);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            return;
         }
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_liaojiesi"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/LiaojiesiEvolutionPanel"),"正在努力打开面板...");
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
         CommonUI.removeYellowArrow(_map.topLevel);
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
               case LIAOJIESI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("里奥杰斯",_curStep + BOSS_ID);
                  }
                  else
                  {
                     NpcDialog.show(NPC.LIAOJIESI,["索兰特，我会让你看到这个擂台上，谁才是真正的胜利者。你和我的对抗一定要发挥比往常强百倍的实力才行，否则很难战胜我的！"],["我一定要帮助索兰特！"]);
                  }
                  break;
               case SUOLANTE:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("索兰特",_curStep + BOSS_ID);
                  }
                  else
                  {
                     NpcDialog.show(NPC.SUOLANTE,["少废话！我一定会胜利的，发挥你最强的战斗力吧！" + MainManager.actorInfo.formatNick + "记得我和你说的，0xff0000每五分钟0xffffff可以挑战我和里奥杰斯的其中一个。"],["我明白了，索兰特！"]);
                  }
            }
         }
         else
         {
            switch(_loc2_)
            {
               case LIAOJIESI:
                  NpcDialog.show(NPC.LIAOJIESI,[MainManager.actorInfo.formatNick + "，" + TIME_STR + "，来见证我胜利的时刻吧！"],["里奥杰斯，我看好你的！"]);
                  break;
               case SUOLANTE:
                  NpcDialog.show(NPC.SUOLANTE,[TIME_STR + "！我一定会击败里奥杰斯，我才是这个擂台的霸主！"],["索兰特，加油啊！"]);
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
         SocketConnection.send(1022,86060143);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["什么？难道这里所有的精灵都会一直对决下去吗？"],["别着急！这才刚刚开始！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["里奥杰斯！索兰特！醒一醒啊！看清楚对方，你们是朋友，不是敌人啊！ "],["朋友？敌人？哈哈哈！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.LIAOJIESI,["索兰特，让我看到你最强的实力。我可不想和弱者对决！"],["就凭你也配当我的对手！"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLANTE,["识相的话，立刻从擂台上滚下去！不然你就要尝尝什么叫强者的力量！"],["索兰特，接招吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.LIAOJIESI,["你的最强实力就只有这些吗？还是趁早滚下去吧！弱者就是弱者！"],["里奥杰斯，话说的太早了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLANTE,[MainManager.actorInfo.formatNick + "，" + TIME_STR + "！你就作为我们的见证者，看看是我们谁会笑到最后！"],["你们一定要对决吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.LIAOJIESI,[MainManager.actorInfo.formatNick + "我会让你看到这个擂台上，谁才是真正的胜利者。"],["看清对方，你们是朋友啊！"]]]];
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
            SocketConnection.send(1022,86060144);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            _map.depthLevel.visible = true;
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/LiaojiesiEvolutionPanel"),"正在努力打开面板...");
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         };
         storyPlayer.start();
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         var story:Array = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.LIAOJIESI,["哼！识相的话，就快滚！在你面前的索兰特可要比你想象的强大！"],["那我就不客气了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLANTE,["让我们在这里一决高下吧！让你知道什么才叫强大！"],["胜利者终究会是我里奥杰斯"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["我究竟该帮助谁呢，大家明明就是好朋友，为什么一定要分出高低呢？"],["算了，我两个都帮！"]]]];
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
         AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
         {
            NpcDialog.show(NPC.LIAOJIESI,["索兰特，认输吧！你的实力太弱了！"],["里奥杰斯，别伤害索兰特！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FIRST_POS);
            }]);
         });
      }
      
      private static function endFightFirst() : void
      {
         NpcDialog.show(NPC.LIAOJIESI,[MainManager.actorInfo.formatNick + "，这是我与索兰特证明实力的时刻，我不希望把你也牵扯进来，你还是好好的观战吧！"],["只要是朋友的事情，我都要管！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
            {
               NpcDialog.show(NPC.SUOLANTE,["里奥杰斯，别以为就这样轻易的赢了，接下来让你见识见识什么叫做真正的实力！"],["可恶！真是个难缠的对手！"],[function():void
               {
               }]);
            });
         }]);
      }
      
      private static function startFightSecond() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         AnimateManager.playMcAnimate(taskMc,9,"mc9",function():void
         {
            NpcDialog.show(NPC.SUOLANTE,["你现在知道什么是真正的强者了吧！认输吧！"],["索兰特，不要伤害里奥杰斯啊！"],[function():void
            {
               addYellowArrow(SECOND_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightSecond() : void
      {
         NpcDialog.show(NPC.SUOLANTE,[MainManager.actorInfo.formatNick + "，这里跟你没有关系，我要让里奥杰斯明白什么才是真正的强者！"],["索兰特，适可而止啊！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,10,"mc10",function():void
            {
               NpcDialog.show(NPC.LIAOJIESI,["索兰特，你所认为的强者也太弱了。以为用这样的实力就能困住我吗？继续开始吧！"],["我才不会怕你！"],[function():void
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.LIAOJIESI,["好了，到此为止吧！索兰特，最终你还是没能战胜我，你还是省省吧！"],["我是不会放弃的！！"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLANTE,["没到最后，胜负都是未知数。有本事我们再战！"],["你还是放弃吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.LIAOJIESI,["索兰特，就凭你现在的实力，想战胜我还不可能。这次的对决我赢定了！"],["少废话！还没结束呢！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLANTE,[MainManager.actorInfo.formatNick + "我一定会战胜里奥杰斯，让你看到谁才是最强的！"],["明天你再来吧！"]]]];
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
         taskMc.gotoAndStop(13);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SUOLANTE,["里奥杰斯你果然很强，我的体能已经维持不了多久了！怎么样…还想再战吗？ "],["不用了，这次算平手吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.LIAOJIESI,["现在不仅仅是我和你之间争斗，相信这场超进化对抗赛一定会非常有意思的！"],["我们还是先下去吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["你们到底想干什么？为什么一定要让我的朋友们互相争斗！"],["难道你没看到他们很快乐吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.AIXINGE,["让我想一想，接下来该让谁来体验这对决的快乐！"],["难道还不能结束吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["既然是这样！那我可要每次都来，看看你们到底有什么阴谋！"],["加油吧！正义的伙伴们！！"]]]];
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
         return "里奥杰斯VS索兰特！如今再次遭遇，狭路相逢勇者胜，这场战役的胜利者是谁呢？快去空间裂隙吧！立刻前往";
      }
      
      public static function get evoTips() : String
      {
         return "最强精灵超进化对抗赛";
      }
      
      public static function get vsTips() : String
      {
         return "里奥杰斯VS索兰特";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "本轮可获得火焰之魂以及十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "本轮可获得索兰特的精元以及十万经验券";
         }
         return "本轮可获得S级技能石以及一万经验券！";
      }
      
      private static function get canBroadcast() : Boolean
      {
         var _loc1_:Date = new Date(endDate.fullYear,endDate.month,endDate.date,23,59);
         if(SystemTimerManager.sysBJDate.time > beginDate.time && SystemTimerManager.sysBJDate.time < _loc1_.time)
         {
            if(activeTimes.indexOf(SystemTimerManager.sysBJDate.hours + 1) >= 0 && SystemTimerManager.sysBJDate.minutes > 49)
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
