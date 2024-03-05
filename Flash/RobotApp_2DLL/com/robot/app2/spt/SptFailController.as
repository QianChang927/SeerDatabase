package com.robot.app2.spt
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SptFailController
   {
       
      
      public function SptFailController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.SPT_FAIL_INFORM,onFailInform);
      }
      
      private static function onFailInform(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         ModuleManager.showModule(ClientConfig.getAppModule("SptFailPanel"),"正在打开...",[_loc3_,_loc4_]);
      }
   }
}
