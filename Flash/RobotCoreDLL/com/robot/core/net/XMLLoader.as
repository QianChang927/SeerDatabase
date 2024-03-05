package com.robot.core.net
{
   import com.robot.core.event.XMLEvent;
   import com.robot.core.ui.alert.Alarm;
   import flash.errors.IOError;
   import flash.events.Event;
   import flash.events.EventDispatcher;
   import flash.events.IOErrorEvent;
   import flash.events.ProgressEvent;
   import flash.events.SecurityErrorEvent;
   import flash.net.URLRequest;
   import flash.net.URLStream;
   import flash.utils.ByteArray;
   
   public class XMLLoader extends EventDispatcher
   {
       
      
      private var _xmlloader:URLStream;
      
      private var _isCompress:Boolean;
      
      private var _url:String;
      
      public function XMLLoader()
      {
         super();
         this._xmlloader = new URLStream();
         this._xmlloader.addEventListener(Event.COMPLETE,this.onComplete);
         this._xmlloader.addEventListener(Event.OPEN,this.onOpen);
         this._xmlloader.addEventListener(ProgressEvent.PROGRESS,this.onProgress);
         this._xmlloader.addEventListener(IOErrorEvent.IO_ERROR,this.onIoError);
         this._xmlloader.addEventListener(SecurityErrorEvent.SECURITY_ERROR,this.onSecurityError);
      }
      
      public function load(param1:String, param2:Boolean = false) : void
      {
         this._url = param1;
         this._xmlloader.load(new URLRequest(param1));
         this._isCompress = param2;
      }
      
      public function close() : void
      {
         if(this._xmlloader.connected)
         {
            this._xmlloader.close();
         }
      }
      
      public function destroy() : void
      {
         this.close();
         this._xmlloader.removeEventListener(Event.COMPLETE,this.onComplete);
         this._xmlloader.removeEventListener(Event.OPEN,this.onOpen);
         this._xmlloader.removeEventListener(ProgressEvent.PROGRESS,this.onProgress);
         this._xmlloader.removeEventListener(IOErrorEvent.IO_ERROR,this.onIoError);
         this._xmlloader.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,this.onSecurityError);
         this._xmlloader = null;
      }
      
      private function onOpen(param1:Event) : void
      {
         dispatchEvent(param1);
      }
      
      private function onComplete(param1:Event) : void
      {
         var e:Event = param1;
         var data:ByteArray = new ByteArray();
         this._xmlloader.readBytes(data);
         if(this._isCompress)
         {
            data.uncompress();
         }
         try
         {
            dispatchEvent(new XMLEvent(XMLEvent.COMPLETE,XML(data.readUTFBytes(data.bytesAvailable))));
         }
         catch(error:Error)
         {
            Alarm.show("url xml 格式不对 " + _url);
         }
      }
      
      private function onProgress(param1:ProgressEvent) : void
      {
         dispatchEvent(param1);
      }
      
      private function onIoError(param1:IOErrorEvent) : void
      {
         dispatchEvent(param1);
         throw new IOError(param1.text);
      }
      
      private function onSecurityError(param1:SecurityErrorEvent) : void
      {
         dispatchEvent(param1);
         throw new SecurityError(param1.text);
      }
   }
}
