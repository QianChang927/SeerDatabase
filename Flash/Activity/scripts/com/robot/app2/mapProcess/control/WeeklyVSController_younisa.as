package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
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
   
   public class WeeklyVSController_younisa
   {
      
      public static const TARGET_MAP:uint = 782;
      
      private static const BUFFER_ID:uint = 833;
      
      private static const ASK_TASK:uint = 10375;
      
      private static const COMPLETE_TASK:uint = 9570;
      
      private static const MARK_ID:uint = 20425;
      
      private static const MARK_TASK:uint = 1567;
      
      private static const ENTER_POS:int = 3;
      
      private static const FIRST_POS:int = 4;
      
      private static const SECOND_POS:int = 5;
      
      private static const THIRD_POS:int = 6;
      
      private static const FOURTH_POS:int = 7;
      
      private static const FIFTH_POS:int = 8;
      
      private static const SIXTH_POS:int = 9;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static const time_str:String = "11月20日—11月26日，每天13:00—14:00";
      
      private static var time_p2:CronTimeVo = new CronTimeVo("*","13","20-26","11","*","2015");
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","26","11","*","2015");
      
      private static var time_e4:CronTimeVo = new CronTimeVo("55-60","12","20-26","11","*","2015");
      
      private static const AILIKE:String = "ailike";
      
      private static const JUSHILINGWANG:String = "jushilingwang";
      
      private static const PALUODIYA:String = "paluodiya";
      
      private static const YOUMINA:String = "youmina";
      
      private static const YOUNIKA:String = "younika";
      
      private static const YOUNISA:String = "younisa";
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean = false;
      
      private static var _taskMc:MovieClip;
       
      
      public function WeeklyVSController_younisa()
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
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_younisa",0,false,null,null,1);
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
         SocketConnection.send(1022,_curStep + 86062846);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86062840);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86061819);
         MapManager.changeMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_782_vs_younisa"),function(param1:MovieClip):void
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
         taskMc.addEventListener(MouseEvent.CLICK,onClickDialog);
      }
      
      private static function removeEvents() : void
      {
         if(taskMc)
         {
            taskMc.removeEventListener(MouseEvent.CLICK,onClickDialog);
         }
      }
      
      public static function initEquip() : void
      {
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_younisa"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/MoshenVsMoShengPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         if(activeStatus != PAST)
         {
            NpcDialog.show(NPC.YOUNISA,["魔神重现！真是让人兴奋啊！ 0xFF0000" + time_str + "0xFFFFFF，谁才是真正的魔之王者，马上就要揭晓了！"],["我一定会去的！","我准备一下就来！"],[function():void
            {
               MapManager.changeMap(TARGET_MAP);
            }]);
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
         var beforeFunc:Function = null;
         var endFunc:Function = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         destroyWidget();
         if(!isLastDay)
         {
            endFunc = checkPreTask;
            beforeFunc = startOverMc;
         }
         else
         {
            endFunc = destroy;
            beforeFunc = startFinishMc;
         }
         KTool.getLimitNum(ASK_TASK,function(param1:int):void
         {
            var num:int = param1;
            if(num == 0)
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
         });
      }
      
      private static function completeTask(param1:Function) : void
      {
         var cb:Function = param1;
         SocketConnection.sendWithCallback(COMPLETE_TASK,function():void
         {
            cb();
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
      
      private static function onRefreshTime(param1:SocketEvent = null) : void
      {
         var e:SocketEvent = param1;
         KTool.getLimitNum(10547,function(param1:int):void
         {
            onCheckBoss(param1);
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
         CommonUI.removeYellowArrow(_map.topLevel);
         stopAtChildFrame(2);
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
      
      private static function setOddBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(4);
         }
         else if(_loc3_)
         {
            if(param2 == 0)
            {
               initFirstEnterHanlder(startFightOddHandler);
            }
            else
            {
               startFightOddHandler();
            }
         }
         else
         {
            stopAtChildFrame(4);
            CommonUI.removeYellowArrow(_map.topLevel);
            CommonUI.addYellowArrow(_map.topLevel,500,220,0);
         }
         _curStep = param2;
      }
      
      private static function setDoubleBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(4);
         }
         else if(_loc3_)
         {
            startFightDoubleHandler();
         }
         else
         {
            stopAtChildFrame(4);
            CommonUI.removeYellowArrow(_map.topLevel);
            CommonUI.addYellowArrow(_map.topLevel,525,245,0);
         }
         _curStep = param2;
      }
      
      private static function onCheckBoss(param1:int) : void
      {
         var _loc2_:ByteArray = new ByteArray();
         _loc2_.writeInt(param1);
         _loc2_.position = 0;
         _fightStatus = KTool.readDataByBits(_loc2_,32);
         var _loc3_:uint = SystemTimerManager.sysBJDate.minutes / 5;
         var _loc4_:uint = uint(_loc3_ + 1);
         var _loc5_:* = _fightStatus[_loc3_] == 1;
         var _loc6_:* = _curStep != _loc3_;
         if(_loc5_)
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            if(_loc4_ > 8)
            {
               stopAtChildFrame(12);
            }
            else
            {
               stopAtChildFrame(2);
            }
            _curStep = _loc3_;
            return;
         }
         if(_loc6_)
         {
            onFight12Handler(_loc3_);
            _curStep = _loc3_;
         }
      }
      
      private static function onFight12Handler(param1:uint) : void
      {
         var m1:TaskMod;
         var m2:TaskMod;
         var m3:TaskMod;
         var m4:TaskMod;
         var m5:TaskMod;
         var m6:TaskMod;
         var m7:TaskMod;
         var m8:TaskMod;
         var m9:TaskMod;
         var m10:TaskMod;
         var m11:TaskMod;
         var m12:TaskMod;
         var m13:TaskMod;
         var m14:TaskMod;
         var m15:TaskMod;
         var m16:TaskMod;
         var m17:TaskMod;
         var m18:TaskMod;
         var m19:TaskMod;
         var m20:TaskMod;
         var m21:TaskMod;
         var m22:TaskMod;
         var curStep:uint = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         KTool.hideMapAllPlayerAndMonster();
         m1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
         m2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好强大的能量！看来这定会是一场旷古之战！ "],["大家都要一起加油啊！"]);
         m3 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
         m4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNIKA,["怎么样？魔神！现在认输还来得及！ "],["我来试一下魔圣的威力！"]);
         m5 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
         m6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,["尤尼卡，你还没有真正掌握圣魔之魂的能量！想要击败我，再修炼几年吧！ "],["魔神，让我来试试！"]);
         m7 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
         m8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSHILINGWANG,["艾里克，这就是你所谓的最强实力吗？太弱了吧！ "],["让我来挑战你！"]);
         m9 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,7,"mc7"]);
         m10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,["邪恶四灵的实力不过如此，哈哈！想要击败我，再修炼几年吧！ "],["魔神，让我来试试！"]);
         m11 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,8,"mc8"]);
         m12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PALUODIYA,["艾里克，这就是你所谓的最强实力吗？太弱了吧！ "],["让我来挑战你！"]);
         m13 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,9,"mc9"]);
         m14 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,["邪恶四灵的实力不过如此，哈哈！想要击败我，再修炼几年吧！ "],["魔神，让我来试试！"]);
         m15 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,10,"mc10"]);
         m16 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YUMINA,["艾里克，这就是你所谓的最强实力吗？太弱了吧！ "],["让我来挑战你！"]);
         m17 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,11,"mc11"]);
         m18 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,["邪恶四灵的实力不过如此，哈哈！想要击败我，再修炼几年吧！ "],["魔神，让我来试试！"]);
         m19 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,12,"mc12"]);
         m20 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,["怎么样？魔神！没有人能击败我！ "],["我来试一下魔圣的威力！"]);
         m21 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,13,"mc13"]);
         m22 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,["尤尼萨，这就是你圣魔之魂的实力吗？哈哈！想要击败我，再修炼几年吧！ "],["魔神，让我来试试！"]);
         curStep += 1;
         switch(curStep)
         {
            case 1:
               TaskDiaLogManager.single.playStory([m1,m2,m3,m4],function():void
               {
                  stopAtChildFrame(2);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,736,180,0);
               });
               break;
            case 2:
               TaskDiaLogManager.single.playStory([m5,m6],function():void
               {
                  stopAtChildFrame(2);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,230,100,0);
               });
               break;
            case 3:
               TaskDiaLogManager.single.playStory([m7,m8],function():void
               {
                  stopAtChildFrame(2);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,600,160,0);
               });
               break;
            case 4:
               TaskDiaLogManager.single.playStory([m9,m10],function():void
               {
                  stopAtChildFrame(2);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,230,100,0);
               });
               break;
            case 5:
               TaskDiaLogManager.single.playStory([m11,m12],function():void
               {
                  stopAtChildFrame(2);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,500,200,0);
               });
               break;
            case 6:
               TaskDiaLogManager.single.playStory([m13,m14],function():void
               {
                  stopAtChildFrame(2);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,230,100,0);
               });
               break;
            case 7:
               TaskDiaLogManager.single.playStory([m15,m16],function():void
               {
                  stopAtChildFrame(2);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,538,390,0);
               });
               break;
            case 8:
               TaskDiaLogManager.single.playStory([m17,m18],function():void
               {
                  stopAtChildFrame(2);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,230,100,0);
               });
               break;
            case 9:
            case 11:
               TaskDiaLogManager.single.playStory([m19,m20],function():void
               {
                  stopAtChildFrame(12);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,730,180,0);
               });
               break;
            case 10:
               TaskDiaLogManager.single.playStory([m21,m22],function():void
               {
                  stopAtChildFrame(12);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,230,100,0);
               });
               break;
            case 12:
               TaskDiaLogManager.single.playStory([m21,m22],function():void
               {
                  stopAtChildFrame(12);
                  KTool.showMapAllPlayerAndMonster();
                  CommonUI.addYellowArrow(_map.topLevel,230,100,0);
               });
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
         _taskMc = null;
      }
      
      private static function onClickDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case YOUNIKA:
                  if(_curStep == 0 && !_fightStatus[_curStep])
                  {
                     isFight = true;
                     FightManager.fightWithBoss("尤尼卡",24 + _curStep);
                  }
                  else
                  {
                     NpcDialog.show(NPC.YOUNIKA,["我一定会击败艾里克！魔之王者一定是我！ " + MainManager.actorInfo.formatNick + "0xff0000每5分钟0xffffff可以挑战我们其中一个。激发我们的潜能！"],["魔圣，你一定可以的！"]);
                  }
                  break;
               case YOUNISA:
                  if((_curStep == 8 || _curStep == 10) && !_fightStatus[_curStep])
                  {
                     isFight = true;
                     FightManager.fightWithBoss("尤尼萨",24 + _curStep);
                  }
                  else
                  {
                     NpcDialog.show(NPC.YOUNISA,["我一定会击败艾里克！魔之王者一定是我！ " + MainManager.actorInfo.formatNick + "0xff0000每5分钟0xffffff可以挑战我们其中一个。激发我们的潜能！"],["魔圣，你一定可以的！"]);
                  }
                  break;
               case AILIKE:
                  if((_curStep == 1 || _curStep == 3 || _curStep == 5 || _curStep == 7 || _curStep == 9 || _curStep == 11) && !_fightStatus[_curStep])
                  {
                     isFight = true;
                     FightManager.fightWithBoss("艾里克",24 + _curStep);
                  }
                  else
                  {
                     NpcDialog.show(NPC.AILIKE,["邪恶四灵想要击败我？实力还差得远啊！0xff0000每5分钟0xffffff可以挑战我们其中一个。看看我们的实力到底如何！ "],["我要击败你！"]);
                  }
                  break;
               case JUSHILINGWANG:
                  if(_curStep == 2 && !_fightStatus[_curStep])
                  {
                     isFight = true;
                     FightManager.fightWithBoss("巨石灵王",24 + _curStep);
                  }
                  else
                  {
                     NpcDialog.show(NPC.JUSHILINGWANG,[MainManager.actorInfo.formatNick + "0xff0000每5分钟0xffffff可以挑战我们其中一个。激发我们的潜能！艾里克一定会被击败的"],["大家一起加油！"]);
                  }
                  break;
               case PALUODIYA:
                  if(_curStep == 4 && !_fightStatus[_curStep])
                  {
                     isFight = true;
                     FightManager.fightWithBoss("帕罗狄亚",24 + _curStep);
                  }
                  else
                  {
                     NpcDialog.show(NPC.PALUODIYA,[MainManager.actorInfo.formatNick + "0xff0000每5分钟0xffffff可以挑战我们其中一个。激发我们的潜能！艾里克一定会被击败的"],["大家一起加油！"]);
                  }
                  break;
               case YOUMINA:
                  if(_curStep == 6 && !_fightStatus[_curStep])
                  {
                     isFight = true;
                     FightManager.fightWithBoss("尤米娜",24 + _curStep);
                  }
                  else
                  {
                     NpcDialog.show(NPC.YUMINA,[MainManager.actorInfo.formatNick + "0xff0000每5分钟0xffffff可以挑战我们其中一个。激发我们的潜能！艾里克一定会被击败的"],["大家一起加油！"]);
                  }
            }
         }
         else
         {
            switch(_loc2_)
            {
               case AILIKE:
                  NpcDialog.show(NPC.AILIKE,[MainManager.actorInfo.formatNick + "0xff0000" + time_str + "，0xffffff我与魔圣将会在这里决斗，大家一起见证魔之王者的诞生吧！"],["加油吧！你一定可以的！"]);
                  break;
               case JUSHILINGWANG:
                  NpcDialog.show(NPC.JUSHILINGWANG,[MainManager.actorInfo.formatNick + "0xff0000" + time_str + "，0xffffff艾里克与尤尼卡将会在这里决斗，必要时刻，我也会出手的！ "],["啊？艾里克危险啦！"]);
                  break;
               case PALUODIYA:
                  NpcDialog.show(NPC.PALUODIYA,[MainManager.actorInfo.formatNick + "0xff0000" + time_str + "，0xffffff艾里克与尤尼卡将会在这里决斗，尤尼卡不能输！ "],["看他们的实力吧！"]);
                  break;
               case YOUMINA:
                  NpcDialog.show(NPC.YUMINA,[MainManager.actorInfo.formatNick + "0xff0000" + time_str + "，0xffffff艾里克与尤尼卡将会在这里决斗，我一定会帮助哥哥的！"],["我们还是不要插手吧！"]);
                  break;
               case YOUNIKA:
                  NpcDialog.show(NPC.YOUNIKA,[MainManager.actorInfo.formatNick + "0xff0000" + time_str + "，0xffffff我与艾里克将会在这里决斗，谁才是真正的魔之王者，到时候用实力证明！"],["加油吧！"]);
            }
         }
      }
      
      private static function onFightOverHandler(param1:PetFightEvent) : void
      {
         var m1:TaskMod;
         var m2:TaskMod;
         var m3:TaskMod;
         var m4:TaskMod;
         var m5:TaskMod;
         var m6:TaskMod;
         var m7:TaskMod;
         var m8:TaskMod;
         var m9:TaskMod;
         var m10:TaskMod;
         var m11:TaskMod;
         var m12:TaskMod;
         var m13:TaskMod;
         var m14:TaskMod;
         var curLun:uint;
         var e:PetFightEvent = param1;
         isFight = false;
         CommonUI.removeYellowArrow(_map.topLevel);
         m1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNIKA,[MainManager.actorInfo.formatNick + "圣魔之魂的能量正在我体内游走，我要爆发出来啦！艾里克，你输定了！ "],["话说得太早了！"]);
         m2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,[MainManager.actorInfo.formatNick + "你果然实力不凡！但是想要击败我，实力还差得远！"],["我一定会加油的！"]);
         m3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSHILINGWANG,[MainManager.actorInfo.formatNick + "你果然实力不凡！但是魔神已经被我击败了……  "],["还没有结束呢！"]);
         m4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,[MainManager.actorInfo.formatNick + "你果然实力不凡！但是想要击败我，实力还差得远！"],["我一定会加油的！"]);
         m5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PALUODIYA,[MainManager.actorInfo.formatNick + "你果然实力不凡！但是魔神已经被我击败了……"],["还没有结束呢！"]);
         m6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,[MainManager.actorInfo.formatNick + "你果然实力不凡！但是想要击败我，实力还差得远！"],["我一定会加油的！"]);
         m7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YUMINA,[MainManager.actorInfo.formatNick + "你果然实力不凡！但是魔神已经被我击败了……"],["还没有结束呢！"]);
         m8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,[MainManager.actorInfo.formatNick + "你果然实力不凡！但是想要击败我，实力还差得远！尤尼卡，认输吧！ "],["可恶！"]);
         m9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNISA,[MainManager.actorInfo.formatNick + "圣魔之魂的能量已经全部被我融合！艾里克，你输定了！ "],["话说得太早了！"]);
         m10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,[MainManager.actorInfo.formatNick + "你果然实力不凡！但是想要击败我，实力还差得远！邪恶四灵，认输吧！ "],["可恶！"]);
         m11 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,14,"mc14"]);
         m12 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,15,"mc15"]);
         m13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["天啊，我感受到巨大的能量！魔圣和魔神谁才是真正的魔之王者！ "],["加油吧！正义的伙伴们！"]);
         m14 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["魔之王者的称号不再重要，重要的是我们能够同心协力，一致对外！ "],["加油吧！正义的伙伴们！"]);
         curLun = uint(_curStep + 1);
         stopAtChildFrame(2);
         switch(curLun)
         {
            case 1:
               TaskDiaLogManager.single.playStory([m1],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 2:
               TaskDiaLogManager.single.playStory([m2],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 3:
               TaskDiaLogManager.single.playStory([m3],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 4:
               TaskDiaLogManager.single.playStory([m4],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 5:
               TaskDiaLogManager.single.playStory([m5],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 6:
               TaskDiaLogManager.single.playStory([m6],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 7:
               TaskDiaLogManager.single.playStory([m7],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 8:
               TaskDiaLogManager.single.playStory([m8],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 9:
            case 11:
               TaskDiaLogManager.single.playStory([m9],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 10:
               TaskDiaLogManager.single.playStory([m10],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
               });
               break;
            case 12:
               if(lastDay.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
               {
                  TaskDiaLogManager.single.playStory([m10,m11,m14],function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                  });
               }
               else
               {
                  TaskDiaLogManager.single.playStory([m10,m12,m13],function():void
                  {
                     KTool.showMapAllPlayerAndMonster();
                  });
               }
         }
      }
      
      private static function startPreTask() : void
      {
         var m1:TaskMod;
         var m2:TaskMod;
         var m3:TaskMod;
         var m4:TaskMod;
         var m5:TaskMod;
         var m6:TaskMod;
         SocketConnection.send(1022,86062838);
         KTool.hideMapAllPlayerAndMonster();
         m1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
         m2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,["尤尼卡，等你真正悟了圣魔之魂的能量之后，再来找我吧！  "],["就凭你吗？哼！"]);
         m3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNIKA,["拿出你最强的实力与我对决吧！"],["那我就不客气了！"]);
         m4 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
         m5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNIKA,["这才是魔神的气魄！" + time_str + "，艾里克，让我们决战到底！ "],["怕你不成！"]);
         m6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AILIKE,[MainManager.actorInfo.formatNick + time_str + "，我与魔圣将会在这里决斗，大家一起见证魔之王者的诞生吧！ "],["大家一起加油啊！"]);
         TaskDiaLogManager.single.playStory([m1,m2,m3,m4,m5,m6],function():void
         {
            if(ToolBarController.panel.panelIsShow)
            {
               KTool.showMapAllPlayerAndMonster();
            }
            OgreController.isShow = false;
            showNpcs();
            BufferRecordManager.setMyState(BUFFER_ID,true);
            SocketConnection.send(1022,86062839);
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         });
         SocketConnection.send(1022,86062066);
      }
      
      private static function initFirstEnterHanlder(param1:Function = null) : void
      {
         var cb:Function = param1;
         var m1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
         var m2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好强大的能量！看来这定会是一场旷古之战！ "],["大家都要一起加油啊！"]);
         var m3:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
         var m4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUNIKA,["怎么样？魔神！现在认输还来得及！ "],["我来试一下魔圣的威力！"]);
         TaskDiaLogManager.single.playStory([m1,m2,m3,m4],function():void
         {
            if(cb != null)
            {
               cb();
            }
         });
      }
      
      private static function startFightOddHandler() : void
      {
         var m2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.PALUODIYA,[MainManager.actorInfo.formatNick + "圣魔之魂的能量正在我体内游走，我要爆发出来啦！艾里克，你输定了！ "],["话说得太早了！"]);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory([m2],function():void
         {
            KTool.showMapAllPlayerAndMonster();
            CommonUI.addYellowArrow(_map.topLevel,500,200,0);
         });
      }
      
      private static function endFightFirst() : void
      {
         stopAtChildFrame(FIRST_POS);
         NpcDialog.show(NPC.JUSHILINGWANG,[MainManager.actorInfo.formatNick + "我们四灵必须找出一位实力超群的精灵作为我们的首领，这样才能够抵抗外敌！"],["嗯嗯！我明白了！"],[function():void
         {
            NpcDialog.show(NPC.YOUNISA,["巨石灵王，不要小看我！我还没输呢！真正的实力还没有爆发出来！"],["尤尼萨，加油啊！"],[function():void
            {
            }]);
         }]);
      }
      
      private static function startFightDoubleHandler() : void
      {
         var m1:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
         var m2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BULIKE_SUPER,["帕罗狄亚，我感觉龙族守卫军超进化的能量，还是不受我控制！ "],["让我来挑战你！"]);
         KTool.hideMapAllPlayerAndMonster();
         TaskDiaLogManager.single.playStory([m1,m2],function():void
         {
            CommonUI.removeYellowArrow(_map.topLevel);
            CommonUI.addYellowArrow(_map.topLevel,500,200,0);
            KTool.showMapAllPlayerAndMonster();
         });
      }
      
      private static function endFightSecond() : void
      {
         stopAtChildFrame(SECOND_POS);
         NpcDialog.show(NPC.YOUNISA,[MainManager.actorInfo.formatNick + "太棒了！我已经感觉浑身充满着能量。四灵首领的宝座，我坐定了！"],["别忘记还有我呢！"],[function():void
         {
            NpcDialog.show(NPC.PALUODIYA,["让我来领教一下你的实力吧！ "],["尽管来吧！"],[function():void
            {
            }]);
         }]);
      }
      
      private static function startOverMc(param1:Function) : void
      {
         param1 && param1();
      }
      
      private static function startFinishMc(param1:Function = null) : void
      {
         param1 && param1();
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      public static function get adTips() : String
      {
         return "伊兰迪将魔掌伸向斯诺星，忍无可忍的迪露终于爆发！是的！勇敢的赛尔，让我们携手再战！伊兰迪的复仇，斯诺密洞的咆哮，魔狮迪露超进化！立刻前往";
      }
      
      public static function get vsTips() : String
      {
         var _loc2_:String = null;
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         switch(_loc1_)
         {
            case 1:
            case 2:
               _loc2_ = "艾里克VS尤尼卡";
               break;
            case 3:
            case 4:
               _loc2_ = "艾里克VS巨石灵王";
               break;
            case 5:
            case 6:
               _loc2_ = "艾里克VS帕罗狄亚";
               break;
            case 7:
            case 8:
               _loc2_ = "艾里克VS尤米娜";
               break;
            case 9:
            case 10:
            case 11:
            case 12:
               _loc2_ = "艾里克VS尤尼萨";
         }
         return _loc2_;
      }
      
      private static function get currentStepTips() : String
      {
         var _loc2_:String = null;
         var _loc1_:uint = Math.floor(SystemTimerManager.sysBJDate.minutes / 5) + 1;
         switch(_loc1_)
         {
            case 1:
            case 3:
            case 5:
            case 7:
            case 9:
               _loc2_ = "圣魔之力，小型升级秘药，一万经验券";
               break;
            case 2:
            case 4:
            case 6:
            case 8:
            case 10:
               _loc2_ = "S级技能石，小型升级秘药，一万经验券";
               break;
            case 11:
               _loc2_ = "尤尼卡的精元/圣魔之力，小型升级秘药，十万经验券";
               break;
            case 12:
               _loc2_ = "艾里克的精元，小型升级秘药，十万经验券";
         }
         return _loc2_;
      }
      
      private static function get canBroadcast() : Boolean
      {
         if(time_e4.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
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
         if(time_p2.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
         {
            return INCOMING;
         }
         if(time_p2.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.PAST)
         {
            return PAST;
         }
         if(time_p2.checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
   }
}
