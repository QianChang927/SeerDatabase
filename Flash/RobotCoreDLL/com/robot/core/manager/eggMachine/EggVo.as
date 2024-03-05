package com.robot.core.manager.eggMachine
{
   import flash.utils.ByteArray;
   
   public class EggVo
   {
       
      
      private var _location:int;
      
      private var _id:int;
      
      private var _cnt:int;
      
      private var _time_left:int;
      
      private var _item_lv:int;
      
      private var _update_tm:int;
      
      public function EggVo(param1:ByteArray, param2:int)
      {
         super();
         this._location = param2;
         this._id = param1.readUnsignedInt();
         this._cnt = param1.readUnsignedInt();
         this._time_left = param1.readUnsignedInt();
         this._item_lv = param1.readUnsignedInt();
         this._update_tm = param1.readUnsignedInt();
      }
      
      public function set location(param1:int) : void
      {
         this._location = param1;
      }
      
      public function get location() : int
      {
         return this._location;
      }
      
      public function set id(param1:int) : void
      {
         this._id = param1;
      }
      
      public function get id() : int
      {
         return this._id;
      }
      
      public function set cnt(param1:int) : void
      {
         this._cnt = param1;
      }
      
      public function get cnt() : int
      {
         return this._cnt;
      }
      
      public function set time_left(param1:int) : void
      {
         this._time_left = param1;
      }
      
      public function get time_left() : int
      {
         return this._time_left;
      }
      
      public function set time_lv(param1:int) : void
      {
         this._item_lv = param1;
      }
      
      public function get time_lv() : int
      {
         return this._item_lv;
      }
      
      public function set update_tm(param1:int) : void
      {
         this._update_tm = param1;
      }
      
      public function get update_tm() : int
      {
         return this._update_tm;
      }
   }
}
