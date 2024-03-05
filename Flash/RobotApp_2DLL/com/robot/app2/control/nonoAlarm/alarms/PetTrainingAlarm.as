package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetTrainingAlarm extends AlarmItem
   {
       
      
      private var _finishNum:int;
      
      public function PetTrainingAlarm()
      {
         super();
         SocketConnection.addCmdListener(CommandID.NONO_END_EXE,function(param1:SocketEvent):void
         {
            checkStatu();
         });
      }
      
      override public function checkStatu() : void
      {
         var alarmItem:AlarmItem = null;
         var lastNum:int = this._finishNum;
         alarmItem = this;
         SocketConnection.sendByQueue(CommandID.ALARM_CHECK,[],function(param1:SocketEvent):void
         {
            var _loc3_:uint = 0;
            var _loc4_:uint = 0;
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc3_ = _loc2_.readUnsignedInt();
            _loc4_ = _loc2_.readUnsignedInt();
            _loc3_ = _loc2_.readUnsignedInt();
            _loc4_ = _loc2_.readUnsignedInt();
            _loc3_ = _loc2_.readUnsignedInt();
            _loc4_ = _loc2_.readUnsignedInt();
            var _loc5_:uint = _loc2_.readUnsignedInt();
            _loc3_ = _loc2_.readUnsignedInt();
            _loc4_ = _loc2_.readUnsignedInt();
            _finishNum = _loc4_;
            if(_finishNum > 0)
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
         return "<font color=\'#3cfecc\'>" + this._finishNum + "</font>只精灵完成模拟训练";
      }
   }
}
