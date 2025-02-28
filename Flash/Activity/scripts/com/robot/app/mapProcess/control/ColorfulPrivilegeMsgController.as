package com.robot.app.mapProcess.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.core.CommandID;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.info.InformInfo;
   import com.robot.core.manager.MessageManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class ColorfulPrivilegeMsgController
   {
       
      
      public function ColorfulPrivilegeMsgController()
      {
         super();
      }
      
      public static function init() : void
      {
         EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,function(param1:SysTimeEvent):void
         {
            EventManager.removeEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,arguments.callee);
            if(new CronTimeVo("*","*","1","5","*","2014").checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.INCOMING)
            {
               LocalMsgController.addLocalMsg("ColorfulPrivilegeMsgPanel");
            }
         });
         SocketConnection.addCmdListener(CommandID.IS_ALARM_VIP,onAlarmHandler);
         SocketConnection.send(CommandID.IS_ALARM_VIP);
      }
      
      private static function onAlarmHandler(param1:SocketEvent) : void
      {
         var _loc4_:InformInfo = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(1 == _loc3_)
         {
            (_loc4_ = new InformInfo()).type = CommandID.IS_ALARM_VIP;
            MessageManager.addInformInfo(_loc4_);
         }
      }
   }
}
