package com.protobuf.commonproto
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
   
   public final dynamic class game_treasure_notice extends Message
   {
      
      public static const RESULT:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_notice.result","result",1 << 3 | WireType.VARINT);
      
      public static const SUB_RESULT:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_notice.sub_result","subResult",2 << 3 | WireType.VARINT);
      
      public static const INFO:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.game_treasure_notice.info","info",3 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.commonproto.game_treasure_info;
      });
       
      
      public var result:uint;
      
      private var sub_result$field:uint;
      
      private var hasField$0:uint = 0;
      
      private var info$field:com.protobuf.commonproto.game_treasure_info;
      
      public function game_treasure_notice()
      {
         super();
      }
      
      public function clearSubResult() : void
      {
         this.hasField$0 &= 4294967294;
         this.sub_result$field = new uint();
      }
      
      public function get hasSubResult() : Boolean
      {
         return (this.hasField$0 & 1) != 0;
      }
      
      public function set subResult(param1:uint) : void
      {
         this.hasField$0 |= 1;
         this.sub_result$field = param1;
      }
      
      public function get subResult() : uint
      {
         return this.sub_result$field;
      }
      
      public function clearInfo() : void
      {
         this.info$field = null;
      }
      
      public function get hasInfo() : Boolean
      {
         return this.info$field != null;
      }
      
      public function set info(param1:com.protobuf.commonproto.game_treasure_info) : void
      {
         this.info$field = param1;
      }
      
      public function get info() : com.protobuf.commonproto.game_treasure_info
      {
         return this.info$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.result);
         if(this.hasSubResult)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,2);
            WriteUtils.write$TYPE_UINT32(param1,this.sub_result$field);
         }
         if(this.hasInfo)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,3);
            WriteUtils.write$TYPE_MESSAGE(param1,this.info$field);
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
                     throw new IOError("Bad data format: game_treasure_notice.result cannot be set twice.");
                  }
                  _loc3_++;
                  this.result = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_notice.subResult cannot be set twice.");
                  }
                  _loc4_++;
                  this.subResult = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_notice.info cannot be set twice.");
                  }
                  _loc5_++;
                  this.info = new com.protobuf.commonproto.game_treasure_info();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.info);
                  break;
               default:
                  super.readUnknown(param1,_loc6_);
                  break;
            }
         }
      }
   }
}
