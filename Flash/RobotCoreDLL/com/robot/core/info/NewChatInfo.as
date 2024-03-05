package com.robot.core.info
{
   import flash.utils.ByteArray;
   
   public class NewChatInfo
   {
       
      
      public var senderID:int;
      
      public var senderNicName:String;
      
      public var toID:int;
      
      public var msg:String;
      
      public var isRead:Boolean = false;
      
      public var type:int;
      
      public var head_id:int;
      
      public var head_frame:int;
      
      public var vip_lv:int;
      
      public var toNickName:String;
      
      public function NewChatInfo(param1:ByteArray)
      {
         super();
         if(param1 == null)
         {
            return;
         }
         var _loc2_:ByteArray = param1 as ByteArray;
         this.type = _loc2_.readUnsignedInt();
         this.senderID = _loc2_.readUnsignedInt();
         this.toID = _loc2_.readUnsignedInt();
         this.toNickName = _loc2_.readUTFBytes(16);
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         this.msg = _loc2_.readUTFBytes(_loc3_);
         this.senderNicName = _loc2_.readUTFBytes(16);
         this.head_id = int(_loc2_.readUnsignedInt()) || 1;
         this.head_frame = _loc2_.readUnsignedInt();
         this.vip_lv = _loc2_.readUnsignedInt();
      }
   }
}
