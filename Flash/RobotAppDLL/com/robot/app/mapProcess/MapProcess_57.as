package com.robot.app.mapProcess
{
   import com.robot.app.energy.utils.EnergyController;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.control.TaskController_779;
   import com.robot.app.task.control.TaskController_81;
   import com.robot.app.task.taskscollection.Task1388;
   import com.robot.app.task.taskscollection.Task779;
   import com.robot.app.task.taskscollection.Task819;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.media.SoundMixer;
   import flash.utils.Timer;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_57 extends BaseMapProcess
   {
      
      public static var fightWithSuc:Boolean;
       
      
      private var _hua_btn:SimpleButton;
      
      private var _dh_mc:MovieClip;
      
      private var pet_btn:SimpleButton;
      
      private var spt_mc:MovieClip;
      
      private var _diveGameApp:AppModel;
      
      private var clickSuke2Time:Boolean;
      
      private var _timer:Timer;
      
      private var _isOpen:Boolean = false;
      
      public function MapProcess_57()
      {
         super();
      }
      
      override protected function init() : void
      {
         var map:BaseMapProcess = null;
         map = this;
         this._hua_btn = btnLevel["hua_btn"];
         this.pet_btn = depthLevel["pet_btn"];
         this._dh_mc = depthLevel["dh_mc"];
         ToolTipManager.add(this._hua_btn,"花蕊");
         Task819.initTaskForMap57(this);
         conLevel["miniNPC"].visible = true;
         conLevel["miniNPC"].buttonMode = true;
         TasksManager.getProStatusList(819,function(param1:Array):void
         {
            if(param1[0] && !param1[1] || param1[0] && param1[1] && !param1[2])
            {
               CommonUI.addYellowExcal(conLevel["miniNPC"],400,370);
               conLevel["miniNPC"].addEventListener(MouseEvent.CLICK,Task819.goStep2);
               return;
            }
            var _loc2_:uint = uint(TasksManager.getTaskStatus(TaskController_779.TASK_ID));
            if(_loc2_ == TasksManager.ALR_ACCEPT)
            {
               Task779.initTaskForMap57(map);
               return;
            }
            conLevel["miniNPC"].addEventListener(MouseEvent.CLICK,Task779.miniClickHandler);
         });
         this.initTask81();
         Task1388.initForMap57(this);
         this.spt_mc = conLevel["spt"];
         ToolTipManager.add(this.spt_mc,"克鲁斯");
         this.spt_mc.buttonMode = true;
         this.spt_mc.addEventListener(MouseEvent.CLICK,this.onFightWithBoss);
         this.addDiveGame();
      }
      
      private function addDiveGame() : void
      {
         ToolTipManager.add(depthLevel["ship"],"深海潜艇");
         ToolTipManager.add(conLevel["water"],"深海霸主巨型章鱼");
         ToolTipManager.add(conLevel["board"],"深海霸主巨型章鱼-危险公告");
         (conLevel["water"] as MovieClip).mouseChildren = false;
         (conLevel["water"] as MovieClip).gotoAndStop(1);
         depthLevel["ship"].buttonMode = true;
         depthLevel["ship"].addEventListener(MouseEvent.CLICK,this.onShipClick);
         if(BufferRecordManager.getMyState(1065))
         {
            conLevel["water"].buttonMode = false;
            conLevel["water"].removeEventListener(MouseEvent.CLICK,this.onWaterClick);
            conLevel["board"].visible = true;
            conLevel["board"].addEventListener(MouseEvent.CLICK,this.onBoardClick);
         }
         else
         {
            conLevel["water"].buttonMode = true;
            conLevel["water"].addEventListener(MouseEvent.CLICK,this.onWaterClick);
            conLevel["board"].visible = false;
            conLevel["board"].removeEventListener(MouseEvent.CLICK,this.onBoardClick);
         }
         if(fightWithSuc)
         {
            fightWithSuc = false;
            NpcDialog.show(NPC.SEER,["报告苏克，我已经顺利完成任务，深海地底的巨型章鱼已经成功击败，相信他不会再捣乱了！"],["太好了，我这就回去报告船长，给你记个一等功！"],[function():void
            {
               AnimateManager.playMcAnimate(btnLevel["suke"],2,"mc2",function():void
               {
                  btnLevel["suke"].visible = false;
               });
            }]);
         }
      }
      
      private function onShipClick(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(conLevel["ship"]);
         if(this._diveGameApp)
         {
            this._diveGameApp = null;
         }
         SoundManager.stopSound();
         this._diveGameApp = new AppModel(ClientConfig.getGameModule("DiveGame"),"正在进入游戏");
         this._diveGameApp.setup();
         this._diveGameApp.sharedEvents.addEventListener(Event.CLOSE,this.onDiveGameOver);
         this._diveGameApp.sharedEvents.addEventListener(Event.COMPLETE,this.onDiveGameComplete);
         this._diveGameApp.sharedEvents.addEventListener(Event.CANCEL,this.onDiveGameCancel);
         this._diveGameApp.show();
      }
      
      private function onDiveGameComplete(param1:Event) : void
      {
         this.doComeBack();
         MapProcess_442.isFromShip = true;
         MapManager.changeMap(442);
      }
      
      private function onDiveGameCancel(param1:Event) : void
      {
         this.doComeBack();
      }
      
      private function onDiveGameOver(param1:Event) : void
      {
         this.doComeBack();
         this.topLevel["aiMc"].gotoAndPlay(2);
         Alarm.show("你的深海潜艇耐久度不足，下次记得要避开那些海洋生物哦！");
      }
      
      private function doComeBack() : void
      {
         SoundMixer.stopAll();
         SoundManager.playSound();
      }
      
      private function onWaterClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         (conLevel["water"] as MovieClip).gotoAndStop(2);
         NpcDialog.show(NPC.SEER,["这是什么东西，难道水下有什么怪物吗？"],["你来的正好，水下的确有怪物！"],[function():void
         {
            NpcDialog.show(NPC.SHUKE,[MainManager.actorInfo.formatNick + "刚刚的事情你也看到了，最近尼古尔星经常发生精灵消失的事件，船长特意派我来这里调查！"],["苏克，我能帮什么忙吗？"],[function():void
            {
               NpcDialog.show(NPC.SHUKE,["想要见到这怪物的真面目，就一定要下潜到海底，但是这下面可是深不可测的海底，据说是鱼龙王曾经出现的地方，你愿意下潜吗？"],["没问题，我已经不是第一次下去了！"],[function():void
               {
                  AnimateManager.playMcAnimate(btnLevel["suke"],1,"mc1",function():void
                  {
                     NpcDialog.show(NPC.SEER,["恩恩，我应该还知道该怎么操作，等我的好消息吧？"],["你可一定要小心啊！"],[function():void
                     {
                        BufferRecordManager.setMyState(1065,true);
                        conLevel["water"].buttonMode = false;
                        conLevel["water"].removeEventListener(MouseEvent.CLICK,onWaterClick);
                        conLevel["board"].visible = true;
                        conLevel["board"].addEventListener(MouseEvent.CLICK,onBoardClick);
                        CommonUI.addYellowArrow(depthLevel["ship"],0,-60,0);
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private function onBoardClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         EventManager.addEventListener("diveTipsEvent",this.diveTips);
         ModuleManager.addEventListener(ModuleManager.MODEL_CLOSE,function(param1:Event):void
         {
            ModuleManager.removeEventListener("model","close",arguments.callee);
            EventManager.removeEventListener("diveTipsEvent",diveTips);
         });
         ModuleManager.showModule(ClientConfig.getAppModule("SPTBossOctopusPanel"));
      }
      
      private function diveTips(param1:Event) : void
      {
         EventManager.removeEventListener("diveTipsEvent",this.diveTips);
         CommonUI.addYellowArrow(depthLevel["ship"],0,-60,0);
         btnLevel["suke"].visible = true;
         (btnLevel["suke"] as MovieClip).gotoAndStop(3);
      }
      
      private function removeDiveGame() : void
      {
         ToolTipManager.remove(depthLevel["ship"]);
         ToolTipManager.remove(conLevel["water"]);
         ToolTipManager.remove(conLevel["board"]);
         conLevel["board"].removeEventListener(MouseEvent.CLICK,this.onBoardClick);
         conLevel["water"].removeEventListener(MouseEvent.CLICK,this.onWaterClick);
         depthLevel["ship"].removeEventListener(MouseEvent.CLICK,this.onShipClick);
      }
      
      private function onFightWithBoss(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.KELUSI,["从此以后，尼古尔星由我来守护！你是什么人！"],["你来守护！让我见识一下你的实力先！","别打我！我只是路过，我马上就离开！"],[function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightBossController.fightBoss("克鲁斯");
         }]);
      }
      
      private function onFightFinish(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightFinish);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.KELUSI,["看不出来，你竟然实力非凡！希望你善用这力量，为宇宙和平出一份力！"],["恩恩，我会的！"]);
         }
         else
         {
            NpcDialog.show(NPC.KELUSI,["呵呵，怎么样，我这实力守护尼古尔星当之无愧吧！再去修炼一下再来挑战我吧！"],["恩恩，我会的！"]);
         }
      }
      
      private function clickHuaHandler(param1:MouseEvent) : void
      {
         if(this._dh_mc.currentFrame != 40)
         {
            return;
         }
         this._dh_mc.gotoAndPlay(42);
         this._dh_mc.addFrameScript(81,this.endDh1);
      }
      
      private function endDh1() : void
      {
         this._dh_mc.gotoAndStop(81);
         this._dh_mc.addFrameScript(81,null);
         TaskController_81.speek0();
      }
      
      private function clickPetHandler(param1:MouseEvent) : void
      {
         this.pet_btn.visible = false;
         if(this._dh_mc.currentFrame == 81)
         {
            this._dh_mc.gotoAndPlay(83);
            this._dh_mc.addFrameScript(166,this.endDH2);
         }
         TaskController_81.speek3();
      }
      
      private function endDH2() : void
      {
         this._dh_mc.gotoAndStop(166);
         this._dh_mc.addFrameScript(166,null);
      }
      
      private function initTask81() : void
      {
         TaskController_81.initMc(this._dh_mc,this._hua_btn,this.pet_btn);
         this._hua_btn.visible = false;
         this._hua_btn.addEventListener(MouseEvent.CLICK,this.clickHuaHandler);
         this.pet_btn.visible = false;
         this.pet_btn.addEventListener(MouseEvent.CLICK,this.clickPetHandler);
         if(TasksManager.getTaskStatus(TaskController_81.TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_81.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  _dh_mc.gotoAndStop(1);
                  TaskController_81.playCartoon0();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  _dh_mc.gotoAndStop(40);
                  _hua_btn.visible = true;
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  TaskController_81.addLisPetF();
                  _dh_mc.gotoAndStop(81);
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  pet_btn.visible = true;
                  _dh_mc.gotoAndStop(81);
               }
            });
         }
      }
      
      public function exploitOre() : void
      {
         EnergyController.exploit(27);
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(this._hua_btn);
         this._hua_btn.removeEventListener(MouseEvent.CLICK,this.clickHuaHandler);
         this.pet_btn.removeEventListener(MouseEvent.CLICK,this.clickPetHandler);
         Task779.destroy();
         Task819.destroy();
         Task1388.destroy();
         ToolBarController.showOrHideAllUser(true);
         conLevel["miniNPC"].removeEventListener(MouseEvent.CLICK,Task779.miniClickHandler);
         this.spt_mc.removeEventListener(MouseEvent.CLICK,this.onFightWithBoss);
         this.removeDiveGame();
         if(this._diveGameApp)
         {
            this._diveGameApp.sharedEvents.removeEventListener(Event.CLOSE,this.onDiveGameOver);
            this._diveGameApp.sharedEvents.removeEventListener(Event.COMPLETE,this.onDiveGameOver);
            this._diveGameApp.sharedEvents.removeEventListener(Event.CANCEL,this.onDiveGameCancel);
            this._diveGameApp = null;
         }
      }
   }
}
