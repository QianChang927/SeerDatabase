package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyVSController3
   {
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      private static var _taskMc:MovieClip;
      
      public static const TARGET_MAP:uint = 958;
      
      private static const BUFFER_ID:uint = 22425;
      
      private static const FOREVER_ID:uint = 15046;
      
      private static var _startBossId:int = 1132;
      
      private static var _mapAnimate:String = "map_958_0";
      
      private static var _fulMovie:String = "active_20140425_1";
      
      private static var _mainPanel:String = "ZhousiVsMikaEvolveMainPanel";
      
      private static var beginDate:Date = new Date(2014,4,23);
      
      private static var endDate:Date = new Date(2014,4,29);
      
      private static var activeTimes:Array = [14,18];
      
      private static var timeStr:String = "5月23日—5月29日，14:00-15:00，18：00-19:00";
      
      private static var _reward:String = "米咔的精元、超进化道具";
      
      private static var _broadcastMsg:String = "宙斯VS米咔超进化，震撼来袭！天神宙斯能否突破极限，成功超进化！快去看看吧！ ";
      
      private static var _tipStr:String = "宙斯VS米咔超进化！";
      
      private static const ENTER_MAP_CODE:int = 86073242;
      
      private static const GET_PRE_TASK_CODE:int = 86073243;
      
      private static const COMPLETE_PRE_TASK_CODE:int = 86073244;
      
      private static const CLICK_MAP_ICON_CODE:int = 86073245;
      
      private static const CLICK_TRANSMIT_CABIN_EQUIP_CODE:int = 86073246;
      
      private static const CLICK_LOOK_CABIN_EQUIP_CODE:int = 86073247;
      
      private static const CLICK_ACTIVE_ICON_CODE:int = 86073248;
      
      private static const FIGHT_START_TIMES_CODE:int = 86073255;
      
      private static const CLICK_MSG_PANEL_GO_CODE:int = 86070654;
      
      private static const CLICK_OPEN_MAIN_UI_CODE:int = 86070654;
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
      
      private static var bosses:Array = [];
       
      
      public function WeeklyVSController3()
      {
         super();
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.KAXIUSI_WHITE,["宙斯大人，谢谢你为了我抵挡克罗诺斯的攻击！"],["别说这样的话！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZHOUSI,["阻止邪恶力量的扩大，使我们每个人义不容辞的！只是我现在无法突破能力的极限！恐怕……"],["恐怕什么？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZHOUSI,["如果克罗诺斯再度来袭，我恐怕根本不是他的对手！"],["快看！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.MIRUISI,["宙斯大人，通过我们之间的试炼，就能够用“光之结界“将你体内的能量极限延伸. "],["真是太棒了？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZHOUSI,["没想到小小的米咔，竟然能够爆发如此巨大的能量！那就拜托 "],["你们也太天真了吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.FUL_MOVIE,[_fulMovie,true]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]]];
         SocketConnection.send(1022,GET_PRE_TASK_CODE);
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
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
            SocketConnection.send(1022,COMPLETE_PRE_TASK_CODE);
         };
         _map.topLevel.visible = false;
         storyPlayer.start();
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = String(String(param1.target.name).split("_")[0]);
         if(activeStatus == ACTIVE)
         {
            if(Boolean(_fightStatus) && !_fightStatus[_curStep])
            {
               if(_loc2_ == "miruisi" && _curStep % 2 == 1)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("米瑞斯",_startBossId + _curStep);
               }
               else if(_loc2_ == "zhousi" && _curStep % 2 == 0)
               {
                  isFight = true;
                  FightManager.fightNoMapBoss("宙斯",_startBossId + _curStep);
               }
               return;
            }
            switch(_loc2_)
            {
               case "zhousi":
                  NpcDialog.show(NPC.ZHOUSI,[nick + "，和米咔一起帮助我突破能力的极限吧。参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "kaxiusi":
                  NpcDialog.show(NPC.KAXIUSI_WHITE,[nick + "，和米咔一起帮助我突破能力的极限吧。参加活动100%获得" + reward],["我一定会的！"]);
                  break;
               case "miruisi":
                  NpcDialog.show(NPC.MIRUISI,[nick + "，和我一起帮助我突破能力的极限吧。参加活动100%获得" + reward],["我一定会的！"]);
            }
            return;
         }
         switch(_loc2_)
         {
            case "zhousi":
               NpcDialog.show(NPC.ZHOUSI,[timeTip + "；我将完成超进化！参加活动100%获得" + reward],["我一定会来的！"]);
               break;
            case "miruisi":
               NpcDialog.show(NPC.MIRUISI,[timeTip + "；宙斯将完成超进化！参加活动100%获得" + reward],["我一定会来的！"]);
               break;
            case "kaxiusi":
               NpcDialog.show(NPC.KAXIUSI_WHITE,[timeTip + "；宙斯将完成超进化！参加活动100%获得" + reward],["我一定会来的！"]);
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
            CommonUI.addYellowArrow(_map.topLevel,820,305,0);
         }
         else if(param1 % 2 == 1)
         {
            CommonUI.addYellowArrow(_map.topLevel,458,199,0);
         }
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var cb:Function = param1;
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["米瑞斯！你一定要帮助宙斯突破能力的极限！击败克罗诺斯！"],["放心吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.MIRUISI,["宙斯大人体内已经出现超进化的能量了！光之结界一定能够帮助他的！"],["那就来吧！"]]]];
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
         if(round % 2 == 0)
         {
            index = 6;
            msg1 = "米瑞斯，你怎么样？我感觉超进化的能量在体内汹涌！我一定会击败克罗诺斯的！";
            bossName = "宙斯";
            NPCID = int(NPC.ZHOUSI);
         }
         else if(round % 2 == 1)
         {
            index = 7;
            msg1 = "宙斯大人，你怎么样？坚持住，你一定能够突破能力的极限！ ";
            bossName = "米瑞斯";
            NPCID = int(NPC.MIRUISI);
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
         if(_loc1_ % 2 == 0)
         {
            NpcDialog.show(NPC.ZHOUSI,[nick + "，没想到你的实力也这么强，和米咔一起帮助我突破能力的极限吧。参加活动100%获得" + reward],["我会继续努力的！"]);
         }
         else if(_loc1_ % 2 == 1)
         {
            NpcDialog.show(NPC.MIRUISI,[nick + "，没想到你的实力也这么强，与我一起帮助宙斯突破能力极限吧！参加活动100%获得" + reward],["我会继续努力的！"]);
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
            stopAtChildFrame(6);
         }
         else if(_loc1_ % 2 == 1)
         {
            stopAtChildFrame(7);
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.MIRUISI,[nick + "，快去看看宙斯大人怎么样？突破自身能力的极限一定十分痛苦！ "],["我没事！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZHOUSI,["我一定能够突破自身能力的极限！如果克罗诺斯和魔灵王联合起来，我们根本没办法对抗！"],["那我们怎么办？!"]]],[TaskStoryPlayer.DIALOG,[NPC.NAINUOLITE,["让我们继续下去！" + nick + ",不要忘记了时间哦！" + timeTip + "！"],["不会忘，我会回来的！"]]]];
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]],[TaskStoryPlayer.DIALOG,[NPC.ZHOUSI,["体内的超进化能量仿佛喷涌而出！我一定能突破能力的极限！  "],["宙斯，坚持住！"]]],[TaskStoryPlayer.DIALOG,[NPC.KAXIUSI_WHITE,["魔灵王的突袭已经让我们无力抵抗！如果克罗诺斯出现，整个宇宙都陷入了邪恶势力的控制！"],["我不会让他们得逞的！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZHOUSI,["只要有我在的一天，正义就不能缺失！宇宙就必须存在光明！ "],["好样的，宙斯！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,9,"mc9"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.topLevel.visible = true;
            _map.depthLevel.visible = true;
            if(cb != null)
            {
               cb();
            }
         };
         _map.topLevel.visible = false;
         storyPlayer.start();
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         if(SystemTimerManager.sysBJDate.day == 6)
         {
            if(_loc1_ == 11)
            {
               return "奖励泰坦之灵X300,小型升级秘药,十万经验券";
            }
            if(_loc1_ == 12)
            {
               return "奖励米咔的精元,米咔超能量,小型升级秘药,十万经验券,泰坦之灵X300";
            }
            return "奖励小型升级秘药，米咔领悟碎片，泰坦之灵X300";
         }
         if(_loc1_ == 11)
         {
            return "奖励泰坦之灵X300,小型升级秘药,十万经验券";
         }
         if(_loc1_ == 12)
         {
            return "奖励米咔的精元,小型升级秘药,十万经验券,泰坦之灵X300";
         }
         return "奖励小型升级秘药，米咔领悟碎片，泰坦之灵X300";
      }
      
      private static function showNpcs() : void
      {
         stopAtChildFrame(5,1);
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel",0,false,null,null,1);
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
         StatManager.sendStat2014("卡修斯VS暗夜冰狐超进化","点击活动icon",StatManager.RUN_ACT);
         StatManager.sendStat2014("卡修斯VS暗夜冰狐超进化","点击第" + (_curStep + 1) + "轮icon",StatManager.RUN_ACT);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            changeMap();
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,CLICK_MAP_ICON_CODE);
         StatManager.sendStat2014("卡修斯VS暗夜冰狐超进化","点击星际地图icon",StatManager.RUN_ACT);
         changeMap();
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,CLICK_ACTIVE_ICON_CODE);
         changeMap();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(MapManager.currentMap.id == TARGET_MAP)
         {
            _map = map;
            SocketConnection.send(1022,ENTER_MAP_CODE);
            StatManager.sendStat2014("卡修斯VS暗夜冰狐超进化","进入场景的",StatManager.RUN_ACT);
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               taskMc = param1;
               taskMc.gotoAndStop(taskMc.totalFrames);
               _map.btnLevel.addChild(taskMc);
               _map.topLevel.visible = false;
               addEvents();
               checkActivity();
            });
         }
      }
      
      private static function addBoss() : void
      {
         var _loc4_:OgreModel = null;
         bosses = [];
         var _loc1_:Array = [706,707];
         var _loc2_:Array = [new Point(295,470),new Point(600,152),new Point(472,310)];
         var _loc3_:int = 0;
         while(_loc3_ < 2)
         {
            (_loc4_ = new OgreModel(_loc3_)).addEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
            _loc4_.show(_loc1_[_loc3_],_loc2_[_loc3_]);
            bosses.push(_loc4_);
            _loc3_++;
         }
      }
      
      private static function setBossVisible(param1:Boolean) : void
      {
         var _loc3_:OgreModel = null;
         var _loc2_:int = 0;
         while(_loc2_ < bosses.length)
         {
            _loc3_ = bosses[_loc2_];
            _loc3_.visible = param1;
            _loc2_++;
         }
      }
      
      protected static function onClickHandler(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         if(_loc2_.id == 706)
         {
            FightManager.fightNoMapBoss("拉利",1069);
         }
         else if(_loc2_.id == 707)
         {
            FightManager.fightNoMapBoss("巧克利",1070);
         }
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
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel3"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule(_mainPanel),"正在努力打开面板...");
         }
         if(MapManager.currentMap.id == 1)
         {
            StatManager.sendStat2014("卡修斯VS暗夜冰狐超进化","点击传送舱装置",StatManager.RUN_ACT);
         }
         else if(MapManager.currentMap.id == 7)
         {
            StatManager.sendStat2014("卡修斯VS暗夜冰狐超进化","点击瞭望舱装置",StatManager.RUN_ACT);
         }
      }
      
      private static function changeMap() : void
      {
         if(TARGET_MAP < 10000)
         {
            MapManager.changeMap(TARGET_MAP);
         }
         else
         {
            MapManager.changeLocalMap(TARGET_MAP);
         }
      }
      
      public static function initNPC() : void
      {
         NpcDialog.show(NPC.LEILINGSHI,[timeTip + _tipStr + "参加活动100%免费获得" + reward],["我一定要去！","我准备一下就来！"],[function():void
         {
            changeMap();
         }]);
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,CLICK_TRANSMIT_CABIN_EQUIP_CODE);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,CLICK_LOOK_CABIN_EQUIP_CODE);
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
         bosses = null;
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
         return "" + _broadcastMsg;
      }
      
      public static function get evoTips() : String
      {
         return _tipStr;
      }
      
      public static function get vsTips() : String
      {
         return _tipStr;
      }
      
      private static function get timeTip() : String
      {
         return TextFormatUtil.getRedTxtInStory(timeStr);
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
         return TextFormatUtil.getRedTxtInStory(_reward);
      }
   }
}
