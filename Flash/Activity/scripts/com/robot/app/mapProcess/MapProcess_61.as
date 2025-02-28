package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.info.GaiyaEffectInfo;
   import com.robot.app.spt.FightBossController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetBargeListInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.UserState;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_61 extends BaseMapProcess
   {
       
      
      private var _markMc:MovieClip;
      
      private var _openDoor:MovieClip;
      
      private var _curBossIndex:uint;
      
      private var _lightBossMc:MovieClip;
      
      private var _gaiyadonghua:MovieClip;
      
      public function MapProcess_61()
      {
         super();
      }
      
      override protected function init() : void
      {
         conLevel["hit_1"].visible = false;
         conLevel["door_1"].visible = false;
         conLevel["doorEffect"].gotoAndStop(1);
         this._openDoor = conLevel["open_door"];
         this._openDoor.buttonMode = true;
         this._openDoor.addEventListener(MouseEvent.CLICK,this.onOpenDoorClickHandler);
         if(FightManager.isKillBigPetB == false)
         {
            SocketConnection.addCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
            SocketConnection.send(CommandID.PET_BARGE_LIST,239,239);
         }
         EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,this.onTimerHandler);
         this.onTimerHandler(null);
         getDefinitionByName("com.robot.app2.mapProcess.control.EarlSerraController").initMap(this);
         if(MainManager.actorPrevState == UserState.FIGHT)
         {
            if(FightManager.amyId == 0)
            {
               if(FightManager.amyPetIds.indexOf(2519) != -1)
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin);
                  return;
               }
            }
         }
      }
      
      private function onTimerHandler(param1:SysTimeEvent) : void
      {
         EventManager.removeEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,this.onTimerHandler);
         var _loc2_:Date = SystemTimerManager.sysDate;
         this._curBossIndex = _loc2_.getDay();
         this._lightBossMc = MapManager.currentMap.libManager.getMovieClip("LightBoss_Mc");
         conLevel.addChild(this._lightBossMc);
         this._lightBossMc.x = 440;
         this._lightBossMc.y = 460;
         ToolTipManager.add(this._lightBossMc,"厄尔塞拉");
         this._lightBossMc.addEventListener(Event.ENTER_FRAME,this.onEnterHandler);
         this._lightBossMc.addEventListener(MouseEvent.CLICK,this.onBossClickHandler);
      }
      
      private function fightBossGEGL(param1:int) : void
      {
         FightBossController.fightBoss("厄尔塞拉",param1);
      }
      
      private function onBossClickHandler(param1:MouseEvent) : void
      {
         if(MapManager.currentMap.id == 61)
         {
            if(Boolean(PetManager.containsBagForID(261)) || Boolean(PetManager.containsBagForID(1845)))
            {
               SocketConnection.addCmdListener(CommandID.M_2149,this.onGaiyaEffect);
               SocketConnection.send(CommandID.M_2149);
            }
            else
            {
               this.fightBossGEGL(this._curBossIndex);
            }
         }
      }
      
      private function onGaiyaFightWin(param1:Event) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin);
         SocketConnection.addCmdListener(CommandID.M_2149,this.onGaiyaEffectEnd);
         SocketConnection.send(CommandID.M_2149);
      }
      
      private function onGaiyaEffectEnd(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffectEnd);
         var _loc2_:GaiyaEffectInfo = param1.data as GaiyaEffectInfo;
         if(_loc2_.effects.indexOf(2) == -1)
         {
            NpcDialog.show(NPC.EERSAILA,["这样是不行的，只有承受住10次七色光羽的攻击才可以净化这股能量！"],["好吧，我明白了！"]);
         }
         else
         {
            TasksManager.setProStatus(627,2,true);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("gaiya_xieqilingran"));
         }
      }
      
      private function onGaiyaEffect(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect);
         var _loc2_:GaiyaEffectInfo = param1.data as GaiyaEffectInfo;
         if(_loc2_.effects.indexOf(2) == -1)
         {
            TasksManager.getProStatusList(627,this.onTask_627);
         }
         else
         {
            this.fightBossGEGL(this._curBossIndex);
         }
      }
      
      private function onTask_627(param1:Array) : void
      {
         if(param1[0])
         {
            if(param1[1])
            {
               this.gaiyaDialog_end();
            }
            else
            {
               this.gaiyaDialog_1();
            }
         }
         else
         {
            this.fightBossGEGL(this._curBossIndex);
         }
      }
      
      private function gaiyaDialog_1() : void
      {
         NpcDialog.show(NPC.EERSAILA,["你来找我有什么事？等等……这是什么？好浓郁的黑暗气息！ "],null,null,false,function():void
         {
            LevelManager.closeMouseEvent();
            if(_gaiyadonghua == null)
            {
               _gaiyadonghua = MapManager.currentMap.libManager.getMovieClip("gaiyaXieqi");
               _gaiyadonghua.x = 439;
               _gaiyadonghua.y = 464;
            }
            animatorLevel.addChild(_gaiyadonghua);
            _gaiyadonghua.addEventListener(Event.ENTER_FRAME,onGaiyadonghuaEnter);
            _gaiyadonghua.gotoAndPlay(1);
         });
      }
      
      private function gaiyaDialog_2() : void
      {
         NpcDialog.show(NPC.EERSAILA,["这确实是一股外来的能量，我能感受到上面附加的邪恶之力。不过事情或许并没有你想象的那么糟。"],["哦？这话从何说起？"],[function():void
         {
            NpcDialog.show(NPC.EERSAILA,["咤克斯本来就是一种能量的结合体，残留在你体内的黑色能量并没有自主的意识，如果你能控制住这股能量，或许能成为你的一大助力！"],["真的可以吗？！我该怎么做？"],[function():void
            {
               NpcDialog.show(NPC.EERSAILA,["我的七色光羽，可以净化这股能量中的暴戾气息，不过，如果在此途中，如果你无法承受我的七色能量，将功亏一篑！"],["哼哼，我开始有些迫不及待了！"],[function():void
               {
                  NpcDialog.show(NPC.EERSAILA,["开始吧，我会这股黑暗能量完全激发出来，你会不断受到伤害，同时，0xFF0000你必须接下我10次攻击0xffffff，那么我们会成功的！"],["来吧！我会控制这股能量的！","我再准备一下！"],[function():void
                  {
                     TasksManager.setProStatus(627,1,true);
                     fightBossGEGL(7);
                  }]);
               }]);
            }]);
         }]);
      }
      
      private function gaiyaDialog_end() : void
      {
         NpcDialog.show(NPC.EERSAILA,["准备好了吗？我会这股黑暗能量完全激发出来，你会不断受到伤害，同时，0xFF0000你必须接下我10次攻击0xffffff，我们会成功的！"],["来吧！我会控制这股能量的！","我再准备一下！"],[function():void
         {
            fightBossGEGL(7);
         }]);
      }
      
      private function onGaiyadonghuaEnter(param1:Event) : void
      {
         var event:Event = param1;
         if(this._gaiyadonghua.currentFrame >= 143)
         {
            this._gaiyadonghua.removeEventListener(Event.ENTER_FRAME,this.onGaiyadonghuaEnter);
            this._gaiyadonghua.gotoAndStop(143);
            NpcDialog.show(NPC.GAIYA,["是的，受到了咤克斯的影响，现在黑暗能量依然留在我的体内，我无法突破这层障碍。"],["好吧，让我试试。"],[function():void
            {
               LevelManager.closeMouseEvent();
               _gaiyadonghua.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
               {
                  if(_gaiyadonghua.currentFrame == _gaiyadonghua.totalFrames)
                  {
                     _gaiyadonghua.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     DisplayUtil.removeForParent(_gaiyadonghua);
                     conLevel.addChild(_lightBossMc);
                     gaiyaDialog_2();
                  }
               });
               DisplayUtil.removeForParent(_lightBossMc,false);
               _gaiyadonghua.gotoAndPlay(144);
            }]);
         }
      }
      
      private function onEnterHandler(param1:Event) : void
      {
         if(this._lightBossMc["mc"])
         {
            if(this._lightBossMc["mc"]["mc"])
            {
               this._lightBossMc.removeEventListener(Event.ENTER_FRAME,this.onEnterHandler);
               MovieClip(this._lightBossMc["mc"]["mc"]).gotoAndStop(this._curBossIndex + 1);
            }
         }
      }
      
      private function onOpenDoorClickHandler(param1:MouseEvent) : void
      {
         this._openDoor.removeEventListener(MouseEvent.CLICK,this.onOpenDoorClickHandler);
         conLevel["hit_1"].visible = true;
         conLevel["door_1"].visible = true;
         conLevel["doorEffect"].gotoAndStop(2);
      }
      
      private function addCmListenrPet(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
         var _loc2_:PetBargeListInfo = param1.data as PetBargeListInfo;
         var _loc3_:Array = _loc2_.isKillList;
         if(_loc3_.length != 0)
         {
            FightManager.isKillBigPetB = true;
         }
         else
         {
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,this.onCloseFight);
         }
      }
      
      private function onCloseFight(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = param1.dataObj["data"];
         if(_loc2_.winnerID == MainManager.actorInfo.userID)
         {
            FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.onCloseFight);
            FightManager.isKillBigPetB = true;
         }
      }
      
      override public function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onGaiyaFightWin);
         SocketConnection.removeCmdListener(CommandID.M_2149,this.onGaiyaEffect);
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.onCloseFight);
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,this.onTimerHandler);
         if(this._lightBossMc)
         {
            ToolTipManager.remove(this._lightBossMc);
            this._lightBossMc.removeEventListener(Event.ENTER_FRAME,this.onEnterHandler);
            this._lightBossMc.removeEventListener(MouseEvent.CLICK,this.onBossClickHandler);
            this._lightBossMc.gotoAndStop(1);
            DisplayUtil.removeForParent(this._lightBossMc);
            this._lightBossMc = null;
         }
         if(this._gaiyadonghua)
         {
            this._gaiyadonghua.removeEventListener(Event.ENTER_FRAME,this.onGaiyadonghuaEnter);
            this._gaiyadonghua.stop();
            this._gaiyadonghua = null;
         }
         getDefinitionByName("com.robot.app2.mapProcess.control.EarlSerraController").destroy();
      }
      
      private function onMarkClickHandler(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.SUPERNONO,["哇！前方有危险！有危险！你确定……确定要了解更多关于沙漠窑洞的信息吗？#7"],["无论多危险，我都不怕！","我还是考虑下再来问你吧……"],[function():void
         {
            NpcDialog.show(NPC.SUPERNONO,["我听肖恩老师说了，这里可是超级……超级危险的地方！在这片一望无际的沙漠底下有一个窑洞，根据地形来说，那里很有可能存在着某种精灵……"],["继续！继续！再告诉我点吧！"],[function():void
            {
               NpcDialog.show(NPC.SUPERNONO,["它应该不是一般的精灵，具有极强的攻击性！对了！肖恩老师说这里很不安全！沙漠一点沦陷，窑洞就会淹没！所以一定要有0xff0000超能NoNo0xffffff保护你！（当然充满智慧的NoNo也是可以保护你的噢！）"],["好！我知道啦~"],[function():void
               {
               }]);
            }]);
         }]);
      }
   }
}
