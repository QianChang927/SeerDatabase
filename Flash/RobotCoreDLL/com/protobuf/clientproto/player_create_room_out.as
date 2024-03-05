package com.protobuf.clientproto
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WireType;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_MESSAGE;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_UINT32;
   import com.netease.protobuf.used_by_generated_code;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class player_create_room_out extends Message
   {
      
      public static const RESULT:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.player_create_room_out.result","result",1 << 3 | WireType.VARINT);
      
      public static const ROOM_INFO:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.player_create_room_out.room_info","roomInfo",2 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.clientproto.match_room_info;
      });
       
      
      public var result:uint;
      
      private var room_info$field:com.protobuf.clientproto.match_room_info;
      
      public function player_create_room_out()
      {
         super();
      }
      
      public function clearRoomInfo() : void
      {
         this.room_info$field = null;
      }
      
      public function get hasRoomInfo() : Boolean
      {
         return this.room_info$field != null;
      }
      
      public function set roomInfo(param1:com.protobuf.clientproto.match_room_info) : void
      {
         this.room_info$field = param1;
      }
      
      public function get roomInfo() : com.protobuf.clientproto.match_room_info
      {
         return this.room_info$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.result);
         if(this.hasRoomInfo)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,2);
            WriteUtils.write$TYPE_MESSAGE(param1,this.room_info$field);
         }
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
                     throw new IOError("Bad data format: player_create_room_out.result cannot be set twice.");
                  }
                  _loc3_++;
                  this.result = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: player_create_room_out.roomInfo cannot be set twice.");
                  }
                  _loc4_++;
                  this.roomInfo = new com.protobuf.clientproto.match_room_info();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.roomInfo);
                  break;
               default:
                  super.readUnknown(param1,_loc5_);
                  break;
            }
         }
      }
   }
}
