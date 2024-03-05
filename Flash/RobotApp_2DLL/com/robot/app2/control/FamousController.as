package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class FamousController
   {
       
      
      public function FamousController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         SocketConnection.addCmdListener(CommandID.CHECK_IS_FAMOUS,onCheck);
         SocketConnection.send(CommandID.CHECK_IS_FAMOUS);
      }
      
      private static function onCheck(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CHECK_IS_FAMOUS,onCheck);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_)
         {
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitch);
         }
      }
      
      private static function onSwitch(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onSwitch);
         ModuleManager.showModule(ClientConfig.getAppModule("FamousPanel"));
      }
   }
}
