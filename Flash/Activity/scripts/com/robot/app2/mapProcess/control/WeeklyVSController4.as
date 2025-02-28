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
   
   public class WeeklyVSController4
   {
      
      public static const TARGET_MAP:uint = 815;
      
      private static const BUFFER_ID:uint = 738;
      
      private static const FOREVER_ID:uint = 12228;
      
      private static const BOSS_STARTID:uint = 2587;
      
      private static const COMPLETE_TASK:uint = 9561;
      
      private static const MARK_ID:uint = 20425;
      
      private static const MARK_TASK:uint = 1567;
      
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
      
      private static var time_p:CronTimeVo = new CronTimeVo("*","14","3","4","*","2015");
      
      private static var time_p0:CronTimeVo = new CronTimeVo("*","14","3-9","4","*","2015");
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","9","4","*","2015");
      
      private static var time_e3:CronTimeVo = new CronTimeVo("55","14","3-9","4","*","2015");
      
      private static const MOYESI:String = "moyesi";
      
      private static const KUANGBAODIANJITU:String = "kuangbaodianjitu";
      
      private static const TIANSHEQIMOJIANG:String = "tiansheqimojiang";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController4()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel4",0,false,null,null,1);
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
         ResourceManager.getResource(ClientConfig.getAppRes("TwelveRoundsCountDownPanel4"),function(param1:MovieClip):void
         {
            _widget = param1;
            _widget.scaleX = _widget.scaleY = 0.9;
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
         SocketConnection.send(1022,_curStep + 86060345);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86060339);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86060342);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_815_1024"),function(param1:MovieClip):void
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel4"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/KuangbaodianjituEvolutionPanel"),"正在努力打开面板...");
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
            CommonUI.addYellowArrow(_map.topLevel,480,140,0);
         }
         else if(param1 == SECOND_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,530,154,0);
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
               case MOYESI:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("摩耶斯",_curStep + BOSS_STARTID);
                  }
                  else
                  {
                     NpcDialog.show(NPC.MOYESI,["好样的！狂暴电击兔，保持这样的状态！"],["现在开始，慢慢变得有趣了！！"]);
                  }
                  break;
               case KUANGBAODIANJITU:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("狂暴电击兔",_curStep + BOSS_STARTID);
                  }
                  else
                  {
                     NpcDialog.show(NPC.KUANGBAODIANJITU,[MainManager.actorInfo.formatNick + "0xff0000每五分钟0xffffff可以挑战我和摩耶斯的其中一个，你应该知道怎么做！"],["恩恩，放心吧！！"]);
                  }
            }
         }
         else
         {
            switch(_loc2_)
            {
               case MOYESI:
                  NpcDialog.show(NPC.MOYESI,["敬爱的盟主，你等着我！相信少主缪斯一定会带领我们拯救你的！不过在这之前，我一定要击败狂暴电击兔恢复自己的能量！"],["加油啊！"]);
                  break;
               case KUANGBAODIANJITU:
                  NpcDialog.show(NPC.KUANGBAODIANJITU,["0xff00004月3日—4月9日，下午14:00—15:000xffffff，是我和天蛇七魔将之一摩耶斯之间的对战！"],["我一定会来的！"]);
                  break;
               case TIANSHEQIMOJIANG:
                  NpcDialog.show(NPC.TIANSHEQIMOJIANG,["摩耶斯这家伙对盟主如此忠心，相信他一定可以做到的！"],["我们将拭目以待！"]);
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
         SocketConnection.send(1022,86060337);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.KUANGBAODIANJITU,["虽然已经领悟了超进化的能量，但是我还是不能松懈，我一定要以师傅和雷神为榜样，不断的提升自己！"],["哇！好像大的能量！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.KUANGBAODIANJITU,[MainManager.actorInfo.formatNick + "你怎么来了！找我有事吗？"],["额…有人想挑战你！"]]],[TaskStoryPlayer.DIALOG,[NPC.KUANGBAODIANJITU,["究竟是谁有这样大的胆量，敢在赫尔卡星挑战我狂暴电击兔！"],["是我，摩耶斯！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["我可是天蛇七魔将中拥有冰雪能力的将领，寒冰铁壁是我最强的护盾，不行你可以试试！"],["呵呵…真是大言不惭啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["我这次来到赫尔卡星就是想挑战你的，据说你的狂暴轰天雷非常厉害，我很想尝试一下！"],["那我只能满足你了！"]]],[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["我一定要拯救天蛇星盟主，希望这次少主缪斯能不计前嫌，毕竟他们是兄妹！"],["住手，摩耶斯！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["什么…你们怎么都来了！兰帕德，你居然复活了！"],["停手吧！摩耶斯！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIELUOLI,["我们这次相聚在一起，都是因为少主缪斯的召唤，希望你别再做傻事，现在拯救天蛇星盟主才是我们该做的事情！"],["这是真的吗？！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAENDE,["这是真的，之前我们做过太多错误的事情，背叛少主是我们一生难以磨灭的罪状！"],["让我们一起赎罪吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["狂暴电击兔，这次的挑战就作为我改邪归正的证明吧！"],["既然这样…那就继续吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["太感谢你了，狂暴电击兔，我相信等我恢复能力后一定可以拯救天蛇星盟主的！"],["恩恩，那你可要加油咯！"]]],[TaskStoryPlayer.DIALOG,[NPC.KUANGBAODIANJITU,["那我就给你这次机会，0xff00004月3日—4月9日，下午14:00—15:000xffffff！我会在这里等待你的挑战！"],["恩，让我们一起等待这个时刻吧！"]]]];
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
            SocketConnection.send(1022,86060338);
            BufferRecordManager.setMyState(BUFFER_ID,true);
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["大家都看好了，我再怎么说也是天蛇七魔将之一，绝对不能对不起这个称号的！"],["你还是小心为妙啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["狂暴轰天雷！就让我来试试它的威力吧！狂暴电击兔，希望这次你能使出全力！"],["那是一定的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["既然这样，看来我的任务又来了，大家一起努力吧！"],["天蛇七魔将！加油！"]]]];
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
         AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
         {
            NpcDialog.show(NPC.MOYESI,["狂暴电击兔，看到了没有，这就是我说的寒冰铁壁，想冲破这些坚固的寒冰，你还要多努力啊？"],["可恶，下次一定要成功！"],[function():void
            {
               KTool.showMapAllPlayerAndMonster();
               addYellowArrow(FIRST_POS);
            }]);
         });
      }
      
      private static function endFightFirst() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.SEER,["不行，我一定要帮助狂暴电击兔！让我去试试摩耶斯的实力吧！"],["摩耶斯，试试我的实力吧！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,9,"mc9",function():void
            {
               NpcDialog.show(NPC.MOYESI,[MainManager.actorInfo.formatNick + "实力不错嘛！但是你的插手就能帮助狂暴电击兔击败我吗？别太天真了，我不会手下留情的！"],["那就走着瞧吧！"],[function():void
               {
               }]);
            });
         }]);
      }
      
      private static function startFightSecond() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         AnimateManager.playMcAnimate(taskMc,10,"mc10",function():void
         {
            NpcDialog.show(NPC.DIANJITU,["摩耶斯，是这样吗？原来你也不是强大到不可战胜的，我知道如何战胜你！"],["继续吧！"],[function():void
            {
               addYellowArrow(SECOND_POS);
               KTool.showMapAllPlayerAndMonster();
            }]);
         });
      }
      
      private static function endFightSecond() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.SEER,["太好了，让我给你点力量吧！这样你就会更强大了！"],["狂暴电击兔，给你我的力量！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,11,"mc11",function():void
            {
               NpcDialog.show(NPC.DIANJITU,[MainManager.actorInfo.formatNick + "感谢你的帮助，我一定要靠自己的能力战胜对手！"],["别得意，还没击败我呢！"],[function():void
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
         stopAtChildFrame(11);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.MOYESI,["狂暴电击兔，今天就到此为止吧！我们不是对手，是朋友，明天我还会来的！"],["朋友，可能吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]],[TaskStoryPlayer.DIALOG,[NPC.KUANGBAODIANJITU,["希望你明天可以战胜我，当着这么多伙伴的面，你可不要偷懒哦！"],["恩恩，我们会一直支持你的！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,13,"mc13"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来，我也该去修炼了！摩耶斯，我一定会目睹你战胜狂暴电击兔的！"],["加油啊！"]]]];
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
         stopAtChildFrame(14);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.KUANGBAODIANJITU,["摩耶斯，这可是我最后一击，您可要接住哦！"],["来吧！狂暴电击兔！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哇！少主缪斯，你怎么来了！"],["好强大的力量啊！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["大家切磋到这里就可以了，摩耶斯，我们也该离开了！哥哥还在等我们呢！"],["恩恩，多谢少主原谅！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIUSI,["之前的事就不要再提了，现在拯救我哥哥才是最重要的，我可不想失去他！"],["我们这就走！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,15,"mc15"]],[TaskStoryPlayer.DIALOG,[NPC.KUANGBAODIANJITU,["希望你们这次能够成功，后会有期！"],["我想我该找我师父去了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["继续加油哦！狂暴电击兔，希望你有一天可以成为想雷伊一样勇敢的宇宙英雄！"],["放心…我一定可以！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,16,"mc16"]]];
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
         return "狂暴狂暴电击兔vs摩耶斯！曾经的好友如今变成强劲的对手，这场战役谁才是最后的赢家呢？快去诺可撒斯星看看吧！";
      }
      
      public static function get evoTips() : String
      {
         return "穿破寒冰铁壁！狂暴狂暴电击兔vs摩耶斯";
      }
      
      public static function get vsTips() : String
      {
         return "狂暴电击兔vs摩耶斯";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "本轮可获得精灵冰霜能量以及十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "本轮可获得电击兔的精元以及十万经验券";
         }
         return "本轮可获得小型升级秘药以及一万经验券！";
      }
      
      private static function get canBroadcast() : Boolean
      {
         if(time_e3.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT)
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
         if(time_p0.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.PAST)
         {
            return PAST;
         }
         if(time_p0.checkTimeHit(SystemTimerManager.sysDate) == CronTimeVo.HIT)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
   }
}
