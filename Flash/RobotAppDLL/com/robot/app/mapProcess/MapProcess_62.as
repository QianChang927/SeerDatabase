package com.robot.app.mapProcess
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskscollection.Task1062;
   import com.robot.app.task.taskscollection.Task748;
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetBargeListInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_62 extends BaseMapProcess
   {
       
      
      private var loveFruitMC:MovieClip;
      
      public function MapProcess_62()
      {
         super();
      }
      
      override protected function init() : void
      {
         if(FightManager.isKillBigPetB0 == false)
         {
            SocketConnection.addCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
            SocketConnection.send(CommandID.PET_BARGE_LIST,242,242);
         }
         this.loveFruitMC = conLevel["loveFruitMC"];
         this.loveFruitMC.addEventListener(MouseEvent.CLICK,this.onGetLoveFruit);
         ToolTipManager.add(this.loveFruitMC,"爱心果");
         Task748.initTaskForMap62(this);
         Task1062.initTaskForMap62(this);
      }
      
      private function addCmListenrPet(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.PET_BARGE_LIST,this.addCmListenrPet);
         var _loc2_:PetBargeListInfo = param1.data as PetBargeListInfo;
         var _loc3_:Array = _loc2_.isKillList;
         if(_loc3_.length != 0)
         {
            FightManager.isKillBigPetB0 = true;
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
            FightManager.isKillBigPetB0 = true;
         }
      }
      
      override public function destroy() : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.FIGHT_CLOSE,this.onCloseFight);
         this.loveFruitMC.removeEventListener(MouseEvent.CLICK,this.onGetLoveFruit);
         ToolTipManager.remove(this.loveFruitMC);
         this.loveFruitMC = null;
         Task748.destroy();
         Task1062.destory();
      }
      
      public function changeMap() : void
      {
         MapManager.changeMap(63);
      }
      
      private function onGetLoveFruit(param1:MouseEvent) : void
      {
         ItemAction.buyItem(600013,true,5);
      }
   }
}
