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
   
   public class WeeklyVSController_asidi
   {
      
      public static const TARGET_MAP:uint = 979;
      
      private static const BUFFER_ID:uint = 1052;
      
      private static const FOREVER_ID:uint = 15039;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginDate:Date = new Date(2015,10 - 1,23);
      
      private static var endDate:Date = new Date(2015,10 - 1,29);
      
      private static var activeTimes:Array = [13,18];
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_asidi()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_asidi",0,false,null,null,1);
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
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
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
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_61_mibao"),function(param1:MovieClip):void
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_asidi"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("JibaoEvoPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.ASIDI,[timeTip + "血手阿斯狄VS吉纳波斯！参加活动100%获得" + reward],["我一定要去！","我准备一下就来！"],[function():void
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
            CommonUI.addYellowArrow(_map.topLevel,192,143,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,723,127,0);
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
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               if(_loc2_ == "jinabosi" && _curStep % 2 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("吉纳波斯",645 + _curStep);
               }
               else if(_loc2_ == "asidi" && _curStep % 2 == 1)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("阿斯狄",645 + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "jinabosi":
                  NpcDialog.show(NPC.JINABOSI,[nick + "，来帮助我打败阿斯狄吧。0xff0000每5分钟0xffffff可以挑战我和阿斯狄其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "asidi":
                  NpcDialog.show(NPC.ASIDI,[nick + "，来帮助我打败吉纳波斯吧。0xff0000每5分钟0xffffff可以挑战我和吉纳波斯其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "jibao":
                  NpcDialog.show(NPC.JIBAO,[nick + "，加入到吉纳波斯和阿斯狄的对战中来吧。0xff0000每5分钟0xffffff可以挑战吉纳波斯和阿斯狄其中一个！参加活动100%获得" + reward],["我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "jinabosi":
               NpcDialog.show(NPC.JINABOSI,[timeTip + "我将与阿斯狄展开对决！参加活动免费获得" + reward],["我一定会来的！"]);
               break;
            case "asidi":
               NpcDialog.show(NPC.ASIDI,[timeTip + "我将与吉纳波斯展开对决！参加活动免费获得" + reward],["我一定会来的！"]);
               break;
            case "jibao":
               NpcDialog.show(NPC.JIBAO,[timeTip + "吉纳波斯将迎来阿斯狄的挑战！参加活动免费获得" + reward],["我一定会来的！"]);
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
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["这就是光之迷城？果然蕴藏着无穷的力量，泰坦星系之外居然也有这样的好地方！"],["你是谁?"]]],[TaskStoryPlayer.DIALOG,[NPC.JIBAO,["光之迷城是属于我们吉宝一族的，你是谁？快离开这里！"],["原来是几只野生精灵。"]]],[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["小野怪也敢这么和我血手阿斯狄说话，让你们尝尝我的厉害！"],["你要干什么？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.JIBAO,["阿斯狄，你不要以为光之迷城这么容易被征服！这里有着一位强大的守护神！"],["哦？守护神？"]]],[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["那我倒要看看是什么守护神，快叫他出来吧！"],["你先放开我们！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["哈哈，我当是什么样了不起的守护神，原来只是只超进化的野怪！"],["不要小看吉纳波斯！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIBAO,["吉纳波斯，快帮我们收拾这个坏蛋！"],["放心吧，吉宝！"]]],[TaskStoryPlayer.DIALOG,[NPC.JINABOSI,["阿斯狄，光之迷城不欢迎你！如果你一意孤行，会付出代价的！"],["那我就看看是什么样的代价！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_20140214_1",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            showNpcs();
            BufferRecordManager.setMyState(BUFFER_ID,true);
            ModuleManager.showModule(ClientConfig.getAppModule("JibaoEvoPanel"),"正在努力打开面板...");
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["我欣赏你的勇气，不过你一定会后悔的！"],["说得太早了吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.JINABOSI,["在光之迷城中沉寂了太久，终于又找到对手了！来吧，阿斯狄！"],["那就来吧！"]]]];
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
            AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
            {
               NpcDialog.show(NPC.ASIDI,["是吗？那就看看接下来你是不是还是这么轻松！"],["来吧，我不会畏惧！（点击直接进入对战）","我先准备一下。"],[function():void
               {
                  isFight = true;
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
                  FightManager.fightNoMapBoss("吉纳波斯",645 + _curStep);
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
               NpcDialog.show(NPC.JINABOSI,["我不会放弃，让你看看我吉纳波斯的终极一击！"],["我正想看看！（点击直接进入对战）","我先准备一下。"],[function():void
               {
                  isFight = true;
                  KTool.showMapAllPlayerAndMonster();
                  _map.depthLevel.visible = true;
                  FightManager.fightNoMapBoss("阿斯狄",645 + _curStep);
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
            NpcDialog.show(NPC.JINABOSI,[nick + "，没想到你的实力也这么强，快来帮助我一起打败阿斯狄！参加活动100%获得" + reward],["我会继续努力的！"]);
         }
         else if(_loc1_ % 2 == 1)
         {
            NpcDialog.show(NPC.ASIDI,[nick + "，你的实力真令我吃惊，快来和我一起打败吉纳波斯！参加活动100%获得" + reward],["我会继续努力的！"]);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["居然这样难缠，看来还需要多一些时间才能打败你！"],["你需要多久，我奉陪到底！"]]],[TaskStoryPlayer.DIALOG,[NPC.JINABOSI,["我要让你彻底明白，欺凌弱者的代价！"],["好，那我们就继续战斗下去！"]]],[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["不要忘记了时间哦！" + timeTip + "！"],["不会忘，我会回来的！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["是谁在呼唤我，泰坦星系又发生了什么大事……"],["你在嘀咕什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.JINABOSI,["畏畏缩缩真不像话，快点动手吧！"],["不要吵！"]]],[TaskStoryPlayer.DIALOG,[NPC.ASIDI,["今天算你走运，改天再回来收拾你！"],["我在这里等你！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.JINABOSI,["我没事，只是连续的战斗，太虚弱了！"],["太厉害了，吉纳波斯！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIBAO,["不愧是光之迷城的守护神，又打跑了那个讨厌的家伙！让我们来照顾你吧！"],["谢谢你们了。"]]]];
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
         return "血手阿斯狄侵入光之迷城，吉宝超进化吉纳波斯誓死守卫！参加活动免费获得阿斯狄的精元，吉宝超进化道具！";
      }
      
      public static function get evoTips() : String
      {
         return "阿斯狄VS吉纳波斯！";
      }
      
      public static function get vsTips() : String
      {
         return "阿斯狄VS吉纳波斯！";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(SystemTimerManager.sysBJDate.date == 27 || SystemTimerManager.sysBJDate.date == 28)
         {
            if(_loc1_ == 11)
            {
               return "奖励娜斯光束，小型升级秘药，十万经验券";
            }
            if(_loc1_ == 12)
            {
               return "奖励阿斯狄的精元，小型升级秘药，十万经验券";
            }
            if(_loc1_ % 2 == 1)
            {
               return "奖励暗黑战力，小型升级秘药，一万经验券";
            }
            return "奖励泰坦之灵300个，小型升级秘药，一万经验券";
         }
         if(_loc1_ == 11)
         {
            return "奖励娜斯光束，小型升级秘药，十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "奖励阿斯狄的精元，小型升级秘药，十万经验券";
         }
         if(_loc1_ % 2 == 1)
         {
            return "奖励泰坦之灵300个，小型升级秘药，一万经验券";
         }
         return "奖励泰坦之灵300个，小型升级秘药，一万经验券";
      }
      
      private static function get timeTip() : String
      {
         return "0xff000010月23日—10月29日，13:00-14:00，18:00-19:000xffffff";
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
      
      private static function get nick() : String
      {
         return MainManager.actorInfo.formatNick;
      }
      
      private static function get reward() : String
      {
         return TextFormatUtil.getRedTxtInStory("阿斯狄的精元，吉宝超进化道具！");
      }
   }
}
