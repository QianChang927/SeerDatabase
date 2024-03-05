package com.netease.protobuf
{
   import flash.events.*;
   import flash.net.*;
   import flash.utils.*;
   
   public final class SimpleWebRPC
   {
      
      private static const REF:Dictionary = new Dictionary();
       
      
      private var urlPrefix:String;
      
      public function SimpleWebRPC(param1:String)
      {
         super();
         this.urlPrefix = param1;
      }
      
      public function send(param1:String, param2:Message, param3:Function, param4:Class) : void
      {
         var request:URLRequest;
         var requestContent:ByteArray;
         var loader:URLLoader = null;
         var qualifiedMethodName:String = param1;
         var requestMessage:Message = param2;
         var rpcResult:Function = param3;
         var responseClass:Class = param4;
         var errorEventHandler:Function = function(param1:Event):void
         {
            delete REF[loader];
            rpcResult(param1);
         };
         loader = new URLLoader();
         REF[loader] = true;
         loader.dataFormat = URLLoaderDataFormat.BINARY;
         loader.addEventListener(Event.COMPLETE,function(param1:Event):void
         {
            delete REF[loader];
            var _loc2_:Message = new responseClass();
            _loc2_.mergeFrom(loader.data);
            rpcResult(_loc2_);
         });
         loader.addEventListener(IOErrorEvent.IO_ERROR,errorEventHandler);
         loader.addEventListener(SecurityErrorEvent.SECURITY_ERROR,errorEventHandler);
         request = new URLRequest(this.urlPrefix + qualifiedMethodName.replace(/\./g,"/").replace(/^((com|org|net)\/\w+\/\w+\/)?(.*)$/,"$3"));
         requestContent = new ByteArray();
         requestMessage.writeTo(requestContent);
         if(requestContent.length != 0)
         {
            request.data = requestContent;
         }
         request.contentType = "application/x-protobuf";
         request.method = URLRequestMethod.POST;
         loader.load(request);
      }
   }
}
