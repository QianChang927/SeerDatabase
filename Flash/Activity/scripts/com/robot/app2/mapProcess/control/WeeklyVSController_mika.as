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
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyVSController_mika
   {
      
      public static const TARGET_MAP:uint = 699;
      
      private static const BUFFER_ID:uint = 22425;
      
      private static const FOREVER_ID:uint = 15024;
      
      private static const ENTER_POS:int = 6;
      
      private static const FIRST_POS:int = 8;
      
      private static const SECOND_POS:int = 10;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var time_inc:CronTimeVo = new CronTimeVo("*","14","29","5","*","2015");
      
      private static var time_act:CronTimeVo = new CronTimeVo("*","14","29-31","5","*","2015");
      
      private static var time_act1:CronTimeVo = new CronTimeVo("*","14","1-4","6","*","2015");
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","8","1","*","2015");
      
      private static var time_bc:CronTimeVo = new CronTimeVo("55-59","13","29-31","5","*","2015");
      
      private static var time_bc1:CronTimeVo = new CronTimeVo("55-59","13","1-4","6","*","2015");
      
      private static const SAIXIAOXI:String = "saixiaoxi";
      
      private static const MIUSI:String = "miusi";
      
      private static const TIME_STR:String = "0xff00005月29日—6月4日，下午14:00—15:000xffffff";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_mika()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel2_mika",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86066628);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("mapAnimate_699_0"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.btnLevel.addChild(taskMc);
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
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel2_mika"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/MikaEvolutionPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.MIKA,[MainManager.actorInfo.formatNick + TIME_STR + "，一起在诺可撒斯星见证我的终极超进化吧！0xff0000参加活动即可获得米咔的精元，米咔超进化道具，缪斯的密信！0xffffff"],["恩恩，我现在就去！ ","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
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
         if(BitBuffSetClass.getState(BUFFER_ID))
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
            CommonUI.addYellowArrow(_map.topLevel,595,95,0);
         }
         else if(param1 == SECOND_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,595,95,0);
         }
      }
      
      private static function checkBoss(param1:int) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(param1);
         _loc2_.position = 0;
         _fightStatus = KTool.readDataByBits(_loc2_,32);
         var _loc3_:uint = SystemTimerManager.sysBJDate.minutes / 5;
         if(_fightStatus[_loc3_] == 1)
         {
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
         }
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case MIUSI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("缪斯",_curStep + 277);
                  }
                  else
                  {
                     NpcDialog.show(NPC.MIUSI,["看来米咔超进化是迟早的事情，相信经历我这几天给他的特训！0xff0000米咔的终极形态一定会出现的！0xffffff"],["我一定会来目睹的！"]);
                  }
                  break;
               case SAIXIAOXI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("米咔",_curStep + 277);
                  }
                  else
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "米咔成功超进化！你可一定要帮助米咔啊！"],["加油啊！布里克！"]);
                  }
            }
         }
         else
         {
            switch(_loc2_)
            {
               case MIUSI:
                  NpcDialog.show(NPC.MIUSI,[TIME_STR + "，我一定要让米咔成功超进化！一定要成功！0xff0000参加活动100%获得米咔的精元，米咔超进化道具和缪斯的密信！0xffffff"],["少主缪斯，靠你了！"]);
                  break;
               case SAIXIAOXI:
                  NpcDialog.show(NPC.SAIXIAOXI,[TIME_STR + "，一起见证米咔超进化！0xff0000参加活动100%获得米咔的精元，米咔超进化道具和缪斯的密信！0xffffff"],["加油！我的伙伴！"]);
            }
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         isFight = false;
         var _loc2_:* = "参加第" + (_curStep + 1).toString() + "轮对战";
         StatManager.sendStat2014("米咔超进化",_loc2_,StatManager.RUN_ACT);
         if(_curStep >= 11)
         {
            return;
         }
         holdFight();
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         StatManager.sendStat2014("米咔超进化","接取前置任务",StatManager.RUN_ACT);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["缪斯，小心伤了米咔，他可是赛小息最重要的伙伴啊！"],["难道你想阻止我吗！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["小息…你出现的正是时候，在我返回天蛇星之前，一定要让米咔的能力得到较大的提升，难道你不想自己的精灵是最棒的吗？"],["原来是这样！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["米咔的能量的确是有点不稳定，但是无论他是不是最强的精灵，他都是我最爱的伙伴，我是绝对不会嫌弃他的！"],["既然这样…"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["米咔…我相信你一定明白我的用意，在我离开后，你需要坚强起来，守卫宇宙和平以及赛尔号安危就是你的责任了！"],["勇敢的站上来吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["米咔你愿意吗？如果你不想，我是不会强加于你这样的责任！守卫宇宙和平和赛尔号的安危，也是我们的意愿！"],["赛小息…放下米咔！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["你应该让米咔自己选择，只有这样他才能真正的强大起来，否则他只能永远在你的怀抱中做一个可怜虫！"],["米咔…你可要想清楚啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["米咔…难道你想一直在赛小息的身后一辈子吗？做出你自己的决定吧！相信我…我一定会让你变的无比强大！"],["米咔…看你了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["少主缪斯…你可千万不要欺负我的米咔哦！他是我最珍贵的伙伴，我不允许有谁伤害他！"],["想变强就一定要经历考验！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,[TIME_STR + "！我还会在这里提升米咔的实力，0xff0000希望他能成功超进化！0xffffff！"],["我相信他一定可以做到的！"]]]];
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
            StatManager.sendStat2014("米咔超进化","完成前置任务",StatManager.RUN_ACT);
            BitBuffSetClass.setState(BUFFER_ID,1);
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         };
         storyPlayer.start();
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         var story:Array = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["很好…就是这样！米咔，只有不断的燃烧自己的能量才能超越自己！"],["让我看看你的另一面吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["米咔…你是我的一切，不管你成功与否，我都会一样爱护着你！"],["我赛小息发誓！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["别以为你进化成第二形态就算是成功了，你的实力还差的太多太多！"],["开始吧！米咔！"]]]];
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
      
      private static function startFight() : void
      {
         var round:int = _curStep;
         if(round % 2 == 0)
         {
            AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
            {
               NpcDialog.show(NPC.MIUSI,["是不是觉得自己很差…跟我的瞳之神能比起来，你这点水平简直就和一般的精灵没什么区别！"],["米咔，别放弃…继续加油啊！！"],[function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  addYellowArrow(FIRST_POS);
               }]);
            });
         }
         else if(round % 2 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,10,"mc10",function():void
            {
               NpcDialog.show(NPC.MIUSI,["这小子看上去实力真不弱，居然可以有如此强大的爆发力！"],["太棒了，米咔！就是这样！！！"],[function():void
               {
                  addYellowArrow(SECOND_POS);
                  KTool.showMapAllPlayerAndMonster();
               }]);
            });
         }
      }
      
      private static function endFight() : void
      {
         var round:int = _curStep;
         if(round % 2 == 0)
         {
            NpcDialog.show(NPC.MIUSI,[MainManager.actorInfo.formatNick + "就算你攻击我还是没用的，想办法提升米咔的实力才是王道，你自己好好想想吧！"],["米咔…千万别放弃！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMc,9,"mc9",function():void
               {
                  NpcDialog.show(NPC.MIUSI,["米咔…你居然在遭受我的攻击后，还能有这样的作为，看来我的眼光没错！"],["继续保持这样的状态！"],[function():void
                  {
                  }]);
               });
            }]);
         }
         else if(round % 2 == 1)
         {
            NpcDialog.show(NPC.SAIXIAOXI,["米咔…继续保持这样的状态，你一定会成功超进化的！"],["小息...别这么激动！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMc,11,"mc11",function():void
               {
                  NpcDialog.show(NPC.MIUSI,["别以为就这点实力就可以沾沾自喜，你离超进化的目标还差的远呢！！"],["让我们继续开始吧！"],[function():void
                  {
                  }]);
               });
            }]);
         }
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ == 0)
         {
            stopAtChildFrame(ENTER_POS);
         }
         else if(_loc1_ % 2 == 0)
         {
            stopAtChildFrame(FIRST_POS);
         }
         else if(_loc1_ % 2 == 1)
         {
            stopAtChildFrame(SECOND_POS);
         }
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         taskMc.gotoAndStop(12);
         story = [[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["米咔你的实力正在慢慢变强，继续保持，相信你很快就能实现终极进化！"],["一定要坚持！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["少主缪斯，米咔真的可以超进化吗？"],["放心吧！米咔比我们想象的要强！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.MIKA,["米咔…米咔…"],["看起来米咔很开心的样子！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["叫上赛尔号上的所有成员，来这里见证米咔的终极进化吧！！"],["恩恩，我每天都会来的！"]]]];
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
         taskMc.gotoAndStop(14);
         story = [[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["米咔…让我们看看你的强大实力吧！"],["超进化吧！米咔！"]]],[TaskStoryPlayer.FUL_MOVIE,["superMika",true]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["米咔…这是真的吗？我没有眼花吧！"],["是真的啦！队长！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,[MainManager.actorInfo.formatNick + "天蛇星需要我的帮助，现在宇宙的和平和赛尔号的安危就交给你们了！"],["很高兴认识你们！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,15,"mc15"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["多谢了，少主缪斯！希望天蛇星的遭难可以早日化解！"],["少主缪斯，你一定会成功的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，你的米咔超进化了吗？赶紧将你的米咔进化成终极形态吧！"],["米咔超进化！"]]]];
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
         return "米咔超进化vs少主缪斯！曾经的好友如今变成强劲的对手，这场战役谁才是最后的赢家呢？快去诺可撒斯星看看吧！";
      }
      
      public static function get evoTips() : String
      {
         return "最强对决！米咔超进化vs少主缪斯";
      }
      
      public static function get vsTips() : String
      {
         return "米咔超进化vs缪斯";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "可获得缪斯的密信以及十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "可获得米咔的精元、米咔超能量以及十万经验券";
         }
         return "可获得米咔超能碎片、一万经验券";
      }
      
      private static function get canBroadcast() : Boolean
      {
         if(time_bc.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT || time_bc1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
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
         if(time_inc.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return INCOMING;
         }
         if(time_act1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.PAST)
         {
            return PAST;
         }
         if(time_act.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT || time_act1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
      
      private static function get nick() : String
      {
         return MainManager.actorInfo.formatNick;
      }
   }
}
