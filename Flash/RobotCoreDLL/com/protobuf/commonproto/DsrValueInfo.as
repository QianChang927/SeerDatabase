package com.protobuf.commonproto
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import flash.utils.IDataInput;
   
   public final dynamic class DsrValueInfo extends Message
   {
      
      public static const IDS:RepeatedFieldDescriptor$TYPE_UINT32 = new RepeatedFieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.DsrValueInfo.ids","ids",1 << 3 | WireType.VARINT);
      
      public static const RANKINGS:RepeatedFieldDescriptor$TYPE_UINT32 = new RepeatedFieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.DsrValueInfo.rankings","rankings",2 << 3 | WireType.VARINT);
      
      public static const GIFT_INFOS:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.DsrValueInfo.gift_infos","giftInfos",3 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return GiftInfo;
      });
      
      public static const ARGS:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.DsrValueInfo.args","args",4 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return ArgsInfo;
      });
       
      
      public var ids:Array;
      
      public var rankings:Array;
      
      public var giftInfos:Array;
      
      public var args:Array;
      
      public function DsrValueInfo()
      {
         this.ids = [];
         this.rankings = [];
         this.giftInfos = [];
         this.args = [];
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc6_:* = undefined;
         var _loc2_:uint = 0;
         while(_loc2_ < this.ids.length)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,1);
            WriteUtils.write$TYPE_UINT32(param1,this.ids[_loc2_]);
            _loc2_++;
         }
         var _loc3_:uint = 0;
         while(_loc3_ < this.rankings.length)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,2);
            WriteUtils.write$TYPE_UINT32(param1,this.rankings[_loc3_]);
            _loc3_++;
         }
         var _loc4_:uint = 0;
         while(_loc4_ < this.giftInfos.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,3);
            WriteUtils.write$TYPE_MESSAGE(param1,this.giftInfos[_loc4_]);
            _loc4_++;
         }
         var _loc5_:uint = 0;
         while(_loc5_ < this.args.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,4);
            WriteUtils.write$TYPE_MESSAGE(param1,this.args[_loc5_]);
            _loc5_++;
         }
         for(_loc6_ in this)
         {
            super.writeUnknown(param1,_loc6_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc3_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc3_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc3_ >> 3)
            {
               case 1:
                  if((_loc3_ & 7) == WireType.LENGTH_DELIMITED)
                  {
                     ReadUtils.readPackedRepeated(param1,ReadUtils.read$TYPE_UINT32,this.ids);
                  }
                  else
                  {
                     this.ids.push(ReadUtils.read$TYPE_UINT32(param1));
                  }
                  break;
               case 2:
                  if((_loc3_ & 7) == WireType.LENGTH_DELIMITED)
                  {
                     ReadUtils.readPackedRepeated(param1,ReadUtils.read$TYPE_UINT32,this.rankings);
                  }
                  else
                  {
                     this.rankings.push(ReadUtils.read$TYPE_UINT32(param1));
                  }
                  break;
               case 3:
                  this.giftInfos.push(ReadUtils.read$TYPE_MESSAGE(param1,new GiftInfo()));
                  break;
               case 4:
                  this.args.push(ReadUtils.read$TYPE_MESSAGE(param1,new ArgsInfo()));
                  break;
               default:
                  super.readUnknown(param1,_loc3_);
                  break;
            }
         }
      }
   }
}
