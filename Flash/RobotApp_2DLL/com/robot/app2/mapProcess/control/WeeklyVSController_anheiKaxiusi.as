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
   
   public class WeeklyVSController_anheiKaxiusi
   {
      
      public static const TARGET_MAP:uint = 962;
      
      private static const BUFFER_ID:uint = 917;
      
      private static const FOREVER_ID:uint = 14031;
      
      private static const MARK_ID:uint = 20263;
      
      private static const MARK_TASK:uint = 1587;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static const ACT_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","13,19","8-14","1","*","2016")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","14","1","*","2016");
      
      private static const BROADCAST_AC:ActivityControl = new ActivityControl([new CronTimeVo("55","12,18","8-14","1","*","2016")]);
      
      public static const TIME_TEXT:String = "1月8日—1月14日，13:00-14:00，19:00-20:00";
      
      private static const TIME_STR:String = "0xff0000" + TIME_TEXT + "0xffffff";
      
      private static const GELAIAO:String = "gelaiao";
      
      private static const GEMAISI:String = "gemaisi";
      
      private static const AOSIKA:String = "aosika";
      
      private static const SUOLUNSEN:String = "suolunsen";
      
      private static var _widget:MovieClip;
      
      private static var taskMc:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_anheiKaxiusi()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_anheiKaxiusi",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86065443);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86065436);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86065439);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         SocketConnection.send(1022,86065433);
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_962_vs_anheiKaxiusi"),function(param1:MovieClip):void
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
         SocketConnection.send(1022,86065441);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_anheiKaxiusi"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/SaintVSDarkKaxiusiPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         if(activeStatus != PAST)
         {
            NpcDialog.show(NPC.GELAIAO,[TIME_STR + "，我将赢来圣弓之灵戈麦斯的挑战，为了主人，为了暗黑战神联盟的荣誉，我将拼死一战！"],["可以获得圣弓之灵了，我一定要去！","我准备一下就来！"],[function():void
            {
               MapManager.changeMap(TARGET_MAP);
            }]);
            if(MapManager.currentMap.id == 1)
            {
               SocketConnection.send(1022,86065437);
            }
            else if(MapManager.currentMap.id == 7)
            {
               SocketConnection.send(1022,86065438);
            }
         }
      }
      
      public static function initEquipAndNPC(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86065437);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86065438);
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
         if(param1 % 2 == 0)
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
      
      private static function addYellowArrow(param1:int) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.showMapAllPlayerAndMonster();
         _map.depthLevel.visible = true;
         if(param1 % 2 == 0)
         {
            CommonUI.addYellowArrow(_map.topLevel,738,212,0);
         }
         else
         {
            CommonUI.addYellowArrow(_map.topLevel,227,212,0);
         }
      }
      
      private static function checkBoss(param1:int) : void
      {
         var data:ByteArray;
         var isFighted:Boolean;
         var isNextRound:Boolean;
         var step:uint = 0;
         var value:int = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         data = new ByteArray();
         data.writeInt(value);
         data.position = 0;
         _fightStatus = KTool.readDataByBits(data,32);
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
            startFight(step);
         }
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
         if(_map)
         {
            removeEvents();
            DisplayUtil.removeForParent(taskMc);
            CommonUI.removeYellowExcal(_map.topLevel);
            CommonUI.removeYellowArrow(_map.topLevel);
            _map = null;
            taskMc = null;
         }
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc3_:String = null;
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case GELAIAO:
                  if(_fightStatus[_curStep] == 0 && _curStep % 2 == 0)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("格莱奥",_curStep + 143);
                  }
                  else
                  {
                     NpcDialog.show(NPC.GELAIAO,[user + "，快来和我一起战胜圣弓之灵吧！0xff0000每五分钟0xffffff可以挑战我和圣弓之灵的其中一个！"],["加油，格莱奥！"]);
                  }
                  break;
               case GEMAISI:
                  if(_fightStatus[_curStep] == 0 && _curStep % 2 == 1)
                  {
                     isFight = true;
                     FightManager.fightNoMapBoss("戈麦斯",_curStep + 143);
                  }
                  else
                  {
                     NpcDialog.show(NPC.GEMAISI,[user + "，加入到暗黑卡修斯对我的挑战中来吧。0xff0000每五分钟0xffffff可以挑战我和暗黑卡修斯的其中一个，延续创世神兵的荣耀！"],["加油，圣弓之灵！"]);
                  }
                  break;
               case AOSIKA:
                  NpcDialog.show(NPC.AOSIKA,["0xff0000每五分钟0xffffff可以挑战圣弓之灵和暗黑卡修斯的其中一个。邪不胜正，创世神兵的神威一定可以战胜暗黑战神联盟！"],["嗯嗯，我一定会的！"]);
                  break;
               case "fuluoduo":
                  NpcDialog.show(NPC.FULUODUO,["0xff0000每五分钟0xffffff可以挑战圣弓之灵和暗黑卡修斯的其中一个。邪不胜正，创世神兵的神威一定可以战胜暗黑战神联盟！"],["嗯嗯，我一定会的！"]);
                  break;
               case "luomuluo":
                  NpcDialog.show(NPC.LUOMULUO,["0xff0000每五分钟0xffffff可以挑战圣弓之灵和暗黑卡修斯的其中一个。邪不胜正，创世神兵的神威一定可以战胜暗黑战神联盟！"],["嗯嗯，我一定会的！"]);
                  break;
               case SUOLUNSEN:
                  NpcDialog.show(NPC.SUOLUOSENG,["0xff0000每五分钟0xffffff可以挑战圣戒之灵和暗黑布莱克的其中一个。暗黑战神联盟雪耻的机会来了，就此终结创世神兵！"],["嗯嗯，我一定会的！"]);
                  break;
               case "yilandi":
                  NpcDialog.show(NPC.YILANDI,["0xff0000每五分钟0xffffff可以挑战圣戒之灵和暗黑布莱克的其中一个。暗黑战神联盟雪耻的机会来了，就此终结创世神兵！"],["嗯嗯，我一定会的！"]);
                  break;
               case "aixinge":
                  NpcDialog.show(NPC.AIXINGE,["0xff0000每五分钟0xffffff可以挑战圣戒之灵和暗黑布莱克的其中一个。暗黑战神联盟雪耻的机会来了，就此终结创世神兵！"],["嗯嗯，我一定会的！"]);
                  break;
               case "nuoyier":
                  NpcDialog.show(NPC.NUOYIER,["0xff0000每五分钟0xffffff可以挑战圣戒之灵和暗黑布莱克的其中一个。暗黑战神联盟雪耻的机会来了，就此终结创世神兵！"],["嗯嗯，我一定会的！"]);
            }
         }
         else
         {
            switch(_loc2_)
            {
               case GELAIAO:
                  NpcDialog.show(NPC.GELAIAO,[TIME_STR + "。这次我对手是圣弓之灵戈麦斯，一个强得足够引起我兴趣的对手" + user + "一定要准时来见证我的胜利！"],["我一定会来的！"]);
                  break;
               case GEMAISI:
                  NpcDialog.show(NPC.GEMAISI,[TIME_STR + "。我将于暗黑卡修斯展开最终对决！创世神兵会在五大星系延续荣耀，为创世之神和圣翼之灵报仇！" + user + "一定要准时来为我助威啊！"],["我一定会来的！"]);
                  break;
               case AOSIKA:
                  NpcDialog.show(NPC.AOSIKA,[TIME_STR + "。圣弓之灵戈麦斯将于暗黑卡修斯展开最终对决！" + user + "一定要准时来啊！0xff0000戈麦斯的精元，格莱奥的精元来就领！0xffffff"],["我一定会来的！"]);
                  break;
               case "fuluoduo":
                  NpcDialog.show(NPC.FULUODUO,[TIME_STR + "。圣弓之灵戈麦斯将于暗黑卡修斯展开最终对决！" + user + "一定要准时来啊！0xff0000戈麦斯的精元，格莱奥的精元来就领！0xffffff"],["我一定会来的！"]);
                  break;
               case "luomuluo":
                  NpcDialog.show(NPC.LUOMULUO,[TIME_STR + "。圣弓之灵戈麦斯将于暗黑卡修斯展开最终对决！" + user + "一定要准时来啊！0xff0000戈麦斯的精元，格莱奥的精元来就领！0xffffff"],["我一定会来的！"]);
                  break;
               case SUOLUNSEN:
                  NpcDialog.show(NPC.SUOLUOSENG,[TIME_STR + "。圣弓之灵戈麦斯将于暗黑卡修斯展开最终对决！" + user + "一定要准时来啊！0xff0000戈麦斯的精元，格莱奥的精元来就领！0xffffff"],["我一定会来的！"]);
                  break;
               case "yilandi":
                  NpcDialog.show(NPC.YILANDI,[TIME_STR + "。圣弓之灵戈麦斯将于暗黑卡修斯展开最终对决！" + user + "一定要准时来啊！0xff0000戈麦斯的精元，格莱奥的精元来就领！0xffffff"],["我一定会来的！"]);
                  break;
               case "aixinge":
                  NpcDialog.show(NPC.AIXINGE,[TIME_STR + "。圣弓之灵戈麦斯将于暗黑卡修斯展开最终对决！" + user + "一定要准时来啊！0xff0000戈麦斯的精元，格莱奥的精元来就领！0xffffff"],["我一定会来的！"]);
                  break;
               case "nuoyier":
                  NpcDialog.show(NPC.NUOYIER,[TIME_STR + "。圣弓之灵戈麦斯将于暗黑卡修斯展开最终对决！" + user + "一定要准时来啊！0xff0000戈麦斯的精元，格莱奥的精元来就领！0xffffff"],["我一定会来的！"]);
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
         SocketConnection.send(1022,86065434);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["对付这几个家伙，我自己的力量就足够了，能够抵挡住圣弓之灵攻击的没有几个人。"],["好狂妄的家伙！"]]],[TaskStoryPlayer.DIALOG,[NPC.GELAIAO,["看来传言果然是真的，作为跟随创世之神征战四方的神弓，你确实有两下子。"],["谢谢你的恭维。"]]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["败在我的箭下也是你的光荣，如果你的实力能得到我的认可，我会在打败你之后把你的名字刻在我的弓上，你觉得怎么样？"],["哈哈，看来你不会有这个机会了。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["不错，看来你的实力确实比以前有长进，你的名字够资格刻上我的神弓了。"],["谢谢你的好意了。"]]],[TaskStoryPlayer.DIALOG,[NPC.GELAIAO,["不过你们创世神兵的实力看起来可不怎么样，话说那个圣翼之灵，还真是不堪一击啊，哈哈哈哈……"],["混蛋，你居然还敢提她？"]]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["今天，我们的新仇旧恨一起算！达芙妮的仇，我一定会替她报！"],["那就要看你有没有那个本事了！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_20131206_1",true]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["索伦森，早晚我会找你算账，既然你还有这么多手下，那我就把他们一个个先清理掉！"],["我不会畏惧你的。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["不是谁都有挑战我的资格，尤其是现在已经不可阻挡的我，奥斯卡，我重返第六星系的那天，就是你们圣灵系的末日！"],["圣灵系只会永世长存。"]]],[TaskStoryPlayer.DIALOG,[NPC.AOSIKA,["圣灵系的手下败将，卑微无耻的越狱者。你的威胁听起来真是可笑，我只是在等待一个特别的日子，然后彻底干掉你。"],["哦？是吗？"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["先能击败我的这些干将再说吧，看看这一次的对抗谁能胜出。"],["我也拭目以待。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,[TIME_STR + "。圣弓之灵戈麦斯将于暗黑卡修斯展开最终对决！" + user + "一定要准时来啊！0xff0000戈麦斯的精元，格莱奥的精元来就领！0xffffff"],["我一定会来的！"]]]];
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
            SocketConnection.send(1022,86065435);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            _map.depthLevel.visible = true;
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.GELAIAO,["谁下地狱还不知道呢？真该让你们这些傲慢的创世神兵尝尝长眠地下的无尽痛苦！"],["这个我没有兴趣。"]]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["不过既然你这么想念那个地方，我可以再送你回去！"],["那就看谁先回去了。"]]]];
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
      
      private static function startFight(param1:int) : void
      {
         var step:int = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         if(step % 2 == 0)
         {
            AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
            {
               NpcDialog.show(NPC.GEMAISI,["想得太简单了，离我越近你就越危险，安心地受死吧！"],["那我看看你的力量！"],[function():void
               {
                  addYellowArrow(step);
               }]);
            });
         }
         else if(step % 2 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
            {
               NpcDialog.show(NPC.GELAIAO,["认输？想都别想，让你见识一下我真正的实力！"],["那我看看你的实力。"],[function():void
               {
                  addYellowArrow(step);
               }]);
            });
         }
      }
      
      private static function endFight(param1:int) : void
      {
         var step:int = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         if(step % 2 == 0)
         {
            NpcDialog.show(NPC.GELAIAO,[user + "，没想到你的实力也这么强。快来帮助我们暗黑战神联盟打败创世神兵吧！"],["我会努力的！"],[function():void
            {
            }]);
         }
         else if(step % 2 == 1)
         {
            NpcDialog.show(NPC.GEMAISI,[user + "，你的实力真令我吃惊，你愿意加入我们一起对抗暗黑战神联盟吗？"],["我非常愿意！"],[function():void
            {
            }]);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["格莱奥，看来你还有两下子，解决你还需要多一点时间。"],["你也比想象中麻烦。"]]],[TaskStoryPlayer.DIALOG,[NPC.GELAIAO,["既然来了就没想走，敢不敢明天再和我决一胜负？"],["好，有什么不敢的！"]]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["不要忘记了时间哦！" + TIME_STR + "！"],["不会忘，我们会回来的！"]]]];
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
         stopAtChildFrame(6,1);
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["格莱奥，果然有两下，让我们再大战三百回合！"],["这也正是我所想的。"]]],[TaskStoryPlayer.DIALOG,[NPC.GELAIAO,["彻底必败圣弓之灵戈麦斯，从此扬名立万，我不会错过这个机会的！"],["你们等等！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.GEMAISI,["伊兰迪？没想到你这么快就出场了，我可一直想领教你的暗黑雷光之翼呢！"],["谢谢你的敬仰。"]]],[TaskStoryPlayer.DIALOG,[NPC.YILANDI,["那么你们呢？是你戈麦斯，还是说再换一个？"],["就我了，不用换了。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            _map.conLevel["act"].visible = false;
            if(cb != null)
            {
               cb();
            }
         };
         storyPlayer.start();
      }
      
      public static function get adTips() : String
      {
         return "圣弓之灵VS暗黑卡修斯！第三只圣灵系精灵现身！创世神兵圣弓之灵首次放送，暗黑卡修斯免费领取，快去看看吧！";
      }
      
      public static function get evoTips() : String
      {
         return "圣弓之灵VS暗黑卡修斯";
      }
      
      public static function get vsTips() : String
      {
         return "圣弓之灵VS暗黑卡修斯";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "本轮可获得格莱奥的精元、十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "本轮可获得戈麦斯的精元、十万经验券";
         }
         return "S级技能石、一万经验券";
      }
      
      private static function get canBroadcast() : Boolean
      {
         return BROADCAST_AC.isInActivityTime;
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
         if(ACT_AC.isIncoming)
         {
            return INCOMING;
         }
         if(ACT_AC.isPast)
         {
            return PAST;
         }
         if(ACT_AC.isInActivityTime == CronTimeVo.HIT)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
      
      private static function get user() : String
      {
         return MainManager.actorInfo.formatNick;
      }
   }
}
