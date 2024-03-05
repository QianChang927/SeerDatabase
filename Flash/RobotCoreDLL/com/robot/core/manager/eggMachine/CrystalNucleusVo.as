package com.robot.core.manager.eggMachine
{
   import flash.utils.ByteArray;
   
   public class CrystalNucleusVo
   {
       
      
      private var _location:int;
      
      private var _gen_item:int;
      
      private var _gentm:int;
      
      private var _left_time:int;
      
      public function CrystalNucleusVo(param1:ByteArray, param2:int)
      {
         super();
         this._location = param2;
         this._gen_item = param1.readUnsignedInt();
         this._gentm = param1.readUnsignedInt();
         this._left_time = param1.readUnsignedInt();
      }
      
      public function set location(param1:int) : void
      {
         this._location = param1;
      }
      
      public function get location() : int
      {
         return this._location;
      }
      
      public function set gentm(param1:int) : void
      {
         this._gentm = param1;
      }
      
      public function get gentm() : int
      {
         return this._gentm;
      }
      
      public function set gen_item(param1:int) : void
      {
         this._gen_item = param1;
      }
      
      public function get gen_item() : int
      {
         return this._gen_item;
      }
      
      public function set left_time(param1:int) : void
      {
         this._left_time = param1;
      }
      
      public function get left_time() : int
      {
         return this._left_time;
      }
   }
}
