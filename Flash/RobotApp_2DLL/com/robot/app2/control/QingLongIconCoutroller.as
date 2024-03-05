package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.SystemTimerManager;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   
   public class QingLongIconCoutroller
   {
      
      private static const QLC_IN_CDTIME:int = 0;
      
      private static const QLC_GET_REWORD:int = 1;
      
      private static const QLC_INIT_POWOR:int = 2;
      
      private static const QLC_TOMORROW:int = 3;
      
      private static const QLC_OVER:int = 4;
      
      private static var _icon:MovieClip;
      
      private static var _state:int = 0;
      
      private static var _timer:Timer = new Timer(1000);
      
      private static var _times:Number;
       
      
      public function QingLongIconCoutroller()
      {
         super();
      }
      
      public static function setup(param1:MovieClip = null) : void
      {
         _icon = param1;
         _timer.addEventListener(TimerEvent.TIMER,TimeHandle);
         RequestUpdata();
      }
      
      public static function RequestUpdata(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getBitSet([8022],function(param1:Array):void
         {
            if(param1[0] == 1)
            {
               LockAll();
            }
         });
         KTool.getMultiValue([1540,1541,11527],updata);
      }
      
      private static function LockAll() : void
      {
         _state = QLC_OVER;
         updataIcon();
      }
      
      private static function updata(param1:Array) : void
      {
         if(_state == QLC_OVER)
         {
            return;
         }
         if(param1[0] == 10)
         {
            _state = QLC_GET_REWORD;
            return;
         }
         var _loc2_:int = !!MainManager.actorInfo.isVip ? 4 : 3;
         if(param1[2] < _loc2_)
         {
            _times = 900 - (SystemTimerManager.sysDate.time / 1000 - param1[1]);
            if(_times > 0)
            {
               _state = QLC_IN_CDTIME;
               StartTime();
            }
            else
            {
               _state = QLC_INIT_POWOR;
            }
         }
         else
         {
            _state = QLC_TOMORROW;
         }
         updataIcon();
      }
      
      private static function StartTime() : void
      {
         _timer.start();
      }
      
      private static function TimeHandle(param1:TimerEvent) : void
      {
         --_times;
         if(_times <= 0)
         {
            _timer.stop();
            _state = QLC_INIT_POWOR;
            updataIcon();
         }
      }
      
      private static function updataIcon() : void
      {
         if(_state == QLC_INIT_POWOR)
         {
            _icon.flag_1.visible = true;
         }
         else
         {
            _icon.flag_1.visible = false;
         }
      }
   }
}
