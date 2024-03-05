package com.robot.app.mapProcess.control
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.TimerEvent;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   
   public class VipTrialController2
   {
      
      private static var _timer:Timer;
      
      private static var _timer2:Timer;
      
      public static var onLineTime:uint;
       
      
      public function VipTrialController2()
      {
         super();
      }
      
      public static function start() : void
      {
         SocketConnection.addCmdListener(CommandID.VIP_TRIAL_STATE,onVipTrialEnterHandler);
         SocketConnection.send(CommandID.VIP_TRIAL_STATE);
         initOnlineTime();
      }
      
      public static function initOnlineTime() : void
      {
         if(MainManager.actorInfo.timeToday > 4800)
         {
            onLineTime = 4801;
         }
         else
         {
            onLineTime = MainManager.actorInfo.timeToday;
         }
         _timer2 = new Timer(1000,4801 - MainManager.actorInfo.timeToday);
         _timer2.start();
         _timer2.addEventListener(TimerEvent.TIMER,onTimerHandler2);
         _timer2.addEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete2);
      }
      
      private static function onTimerHandler2(param1:TimerEvent) : void
      {
         ++onLineTime;
      }
      
      private static function onTimerComplete2(param1:TimerEvent) : void
      {
         _timer2.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete2);
         _timer2.removeEventListener(TimerEvent.TIMER,onTimerHandler2);
         onLineTime = 4801;
      }
      
      private static function onVipTrialEnterHandler(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.VIP_TRIAL_STATE,onVipTrialEnterHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ == 1)
         {
            if(_loc4_ == 0)
            {
               sendEmail();
            }
            else
            {
               countDwon(_loc4_);
            }
         }
      }
      
      public static function countDwon(param1:uint) : void
      {
         _timer = new Timer(param1 * 1000,1);
         _timer.start();
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
      }
      
      private static function onTimerComplete(param1:TimerEvent) : void
      {
         _timer.removeEventListener(TimerEvent.TIMER_COMPLETE,onTimerComplete);
         sendEmail();
      }
      
      private static function sendEmail() : void
      {
         LocalMsgController.addLocalMsg("VipTrialMailPanel",0,false,null,null,1);
      }
      
      public static function destroy() : void
      {
      }
   }
}
