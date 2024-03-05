package com.robot.core.manager.eggMachine
{
   import flash.utils.ByteArray;
   
   public class EnlivenerVo
   {
       
      
      private var _location:int;
      
      private var _obtain_tm:int;
      
      private var _yuanshen_id:int;
      
      private var _left_tm:int;
      
      public function EnlivenerVo(param1:ByteArray, param2:int)
      {
         super();
         this._location = param2;
         this._obtain_tm = param1.readUnsignedInt();
         this._yuanshen_id = param1.readUnsignedInt();
         this._left_tm = param1.readUnsignedInt();
      }
      
      public function set location(param1:int) : void
      {
         this._location = param1;
      }
      
      public function get location() : int
      {
         return this._location;
      }
      
      public function set obtain_tm(param1:int) : void
      {
         this._obtain_tm = param1;
      }
      
      public function get obtain_tm() : int
      {
         return this._obtain_tm;
      }
      
      public function set yuanshen_id(param1:int) : void
      {
         this._yuanshen_id = param1;
      }
      
      public function get yuanshen_id() : int
      {
         return this._yuanshen_id;
      }
      
      public function set left_tm(param1:int) : void
      {
         this._left_tm = param1;
      }
      
      public function get left_tm() : int
      {
         return this._left_tm;
      }
   }
}
