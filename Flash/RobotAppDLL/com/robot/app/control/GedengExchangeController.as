package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class GedengExchangeController
   {
      
      public static var todayCount:uint;
       
      
      public function GedengExchangeController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.GEDENG_EXCHANGE_TODAY,onCheckCount);
         SocketConnection.send(CommandID.GEDENG_EXCHANGE_TODAY);
      }
      
      private static function onCheckCount(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GEDENG_EXCHANGE_TODAY,onCheckCount);
         var _loc2_:ByteArray = param1.data as ByteArray;
         todayCount = _loc2_.readUnsignedInt();
      }
   }
}
