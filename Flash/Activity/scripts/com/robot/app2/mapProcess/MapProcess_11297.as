package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
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
   
   public class MapProcess_11297 extends BaseMapProcess
   {
      
      public static var isWin:Boolean;
       
      
      public function MapProcess_11297()
      {
         super();
      }
      
      override protected function init() : void
      {
         MapListenerManager.add(btnLevel["mc"],function():void
         {
            if(isWin)
            {
               Alarm2.show("今日试炼已完成!明日再来吧！");
               return;
            }
            NpcDialog.show(NPC.SHIPER,["勇敢的小赛尔，你准备好接受我的考验了吗？"],["准备一下","进入战斗"],[null,onFight]);
         });
      }
      
      private function onCLose(param1:MouseEvent) : void
      {
         MapManager.changeMap(1);
      }
      
      private function onFight() : void
      {
         FightManager.fightNoMapBoss("",7551);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var info:FightOverInfo;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            info = e.dataObj as FightOverInfo;
            if(info.winnerID == MainManager.actorID)
            {
               isWin = true;
               Alarm2.show("恭喜你获得了20学分！",function():void
               {
                  ModuleManager.showAppModule("ExcltitleAlltoTakePanel");
               });
            }
         });
      }
   }
}
