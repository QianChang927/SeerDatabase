package com.protobuf.commonproto
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import flash.utils.IDataInput;
   
   public final dynamic class RuleInfo extends Message
   {
      
      public static const IDS:RepeatedFieldDescriptor$TYPE_UINT32 = new RepeatedFieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.RuleInfo.ids","ids",1 << 3 | WireType.VARINT);
      
      public static const RULES:RepeatedFieldDescriptor$TYPE_UINT32 = new RepeatedFieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.RuleInfo.rules","rules",2 << 3 | WireType.VARINT);
       
      
      public var ids:Array;
      
      public var rules:Array;
      
      public function RuleInfo()
      {
         this.ids = [];
         this.rules = [];
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc4_:* = undefined;
         var _loc2_:uint = 0;
         while(_loc2_ < this.ids.length)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,1);
            WriteUtils.write$TYPE_UINT32(param1,this.ids[_loc2_]);
            _loc2_++;
         }
         var _loc3_:uint = 0;
         while(_loc3_ < this.rules.length)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,2);
            WriteUtils.write$TYPE_UINT32(param1,this.rules[_loc3_]);
            _loc3_++;
         }
         for(_loc4_ in this)
         {
            super.writeUnknown(param1,_loc4_);
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
                     ReadUtils.readPackedRepeated(param1,ReadUtils.read$TYPE_UINT32,this.rules);
                  }
                  else
                  {
                     this.rules.push(ReadUtils.read$TYPE_UINT32(param1));
                  }
                  break;
               default:
                  super.readUnknown(param1,_loc3_);
                  break;
            }
         }
      }
   }
}
