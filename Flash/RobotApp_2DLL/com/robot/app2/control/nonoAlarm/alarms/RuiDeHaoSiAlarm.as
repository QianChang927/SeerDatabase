package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import org.taomee.events.SocketEvent;
   
   public class RuiDeHaoSiAlarm extends AlarmItem
   {
       
      
      public function RuiDeHaoSiAlarm()
      {
         var alarmItem:AlarmItem = null;
         super();
         alarmItem = this;
         SocketConnection.addCmdListener(CommandID.RUIDEHAOSI_RESET_DATA,function(param1:SocketEvent):void
         {
            NoNoAlarmControl.removeAlarm(alarmItem);
         });
      }
      
      override public function checkStatu() : void
      {
         var alarmItem:AlarmItem = null;
         alarmItem = this;
         KTool.getForeverNum(4086,function(param1:int):void
         {
            var _loc2_:uint = uint(param1);
            if(_loc2_ > 0)
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
         return "暴走三师圣殿瑞德豪斯";
      }
   }
}
