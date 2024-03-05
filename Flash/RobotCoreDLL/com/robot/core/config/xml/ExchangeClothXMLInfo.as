package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   
   public class ExchangeClothXMLInfo
   {
      
      private static var xml:XML = null;
      
      private static var _fun:Function = null;
      
      private static var _urlLoader:URLLoader;
       
      
      public function ExchangeClothXMLInfo()
      {
         super();
      }
      
      private static function setup(param1:Function) : void
      {
         _fun = param1;
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/exchange.xml")));
      }
      
      private static function onLoadXMLComplete(param1:Event) : void
      {
         xml = XML(param1.target.data);
         _urlLoader.removeEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader = null;
         if(_fun != null)
         {
            _fun.call();
         }
      }
      
      public static function getExchangeIdByItemId(param1:String, param2:Function) : void
      {
         var xmllist:XMLList = null;
         var xml1:XML = null;
         var id:String = param1;
         var fun:Function = param2;
         if(xml != null)
         {
            xmllist = xml.descendants("Exchange");
            xml1 = xmllist.(@ItemID == id)[0];
            if(fun != null)
            {
               fun(uint(xml1.@ID));
            }
         }
         else
         {
            setup(function():void
            {
               xmllist = xml.descendants("Exchange");
               xml1 = xmllist.(@ItemID == id)[0];
               if(fun != null)
               {
                  fun(uint(xml1.@ID));
               }
            });
         }
      }
   }
}
