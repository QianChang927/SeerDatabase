package com.protobuf.clientproto
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WireType;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_INT32;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_UINT32;
   import com.netease.protobuf.used_by_generated_code;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class game_guess_info extends Message
   {
      
      public static const UID:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.game_guess_info.uid","uid",1 << 3 | WireType.VARINT);
      
      public static const GUESS_NUMBER:FieldDescriptor$TYPE_INT32 = new FieldDescriptor$TYPE_INT32("com.protobuf.clientproto.game_guess_info.guess_number","guessNumber",2 << 3 | WireType.VARINT);
       
      
      public var uid:uint;
      
      public var guessNumber:int;
      
      public function game_guess_info()
      {
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.uid);
         WriteUtils.writeTag(param1,WireType.VARINT,2);
         WriteUtils.write$TYPE_INT32(param1,this.guessNumber);
         for(_loc2_ in this)
         {
            super.writeUnknown(param1,_loc2_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc5_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc5_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc5_ >> 3)
            {
               case 1:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: game_guess_info.uid cannot be set twice.");
                  }
                  _loc3_++;
                  this.uid = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: game_guess_info.guessNumber cannot be set twice.");
                  }
                  _loc4_++;
                  this.guessNumber = ReadUtils.read$TYPE_INT32(param1);
                  break;
               default:
                  super.readUnknown(param1,_loc5_);
                  break;
            }
         }
      }
   }
}
