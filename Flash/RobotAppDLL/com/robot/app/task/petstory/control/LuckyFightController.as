package com.robot.app.task.petstory.control
{
   import com.robot.app.panel.FightMatchingPanel;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class LuckyFightController
   {
      
      private static var _instance:com.robot.app.task.petstory.control.LuckyFightController;
       
      
      public function LuckyFightController(param1:PrivateClass)
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.control.LuckyFightController
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.control.LuckyFightController(new PrivateClass());
         }
         return _instance;
      }
      
      public function joinLuckyFightGame() : void
      {
         SocketConnection.addCmdListener(CommandID.JOIN_LUCKY_FIGHT,this.onJoinLuckyFight);
         SocketConnection.send(CommandID.JOIN_LUCKY_FIGHT);
      }
      
      private function onJoinLuckyFight(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.JOIN_LUCKY_FIGHT,this.onJoinLuckyFight);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         PetFightModel.type = PetFightModel.LUCKY_BATTLE;
         FightMatchingPanel.show(this.closeWaitPanel);
      }
      
      private function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            SocketConnection.addCmdListener(CommandID.LUCKY_FIGHT_EXP_TURNTABLE,this.onStartExpTurnTable);
            SocketConnection.send(CommandID.LUCKY_FIGHT_EXP_TURNTABLE);
         }
      }
      
      private function onStartExpTurnTable(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.LUCKY_FIGHT_EXP_TURNTABLE,this.onStartExpTurnTable);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Object = new Object();
         _loc3_.gainExp = _loc2_.readUnsignedInt();
         _loc3_.multExpIndex = _loc2_.readByte();
         _loc3_.hasBoss = _loc2_.readUnsignedInt() == 1 ? true : false;
         ModuleManager.showModule(ClientConfig.getAppModule("LuckyFightExpTurnTablePanel"),"正在打开幸运大作战面板",_loc3_);
      }
      
      public function closeWaitPanel() : void
      {
         SocketConnection.addCmdListener(CommandID.INVITE_FIGHT_CANCEL,this.onCancelHandler);
         SocketConnection.send(CommandID.INVITE_FIGHT_CANCEL);
      }
      
      private function onCancelHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.INVITE_FIGHT_CANCEL,this.onCancelHandler);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         PetFightModel.type = 0;
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
