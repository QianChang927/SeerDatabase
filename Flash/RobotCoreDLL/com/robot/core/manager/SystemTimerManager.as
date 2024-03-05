package com.robot.core.manager
{
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import flash.utils.getTimer;
   import org.taomee.events.SocketEvent;
   
   public class SystemTimerManager
   {
      
      private static var _timer:Timer;
      
      private static var _sysTime:uint;
      
      private static var _baseSysTime:uint;
      
      private static var _updateInterval:uint;
      
      private static var _tickFun:Array = [];
      
      public static var hasUpdate:Boolean = false;
       
      
      public function SystemTimerManager()
      {
         super();
      }
      
      public static function setTime(param1:uint) : void
      {
         _sysTime = param1;
         _baseSysTime = param1;
         _updateInterval = getTimer();
         if(_timer == null)
         {
            _timer = new Timer(1000);
            _timer.addEventListener(TimerEvent.TIMER,onTimer);
         }
         _timer.reset();
         _timer.start();
      }
      
      private static function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:Function = null;
         _sysTime = _baseSysTime + (getTimer() - _updateInterval) / 1000;
         for each(_loc2_ in _tickFun)
         {
            _loc2_();
         }
      }
      
      public static function get time() : uint
      {
         return _sysTime;
      }
      
      public static function get sysDate() : Date
      {
         return new Date(_sysTime * 1000);
      }
      
      public static function get sysBJDate() : Date
      {
         return new Date(_sysTime * 1000 + sysDate.timezoneOffset * 60 * 1000 + 8 * 3600 * 1000);
      }
      
      public static function getSysTime(param1:Function = null) : void
      {
         param1(_sysTime);
      }
      
      public static function getTimeByDate(param1:uint, param2:uint, param3:uint, param4:uint, param5:uint = 0, param6:uint = 0) : uint
      {
         var _loc7_:Date;
         return uint((_loc7_ = new Date(param1,param2 - 1,param3,param4,param5,param6)).time / 1000 - (28800 + _loc7_.getTimezoneOffset() * 60));
      }
      
      public static function getTimeClockString(param1:int, param2:Boolean = true) : String
      {
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         var _loc5_:int = 0;
         if(param1 < 0)
         {
            return "00:00:00";
         }
         if(param2)
         {
            _loc3_ = param1 / 3600;
            _loc4_ = (param1 - _loc3_ * 3600) / 60;
            _loc5_ = param1 - _loc3_ * 3600 - _loc4_ * 60;
            return (_loc3_ > 9 ? _loc3_ : "0" + _loc3_) + ":" + (_loc4_ > 9 ? _loc4_ : "0" + _loc4_) + ":" + (_loc5_ > 9 ? _loc5_ : "0" + _loc5_);
         }
         _loc4_ = param1 / 60;
         _loc5_ = param1 % 60;
         return (_loc4_ > 9 ? _loc4_ : "0" + _loc4_) + ":" + (_loc5_ > 9 ? _loc5_ : "0" + _loc5_);
      }
      
      public static function getDateString(param1:Date) : String
      {
         var _loc2_:* = param1.fullYear.toString();
         if(param1.month + 1 < 10)
         {
            _loc2_ += "0";
         }
         _loc2_ += param1.month + 1;
         if(param1.date < 10)
         {
            _loc2_ += "0";
         }
         return _loc2_ + param1.date;
      }
      
      public static function addTickFun(param1:Function) : void
      {
         if(param1 == null)
         {
            return;
         }
         if(_tickFun.indexOf(param1) == -1)
         {
            _tickFun.push(param1);
         }
      }
      
      public static function removeTickFun(param1:Function) : void
      {
         if(param1 == null)
         {
            return;
         }
         if(_tickFun.indexOf(param1) != -1)
         {
            _tickFun.splice(_tickFun.indexOf(param1),1);
         }
      }
      
      public static function get timezone() : int
      {
         return sysDate.timezoneOffset / -60;
      }
      
      public static function isActive(param1:Array) : Boolean
      {
         var _loc2_:CronTimeVo = null;
         for each(_loc2_ in param1)
         {
            if(_loc2_.isActive(sysBJDate))
            {
               return true;
            }
         }
         return false;
      }
      
      public static function checkTimeZone(param1:Array) : int
      {
         var _loc2_:CronTimeVo = null;
         var _loc3_:CronTimeVo = null;
         var _loc4_:int = 0;
         for each(_loc2_ in param1)
         {
            _loc4_ = _loc2_.checkTimeHit(sysBJDate);
            if(CronTimeVo.HIT == _loc4_)
            {
               return _loc4_;
            }
         }
         _loc3_ = param1.pop();
         return _loc3_.checkTimeHit(sysBJDate);
      }
      
      public static function getLeftDay(param1:Date) : int
      {
         var _loc2_:int = 3600 * 24;
         var _loc3_:Number = param1.time / 1000;
         var _loc4_:int;
         return (_loc4_ = int(_loc3_ / _loc2_) - int(SystemTimerManager.time / _loc2_) + 2) < 0 ? 0 : _loc4_;
      }
      
      public static function datestrToTime(param1:String) : uint
      {
         var _loc2_:Date = new Date();
         return uint(Date.parse(convertDateStr(param1)));
      }
      
      public static function convertDateStr(param1:String) : String
      {
         var _loc2_:Array = param1.split(" ");
         var _loc3_:String = "{0} {1} {2}";
         return format(_loc3_,(_loc2_[0] as String).split("-").join("/"),_loc2_[1],"GMT");
      }
      
      private static function format(param1:String, ... rest) : String
      {
         var _loc3_:int = 0;
         while(_loc3_ < rest.length)
         {
            param1 = param1.replace(new RegExp("\\{" + _loc3_ + "\\}","gm"),rest[_loc3_]);
            _loc3_++;
         }
         return param1;
      }
      
      public static function waitGetTime(param1:Function) : void
      {
         var fun:Function = param1;
         if(hasUpdate)
         {
            if(fun != null)
            {
               fun();
            }
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,function(param1:SocketEvent):void
            {
               SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,arguments.callee);
               if(fun != null)
               {
                  fun();
               }
            });
         }
      }
      
      public static function splitVersion() : int
      {
         var _loc1_:Date = SystemTimerManager.sysBJDate;
         var _loc2_:Date = new Date(2099,9,9,0,0,0);
         if(_loc1_.time < _loc2_.time)
         {
            return 0;
         }
         return 1;
      }
      
      public static function splitVersion2022(param1:Boolean = false) : int
      {
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         var _loc3_:Date = new Date(2024,1,16,0,0,0);
         if(_loc2_.time < _loc3_.time && param1)
         {
            return 1;
         }
         return 0;
      }
      
      public static function splitVersionStr(param1:Boolean = false) : String
      {
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         var _loc3_:Date = new Date(2024,1,16,0,0,0);
         if(_loc2_.time < _loc3_.time && param1)
         {
            return "_temp";
         }
         return "";
      }
      
      public static function splitVersionBySven() : int
      {
         return 1;
      }
      
      public static function get0DateByStr(param1:String) : Date
      {
         var _loc2_:int = int(param1.substr(0,4));
         var _loc3_:int = param1.substr(4,1) == "0" ? int(param1.substr(5,1)) : int(param1.substr(4,2));
         var _loc4_:int = param1.substr(6,1) == "0" ? int(param1.substr(7,1)) : int(param1.substr(6,2));
         var _loc5_:Date = new Date(_loc2_,_loc3_ - 1,_loc4_,0,0,0);
         return new Date(_loc5_.time + sysDate.timezoneOffset * 60 * 1000 + 8 * 3600 * 1000);
      }
      
      public static function get24DateByStr(param1:String) : Date
      {
         var _loc2_:int = int(param1.substr(0,4));
         var _loc3_:int = param1.substr(4,1) == "0" ? int(param1.substr(5,1)) : int(param1.substr(4,2));
         var _loc4_:int = param1.substr(6,1) == "0" ? int(param1.substr(7,1)) : int(param1.substr(6,2));
         var _loc5_:Date = new Date(_loc2_,_loc3_ - 1,_loc4_,23,59,59);
         return new Date(_loc5_.time + sysDate.timezoneOffset * 60 * 1000 + 8 * 3600 * 1000);
      }
      
      public static function mingganshiqi() : Boolean
      {
         var _loc1_:Boolean = false;
         if(_loc1_)
         {
            Alarm.show("功能维护中");
         }
         return _loc1_;
      }
      
      public static function mingganshiqiChat() : Boolean
      {
         var _loc1_:Boolean = false;
         if(_loc1_)
         {
            Alarm.show("功能维护中");
         }
         return _loc1_;
      }
   }
}
