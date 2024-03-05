package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
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
   
   public class WeeklyVSController_zudi_family
   {
      
      public static const TARGET_MAP:uint = 44;
      
      private static const BUFFER_ID:uint = 1308;
      
      private static const FOREVER_ID:uint = 15022;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static const timeTip:String = "0xff00003月11日—3月17日，14:00-15:00，18:00-19:000xffffff";
      
      private static const time_gap:uint = 15;
      
      private static var time_inc:CronTimeVo = new CronTimeVo("*","14","11","3","*","2016");
      
      private static var time_act:CronTimeVo = new CronTimeVo("*","14,18","11-17","3","*","2016");
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","10","3","*","2016");
      
      private static var time_bc:CronTimeVo = new CronTimeVo("55-59","13,17","11-17","3","*","2016");
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_zudi_family()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_zudi_family",0,false,null,null,1);
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
         SocketConnection.send(1022,86066197);
         SocketConnection.send(1022,_curStep + 86066201);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86066194);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86060762);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86066191);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_44_zudi_evo"),function(param1:MovieClip):void
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_zudi_family"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/ZudiEvoPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.YAMEISI,[timeTip + "；我们三兄弟誓死守卫圣域之门，等待师父完成超进化！" + nick + "参加活动就可以获得祖系三兄弟的精元和专属刻印！"],["祖系师徒又出现了，我一定要去！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86066195);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86066196);
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
            CommonUI.addYellowArrow(_map.topLevel,694,134,0);
         }
         else if(param1 % 3 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,608,186,0);
         }
         else if(param1 % 3 == 2)
         {
            CommonUI.addYellowArrow(_map.topLevel,724,287,0);
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
         if(SystemTimerManager.sysBJDate.hours > time_gap)
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
               if(_loc2_ == "yameisi" && _curStep % 3 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("亚梅丝",228 + _curStep);
                  SocketConnection.send(1022,86062102);
               }
               else if(_loc2_ == "kaluodasi" && _curStep % 3 == 1)
               {
                  isFight == true;
                  FightManager.fightNoMapBoss("卡洛达斯",228 + _curStep);
                  SocketConnection.send(1022,86062102);
               }
               else if(_loc2_ == "meinuoxi" && _curStep % 3 == 2)
               {
                  isFight == true;
                  FightManager.fightNoMapBoss("梅诺西",228 + _curStep);
                  SocketConnection.send(1022,86062102);
               }
               return;
            }
            switch(_loc2_)
            {
               case "yameisi":
                  NpcDialog.show(NPC.YAMEISI,["0xff0000每5分钟0xffffff可以挑战我，卡洛达斯和梅诺西其中一个，我们三兄弟誓死守卫圣域之门，等待师父完成超进化！"],["嗯嗯，我一定会的！"]);
                  break;
               case "kaluodasi":
                  NpcDialog.show(NPC.KALUODASI,["0xff0000每5分钟0xffffff可以挑战我，卡洛达斯和梅诺西其中一个，我们三兄弟誓死守卫圣域之门，等待师父完成超进化！"],["嗯嗯，我一定会的！"]);
                  break;
               case "meinuoxi":
                  NpcDialog.show(NPC.MEINUOXI,["0xff0000每5分钟0xffffff可以挑战我，卡洛达斯和梅诺西其中一个，我们三兄弟誓死守卫圣域之门，等待师父完成超进化！"],["嗯嗯，我一定会的！"]);
                  break;
               case "suolunsen":
                  NpcDialog.show(NPC.SUOLUOSENG,["0xff0000每5分钟0xffffff可以挑战亚梅丝，卡洛达斯和梅诺西其中一个，我倒要看看这三个家伙能不能抵挡住我暗黑魔君。"],["嗯嗯，我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "yameisi":
               NpcDialog.show(NPC.YAMEISI,[timeTip + "；我们三兄弟誓死守卫圣域之门，等待师父完成超进化！" + nick + "参加活动就可以获得祖系三兄弟的精元和专属刻印！"],["我一定会来的！"]);
               break;
            case "kaluodasi":
               NpcDialog.show(NPC.KALUODASI,[timeTip + "；我们三兄弟誓死守卫圣域之门，等待师父完成超进化！" + nick + "参加活动就可以获得祖系三兄弟的精元和专属刻印！"],["我一定会来的！"]);
               break;
            case "meinuoxi":
               NpcDialog.show(NPC.MEINUOXI,[timeTip + "；我们三兄弟誓死守卫圣域之门，等待师父完成超进化！" + nick + "参加活动就可以获得祖系三兄弟的精元和专属刻印！"],["我一定会来的！"]);
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
         SocketConnection.send(1022,86066192);
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["那不是祖系一族吗？他们一定是在怀念他们的师父祖迪，去年这个时候祖迪为了抵抗恶灵兽，在这里壮烈献身了……"],["确实是这样，已经一年了。"]]],[TaskStoryPlayer.DIALOG,[NPC.MEINUOXI,["我们好想念师父，我们相信他一定还会再回来的！"],["恩，我们也很想念他。"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["即使师父不在，我们也会继承他的遗愿，继续守护宇宙的正义，守护圣域之门！"],["好样的，祖系一族！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["祖系一族！没有了你们的师父，你们就只知道躲在这里了吗？难道你们的师父就只教会了你们哭鼻子？"],["你来这里干什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["圣域之门是我们祖系一族的，这里不欢迎你！赶紧离开，不要打扰师父的安歇！"],["哦？还没有人敢这么跟我说话。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["你们的师父？那个连恶灵兽都打不过的废物？看来你们祖系一族是一群废柴，还有什么资格声称要维护正义？"],["不许你侮辱师父！"]]],[TaskStoryPlayer.FUL_MOVIE,["zudi_evo_1",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["刚刚那是师父吗？还是谁帮助我们抵挡住了索伦森？"],["看起来确实有点像师父。"]]],[TaskStoryPlayer.DIALOG,[NPC.MEINUOXI,["不可能！师父不是已经……"],["再说那家伙也不怎么像师父。"]]],[TaskStoryPlayer.DIALOG,[NPC.KALUODASI,["不过他应该是我们的朋友，既然他躲进了圣域之门，一定是我们祖系一族的。"],["我们一定要把他找出来！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["圣域之门是我们祖系一族的福地，和恶灵兽一战竟然让我发现这里别有洞天……"],["太棒了，不愧是师父！"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["有了超进化的师父，我们祖系一族一定可以再度崛起，多强大的敌人都不会击垮我们！"],["你们可不能永远依靠我。"]]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["你们也要担起自己的责任，刚刚的情况真的很令我担心，如果不是我出手，圣域之门就落入索伦森手里了"],["是的，师父，我们会努力的！"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["我们不会让你失望的师父，只要索伦森还敢再来，我们拼出性命，也会守护圣域之门！"],["很好，这才是我的好徒弟！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            showNpcs();
            SocketConnection.send(1022,86066193);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/ZudiEvoPanel"));
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["刚刚那个就是你们师父，果然有两下子，看样子这趟来得很有价值。"],["你会后悔的。"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["等到师父完成了超进化，一定会来收拾你的，在这之前，我们会誓死守卫圣域之门！"],["就凭你们？"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["好，既然他躲着不敢出来，我就先拿他的几个徒弟祭旗，看你们挡不挡得住我！"],["来吧，我们不怕你！"]]]];
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
         round = _curStep;
         if(round % 3 == 0)
         {
            AnimateManager.playMcAnimate(taskMc,6,"mc6",function():void
            {
               NpcDialog.show(NPC.SUOLUOSENG,["你可要准备好了，看看你能不能承受住我暗黑魔君的一击！"],["我早就准备好了！"],[function():void
               {
                  addYellowArrow(round);
               }]);
            });
         }
         else if(round % 3 == 1)
         {
            AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
            {
               NpcDialog.show(NPC.SUOLUOSENG,["你可要准备好了，看看你能不能承受住我暗黑魔君的一击！"],["我早就准备好了！"],[function():void
               {
                  addYellowArrow(round);
               }]);
            });
         }
         else if(round % 3 == 2)
         {
            AnimateManager.playMcAnimate(taskMc,8,"mc8",function():void
            {
               NpcDialog.show(NPC.SUOLUOSENG,["你可要准备好了，看看你能不能承受住我暗黑魔君的一击！"],["我早就准备好了！"],[function():void
               {
                  addYellowArrow(round);
               }]);
            });
         }
      }
      
      private static function endFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ % 3 == 0)
         {
            NpcDialog.show(NPC.YAMEISI,[nick + "，没想到你的实力也这么强。快来帮助一起守卫圣域之门吧！"],["我会帮助你的！"]);
         }
         else if(_loc1_ % 3 == 1)
         {
            NpcDialog.show(NPC.KALUODASI,[nick + "，没想到你的实力也这么强。快来帮助一起守卫圣域之门吧！"],["我会帮助你的！"]);
         }
         else if(_loc1_ % 3 == 2)
         {
            NpcDialog.show(NPC.MEINUOXI,[nick + "，没想到你的实力也这么强。快来帮助一起守卫圣域之门吧！"],["我会帮助你的！"]);
         }
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ == 0)
         {
            stopAtChildFrame(5);
         }
         else if(_loc1_ % 2 == 0)
         {
            stopAtChildFrame(7);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["看来你们三个还有两下子，解决你们还需要多一点时间。"],["我们不会退缩的！"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["我们说过，我们会一直坚守到师父出关，明天你还敢再来吗？"],["好，有什么不敢的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["不要忘记了时间哦！" + timeTip + "！"],["不会忘，我会回来的！"]]]];
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
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["放弃这无用的挣扎吧，在暗黑魔君面前，你们难道还没意识到自己的渺小？"],["即使这样，我们也要组织你。"]]],[TaskStoryPlayer.DIALOG,[NPC.YAMEISI,["为师父争取更多的时间，这也是我们最后能做的了……"],["好忠心的徒弟……"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.JIGENISI,["索伦森，你打算对我的徒儿们怎么样？"],["你终于出来了。"]]],[TaskStoryPlayer.DIALOG,[NPC.SUOLUOSENG,["不这样逼你，你怎么会出来呢？吉格尼斯，让我看看你的真实实力吧！"],["好！那就让你看看。"]]]];
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
         return "祖迪超进化！第三只圣灵系精灵现身！创世神兵圣盾之灵首次放送，伊兰迪免费领取，快去看看吧！";
      }
      
      public static function get evoTips() : String
      {
         return "祖迪超进化";
      }
      
      public static function get vsTips() : String
      {
         return "祖迪超进化";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "本轮可获得吉亚尼专属刻印/祖师之魂以及十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "本轮可获得吉亚尼的精元/祖师之魂以及十万经验券";
         }
         return "本轮可获得祖师之魂、一万经验券";
      }
      
      private static function get canBroadcast() : Boolean
      {
         if(time_bc.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
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
         if(time_act.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.PAST)
         {
            return PAST;
         }
         if(time_act.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
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
