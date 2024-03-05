package com.protobuf.clientproto
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import com.protobuf.commonproto.PlayerInfo;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class room_start_game_notice_out extends Message
   {
      
      public static const MODE:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.room_start_game_notice_out.mode","mode",1 << 3 | WireType.VARINT);
      
      public static const GAME_GRPID:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.room_start_game_notice_out.game_grpid","gameGrpid",2 << 3 | WireType.VARINT);
      
      public static const PLAYERS:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.room_start_game_notice_out.players","players",3 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return PlayerInfo;
      });
       
      
      public var mode:uint;
      
      public var gameGrpid:uint;
      
      public var players:Array;
      
      public function room_start_game_notice_out()
      {
         this.players = [];
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc3_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.mode);
         WriteUtils.writeTag(param1,WireType.VARINT,2);
         WriteUtils.write$TYPE_UINT32(param1,this.gameGrpid);
         var _loc2_:uint = 0;
         while(_loc2_ < this.players.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,3);
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
                     throw new IOError("Bad data format: room_start_game_notice_out.mode cannot be set twice.");
                  }
                  _loc3_++;
                  this.mode = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: room_start_game_notice_out.gameGrpid cannot be set twice.");
                  }
                  _loc4_++;
                  this.gameGrpid = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  this.players.push(ReadUtils.read$TYPE_MESSAGE(param1,new PlayerInfo()));
                  break;
               default:
                  super.readUnknown(param1,_loc5_);
                  break;
            }
         }
      }
   }
}
