package com.robot.app.info.item
{
   import flash.utils.IDataInput;
   
   public class GetItemInfo
   {
       
      
      private var _bounsID:uint;
      
      private var _monID:uint;
      
      private var _catchTime:uint;
      
      private var _itemCount:uint;
      
      private var _itemID:uint;
      
      private var _itemNum:uint;
      
      private var _itemArr:Array;
      
      public function GetItemInfo(param1:IDataInput)
      {
         var _loc3_:Object = null;
         this._itemArr = [];
         super();
         this._bounsID = param1.readUnsignedInt();
         this._monID = param1.readUnsignedInt();
         this._catchTime = param1.readUnsignedInt();
         this._itemCount = param1.readUnsignedInt();
         var _loc2_:uint = 0;
         while(_loc2_ < this._itemCount)
         {
            this._itemID = param1.readUnsignedInt();
            this._itemNum = param1.readUnsignedInt();
            _loc3_ = new Object();
            _loc3_.id = this._itemID;
            _loc3_.num = this._itemNum;
            this._itemArr.push(_loc3_);
            _loc2_++;
         }
      }
      
      public function get itemNum() : uint
      {
         return this._itemCount;
      }
      
      public function get itemArr() : Array
      {
         return this._itemArr;
      }
      
      public function get boundsID() : uint
      {
         return this._bounsID;
      }
      
      public function get itemID() : uint
      {
         return this._itemID;
      }
      
      public function get monID() : uint
      {
         return this._monID;
      }
      
      public function get catchTime() : uint
      {
         return this._catchTime;
      }
   }
}
