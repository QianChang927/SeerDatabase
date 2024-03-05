package google.protobuf
{
   import com.netease.protobuf.*;
   import com.netease.protobuf.fieldDescriptors.*;
   import flash.utils.IDataInput;
   
   public final dynamic class ServiceOptions extends Message
   {
      
      public static const extensionReadFunctions:Array = [];
      
      public static const UNINTERPRETED_OPTION:RepeatedFieldDescriptor$TYPE_MESSAGE = new RepeatedFieldDescriptor$TYPE_MESSAGE("google.protobuf.ServiceOptions.uninterpreted_option","uninterpretedOption",999 << 3 | WireType.LENGTH_DELIMITED,function():Class
      {
         return UninterpretedOption;
      });
       
      
      public var uninterpretedOption:Array;
      
      public function ServiceOptions()
      {
         this.uninterpretedOption = [];
         super();
      }
      
      final override used_by_generated_code function writeToBuffer(param1:WritingBuffer) : void
      {
         var _loc3_:* = undefined;
         var _loc2_:uint = 0;
         while(_loc2_ < this.uninterpretedOption.length)
         {
            WriteUtils.writeTag(param1,WireType.LENGTH_DELIMITED,999);
            WriteUtils.write$TYPE_MESSAGE(param1,this.uninterpretedOption[_loc2_]);
            _loc2_++;
         }
         for(_loc3_ in this)
         {
            super.writeExtensionOrUnknown(param1,_loc3_);
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
               case 999:
                  this.uninterpretedOption.push(ReadUtils.read$TYPE_MESSAGE(param1,new UninterpretedOption()));
                  break;
               default:
                  super.readExtensionOrUnknown(extensionReadFunctions,param1,_loc3_);
                  break;
            }
         }
      }
   }
}
