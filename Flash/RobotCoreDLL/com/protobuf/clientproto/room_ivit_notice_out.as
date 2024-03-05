package com.protobuf.clientproto
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WireType;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_UINT32;
   import com.netease.protobuf.used_by_generated_code;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class room_ivit_notice_out extends Message
   {
      
      public static const ROOMID:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.room_ivit_notice_out.roomid","roomid",1 << 3 | WireType.VARINT);
      
      public static const ROOMMODE:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.room_ivit_notice_out.roommode","roommode",2 << 3 | WireType.VARINT);
      
      public static const USERID:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.room_ivit_notice_out.userid","userid",3 << 3 | WireType.VARINT);
       
      
      public var roomid:uint;
      
      public var roommode:uint;
      
      public var userid:uint;
      
      public function room_ivit_notice_out()
      {
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.roomid);
         WriteUtils.writeTag(param1,WireType.VARINT,2);
         WriteUtils.write$TYPE_UINT32(param1,this.roommode);
         WriteUtils.writeTag(param1,WireType.VARINT,3);
         WriteUtils.write$TYPE_UINT32(param1,this.userid);
         for(_loc2_ in this)
         {
            super.writeUnknown(param1,_loc2_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc6_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc6_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc6_ >> 3)
            {
               case 1:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: room_ivit_notice_out.roomid cannot be set twice.");
                  }
                  _loc3_++;
                  this.roomid = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: room_ivit_notice_out.roommode cannot be set twice.");
                  }
                  _loc4_++;
                  this.roommode = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: room_ivit_notice_out.userid cannot be set twice.");
                  }
                  _loc5_++;
                  this.userid = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               default:
                  super.readUnknown(param1,_loc6_);
                  break;
            }
         }
      }
   }
}
