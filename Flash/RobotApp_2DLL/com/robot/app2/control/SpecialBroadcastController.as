package com.robot.app2.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.core.CommandID;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.TextFormatUtil;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SpecialBroadcastController
   {
       
      
      public function SpecialBroadcastController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.SPECIAL_BROADCAST,onHandler);
      }
      
      private static function onHandler(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:String = _loc2_.readUTFBytes(_loc3_);
         var _loc5_:BroadcastInfo;
         (_loc5_ = new BroadcastInfo()).type = 9999;
         _loc5_.txt = "<b>" + TextFormatUtil.getRedTxt(_loc4_ + "！   ") + "</b>";
         BroadcastController.IS_SEPCIAL = true;
         BroadcastController.addBroadcast(_loc5_);
      }
   }
}
