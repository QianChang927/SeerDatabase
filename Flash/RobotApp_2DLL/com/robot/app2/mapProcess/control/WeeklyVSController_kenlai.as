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
   
   public class WeeklyVSController_kenlai
   {
      
      public static const TARGET_MAP:uint = 936;
      
      private static const BUFFER_ID:uint = 861;
      
      private static const FOREVER_ID:uint = 14015;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static const ACT_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","13,19","29-31","1","*","2016"),new CronTimeVo("*","13,19","1-4","2","*","2016")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","4","2","*","2016");
      
      private static const BROADCAST_AC:ActivityControl = new ActivityControl([new CronTimeVo("55-60","12,18","29-31","1","*","2016"),new CronTimeVo("55-60","12,18","1-4","2","*","2016")]);
      
      public static const TIME_TEXT:String = "1月29日—2月4日，每天13:00—14:00，19:00—20:00";
      
      private static const TIME_STR:String = "0xff0000" + TIME_TEXT + "，0xffffff";
      
      private static var _widget:MovieClip;
      
      private static var taskMc:MovieClip;
      
      private static var isFight:Boolean = false;
       
      
      public function WeeklyVSController_kenlai()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_kenlai",0,false,null,null,1);
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
         ResourceManager.getResource(ClientConfig.getAppRes("TwelveRoundsCountDownPanel2"),function(param1:MovieClip):void
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
         SocketConnection.send(1022,86063183);
         SocketConnection.send(1022,_curStep + 86063369);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86063363);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86063366);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86063177);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_936_vs_kenlai"),function(param1:MovieClip):void
         {
            taskMc = param1["act"];
            MapManager.currentMap.controlLevel.addChild(taskMc);
            addEvents();
            checkActivity();
         });
      }
      
      private static function addEvents() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onClickDialog);
      }
      
      private static function removeEvents() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onClickDialog);
      }
      
      public static function initEquip() : void
      {
         SocketConnection.send(1022,86063368);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_kenlai"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/KenbalaitaEvolutionPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.MAFALIAO,["肯巴莱塔即将进入我为他创造的试炼之途。 " + TIME_STR + "一起来帮助肯巴莱塔吧！据说肯巴莱塔曾经和创世神兵有过莫大的渊源！"],["我一定会去的！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86063364);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86063365);
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
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
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
         frameHoldAt(-1);
      }
      
      private static function frameHoldAt(param1:int) : void
      {
         if(param1 == -1)
         {
            stopAtChildFrame(3,1);
         }
         else if(param1 % 2 == 0)
         {
            stopAtChildFrame(4);
         }
         else if(param1 % 2 == 1)
         {
            stopAtChildFrame(5);
         }
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
      
      private static function checkBoss(param1:int) : void
      {
         var isFighted:Boolean;
         var isNextRound:Boolean;
         var step:uint = 0;
         var i:int = 0;
         var value:int = param1;
         var data:ByteArray = new ByteArray();
         data.writeInt(value);
         data.position = 0;
         _fightStatus = KTool.readDataByBits(data,32);
         if(SystemTimerManager.sysBJDate.hours > 15)
         {
            i = 0;
            while(i < 12)
            {
               _fightStatus[i] = _fightStatus[i + 12];
               i++;
            }
         }
         if(_fightStatus[11] == 1)
         {
            finishAcitivty();
            return;
         }
         step = SystemTimerManager.sysBJDate.minutes / 5;
         isFighted = Boolean(_fightStatus[step] == 1);
         isNextRound = Boolean(_curStep != step);
         if(isFighted)
         {
            frameHoldAt(step);
         }
         else if(isNextRound)
         {
            _curStep = step;
            if(step == 0)
            {
               startEnterMc(function():void
               {
                  startFight(step);
               });
            }
            else
            {
               startFight(step);
            }
         }
         else
         {
            addYellowArrow(step);
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         if(!isFight)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
         }
         if(_map)
         {
            removeEvents();
            DisplayUtil.removeForParent(taskMc);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
         }
      }
      
      private static function onClickDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case "mafaliao":
                  if(_fightStatus && !_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("玛法里奥",1593 + _curStep);
                  }
                  else
                  {
                     NpcDialog.show(NPC.MAFALIAO,[user + "0xff0000每五分钟0xffffff可以挑战我和肯莱可其中一个。肯巴莱塔的爆发需要你的帮助！"],["嗯！我知道该怎么做！"]);
                  }
                  break;
               case "kenlaike":
                  if(_fightStatus && !_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("肯莱克",1593 + _curStep);
                  }
                  else
                  {
                     NpcDialog.show(NPC.KENLAIKE,[user + "0xff0000每五分钟0xffffff可以挑战我们其中一个。我必须要打破这股异界能量的束缚！我一定会变得更加强大的！"],["你一定可以的！"]);
                  }
                  break;
               case "kendite":
                  NpcDialog.show(NPC.KENDITE,["发挥你最强的战斗力吧！" + user + "0xff0000每五分钟0xffffff可以挑战他们其中一个。我们一起期待肯巴莱塔变得更加强大！"],["嗯！我们一起加油！"]);
                  break;
               case "kenzhade":
                  NpcDialog.show(NPC.KENZHADE,["发挥你最强的战斗力吧！" + user + "0xff0000每五分钟0xffffff可以挑战他们其中一个。我们一起期待肯巴莱塔变得更加强大！"],["嗯！我们一起加油！"]);
            }
         }
         else
         {
            switch(_loc2_)
            {
               case "mafaliao":
                  NpcDialog.show(NPC.MAFALIAO,[TIME_STR + "只有不断地历练激发出肯巴莱塔的潜能，他才能变得更加强大！但是，那股异界的能量……"],["我们一起帮助肯巴莱塔！"]);
                  break;
               case "kenlaike":
                  NpcDialog.show(NPC.KENLAIKE,[TIME_STR + "同玛法里奥一起激发我的潜能！我一定会变得更加强大的！"],["放心吧！你一定可以！"]);
                  break;
               case "kendite":
                  NpcDialog.show(NPC.KENDITE,[TIME_STR + "玛法里奥将对肯巴莱塔展开试炼！肯巴莱塔一定会变得更加强大的！"],["我一定会帮忙的！"]);
                  break;
               case "kenzhade":
                  NpcDialog.show(NPC.KENZHADE,[TIME_STR + "玛法里奥将对肯巴莱塔展开试炼！肯巴莱塔一定会变得更加强大的！"],["我一定会帮忙的！"]);
            }
         }
      }
      
      private static function onFightOverHandler(param1:PetFightEvent) : void
      {
         isFight = false;
         frameHoldAt(_curStep);
         endFight(_curStep);
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86063361);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.KENZHADE,["成功了？太棒啦！玛法里奥，你果然厉害！"],["等等！"]]],[TaskStoryPlayer.DIALOG,[NPC.KENDITE,["你们看！肯巴莱塔全身的能量依然不稳定。到底怎么回事？"],["我我先封锁它的能量！"]]],[TaskStoryPlayer.DIALOG,[NPC.MAFALIAO,["肯巴莱塔曾经拥有巨大的能量，但是体内却有股莫名的异界能量。我现在只能先封锁他的能量不向外释放。接下来，就只能靠他自己的潜能了！"],["那我们该怎么办？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.MAFALIAO,[user + TIME_STR + "和我一起进行对肯巴莱塔的试炼。将帅之才，只要潜心历练，激发潜能，他日必定一步冲天！"],["期待肯巴莱塔重现威力！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster(false);
            showNpcs();
            SocketConnection.send(1022,86063362);
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
         var cb:Function = param1;
         AnimateManager.playMcAnimate(taskMc,3,"mc3",function():void
         {
            NpcDialog.show(NPC.MAFALIAO,["看来我们中计了。他的潜能被这股来自异界的能量封住了。我们必须打破这股异界的能量。"],["一定是索伦森在捣鬼！"],[function():void
            {
               NpcDialog.show(NPC.KENDITE,["肯巴莱塔，你要挺住。我们一定会找到办法帮助你的！你是我们最最忠诚的守护者！我们都不能放弃！"],["一起期待肯巴莱塔的爆发！"],[cb]);
            }]);
         });
      }
      
      private static function startFight(param1:int) : void
      {
         var step:int = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         if(step % 2 == 0)
         {
            AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
            {
               NpcDialog.show(NPC.MAFALIAO,["被肯莱克击中的这一下，竟然会使异界能量出现在我的体内。可恶！"],["别担心！还有我！"],[function():void
               {
                  addYellowArrow(step);
               }]);
            });
         }
         else if(step % 2 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
            {
               NpcDialog.show(NPC.KENLAIKE,["这股力量不收我的控制，我根本没办法感受到自身能量的存在！怎么办？怎么办！"],["肯莱克，我来帮你！"],[function():void
               {
                  addYellowArrow(step);
               }]);
            });
         }
      }
      
      private static function endFight(param1:int) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         if(param1 % 2 == 0)
         {
            NpcDialog.show(NPC.MAFALIAO,[user + "感谢你的帮助。肯莱克如果想进化为肯巴莱塔，必须消除体内的这股异界能量。我们抓紧时间，不能再等了！"],["嗯！我们一起上！"]);
         }
         else if(param1 % 2 == 1)
         {
            NpcDialog.show(NPC.KENLAIKE,[user + "感谢你！我感觉体内这股能量在一点点的变弱。可是……啊！"],["肯莱克！"]);
         }
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
            CommonUI.addYellowArrow(_map.topLevel,815,240,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,328,279,0);
         }
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var cb:Function = param1;
         stopAtChildFrame(8,1);
         AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
         {
            NpcDialog.show(NPC.SEER,["创世神兵也来了。难道……难道肯巴莱塔曾经是创世神兵吗？"],["肯莱克坚持住！"],[cb]);
         });
      }
      
      private static function startFinishMc(param1:Function = null) : void
      {
         var cb:Function = param1;
         stopAtChildFrame(9,1);
         AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
         {
            NpcDialog.show(NPC.SUOLUOSENG,["创世神兵！为何你们也要处处与我作对！"],["我们只想回到第六星系！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
               {
                  NpcDialog.show(NPC.MAFALIAO,["是创世神兵！看来肯巴莱塔的确不简单！我们不能停下来！坚持住，宇宙的危机需要你们！ "],["我们一起努力！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["可是玛法里奥，你还好吗？我感觉到你体内能量的异动！到底是怎么回事？"],["一切都是逆界之门！"],[function():void
                     {
                        NpcDialog.show(NPC.MAFALIAO,["当我在这里重生的那一刻，我的实力就已经大不如以前了！所以你们一定要坚持住！宇宙的危机需要你们！"],["我们绝不会放弃！"],[cb]);
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      public static function get adTips() : String
      {
         return "重生的肯巴莱塔即将进入玛法里奥的试炼。勇敢的赛尔，3月20日—3月26日，让我们同玛法里奥一起期待肯巴莱塔的爆发！";
      }
      
      public static function get vsTips() : String
      {
         return "肯莱克VS玛法里奥";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc2_:String = null;
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(_loc1_ == 12)
         {
            _loc2_ = "肯巴莱塔的精元，小型升级秘药，十万经验券";
         }
         else if(_loc1_ == 11)
         {
            if(SystemTimerManager.sysBJDate.date == 19)
            {
               _loc2_ = "玛法里奥的精元，小型升级秘药，十万经验券";
            }
            else
            {
               _loc2_ = "玛法里奥精元碎片，小型升级秘药，十万经验券";
            }
         }
         else if(_loc1_ % 2 == 0)
         {
            _loc2_ = "宿命之光碎片，小型升级秘药，一万经验券";
         }
         else
         {
            _loc2_ = "逆界浮砂，小型升级秘药，一万经验券";
         }
         return _loc2_;
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
      
      private static function get user() : String
      {
         return MainManager.actorInfo.formatNick;
      }
   }
}
