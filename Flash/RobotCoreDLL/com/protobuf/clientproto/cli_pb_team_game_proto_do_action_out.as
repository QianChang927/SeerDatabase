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
   import com.protobuf.commonproto.ArgsInfo;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class cli_pb_team_game_proto_do_action_out extends Message
   {
      
      public static const RESULT:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.cli_pb_team_game_proto_do_action_out.result","result",1 << 3 | WireType.VARINT);
      
      public static const ARGS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_do_action_out.args","args",2 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return ArgsInfo;
      });
       
      
      public var result:uint;
      
      private var args$field:ArgsInfo;
      
      public function cli_pb_team_game_proto_do_action_out()
      {
         super();
      }
      
      public function clearArgs() : void
      {
         this.args$field = null;
      }
      
      public function get hasArgs() : Boolean
      {
         return this.args$field != null;
      }
      
      public function set args(param1:ArgsInfo) : void
      {
         this.args$field = param1;
      }
      
      public function get args() : ArgsInfo
      {
         return this.args$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.result);
         if(this.hasArgs)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,2);
            WriteUtils.write$TYPE_MESSAGE(param1,this.args$field);
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
                     throw new IOError("Bad data format: cli_pb_team_game_proto_do_action_out.result cannot be set twice.");
                  }
                  _loc3_++;
                  this.result = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_do_action_out.args cannot be set twice.");
                  }
                  _loc4_++;
                  this.args = new ArgsInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.args);
                  break;
               default:
                  super.readUnknown(param1,_loc5_);
                  break;
            }
         }
      }
   }
}
