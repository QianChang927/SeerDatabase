package com.protobuf.clientproto
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import com.protobuf.commonproto.MapInfo;
   import com.protobuf.commonproto.PlayerInfo;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class cli_pb_team_game_proto_start_notice_out extends Message
   {
      
      public static const IDX:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out.idx","idx",1 << 3 | WireType.VARINT);
      
      public static const PLAYERINFOS:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out.playerinfos","playerinfos",2 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return PlayerInfo;
      });
      
      public static const MAPINFOS:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out.mapinfos","mapinfos",3 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return MapInfo;
      });
      
      public static const POS:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.cli_pb_team_game_proto_start_notice_out.pos","pos",4 << 3 | WireType.VARINT);
       
      
      public var idx:uint;
      
      public var playerinfos:Array;
      
      public var mapinfos:Array;
      
      public var pos:uint;
      
      public function cli_pb_team_game_proto_start_notice_out()
      {
         this.playerinfos = [];
         this.mapinfos = [];
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc4_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.idx);
         var _loc2_:uint = 0;
         while(_loc2_ < this.playerinfos.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,2);
            WriteUtils.write$TYPE_MESSAGE(param1,this.playerinfos[_loc2_]);
            _loc2_++;
         }
         var _loc3_:uint = 0;
         while(_loc3_ < this.mapinfos.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,3);
            WriteUtils.write$TYPE_MESSAGE(param1,this.mapinfos[_loc3_]);
            _loc3_++;
         }
         WriteUtils.writeTag(param1,WireType.VARINT,4);
         WriteUtils.write$TYPE_UINT32(param1,this.pos);
         for(_loc4_ in this)
         {
            super.writeUnknown(param1,_loc4_);
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
                     throw new IOError("Bad data format: cli_pb_team_game_proto_start_notice_out.idx cannot be set twice.");
                  }
                  _loc3_++;
                  this.idx = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  this.playerinfos.push(ReadUtils.read$TYPE_MESSAGE(param1,new PlayerInfo()));
                  break;
               case 3:
                  this.mapinfos.push(ReadUtils.read$TYPE_MESSAGE(param1,new MapInfo()));
                  break;
               case 4:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_start_notice_out.pos cannot be set twice.");
                  }
                  _loc4_++;
                  this.pos = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               default:
                  super.readUnknown(param1,_loc5_);
                  break;
            }
         }
      }
   }
}
