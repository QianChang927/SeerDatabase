package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class SuperMarketDrawAlarm extends AbstractCountdownAlarm
   {
       
      
      public function SuperMarketDrawAlarm()
      {
         super();
         SocketConnection.addCmdListener(CommandID.SHOP_DAY_DRAW,function(param1:SocketEvent):void
         {
            checkStatu();
         });
      }
      
      override public function checkStatu() : void
      {
         var ai:AlarmItem = null;
         ai = this;
         SocketConnection.sendWithCallback(CommandID.EVERYDAY_DRAW_LAST_TIME,function(param1:SocketEvent):void
         {
            NoNoAlarmControl.addAlarm(ai);
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            leftTime = _loc2_.readUnsignedInt();
            allTime = 30 * 60;
         });
      }
   }
}
