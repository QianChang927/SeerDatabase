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
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyVSController_tianma
   {
      
      private static const TARGET_MAP:uint = 67;
      
      private static const BUFFER_ID:uint = 644;
      
      private static const END_TASK:uint = 472;
      
      private static const MARK_ID:uint = 20415;
      
      private static const MARK_TASK:uint = 1486;
      
      private static const FINISH_FIGHT:uint = 1487;
      
      private static const BOSS_DAILY:int = 14074;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginDate:Date = new Date(2015,12 - 1,25);
      
      private static var endDate:Date = new Date(2015,12 - 1,30);
      
      private static var activeTimes:Array = [13,19];
      
      public static const TIME_TXT:String = "12月25日—12月30日，13:00-15:00，19:00-20:00";
      
      private static var timeStr:String = "0xff0000" + TIME_TXT + "0xffffff";
      
      private static const SHENGGUANGTIANMA:String = "shengguang";
      
      private static const KELISA:String = "kelisa";
      
      private static const JUMOGUAI:String = "jumoguai";
      
      private static const LUDINUOSI:String = "ludinuosi";
      
      private static var _widget:MovieClip;
      
      private static var taskMc:MovieClip;
       
      
      public function WeeklyVSController_tianma()
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
            LocalMsgController.addLocalMsg("TwelveRounds/TianmaVSMsgPanel");
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onIconTimer);
         onIconTimer();
      }
      
      private static function onIconTimer(param1:SocketEvent = null) : void
      {
         if(canBroadcast)
         {
            showBroadcast();
         }
         if(activeStatus == PAST)
         {
            destroyWidget();
         }
         else if(activeStatus == ACTIVE)
         {
            if(Boolean(_widget) && Boolean(DisplayUtil.hasParent(_widget)))
            {
               updateWidget();
               return;
            }
            loadWidget();
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
         SocketConnection.send(1022,86057558);
         SocketConnection.send(1022,_curStep + 86057562);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_67_vs_tianma"),function(param1:MovieClip):void
         {
            taskMc = param1["act"];
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
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86057556);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86057557);
         }
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
         else
         {
            SocketConnection.send(1022,86057560);
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/TianmaVSEvoPanel"),"正在努力打开面板...");
         }
      }
      
      private static function checkActivity() : void
      {
         switch(activeStatus)
         {
            case INCOMING:
            case DORMANT:
               waitActivity();
               break;
            case ACTIVE:
               startActivity();
               break;
            case PAST:
               destroy();
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
         afterStory();
      }
      
      private static function finishAcitivty() : void
      {
         var date:Date;
         var beforeFunc:Function = null;
         var endFunc:Function = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         destroyWidget();
         date = SystemTimerManager.sysDate;
         if(SystemTimerManager.sysDate.date < 19)
         {
            endFunc = checkPreTask;
            beforeFunc = startOverMc;
         }
         else
         {
            endFunc = destroy;
            beforeFunc = startFinishMc;
         }
         if(TasksManager.getTaskStatus(END_TASK) != TasksManager.COMPLETE)
         {
            beforeFunc(function():void
            {
               completeTask(endFunc);
            });
         }
         else
         {
            endFunc();
         }
      }
      
      private static function completeTask(param1:Function) : void
      {
         var cb:Function = param1;
         TasksManager.accept(END_TASK,function():void
         {
            TasksManager.complete(END_TASK,0,function():void
            {
               TasksManager.setTaskStatus(END_TASK,TasksManager.COMPLETE);
               cb();
            });
         });
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
      
      private static function afterStory() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         onRefreshTime();
      }
      
      private static function onRefreshTime(param1:SocketEvent = null) : void
      {
         var e:SocketEvent = param1;
         KTool.getMultiValue([BOSS_DAILY],function(param1:Array):void
         {
            var _loc4_:int = 0;
            var _loc5_:uint = 0;
            CommonUI.removeYellowArrow(_map.topLevel);
            var _loc2_:ByteArray = new ByteArray();
            _loc2_.writeInt(param1[0]);
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
            var _loc3_:uint = SystemTimerManager.sysDate.minutes / 5;
            if(_curStep != _loc3_)
            {
               roundChange(_loc3_);
            }
            else
            {
               roundHold(_loc3_);
            }
            _curStep = _loc3_;
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
         stopAtChildFrame(8,1);
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
      
      private static function roundChange(param1:int) : void
      {
         if(_fightStatus[param1] == 0)
         {
            if(param1 == 0)
            {
               startEnterMc(startFightHei);
            }
            else if(param1 % 2 == 1)
            {
               startFightShengguang();
            }
            else if(param1 % 2 == 0)
            {
               startFightHei();
            }
         }
         else if(param1 % 2 == 0)
         {
            stopAtChildFrame(11);
         }
         else
         {
            stopAtChildFrame(13);
         }
      }
      
      private static function roundHold(param1:int) : void
      {
         if(_fightStatus[param1] == 1)
         {
            if(param1 % 2 == 0)
            {
               stopAtChildFrame(11);
            }
            else
            {
               stopAtChildFrame(13);
            }
         }
         else if(param1 % 2 == 0)
         {
            stopAtChildFrame(10);
            CommonUI.addYellowArrow(_map.topLevel,732,224,30);
         }
         else
         {
            stopAtChildFrame(12);
            CommonUI.addYellowArrow(_map.topLevel,477,127,30);
         }
      }
      
      private static function onCheckBoss(param1:SocketEvent) : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _fightStatus = KTool.readDataByBits(_loc2_,16);
         if(_fightStatus[11] == 1)
         {
            finishAcitivty();
            return;
         }
         var _loc3_:uint = SystemTimerManager.sysDate.minutes / 5;
         if(_curStep != _loc3_)
         {
            roundChange(_loc3_);
         }
         else
         {
            roundHold(_loc3_);
         }
         _curStep = _loc3_;
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         if(_map)
         {
            removeEvents();
            DisplayUtil.removeForParent(taskMc);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
            taskMc = null;
         }
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case SHENGGUANGTIANMA:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     FightManager.fightNoMapBoss("圣光天马",_curStep + 1227);
                  }
                  else
                  {
                     NpcDialog.show(NPC.SHENGGUANGTIANMA,["克利萨，你听好了！" + timeStr + "，这是你唯一击倒我的机会！"],["加油吧！爱徒！"]);
                  }
                  break;
               case KELISA:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     FightManager.fightNoMapBoss("克利萨",_curStep + 1227);
                  }
                  else
                  {
                     NpcDialog.show(NPC.KELISA,["这次我绝对不能辜负师傅对我的期望，我要冷静…冷静…一定会有破绽的，这是我唯一击败师傅的机会！"],["克利萨，你一定会成功的！"]);
                  }
                  break;
               case LUDINUOSI:
                  NpcDialog.show(NPC.LUDINUOSI,["太强了，如果我不是有幸在这里目睹这一些，我都不敢相信原来天马一族是如此强大！"],["继续观察！"]);
                  break;
               case JUMOGUAI:
                  NpcDialog.show(NPC.JUMOGUAI,[MainManager.actorInfo.formatNick + "，好好观察这一切，我们不方便插手这件事情，但是你一定要控制他们，记得0xff0000每5分钟0xffffff可以挑战天马一族中的一位！"],["恩恩，我知道该怎么做！"]);
            }
         }
         else
         {
            switch(_loc2_)
            {
               case SHENGGUANGTIANMA:
                  NpcDialog.show(NPC.SHENGGUANGTIANMA,["克利萨，你听好了！" + timeStr + "，就在这里，我等待你的挑战！"],["遵命师傅！"]);
                  break;
               case KELISA:
                  NpcDialog.show(NPC.KELISA,["这次的机会一定不能错过，我要将自己所学的都发挥出来，新一代天马守护星非我莫属！"],["绝对不能辜负师父对我的期望！"]);
                  break;
               case LUDINUOSI:
                  NpcDialog.show(NPC.LUDINUOSI,["后生可畏啊！对了，巨蘑怪，你说克利萨这小子有没有这个实力战胜圣光天马？这实力也太悬殊了吧！"],["我看未必哦！"]);
                  break;
               case JUMOGUAI:
                  NpcDialog.show(NPC.JUMOGUAI,["我比较看好克利萨，这小子虽然是顽皮了些，但是我相信这次他一定会让我们刮目相看的！"],["但愿如此吧！"]);
            }
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         SocketConnection.send(1022,86057590);
         if(_curStep == 10)
         {
            if(TasksManager.getTaskStatus(MARK_TASK) == TasksManager.COMPLETE)
            {
               ItemInBagAlert.show(MARK_ID,"1个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(MARK_ID)) + "已经放入你的背包中！");
            }
         }
         if(_curStep % 2 == 0)
         {
            stopAtChildFrame(11,1);
            endFightHei();
         }
         else
         {
            stopAtChildFrame(13,1);
            endFightShenguang();
         }
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86057553);
         KTool.hideMapPlayerAndMonster();
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["圣光天马，终于找到你了！想必上古一族复苏的事情你也应该听说了吧！我们正在集合全宇宙强大精灵的力量，你也一起加入吧！"],["等等，我还有一件事情需要处理！"]]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["什么事情比消灭上古一族还重要，如果我们不能彻底消灭上古一族，别说你天马一族，整个宇宙都将陷入危机！"],["是啊！圣光天马！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["这些我都知道，但是一旦我离开这里，参与这场围剿上古一族的战役，我自己都不知道还能不能回来，所以我想…"],["我想寻找…新一代天马守护星！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["好吧！圣光天马，我们遵守你的意愿，但是你到底有没有目标呢！"],["有是有，不过他还不够成熟！"]]],[TaskStoryPlayer.DIALOG,[NPC.JUMOGUAI,["哈哈哈，你所说的一定是你的爱徒克利萨吧！这小子整天就知道玩耍，看来你有必要试试他的能力哦！"],["恩恩，我就是在烦恼这个事情！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["克利萨…别玩了，你没看到这里这么多前辈吗？别给你师傅丢脸啊！"],["这有什么！我又没偷懒！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["克利萨，你还是这么贪玩…我怎么能放心的把天马星交给你，你就不能用心点吗？"],["师傅…你怎么了！"]]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,[" 圣光天马，你徒弟还真是后知后觉啊！克利萨，怎么还不明白你师傅的苦心，你师父准备让你成为0xff0000新一代的天马守护星0xffffff！"],["天马守护星？？？这是真的吗？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["看看你的样子，克利萨！你连我的攻击都无法抵挡，我怎么会讲天马交给你来守护！"],["师傅 …你这话说的太早了吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["很好…这样才像我圣光天马的徒弟！克利萨，这是我给你唯一的机会，挑战我并且打到我，你做的到吗？"],["师傅，这万万不可！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["别废话，没时间了！你没看到鲁迪诺斯他们还在等我吗？你就算是为了我…也是为了你自己，你能做到吗？"],["好吧！师傅，徒弟照办就是了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["鲁迪诺斯、巨蘑怪，你们就帮我做个见证者吧！如果克利萨不能成功击败我，那么我看你们就要另寻他人了！"],["好吧！不过最好不要太久！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,[MainManager.actorInfo.formatNick + "，不管你是见证还是协助黑天马克利萨，只要他能战胜我就行！"],["放心吧！我一定会帮助克利萨的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["克利萨，你听好了！" + timeStr + "，就在这里，我等待你的挑战！"],["遵命师傅！"]]],[TaskStoryPlayer.DIALOG,[NPC.KELISA,["前辈们…还有" + MainManager.actorInfo.formatNick + "，我一定会战胜师傅圣光天马，成为新一代的天马守护星！"],["你们就等着瞧吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["这可是一场神之对决啊！圣光天马vs黑色天马，这场对决一定会非常精彩，我这就去告诉所有人！"],["克利萨，你可一定要努力啊！"]]]];
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
            SocketConnection.send(1022,86057554);
            SocketConnection.send(1022,86057590);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         };
         storyPlayer.start();
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         var story:Array = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["克利萨，好好把握这次机会，让所有人看看我们天马一族的实力，证明你自己，也证明我这么多年花在你身上的心血！"],["师傅，我一定会让你看到我的另一面！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["克利萨，加油啊！我支持你，你一定要成为新一代的天马守护星！"],["谢谢你，我的朋友！"]]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["巨蘑怪，快看！！！决战要开始了，这可是我头一回看见天马和天马之间的较量！"],["真是热血沸腾啊！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]],[TaskStoryPlayer.DIALOG,[NPC.KELISA,["尊敬的师傅，你也要准备好哦！对你我还是很了解的，千万不要手下留情，我喜欢挑战高难度！"],["小子…口气不小！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["既然这样，那我们就开始吧！记住我教你的点点滴滴，把这些技能都发挥出来！"],["恩恩，来吧！师傅！"]]]];
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
      
      private static function startFightShengguang() : void
      {
         AnimateManager.playMcAnimate(taskMc,12,"mc12",function():void
         {
            NpcDialog.show(NPC.SHENGGUANGTIANMA,["克利萨，你可别得意！往往胜败就在一念之间，如果你这样轻敌，一定会受到惩罚的，就像这次一样！"],["师傅果然是师傅！"],[function():void
            {
               CommonUI.addYellowArrow(_map.topLevel,477,127,30);
            }]);
         });
      }
      
      private static function endFightShenguang() : void
      {
         NpcDialog.show(NPC.KELISA,[MainManager.actorInfo.formatNick + "，你以为这样就能削弱我的能力吗？未必太天真了吧！这次对决克利萨一定要证明自己，你就别白费心机了！"],["不…我一定会帮助他的！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,13,"mc13");
         }]);
      }
      
      private static function startFightHei() : void
      {
         AnimateManager.playMcAnimate(taskMc,10,"mc10",function():void
         {
            NpcDialog.show(NPC.KELISA,["师傅，你怎么了…是老了吗？我记得你的实力不仅仅就这些哦！使出你最强的技能吧！我一样会帮你击倒的！"],["克利萨，我来帮助你！"],[function():void
            {
               CommonUI.addYellowArrow(_map.topLevel,732,224,30);
            }]);
         });
      }
      
      private static function endFightHei() : void
      {
         NpcDialog.show(NPC.KELISA,[MainManager.actorInfo.formatNick + "，多谢你替我保持实力，你就看着吧！新一代的天马守护星一定就是我！"],["继续加油哦！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,11,"mc11");
         }]);
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["好了，今天就到这里了…克利萨！对于你的表现我还是十分欣慰的，但是你还是没有找到方式方法！"],["你自己好好想想吧！！"]]],[TaskStoryPlayer.DIALOG,[NPC.KELISA,["师傅果然不是那么轻易就能战胜的，我一定要从今天的对决中！好好总结，一定要在明天的对决中击败他！"],["到底应该怎么办呢！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,14,"mc14"]],[TaskStoryPlayer.DIALOG,[NPC.KELISA,["恩恩，我应该仔细回忆一下师傅曾经教我的一招一式，也许答案就在其中！"],["加油啊！克利萨！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,15,"mc15"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["看来明天又是一番激斗，想到这里我也该提升自己的实力了！"],["明天我还会再来的！"]]]];
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
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["就到这里吧！克利萨，你这几天的表现的确让我感受到你的努力，天马星交给你，我放心了！"],["但是师傅，我还没有战胜你啊！！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["战不战胜是其次的，我要你学会的是专注和执着，你平时不专心学习，整天都是吊儿郎当的！"],["我要净化你的内心！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,16,"mc16"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["圣光天马真是位好师傅，为了能使自己的爱徒有更高的提升，既然可以默默无闻的付出！"],["太值得尊敬了！！"]]],[TaskStoryPlayer.DIALOG,[NPC.LUDINUOSI,["圣光天马，时间差不多了，我们还要寻找更多的伙伴！"],["恩恩，让我最后和克利萨交代一下！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,17,"mc17"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["克利萨，现在你就是新一代的天马守护星，记住你的使命，无论如何都要守卫天马星，要和天马星共存亡！"],["明白了，师傅！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["恩恩，那我就走了！现在天马星就靠你了，千万别让我失望！"],["师傅，我知道自己该做什么！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["鲁迪诺斯…巨蘑怪…那我们走吧！宇宙需要我们！"],["恩恩，再见了…爱徒！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,18,"mc18"]],[TaskStoryPlayer.DIALOG,[NPC.SHENGGUANGTIANMA,["今生能成为你的师傅，是我的荣幸，如果有可能的话，我一定会回来找你的，克利萨！"],["我这一生都会在这里等你！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,19,"mc19"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["既然这样，我想我也该为整个宇宙做点什么，争取联手精灵伙伴一起剿灭上古一族！"],["伙伴们，我来找你们啦！"]]]];
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
      
      public static function get adTips() : String
      {
         return "圣光天马vs黑天马！克利萨最终能成为新一代的天马守护星吗？快去天佛后山关注这次神之对决吧！";
      }
      
      public static function get evoTips() : String
      {
         return "圣光天马超进化";
      }
      
      public static function get vsTips() : String
      {
         return "圣光天马vs黑天马";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "可获得克利萨的精元和十万经验券！";
         }
         if(_loc1_ == 12)
         {
            return "可获得珀伽索斯的精元(仅26日输出)和十万经验券！";
         }
         return "可获得一万经验券！";
      }
      
      private static function get canBroadcast() : Boolean
      {
         var _loc1_:Date = new Date(endDate.fullYear,endDate.month,endDate.date,23,59);
         if(SystemTimerManager.sysBJDate.time > beginDate.time && SystemTimerManager.sysBJDate.time < _loc1_.time)
         {
            if(activeTimes.indexOf(SystemTimerManager.sysBJDate.hours + 1) >= 0 && SystemTimerManager.sysBJDate.minutes > 54)
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
         if(SystemTimerManager.sysBJDate.time < _loc1_.time)
         {
            return INCOMING;
         }
         if(SystemTimerManager.sysBJDate.time > _loc2_.time)
         {
            return PAST;
         }
         if(activeTimes.indexOf(SystemTimerManager.sysBJDate.hours) >= 0)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
   }
}
