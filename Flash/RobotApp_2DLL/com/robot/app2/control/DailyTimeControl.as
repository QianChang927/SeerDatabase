package com.robot.app2.control
{
   import com.robot.core.manager.SystemTimerManager;
   
   public class DailyTimeControl
   {
      
      public static const INCOMING:String = "incoming";
      
      public static const ACTIVE:String = "active";
      
      public static const DORMANT:String = "dormant";
      
      public static const PAST:String = "past";
       
      
      private var _days:Array;
      
      private var _times:Array;
      
      private var _begin:TimePoint;
      
      private var _end:TimePoint;
      
      public function DailyTimeControl(param1:String)
      {
         var _loc7_:String = null;
         var _loc8_:DayInterval = null;
         var _loc9_:TimeInterval = null;
         this._days = new Array();
         this._times = new Array();
         this._begin = new TimePoint();
         this._end = new TimePoint();
         super();
         var _loc2_:Array = param1.split(" ");
         var _loc3_:DayInfo = new DayInfo("9999/12/31");
         var _loc4_:DayInfo = new DayInfo("1970/1/1");
         var _loc5_:TimeInfo = new TimeInfo("23:59:59");
         var _loc6_:TimeInfo = new TimeInfo("0:0:0");
         for each(_loc7_ in _loc2_)
         {
            if(_loc7_.indexOf("/") != -1)
            {
               if((_loc8_ = new DayInterval(_loc7_)).start.isBefore(_loc3_))
               {
                  _loc3_ = _loc8_.start;
               }
               if(_loc8_.end.isAfter(_loc4_))
               {
                  _loc4_ = _loc8_.end;
               }
               this._days.push(_loc8_);
            }
            else if(_loc7_.indexOf(":") != -1)
            {
               (_loc9_ = new TimeInterval(_loc7_)).start;
               if(_loc9_.start.isBefore(_loc5_))
               {
                  _loc5_ = _loc9_.start;
               }
               if(_loc9_.end.isAfter(_loc6_))
               {
                  _loc6_ = _loc9_.end;
               }
               this._times.push(_loc9_);
            }
         }
         this._begin.day = _loc3_;
         this._begin.time = _loc5_;
         this._end.day = _loc4_;
         this._end.time = _loc6_;
      }
      
      public function check(param1:*) : String
      {
         var _loc3_:DayInterval = null;
         var _loc4_:TimeInterval = null;
         if(this._begin.isAfter(param1))
         {
            return INCOMING;
         }
         if(this._end.isBefore(param1))
         {
            return PAST;
         }
         var _loc2_:TimePoint = TimePoint.getTimepoint(param1);
         for each(_loc3_ in this._days)
         {
            if(_loc3_.isDayBetween(_loc2_.day))
            {
               for each(_loc4_ in this._times)
               {
                  if(_loc4_.isTimeBetween(_loc2_.time))
                  {
                     return ACTIVE;
                  }
               }
            }
         }
         return DORMANT;
      }
      
      public function isETAActive(param1:*, param2:int) : Boolean
      {
         var _loc4_:DayInterval = null;
         var _loc5_:TimeInterval = null;
         var _loc6_:TimePoint = null;
         if(this._begin.isBefore(param1) || this._end.isAfter(param1))
         {
            return false;
         }
         var _loc3_:int = int(TimePoint.getTimepoint(param1).timestamp);
         for each(_loc4_ in this._days)
         {
            for each(_loc5_ in this._times)
            {
               (_loc6_ = new TimePoint()).day = _loc4_.start;
               _loc6_.time = _loc5_.start;
               if(_loc3_ >= _loc6_.timestamp + param2 && _loc3_ <= _loc6_.timestamp)
               {
                  return true;
               }
            }
         }
         return false;
      }
      
      public function get isEndDay() : Boolean
      {
         return new DayInfo(SystemTimerManager.sysBJDate).isEqual(this._end.day);
      }
   }
}

import com.robot.core.manager.SystemTimerManager;

class TimePoint
{
    
   
   private var _day:DayInfo;
   
   private var _time:TimeInfo;
   
   public function TimePoint(param1:* = null)
   {
      var _loc2_:Array = null;
      super();
      if(param1)
      {
         if(param1 is String)
         {
            _loc2_ = param1.split(" ");
            this._day = new DayInfo(_loc2_[0]);
            this._time = new TimeInfo(_loc2_[1]);
         }
         else if(param1 is Date)
         {
            this._day = new DayInfo(param1);
            this._time = new TimeInfo(param1);
         }
      }
   }
   
   public static function getTimepoint(param1:*) : TimePoint
   {
      if(param1 is String || param1 is Date)
      {
         return new TimePoint(param1);
      }
      return param1;
   }
   
   public function isBefore(param1:*) : Boolean
   {
      var _loc2_:TimePoint = getTimepoint(param1);
      return Boolean(this._day.isBefore(_loc2_.day)) || Boolean(this._day.isEqual(_loc2_.day)) && Boolean(this._time.isBefore(_loc2_.time));
   }
   
   public function isAfter(param1:*) : Boolean
   {
      var _loc2_:TimePoint = getTimepoint(param1);
      return Boolean(this._day.isAfter(_loc2_.day)) || Boolean(this._day.isEqual(_loc2_.day)) && Boolean(this._time.isAfter(_loc2_.time));
   }
   
   public function isEqual(param1:*) : Boolean
   {
      var _loc2_:TimePoint = getTimepoint(param1);
      return Boolean(this._day.isEqual(_loc2_.day)) && Boolean(this._day.isEqual(_loc2_.day));
   }
   
   public function get timestamp() : int
   {
      return SystemTimerManager.getTimeByDate(this._day.year,this._day.month,this._day.day,this._time.hour,this._time.minite,this._time.second);
   }
   
   public function set day(param1:DayInfo) : void
   {
      this._day = param1;
   }
   
   public function get day() : DayInfo
   {
      return this._day;
   }
   
   public function set time(param1:TimeInfo) : void
   {
      this._time = param1;
   }
   
   public function get time() : TimeInfo
   {
      return this._time;
   }
}

class DayInterval
{
    
   
   private var _start:DayInfo;
   
   private var _end:DayInfo;
   
   public function DayInterval(param1:String = null)
   {
      var _loc2_:Array = null;
      super();
      if(param1)
      {
         _loc2_ = param1.split("-");
         this._start = new DayInfo(_loc2_[0]);
         this._end = new DayInfo(_loc2_[1]);
      }
   }
   
   public function isDayBetween(param1:*) : Boolean
   {
      var _loc2_:DayInfo = this.getDayInfo(param1);
      return (_loc2_.isAfter(this._start) || _loc2_.isEqual(this._start)) && (_loc2_.isBefore(this._end) || _loc2_.isEqual(this._end));
   }
   
   public function isDayBefore(param1:Date) : Boolean
   {
      return this.getDayInfo(param1).isBefore(this._start);
   }
   
   public function isDayAfter(param1:Date) : Boolean
   {
      return this.getDayInfo(param1).isAfter(this._end);
   }
   
   private function getDayInfo(param1:*) : DayInfo
   {
      if(param1 is String || param1 is Date)
      {
         return new DayInfo(param1);
      }
      return param1;
   }
   
   public function get start() : DayInfo
   {
      return this._start;
   }
   
   public function set start(param1:DayInfo) : void
   {
      this._start = param1;
   }
   
   public function get end() : DayInfo
   {
      return this._end;
   }
   
   public function set end(param1:DayInfo) : void
   {
      this._end = param1;
   }
}

class TimeInterval
{
    
   
   private var _start:TimeInfo;
   
   private var _end:TimeInfo;
   
   public function TimeInterval(param1:String = null)
   {
      var _loc2_:Array = null;
      super();
      if(param1)
      {
         _loc2_ = param1.split("-");
         this._start = new TimeInfo(_loc2_[0]);
         this._end = new TimeInfo(_loc2_[1]);
      }
   }
   
   public function isTimeBetween(param1:*) : Boolean
   {
      var _loc2_:TimeInfo = this.getTimeInfo(param1);
      return (_loc2_.isAfter(this._start) || _loc2_.isEqual(this._start)) && (_loc2_.isBefore(this._end) || _loc2_.isEqual(this._end));
   }
   
   public function isTimeBefore(param1:*) : Boolean
   {
      return this.getTimeInfo(param1).isBefore(this._start);
   }
   
   public function isTimeAfter(param1:*) : Boolean
   {
      return this.getTimeInfo(param1).isAfter(this._end);
   }
   
   private function getTimeInfo(param1:*) : TimeInfo
   {
      if(param1 is String || param1 is Date)
      {
         return new TimeInfo(param1);
      }
      return param1;
   }
   
   public function get start() : TimeInfo
   {
      return this._start;
   }
   
   public function set start(param1:TimeInfo) : void
   {
      this._start = param1;
   }
   
   public function get end() : TimeInfo
   {
      return this._end;
   }
   
   public function set end(param1:TimeInfo) : void
   {
      this._end = param1;
   }
}

class DayInfo
{
    
   
   private var _year:int;
   
   private var _month:int;
   
   private var _day:int;
   
   public function DayInfo(param1:* = null)
   {
      var _loc2_:Array = null;
      super();
      if(param1)
      {
         if(param1 is String)
         {
            _loc2_ = param1.split("/");
            this._year = int(_loc2_[0]);
            this._month = int(_loc2_[1]);
            this._day = int(_loc2_[2]);
         }
         else if(param1 is Date)
         {
            this._year = param1.fullYear;
            this._month = param1.month + 1;
            this._day = param1.date;
         }
      }
   }
   
   public function isBefore(param1:DayInfo) : Boolean
   {
      if(this._year < param1.year || this._year == param1.year && this._month < param1.month || this._year == param1.year && this._month == param1.month && this._day < param1.day)
      {
         return true;
      }
      return false;
   }
   
   public function isAfter(param1:DayInfo) : Boolean
   {
      if(this._year > param1.year || this._year == param1.year && this._month > param1.month || this._year == param1.year && this._month == param1.month && this._day > param1.day)
      {
         return true;
      }
      return false;
   }
   
   public function isEqual(param1:DayInfo) : Boolean
   {
      if(this._year == param1.year && this._month == param1.month && this._day == param1.day)
      {
         return true;
      }
      return false;
   }
   
   public function get year() : int
   {
      return this._year;
   }
   
   public function set year(param1:int) : void
   {
      this._year = param1;
   }
   
   public function get month() : int
   {
      return this._month;
   }
   
   public function set month(param1:int) : void
   {
      this._month = param1;
   }
   
   public function get day() : int
   {
      return this._day;
   }
   
   public function set day(param1:int) : void
   {
      this._day = param1;
   }
}

class TimeInfo
{
    
   
   private var _hour:int;
   
   private var _minite:int;
   
   private var _second:int;
   
   public function TimeInfo(param1:* = null, param2:int = 0)
   {
      var _loc3_:Array = null;
      super();
      if(param1)
      {
         if(param1 is String)
         {
            _loc3_ = param1.split(":");
            this._hour = int(_loc3_[0]);
            this._minite = int(_loc3_[1]);
            if(_loc3_.length < 3)
            {
               this._second = param2;
            }
            else
            {
               this._second = int(_loc3_[2]);
            }
         }
         else if(param1 is Date)
         {
            this._hour = param1.hours;
            this._minite = param1.minutes;
            this._second = param1.seconds;
         }
      }
   }
   
   public function isBefore(param1:TimeInfo) : Boolean
   {
      if(this._hour < param1.hour || this._hour == param1.hour && this._minite < param1.minite || this._hour == param1.hour && this._minite == param1.minite && this._second < param1.second)
      {
         return true;
      }
      return false;
   }
   
   public function isAfter(param1:TimeInfo) : Boolean
   {
      if(this._hour > param1.hour || this._hour == param1.hour && this._minite > param1.minite || this._hour == param1.hour && this._minite == param1.minite && this._second > param1.second)
      {
         return true;
      }
      return false;
   }
   
   public function isEqual(param1:TimeInfo) : Boolean
   {
      if(this._hour == param1.hour && this._minite == param1.minite && this._second == param1.second)
      {
         return true;
      }
      return false;
   }
   
   public function get hour() : int
   {
      return this._hour;
   }
   
   public function set hour(param1:int) : void
   {
      this._hour = param1;
   }
   
   public function get minite() : int
   {
      return this._minite;
   }
   
   public function set minite(param1:int) : void
   {
      this._minite = param1;
   }
   
   public function get second() : int
   {
      return this._second;
   }
   
   public function set second(param1:int) : void
   {
      this._second = param1;
   }
}
