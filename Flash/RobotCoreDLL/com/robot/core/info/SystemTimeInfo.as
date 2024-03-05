package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class SystemTimeInfo
   {
       
      
      private var _date:Date;
      
      private var _time:uint;
      
      public function SystemTimeInfo(param1:IDataInput)
      {
         super();
         this._time = param1.readUnsignedInt();
         this._date = new Date();
         this._date.setTime(this._time * 1000);
         this._date.setHours(this.date.hoursUTC + 8);
      }
      
      public function get time() : uint
      {
         return this._time;
      }
      
      public function get date() : Date
      {
         return this._date;
      }
   }
}
