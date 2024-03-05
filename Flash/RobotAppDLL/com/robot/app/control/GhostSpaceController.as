package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class GhostSpaceController
   {
      
      private static var _index:uint;
       
      
      public function GhostSpaceController()
      {
         super();
      }
      
      public static function showChoicePanel() : void
      {
         SocketConnection.send(1022,84807043);
         ModuleManager.showModule(ClientConfig.getAppModule("GhostSpaceChoicePanel"));
      }
      
      public static function enter(param1:uint) : void
      {
         _index = param1;
         SocketConnection.addCmdListener(CommandID.ENTER_GHOST_SPACE,onEnterGhostSpace);
         SocketConnection.send(CommandID.ENTER_GHOST_SPACE,_index);
      }
      
      public static function onEnterGhostSpace(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ENTER_GHOST_SPACE,onEnterGhostSpace);
         switch(_index)
         {
            case 1:
               SocketConnection.send(1022,86064287);
               MapManager.changeLocalMap(10051);
               break;
            case 2:
               MapManager.changeLocalMap(10039);
               break;
            case 3:
               MapManager.changeLocalMap(10055);
         }
      }
   }
}
