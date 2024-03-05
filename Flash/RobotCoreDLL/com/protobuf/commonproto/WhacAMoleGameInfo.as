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
   
   public final dynamic class WhacAMoleGameInfo extends Message
   {
      
      public static const TIME:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.WhacAMoleGameInfo.time","time",1 << 3 | WireType.VARINT);
      
      public static const SCORE:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.WhacAMoleGameInfo.score","score",2 << 3 | WireType.VARINT);
      
      public static const CLICK_INFO:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.WhacAMoleGameInfo.click_info","clickInfo",3 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.commonproto.ClickInfo;
      });
      
      public static const MAP_ARGS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.WhacAMoleGameInfo.map_args","mapArgs",4 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.commonproto.ArgsInfo;
      });
      
      public static const ARGS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.WhacAMoleGameInfo.args","args",5 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.commonproto.ArgsInfo;
      });
      
      public static const RULE_INFO:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.WhacAMoleGameInfo.rule_info","ruleInfo",6 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.commonproto.RuleInfo;
      });
       
      
      public var time:uint;
      
      private var score$field:uint;
      
      private var hasField$0:uint = 0;
      
      private var click_info$field:com.protobuf.commonproto.ClickInfo;
      
      private var map_args$field:com.protobuf.commonproto.ArgsInfo;
      
      private var args$field:com.protobuf.commonproto.ArgsInfo;
      
      private var rule_info$field:com.protobuf.commonproto.RuleInfo;
      
      public function WhacAMoleGameInfo()
      {
         super();
      }
      
      public function clearScore() : void
      {
         this.hasField$0 &= 4294967294;
         this.score$field = new uint();
      }
      
      public function get hasScore() : Boolean
      {
         return (this.hasField$0 & 1) != 0;
      }
      
      public function set score(param1:uint) : void
      {
         this.hasField$0 |= 1;
         this.score$field = param1;
      }
      
      public function get score() : uint
      {
         return this.score$field;
      }
      
      public function clearClickInfo() : void
      {
         this.click_info$field = null;
      }
      
      public function get hasClickInfo() : Boolean
      {
         return this.click_info$field != null;
      }
      
      public function set clickInfo(param1:com.protobuf.commonproto.ClickInfo) : void
      {
         this.click_info$field = param1;
      }
      
      public function get clickInfo() : com.protobuf.commonproto.ClickInfo
      {
         return this.click_info$field;
      }
      
      public function clearMapArgs() : void
      {
         this.map_args$field = null;
      }
      
      public function get hasMapArgs() : Boolean
      {
         return this.map_args$field != null;
      }
      
      public function set mapArgs(param1:com.protobuf.commonproto.ArgsInfo) : void
      {
         this.map_args$field = param1;
      }
      
      public function get mapArgs() : com.protobuf.commonproto.ArgsInfo
      {
         return this.map_args$field;
      }
      
      public function clearArgs() : void
      {
         this.args$field = null;
      }
      
      public function get hasArgs() : Boolean
      {
         return this.args$field != null;
      }
      
      public function set args(param1:com.protobuf.commonproto.ArgsInfo) : void
      {
         this.args$field = param1;
      }
      
      public function get args() : com.protobuf.commonproto.ArgsInfo
      {
         return this.args$field;
      }
      
      public function clearRuleInfo() : void
      {
         this.rule_info$field = null;
      }
      
      public function get hasRuleInfo() : Boolean
      {
         return this.rule_info$field != null;
      }
      
      public function set ruleInfo(param1:com.protobuf.commonproto.RuleInfo) : void
      {
         this.rule_info$field = param1;
      }
      
      public function get ruleInfo() : com.protobuf.commonproto.RuleInfo
      {
         return this.rule_info$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.time);
         if(this.hasScore)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,2);
            WriteUtils.write$TYPE_UINT32(param1,this.score$field);
         }
         if(this.hasClickInfo)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,3);
            WriteUtils.write$TYPE_MESSAGE(param1,this.click_info$field);
         }
         if(this.hasMapArgs)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,4);
            WriteUtils.write$TYPE_MESSAGE(param1,this.map_args$field);
         }
         if(this.hasArgs)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,5);
            WriteUtils.write$TYPE_MESSAGE(param1,this.args$field);
         }
         if(this.hasRuleInfo)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,6);
            WriteUtils.write$TYPE_MESSAGE(param1,this.rule_info$field);
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
                     throw new IOError("Bad data format: WhacAMoleGameInfo.time cannot be set twice.");
                  }
                  _loc3_++;
                  this.time = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: WhacAMoleGameInfo.score cannot be set twice.");
                  }
                  _loc4_++;
                  this.score = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: WhacAMoleGameInfo.clickInfo cannot be set twice.");
                  }
                  _loc5_++;
                  this.clickInfo = new com.protobuf.commonproto.ClickInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.clickInfo);
                  break;
               case 4:
                  if(_loc6_ != 0)
                  {
                     throw new IOError("Bad data format: WhacAMoleGameInfo.mapArgs cannot be set twice.");
                  }
                  _loc6_++;
                  this.mapArgs = new com.protobuf.commonproto.ArgsInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.mapArgs);
                  break;
               case 5:
                  if(_loc7_ != 0)
                  {
                     throw new IOError("Bad data format: WhacAMoleGameInfo.args cannot be set twice.");
                  }
                  _loc7_++;
                  this.args = new com.protobuf.commonproto.ArgsInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.args);
                  break;
               case 6:
                  if(_loc8_ != 0)
                  {
                     throw new IOError("Bad data format: WhacAMoleGameInfo.ruleInfo cannot be set twice.");
                  }
                  _loc8_++;
                  this.ruleInfo = new com.protobuf.commonproto.RuleInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.ruleInfo);
                  break;
               default:
                  super.readUnknown(param1,_loc9_);
                  break;
            }
         }
      }
   }
}
