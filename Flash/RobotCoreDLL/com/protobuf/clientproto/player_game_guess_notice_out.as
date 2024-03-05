package com.protobuf.clientproto
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class player_game_guess_notice_out extends Message
   {
      
      public static const RAND_NUMBER:FieldDescriptor$TYPE_INT32 = new FieldDescriptor$TYPE_INT32("com.protobuf.clientproto.player_game_guess_notice_out.rand_number","randNumber",1 << 3 | WireType.VARINT);
      
      public static const GUESS_INFO:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.player_game_guess_notice_out.guess_info","guessInfo",2 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return game_guess_info;
      });
       
      
      public var randNumber:int;
      
      public var guessInfo:Array;
      
      public function player_game_guess_notice_out()
      {
         this.guessInfo = [];
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc3_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_INT32(param1,this.randNumber);
         var _loc2_:uint = 0;
         while(_loc2_ < this.guessInfo.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,2);
            WriteUtils.write$TYPE_MESSAGE(param1,this.guessInfo[_loc2_]);
            _loc2_++;
         }
         for(_loc3_ in this)
         {
            super.writeUnknown(param1,_loc3_);
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
                     throw new IOError("Bad data format: player_game_guess_notice_out.randNumber cannot be set twice.");
                  }
                  _loc3_++;
                  this.randNumber = ReadUtils.read$TYPE_INT32(param1);
                  break;
               case 2:
                  this.guessInfo.push(ReadUtils.read$TYPE_MESSAGE(param1,new game_guess_info()));
                  break;
               default:
                  super.readUnknown(param1,_loc4_);
                  break;
            }
         }
      }
   }
}
