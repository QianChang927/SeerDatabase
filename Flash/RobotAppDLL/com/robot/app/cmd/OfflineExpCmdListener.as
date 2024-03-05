package com.robot.app.cmd
{
   import com.robot.app.control.LocalMsgController;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class OfflineExpCmdListener
   {
       
      
      public function OfflineExpCmdListener()
      {
         super();
      }
      
      public function start() : void
      {
      }
      
      private function onOffline(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         LocalMsgController.addLocalMsg("OfflineExpPanel",0,false,[_loc3_,_loc4_]);
      }
   }
}
