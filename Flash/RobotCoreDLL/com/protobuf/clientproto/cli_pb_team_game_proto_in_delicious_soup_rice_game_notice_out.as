package com.protobuf.clientproto
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WireType;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_MESSAGE;
   import com.netease.protobuf.used_by_generated_code;
   import com.protobuf.commonproto.DeliciousSoupRiceGameInfo;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class cli_pb_team_game_proto_in_delicious_soup_rice_game_notice_out extends Message
   {
      
      public static const DELICIOUS_GAME_INFOS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_in_delicious_soup_rice_game_notice_out.delicious_game_infos","deliciousGameInfos",1 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return DeliciousSoupRiceGameInfo;
      });
       
      
      public var deliciousGameInfos:DeliciousSoupRiceGameInfo;
      
      public function cli_pb_team_game_proto_in_delicious_soup_rice_game_notice_out()
      {
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,1);
         WriteUtils.write$TYPE_MESSAGE(param1,this.deliciousGameInfos);
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
                     throw new IOError("Bad data format: cli_pb_team_game_proto_in_delicious_soup_rice_game_notice_out.deliciousGameInfos cannot be set twice.");
                  }
                  _loc3_++;
                  this.deliciousGameInfos = new DeliciousSoupRiceGameInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.deliciousGameInfos);
                  break;
               default:
                  super.readUnknown(param1,_loc4_);
                  break;
            }
         }
      }
   }
}
