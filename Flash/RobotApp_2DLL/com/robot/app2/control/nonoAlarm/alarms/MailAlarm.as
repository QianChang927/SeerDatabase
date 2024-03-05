package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class MailAlarm extends AlarmItem
   {
       
      
      private var _unReadCount:int;
      
      public function MailAlarm()
      {
         super();
         SocketConnection.addCmdListener(CommandID.MAIL_SET_READED,function(param1:SocketEvent):void
         {
            checkStatu();
         });
      }
      
      override public function checkStatu() : void
      {
         var alarmItem:AlarmItem = null;
         alarmItem = this;
         SocketConnection.sendWithCallback(CommandID.MAIL_GET_UNREAD,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = _unReadCount;
            _unReadCount = _loc2_.readUnsignedInt();
            if(_loc3_ != _unReadCount)
            {
               NoNoAlarmControl.addAlarm(alarmItem);
            }
            if(_unReadCount == 0)
            {
               NoNoAlarmControl.removeAlarm(alarmItem);
            }
         });
      }
      
      override public function get showText() : String
      {
         return "你有新邮件哦！";
      }
   }
}
