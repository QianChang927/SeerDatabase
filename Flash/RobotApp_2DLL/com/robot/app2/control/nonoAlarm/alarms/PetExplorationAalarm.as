package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetExplorationAalarm extends AlarmItem
   {
       
      
      private var _petNum:int;
      
      public function PetExplorationAalarm()
      {
         super();
      }
      
      override public function checkStatu() : void
      {
         var alarmItem:AlarmItem = null;
         alarmItem = this;
         SocketConnection.sendByQueue(CommandID.ALARM_CHECK,null,function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            _loc2_.readUnsignedInt();
            _loc2_.readUnsignedInt();
            _loc2_.readUnsignedInt();
            var _loc3_:int = _petNum;
            _petNum = _loc2_.readUnsignedInt();
            if(_petNum != 0 && _loc3_ != _petNum)
            {
               NoNoAlarmControl.addAlarm(alarmItem);
            }
            if(_petNum == 0)
            {
               NoNoAlarmControl.removeAlarm(alarmItem);
            }
         });
      }
      
      override public function get showText() : String
      {
         return "你有 <font color=\'#3cfecc\'>" + this._petNum + "</font>只精灵探索归来";
      }
   }
}
