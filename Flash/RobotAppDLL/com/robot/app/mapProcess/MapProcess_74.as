package com.robot.app.mapProcess
{
   import com.robot.app.control.ProvPetController;
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.taskscollection.Task1420;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_74 extends BaseMapProcess
   {
       
      
      private var _bossMc:MovieClip;
      
      public function MapProcess_74()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         Task1420.initForMap74(this);
         this.initBoss();
         MapListenerManager.add(depthLevel["checkup"] as SimpleButton,function():void
         {
            SocketConnection.send(1022,86056816);
            ProvPetController.showProcPanel();
         },"精灵鉴定台");
      }
      
      private function initBoss() : void
      {
         this._bossMc = conLevel["sptBoss"];
         this._bossMc.buttonMode = true;
         this._bossMc.gotoAndStop(1);
         ToolTipManager.add(this._bossMc,"达蒙特");
         this._bossMc.addEventListener(MouseEvent.CLICK,this.onBossClick);
      }
      
      private function onBossClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         AnimateManager.playMcAnimate(this._bossMc,2,"mc2",function():void
         {
            displayBoss();
         });
      }
      
      private function displayBoss() : void
      {
         NpcDialog.show(NPC.DAMENGTE,["呵呵，我不保证谜域之中有你想要寻找的东西，不过，如果坚持要来的话！那就先击败我吧！"],["我要挑战你","让我先准备一下"],[function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onAlarmClick);
            FightBossController.fightBoss("达蒙特",0);
         },function():void
         {
            restoreBoss();
         }]);
      }
      
      private function restoreBoss() : void
      {
         AnimateManager.playMcAnimate(this._bossMc,3,"mc3");
      }
      
      private function onAlarmClick(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClick);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.DAMENGTE,["想不到你有如此惊人的力量，谜域之门将为你开启，但是前方还有更加可怕的对手等待着你！"],["太棒了，谢谢你的提点"],[function():void
            {
               restoreBoss();
            }]);
         }
         else
         {
            NpcDialog.show(NPC.DAMENGTE,["这里不是你想进就能进的，好好考虑一下吧！按你目前的状态是战胜不了我的！"],["可恶，下次我一定会成功的！"],[function():void
            {
               restoreBoss();
            }]);
         }
      }
      
      override public function destroy() : void
      {
         Task1420.destroy();
         ToolTipManager.remove(this._bossMc);
         this._bossMc.removeEventListener(MouseEvent.CLICK,this.onBossClick);
      }
   }
}
