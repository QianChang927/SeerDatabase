package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import org.taomee.ds.HashMap;
   
   public class RefractiveMagicWeatherXMLInfo
   {
      
      private static var _dataMap:HashMap;
      
      private static var _xmlObject:XML;
      
      private static var _fun:Function;
      
      private static var _urlLoader:URLLoader;
       
      
      public function RefractiveMagicWeatherXMLInfo()
      {
         super();
      }
      
      private static function setup(param1:Function) : void
      {
         _fun = param1;
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/refractiveMagicWeather.xml")));
      }
      
      private static function onLoadXMLComplete(param1:Event) : void
      {
         var _loc3_:XML = null;
         _xmlObject = XML(param1.target.data);
         _dataMap = new HashMap();
         var _loc2_:XMLList = _xmlObject.elements("character");
         for each(_loc3_ in _loc2_)
         {
            if(_dataMap.containsKey(_loc3_.@id.toString()) == false)
            {
               _dataMap.add(uint(_loc3_.@id),_loc3_);
            }
         }
         _urlLoader.removeEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader = null;
         if(_fun != null)
         {
            _fun.call();
         }
      }
      
      public static function getWeatherId(param1:uint, param2:uint, param3:Function) : void
      {
         var rtnArray:Array = null;
         var item:XML = null;
         var xl:XMLList = null;
         var weatherXml:XML = null;
         var startRound:uint = 0;
         var endRound:uint = 0;
         var chracterId:uint = param1;
         var currentRound:uint = param2;
         var fun:Function = param3;
         rtnArray = [];
         if(_xmlObject != null)
         {
            item = _dataMap.getValue(chracterId);
            xl = item.elements("weather");
            for each(weatherXml in xl)
            {
               startRound = uint(weatherXml.@startRound);
               endRound = uint(weatherXml.@endRound);
               if(currentRound >= startRound && currentRound <= endRound)
               {
                  rtnArray.push(uint(weatherXml.@id));
                  rtnArray.push(String(weatherXml.@name));
                  rtnArray.push(String(weatherXml.@describe));
                  break;
               }
            }
            if(fun != null)
            {
               fun(rtnArray);
            }
         }
         else
         {
            setup(function():void
            {
               var _loc1_:XML = null;
               var _loc2_:uint = 0;
               var _loc3_:uint = 0;
               item = _dataMap.getValue(chracterId);
               xl = item.elements("weather");
               for each(_loc1_ in xl)
               {
                  _loc2_ = uint(_loc1_.@startRound);
                  _loc3_ = uint(_loc1_.@endRound);
                  if(currentRound >= _loc2_ && currentRound <= _loc3_)
                  {
                     rtnArray.push(uint(_loc1_.@id));
                     rtnArray.push(String(_loc1_.@name));
                     rtnArray.push(String(_loc1_.@describe));
                     break;
                  }
               }
               if(fun != null)
               {
                  fun(rtnArray);
               }
            });
         }
      }
   }
}
