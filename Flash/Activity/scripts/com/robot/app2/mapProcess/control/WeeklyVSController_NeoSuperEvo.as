package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.ogre.OgreController;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
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
   import com.robot.core.manager.StatManager;
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
   
   public class WeeklyVSController_NeoSuperEvo
   {
      
      public static const TARGET_MAP:uint = 10790;
      
      private static const BUFFER_ID:uint = 749;
      
      private static const ASK_TASK:uint = 13576;
      
      private static const FOREVER_ID:uint = 13576;
      
      private static const COMPLETE_TASK:uint = 9570;
      
      private static const MARK_ID:uint = 20425;
      
      private static const MARK_TASK:uint = 1567;
      
      private static const ENTER_POS:int = 5;
      
      private static const FIRST_POS:int = 6;
      
      private static const SECOND_POS:int = 8;
      
      private static var _map:BaseMapProcess;
      
      private static var _curDate:Date;
      
      private static var _curStep:int = -1;
      
      private static var _fightStatus:Array;
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static const ACT_AC:ActivityControl = new ActivityControl([new CronTimeVo("*","14","19-25","2","*","2016")]);
      
      private static const BROADCAST_AC:ActivityControl = new ActivityControl([new CronTimeVo("50-59","13","19-25","2","*","2016")]);
      
      private static var lastDay:CronTimeVo = new CronTimeVo("*","*","25","2","*","2016");
      
      private static const AN_HEI_ZHANSHEN_LIANMENG:String = "anheizhanshenlianmeng";
      
      private static const SA_FEI_LUO:String = "shafeiluo";
      
      private static const NIER_SUPER:String = "nier";
      
      private static const NIAO_SUPER:String = "niao";
      
      private static const ACTIVITY_TIME:String = "2月19日—2月25日，下午14:00-15:00";
      
      public static const TIME_TEXT:String = ACTIVITY_TIME;
      
      private static var _widget:MovieClip;
      
      private static var isFight:Boolean;
       
      
      public function WeeklyVSController_NeoSuperEvo()
      {
         super();
      }
      
      public static function addMsgAndIcon() : void
      {
         if(activeStatus != PAST)
         {
            LocalMsgController.addLocalMsg("TwelveRounds/WeeklyVSMsgPanel_NeoSuperEvo",0,false,null,null,1);
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
            _loc1_.txt = "暗黑战神联盟再次出现在提尔瑞斯星，超能兄弟尼尔和尼奥正在奋力抵抗，大家快去帮忙吧！";
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
         _widget["title"].text = "尼奥超进化！";
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
         SocketConnection.send(1022,_curStep + 86060345);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            MapManager.changeLocalMap(TARGET_MAP);
         }
      }
      
      public static function clickVSAd() : void
      {
         SocketConnection.send(1022,86060675);
         MapManager.changeLocalMap(TARGET_MAP);
      }
      
      public static function clickTextAd() : void
      {
         SocketConnection.send(1022,86060342);
         MapManager.changeLocalMap(TARGET_MAP);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         SocketConnection.send(1022,86060672);
         addEvents();
         initEquipAndNPC(_map);
         checkActivity();
      }
      
      private static function addEvents() : void
      {
         taskMc.buttonMode = true;
         taskMc.addEventListener(MouseEvent.CLICK,onDialog);
      }
      
      private static function removeEvents() : void
      {
         if(Boolean(taskMc) && Boolean(taskMc.parent))
         {
            taskMc.removeEventListener(MouseEvent.CLICK,onDialog);
         }
      }
      
      public static function initEquip() : void
      {
         SocketConnection.send(1022,86060344);
         if(MapManager.currentMap.id != TARGET_MAP)
         {
            StatManager.sendStat2014("超能兄弟大PK","点击装置","常规复用");
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/WeeklyVSMsgPanel_NeoSuperEvo"),"正在努力打开面板...");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("TwelveRounds/SuperBrotherPKPanel"),"正在努力打开面板...");
         }
      }
      
      public static function initNPC() : void
      {
         if(activeStatus != PAST)
         {
            NpcDialog.show(NPC.MOYESI,[MainManager.actorInfo.formatNick + "暗黑战神联盟再次出现在提尔瑞斯星，超能兄弟尼尔和尼奥正在奋力抵抗，大家快去帮忙吧！"],["立刻前往!","让我准备一下！"],[function():void
            {
               MapManager.changeLocalMap(TARGET_MAP);
            }]);
            if(MapManager.currentMap.id == 1)
            {
               SocketConnection.send(1022,86060340);
            }
            else if(MapManager.currentMap.id == 7)
            {
               SocketConnection.send(1022,86060341);
            }
         }
      }
      
      public static function initEquipAndNPC(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 1)
         {
            SocketConnection.send(1022,86059044);
         }
         else if(MapManager.currentMap.id == 7)
         {
            SocketConnection.send(1022,86059045);
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
         stopAtChildFrame(ENTER_POS,1);
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
         CommonUI.removeYellowArrow(_map.topLevel);
         if(param1 == FIRST_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,285,284,0);
         }
         else if(param1 == SECOND_POS)
         {
            CommonUI.addYellowArrow(_map.topLevel,700,265,35);
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
         var _loc3_:uint = SystemTimerManager.sysDate.minutes / 5;
         if(_loc3_ % 2 == 0)
         {
            setFirstBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
         else if(_loc3_ % 2 == 1)
         {
            setSecondBossStatus(_fightStatus[_loc3_] == 1,_loc3_);
         }
      }
      
      private static function setFirstBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(ENTER_POS,1);
         }
         else if(_loc3_)
         {
            if(param2 == 0)
            {
               startEnterMc(startFightFirst);
            }
            else
            {
               startFightFirst();
            }
         }
         else
         {
            stopAtChildFrame(ENTER_POS,1);
            addYellowArrow(FIRST_POS);
         }
         _curStep = param2;
      }
      
      private static function setSecondBossStatus(param1:Boolean, param2:int) : void
      {
         var _loc3_:* = _curStep != param2;
         if(param1)
         {
            stopAtChildFrame(ENTER_POS,1);
         }
         else if(_loc3_)
         {
            startFightSecond();
         }
         else
         {
            stopAtChildFrame(ENTER_POS,1);
            addYellowArrow(SECOND_POS);
         }
         _curStep = param2;
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onCheckEndTime);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         if(!isFight)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         }
         if(_map)
         {
            removeEvents();
            DisplayUtil.removeForParent(taskMc);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
         }
         TaskDiaLogManager.single.destroy();
      }
      
      private static function onDialog(param1:MouseEvent) : void
      {
         var _loc2_:String = param1.target.name as String;
         if(activeStatus == ACTIVE)
         {
            switch(_loc2_)
            {
               case NIER_SUPER:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 0)
                  {
                     switch(_curStep)
                     {
                        case 0:
                           SocketConnection.send(1022,86060681);
                           break;
                        case 1:
                           SocketConnection.send(1022,86060682);
                           break;
                        case 2:
                           SocketConnection.send(1022,86060683);
                           break;
                        case 3:
                           SocketConnection.send(1022,86060684);
                           break;
                        case 4:
                           SocketConnection.send(1022,86060685);
                           break;
                        case 5:
                           SocketConnection.send(1022,86060686);
                           break;
                        case 6:
                           SocketConnection.send(1022,86060687);
                           break;
                        case 7:
                           SocketConnection.send(1022,86060688);
                           break;
                        case 8:
                           SocketConnection.send(1022,86060689);
                           break;
                        case 9:
                           SocketConnection.send(1022,86060690);
                           break;
                        case 10:
                           SocketConnection.send(1022,86060691);
                           break;
                        case 11:
                           SocketConnection.send(1022,86060692);
                     }
                     isFight = true;
                     FightManager.fightNoMapBoss("艾菲德斯",_curStep + 3023);
                     SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
                  }
                  else
                  {
                     NpcDialog.show(NPC.AIFEIDESI,["暗黑战神联盟，我们一定会击败你们的！！"],["艾菲德斯说的没错！"]);
                  }
                  break;
               case NIAO_SUPER:
                  if(!_fightStatus[_curStep] && _curStep % 2 == 1)
                  {
                     switch(_curStep)
                     {
                        case 0:
                           SocketConnection.send(1022,86060681);
                           break;
                        case 1:
                           SocketConnection.send(1022,86060682);
                           break;
                        case 2:
                           SocketConnection.send(1022,86060683);
                           break;
                        case 3:
                           SocketConnection.send(1022,86060684);
                           break;
                        case 4:
                           SocketConnection.send(1022,86060685);
                           break;
                        case 5:
                           SocketConnection.send(1022,86060686);
                           break;
                        case 6:
                           SocketConnection.send(1022,86060687);
                           break;
                        case 7:
                           SocketConnection.send(1022,86060688);
                           break;
                        case 8:
                           SocketConnection.send(1022,86060689);
                           break;
                        case 9:
                           SocketConnection.send(1022,86060690);
                           break;
                        case 10:
                           SocketConnection.send(1022,86060691);
                           break;
                        case 11:
                           SocketConnection.send(1022,86060692);
                     }
                     isFight = true;
                     FightManager.fightNoMapBoss("艾格诺斯",_curStep + 3023);
                     SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
                  }
                  else
                  {
                     NpcDialog.show(NPC.AIGELUOSI,[MainManager.actorInfo.formatNick + "0xff0000每五分钟0xffffff可以挑战我和艾菲德斯的其中一个，你应该知道怎么做！"],["恩恩，放心吧！！"]);
                  }
                  break;
               case AN_HEI_ZHANSHEN_LIANMENG:
                  NpcDialog.show(NPC.AIXINGE,["别再做无谓的挣扎了，你们两个必须有一个要倒下，萨菲罗的命运在你们的手中！"],["继续互相较量吧！！"]);
            }
         }
         else
         {
            switch(_loc2_)
            {
               case NIER_SUPER:
                  NpcDialog.show(NPC.AIFEIDESI,["0xff0000" + ACTIVITY_TIME + "，0xffffff我和哥哥之间必须做出选择，我不能眼看着萨菲罗承受痛苦！"],["哥哥…加油！"]);
                  break;
               case NIAO_SUPER:
                  NpcDialog.show(NPC.AIGELUOSI,["萨菲罗，你一定要坚持住，我们超能兄弟一定会拯救你的！"],["我一定要提升自己！"]);
                  break;
               case AN_HEI_ZHANSHEN_LIANMENG:
                  NpcDialog.show(NPC.AIXINGE,["我们的耐心是有限的，所以你们最好快点决出高下！0xff0000" + ACTIVITY_TIME + "，0xffffff就在这里！"],["我一定会拯救萨菲罗和超能兄弟！"]);
                  break;
               case SA_FEI_LUO:
                  NpcDialog.show(NPC.SAFEILUO,["我一定要坚持住，相信超能兄弟一定可以激发自己的潜能！"],["加油吧！超能兄弟！"]);
            }
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
         if(_curStep % 2 == 0)
         {
            endFightFirst();
         }
         if(_curStep % 2 == 1)
         {
            endFightSecond();
         }
      }
      
      private static function startPreTask() : void
      {
         SocketConnection.send(1022,86060673);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         TaskDiaLogManager.single.playStory(preStoryLine,function():void
         {
            if(ToolBarController.panel.panelIsShow)
            {
               KTool.showMapAllPlayerAndMonster();
            }
            OgreController.isShow = false;
            showNpcs();
            SocketConnection.send(1022,86060674);
            BufferRecordManager.setMyState(BUFFER_ID,true);
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onCheckStartTime);
            onCheckStartTime();
         });
      }
      
      private static function get preStoryLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,1,"mc1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["哼哼…萨菲罗…如果你愿意跟随我们暗黑战神联盟的话，你眼前的一切将会停止！"],["不…我是不会跟随你们的！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOYIER,["这可是你选择的，那你就眼睁睁的看着你的伙伴永无止尽的对抗下去！"],["住手，你们太可恶了！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["萨菲罗，你还好吧！我一定会想办法救你出去的！暗黑战神联盟我要亲手打到你们！"],["快带尼尔、尼奥离开这里！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,2,"mc2"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AISIFEIGE,["艾斯菲亚…快点攻击我啊！萨菲罗已经支持不了多久了，难道你不听哥哥的话了吗？"],["不…倒下的应该是我！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AISIFEIYA,["哥哥…你的实力在我之上，就让我牺牲吧！面对如此强大的暗黑战神联盟，你的胜算比我的大！"],["别争了，快出手吧！"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["为什么停下来了，继续啊！看来我要再给萨菲罗一些礼物才行！"],["不…不要！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,3,"mc3"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AISIFEIGE,["好了，不要再浪费时间了，让我们一起用最强的实力打倒对方吧！"],["来吧！哥哥！"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,4,"mc4"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GELAIAO,["哈哈哈…太精彩了，就是这样，继续吧！我们要看的是最具实力的对抗！"],["不行，我一定要帮助超能兄弟！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["我们的耐心是有限的，所以你们最好快点决出高下！0xff0000" + ACTIVITY_TIME + "，0xffffff就在这里！"],["我一定会拯救萨菲罗和超能兄弟！"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["萨菲罗…艾斯菲亚和艾斯菲格，届时我一定会来帮助你们的！"],["我会亲自打到暗黑战神联盟！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_];
      }
      
      private static function startEnterMc(param1:Function = null) : void
      {
         var cb:Function = param1;
         CommonUI.removeYellowArrow(_map.topLevel);
         TaskDiaLogManager.single.playStory(firstPrvStroy,function():void
         {
            if(cb != null)
            {
               cb();
            }
         });
      }
      
      private static function get firstPrvStroy() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,5,"mc5"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIGELUOSI,["来吧！艾菲德斯，时间不多了，我们开始吧！"],["哥哥，我会尽力的！！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["记住，你们之间只能有一个站在这里，兄弟之间的对抗一定会非常精彩！"],["让我们拭目以待吧！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太可恶了，尽然让超能兄弟互相对抗，这不等于是手足相残吗？"],["我一定要想办法帮助他们才行！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_];
      }
      
      private static function startFightFirst() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         TaskDiaLogManager.single.playStory(fightAstoryLine,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            stopAtChildFrame(ENTER_POS,1);
            addYellowArrow(FIRST_POS);
         });
      }
      
      private static function get fightAstoryLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,6,"mc6"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIFEIDESI,["哥哥…我是不会让你独自战斗的，继续爆发自己的能量吧！"],["好样的艾菲德斯！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["艾菲德斯我也来帮助你，接受我的挑战吧！"],["来吧！我接受任何人的挑战！"]);
         return [_loc1_,_loc2_,_loc3_];
      }
      
      private static function endFightSecond() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.AIGELUOSI,[MainManager.actorInfo.formatNick + "实力不错嘛！看来这次超能兄弟联手再加上你的帮助，我们一定可以拯救萨菲罗！"],["恩恩，我们一起加油！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,9,"mc9",function():void
            {
               stopAtChildFrame(ENTER_POS,1);
               SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
            });
         }]);
      }
      
      private static function endFightFirst() : void
      {
         CommonUI.removeYellowArrow(_map.topLevel);
         NpcDialog.show(NPC.AIFEIDESI,[MainManager.actorInfo.formatNick + "实力不错嘛！看来这次我和哥哥联手再加上你的帮助，我们一定可以拯救萨菲罗！"],["恩恩，我们一起加油！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMc,7,"mc7",function():void
            {
               stopAtChildFrame(ENTER_POS,1);
               SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
            });
         }]);
      }
      
      private static function startFightSecond() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowArrow(_map.topLevel);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         TaskDiaLogManager.single.playStory(fightBstoryLine,function():void
         {
            stopAtChildFrame(ENTER_POS,1);
            addYellowArrow(SECOND_POS);
            KTool.showMapAllPlayerAndMonster();
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onRefreshTime);
         });
      }
      
      private static function get fightBstoryLine() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,8,"mc8"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIGELUOSI,["艾菲德斯…我也不会让你独自战斗的，继续爆发自己的能量吧！"],["好样的" + MainManager.actorInfo.nick]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,[MainManager.actorInfo.nick + "我也来帮助你，接受我的挑战吧！"],["来吧！我接受任何人的挑战！"]);
         return [_loc1_,_loc2_,_loc3_];
      }
      
      private static function startOverMc(param1:Function) : void
      {
         var cb:Function = param1;
         stopAtChildFrame(11);
         CommonUI.removeYellowArrow(_map.topLevel);
         TaskDiaLogManager.single.playStory(activityEveryStory,function():void
         {
            if(cb != null)
            {
               cb();
            }
         });
      }
      
      private static function startFinishMc(param1:Function = null) : void
      {
         var cb:Function = param1;
         stopAtChildFrame(14);
         CommonUI.removeYellowArrow(_map.topLevel);
         TaskDiaLogManager.single.playStory(activityEndStory,function():void
         {
            _map.conLevel["act"].visible = false;
            if(cb != null)
            {
               cb();
            }
         });
      }
      
      private static function get activityEndStory() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["够了，你们既然无视我们的存在，看来我们该结束萨菲罗的生命！"],["不...我们不会让你们得逞的！"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,12,"mc12"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAFEILUO,["终于等到这个时刻了，让你们见识一下超能一族的强大实力！"],["爆发吧！萨菲罗！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,13,"mc13"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["萨菲罗，算你们幸运，但是下次就说不定了，我们暗黑战神联盟还将继续需找我们想要的精灵！"],["可恶，你们不会成功的！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.NUOYIER,["事情总是这么有趣，记得和战神联盟说我们等着他们！！"],["我们还会再见的！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,14,"mc14"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["看来暗黑战神联盟的进攻还将继续，我一定要回去告诉赛尔号上的全体赛尔！"],["赛尔号必胜！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_];
      }
      
      private static function get activityEveryStory() : Array
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIXINGE,["别想拖延时间，超能兄弟，你们一天没有决出胜负，萨菲罗就要承受一天的痛苦，你们忍心吗？"],["可恶，你们这些卑鄙的家伙！"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,10,"mc10"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.AIGELUOSI,["住手，我们约定的时间还没有到，再给我们点时间！"],["恩…我们的耐心不多了！"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMc,11,"mc11"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这样下去萨菲罗一定会坚持不住的，超能兄弟，你们一定要拯救萨菲罗啊！"],["我将和你们一起战斗下去！"]);
         return [_loc1_,_loc2_,_loc3_,_loc4_,_loc5_];
      }
      
      private static function get taskMc() : MovieClip
      {
         return _map.conLevel["act"];
      }
      
      private static function get currentStepTips() : String
      {
         var _loc1_:uint = Math.floor(SystemTimerManager.sysDate.minutes / 5) + 1;
         if(_loc1_ == 11)
         {
            return "本轮可获得艾斯菲亚的精元、超能之光以及十万经验券！";
         }
         if(_loc1_ == 12)
         {
            return "本轮可获得艾斯菲格的精元、超能星辰以及十万经验券";
         }
         return "本轮可获得能量之芯以及一万经验券！";
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
         if(ACT_AC.isInActivityTime)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
      
      public static function get adTips() : String
      {
         return "暗黑战神联盟再次出现在提尔瑞斯星，超能兄弟尼尔和尼奥正在奋力抵抗，大家快去帮忙吧！";
      }
   }
}
