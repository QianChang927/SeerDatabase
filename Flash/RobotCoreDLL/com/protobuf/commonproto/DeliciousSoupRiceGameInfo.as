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
   
   public final dynamic class DeliciousSoupRiceGameInfo extends Message
   {
      
      public static const TIME:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.DeliciousSoupRiceGameInfo.time","time",1 << 3 | WireType.VARINT);
      
      public static const ITEM_TYPE:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.DeliciousSoupRiceGameInfo.item_type","itemType",2 << 3 | WireType.VARINT);
      
      public static const DSR_VALUE_INFO:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.DeliciousSoupRiceGameInfo.dsr_value_info","dsrValueInfo",3 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.commonproto.DsrValueInfo;
      });
       
      
      public var time:uint;
      
      private var item_type$field:uint;
      
      private var hasField$0:uint = 0;
      
      private var dsr_value_info$field:com.protobuf.commonproto.DsrValueInfo;
      
      public function DeliciousSoupRiceGameInfo()
      {
         super();
      }
      
      public function clearItemType() : void
      {
         this.hasField$0 &= 4294967294;
         this.item_type$field = new uint();
      }
      
      public function get hasItemType() : Boolean
      {
         return (this.hasField$0 & 1) != 0;
      }
      
      public function set itemType(param1:uint) : void
      {
         this.hasField$0 |= 1;
         this.item_type$field = param1;
      }
      
      public function get itemType() : uint
      {
         return this.item_type$field;
      }
      
      public function clearDsrValueInfo() : void
      {
         this.dsr_value_info$field = null;
      }
      
      public function get hasDsrValueInfo() : Boolean
      {
         return this.dsr_value_info$field != null;
      }
      
      public function set dsrValueInfo(param1:com.protobuf.commonproto.DsrValueInfo) : void
      {
         this.dsr_value_info$field = param1;
      }
      
      public function get dsrValueInfo() : com.protobuf.commonproto.DsrValueInfo
      {
         return this.dsr_value_info$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.time);
         if(this.hasItemType)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,2);
            WriteUtils.write$TYPE_UINT32(param1,this.item_type$field);
         }
         if(this.hasDsrValueInfo)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,3);
            WriteUtils.write$TYPE_MESSAGE(param1,this.dsr_value_info$field);
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
                     throw new IOError("Bad data format: DeliciousSoupRiceGameInfo.time cannot be set twice.");
                  }
                  _loc3_++;
                  this.time = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: DeliciousSoupRiceGameInfo.itemType cannot be set twice.");
                  }
                  _loc4_++;
                  this.itemType = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: DeliciousSoupRiceGameInfo.dsrValueInfo cannot be set twice.");
                  }
                  _loc5_++;
                  this.dsrValueInfo = new com.protobuf.commonproto.DsrValueInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.dsrValueInfo);
                  break;
               default:
                  super.readUnknown(param1,_loc6_);
                  break;
            }
         }
      }
   }
}
