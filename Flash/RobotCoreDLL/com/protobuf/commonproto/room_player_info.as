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
   
   public final dynamic class room_player_info extends Message
   {
      
      public static const USERID:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.room_player_info.userid","userid",1 << 3 | WireType.VARINT);
      
      public static const NAME:FieldDescriptor$TYPE_BYTES = new FieldDescriptor$TYPE_BYTES("com.protobuf.commonproto.room_player_info.name","name",2 << 3 | WireType.LENGTH_DELIMITED);
      
      public static const HEADID:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.room_player_info.headid","headid",3 << 3 | WireType.VARINT);
      
      public static const STATUS:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.room_player_info.status","status",4 << 3 | WireType.VARINT);
      
      public static const JOINTM:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.room_player_info.jointm","jointm",5 << 3 | WireType.VARINT);
      
      public static const FROZEN_TM:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.room_player_info.frozen_tm","frozenTm",6 << 3 | WireType.VARINT);
       
      
      public var userid:uint;
      
      public var name:ByteArray;
      
      public var headid:uint;
      
      public var status:uint;
      
      private var jointm$field:uint;
      
      private var hasField$0:uint = 0;
      
      private var frozen_tm$field:uint;
      
      public function room_player_info()
      {
         super();
      }
      
      public function clearJointm() : void
      {
         this.hasField$0 &= 4294967294;
         this.jointm$field = new uint();
      }
      
      public function get hasJointm() : Boolean
      {
         return (this.hasField$0 & 1) != 0;
      }
      
      public function set jointm(param1:uint) : void
      {
         this.hasField$0 |= 1;
         this.jointm$field = param1;
      }
      
      public function get jointm() : uint
      {
         return this.jointm$field;
      }
      
      public function clearFrozenTm() : void
      {
         this.hasField$0 &= 4294967293;
         this.frozen_tm$field = new uint();
      }
      
      public function get hasFrozenTm() : Boolean
      {
         return (this.hasField$0 & 2) != 0;
      }
      
      public function set frozenTm(param1:uint) : void
      {
         this.hasField$0 |= 2;
         this.frozen_tm$field = param1;
      }
      
      public function get frozenTm() : uint
      {
         return this.frozen_tm$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.userid);
         WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,2);
         WriteUtils.write$TYPE_BYTES(param1,this.name);
         WriteUtils.writeTag(param1,WireType.VARINT,3);
         WriteUtils.write$TYPE_UINT32(param1,this.headid);
         WriteUtils.writeTag(param1,WireType.VARINT,4);
         WriteUtils.write$TYPE_UINT32(param1,this.status);
         if(this.hasJointm)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,5);
            WriteUtils.write$TYPE_UINT32(param1,this.jointm$field);
         }
         if(this.hasFrozenTm)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,6);
            WriteUtils.write$TYPE_UINT32(param1,this.frozen_tm$field);
         }
         for(_loc2_ in this)
         {
            super.writeUnknown(param1,_loc2_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc9_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc9_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc9_ >> 3)
            {
               case 1:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: room_player_info.userid cannot be set twice.");
                  }
                  _loc3_++;
                  this.userid = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: room_player_info.name cannot be set twice.");
                  }
                  _loc4_++;
                  this.name = ReadUtils.read$TYPE_BYTES(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: room_player_info.headid cannot be set twice.");
                  }
                  _loc5_++;
                  this.headid = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 4:
                  if(_loc6_ != 0)
                  {
                     throw new IOError("Bad data format: room_player_info.status cannot be set twice.");
                  }
                  _loc6_++;
                  this.status = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 5:
                  if(_loc7_ != 0)
                  {
                     throw new IOError("Bad data format: room_player_info.jointm cannot be set twice.");
                  }
                  _loc7_++;
                  this.jointm = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 6:
                  if(_loc8_ != 0)
                  {
                     throw new IOError("Bad data format: room_player_info.frozenTm cannot be set twice.");
                  }
                  _loc8_++;
                  this.frozenTm = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               default:
                  super.readUnknown(param1,_loc9_);
                  break;
            }
         }
      }
   }
}
