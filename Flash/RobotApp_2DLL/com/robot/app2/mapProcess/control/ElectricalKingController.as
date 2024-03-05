package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ElectricalKingController
   {
      
      private static var _taskMc:MovieClip;
      
      public static var curStep:uint;
      
      private static var powerNum:uint;
      
      private static var blackNum:uint;
      
      private static var leftCount:uint;
      
      private static var fightBigBoss:Boolean;
      
      private static var nextGetNum:uint;
      
      private static const _mapAnimate:String = "ElectricalKing_Animate";
      
      private static const nextGets:Array = [15,8,3,1];
      
      private static const nextGets2:Array = [4,6,10,15];
      
      private static const MapID:uint = 1;
      
      private static const CMDID:uint = 45655;
      
      private static const StepTwoMax:uint = 8;
      
      private static const ActTimeArr:Array = [12,17];
      
      private static const startTime:Date = new Date(2016,5,9,12,0,0);
      
      private static const endTime:Date = new Date(2016,5,12,18,0,0);
      
      public static const INCOMING:String = "INCOMING";
      
      public static const PAST:String = "PAST";
      
      public static const ACTIVE:String = "ACTIVE";
      
      public static const DORMANT:String = "DORMANT";
      
      private static var _panelMc:MovieClip;
       
      
      public function ElectricalKingController()
      {
         super();
      }
      
      private static function loadTaskMc(param1:Function, param2:uint = 1) : void
      {
         var fun:Function = param1;
         var frame:uint = param2;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.gotoAndStop(frame);
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.addEventListener(MouseEvent.CLICK,onClick);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else
         {
            if(_taskMc.parent == null)
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
            }
            if(fun != null)
            {
               fun();
            }
         }
      }
      
      public static function initForMap() : void
      {
         MainManager.selfVisible = false;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(BitBuffSetClass.getState(23188 + curStep) == 0)
         {
            loadTaskMc(function():void
            {
               playStory(getStroy(curStep),function():void
               {
                  BitBuffSetClass.setState(23188 + curStep,1);
                  _taskMc.gotoAndStop(5 + curStep);
                  MapNamePanel.hide();
                  ToolBarController.panel.hide();
                  LevelManager.iconLevel.visible = false;
                  upDateDataStep();
               },false);
            });
            return;
         }
         loadTaskMc(function():void
         {
            _taskMc.gotoAndStop(5 + curStep);
            MapNamePanel.hide();
            ToolBarController.panel.hide();
            LevelManager.iconLevel.visible = false;
            upDateDataStep();
         });
      }
      
      private static function upDateDataStep(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([3967,3976,3968,13855],function(param1:Array):void
         {
            var i:int = 0;
            var val:Array = param1;
            powerNum = val[0];
            blackNum = val[2];
            leftCount = StepTwoMax - val[3] > 0 ? uint(StepTwoMax - val[3]) : 0;
            if(curStep == 0)
            {
               if(_taskMc.powerNumMc)
               {
                  KTool.showScore(_taskMc.powerNumMc,powerNum);
               }
               i = 0;
               while(i < 5)
               {
                  _taskMc["bossMc_" + i].gotoAndStop(1);
                  _taskMc["bossMc_" + i].visible = true;
                  i++;
               }
               if(val[1] > 0)
               {
                  _taskMc["bossMc_" + (val[1] - 1)].visible = false;
                  _taskMc.btnMc.gotoAndStop(2);
                  _taskMc.btnMc.bossMc.gotoAndStop(6 - val[1]);
                  KTool.getMultiValue([3970 + val[1]],function(param1:Array):void
                  {
                     nextGetNum = nextGets[param1[0] > 3 ? 3 : param1[0]];
                     var _loc2_:* = "已击败" + param1[0] + "次" + "\r" + "战胜可获得" + nextGetNum + "点气势值";
                     _taskMc.btnMc.tipsTxt.text = _loc2_;
                  });
               }
               else
               {
                  _taskMc.btnMc.gotoAndStop(1);
               }
            }
            else
            {
               _taskMc.gotoAndStop(blackNum >= 90 ? 7 : 6);
               if(blackNum >= 90)
               {
                  if(BitBuffSetClass.getState(23190) == 0)
                  {
                     playStory(getStroy(2),function():void
                     {
                        BitBuffSetClass.setState(23190,1);
                        MapNamePanel.hide();
                        ToolBarController.panel.hide();
                        LevelManager.iconLevel.visible = false;
                        upDateDataStep();
                     });
                     return;
                  }
               }
               else
               {
                  StatManager.sendStat2014("0608精灵王雷伊","进入第二关挑战阶段","2016运营活动");
                  _taskMc.numTxt.text = "" + blackNum + "/90";
                  _taskMc.leiyiMc.gotoAndStop(leftCount == 0 ? 2 : 1);
                  if(leftCount > 0)
                  {
                     _taskMc.weakMc.gotoAndStop(1);
                     _taskMc.leiyiMc.tipsTxt.text = "" + "再进行" + leftCount + "场战斗后" + "\r" + "将进入疲惫状态";
                  }
                  else
                  {
                     _taskMc.weakMc.gotoAndPlay(2);
                  }
               }
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var index:uint = 0;
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "bagBtn":
               PetBagControllerNew.show();
               break;
            case "cureBtn":
               PetManager.cureAll();
               break;
            case "exitBtn":
               levelMap();
               break;
            case "onekeyPassBtn":
               KTool.buyProductByCallback(247785,1,function():void
               {
                  SocketConnection.sendWithCallback(CMDID,function(param1:SocketEvent):void
                  {
                     levelMap();
                  },2,1);
               },_taskMc);
               break;
            case "onekeyPassBtn1":
               KTool.buyProductByCallback(247792,1,function():void
               {
                  SocketConnection.sendWithCallback(CMDID,function(param1:SocketEvent):void
                  {
                     levelMap();
                  },6,0);
               },_taskMc);
               break;
            case "startBtn":
               StatManager.sendStat2014("0608精灵王雷伊","点击谁来一战","2016运营活动");
               _taskMc.btnMc.visible = false;
               SocketConnection.sendWithCallback(CMDID,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  var byte:ByteArray = e.data as ByteArray;
                  var index:uint = byte.readUnsignedInt();
                  AnimateManager.playMcAnimate(_taskMc,5,"bossMc_" + (index - 1),function():void
                  {
                     _taskMc.btnMc.visible = true;
                     upDateDataStep();
                  });
               },9,0);
               break;
            case "fightBtn":
               FightManager.tryFight(407,[0,0,0,0]);
               break;
            case "onekeyBtn":
               KTool.buyProductByCallback(247789,1,function():void
               {
                  SocketConnection.sendWithCallback(CMDID,function(param1:SocketEvent):void
                  {
                     if(curStep == 1)
                     {
                        Alarm2.show("恭喜你获得了" + nextGetNum + "点暗黑之魂！");
                     }
                     else
                     {
                        Alarm2.show("恭喜你获得了" + nextGetNum + "点气势值！");
                     }
                     upDateDataStep(checkGatePass);
                  },3,0);
               },_taskMc);
               break;
            case "buyBtn":
               KTool.buyProductByCallback(247790,1,function():void
               {
                  SocketConnection.sendWithCallback(CMDID,function(param1:SocketEvent):void
                  {
                     upDateDataStep();
                  },4,0);
               },_taskMc);
               break;
            case "cureLeiyiBtn":
               KTool.buyProductByCallback(247791,1,function():void
               {
                  SocketConnection.sendWithCallback(CMDID,function(param1:SocketEvent):void
                  {
                     upDateDataStep();
                  },5,0);
               },_taskMc);
               break;
            case "bossBtn_0":
            case "bossBtn_1":
            case "bossBtn_2":
            case "bossBtn_3":
               index = uint(e.target.name.split("_")[1]);
               nextGetNum = nextGets2[index];
               FightManager.fightNoMapBoss("",leftCount > 0 ? uint(7191 + index) : uint(7195 + index));
               break;
            case "bigBossBtn":
               fightBigBoss = true;
               FightManager.fightNoMapBoss("",7199);
         }
      }
      
      private static function levelMap() : void
      {
         MapManager.changeMapWithCallback(MapID,function():void
         {
            ModuleManager.showAppModule("ElectricalKingGateTogetherPanel");
         });
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         checkGatePass();
         if(_loc2_.winnerID == MainManager.actorID)
         {
            if(fightBigBoss)
            {
               levelMap();
            }
            else if(curStep == 1)
            {
               Alarm2.show("恭喜你获得了" + nextGetNum + "点暗黑之魂！");
            }
            else
            {
               Alarm2.show("恭喜你获得了" + nextGetNum + "点气势值！");
            }
         }
      }
      
      private static function checkGatePass() : void
      {
         if(curStep == 0)
         {
            if(powerNum >= 100)
            {
               Alarm2.show("你获得了足够的气势值，成功通过此关！",levelMap);
            }
         }
      }
      
      public static function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         }
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         MapNamePanel.show();
         MainManager.selfVisible = true;
      }
      
      public static function playPreStroy() : void
      {
         loadTaskMc(function():void
         {
            playStory(getStroy(0),function():void
            {
               destroy();
               BitBuffSetClass.setState(23187,1);
               ModuleManager.showAppModule("ElectricalKingPanel");
            });
         });
      }
      
      private static function playStory(param1:Array, param2:Function = null, param3:Boolean = true) : void
      {
         var storyArr:Array = param1;
         var fun:Function = param2;
         var showIcon:Boolean = param3;
         MapObjectControl.hideOrShowAllObjects(false);
         if(_taskMc.parent == null)
         {
            MapManager.currentMap.topLevel.addChild(_taskMc);
         }
         MapNamePanel.hide();
         ToolBarController.panel.hide();
         MapManager.currentMap.topLevel.mouseChildren = true;
         MapManager.currentMap.topLevel.mouseEnabled = true;
         LevelManager.iconLevel.visible = false;
         TaskDiaLogManager.single.playStory(storyArr,function():void
         {
            MapObjectControl.hideOrShowAllObjects(true);
            if(showIcon)
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               MapNamePanel.show();
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function getStroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 0:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,1,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEYI_KING,["诸位在此，是有事找我吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JIYANISI,["恭喜你了，雷伊。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIGUANSHOU,["共同尝试接受传承的电系精灵们，只有你获得了最后的成功。电系精灵中，总算有一人可以称为王者了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEYI_KING,["谢谢各位，我……"],["先不要急着谢我们，雷伊。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.DIANJITU,["我想，你误会了我们现在在这里的目的。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.TIANLUSHU,["我们今天是想亲自验证一下，你能否有这个能力承担得起王者之名！如果你无法给我们一个满意的答案，我想，我们是不会承认你的。"],["原来如此……我明白了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.RAY_NEW,["既然非要一战，那便如你们所愿吧！我只使用之前完全体时的力量，我们公平一战！"],["那我们就不客气了！"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YOUGRESL,["很好，这里只有你一个人，那就方便很多了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.XIELOONG_YOUMING,["决不能让敌人的力量变强！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEYI_KING,["哼，你们这些败类，不管发生什么，你们都会出来捣乱。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.GUIJIANKULOU,["你懂什么，伟大的组织迟早会君临天下！我看你们才是那些总是捣乱的败类吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEYI_KING,["不可理喻！你们既然来了，就别回去了，正好让我试试剑吧！"],["兄弟们，上！"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEYI_KING,["伊洛维奇！你……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.EviledEye_MoJun,["精灵王的力量果然不同凡响，想不到你也会有成为精灵王的一天。不过，现在的我也早已今非昔比了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.EviledEye_MoJun,["能与精灵王一战，也算是了却了我的一桩夙愿。来吧，让我看看，究竟是你强还是我强！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEYI_KING,["我不愿与你战斗，伊洛维奇。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.EviledEye_MoJun,["你总是有太多的顾虑。既然如此，就让我成为打破平和的那个人吧！"],["唉。想不到你我终有一战。"]));
         }
         return _loc2_;
      }
      
      public static function showFreeGetPanel() : void
      {
         if(activeStatus == ACTIVE)
         {
            ModuleManager.showAppModule("ElectricalKingFreeGetPanel");
         }
         else if(activeStatus == PAST)
         {
            Alarm2.show("活动已结束！");
         }
         else
         {
            ModuleManager.showAppModule("ElectricalKingNoticePanel");
         }
      }
      
      public static function get activeStatus() : String
      {
         if(SystemTimerManager.sysBJDate.time < startTime.time)
         {
            return INCOMING;
         }
         if(SystemTimerManager.sysBJDate.time >= endTime.time)
         {
            return PAST;
         }
         if(ActTimeArr.indexOf(SystemTimerManager.sysBJDate.hours) > -1)
         {
            return ACTIVE;
         }
         return DORMANT;
      }
      
      public static function get leftTime() : int
      {
         var _loc1_:int = 0;
         var _loc2_:Date = null;
         if(activeStatus == ACTIVE)
         {
            _loc1_ = 60 * 60 - SystemTimerManager.sysBJDate.seconds - SystemTimerManager.sysBJDate.minutes * 60;
         }
         else if(activeStatus == DORMANT)
         {
            if(SystemTimerManager.sysBJDate.hours < ActTimeArr[0])
            {
               _loc2_ = new Date(SystemTimerManager.sysBJDate.fullYear,SystemTimerManager.sysBJDate.month,SystemTimerManager.sysBJDate.date,ActTimeArr[0]);
            }
            else if(SystemTimerManager.sysBJDate.hours < ActTimeArr[1])
            {
               _loc2_ = new Date(SystemTimerManager.sysBJDate.fullYear,SystemTimerManager.sysBJDate.month,SystemTimerManager.sysBJDate.date,ActTimeArr[1]);
            }
            else
            {
               _loc2_ = new Date(SystemTimerManager.sysBJDate.fullYear,SystemTimerManager.sysBJDate.month,SystemTimerManager.sysBJDate.date + 1,ActTimeArr[0]);
            }
            _loc1_ = _loc2_.time / 1000 - SystemTimerManager.time;
         }
         else
         {
            _loc1_ = startTime.time / 1000 - SystemTimerManager.time;
         }
         return _loc1_;
      }
      
      public static function showTV() : void
      {
         if(activeStatus == PAST)
         {
            return;
         }
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onShowTvTime);
      }
      
      private static function onShowTvTime(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         if(activeStatus == ACTIVE)
         {
            if(_panelMc)
            {
               return;
            }
            ResourceManager.getResource(ClientConfig.getAppRes("ElectricalKingTV"),function(param1:MovieClip):void
            {
               _panelMc = param1;
               MapNamePanel.ChildMc = _panelMc;
               _panelMc.alpha = 1;
               _panelMc.x = -14;
               _panelMc.y = -4;
               _panelMc.buttonMode = true;
               _panelMc.mouseChildren = false;
               _panelMc.addEventListener(MouseEvent.CLICK,onGo);
            });
         }
         else
         {
            destoryTvPanel();
         }
      }
      
      private static function destoryTvPanel() : void
      {
         if(Boolean(_panelMc) && Boolean(DisplayUtil.hasParent(_panelMc)))
         {
            SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onShowTvTime);
            _panelMc.removeEventListener(MouseEvent.CLICK,onGo);
            DisplayUtil.removeForParent(_panelMc);
            _panelMc = null;
         }
      }
      
      private static function onGo(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("0608精灵王雷伊免费送","点击小电视GO","2016运营活动");
         showFreeGetPanel();
      }
   }
}
