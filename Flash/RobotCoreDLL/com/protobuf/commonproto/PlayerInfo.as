package com.protobuf.commonproto
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WireType;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_BYTES;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_UINT32;
   import com.netease.protobuf.used_by_generated_code;
   import flash.errors.IOError;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   
   public final dynamic class PlayerInfo extends Message
   {
      
      public static const USERID:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.PlayerInfo.userid","userid",1 << 3 | WireType.VARINT);
      
      public static const NAME:FieldDescriptor$TYPE_BYTES = new FieldDescriptor$TYPE_BYTES("com.protobuf.commonproto.PlayerInfo.name","name",2 << 3 | WireType.LENGTH_DELIMITED);
      
      public static const STATE:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.PlayerInfo.state","state",3 << 3 | WireType.VARINT);
       
      
      public var userid:uint;
      
      public var name:ByteArray;
      
      private var state$field:uint;
      
      private var hasField$0:uint = 0;
      
      public function PlayerInfo()
      {
         super();
      }
      
      public function clearState() : void
      {
         this.hasField$0 &= 4294967294;
         this.state$field = new uint();
      }
      
      public function get hasState() : Boolean
      {
         return (this.hasField$0 & 1) != 0;
      }
      
      public function set state(param1:uint) : void
      {
         this.hasField$0 |= 1;
         this.state$field = param1;
      }
      
      public function get state() : uint
      {
         return this.state$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.userid);
         WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,2);
         WriteUtils.write$TYPE_BYTES(param1,this.name);
         if(this.hasState)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,3);
            WriteUtils.write$TYPE_UINT32(param1,this.state$field);
         }
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
                     throw new IOError("Bad data format: PlayerInfo.userid cannot be set twice.");
                  }
                  _loc3_++;
                  this.userid = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: PlayerInfo.name cannot be set twice.");
                  }
                  _loc4_++;
                  this.name = ReadUtils.read$TYPE_BYTES(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: PlayerInfo.state cannot be set twice.");
                  }
                  _loc5_++;
                  this.state = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               default:
                  super.readUnknown(param1,_loc6_);
                  break;
            }
         }
      }
   }
}
