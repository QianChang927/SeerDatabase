package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.MouseEvent;
   
   public class MapProcess_11296 extends BaseMapProcess
   {
       
      
      private var step:uint;
      
      private const npcIds:Array = [NPC.YEMOZHISHEN_BULAIKE,NPC.KAXIUSI_PERFECT,NPC.CHITONGMIUSI,NPC.ZHAN_SHEN_GAI_YA,NPC.LEIYI_EVO];
      
      private const dialogs:Array = ["黑夜中也有光明，绝望未尝不是一种希望！准备好接受我的试炼了吗？","感受大地的愤怒！上古诸神与我一同奋战！准备好接受我的试炼了吗？","永恒在我的瞳里，只缩短成了一瞬！准备好接受我的试炼了吗？","当我说要战斗的时候，最好能还有活着的对手！准备好接受我的试炼了吗？","雷霆下的战栗！是我对邪恶的唯一忠告！准备好接受我的试炼了吗？"];
      
      public function MapProcess_11296()
      {
         super();
      }
      
      override protected function init() : void
      {
         KTool.getMultiValue([14220],function(param1:Array):void
         {
            var val:Array = param1;
            btnLevel["mc"].gotoAndStop(val[0] + 1);
            step = val[0];
            if(step >= 5)
            {
               btnLevel["yflag"].visible = false;
            }
            MapListenerManager.add(btnLevel["mc"],function(param1:MouseEvent):void
            {
               var e:MouseEvent = param1;
               if(step >= 5)
               {
                  Alarm2.show("今日试炼已完成!明日再来吧！");
               }
               else
               {
                  NpcDialog.show(npcIds[step],[dialogs[step]],["准备一下","进入战斗"],[null,function():void
                  {
                     onFight();
                  }]);
               }
            });
         });
      }
      
      private function onCLose(param1:MouseEvent) : void
      {
         MapManager.changeMap(1);
      }
      
      private function onFight() : void
      {
         FightManager.fightNoMapBoss("",7546 + this.step);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var info:FightOverInfo;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            info = e.dataObj as FightOverInfo;
            if(info.winnerID == MainManager.actorID && step >= 4)
            {
               Alarm2.show("恭喜你获得了10学分！",function():void
               {
                  ModuleManager.showAppModule("ExcltitleAlltoTakePanel");
               });
            }
         });
      }
   }
}
