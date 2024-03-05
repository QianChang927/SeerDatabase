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
   
   public class WeeklyVSController_suolunsen
   {
      
      public static const TARGET_MAP:uint = 960;
      
      private static const BUFFER_ID:uint = 1011;
      
      private static const FOREVER_ID:uint = 14057;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginTime:CronTimeVo = new CronTimeVo("*","13","31","7","*","2015");
      
      private static const ACT_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","13,19","31","7","*","2015"),new CronTimeVo("*","13,19","1-6","8","*","2015")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","6","8","*","2015");
      
      private static const BROAD_AC:ActivityControl = new ActivityControl([new CronTimeVo("50-60","12,18","31","7","*","2015"),new CronTimeVo("50-60","12,18","1-6","8","*","2015")]);
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_suolunsen()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_suolunsen",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86068191);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86068184);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86068187);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86068181);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_960_suolunsen"),function(param1:MovieClip):void
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_suolunsen"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HuangjintianmaVsSuolunsenPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.HUANGJINTIANMA,[timeTip + "我将再度降临，代表天马一族对抗暗黑魔君索伦森！" + TextFormatUtil.getRedTxtInStory("参加活动100%获得黄金天马的精元，黄金天马刻印！")],["可以获得黄金天马，我一定去！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86068185);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86068186);
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
            CommonUI.addYellowArrow(_map.topLevel,712,286,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,246,300,0);
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
         if(SystemTimerManager.sysBJDate.hours > 15)
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
               if(_loc2_ == "suolunsen" && _curStep % 2 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("索伦森",454 + _curStep);
               }
               else if(_loc2_ == "huangjintianma" && _curStep % 2 == 1)
               {
                  isFight == true;
                  FightManager.fightNoMapBoss("黄金天马",454 + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "suolunsen":
                  NpcDialog.show(NPC.SUOLUOSENG,[nick + "，加入到我和黄金天马的对决中来吧。0xff0000每5分钟0xffffff可以挑战我和黄金天马的其中一个，参加活动100%获得" + TextFormatUtil.getRedTxtInStory("黄金天马的精元，黄金天马全新刻印！")],["我一定会的！"]);
                  break;
               case "huangjintianma":
                  NpcDialog.show(NPC.HUANGJINTIANMA,[nick + "，加入到我和索伦森的对决中来吧。0xff0000每5分钟0xffffff可以挑战我和索伦森的其中一个，参加活动100%获得" + TextFormatUtil.getRedTxtInStory("黄金天马的精元，黄金天马全新刻印！")],["我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "suolunsen":
               NpcDialog.show(NPC.SUOLUOSENG,[timeTip + "；我将迎来黄金天马的挑战！0xff0000参加活动100%获得黄金天马的精元，黄金天马全新刻印！0xffffff"],["我一定会来的！"]);
               break;
            case "huangjintianma":
               NpcDialog.show(NPC.HUANGJINTIANMA,[timeTip + "；我将代表天马一族击破索伦森的阴谋！0xff0000参加活动100%获得黄金天马的精元，黄金天马全新刻印！0xffffff"],["我一定会来的！"]);
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
         SocketConnection.send(1022,86067837);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_20131129_1_1",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["你来了正好，也省的我再去一个个找你们天马一族。"],["我们天马一族不会怕你的。"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["索伦森，连四大神兽也要敬让我们天马一族三分，你不觉得你有些太过自信了吗？"],["你说四大神兽？"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["敢与我暗黑魔君为敌的，都只有死路一条，不管是什么四大神兽，还是你们天马？"],["实在是太嚣张了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["黄金天马果然有两下子，看来这一趟会很有收获！"],["你只会收获失败！"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["蔑视天马一族的，都付出了惨重的代价，你也不会例外，索伦森！"],["好，那我就看看是怎样的代价！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            showNpcs();
            SocketConnection.send(1022,86067838);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            ModuleManager.showModule(ClientConfig.getAppModule("HuangjintianmaVsSuolunsenPanel"),"正在努力打开面板...");
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["我可没有躲躲闪闪，就让这场大战开始吧！"],["这也正是我期待的！"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["来吧，让你见识一下天马一族的顶级战力！"],["那就开始吧！"]]]];
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
               NpcDialog.show(NPC.HUANGJINTIANMA,["接下来会让你感受到天马一族的攻击，绝不会比速度逊色！"],["来吧，我正想看看！"],[function():void
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
               NpcDialog.show(NPC.SUOLUOSENG,["哦？看来有些小看你的，不过不知道接下来这下你是否还能够抵挡呢？"],["来吧，我正想看看！"],[function():void
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
            NpcDialog.show(NPC.SUOLUOSENG,[nick + "，没想到你的实力也这么强，快来帮助我打败黄金天马吧！参加活动100%获得" + TextFormatUtil.getRedTxt("黄金天马的精元，黄金天马全新刻印！")],["我会继续努力的！"]);
         }
         else if(_loc1_ % 2 == 1)
         {
            NpcDialog.show(NPC.HUANGJINTIANMA,[nick + "，你的实力真令我吃惊，快来帮助我打败索伦森吧！参加活动100%获得" + TextFormatUtil.getRedTxt("金天马的精元，黄金天马全新刻印！")],["我一定会坚持到最后的！"]);
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
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         stopAtChildFrame(5);
         story = [[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["索伦森，你也不过如此，我还以为暗黑魔君有着怎么样深不可测的实力！"],["又在说大话。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["这些话等到你真的打败我了再说吧！千万不要明天就不敢再来了！"],["我有那么胆小吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["那就明天继续吧，不要忘记了时间哦！" + timeTip],["不会忘，我会回来的！"]]]];
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
         stopAtChildFrame(5);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["索伦森，果然只会逃跑，就不能正面和我一战吗？"],["可以，不过不是时候。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["黄金天马，你的实力我已经领教了。你很强大，不过我真正担心的对手，并不是你！"],["又在说这些废话！"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANGJINTIANMA,["我说过蔑视我们天马一族的，都会付出代价，难道你这么快就忘了吗？"],["可惜你没有这个机会了。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["我唯一担心的那个强者，很快就会彻底觉醒，不过很可惜，并不是你！"],["难道还有别人？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]]];
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
         return "黄金天马VS索伦森！天马一族皇者再临，参加活动即可免费获得黄金天马的精元！";
      }
      
      public static function get evoTips() : String
      {
         return "黄金天马VS索伦森！";
      }
      
      public static function get vsTips() : String
      {
         return "黄金天马VS索伦森！";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(SystemTimerManager.sysBJDate.date == 24)
         {
            if(_loc1_ == 12)
            {
               return "奖励黄金天马的精元，小型升级秘药，十万经验券";
            }
         }
         return "奖励天马战魂，小型升级秘药，一万经验券";
      }
      
      private static function get timeTip() : String
      {
         return "0xff00007月31日—8月6日，13:00-14:00，19:00-20:000xffffff";
      }
      
      private static function get canBroadcast() : Boolean
      {
         return BROAD_AC.isInActivityTime;
      }
      
      public static function get activeStatus() : String
      {
         if(beginTime.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
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
   }
}
