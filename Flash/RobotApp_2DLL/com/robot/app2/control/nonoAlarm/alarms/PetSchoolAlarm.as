package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class PetSchoolAlarm extends AlarmItem
   {
       
      
      private var _finishPetNum:int;
      
      public function PetSchoolAlarm()
      {
         super();
         SocketConnection.addCmdListener(CommandID.GET_PET_CLASS,function(param1:SocketEvent):void
         {
            checkStatu();
         });
      }
      
      override public function checkStatu() : void
      {
         var lastNum:int = 0;
         var alarmItem:AlarmItem = null;
         lastNum = this._finishPetNum;
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
            _finishPetNum = _loc3_ + _loc4_;
            if(_finishPetNum != 0 && _finishPetNum != lastNum)
            {
               NoNoAlarmControl.addAlarm(alarmItem);
            }
            if(_finishPetNum == 0)
            {
               NoNoAlarmControl.removeAlarm(alarmItem);
            }
         });
      }
      
      override public function get showText() : String
      {
         return "<font color=\'#3cfecc\'>" + this._finishPetNum + "</font>只精灵在精灵学院";
      }
   }
}
