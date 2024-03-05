package com.robot.app.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.EventManager;
   
   public class SummerLoginGiftController
   {
      
      private static var _lastLogOutTime:uint;
       
      
      public function SummerLoginGiftController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(Boolean(NewSeerTaskController.isNewSeer) || Boolean(MainManager.isDebug))
         {
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,showGiftPanel);
      }
      
      public static function showGiftPanel(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,showGiftPanel);
         if(SystemTimerManager.time == 0)
         {
            EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,function(param1:SysTimeEvent):void
            {
               EventManager.removeEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,arguments.callee);
               start();
            });
         }
         else
         {
            start();
         }
      }
      
      private static function start() : void
      {
         var t:uint = 0;
         _lastLogOutTime = MainManager.actorInfo.oldlast;
         var date:Date = SystemTimerManager.sysDate;
         var todayZeroTime:uint = uint(SystemTimerManager.getTimeByDate(date.fullYear,date.month + 1,date.date,0,0,0));
         if(_lastLogOutTime <= todayZeroTime || _lastLogOutTime == 0)
         {
            t = setTimeout(function():void
            {
               clearTimeout(t);
               ModuleManager.showModule(ClientConfig.getAppModule("summerLoginGift/GiftBoxReceivePanel"),"正在加载...");
            },2000);
         }
      }
   }
}
