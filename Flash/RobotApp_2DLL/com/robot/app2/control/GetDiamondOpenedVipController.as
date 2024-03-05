package com.robot.app2.control
{
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class GetDiamondOpenedVipController
   {
       
      
      public function GetDiamondOpenedVipController()
      {
         super();
      }
      
      public static function getReward1(param1:Function) : void
      {
         var fun:Function = param1;
         SocketConnection.addCmdListener(42055,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(42055,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            Alarm2.show("恭喜你成功领取" + _loc4_ + "钻石！");
            if(fun != null)
            {
               fun();
            }
         });
         SocketConnection.send(42055,186);
      }
      
      public static function getReward2() : void
      {
         SocketConnection.addCmdListener(42055,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(42055,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            Alarm2.show("恭喜你成功领取" + _loc4_ + "钻石！");
         });
         SocketConnection.send(42055,187);
      }
      
      public static function getReward3() : void
      {
         SocketConnection.addCmdListener(42055,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(42055,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            Alarm2.show("恭喜你成功领取" + _loc4_ + "钻石！");
         });
         SocketConnection.send(42055,188);
      }
      
      public static function getReward4() : void
      {
         SocketConnection.addCmdListener(42055,function(param1:SocketEvent):void
         {
            SocketConnection.removeCmdListener(42055,arguments.callee);
            var _loc3_:ByteArray = param1.data as ByteArray;
            _loc3_.position = 0;
            var _loc4_:int = int(_loc3_.readUnsignedInt());
            Alarm2.show("恭喜你成功领取" + _loc4_ + "钻石！");
         });
         SocketConnection.send(42055,189);
      }
   }
}
