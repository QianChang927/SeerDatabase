package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   
   public class NpcXMLInfo
   {
      
      private static var _xmlList:XMLList;
      
      private static var _xmlObject:XML = null;
      
      private static var _fun:Function = null;
      
      private static var _urlLoader:URLLoader;
       
      
      public function NpcXMLInfo()
      {
         super();
      }
      
      private static function setup(param1:Function) : void
      {
         _fun = param1;
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/npc.xml")));
      }
      
      private static function onLoadXMLComplete(param1:Event) : void
      {
         _xmlObject = XML(param1.target.data);
         _xmlList = _xmlObject.elements("npc");
         if(_urlLoader != null && _urlLoader.hasEventListener(Event.COMPLETE))
         {
            _urlLoader.removeEventListener(Event.COMPLETE,onLoadXMLComplete);
         }
         _urlLoader = null;
         if(_fun != null)
         {
            _fun.call();
         }
      }
      
      public static function getNpcXml(param1:uint, param2:Function) : void
      {
         var xml:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_xmlList != null)
         {
            xml = _xmlList.(@id == id.toString())[0];
            if(fun != null)
            {
               fun(xml);
            }
         }
         else
         {
            setup(function():void
            {
               xml = _xmlList.(@id == id.toString())[0];
               if(fun != null)
               {
                  fun(xml);
               }
            });
         }
      }
      
      public static function getTaskXml(param1:uint, param2:Function) : void
      {
         var xml:XML = null;
         var xmlList:XMLList = null;
         var array:Array = null;
         var x:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_xmlList != null)
         {
            xml = _xmlList.(@id == id.toString())[0];
            xmlList = xml.elements("task");
            array = [];
            for each(x in xmlList)
            {
               array.push(x);
            }
            if(fun != null)
            {
               fun(array);
            }
         }
         else
         {
            setup(function():void
            {
               var x:XML = null;
               xml = _xmlList.(@id == id.toString())[0];
               xmlList = xml.elements("task");
               array = [];
               for each(x in xmlList)
               {
                  array.push(x);
               }
               if(fun != null)
               {
                  fun(array);
               }
            });
         }
      }
   }
}
