package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class InvitationFromAresUnionController
   {
      
      private static var _petIdArr:Array = [70,261,798,875,2394,1845,2323,2341];
      
      public static var beatRightNowArr:Array = [0,0,0,0];
      
      public static var firstOpenPanel:Boolean = true;
      
      private static var _index:uint;
       
      
      public function InvitationFromAresUnionController()
      {
         super();
      }
      
      public static function init() : void
      {
         if(!BufferRecordManager.getState(MainManager.actorInfo,618))
         {
            BufferRecordManager.setState(MainManager.actorInfo,618,true);
            ModuleManager.showModule(ClientConfig.getAppModule("InvitationFromAresUnionPanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("InvitationFromAresUnionPanel"));
         }
      }
      
      public static function fightWithHero(param1:uint) : void
      {
         _index = param1;
         SocketConnection.addCmdListener(CommandID.INVITATION_FROM_ARESUNION_SEND_CHALLENGE_TYPE,onTypeRecall);
         SocketConnection.send(CommandID.INVITATION_FROM_ARESUNION_SEND_CHALLENGE_TYPE,_petIdArr[param1]);
      }
      
      private static function onTypeRecall(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.INVITATION_FROM_ARESUNION_SEND_CHALLENGE_TYPE,onTypeRecall);
         FightManager.fightWithBoss("缪斯",_index % 4);
      }
      
      public static function destroy() : void
      {
      }
   }
}
