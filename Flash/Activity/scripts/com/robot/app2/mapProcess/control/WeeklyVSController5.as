package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
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
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyVSController5
   {
      
      public static const TARGET_MAP:uint = 344;
      
      private static const BUFFER_ID:uint = 1154;
      
      private static const FOREVER_ID:uint = 15030;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginTime:CronTimeVo = new CronTimeVo("*","14","6","6","*","2014");
      
      private static var activeTime_pm_1:CronTimeVo = new CronTimeVo("*","14","6-12","6","*","2014");
      
      private static var activeTime_ev_1:CronTimeVo = new CronTimeVo("*","18","6-12","6","*","2014");
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","12","6","*","2014");
      
      private static var broadcastTime_pm_1:CronTimeVo = new CronTimeVo("50-60","13","6-12","6","*","2014");
      
      private static var broadcastTime_ev_1:CronTimeVo = new CronTimeVo("50-60","17","6-12","6","*","2014");
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController5()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel5",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86067805);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86067792);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86067795);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86067789);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_344_takelin"),function(param1:MovieClip):void
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel5"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TakeximuEvoAdPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.TAKEXIMU,[timeTip + "；龙族霸王奥布雷带领龙族三巨头超进化，塔克林终于要完成超进化了！参加活动100%获得" + TextFormatUtil.getRedTxtInStory("塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）！")],["塔克林超进化了，我一定要去！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86067793);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86067794);
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
         stopAtChildFrame(3,1);
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
            CommonUI.addYellowArrow(_map.topLevel,217,286,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,738,269,0);
         }
      }
      
      private static function checkBoss(param1:int) : void
      {
         var _loc4_:uint = 0;
         CommonUI.removeYellowArrow(_map.topLevel);
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(param1);
         _loc2_.position = 0;
         _fightStatus = KTool.readDataByBits(_loc2_,32);
         if(activeTime_ev_1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
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
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               if(_loc2_ == "takeximu" && _curStep % 2 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("塔克西姆",417 + _curStep);
               }
               else if(_loc2_ == "aobulei" && _curStep % 2 == 1)
               {
                  isFight == true;
                  FightManager.fightNoMapBoss("奥布雷",417 + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "takeximu":
                  NpcDialog.show(NPC.TAKEXIMU,[nick + "，加入到我和奥布雷的对决中来吧。0xff0000每5分钟0xffffff可以挑战我和奥布雷的其中一个，参加活动100%获得" + TextFormatUtil.getRedTxtInStory("塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）！")],["我一定会的！"]);
                  break;
               case "aobulei":
                  NpcDialog.show(NPC.AOBULEI,[nick + "，加入到我和塔克西姆的对决中来吧。0xff0000每5分钟0xffffff可以挑战我和塔克西姆的其中一个，参加活动100%获得" + TextFormatUtil.getRedTxtInStory("塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）")],["我一定会的！"]);
                  break;
               case "hakesasi":
                  NpcDialog.show(NPC.HAKESASI,[nick + "，加入到奥布雷和塔克西姆的对决中来吧。0xff0000每5分钟0xffffff可以挑战奥布雷和塔克西姆的其中一个，参加活动100%获得" + TextFormatUtil.getRedTxtInStory("塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）！")],["我一定会的！"]);
                  break;
               case "saiweier":
                  NpcDialog.show(NPC.SAIWEIER,[nick + "，加入到奥布雷和塔克西姆的对决中来吧。0xff0000每5分钟0xffffff可以挑战奥布雷和塔克西姆的其中一个，参加活动100%获得" + TextFormatUtil.getRedTxtInStory("塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）！")],["我一定会的！"]);
                  break;
               case "taxige":
                  NpcDialog.show(NPC.TAXIGE,[nick + "，加入到奥布雷和塔克西姆的对决中来吧。0xff0000每5分钟0xffffff可以挑战奥布雷和塔克西姆的其中一个，参加活动100%获得" + TextFormatUtil.getRedTxtInStory("塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）！")],["我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "takeximu":
               NpcDialog.show(NPC.TAKEXIMU,[timeTip + "；我将在龙族霸王奥布雷的帮助下完成超进化！0xff0000塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "aobulei":
               NpcDialog.show(NPC.AOBULEI,[timeTip + "；我将帮助塔克林完成超进化！0xff0000塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "hakesasi":
               NpcDialog.show(NPC.HAKESASI,[timeTip + "；龙族巨头塔克林超进化！塔克林加油！0xff0000塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "saiweier":
               NpcDialog.show(NPC.SAIWEIER,[timeTip + "；龙族巨头塔克林超进化！塔克林加油！0xff0000塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "taxige":
               NpcDialog.show(NPC.TAXIGE,[timeTip + "；龙族巨头塔克林超进化！塔克林加油！0xff0000塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）0xffffff来就领！"],["我一定会来的！"]);
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
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86067790);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.AOBULEI,["塔克林，这么多年，看来你的进步还是很有限啊……"],["等待您的试炼！"]]],[TaskStoryPlayer.DIALOG,[NPC.TAKELIN,["越来越多的强者涌现，龙族需要绝对的力量来维系荣耀，来吧奥布雷大人，让我变得更加强大！"],["你真的准备好了吗？"]]],[TaskStoryPlayer.FUL_MOVIE,["task_20140117_2",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.AOBULEI,["塔克林，哦不，塔克西姆，你感受到身上的力量了吗？"],["我已经感受到了！"]]],[TaskStoryPlayer.DIALOG,[NPC.TAKEXIMU,["我期待你的考验，奥布雷大人，让我的超进化力量彻底觉醒吧！"],["好，我们马上就开始。"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            showNpcs();
            SocketConnection.send(1022,86067791);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            ModuleManager.showModule(ClientConfig.getAppModule("TakeximuEvoAdPanel"),"正在努力打开面板...");
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
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.TAKEXIMU,["我期待成为更加强大的战士，让我感受到这种力量吧！"],["我也期待你的成长。"]]],[TaskStoryPlayer.DIALOG,[NPC.AOBULEI,["塔克西姆，我的试炼会非常严格，准备好迎接这场最严峻的考验吧！"],["那就来吧！"]]]];
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
         var round:int = 0;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         round = _curStep;
         if(round % 2 == 0)
         {
            AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
            {
               NpcDialog.show(NPC.AOBULEI,["塔克西姆，你的力量看来没有增强多少，不知道接下来能不能承受住我下一次攻击！"],["来吧，我相信我的实力！"],[function():void
               {
                  addYellowArrow(round);
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
               }]);
            });
         }
         else if(round % 2 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
            {
               NpcDialog.show(NPC.TAKEXIMU,["奥布雷大人，这次没有让你失望吧！如果还不够，就看接下来这一击吧！"],["来吧，我还想再看看！"],[function():void
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
            NpcDialog.show(NPC.TAKEXIMU,[nick + "，没想到你的实力也这么强，快来帮助我一起超进化吧！参加活动100%获得" + TextFormatUtil.getRedTxt("塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）！")],["我会继续努力的！"]);
         }
         else if(_loc1_ % 2 == 1)
         {
            NpcDialog.show(NPC.AOBULEI,[nick + "，你的实力真令我吃惊，快来和我一起帮助龙族三巨头超进化！参加活动100%获得" + TextFormatUtil.getRedTxt("塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）！")],["我一定会坚持到最后的！"]);
         }
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ == 0)
         {
            stopAtChildFrame(3);
         }
         else if(_loc1_ % 2 == 0)
         {
            stopAtChildFrame(4);
         }
         else if(_loc1_ % 2 == 1)
         {
            stopAtChildFrame(5);
         }
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         stopAtChildFrame(5);
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.AOBULEI,["塔克西姆，你超进化后的力量令我吃惊，不过你似乎还需要更多时间来适应。"],["确实有些太仓促了。"]]],[TaskStoryPlayer.DIALOG,[NPC.TAKEXIMU,["不过我有信心，已经感受到了这么强大的力量，我一定要掌握它！"],["好，那我们就继续战斗下去！"]]],[TaskStoryPlayer.DIALOG,[NPC.AOBULEI,["那么我们明天继续，不要忘记了时间哦！" + timeTip + "！"],["不会忘，我会回来的！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.TAKEXIMU,["原来这才是属于我的真实力量，我等待这一天太久了！"],["好好利用你的力量，塔克西姆！"]]],[TaskStoryPlayer.DIALOG,[NPC.AOBULEI,["决战之日越来越近了，你们要抓紧时间，接下来，就是塞维尔了！"],["我已经准备好了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIWEIER,["看到塔西亚和塔克林超进化，我早就迫不及待了，来吧，奥布雷大人！"],["我喜欢你的热血！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]]];
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
         return "霸王龙VS塔克林超进化！参加获得即可免费获得塔克林超进化道具，100级该隐，暗黑战力（价值10钻石）！";
      }
      
      public static function get evoTips() : String
      {
         return "霸王龙VS塔克林超进化！";
      }
      
      public static function get vsTips() : String
      {
         return "霸王龙VS塔克林超进化！";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(SystemTimerManager.sysBJDate.date == 7 || SystemTimerManager.sysBJDate.date == 8)
         {
            if(_loc1_ == 11)
            {
               return "奖励龙神之力，龙族战令，小型升级秘药，十万经验券";
            }
            if(_loc1_ == 12)
            {
               return "奖励龙神之力，塔克林超进化道具，小型升级秘药，十万经验券";
            }
            if(_loc1_ % 2 == 1)
            {
               return "奖励暗黑战力，小型升级秘药，一万经验券";
            }
            return "奖励龙族战令，小型升级秘药，一万经验券";
         }
         if(_loc1_ == 11)
         {
            return "奖励龙神之力，龙族战令，小型升级秘药，十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "奖励龙神之力，塔克林超进化道具，小型升级秘药，十万经验券";
         }
         if(_loc1_ % 2 == 1)
         {
            return "奖励S级技能石，小型升级秘药，一万经验券";
         }
         return "奖励龙族战令，小型升级秘药，一万经验券";
      }
      
      private static function get timeTip() : String
      {
         return "0xff00006月6日-6月12日，14:00-15:00，18：00-19:000xffffff";
      }
      
      private static function get canBroadcast() : Boolean
      {
         if(broadcastTime_pm_1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT || broadcastTime_ev_1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
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
         if(activeTime_ev_1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.PAST)
         {
            return PAST;
         }
         if(activeTime_pm_1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT || activeTime_ev_1.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
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
   }
}
