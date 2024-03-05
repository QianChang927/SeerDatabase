package com.robot.app.task.detectShip
{
   import flash.utils.ByteArray;
   
   public class ShipBackItemInfo
   {
       
      
      public var itemList:Array;
      
      public function ShipBackItemInfo(param1:ByteArray)
      {
         var _loc4_:Object = null;
         super();
         this.itemList = [];
         var _loc2_:uint = param1.readUnsignedInt();
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            (_loc4_ = new Object())["itemID"] = param1.readUnsignedInt();
            _loc4_["itemCnt"] = param1.readUnsignedInt();
            this.itemList.push(_loc4_);
            _loc3_++;
         }
      }
   }
}
