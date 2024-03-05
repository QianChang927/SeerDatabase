package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.events.SocketEvent;
   
   public class SendGodPetEveryDayController
   {
      
      private static var _icon:MovieClip;
      
      public static var num:uint;
      
      private static var _surplusTime:int;
      
      private static var _panelTime:Timer;
       
      
      public function SendGodPetEveryDayController()
      {
         super();
      }
      
      public static function showIcon(param1:MovieClip) : void
      {
         var icon:MovieClip = param1;
         _icon = icon;
         _panelTime = new Timer(1000);
         _panelTime.addEventListener(TimerEvent.TIMER,onPanelTime);
         SocketConnection.addCmdListener(CommandID.GOD_PET_LOTTERY,function(param1:SocketEvent):void
         {
            updataTime();
         });
         updataTime();
      }
      
      public static function updataTime() : void
      {
         var nowTime:Number = NaN;
         nowTime = Number(SystemTimerManager.time);
         KTool.getMultiValue([2191],function(param1:Array):void
         {
            var _loc2_:int = int(nowTime - param1[0]);
            if(_loc2_ < 0)
            {
               _loc2_ = 0;
            }
            _surplusTime = 10 * 60 - _loc2_;
            if(_surplusTime <= 0)
            {
               _icon["txt"].text = SystemTimerManager.getTimeClockString(0,false);
               _panelTime.stop();
            }
            else
            {
               _icon["txt"].text = SystemTimerManager.getTimeClockString(_surplusTime,false);
               _panelTime.start();
            }
         });
      }
      
      public static function onPanelTime(param1:TimerEvent) : void
      {
         --_surplusTime;
         if(_surplusTime <= 1)
         {
            _icon["txt"].text = SystemTimerManager.getTimeClockString(0,false);
         }
         else
         {
            _icon["txt"].text = SystemTimerManager.getTimeClockString(_surplusTime,false);
         }
         if(_surplusTime == 500 || _surplusTime == 300 || _surplusTime == 100)
         {
            updataTime();
         }
      }
   }
}
