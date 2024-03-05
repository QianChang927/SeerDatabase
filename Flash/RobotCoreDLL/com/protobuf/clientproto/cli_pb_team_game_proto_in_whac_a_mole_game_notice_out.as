package com.protobuf.clientproto
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WireType;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_MESSAGE;
   import com.netease.protobuf.used_by_generated_code;
   import com.protobuf.commonproto.WhacAMoleGameInfo;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class cli_pb_team_game_proto_in_whac_a_mole_game_notice_out extends Message
   {
      
      public static const WCA_GAME_INFOS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_in_whac_a_mole_game_notice_out.wca_game_infos","wcaGameInfos",1 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return WhacAMoleGameInfo;
      });
       
      
      public var wcaGameInfos:WhacAMoleGameInfo;
      
      public function cli_pb_team_game_proto_in_whac_a_mole_game_notice_out()
      {
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,1);
         WriteUtils.write$TYPE_MESSAGE(param1,this.wcaGameInfos);
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
                     throw new IOError("Bad data format: cli_pb_team_game_proto_in_whac_a_mole_game_notice_out.wcaGameInfos cannot be set twice.");
                  }
                  _loc3_++;
                  this.wcaGameInfos = new WhacAMoleGameInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.wcaGameInfos);
                  break;
               default:
                  super.readUnknown(param1,_loc4_);
                  break;
            }
         }
      }
   }
}
