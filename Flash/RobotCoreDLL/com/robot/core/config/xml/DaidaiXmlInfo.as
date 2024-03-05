package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import org.taomee.ds.HashMap;
   
   public class DaidaiXmlInfo
   {
      
      private static var _dataMap:HashMap;
      
      private static var _xmllist:XMLList;
      
      private static var _xmlObject:XML = null;
      
      private static var _fun:Function = null;
      
      private static var _urlLoader:URLLoader;
       
      
      public function DaidaiXmlInfo()
      {
         super();
      }
      
      private static function setup(param1:Function) : void
      {
         _fun = param1;
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/daidaiPos.xml")));
      }
      
      public static function getCountId(param1:uint, param2:Function) : void
      {
         var item:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_dataMap != null)
         {
            item = _dataMap.getValue(id.toString());
            if(item)
            {
               if(fun != null)
               {
                  fun(uint(item.@cntId));
               }
            }
            else if(fun != null)
            {
               fun(null);
            }
         }
         else
         {
            setup(function():void
            {
               item = _dataMap.getValue(id.toString());
               if(item)
               {
                  if(fun != null)
                  {
                     fun(uint(item.@cntId));
                  }
               }
               else if(fun != null)
               {
                  fun(null);
               }
            });
         }
      }
      
      private static function onLoadXMLComplete(param1:Event) : void
      {
         var _loc2_:XML = null;
         _xmlObject = XML(param1.target.data);
         _dataMap = new HashMap();
         _xmllist = _xmlObject.map;
         for each(_loc2_ in _xmllist)
         {
            if(_dataMap.containsKey(_loc2_.@id.toString()) == false)
            {
               _dataMap.add(uint(_loc2_.@id),_loc2_);
            }
         }
         _urlLoader.removeEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader = null;
         if(_fun != null)
         {
            _fun.call();
         }
      }
      
      public static function getDefaultPos(param1:uint, param2:Function) : void
      {
         var item:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_dataMap != null)
         {
            item = _dataMap.getValue(id.toString());
            if(item)
            {
               if(fun != null)
               {
                  fun(new Point(int(item.@x),int(item.@y)));
               }
            }
            else if(fun != null)
            {
               fun(null);
            }
         }
         else
         {
            setup(function():void
            {
               item = _dataMap.getValue(id.toString());
               if(item)
               {
                  if(fun != null)
                  {
                     fun(new Point(int(item.@x),int(item.@y)));
                  }
               }
               else if(fun != null)
               {
                  fun(null);
               }
            });
         }
      }
      
      public static function getType(param1:uint, param2:Function) : void
      {
         var item:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_dataMap != null)
         {
            item = _dataMap.getValue(id.toString());
            if(Boolean(item) && item.@type != null)
            {
               if(fun != null)
               {
                  fun(uint(item.@type));
               }
            }
            else if(fun != null)
            {
               fun(null);
            }
         }
         else
         {
            setup(function():void
            {
               item = _dataMap.getValue(id.toString());
               if(Boolean(item) && item.@type != null)
               {
                  if(fun != null)
                  {
                     fun(uint(item.@type));
                  }
               }
               else if(fun != null)
               {
                  fun(null);
               }
            });
         }
      }
   }
}
