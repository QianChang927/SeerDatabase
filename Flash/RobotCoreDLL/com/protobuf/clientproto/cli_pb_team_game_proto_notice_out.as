package com.protobuf.clientproto
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import com.protobuf.commonproto.AnswerGameInfo;
   import com.protobuf.commonproto.DeliciousSoupRiceGameInfo;
   import com.protobuf.commonproto.GiftInfo;
   import com.protobuf.commonproto.WhacAMoleGameInfo;
   import com.protobuf.commonproto.game_treasure_info;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class cli_pb_team_game_proto_notice_out extends Message
   {
      
      public static const IDX:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.idx","idx",1 << 3 | WireType.VARINT);
      
      public static const LAST_EVENT_IDX:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.last_event_idx","lastEventIdx",2 << 3 | WireType.VARINT);
      
      public static const EVENT_IDX:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.event_idx","eventIdx",3 << 3 | WireType.VARINT);
      
      public static const ACTION_RESULT:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.action_result","actionResult",4 << 3 | WireType.VARINT);
      
      public static const GIFTINFOS:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.giftinfos","giftinfos",5 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return GiftInfo;
      });
      
      public static const POS:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.pos","pos",6 << 3 | WireType.VARINT);
      
      public static const ANSWER_GAME_INFOS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.answer_game_infos","answerGameInfos",302 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return AnswerGameInfo;
      });
      
      public static const DELICIOUS_GAME_INFOS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.delicious_game_infos","deliciousGameInfos",303 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return DeliciousSoupRiceGameInfo;
      });
      
      public static const TREASURE_INFO:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.treasure_info","treasureInfo",401 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return game_treasure_info;
      });
      
      public static const WCA_GAME_INFOS:FieldDescriptor$TYPE_MESSAGE = new FieldDescriptor$TYPE_MESSAGE("com.protobuf.clientproto.cli_pb_team_game_proto_notice_out.wca_game_infos","wcaGameInfos",402 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return WhacAMoleGameInfo;
      });
       
      
      public var idx:uint;
      
      public var lastEventIdx:uint;
      
      public var eventIdx:uint;
      
      public var actionResult:uint;
      
      public var giftinfos:Array;
      
      public var pos:uint;
      
      private var answer_game_infos$field:AnswerGameInfo;
      
      private var delicious_game_infos$field:DeliciousSoupRiceGameInfo;
      
      private var treasure_info$field:game_treasure_info;
      
      private var wca_game_infos$field:WhacAMoleGameInfo;
      
      public function cli_pb_team_game_proto_notice_out()
      {
         this.giftinfos = [];
         super();
      }
      
      public function clearAnswerGameInfos() : void
      {
         this.answer_game_infos$field = null;
      }
      
      public function get hasAnswerGameInfos() : Boolean
      {
         return this.answer_game_infos$field != null;
      }
      
      public function set answerGameInfos(param1:AnswerGameInfo) : void
      {
         this.answer_game_infos$field = param1;
      }
      
      public function get answerGameInfos() : AnswerGameInfo
      {
         return this.answer_game_infos$field;
      }
      
      public function clearDeliciousGameInfos() : void
      {
         this.delicious_game_infos$field = null;
      }
      
      public function get hasDeliciousGameInfos() : Boolean
      {
         return this.delicious_game_infos$field != null;
      }
      
      public function set deliciousGameInfos(param1:DeliciousSoupRiceGameInfo) : void
      {
         this.delicious_game_infos$field = param1;
      }
      
      public function get deliciousGameInfos() : DeliciousSoupRiceGameInfo
      {
         return this.delicious_game_infos$field;
      }
      
      public function clearTreasureInfo() : void
      {
         this.treasure_info$field = null;
      }
      
      public function get hasTreasureInfo() : Boolean
      {
         return this.treasure_info$field != null;
      }
      
      public function set treasureInfo(param1:game_treasure_info) : void
      {
         this.treasure_info$field = param1;
      }
      
      public function get treasureInfo() : game_treasure_info
      {
         return this.treasure_info$field;
      }
      
      public function clearWcaGameInfos() : void
      {
         this.wca_game_infos$field = null;
      }
      
      public function get hasWcaGameInfos() : Boolean
      {
         return this.wca_game_infos$field != null;
      }
      
      public function set wcaGameInfos(param1:WhacAMoleGameInfo) : void
      {
         this.wca_game_infos$field = param1;
      }
      
      public function get wcaGameInfos() : WhacAMoleGameInfo
      {
         return this.wca_game_infos$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc3_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.idx);
         WriteUtils.writeTag(param1,WireType.VARINT,2);
         WriteUtils.write$TYPE_UINT32(param1,this.lastEventIdx);
         WriteUtils.writeTag(param1,WireType.VARINT,3);
         WriteUtils.write$TYPE_UINT32(param1,this.eventIdx);
         WriteUtils.writeTag(param1,WireType.VARINT,4);
         WriteUtils.write$TYPE_UINT32(param1,this.actionResult);
         var _loc2_:uint = 0;
         while(_loc2_ < this.giftinfos.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,5);
            WriteUtils.write$TYPE_MESSAGE(param1,this.giftinfos[_loc2_]);
            _loc2_++;
         }
         WriteUtils.writeTag(param1,WireType.VARINT,6);
         WriteUtils.write$TYPE_UINT32(param1,this.pos);
         if(this.hasAnswerGameInfos)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,302);
            WriteUtils.write$TYPE_MESSAGE(param1,this.answer_game_infos$field);
         }
         if(this.hasDeliciousGameInfos)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,303);
            WriteUtils.write$TYPE_MESSAGE(param1,this.delicious_game_infos$field);
         }
         if(this.hasTreasureInfo)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,401);
            WriteUtils.write$TYPE_MESSAGE(param1,this.treasure_info$field);
         }
         if(this.hasWcaGameInfos)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,402);
            WriteUtils.write$TYPE_MESSAGE(param1,this.wca_game_infos$field);
         }
         for(_loc3_ in this)
         {
            super.writeUnknown(param1,_loc3_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc12_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         var _loc9_:uint = 0;
         var _loc10_:uint = 0;
         var _loc11_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc12_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc12_ >> 3)
            {
               case 1:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.idx cannot be set twice.");
                  }
                  _loc3_++;
                  this.idx = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.lastEventIdx cannot be set twice.");
                  }
                  _loc4_++;
                  this.lastEventIdx = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.eventIdx cannot be set twice.");
                  }
                  _loc5_++;
                  this.eventIdx = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 4:
                  if(_loc6_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.actionResult cannot be set twice.");
                  }
                  _loc6_++;
                  this.actionResult = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 5:
                  this.giftinfos.push(ReadUtils.read$TYPE_MESSAGE(param1,new GiftInfo()));
                  break;
               case 6:
                  if(_loc7_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.pos cannot be set twice.");
                  }
                  _loc7_++;
                  this.pos = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 302:
                  if(_loc8_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.answerGameInfos cannot be set twice.");
                  }
                  _loc8_++;
                  this.answerGameInfos = new AnswerGameInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.answerGameInfos);
                  break;
               case 303:
                  if(_loc9_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.deliciousGameInfos cannot be set twice.");
                  }
                  _loc9_++;
                  this.deliciousGameInfos = new DeliciousSoupRiceGameInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.deliciousGameInfos);
                  break;
               case 401:
                  if(_loc10_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.treasureInfo cannot be set twice.");
                  }
                  _loc10_++;
                  this.treasureInfo = new game_treasure_info();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.treasureInfo);
                  break;
               case 402:
                  if(_loc11_ != 0)
                  {
                     throw new IOError("Bad data format: cli_pb_team_game_proto_notice_out.wcaGameInfos cannot be set twice.");
                  }
                  _loc11_++;
                  this.wcaGameInfos = new WhacAMoleGameInfo();
                  ReadUtils.read$TYPE_MESSAGE(param1,this.wcaGameInfos);
                  break;
               default:
                  super.readUnknown(param1,_loc12_);
                  break;
            }
         }
      }
   }
}
