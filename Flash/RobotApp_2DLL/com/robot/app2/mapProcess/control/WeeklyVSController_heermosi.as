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
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyVSController_heermosi
   {
      
      public static const TARGET_MAP:uint = 953;
      
      private static const BUFFER_ID:uint = 978;
      
      private static const FOREVER_ID:uint = 14047;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static const ACT_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","14,19","8-14","4","*","2016")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","7","4","*","2016");
      
      private static const BROADCAST_AC:ActivityControl = new ActivityControl([new CronTimeVo("55-60","13,18","8-14","4","*","2016")]);
      
      public static const TIME_TEXT:String = "4月8日—4月14日，14:00-15:00，19:00-20:00";
      
      public static var timeTip:String = "0xff0000" + TIME_TEXT + "0xffffff";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_heermosi()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_heermosi",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86067107);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86067101);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86067104);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86067098);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_953_heermosi_xiuyite"),function(param1:MovieClip):void
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
         SocketConnection.send(1022,86062073);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_heermosi"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("HeermosiAdPanel"),"正在努力打开面板...",TIME_TEXT);
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.XIUYITE,[timeTip + "；我将代表创世神兵向梦境之神发起挑战！我无敌的剑锋，必将终结赫尔墨斯这个虚伪的家伙！"],["可以获得圣剑之灵和梦境之神了！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86067102);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86067103);
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
         stopAtChildFrame(6,1);
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
            CommonUI.addYellowArrow(_map.topLevel,290,110,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,656,195,0);
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
               if(_loc2_ == "heermosi" && _curStep % 2 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("赫尔墨斯",290 + _curStep);
               }
               else if(_loc2_ == "xiuyite" && _curStep % 2 == 1)
               {
                  isFight == true;
                  FightManager.fightNoMapBoss("休伊特",290 + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "heermosi":
                  NpcDialog.show(NPC.HEERMOSI,[nick + "，加入到我和圣剑之灵的对决中来吧。0xff0000每5分钟0xffffff可以挑战我和圣剑之灵其中一个！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我一定会的！"]);
                  break;
               case "xiuyite":
                  NpcDialog.show(NPC.XIUYITE,[nick + "，加入到我和梦境之神的对决中来吧。0xff0000每5分钟0xffffff可以挑战我和梦境之神的其中一个！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我一定会的！"]);
                  break;
               case "dafuni":
                  NpcDialog.show(NPC.DAFUNI,[nick + "，加入到圣剑之灵和梦境之神的对决中来吧。0xff0000每5分钟0xffffff可以挑战圣剑之灵和梦境之神的其中一个！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我一定会的！"]);
                  break;
               case "gemaisi":
                  NpcDialog.show(NPC.GEMAISI,[nick + "，加入到圣剑之灵和梦境之神的对决中来吧。0xff0000每5分钟0xffffff可以挑战圣剑之灵和梦境之神的其中一个！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我一定会的！"]);
                  break;
               case "fuluoduo":
                  NpcDialog.show(NPC.FULUODUO,[nick + "，加入到圣剑之灵和梦境之神的对决中来吧。0xff0000每5分钟0xffffff可以挑战圣剑之灵和梦境之神的其中一个！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我一定会的！"]);
                  break;
               case "luomuluo":
                  NpcDialog.show(NPC.LUOMULUO,[nick + "，加入到圣剑之灵和梦境之神的对决中来吧。0xff0000每5分钟0xffffff可以挑战圣剑之灵和梦境之神的其中一个！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我一定会的！"]);
                  break;
               case "kaxier":
                  NpcDialog.show(NPC.KAXIER,[nick + "，加入到圣剑之灵和梦境之神的对决中来吧。0xff0000每5分钟0xffffff可以挑战圣剑之灵和梦境之神的其中一个！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "heermosi":
               NpcDialog.show(NPC.HEERMOSI,[timeTip + "；我将迎战圣剑之灵休伊特！0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "xiuyite":
               NpcDialog.show(NPC.XIUYITE,[timeTip + "；我将挑战梦境之神赫尔墨斯！0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "dafuni":
               NpcDialog.show(NPC.DAFUNI,[timeTip + "；圣剑之灵休伊特将代表创世六神兵挑战梦境之神！0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "gemaisi":
               NpcDialog.show(NPC.GEMAISI,[timeTip + "；圣剑之灵休伊特将代表创世六神兵挑战梦境之神！0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "fuluoduo":
               NpcDialog.show(NPC.FULUODUO,[timeTip + "；圣剑之灵休伊特将代表创世六神兵挑战梦境之神！0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "luomuluo":
               NpcDialog.show(NPC.LUOMULUO,[timeTip + "；圣剑之灵休伊特将代表创世六神兵挑战梦境之神！0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元0xffffff来就领！"],["我一定会来的！"]);
               break;
            case "kaxier":
               NpcDialog.show(NPC.KAXIER,[timeTip + "；圣剑之灵休伊特将代表创世六神兵挑战梦境之神！0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元0xffffff来就领！"],["我一定会来的！"]);
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
         SocketConnection.send(1022,86067099);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_20140103_1",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["我们是你的同伴，为什么要对我们动手？难道你忘了你是创世神兵，圣剑之灵？！"],["戈麦斯，你仔细看他！"]]],[TaskStoryPlayer.DIALOG,[NPC.KAXIER,["休伊特好像有些异样，而且他跟着赫尔墨斯一起，一定是神域四天王对他做了什么！他已经不是我们认识的那个圣剑之灵休伊特了！"],["这么说他已经变成了我们的对手？"]]],[TaskStoryPlayer.DIALOG,[NPC.XIUYITE,["违抗主人只有死路一条，就我的圣剑来让你们彻底领悟这一点吧！"],["你果然已经不是休伊特了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.DAFUNI,["休伊特，我不相信你会就这样堕落，快点回到我们身边来吧！"],["我可不觉得是堕落。"]]],[TaskStoryPlayer.DIALOG,[NPC.FULUODUO,["我们不能看着休伊特就这样助纣为虐，伙伴们，我们必须唤醒他！"],["嗯，创世神兵决不能被坏人利用！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["哈哈，笑话，他早就已经是我们的先锋了，从此圣剑之灵将会变成你们创世神兵的敌人！"],["我们不会让这种事情发生！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.KAXIER,["伙伴们，抓紧时间，我来拖住赫尔墨斯！"],["顶住，卡希尔！"]]],[TaskStoryPlayer.DIALOG,[NPC.FULUODUO,["我们的力量一定能压制住休伊特体内的魔能！大家加油，我们一起唤醒曾经的圣剑之灵卡希尔！"],["嗯，我们一定可以！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["你们这群家伙还真是顽固，就算你们得逞了，就以为可以对抗我们神域天王了？"],["我们一定会打倒你！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["休伊特，你还记得自己，记得我们吧？你还能知道谁是敌人，谁是朋友吗？"],["当然，我是圣剑之灵休伊特！"]]],[TaskStoryPlayer.DIALOG,[NPC.XIUYITE,["我明白了，就像一场噩梦，感谢你们唤醒了我们，朋友们。现在该让我收拾这些卑鄙的对手了！"],["太好了，休伊特，你终于回来了！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["哈哈哈哈，我早就说魔化你是多此一举，直接解决了就没有这么多乱子。不过也罢，就这样彻底解决你们吧！"],["赫尔墨斯，你今天必将葬身于此！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["好，那我就看看你是不是有和我一战的资本！梦境之神赫尔墨斯，接受你的挑战！"],["赫尔墨斯，今天让你记住圣剑之灵休伊特！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            showNpcs();
            SocketConnection.send(1022,86067100);
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
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.XIUYITE,["赫尔墨斯，你身体的强硬超出了我的想象，不过也不足以抵挡我的剑锋！"],["休伊特，先别这么自信。"]]],[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["等到这场大战分出胜负，一切答案自然都可以揭晓！"],["那就来吧，赫尔墨斯！"]]]];
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
            AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
            {
               NpcDialog.show(NPC.XIUYITE,["就这样的实力也敢自称为神，今天我就把你击落神坛！"],["来吧，我正想看看！"],[function():void
               {
                  addYellowArrow(round);
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
               }]);
            });
         }
         else if(round % 2 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
            {
               NpcDialog.show(NPC.HEERMOSI,["愚蠢的家伙，准备在无边的梦境中等待死亡的降临吧！"],["来吧，我正想看看！"],[function():void
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
         KTool.showMapAllPlayerAndMonster();
         _map.depthLevel.visible = true;
         var _loc1_:int = _curStep;
         if(_loc1_ % 2 == 0)
         {
            NpcDialog.show(NPC.HEERMOSI,[nick + "，没想到你的实力也这么强，快来帮助我一起歼灭创世六神兵吧！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我会继续努力的！"]);
         }
         else if(_loc1_ % 2 == 1)
         {
            NpcDialog.show(NPC.XIUYITE,[nick + "，你的实力真令我吃惊，快来帮助我一起打败梦境之神吧！参加活动100%获得0xff0000圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！0xffffff"],["我一定会坚持到最后的！"]);
         }
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ == 0)
         {
            stopAtChildFrame(6);
         }
         else if(_loc1_ % 2 == 0)
         {
            stopAtChildFrame(7);
         }
         else if(_loc1_ % 2 == 1)
         {
            stopAtChildFrame(8);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["休伊特，不愧是创世之神留下的圣剑，你的战斗力果然不容小视，看来解决你还需要多一些时间！"],["你也比想象中难对付！"]]],[TaskStoryPlayer.DIALOG,[NPC.XIUYITE,["果然有几分实力才敢自称为神，不过我就是渴望击倒你这样强大的对手！"],["好，那我们就继续战斗下去！"]]],[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["明天大战继续，不要忘记了时间哦！" + timeTip + "！"],["不会忘，我会回来的！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.XIUYITE,["都结束了，赫尔墨斯。梦境之神，不过是个笑话！"],["没有这么简单。"]]],[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["你们的实力确实超出了我们的预期，不过我们已经找到了更强大的依靠。很快你们就会见识到他的威慑！"],["你们又在干些什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.XIUYITE,["不管你们还有什么阴谋诡计，我们都会一一粉碎！今天就从你开始！"],["哈哈，你以为你已经战胜我了？"]]],[TaskStoryPlayer.DIALOG,[NPC.HEERMOSI,["即使是我，你们也不可能战胜！别忘了，我是梦境之神赫尔墨斯！"],["那又怎么样？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]]];
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
         return "圣剑之灵VS梦境之神！参加获得即可免费获得圣剑之灵休伊特的精元，梦境之神赫尔墨斯的精元！";
      }
      
      public static function get evoTips() : String
      {
         return "圣剑之灵VS梦境之神";
      }
      
      public static function get vsTips() : String
      {
         return "圣剑之灵VS梦境之神";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(SystemTimerManager.sysBJDate.day >= 1 && SystemTimerManager.sysBJDate.day <= 5)
         {
            if(_loc1_ >= 1 && _loc1_ <= 10)
            {
               return "奖励S级技能石，一万经验券";
            }
            if(_loc1_ == 11)
            {
               return "奖励赫尔墨斯的精元，十万经验券";
            }
            if(_loc1_ == 12)
            {
               return "奖励休伊特的精元，十万经验券";
            }
            return "奖励S级技能石，一万经验券";
         }
         if(_loc1_ == 11)
         {
            return "奖励赫尔墨斯的精元，十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "奖励休伊特的精元，十万经验券";
         }
         if(_loc1_ % 2 == 1)
         {
            return "奖励暗黑战力，一万经验券";
         }
         return "奖励S级技能石，一万经验券";
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
   }
}
