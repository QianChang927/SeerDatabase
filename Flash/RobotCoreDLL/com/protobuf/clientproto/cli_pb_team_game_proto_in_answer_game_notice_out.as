package com.protobuf.clientproto
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WireType;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_MESSAGE;
   import com.netease.protobuf.used_by_generated_code;
   import com.protobuf.commonproto.AnswerGameInfo;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class cli_pb_team_game_proto_in_answer_game_notice_out extends Message
   {
      
      public static const ANSWER_GAME_INFOS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_in_answer_game_notice_out.answer_game_infos","answerGameInfos",1 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return AnswerGameInfo;
      });
       
      
      public var answerGameInfos:AnswerGameInfo;
      
      public function cli_pb_team_game_proto_in_answer_game_notice_out()
      {
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,1);
         WriteUtils.write$TYPE_MESSAGE(param1,this.answerGameInfos);
         for(_loc2_ in this)
         {
            super.writeUnknown(param1,_loc2_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc4_:uint = 0;
         var _loc3_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc4_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc4_ >> 3)
            {
               case 1:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_in_answer_game_notice_out.answerGameInfos cannot be set twice.");
                  }
                  _loc3_++;
                  this.answerGameInfos = new AnswerGameInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.answerGameInfos);
                  break;
               default:
                  super.readUnknown(param1,_loc4_);
                  break;
            }
         }
      }
   }
}
