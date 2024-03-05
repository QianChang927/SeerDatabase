package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class AchieveInfo
   {
       
      
      private var _id:uint = 0;
      
      private var _achievepoint:uint = 0;
      
      private var _value:uint = 0;
      
      private var _completevalue:uint = 0;
      
      private var _count:uint = 0;
      
      private var _titleArr:Array;
      
      private var _status:uint;
      
      public function AchieveInfo(param1:IDataInput)
      {
         this._titleArr = [];
         super();
         this._id = param1.readUnsignedInt();
         this._achievepoint = param1.readUnsignedInt();
         this._value = param1.readUnsignedInt();
         this._completevalue = param1.readUnsignedInt();
         this._count = param1.readUnsignedInt();
         var _loc2_:uint = 0;
         while(_loc2_ < this._count)
         {
            this._titleArr.push(param1.readUnsignedInt());
            _loc2_++;
         }
         this._status = param1.readUnsignedInt();
      }
      
      public function get completeValue() : uint
      {
         return this._completevalue;
      }
      
      public function get id() : uint
      {
         return this._id;
      }
      
      public function get achievepoint() : uint
      {
         return this._achievepoint;
      }
      
      public function get value() : uint
      {
         return this._value;
      }
      
      public function set value(param1:uint) : void
      {
         this._value = param1;
      }
      
      public function get titleArr() : Array
      {
         return this._titleArr;
      }
      
      public function get status() : uint
      {
         return this._status;
      }
   }
}
