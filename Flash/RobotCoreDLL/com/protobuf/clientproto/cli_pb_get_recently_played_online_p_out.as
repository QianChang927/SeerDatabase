package com.protobuf.clientproto
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import com.protobuf.commonproto.PlayerInfo;
   import flash.utils.IDataInput;
   
   public final dynamic class cli_pb_get_recently_played_online_p_out extends Message
   {
      
      public static const PLAYERS:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_get_recently_played_online_p_out.players","players",1 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return PlayerInfo;
      });
       
      
      public var players:Array;
      
      public function cli_pb_get_recently_played_online_p_out()
      {
         this.players = [];
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc3_:* = undefined;
         var _loc2_:uint = 0;
         while(_loc2_ < this.players.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,1);
            WriteUtils.write$TYPE_MESSAGE(param1,this.players[_loc2_]);
            _loc2_++;
         }
         for(_loc3_ in this)
         {
            super.writeUnknown(param1,_loc3_);
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
                  this.players.push(ReadUtils.read$TYPE_MESSAGE(param1,new PlayerInfo()));
                  break;
               default:
                  super.readUnknown(param1,_loc3_);
                  break;
            }
         }
      }
   }
}
