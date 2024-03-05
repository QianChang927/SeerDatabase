package com.netease.protobuf
{
   import flash.errors.*;
   import flash.utils.*;
   import google.protobuf.MethodOptions;
   import google.protobuf.ServiceOptions;
   
   public final class CustomOption
   {
       
      
      public function CustomOption()
      {
         super();
      }
      
      public static function getMethodOptions(param1:String) : MethodOptions
      {
         var serviceClass:Class;
         var optionsBytes:ByteArray = null;
         var result:MethodOptions = null;
         var methodFullName:String = param1;
         var m:Array = methodFullName.match(/^(.+)\.[^\.]+$/);
         if(m == null)
         {
            return null;
         }
         serviceClass = Class(getDefinitionByName(m[1]));
         try
         {
            optionsBytes = serviceClass.OPTIONS_BYTES_BY_METHOD_NAME[methodFullName];
         }
         catch(e:ReferenceError)
         {
            return null;
         }
         if(optionsBytes)
         {
            result = new MethodOptions();
            result.mergeFrom(optionsBytes);
            return result;
         }
         return null;
      }
      
      public static function getServiceOptions(param1:Class) : ServiceOptions
      {
         var result:ServiceOptions;
         var optionsBytes:ByteArray = null;
         var serviceClass:Class = param1;
         try
         {
            optionsBytes = serviceClass.OPTIONS_BYTES;
         }
         catch(e:ReferenceError)
         {
            return null;
         }
         result = new ServiceOptions();
         result.mergeFrom(optionsBytes);
         return result;
      }
   }
}
