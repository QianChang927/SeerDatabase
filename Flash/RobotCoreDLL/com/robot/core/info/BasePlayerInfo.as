package com.robot.core.info
{
   import flash.utils.ByteArray;
   
   public class BasePlayerInfo
   {
       
      
      public var id:int;
      
      public var nickName:String;
      
      public var onlineID:int;
      
      public var lastOfflineTime:int;
      
      public var vip:int;
      
      public var vipLv:int;
      
      public var head:int;
      
      public var head_frame:int;
      
      public var itemSend:int;
      
      public var receiveItem:int;
      
      public function BasePlayerInfo(param1:ByteArray)
      {
         super();
         this.id = param1.readUnsignedInt();
         this.nickName = param1.readUTFBytes(16);
         this.onlineID = param1.readUnsignedInt();
         this.lastOfflineTime = param1.readUnsignedInt();
         var _loc2_:int = int(param1.readUnsignedInt());
         this.vip = _loc2_ & 1;
         this.vipLv = param1.readUnsignedInt();
         this.head = int(param1.readUnsignedInt()) || 1;
         this.head_frame = param1.readUnsignedInt();
         this.itemSend = param1.readUnsignedByte();
         this.receiveItem = param1.readUnsignedInt();
      }
   }
}
