package com.netease.protobuf.fieldDescriptors
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.used_by_generated_code;
   import flash.utils.IDataInput;
   
   public final dynamic class empty_packge extends Message
   {
       
      
      public function empty_packge()
      {
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         for(_loc2_ in this)
         {
            super.writeUnknown(param1,_loc2_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc3_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc3_ = ReadUtils.read$TYPE_UINT32(param1);
            var _loc4_:* = _loc3_ >> 3;
            switch(0)
            {
            }
            super.readUnknown(param1,_loc3_);
         }
      }
   }
}
