package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class CNCBAlarm extends AlarmItem
   {
       
      
      private var _value:uint;
      
      public function CNCBAlarm()
      {
         super();
      }
      
      override public function checkStatu() : void
      {
         var alarmItem:AlarmItem = null;
         alarmItem = this;
         SocketConnection.sendByQueue(CommandID.FUCK_SHINEHOO_TIMES,[20012],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _value = _loc2_.readUnsignedInt();
            if(_value == 0)
            {
               NoNoAlarmControl.addAlarm(alarmItem);
            }
            else
            {
               NoNoAlarmControl.removeAlarm(alarmItem);
            }
         });
      }
      
      override public function get showText() : String
      {
         return "免费领取3万赛尔豆和5张一万经验券";
      }
   }
}
