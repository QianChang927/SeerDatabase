package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_88 extends BaseMapProcess
   {
       
      
      public function MapProcess_88()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         this.bossMC.buttonMode = true;
         MapListenerManager.add(this.bossMC,this._clickMcHandler,"奥德斯");
      }
      
      private function _clickMcHandler(param1:MouseEvent) : void
      {
         AnimateManager.playMcAnimate(this.bossMC,2,"sptMc",this._playDialog);
      }
      
      private function _playDialog() : void
      {
         NpcDialog.show(NPC.AODESI,["我是成功从海盗集团成功逃脱的奥德斯，你想挑战我吗？我的实力可不是一般的强大！"],["我要挑战你！","还是在等等吧！"],[function():void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
            FightBossController.fightBoss("奥德斯");
         },function():void
         {
            AnimateManager.playMcAnimate(bossMC,3,"sptMc",function():void
            {
               bossMC.buttonMode = true;
               bossMC.gotoAndStop(1);
            });
         }]);
      }
      
      private function onFightFinish(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightFinish);
         info = e.dataObj as FightOverInfo;
         this.bossMC.gotoAndStop(3);
         if(info.winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.AODESI,["想不到你居然可以如此轻易地战胜我，后生可畏啊！"],["耶…我终于成功了！"],[function():void
            {
               AnimateManager.playMcAnimate(bossMC,3,"sptMc",function():void
               {
                  bossMC.buttonMode = true;
                  bossMC.gotoAndStop(1);
               });
            }]);
         }
         else
         {
            NpcDialog.show(NPC.AODESI,["我不是这么轻易就能战胜的，你还是再好好努力一下吧！"],["继续挑战奥德斯！","还是在等等吧！"],[function():void
            {
               AnimateManager.playMcAnimate(bossMC,3,"sptMc",function():void
               {
                  bossMC.buttonMode = true;
                  bossMC.gotoAndStop(1);
               });
            },function():void
            {
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
               FightBossController.fightBoss("奥德斯");
            }]);
         }
      }
      
      private function get bossMC() : MovieClip
      {
         if(conLevel["spt_mc"] as MovieClip != null)
         {
            return conLevel["spt_mc"] as MovieClip;
         }
         return null;
      }
      
      override public function destroy() : void
      {
      }
   }
}
