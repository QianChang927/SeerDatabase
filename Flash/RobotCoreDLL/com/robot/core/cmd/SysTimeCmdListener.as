package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.info.SystemTimeInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import org.taomee.bean.BaseBean;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class SysTimeCmdListener extends BaseBean
   {
       
      
      public function SysTimeCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,this.onSystemTime);
         SocketConnection.send(CommandID.SYSTEM_TIME);
         finish();
      }
      
      private function onSystemTime(param1:SocketEvent) : void
      {
         var _loc2_:SystemTimeInfo = param1.data as SystemTimeInfo;
         DebugTrace.show("客户端时间：" + SystemTimerManager.sysBJDate.toString());
         var _loc3_:uint = SystemTimerManager.sysBJDate.time / 1000;
         SystemTimerManager.setTime(_loc2_.time);
         DebugTrace.show("服务器时间：" + SystemTimerManager.sysBJDate.toString());
         if(SystemTimerManager.hasUpdate)
         {
            SocketConnection.send(CommandID.SYSTEM_TIME_CHECK,_loc3_);
         }
         SystemTimerManager.hasUpdate = true;
         EventManager.dispatchEvent(new SysTimeEvent(SysTimeEvent.RECEIVE_SYSTEM_TIME,_loc2_));
      }
   }
}
