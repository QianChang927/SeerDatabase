package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class BonusInfo
   {
       
      
      private var _bonusID:int;
      
      private var _itemList:Array;
      
      private var _itemID:int;
      
      private var _itemCnt:int;
      
      private var _petCapTime:int;
      
      private var _petID:int;
      
      private var _markList:Array;
      
      private var _markID:int;
      
      private var _markCnt:int;
      
      private var _skinList:Array;
      
      public function BonusInfo(param1:IDataInput)
      {
         var _loc7_:RewardPetSkinInfo = null;
         super();
         this._itemList = new Array();
         this._bonusID = param1.readUnsignedInt();
         var _loc2_:int = int(param1.readUnsignedInt());
         var _loc3_:int = 0;
         while(_loc3_ < _loc2_)
         {
            this._itemID = param1.readUnsignedInt();
            this._itemCnt = param1.readUnsignedInt();
            this._itemList.push({
               "id":this._itemID,
               "count":this._itemCnt
            });
            _loc3_++;
         }
         this._petCapTime = param1.readUnsignedInt();
         this._petID = param1.readUnsignedInt();
         this._markList = new Array();
         var _loc4_:int = int(param1.readUnsignedInt());
         _loc3_ = 0;
         while(_loc3_ < _loc4_)
         {
            this._markID = param1.readUnsignedInt();
            this._markCnt = param1.readUnsignedInt();
            this._markList.push({
               "id":this._markID,
               "count":this._markCnt
            });
            _loc3_++;
         }
         this._skinList = [];
         var _loc5_:int = int(param1.readUnsignedInt());
         var _loc6_:int = 0;
         while(_loc6_ < _loc5_)
         {
            (_loc7_ = new RewardPetSkinInfo()).skinId = param1.readUnsignedInt();
            _loc7_.subKindId = param1.readUnsignedInt();
            _loc7_.dueTime = param1.readUnsignedInt();
            this._skinList.push(_loc7_);
            _loc6_++;
         }
      }
      
      public function get id() : uint
      {
         return this._bonusID;
      }
      
      public function get itemList() : Array
      {
         return this._itemList;
      }
      
      public function get captime() : uint
      {
         return this._petCapTime;
      }
      
      public function get petID() : uint
      {
         return this._petID;
      }
      
      public function get markList() : Array
      {
         return this._markList;
      }
      
      public function get skinList() : Array
      {
         return this._skinList;
      }
   }
}
