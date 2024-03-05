package com.robot.core.info.fightInfo
{
   import flash.utils.IDataInput;
   
   public class UsePetItemInfo
   {
       
      
      private var _userID:uint;
      
      private var _itemID:uint;
      
      private var _uesrHP:uint;
      
      public var changeHp:int;
      
      private var _round:int;
      
      private var _maxHp:int;
      
      private var _changehps:Array;
      
      public function UsePetItemInfo(param1:IDataInput)
      {
         super();
         this._userID = param1.readUnsignedInt();
         this._itemID = param1.readUnsignedInt();
         this._uesrHP = param1.readUnsignedInt();
         this.changeHp = param1.readInt();
         this.round = param1.readUnsignedInt();
      }
      
      public function get userID() : uint
      {
         return this._userID;
      }
      
      public function get itemID() : uint
      {
         return this._itemID;
      }
      
      public function get userHP() : uint
      {
         return this._uesrHP;
      }
      
      public function get round() : int
      {
         return this._round;
      }
      
      public function set round(param1:int) : void
      {
         this._round = param1;
      }
      
      public function get changehps() : Array
      {
         return this._changehps;
      }
      
      public function set changehps(param1:Array) : void
      {
         this._changehps = param1;
      }
      
      public function get maxHp() : int
      {
         return this._maxHp;
      }
      
      public function set maxHp(param1:int) : void
      {
         this._maxHp = param1;
      }
   }
}
