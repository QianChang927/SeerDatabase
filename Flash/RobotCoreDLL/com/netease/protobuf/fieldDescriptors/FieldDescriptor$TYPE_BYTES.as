package com.netease.protobuf.fieldDescriptors
{
   import com.netease.protobuf.FieldDescriptor;
   import com.netease.protobuf.ReadUtils;
   import com.netease.protobuf.WriteUtils;
   import com.netease.protobuf.WritingBuffer;
   import flash.utils.ByteArray;
   import flash.utils.IDataInput;
   
   public final class FieldDescriptor$TYPE_BYTES extends FieldDescriptor
   {
       
      
      public function FieldDescriptor$TYPE_BYTES(param1:String, param2:String, param3:uint)
      {
         super();
         this.fullName = param1;
         this._name = param2;
         this.tag = param3;
      }
      
      override public function get type() : Class
      {
         return ByteArray;
      }
      
      override public function readSingleField(param1:IDataInput) : *
      {
         return ReadUtils.read$TYPE_BYTES(param1);
      }
      
      override public function writeSingleField(param1:WritingBuffer, param2:*) : void
      {
         WriteUtils.write$TYPE_BYTES(param1,param2);
      }
   }
}
