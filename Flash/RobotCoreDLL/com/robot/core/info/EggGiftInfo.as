package com.robot.core.info
{
   import flash.utils.IDataInput;
   
   public class EggGiftInfo
   {
       
      
      public var giftIN:uint;
      
      public var petID:uint;
      
      public var hadTime:uint;
      
      public var itemKind:uint;
      
      public var itemList:Array;
      
      public function EggGiftInfo(param1:IDataInput = null)
      {
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:Object = null;
         super();
         this.giftIN = param1.readUnsignedInt();
         this.petID = param1.readUnsignedInt();
         this.hadTime = param1.readUnsignedInt();
         this.itemKind = param1.readUnsignedInt();
         this.itemList = [];
         var _loc2_:int = 0;
         while(_loc2_ < this.itemKind)
         {
            _loc3_ = uint(param1.readUnsignedInt());
            _loc4_ = uint(param1.readUnsignedInt());
            (_loc5_ = new Object())["id"] = _loc3_;
            _loc5_["cnt"] = _loc4_;
            this.itemList.push(_loc5_);
            _loc2_++;
         }
      }
   }
}
