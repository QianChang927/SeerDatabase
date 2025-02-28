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
   
   public class WeeklyVSController_zudi
   {
      
      public static const TARGET_MAP:uint = 44;
      
      private static const BUFFER_ID:uint = 966;
      
      private static const FOREVER_ID:uint = 14045;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginTime:CronTimeVo = new CronTimeVo("*","18","30","10","*","2015");
      
      private static const ACTIVE_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","18","30-31","10","*","2015"),new CronTimeVo("*","18","1-5","11","*","2015")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","19","5","11","*","2015");
      
      private static const BROADCAST_AC:ActivityControl = new ActivityControl([new CronTimeVo("55-60","17","30-31","10","*","2015"),new CronTimeVo("55-60","17","1-5","11","*","2015")]);
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_zudi()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_zudi",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86066667);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86066660);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86066663);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86066657);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_44_zudi_evo2"),function(param1:MovieClip):void
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
            MapManager.changeMap(TARGET_MAP);
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_zudi"),"正在努力打开面板...");
         }
         else
         {
            SocketConnection.send(1022,86066665);
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/ZudiEvoPanel2"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.JIGENISI,[timeTip + "；我已经拥有了超进化的力量，只要索伦森还敢进犯圣域之门，就给他点教训尝尝！" + nick + "一定要准时来为我们加油啊！"],["祖迪超进化可以获得了，我一定要去！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86066661);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86066662);
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
         stopAtChildFrame(5,1);
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
         if(param1 % 3 == 0)
         {
            CommonUI.addYellowArrow(_map.topLevel,276,80,0);
         }
         else if(param1 % 3 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,538,249,0);
         }
         else if(param1 % 3 == 2)
         {
            CommonUI.addYellowArrow(_map.topLevel,454,166,0);
         }
      }
      
      private static function checkBoss(param1:int) : void
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
               if(_loc2_ == "suolunsen" && _curStep % 3 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("索伦森",253 + _curStep);
               }
               else if(_loc2_ == "yameidisi" && _curStep % 3 == 1)
               {
                  isFight == true;
                  FightManager.fightNoMapBoss("亚梅迪丝",253 + _curStep);
               }
               else if(_loc2_ == "jigenisi" && _curStep % 3 == 2)
               {
                  isFight == true;
                  FightManager.fightNoMapBoss("吉格尼斯",253 + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "suolunsen":
                  NpcDialog.show(NPC.SUOLUOSENG,["0xff0000每5分钟0xffffff可以挑战我，亚梅迪丝和吉格尼斯其中一个，我倒要看看这三个家伙能不能抵挡住我暗黑魔君。"],["嗯嗯，我一定会的！"]);
                  break;
               case "yameidisi":
                  NpcDialog.show(NPC.YAMEIDISI,["0xff0000每5分钟0xffffff可以挑战我，索伦森和吉格尼斯其中一个，我们师徒誓死守卫圣域之门！"],["嗯嗯，加油亚梅迪丝！"]);
                  break;
               case "jigenisi":
                  NpcDialog.show(NPC.JIGENISI,["0xff0000每5分钟0xffffff可以挑战我，索伦森和亚梅迪丝其中一个，我们师徒誓死守卫圣域之门！"],["嗯嗯，加油吉格尼斯！"]);
                  break;
               case "kaluodasi":
                  NpcDialog.show(NPC.KALUODASI,["0xff0000每5分钟0xffffff可以挑战索伦森，亚梅迪丝和吉格尼斯其中一个，师父，亚梅迪丝加油！我们一起守卫圣域之门！"],["嗯嗯，我一定会的！"]);
                  break;
               case "meinuoxi":
                  NpcDialog.show(NPC.MEINUOXI,["0xff0000每5分钟0xffffff可以挑战索伦森，亚梅迪丝和吉格尼斯其中一个，师父，亚梅迪丝加油！我们一起守卫圣域之门！"],["嗯嗯，我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "suolunsen":
               NpcDialog.show(NPC.SUOLUOSENG,[timeTip + "；看我碾碎这些不知死活的祖系一族，圣域之门终将属于我！" + nick + "一定要准时来为我加油啊！0xff0000参加活动100%获得祖拉祖迪师徒的精元和超进化道具！0xffffff"],["我一定会来的！"]);
               break;
            case "yameidisi":
               NpcDialog.show(NPC.YAMEIDISI,[timeTip + "；祖系一族誓死守卫圣域之门，师父超进化的力量一定可以阻止索伦森！" + nick + "一定要准时来为我们加油啊！0xff0000参加活动100%获得祖拉祖迪师徒的精元和超进化道具！0xffffff"],["我一定会来的！"]);
               break;
            case "jigenisi":
               NpcDialog.show(NPC.JIGENISI,[timeTip + "；超进化是我唯一抵挡索伦森的机会了，拼死一搏守卫圣域之门！" + nick + "一定要准时来为我们加油啊！0xff0000参加活动100%获得祖拉祖迪师徒的精元和超进化道具！0xffffff"],["我一定会来的！"]);
               break;
            case "kaluodasi":
               NpcDialog.show(NPC.KALUODASI,[timeTip + "；祖系一族誓死守卫圣域之门，师父超进化的力量一定可以阻止索伦森！" + nick + "一定要准时来为我们加油啊！0xff0000参加活动100%获得祖拉祖迪师徒的精元和超进化道具！0xffffff"],["我一定会来的！"]);
               break;
            case "meinuoxi":
               NpcDialog.show(NPC.MEINUOXI,[timeTip + "；祖系一族誓死守卫圣域之门，师父超进化的力量一定可以阻止索伦森！" + nick + "一定要准时来为我们加油啊！0xff0000参加活动100%获得祖拉祖迪师徒的精元和超进化道具！0xffffff"],["我一定会来的！"]);
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
         SocketConnection.send(1022,86066658);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["滚出圣域之门，趁我还没有彻底动怒之前！"],["圣域之门是我们的！"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["在师父完成修炼之前，我们会誓死守卫圣域之门，决不让你前进半步！"],["居然还有勇气这么说话。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["好吧，既然你们那个师父不在，那就先解决你们吧！"],["绝没你想象得那么简单！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["没想到你还会超进化，不过凭这样就想阻止我也未免太天真了。"],["我会尽我所能阻止你！"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEIDISI,["不要小看未免祖系一族，在圣域之门有祖先的护佑，我们会无比强大！"],["那就让我看看吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["我也不喜欢太弱的对手，希望你可以让我稍微打起一点精神来！"],["索伦森，不要太猖狂了！"]]],[TaskStoryPlayer.FUL_MOVIE,["active_20131227_2",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["有点意思，看来果然是师父，比徒弟确实厉害一点。"],["多谢夸奖。"]]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["索伦森，圣域之门不容侵犯，赶紧离开这里！"],["没人可以命令我！"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["你以为这两下就能阻止我吗？既然你们都来了，那就一起解决吧！"],["没有你想象的那么简单。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["师徒合力，有意思，就让你们一起上吧，感受一下暗黑魔君的强大压迫！"],["祖系一族向来齐心。"]]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["索伦森，既然你执意这样，祖系一族誓死守卫圣域之门！"],["那就看看结果会怎样！"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            showNpcs();
            SocketConnection.send(1022,86066659);
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["吉格尼斯，你的超进化很让我期待，千万不要让我失望哦！"],["我可是继承了祖先传承的力量。"]]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["在圣域之门，祖系一族不可战胜！索伦森，今天不光是我，每个祖系精灵都会让你见识到他们的顽强！"],["果然有点勇气。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["顽强可并不代表强大，希望你们的勇气可以弥补实力，让这场战斗不会那么无趣，哈哈哈哈哈……"],["来吧，我们不怕你！"]]]];
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
      
      private static function startFight() : void
      {
         var round:int = 0;
         round = _curStep;
         if(round % 3 == 0)
         {
            AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
            {
               addYellowArrow(round);
            });
         }
         else if(round % 3 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
            {
               addYellowArrow(round);
            });
         }
         else if(round % 3 == 2)
         {
            AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
            {
               addYellowArrow(round);
            });
         }
      }
      
      private static function endFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ % 3 == 0)
         {
            NpcDialog.show(NPC.SUOLUOSENG,[nick + "，没想到你的实力也这么强。快来帮助一起解决掉这群顽固的祖系一族！"],["我会坚持到最后的！"]);
         }
         else if(_loc1_ % 3 == 1)
         {
            NpcDialog.show(NPC.YAMEIDISI,[nick + "，没想到你的实力也这么强。快来帮助一起打败暗黑魔君，守卫圣域之门吧！"],["我会帮助你的！"]);
         }
         else if(_loc1_ % 3 == 2)
         {
            NpcDialog.show(NPC.JIGENISI,[nick + "，没想到你的实力也这么强。快来帮助一起打败暗黑魔君，守卫圣域之门吧！"],["我会帮助你的！"]);
         }
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ == 0)
         {
            stopAtChildFrame(5);
         }
         else if(_loc1_ % 3 == 0)
         {
            stopAtChildFrame(6);
         }
         else if(_loc1_ % 3 == 1)
         {
            stopAtChildFrame(7);
         }
         else if(_loc1_ % 3 == 2)
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["你们师徒果然有两下子，现在我对你们和圣域之门越来越感兴趣了。"],["我们不会退缩的！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["索伦森，我们会坚守到最后，无论你来多少次，我们都不会退缩的！"],["好，明天我还会来的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["不要忘记了时间哦！" + timeTip + "！"],["不会忘，我们就在这里等着！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["祖系一族，你们就只有这点能耐吗？看来你们是阻止不了我了……"],["住手，索伦森！"]]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["如果不能守卫圣域之门，那我只能和你同归于尽了，接受我最后的一击吧！"],["不要啊，师父！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.YAMEIDISI,["师父，刚刚那是什么？"],["是从圣域之门中飞出来的。"]]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["圣域之门是属于我们祖系一族的神秘禁地，里面的奥秘我也不清楚，但是我们必须保卫圣域之门，祖先也会护佑我们的！"],["明白了，师父！"]]]];
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
         return "祖系之师祖迪超进化！参加活动即可100%免费领取祖迪祖拉师徒的精元，祖拉超进化道具，祖迪超进化道具和专属刻印！快去看看吧！";
      }
      
      public static function get evoTips() : String
      {
         return "祖迪超进化！";
      }
      
      public static function get vsTips() : String
      {
         return "祖迪超进化！";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "本轮可获得祖拉超进化道具/圣域守护X5";
         }
         if(_loc1_ == 12)
         {
            return "本轮可获得祖迪超进化道具+专属刻印/圣域守护X5";
         }
         if(_loc1_ % 2 == 0)
         {
            return "本轮可获得S级技能石";
         }
         if(_loc1_ == 1 || _loc1_ == 3)
         {
            return "本轮可获得圣域守护X1";
         }
         if(_loc1_ == 5 || _loc1_ == 7)
         {
            return "本轮可获得圣域守护X2";
         }
         return "本轮可获得圣域守护X3";
      }
      
      private static function get timeTip() : String
      {
         return "0xff000010月30日—10月5日，18:00-19:000xffffff";
      }
      
      private static function get canBroadcast() : Boolean
      {
         return BROADCAST_AC.isInActivityTime;
      }
      
      public static function get activeStatus() : String
      {
         if(beginTime.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return INCOMING;
         }
         if(ACTIVE_AC.isPast)
         {
            return PAST;
         }
         if(ACTIVE_AC.isInActivityTime)
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
