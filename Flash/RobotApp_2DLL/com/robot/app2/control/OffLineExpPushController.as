package com.robot.app2.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class OffLineExpPushController
   {
      
      private static var _icon:SimpleButton;
      
      private static var _show:Boolean = false;
       
      
      public function OffLineExpPushController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.FUCK_SHINEHOO_TIMES,onTimesGet);
         SocketConnection.send(CommandID.FUCK_SHINEHOO_TIMES,10238);
      }
      
      private static function onTimesGet(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,onTimesGet);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 0)
         {
            showIcon();
         }
      }
      
      private static function showIcon() : void
      {
         _show = true;
      }
      
      public static function updateIconLocation(param1:Number) : void
      {
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1022,86056600);
         ModuleManager.showModule(ClientConfig.getAppModule("OffLineExpPushPanel"));
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.FUCK_SHINEHOO_TIMES,onTimesGet);
         _show = false;
      }
   }
}
