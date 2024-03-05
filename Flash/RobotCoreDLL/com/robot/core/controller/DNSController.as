package com.robot.core.controller
{
   import flash.events.Event;
   import flash.events.IOErrorEvent;
   import flash.events.SecurityErrorEvent;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   
   public class DNSController
   {
      
      public static var ip:String;
      
      public static var date:Date;
      
      private static const URL:String = "http://www.help.taomee.com/getip.cgi";
      
      public static var dns:String;
      
      private static var fun:Function;
       
      
      public function DNSController()
      {
         super();
      }
      
      public static function getIP(param1:Function) : void
      {
         fun = param1;
         var _loc2_:URLLoader = new URLLoader();
         _loc2_.addEventListener(Event.COMPLETE,onGetIPComplete);
         _loc2_.addEventListener(SecurityErrorEvent.SECURITY_ERROR,onIPError);
         _loc2_.addEventListener(IOErrorEvent.IO_ERROR,onIPError);
         _loc2_.load(new URLRequest(URL));
      }
      
      private static function onGetIPComplete(param1:Event) : void
      {
         var _loc2_:URLLoader = param1.currentTarget as URLLoader;
         _loc2_.removeEventListener(Event.COMPLETE,onGetIPComplete);
         _loc2_.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,onIPError);
         _loc2_.removeEventListener(IOErrorEvent.IO_ERROR,onIPError);
         ip = String(_loc2_.data);
         getDNS();
      }
      
      private static function getDNS() : void
      {
         date = new Date();
         var _loc1_:* = "http://seer_" + ip + "_" + uint(date.time / 1000) + ".trace.help.taomee.com/getdns.cgi";
         var _loc2_:URLLoader = new URLLoader();
         _loc2_.addEventListener(Event.COMPLETE,onGetDNSComplete);
         _loc2_.addEventListener(SecurityErrorEvent.SECURITY_ERROR,onDNSError);
         _loc2_.addEventListener(IOErrorEvent.IO_ERROR,onDNSError);
         _loc2_.load(new URLRequest(_loc1_));
      }
      
      private static function onGetDNSComplete(param1:Event) : void
      {
         var _loc2_:URLLoader = param1.currentTarget as URLLoader;
         _loc2_.removeEventListener(Event.COMPLETE,onGetDNSComplete);
         _loc2_.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,onDNSError);
         _loc2_.removeEventListener(IOErrorEvent.IO_ERROR,onDNSError);
         dns = String(_loc2_.data);
         fun(dns);
      }
      
      private static function onDNSError(param1:Event) : void
      {
         var _loc2_:URLLoader = param1.currentTarget as URLLoader;
         _loc2_.removeEventListener(Event.COMPLETE,onGetDNSComplete);
         _loc2_.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,onDNSError);
         _loc2_.removeEventListener(IOErrorEvent.IO_ERROR,onDNSError);
      }
      
      private static function onIPError(param1:Event) : void
      {
         var _loc2_:URLLoader = param1.currentTarget as URLLoader;
         _loc2_.removeEventListener(Event.COMPLETE,onGetIPComplete);
         _loc2_.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,onIPError);
         _loc2_.removeEventListener(IOErrorEvent.IO_ERROR,onIPError);
      }
   }
}
