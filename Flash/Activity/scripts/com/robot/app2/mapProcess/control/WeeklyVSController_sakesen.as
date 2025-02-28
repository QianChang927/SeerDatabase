package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.BroadcastInfo;
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
   
   public class WeeklyVSController_sakesen
   {
      
      public static const TARGET_MAP:uint = 947;
      
      private static const BUFFER_ID:uint = 22425;
      
      private static const FOREVER_ID:uint = 15044;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      private static var _startBossId:int = 946;
      
      private static var _mapAnimate:String = "map_947_5";
      
      private static var _mainPanel:String = "SakesenVSSanlingshiMainPanel";
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var beginTime:CronTimeVo = new CronTimeVo("*","13","21","3","*","2015");
      
      private static const ACTIVE_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","13,19","24-30","7","*","2015")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","27","3","*","2014");
      
      private static const BROADCAST_AC:ActivityControl = new ActivityControl([new CronTimeVo("50-60","12,19","24-30","7","*","2014")]);
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_sakesen()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_sakesen",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86070423);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86070410);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86070413);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         SocketConnection.send(1022,86069195);
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.btnLevel.addChild(taskMc);
            _map.topLevel.visible = false;
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_sakesen"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.LEILINGSHI,[timeTip + "元素法师萨克森VS三灵狮！参加活动100%免费获得" + reward],["我一定要去！","我准备一下就来！"],[function():void
         {
            MapManager.changeMap(TARGET_MAP);
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86070411);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86070412);
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
         if(BitBuffSetClass.getState(BUFFER_ID))
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
         if(param1 % 4 == 0)
         {
            CommonUI.addYellowArrow(_map.topLevel,670,270,0);
         }
         else if(param1 % 4 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,532,164,0);
         }
         else if(param1 % 4 == 2)
         {
            CommonUI.addYellowArrow(_map.topLevel,598,209,0);
         }
         else if(param1 % 4 == 3)
         {
            CommonUI.addYellowArrow(_map.topLevel,183,190,0);
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
         if(SystemTimerManager.sysBJDate.hours >= 19)
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
         var _loc2_:String = String(String(param1.target.name).split("_")[1]);
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               if(_loc2_ == "A" && _curStep % 4 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("羽灵狮",_startBossId + _curStep);
               }
               else if(_loc2_ == "B" && _curStep % 4 == 1)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("雷灵狮",_startBossId + _curStep);
               }
               else if(_loc2_ == "C" && _curStep % 4 == 2)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("岩灵狮",_startBossId + _curStep);
               }
               else if(_loc2_ == "D" && _curStep % 4 == 3)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("萨克森",_startBossId + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "D":
                  NpcDialog.show(NPC.SAKESEN,[nick + "，来帮助我打败三灵狮吧。0xff0000每5分钟0xffffff可以挑战我和三灵狮其中一个！参加活动100%免费获得" + reward],["我一定会的！"]);
                  break;
               case "A":
                  NpcDialog.show(NPC.YULINGSHI,[nick + "，来帮助我阻止萨克森师父吧。0xff0000每5分钟0xffffff可以挑战我们和萨克森其中一个！参加活动100%免费获得" + reward],["我一定会的！"]);
                  break;
               case "B":
                  NpcDialog.show(NPC.LEILINGSHI,[nick + "，来帮助我阻止萨克森师父吧。0xff0000每5分钟0xffffff可以挑战我们和萨克森其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "C":
                  NpcDialog.show(NPC.YANLINGSHI,[nick + "，来帮助我阻止萨克森师父吧。0xff0000每5分钟0xffffff可以挑战我们和萨克森其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "E":
                  NpcDialog.show(NPC.MENGNALISHA,[nick + "，加入到萨克森和三灵狮的对战中来吧。0xff0000每5分钟0xffffff可以挑战萨克森和三灵狮其中一个！参加活动100%免费获得" + reward],["我一定会的！"]);
                  break;
               case "F":
                  NpcDialog.show(NPC.LUSIWANG_ENVO,[nick + "，加入到萨克森和三灵狮的对战中来吧。0xff0000每5分钟0xffffff可以挑战萨克森和三灵狮其中一个！参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "G":
                  NpcDialog.show(NPC.SIKAIER,[timeTip + "，加入到萨克森和三灵狮的对战中来吧。0xff0000每5分钟0xffffff可以挑战萨克森和三灵狮其中一个！参加活动100%免费获得" + reward],["我一定会来的！"]);
                  break;
               case "H":
                  NpcDialog.show(NPC.CHIYANJINGANG,[timeTip + "，加入到萨克森和三灵狮的对战中来吧。0xff0000每5分钟0xffffff可以挑战萨克森和三灵狮其中一个！参加活动100%免费获得" + reward],["我一定会来的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "D":
               NpcDialog.show(NPC.SAKESEN,[timeTip + "我将好好教训一下这三个叛徒！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "A":
               NpcDialog.show(NPC.YULINGSHI,[timeTip + "我们三灵狮一起阻止萨克森！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "B":
               NpcDialog.show(NPC.LEILINGSHI,[timeTip + "我们三灵狮一起阻止萨克森！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "C":
               NpcDialog.show(NPC.YANLINGSHI,[timeTip + "我们三灵狮一起阻止萨克森！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "E":
               NpcDialog.show(NPC.MENGNALISHA,[timeTip + "三灵狮将会颠覆萨克森的控制，一起来见证吧！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "F":
               NpcDialog.show(NPC.LUSIWANG_ENVO,[timeTip + "三灵狮将会颠覆萨克森的控制，一起来见证吧！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "G":
               NpcDialog.show(NPC.SIKAIER,[timeTip + "三灵狮将会颠覆萨克森的控制，一起来见证吧！参加活动100%免费获得" + reward],["我一定会来的！"]);
               break;
            case "H":
               NpcDialog.show(NPC.CHIYANJINGANG,[timeTip + "三灵狮将会颠覆萨克森的控制，一起来见证吧！参加活动100%免费获得" + reward],["我一定会来的！"]);
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
         SocketConnection.send(1022,86070408);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["萨克森，你要对他干什么？又是什么邪恶的法术吗？"],["我只不过做你做过的事。"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["斯凯尔，你当年也是借助三灵兽的力量才能打败我，现在我也有三元素的力量，就这点，我们现在不分上下！"],["你要拿走灵狮的力量？"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["你这样做，幻变灵狮会承受无法恢复的伤害，他可是你的徒弟！"],["这算得了什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["斯凯尔，徒弟不过是获得胜利的一种手段，这也是你教我的。现在我需要他们为我贡献力量了！"],["卑鄙冷血的家伙！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_20140314_1",true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["他的一切都是我给的，为了洗刷长久以来我受的屈辱，做出点牺牲又有什么？"],["他的一切属于他自己！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["每个精灵都有自己的生命和力量，元素的历练只能激发他们的潜能，萨克森，你迷信元素的力量已经走火入魔了，就你这样，根本不配和我争灵兽之尊！"],["我今天就是要和你争一争！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["只有绝对的实力优势，才能维系住所有元素的平衡，这不是你说的吗，斯凯尔？那就看看谁有这个实力优势！"],["我不屑和你这卑鄙的家伙交手。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["怎么会这样，他的力量不是都已经给我了吗？斯凯尔，你对他做了什么？"],["属于他的力量，你是拿不走的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["我说过，每个精灵的力量都属于他自己，别人无法剥夺，你以为只有你会操控元素吗？水火草才是兼容所有元素的完美三元素，恢复灵狮的力量易如反掌！"],["这么说，你要收下他了？"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["斯凯尔，永远只会躲在幕后，就不敢堂堂正正地出来和我战一场吗？"],["打败你并不是我希望的。"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["我只是希望你能够醒悟，你所引为为傲的三灵狮，也并不是你所认为的这么简单，更不是实现自己目的的牺牲品！"],["你想指望他们？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["真是我的好徒弟，都学会还手了，就让师父来教训一下你！"],["师父，这不是我们的本意。"]]],[TaskStoryPlayer.DIALOG,[NPC.SANLINGSHI,["师父，我们不要再和他们争了，有什么意义呢？我太累了，只想好好休息一下，过平静的生活……"],["懦夫！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["既然你执意要阻止我，那么每天0xff000013:00-14:00，19:00-20:000xffffff，我会让你们这些叛徒付出代价！"],["看来只有这样才能阻止你了。"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            _map.topLevel.visible = true;
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            showNpcs();
            BitBuffSetClass.setState(BUFFER_ID,1);
            ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
            SocketConnection.send(1022,86070409);
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["背叛我，会让你们付出沉重的代价，解决了你们，再去解决斯凯尔！"],["我们不会让你继续错下去了！"]]],[TaskStoryPlayer.DIALOG,[NPC.SANLINGSHI,["师父，一直都在为了你战斗，这一次是为了我们自己，来吧！"],["那就来吧！"]]]];
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
         var index:int;
         var round:int = 0;
         var msg1:String = null;
         var msg2:String = null;
         var msg3:String = null;
         var bossName:String = null;
         var NPCID:int = 0;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         round = _curStep;
         _map.topLevel.visible = false;
         index = 0;
         msg2 = "来吧，我不会畏惧！（点击直接进入对战）";
         msg3 = "我先准备一下";
         NPCID = 0;
         if(round % 4 == 0)
         {
            index = 6;
            msg1 = "我们的力量属于我们自己，不会再让你控制了，就让你看看这股力量吧！";
            bossName = "羽灵狮";
            NPCID = int(NPC.YULINGSHI);
         }
         else if(round % 4 == 1)
         {
            index = 7;
            msg1 = "师父，感谢你多年的历练，今天就是见证成果的一天！";
            bossName = "雷灵狮";
            NPCID = int(NPC.LEILINGSHI);
         }
         else if(round % 4 == 2)
         {
            index = 8;
            msg1 = "这双拳头曾经为你击倒无数敌人，今天，我就用它来阻止你！";
            bossName = "岩灵狮";
            NPCID = int(NPC.YANLINGSHI);
         }
         else if(round % 4 == 3)
         {
            index = 9;
            msg1 = "叛徒们，我能给你们能力，就有绝对的把握控制住，醒悟吧你们！";
            bossName = "萨克森";
            NPCID = int(NPC.SAKESEN);
         }
         AnimateManager.playMcAnimate(taskMc,index,"mc" + index,function():void
         {
            _map.topLevel.visible = true;
            NpcDialog.show(NPCID,[msg1],[msg2,msg3],[function():void
            {
               isFight = true;
               KTool.showMapAllPlayerAndMonster();
               _map.depthLevel.visible = true;
               FightManager.fightNoMapBoss(bossName,_startBossId + _curStep);
            },function():void
            {
               addYellowArrow(round);
               KTool.showMapAllPlayerAndMonster();
               _map.depthLevel.visible = true;
            }]);
         });
      }
      
      private static function endFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ % 4 == 0)
         {
            NpcDialog.show(NPC.SAKESEN,[nick + "，没想到你的实力也这么强，快来帮助我一起打败三灵狮！参加活动100%免费获得" + reward],["我会继续努力的！"]);
         }
         else if(_loc1_ % 4 == 1)
         {
            NpcDialog.show(NPC.SAKESEN,[nick + "，没想到你的实力也这么强，快来帮助我一起打败三灵狮！参加活动100%获得" + reward],["我会继续努力的！"]);
         }
         else if(_loc1_ % 4 == 2)
         {
            NpcDialog.show(NPC.SAKESEN,[nick + "，没想到你的实力也这么强，快来帮助我一起打败三灵狮！参加活动100%获得" + reward],["我会继续努力的！"]);
         }
         else if(_loc1_ % 4 == 3)
         {
            NpcDialog.show(NPC.SANLINGSHI,[nick + "，没想到你的实力也这么强，快来帮助我一起阻止师父！参加活动100%免费获得" + reward],["我会继续努力的！"]);
         }
      }
      
      private static function holdFight() : void
      {
         var _loc1_:int = _curStep;
         if(_loc1_ == 0)
         {
            stopAtChildFrame(5);
         }
         else if(_loc1_ % 4 == 0)
         {
            stopAtChildFrame(6);
         }
         else if(_loc1_ % 4 == 1)
         {
            stopAtChildFrame(7);
         }
         else if(_loc1_ % 4 == 2)
         {
            stopAtChildFrame(8);
         }
         else if(_loc1_ % 4 == 3)
         {
            stopAtChildFrame(9);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["居然这样难缠，看来还需要多一些时间才能打败你们！"],["你需要多久，我奉陪到底！"]]],[TaskStoryPlayer.DIALOG,[NPC.SANLINGSHI,["师父，无论花费多久，我们都会阻止你！不会让你继续错下去了！"],["好，那我们就继续战斗下去！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["不要忘记了时间哦！" + timeTip + "！"],["不会忘，我会回来的！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,10,"mc10"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["好……好徒弟……今天居然败在你们手里，我果然一直都没有了解过你们……"],["对不起，师父……"]]],[TaskStoryPlayer.DIALOG,[NPC.SANLINGSHI,["师父，该收手了吧！这毫无休止的战斗，我们都已经疲倦了……"],["我不甘心！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["既然输了，我无话可说，只不过又多了一段屈辱，不过我一定还会复仇的！"],["不要在执迷了师父！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,11,"mc11"]],[TaskStoryPlayer.DIALOG,[NPC.SAKESEN,["我只是个失败者，彻头彻尾的失败者，我不配做你师父。你去找真正的灵兽之尊吧！"],["不，你才是我师父！"]]],[TaskStoryPlayer.DIALOG,[NPC.HUANBIANLINGSHI,["这么多年，和我一起生活，历练我的都是师父，没有别人！我们一起回去，不要再挑起争斗了，好吗，师父？"],["小灵狮，你……"]]],[TaskStoryPlayer.DIALOG,[NPC.SIKAIER,["萨克森，赢得别人尊重不是靠不断地胜利，是要靠对别人的尊重。你看，你还是赢得了灵狮的忠诚，你没有输。"],["也许你说得对吧……"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,12,"mc12"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.topLevel.visible = true;
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
         return "萨克森VS三灵狮！元素法师最后的觉悟，三灵狮颠覆控制之战！快去一睹为快吧！";
      }
      
      public static function get evoTips() : String
      {
         return "萨克森VS三灵狮！";
      }
      
      public static function get vsTips() : String
      {
         return "萨克森VS三灵狮！";
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(SystemTimerManager.sysBJDate.date == 15 || SystemTimerManager.sysBJDate.date == 16)
         {
            if(_loc1_ == 8)
            {
               return "奖励迪尔克超进化道具，小型升级秘药，一万经验券";
            }
            if(_loc1_ == 9)
            {
               return "奖励赤西西比超进化道具，小型升级秘药，一万经验券";
            }
            if(_loc1_ == 10)
            {
               return "奖励岩灵狮专属刻印，小型升级秘药，一万经验券";
            }
            if(_loc1_ == 11)
            {
               return "奖励炽焰金刚专属刻印，小型升级秘药，十万经验券";
            }
            if(_loc1_ == 12)
            {
               return "奖励岩灵狮进化道具，小型升级秘药，十万经验券";
            }
            if(_loc1_ % 2 == 1)
            {
               return "奖励暗黑战力，小型升级秘药，一万经验券";
            }
            return "奖励水之元神，小型升级秘药，一万经验券";
         }
         if(_loc1_ == 8)
         {
            return "奖励萨克森专属全能刻印，小型升级秘药，一万经验券";
         }
         if(_loc1_ == 9)
         {
            return "奖励羽灵狮进化道具，小型升级秘药，一万经验券";
         }
         if(_loc1_ == 10)
         {
            return "奖励雷灵狮进化道具，小型升级秘药，一万经验券";
         }
         if(_loc1_ == 11)
         {
            return "奖励岩灵狮进化道具，小型升级秘药，十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "奖励萨克森的精元，小型升级秘药，十万经验券";
         }
         if(_loc1_ % 2 == 1)
         {
            return "奖励火之精魄，小型升级秘药，一万经验券";
         }
         return "奖励火之精魄，小型升级秘药，一万经验券";
      }
      
      private static function get timeTip() : String
      {
         return "7月24日—7月30日，13:00-14:00，19:00-20:00";
      }
      
      private static function get canBroadcast() : Boolean
      {
         return BROADCAST_AC.isInActivityTime;
      }
      
      public static function get activeStatus() : String
      {
         if(ACTIVE_AC.isIncoming)
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
      
      private static function get reward() : String
      {
         return TextFormatUtil.getRedTxtInStory("萨克森的精元，羽灵狮，雷灵狮，岩灵狮！");
      }
   }
}
