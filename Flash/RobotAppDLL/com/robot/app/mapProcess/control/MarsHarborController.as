package com.robot.app.mapProcess.control
{
   import com.robot.app.control.BroadcastController;
   import com.robot.core.CommandID;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class MarsHarborController
   {
       
      
      public function MarsHarborController()
      {
         super();
      }
      
      public static function init() : void
      {
         SocketConnection.addCmdListener(CommandID.MARS_HARBOR_DRAW_BROADCAST,onShow);
      }
      
      private static function onShow(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:String = _loc2_.readUTFBytes(16);
         var _loc4_:BroadcastInfo;
         (_loc4_ = new BroadcastInfo()).isLocal = true;
         _loc4_.module = "marsHarbor/MarsHarborDailyLuckyDraw";
         _loc4_.txt = _loc3_ + "在火星港乐园抽中了10个乐园代币，大家一起恭喜他吧！";
         BroadcastController.addBroadcast(_loc4_,true);
      }
   }
}
