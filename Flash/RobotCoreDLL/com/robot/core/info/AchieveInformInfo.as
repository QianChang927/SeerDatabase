package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class AchieveInformInfo
   {
       
      
      private var _id:uint = 0;
      
      private var _achievepoint:uint = 0;
      
      private var _value:uint = 0;
      
      private var _oldvalue:uint = 0;
      
      private var _completevalue:uint = 0;
      
      public function AchieveInformInfo(param1:IDataInput)
      {
         super();
         this._id = param1.readUnsignedInt();
         this._achievepoint = param1.readUnsignedInt();
         this._value = param1.readUnsignedInt();
         this._oldvalue = param1.readUnsignedInt();
         this._completevalue = param1.readUnsignedInt();
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
      
      public function get oldValue() : uint
      {
         return this._oldvalue;
      }
   }
}
