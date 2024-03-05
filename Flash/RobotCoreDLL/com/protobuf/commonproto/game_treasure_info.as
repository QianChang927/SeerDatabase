package com.protobuf.commonproto
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class game_treasure_info extends Message
   {
      
      public static const START_TM:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_info.start_tm","startTm",1 << 3 | WireType.VARINT);
      
      public static const TOTAL_SCORE:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_info.total_score","totalScore",2 << 3 | WireType.VARINT);
      
      public static const PLAYERS:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.game_treasure_info.players","players",3 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return game_treasure_player;
      });
      
      public static const BOXES:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.game_treasure_info.boxes","boxes",4 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return game_treasure_box;
      });
      
      public static const BOSSES:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.commonproto.game_treasure_info.bosses","bosses",5 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return com.protobuf.commonproto.game_treasure_boss;
      });
       
      
      public var startTm:uint;
      
      public var totalScore:uint;
      
      public var players:Array;
      
      public var boxes:Array;
      
      public var bosses:com.protobuf.commonproto.game_treasure_boss;
      
      public function game_treasure_info()
      {
         this.players = [];
         this.boxes = [];
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc4_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.startTm);
         WriteUtils.writeTag(param1,WireType.VARINT,2);
         WriteUtils.write$TYPE_UINT32(param1,this.totalScore);
         var _loc2_:uint = 0;
         while(_loc2_ < this.players.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,3);
            WriteUtils.write$TYPE_MESSAGE(param1,this.players[_loc2_]);
            _loc2_++;
         }
         var _loc3_:uint = 0;
         while(_loc3_ < this.boxes.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,4);
            WriteUtils.write$TYPE_MESSAGE(param1,this.boxes[_loc3_]);
            _loc3_++;
         }
         WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,5);
         WriteUtils.write$TYPE_MESSAGE(param1,this.bosses);
         for(_loc4_ in this)
         {
            super.writeUnknown(param1,_loc4_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc6_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc6_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc6_ >> 3)
            {
               case 1:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_info.startTm cannot be set twice.");
                  }
                  _loc3_++;
                  this.startTm = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_info.totalScore cannot be set twice.");
                  }
                  _loc4_++;
                  this.totalScore = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  this.players.push(ReadUtils.read$TYPE_MESSAGE(param1,new game_treasure_player()));
                  break;
               case 4:
                  this.boxes.push(ReadUtils.read$TYPE_MESSAGE(param1,new game_treasure_box()));
                  break;
               case 5:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_info.bosses cannot be set twice.");
                  }
                  _loc5_++;
                  this.bosses = new com.protobuf.commonproto.game_treasure_boss();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.bosses);
                  break;
               default:
                  super.readUnknown(param1,_loc6_);
                  break;
            }
         }
      }
   }
}
