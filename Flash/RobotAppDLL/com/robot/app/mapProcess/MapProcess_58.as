package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.control.TaskController_779;
   import com.robot.app.task.taskscollection.Task1677;
   import com.robot.app.task.taskscollection.Task779;
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetBargeListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_58 extends BaseMapProcess
   {
       
      
      public function MapProcess_58()
      {
         super();
      }
      
      override protected function init() : void
      {
         if(FightManager.isKillBigPetB1 == false)
         {
            SocketConnection.addCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
            SocketConnection.send(CommandID.PET_BARGE_LIST,229,229);
         }
         var _loc1_:uint = uint(TasksManager.getTaskStatus(TaskController_779.TASK_ID));
         if(_loc1_ == TasksManager.ALR_ACCEPT)
         {
            Task779.initTaskForMap58(this);
         }
         else if(_loc1_ == TasksManager.COMPLETE)
         {
            Task779.initSptFight(this);
         }
         else
         {
            DisplayUtil.removeForParent(conLevel["monsterMC"]);
            DisplayUtil.removeForParent(conLevel["task779MC"]);
         }
         Task1677.initTaskForMap58(this);
         SocketConnection.send(1022,86061249);
      }
      
      private function addCmListenrPet(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
         var _loc2_:PetBargeListInfo = param1.data as PetBargeListInfo;
         var _loc3_:Array = _loc2_.isKillList;
         if(_loc3_.length != 0)
         {
            FightManager.isKillBigPetB1 = true;
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
            FightManager.isKillBigPetB1 = true;
         }
      }
      
      override public function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
         Task779.destroy();
      }
   }
}
