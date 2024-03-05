package com.robot.app.mapProcess
{
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.task.control.TaskController_131;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.group.fightInfo.fightOver.GroupFightOverInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_337 extends BaseMapProcess
   {
       
      
      public function MapProcess_337()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.upDatahandler();
      }
      
      private function upDatahandler() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onPetFightHandler);
         ToolTipManager.add(conLevel["door_0"],"离开");
         ToolTipManager.add(conLevel["mosterMc"],"精灵背包");
         conLevel["mosterMc"].addEventListener(MouseEvent.CLICK,this.onMonsterHandler);
      }
      
      private function onPetFightHandler(param1:PetFightEvent) : void
      {
         var _loc2_:GroupFightOverInfo = param1.dataObj as GroupFightOverInfo;
         if(_loc2_.type == 1)
         {
            if(_loc2_.winnerID == 1)
            {
               if(TasksManager.getTaskStatus(TaskController_131.TASK_ID) == TasksManager.ALR_ACCEPT)
               {
                  TasksManager.complete(TaskController_131.TASK_ID,2,null,true);
               }
            }
            else
            {
               NpcDialog.show(NPC.LEGION,["看来你和你的队友还需要再接再厉哦！"],["我会再来挑战的！"]);
            }
         }
      }
      
      private function onMonsterHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(conLevel["mosterMc"]);
         conLevel["mosterMc"].removeEventListener(MouseEvent.CLICK,this.onMonsterHandler);
         ToolTipManager.remove(conLevel["door_0"]);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onPetFightHandler);
      }
      
      public function leaveFight() : void
      {
         MapManager.changeMap(336);
      }
   }
}
