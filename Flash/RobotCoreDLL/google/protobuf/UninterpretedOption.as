package google.protobuf
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import flash.errors.IOError;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   import google.protobuf.UninterpretedOption.NamePart;
   
   public final dynamic class UninterpretedOption extends Message
   {
      
      public static const NAME:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("google.protobuf.UninterpretedOption.name","name",2 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return NamePart;
      });
      
      public static const IDENTIFIER_VALUE:FieldDescriptor$TYPE_STRING = new FieldDescriptor$TYPE_STRING("google.protobuf.UninterpretedOption.identifier_value","identifierValue",3 << 3 | WireType.LENGTH_DELIMITED);
      
      public static const POSITIVE_INT_VALUE:FieldDescriptor$TYPE_UINT64 = new FieldDescriptor$TYPE_UINT64("google.protobuf.UninterpretedOption.positive_int_value","positiveIntValue",4 << 3 | WireType.VARINT);
      
      public static const NEGATIVE_INT_VALUE:FieldDescriptor$TYPE_INT64 = new FieldDescriptor$TYPE_INT64("google.protobuf.UninterpretedOption.negative_int_value","negativeIntValue",5 << 3 | WireType.VARINT);
      
      public static const DOUBLE_VALUE:FieldDescriptor$TYPE_DOUBLE = new FieldDescriptor$TYPE_DOUBLE("google.protobuf.UninterpretedOption.double_value","doubleValue",6 << 3 | WireType.FIXED_64_BIT);
      
      public static const STRING_VALUE:FieldDescriptor$TYPE_BYTES = new FieldDescriptor$TYPE_BYTES("google.protobuf.UninterpretedOption.string_value","stringValue",7 << 3 | WireType.LENGTH_DELIMITED);
      
      public static const AGGREGATE_VALUE:FieldDescriptor$TYPE_STRING = new FieldDescriptor$TYPE_STRING("google.protobuf.UninterpretedOption.aggregate_value","aggregateValue",8 << 3 | WireType.LENGTH_DELIMITED);
       
      
      public var name:Array;
      
      private var identifier_value$field:String;
      
      private var positive_int_value$field:UInt64;
      
      private var negative_int_value$field:Int64;
      
      private var double_value$field:Number;
      
      private var hasField$0:uint = 0;
      
      private var string_value$field:ByteArray;
      
      private var aggregate_value$field:String;
      
      public function UninterpretedOption()
      {
         this.name = [];
         super();
      }
      
      public function clearIdentifierValue() : void
      {
         this.identifier_value$field = null;
      }
      
      public function get hasIdentifierValue() : Boolean
      {
         return this.identifier_value$field != null;
      }
      
      public function set identifierValue(param1:String) : void
      {
         this.identifier_value$field = param1;
      }
      
      public function get identifierValue() : String
      {
         return this.identifier_value$field;
      }
      
      public function clearPositiveIntValue() : void
      {
         this.positive_int_value$field = null;
      }
      
      public function get hasPositiveIntValue() : Boolean
      {
         return this.positive_int_value$field != null;
      }
      
      public function set positiveIntValue(param1:UInt64) : void
      {
         this.positive_int_value$field = param1;
      }
      
      public function get positiveIntValue() : UInt64
      {
         return this.positive_int_value$field;
      }
      
      public function clearNegativeIntValue() : void
      {
         this.negative_int_value$field = null;
      }
      
      public function get hasNegativeIntValue() : Boolean
      {
         return this.negative_int_value$field != null;
      }
      
      public function set negativeIntValue(param1:Int64) : void
      {
         this.negative_int_value$field = param1;
      }
      
      public function get negativeIntValue() : Int64
      {
         return this.negative_int_value$field;
      }
      
      public function clearDoubleValue() : void
      {
         this.hasField$0 &= 4294967294;
         this.double_value$field = new Number();
      }
      
      public function get hasDoubleValue() : Boolean
      {
         return (this.hasField$0 & 1) != 0;
      }
      
      public function set doubleValue(param1:Number) : void
      {
         this.hasField$0 |= 1;
         this.double_value$field = param1;
      }
      
      public function get doubleValue() : Number
      {
         return this.double_value$field;
      }
      
      public function clearStringValue() : void
      {
         this.string_value$field = null;
      }
      
      public function get hasStringValue() : Boolean
      {
         return this.string_value$field != null;
      }
      
      public function set stringValue(param1:ByteArray) : void
      {
         this.string_value$field = param1;
      }
      
      public function get stringValue() : ByteArray
      {
         return this.string_value$field;
      }
      
      public function clearAggregateValue() : void
      {
         this.aggregate_value$field = null;
      }
      
      public function get hasAggregateValue() : Boolean
      {
         return this.aggregate_value$field != null;
      }
      
      public function set aggregateValue(param1:String) : void
      {
         this.aggregate_value$field = param1;
      }
      
      public function get aggregateValue() : String
      {
         return this.aggregate_value$field;
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc3_:* = undefined;
         var _loc2_:uint = 0;
         while(_loc2_ < this.name.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,2);
            WriteUtils.write$TYPE_MESSAGE(param1,this.name[_loc2_]);
            _loc2_++;
         }
         if(this.hasIdentifierValue)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,3);
            WriteUtils.write$TYPE_STRING(param1,this.identifier_value$field);
         }
         if(this.hasPositiveIntValue)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,4);
            WriteUtils.write$TYPE_UINT64(param1,this.positive_int_value$field);
         }
         if(this.hasNegativeIntValue)
         {
            WriteUtils.writeTag(param1,WireType.VARINT,5);
            WriteUtils.write$TYPE_INT64(param1,this.negative_int_value$field);
         }
         if(this.hasDoubleValue)
         {
            WriteUtils.writeTag(param1,WireType.FIXED_64_BIT,6);
            WriteUtils.write$TYPE_DOUBLE(param1,this.double_value$field);
         }
         if(this.hasStringValue)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,7);
            WriteUtils.write$TYPE_BYTES(param1,this.string_value$field);
         }
         if(this.hasAggregateValue)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,8);
            WriteUtils.write$TYPE_STRING(param1,this.aggregate_value$field);
         }
         for(_loc3_ in this)
         {
            super.writeUnknown(param1,_loc3_);
         }
      }
      
      final override used_by_generated_code function readFromSlice(param1:IDataInput, param2:uint) : void
      {
         var _loc9_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         var _loc7_:uint = 0;
         var _loc8_:uint = 0;
         while(param1.bytesAvailable > param2)
         {
            _loc9_ = ReadUtils.read$TYPE_UINT32(param1);
            switch(_loc9_ >> 3)
            {
               case 2:
                  this.name.push(ReadUtils.read$TYPE_MESSAGE(param1,new NamePart()));
                  break;
               case 3:
                  if(_loc3_ != 0)
                  {
                     throw new IOError("Bad data format: UninterpretedOption.identifierValue cannot be set twice.");
                  }
                  _loc3_++;
                  this.identifierValue = ReadUtils.read$TYPE_STRING(param1);
                  break;
               case 4:
                  if(_loc4_ != 0)
                  {
                     throw new IOError("Bad data format: UninterpretedOption.positiveIntValue cannot be set twice.");
                  }
                  _loc4_++;
                  this.positiveIntValue = ReadUtils.read$TYPE_UINT64(param1);
                  break;
               case 5:
                  if(_loc5_ != 0)
                  {
                     throw new IOError("Bad data format: UninterpretedOption.negativeIntValue cannot be set twice.");
                  }
                  _loc5_++;
                  this.negativeIntValue = ReadUtils.read$TYPE_INT64(param1);
                  break;
               case 6:
                  if(_loc6_ != 0)
                  {
                     throw new IOError("Bad data format: UninterpretedOption.doubleValue cannot be set twice.");
                  }
                  _loc6_++;
                  this.doubleValue = ReadUtils.read$TYPE_DOUBLE(param1);
                  break;
               case 7:
                  if(_loc7_ != 0)
                  {
                     throw new IOError("Bad data format: UninterpretedOption.stringValue cannot be set twice.");
                  }
                  _loc7_++;
                  this.stringValue = ReadUtils.read$TYPE_BYTES(param1);
                  break;
               case 8:
                  if(_loc8_ != 0)
                  {
                     throw new IOError("Bad data format: UninterpretedOption.aggregateValue cannot be set twice.");
                  }
                  _loc8_++;
                  this.aggregateValue = ReadUtils.read$TYPE_STRING(param1);
                  break;
               default:
                  super.readUnknown(param1,_loc9_);
                  break;
            }
         }
      }
   }
}
