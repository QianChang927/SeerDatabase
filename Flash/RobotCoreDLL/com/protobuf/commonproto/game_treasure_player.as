package com.protobuf.commonproto
{
   import com.netease.protobuf.Message;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WireType;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import com.netease.protobuf.fieldDescriptors.FieldDescriptor$TYPE_UINT32;
   import com.netease.protobuf.used_by_generated_code;
   import flash.errors.IOError;
   import flash.utils.IDataInput;
   
   public final dynamic class game_treasure_player extends Message
   {
      
      public static const UID:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_player.uid","uid",1 << 3 | WireType.VARINT);
      
      public static const ROLE:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_player.role","role",2 << 3 | WireType.VARINT);
      
      public static const P_SCORE:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_player.p_score","pScore",3 << 3 | WireType.VARINT);
      
      public static const STAT:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_player.stat","stat",4 << 3 | WireType.VARINT);
      
      public static const X_POS:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_player.x_pos","xPos",5 << 3 | WireType.VARINT);
      
      public static const Y_POS:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_player.y_pos","yPos",6 << 3 | WireType.VARINT);
      
      public static const MOVE_RAND:FieldDescriptor$TYPE_UINT32 = new FieldDescriptor$TYPE_UINT32("com.protobuf.commonproto.game_treasure_player.move_rand","moveRand",7 << 3 | WireType.VARINT);
       
      
      public var uid:uint;
      
      public var role:uint;
      
      public var pScore:uint;
      
      public var stat:uint;
      
      public var xPos:uint;
      
      public var yPos:uint;
      
      private var move_rand$field:uint;
      
      private var hasField$0:uint = 0;
      
      public function game_treasure_player()
      {
         super();
      }
      
      public function clearMoveRand() : void
      {
         this.hasField$0 &= 4294967294;
         this.move_rand$field = new uint();
      }
      
      public function get hasMoveRand() : Boolean
      {
         return (this.hasField$0 & 1) != 0;
      }
      
      public function set moveRand(param1:uint) : void
      {
         this.hasField$0 |= 1;
         this.move_rand$field = param1;
      }
      
      public function get moveRand() : uint
      {
         return this.move_rand$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc2_:* = undefined;
         WriteUtils.writeTag(param1,WireType.VARINT,1);
         WriteUtils.write$TYPE_UINT32(param1,this.uid);
         WriteUtils.writeTag(param1,WireType.VARINT,2);
         WriteUtils.write$TYPE_UINT32(param1,this.role);
         WriteUtils.writeTag(param1,WireType.VARINT,3);
         WriteUtils.write$TYPE_UINT32(param1,this.pScore);
         WriteUtils.writeTag(param1,WireType.VARINT,4);
         WriteUtils.write$TYPE_UINT32(param1,this.stat);
         WriteUtils.writeTag(param1,WireType.VARINT,5);
         WriteUtils.write$TYPE_UINT32(param1,this.xPos);
         WriteUtils.writeTag(param1,WireType.VARINT,6);
         WriteUtils.write$TYPE_UINT32(param1,this.yPos);
         if(this.hasMoveRand)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,7);
            WriteUtils.write$TYPE_UINT32(param1,this.move_rand$field);
         }
         for(_loc2_ in this)
         {
            super.writeUnknown(param1,_loc2_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc10_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         var _loc9_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc10_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc10_ >> 3)
            {
               case 1:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_player.uid cannot be set twice.");
                  }
                  _loc3_++;
                  this.uid = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 2:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_player.role cannot be set twice.");
                  }
                  _loc4_++;
                  this.role = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 3:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_player.pScore cannot be set twice.");
                  }
                  _loc5_++;
                  this.pScore = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 4:
                  if(_loc6_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_player.stat cannot be set twice.");
                  }
                  _loc6_++;
                  this.stat = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 5:
                  if(_loc7_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_player.xPos cannot be set twice.");
                  }
                  _loc7_++;
                  this.xPos = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 6:
                  if(_loc8_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_player.yPos cannot be set twice.");
                  }
                  _loc8_++;
                  this.yPos = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               case 7:
                  if(_loc9_ != 0)
                  {
                     throw new IOError("Bad data format: game_treasure_player.moveRand cannot be set twice.");
                  }
                  _loc9_++;
                  this.moveRand = ReadUtils.read$TYPE_UINT32(param1);
                  break;
               default:
                  super.readUnknown(param1,_loc10_);
                  break;
            }
         }
      }
   }
}
