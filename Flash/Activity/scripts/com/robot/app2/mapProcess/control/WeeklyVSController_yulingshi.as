package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
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
   
   public class WeeklyVSController_yulingshi
   {
      
      public static const TARGET_MAP:uint = 947;
      
      private static const BUFFER_ID:uint = 1052;
      
      private static const FOREVER_ID:uint = 14064;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static const ACT_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","13,19","5-11","2","*","2016")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","11","2","*","2016");
      
      private static const BROADCAST_AC:ActivityControl = new ActivityControl([new CronTimeVo("50-60","12,18","5-11","2","*","2016")]);
      
      public static const TIME_TEXT:String = "2月5日—2月11日，13:00-14:00，19:00-20:00";
      
      private static const timeTip:String = "0xff0000" + TIME_TEXT + "0xffffff";
      
      private static var activeTimes:Array = [13,19];
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_yulingshi()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_yulingshi",0,false,null,null,1);
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
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86069198);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         StatManager.sendStat2014("蒙娜丽莎VS羽灵狮","进入活动场景","常规复用");
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_947_mushroom"),function(param1:MovieClip):void
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
         SocketConnection.send(1022,86068574);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_yulingshi"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("YulingshiVSMengnalishaMainPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.YULINGSHI,[timeTip + "羽灵狮VS丽莎布布超进化！参加活动100%免费获得" + reward],["我一定要去！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86069199);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86069200);
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
         stopAtChildFrame(4,1);
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
         if(param1 % 2 == 0)
         {
            CommonUI.addYellowArrow(_map.topLevel,675,177,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,192,143,0);
         }
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
         var _loc2_:String = String(String(param1.target.name).split("_")[1]);
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               if(_loc2_ == "B" && _curStep % 2 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("蒙娜丽莎",861 + _curStep);
               }
               else if(_loc2_ == "A" && _curStep % 2 == 1)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("羽灵狮",861 + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "B":
                  NpcDialog.show(NPC.MENGNALISHA,[nick + "，来帮助我打败羽灵狮吧。。0xff0000每5分钟0xffffff可以挑战我和羽灵狮其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "A":
                  NpcDialog.show(NPC.YULINGSHI,[nick + "，来帮助我打败蒙娜丽莎吧。0xff0000每5分钟0xffffff可以挑战我和蒙娜丽莎其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "C":
                  NpcDialog.show(NPC.SAKESEN,[nick + "，加入到蒙娜丽莎和羽灵狮的对战中来吧。0xff0000每5分钟0xffffff可以挑战蒙娜丽莎和羽灵狮其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "D":
                  NpcDialog.show(NPC.SANLINGSHOU_SHIFU,[nick + "，加入到蒙娜丽莎和羽灵狮的对战中来吧。0xff0000每5分钟0xffffff可以挑战蒙娜丽莎和羽灵狮其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "E":
                  NpcDialog.show(NPC.JUMOGUAI,[nick + "，加入到蒙娜丽莎和羽灵狮的对战中来吧。0xff0000每5分钟0xffffff可以挑战蒙娜丽莎和羽灵狮其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "F":
                  NpcDialog.show(NPC.MOYUXIANZI,[nick + "，加入到蒙娜丽莎和羽灵狮的对战中来吧。0xff0000每5分钟0xffffff可以挑战蒙娜丽莎和羽灵狮其中一个！参加活动100%获得" + reward],["我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "B":
               NpcDialog.show(NPC.MENGNALISHA,[timeTip + "我将于羽灵狮展开对决，捍卫草系主宠的地位！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "A":
               NpcDialog.show(NPC.YULINGSHI,[timeTip + "我将击败草系主宠蒙娜丽莎，一起来见证吧！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "C":
               NpcDialog.show(NPC.SAKESEN,[timeTip + "蒙娜丽莎将迎来羽灵狮的挑战，看看谁更有资格成为新一代灵兽！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "D":
               NpcDialog.show(NPC.SANLINGSHOU_SHIFU,[timeTip + "蒙娜丽莎将迎来羽灵狮的挑战，看看谁更有资格成为新一代灵兽！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "E":
               NpcDialog.show(NPC.JUMOGUAI,[timeTip + "蒙娜丽莎将代表我们草系迎战飞行系灵宠—羽灵狮，蒙娜丽莎加油！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "F":
               NpcDialog.show(NPC.MOYUXIANZI,[timeTip + "蒙娜丽莎将代表我们草系迎战飞行系灵宠—羽灵狮，蒙娜丽莎加油！参加活动100%免费获得" + reward],["我一定会来的！"]);
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
         holdFight();
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86068567);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["我没有错，错的是你！飞行—电—地面才是宇宙间最完美的三属性，而不是你的水火草！"],["这件事情很早之前就已经有定论了。"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["水火草的完美组合已经被时间证明，这点不容置疑！数千年前的原始元素之争引起了太多的恩怨，你还想重演一遍吗？"],["当年只不过是因为你侥幸获胜而已。"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["这么多年，我终于找到克制你水火草的办法了，接下来就让你大开眼界吧！"],["你又研究出了什么东西？"]]],[TaskStoryPlayer.FUL_MOVIE,["task_20140228_1",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["太好了，斯凯尔，既然我们分不出胜负，那就让我们的徒弟来比试一下吧，证明飞行—电—地面三元素的完美！"],["来就来吧，不会怕你的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["蒙娜丽莎，小心！幻变灵狮是上古灵兽，拥有深不可测的实力，而且他又分支进化成了克制你的飞行系！千万不能大意！"],["飞行系？尽管来吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.MENGNALISHA,["师尊，放心吧！我一定能捍卫水火草的主宠地位，什么飞行电地面的，听起来就奇怪，哼！"],["不知深浅的小辈！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.MENGNALISHA,["岂有此理！居然敢这么欺负我们草系精灵，我绝不会放过你！"],["草系的实力不过如此！"]]],[TaskStoryPlayer.DIALOG,[NPC.YULINGSHI,["草系，不，整个水火草都已经过时了，接下来准备迎接飞行—电—地面三元素的时代吧，我们才能成为新一代三灵兽！"],["痴心妄想！"]]],[TaskStoryPlayer.DIALOG,[NPC.MENGNALISHA,["还没好好感受超进化之后的力量，既然你送上门来了，那就让你第一个领教一下吧！"],["我拭目以待。"]]]];
         SocketConnection.send(1022,86069831);
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            _map.topLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            showNpcs();
            SocketConnection.send(1022,86069832);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            ModuleManager.showModule(ClientConfig.getAppModule("YulingshiVSMengnalishaMainPanel"),"正在努力打开面板...");
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         };
         _map.topLevel.visible = false;
         storyPlayer.start();
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.YULINGSHI,["草系的精灵，早晚你们会屈服在飞行系之下的，属于水火草三主宠的时代就从今天开始完结吧！"],["说得太早了吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.MENGNALISHA,["敢质疑我们的实力，我们就让你明白水火草才是名副其实的三主宠！"],["那就来吧！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            _map.topLevel.visible = true;
            if(cb != null)
            {
               cb();
            }
         };
         _map.topLevel.visible = false;
         storyPlayer.start();
      }
      
      private static function startFight() : void
      {
         var round:int = 0;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         round = _curStep;
         _map.topLevel.visible = false;
         if(round % 2 == 0)
         {
            AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
            {
               _map.topLevel.visible = true;
               NpcDialog.show(NPC.YULINGSHI,["草系主宠，果然拥有和传说一样强硬的防御，不知道接下来你还能不能挡住！"],["来吧，我不会畏惧！（点击直接进入对战）","我先准备一下。"],[function():void
               {
                  isFight = true;
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
                  FightManager.fightNoMapBoss("蒙娜丽莎",861 + _curStep);
               },function():void
               {
                  addYellowArrow(round);
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
               }]);
            });
         }
         else if(round % 2 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
            {
               _map.topLevel.visible = true;
               NpcDialog.show(NPC.MENGNALISHA,["居然可以挣开的我藤蔓束缚，看你能不能躲过我接下来这一击！"],["我正想看看！（点击直接进入对战）","我先准备一下。"],[function():void
               {
                  isFight = true;
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
                  FightManager.fightNoMapBoss("羽灵狮",861 + _curStep);
               },function():void
               {
                  addYellowArrow(round);
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
               }]);
            });
         }
      }
      
      private static function endFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ % 2 == 0)
         {
            NpcDialog.show(NPC.MENGNALISHA,[nick + "，没想到你的实力也这么强，快来帮助我一起打败羽灵狮！参加活动100%获得" + reward],["我会继续努力的！"]);
         }
         else if(_loc1_ % 2 == 1)
         {
            NpcDialog.show(NPC.YULINGSHI,[nick + "，没想到你的实力也这么强，快来帮助我一起打败蒙娜丽莎！参加活动100%获得" + reward],["我会继续努力的！"]);
         }
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ == 0)
         {
            stopAtChildFrame(4);
         }
         else if(_loc1_ % 2 == 0)
         {
            stopAtChildFrame(5);
         }
         else if(_loc1_ % 2 == 1)
         {
            stopAtChildFrame(6);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.YULINGSHI,["居然这样难缠，看来还需要多一些时间才能打败你！"],["你需要多久，我奉陪到底！"]]],[TaskStoryPlayer.DIALOG,[NPC.MENGNALISHA,["我要让你彻底明白，欺凌弱者的代价！"],["好，那我们就继续战斗下去！"]]],[TaskStoryPlayer.DIALOG,[NPC.YULINGSHI,["不要忘记了时间哦！" + timeTip + "！"],["不会忘，我会回来的！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["萨克森，放弃吧！你是不可能颠覆水火草三主宠地位的，你的元素理论虽然新颖，可是并不完美！"],["不要着急，这才刚开始。"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["如果你认为幻变灵狮的能力只有这一点，那就大错特错了！"],["那我就看看接下来会发生什么。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["到你了斯凯尔，这次你会派谁上场，水系还是火系？"],["原来是电系的分支进化。"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["既然你是电系，那就让你输得心服口服，接下来就让鲁斯王超进化来迎战吧！"],["居然派出了被电系克制的水系……"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["斯凯尔，你还是这么狂妄，这次就让你输个明白！"],["那我们就走着瞧吧。"]]]];
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
         _map.topLevel.visible = false;
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
         return "蒙娜丽莎VS羽灵狮！三主宠迎来最强挑战，幻变灵狮分支进化，单挑三大超进化主宠！宇宙间原始三元素之争火热开战！";
      }
      
      public static function get evoTips() : String
      {
         return "羽灵狮VS蒙娜丽莎！";
      }
      
      public static function get vsTips() : String
      {
         return "羽灵狮VS蒙娜丽莎！";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(SystemTimerManager.sysBJDate.date == 24 || SystemTimerManager.sysBJDate.date == 25)
         {
            if(_loc1_ == 8)
            {
               return "奖励蘑菇怪超进化道具，一万经验券，泰坦之灵300个";
            }
            if(_loc1_ == 10)
            {
               return "奖励小豆芽超进化道具，一万经验券，泰坦之灵300个";
            }
            if(_loc1_ == 11)
            {
               return "奖励蒙娜丽莎专属刻印，十万经验券，泰坦之灵300个";
            }
            if(_loc1_ == 12)
            {
               return "奖励羽灵狮进化道具，十万经验券，泰坦之灵300个";
            }
            if(_loc1_ % 2 == 1)
            {
               return "奖励暗黑战力，一万经验券，泰坦之灵300个";
            }
            return "奖励泰坦之灵300个，一万经验券";
         }
         if(_loc1_ == 8)
         {
            return "奖励蘑菇怪超进化道具，一万经验券，泰坦之灵300个";
         }
         if(_loc1_ == 10)
         {
            return "奖励小豆芽超进化道具，一万经验券，泰坦之灵300个";
         }
         if(_loc1_ == 11)
         {
            return "奖励蒙娜丽莎专属刻印，十万经验券，泰坦之灵300个";
         }
         if(_loc1_ == 12)
         {
            return "奖励羽灵狮进化道具，十万经验券，泰坦之灵300个";
         }
         if(_loc1_ % 2 == 1)
         {
            return "奖励一万经验券，泰坦之灵300个";
         }
         return "奖励泰坦之灵300个，一万经验券";
      }
      
      private static function get canBroadcast() : Boolean
      {
         return BROADCAST_AC.isInActivityTime;
      }
      
      public static function get activeStatus() : String
      {
         if(ACT_AC.isIncoming)
         {
            return INCOMING;
         }
         if(ACT_AC.isPast)
         {
            return PAST;
         }
         if(ACT_AC.isInActivityTime)
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
      
      private static function get reward() : String
      {
         return TextFormatUtil.getRedTxtInStory("羽灵狮，蒙娜丽莎专属全能刻印，巨蘑怪，魔域仙子！");
      }
   }
}
