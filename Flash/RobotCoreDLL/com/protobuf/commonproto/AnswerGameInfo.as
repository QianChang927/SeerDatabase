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
   
   public final dynamic class AnswerGameInfo extends Message
   {
      
      public static const IDX:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.AnswerGameInfo.idx","idx",1 << 3 | WireType.VARINT);
      
      public static const TIME:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.AnswerGameInfo.time","time",2 << 3 | WireType.VARINT);
      
      public static const FLAG:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.AnswerGameInfo.flag","flag",3 << 3 | WireType.VARINT);
      
      public static const PLAYERS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.AnswerGameInfo.players","players",4 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.commonproto.PlayerInfo;
      });
       
      
      public var idx:uint;
      
      public var time:uint;
      
      public var flag:uint;
      
      private var players$field:com.protobuf.commonproto.PlayerInfo;
      
      public function AnswerGameInfo()
      {
         super();
      }
      
      public function clearPlayers() : void
      {
         this.players$field = null;
      }
      
      public function get hasPlayers() : Boolean
      {
         return this.players$field != null;
      }
      
      public function set players(param1:com.protobuf.commonproto.PlayerInfo) : void
      {
         this.players$field = param1;
      }
      
      public function get players() : com.protobuf.commonproto.PlayerInfo
      {
         return this.players$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.idx);
         WriteUtils.writeTag(param1,WireType.VARINT,2);
         WriteUtils.write$TYPE_UINT32(param1,this.time);
         WriteUtils.writeTag(param1,WireType.VARINT,3);
         WriteUtils.write$TYPE_UINT32(param1,this.flag);
         if(this.hasPlayers)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,4);
            WriteUtils.write$TYPE_MESSAGE(param1,this.players$field);
         }
         for(_loc2_ in this)
         {
            super.writeUnknown(param1,_loc2_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc7_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc7_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc7_ >> 3)
            {
               case 1:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: AnswerGameInfo.idx cannot be set twice.");
                  }
                  _loc3_++;
                  this.idx = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: AnswerGameInfo.time cannot be set twice.");
                  }
                  _loc4_++;
                  this.time = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: AnswerGameInfo.flag cannot be set twice.");
                  }
                  _loc5_++;
                  this.flag = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 4:
                  if(_loc6_ != 0)
                  {
                     throw new IOError("Bad data format: AnswerGameInfo.players cannot be set twice.");
                  }
                  _loc6_++;
                  this.players = new com.protobuf.commonproto.PlayerInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.players);
                  break;
               default:
                  super.readUnknown(param1,_loc7_);
                  break;
            }
         }
      }
   }
}
