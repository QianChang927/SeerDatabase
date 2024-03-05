package com.robot.app.mapProcess
{
   import com.robot.app.spt.FightBossController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskscollection.Task1434;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_79 extends BaseMapProcess
   {
       
      
      private var _sptBoss:MovieClip;
      
      private var _isPlayed:Boolean = false;
      
      public function MapProcess_79()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         this.initBoss();
      }
      
      private function initBoss() : void
      {
         this._sptBoss = this.conLevel["sptBoss"] as MovieClip;
         if(!this._sptBoss)
         {
            return;
         }
         this._sptBoss.buttonMode = true;
         this._sptBoss.gotoAndStop(1);
         ToolTipManager.add(this._sptBoss,"里弗斯");
         this._sptBoss.addEventListener(MouseEvent.CLICK,this.onSptBossClick);
      }
      
      protected function onSptBossClick(param1:MouseEvent = null) : void
      {
         var event:MouseEvent = param1;
         if(this._isPlayed)
         {
            this.onFightDispatcher();
            return;
         }
         NpcDialog.show(NPC.LIFUSI,["我是天蛇星先知里弗斯，为了等待天蛇星少主召唤，我将在这里终生修炼！"],["我要挑战你！","只是一个龟壳！"],[function():void
         {
            _isPlayed = true;
            AnimateManager.playMcAnimate(_sptBoss,2,"mc2",function():void
            {
               NpcDialog.show(NPC.LIFUSI,["既然你打断了我的修炼，那么这次你将接受我对你的考验！"],["来吧！先知里弗斯！"],[function():void
               {
                  onFightDispatcher();
               }]);
            });
         }]);
      }
      
      private function onFightDispatcher() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClick);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClick);
         FightBossController.fightBoss("里弗斯",0);
      }
      
      private function onAlarmClick(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         KTool.getFrameMc(this.sptBoss,2,"mc2",function(param1:MovieClip):void
         {
            param1.gotoAndStop(param1.totalFrames);
         });
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClick);
         if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            NpcDialog.show(NPC.LIFUSI,["想不到我修炼了多年的成果还是这样…小子，看来你是一个不平凡的角色，整个宇宙就靠你了！"],["恩恩，我会尽力的先知！"],[function():void
            {
               resetBossStatus();
            }]);
         }
         else
         {
            NpcDialog.show(NPC.LIFUSI,["打断我修炼的结果就是被我击败，回去再练练吧！天蛇星先知不是这么容易被击败的！"],["别走，我还要继续挑战你！","下次我一定会成功的！"],[function():void
            {
               onSptBossClick();
            },function():void
            {
               resetBossStatus();
            }]);
         }
      }
      
      private function resetBossStatus() : void
      {
         AnimateManager.playMcAnimate(this.sptBoss,3,"mc3");
      }
      
      override public function destroy() : void
      {
         Task1434.destroy();
         ToolTipManager.remove(this._sptBoss);
         this._sptBoss.removeEventListener(MouseEvent.CLICK,this.onSptBossClick);
      }
      
      private function get sptBoss() : MovieClip
      {
         return MapManager.currentMap.controlLevel["sptBoss"] as MovieClip;
      }
   }
}
