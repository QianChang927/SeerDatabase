package com.robot.app2.control.nonoAlarm.alarms
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.nonoAlarm.AlarmItem;
   import com.robot.app2.control.nonoAlarm.NoNoAlarmControl;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class BaiWanJIngYanAlarm extends AlarmItem
   {
       
      
      public function BaiWanJIngYanAlarm()
      {
         super();
         SocketConnection.addCmdListener(CommandID.MILLIONEXPERIENCE_UPADTEPET,this.onReward);
      }
      
      private function onReward(param1:SocketEvent) : void
      {
         NoNoAlarmControl.removeAlarm(this);
      }
      
      override public function get showText() : String
      {
         return "百万经验";
      }
      
      override public function checkStatu() : void
      {
         var ai:AlarmItem = null;
         ai = this;
         KTool.getMultiValue([11023],function(param1:Array):void
         {
            var arr:Array = param1;
            var totalChance:int = int(arr[0]);
            if(totalChance < 10)
            {
               SocketConnection.sendWithCallback(CommandID.MILLIONEXPERIENCE_LEFTTIME4,function(param1:SocketEvent):void
               {
                  var _loc2_:ByteArray = param1.data as ByteArray;
                  _loc2_.position = 0;
                  var _loc3_:int = int(_loc2_.readUnsignedInt());
                  if(_loc3_ == 0)
                  {
                     if(NoNoAlarmControl.getAlarmList().indexOf(ai) == -1)
                     {
                        NoNoAlarmControl.addAlarm(ai);
                     }
                  }
                  else
                  {
                     NoNoAlarmControl.removeAlarm(ai);
                  }
               });
            }
            else
            {
               NoNoAlarmControl.removeAlarm(ai);
            }
         });
      }
   }
}
