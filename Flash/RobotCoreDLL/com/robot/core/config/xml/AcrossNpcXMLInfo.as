package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import org.taomee.ds.HashMap;
   
   public class AcrossNpcXMLInfo
   {
      
      private static var _dataMap:HashMap;
      
      private static var _planetMap:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist:XMLList;
      
      private static var _fun:Function = null;
      
      private static var _urlLoader:URLLoader;
       
      
      public function AcrossNpcXMLInfo()
      {
         super();
      }
      
      private static function setup(param1:Function) : void
      {
         _fun = param1;
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/acrossNpc.xml")));
      }
      
      private static function onLoadXMLComplete(param1:Event) : void
      {
         var _loc2_:XML = null;
         _xml = XML(param1.target.data);
         _dataMap = new HashMap();
         _planetMap = new HashMap();
         _xmllist = _xml.map;
         for each(_loc2_ in _xmllist)
         {
            if(_dataMap.containsKey(_loc2_.@id.toString()) == false)
            {
               _dataMap.add(uint(_loc2_.@id),_loc2_);
               _planetMap.add(uint(_loc2_.@planetId),_loc2_);
            }
         }
         _urlLoader.removeEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader = null;
         if(_fun != null)
         {
            _fun.call();
         }
      }
      
      public static function getItemList(param1:Function) : void
      {
         var fun:Function = param1;
         if(_xmllist != null)
         {
            if(fun != null)
            {
               fun(_xmllist);
            }
         }
         else
         {
            setup(function():void
            {
               if(fun != null)
               {
                  fun(_xmllist);
               }
            });
         }
      }
      
      public static function getName(param1:uint, param2:Function) : void
      {
         var item:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_xml != null)
         {
            item = _dataMap.getValue(id.toString());
            if(item)
            {
               if(fun != null)
               {
                  fun(String(item.@name));
               }
            }
            else if(fun != null)
            {
               fun("");
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
                     fun(String(item.@name));
                  }
               }
               else if(fun != null)
               {
                  fun("");
               }
            });
         }
      }
      
      public static function getDefaultPos(param1:uint, param2:Function) : void
      {
         var item:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_xml != null)
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
               fun(MainManager.getStageCenterPoint());
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
                  fun(MainManager.getStageCenterPoint());
               }
            });
         }
      }
      
      public static function getActivityState(param1:uint, param2:Function) : void
      {
         var item:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_xml != null)
         {
            item = _dataMap.getValue(id);
            if(item)
            {
               if(fun != null)
               {
                  fun(uint(item.@haveActivity));
               }
            }
            else if(fun != null)
            {
               fun(0);
            }
         }
         else
         {
            setup(function():void
            {
               item = _dataMap.getValue(id);
               if(item)
               {
                  if(fun != null)
                  {
                     fun(uint(item.@haveActivity));
                  }
               }
               else if(fun != null)
               {
                  fun(0);
               }
            });
         }
      }
      
      public static function getPlanetId(param1:uint, param2:Function) : void
      {
         var item:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_xml != null)
         {
            item = _dataMap.getValue(id);
            if(item)
            {
               if(fun != null)
               {
                  fun(uint(item.@planetId));
               }
            }
            else if(fun != null)
            {
               fun(0);
            }
         }
         else
         {
            setup(function():void
            {
               item = _dataMap.getValue(id);
               if(item)
               {
                  if(fun != null)
                  {
                     fun(uint(item.@planetId));
                  }
               }
               else if(fun != null)
               {
                  fun(0);
               }
            });
         }
      }
      
      public static function getMapId(param1:uint, param2:Function) : void
      {
         var item:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         if(_xml != null)
         {
            item = _planetMap.getValue(id.toString());
            if(item)
            {
               if(fun != null)
               {
                  fun(uint(item.@id));
               }
            }
            else if(fun != null)
            {
               fun(0);
            }
         }
         else
         {
            setup(function():void
            {
               item = _planetMap.getValue(id.toString());
               if(item)
               {
                  if(fun != null)
                  {
                     fun(uint(item.@id));
                  }
               }
               else if(fun != null)
               {
                  fun(0);
               }
            });
         }
      }
      
      public static function getXML(param1:Function) : void
      {
         var fun:Function = param1;
         if(_xml != null)
         {
            if(fun != null)
            {
               fun(_xml);
            }
         }
         else
         {
            setup(function():void
            {
               if(fun != null)
               {
                  fun(_xml);
               }
            });
         }
      }
   }
}
