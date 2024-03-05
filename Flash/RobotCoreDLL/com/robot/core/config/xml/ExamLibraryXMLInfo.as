package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import org.taomee.ds.HashMap;
   
   public class ExamLibraryXMLInfo
   {
      
      private static var _dataMap_1:HashMap;
      
      private static var _dataMap_2:HashMap;
      
      private static var _dataMap_3:HashMap;
      
      private static var _xml:XML;
      
      private static var _xmllist_1:XMLList;
      
      private static var _xmllist_2:XMLList;
      
      private static var _xmllist_3:XMLList;
      
      private static var _fun:Function = null;
      
      private static var _urlLoader:URLLoader;
       
      
      public function ExamLibraryXMLInfo()
      {
         super();
      }
      
      private static function setup(param1:Function) : void
      {
         _fun = param1;
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/examLibrary.xml")));
      }
      
      private static function onLoadXMLComplete(param1:Event) : void
      {
         var _loc2_:XML = null;
         _xml = XML(param1.target.data);
         _xmllist_1 = _xml.elements("day")[0].exam;
         _xmllist_2 = _xml.elements("day")[1].exam;
         _xmllist_3 = _xml.elements("day")[2].exam;
         _dataMap_1 = new HashMap();
         _dataMap_2 = new HashMap();
         _dataMap_3 = new HashMap();
         for each(_loc2_ in _xmllist_1)
         {
            if(_dataMap_1.containsKey(_loc2_.@id.toString()) == false)
            {
               _dataMap_1.add(uint(_loc2_.@id),_loc2_);
            }
         }
         for each(_loc2_ in _xmllist_2)
         {
            if(_dataMap_2.containsKey(_loc2_.@id.toString()) == false)
            {
               _dataMap_2.add(uint(_loc2_.@id),_loc2_);
            }
         }
         for each(_loc2_ in _xmllist_3)
         {
            if(_dataMap_3.containsKey(_loc2_.@id.toString()) == false)
            {
               _dataMap_3.add(uint(_loc2_.@id),_loc2_);
            }
         }
         _urlLoader.removeEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader = null;
         if(_fun != null)
         {
            _fun.call();
         }
      }
      
      public static function getExamArray(param1:uint, param2:Function) : void
      {
         var tempArr:Array = null;
         var item:XML = null;
         var n:uint = param1;
         var fun:Function = param2;
         tempArr = new Array();
         if(_xml != null)
         {
            if(n == 1)
            {
               for each(item in _xmllist_1)
               {
                  tempArr.push(item.@id.toString());
               }
               if(fun != null)
               {
                  fun(tempArr);
               }
            }
            else if(n == 2)
            {
               for each(item in _xmllist_2)
               {
                  tempArr.push(item.@id.toString());
               }
               if(fun != null)
               {
                  fun(tempArr);
               }
            }
            else if(n == 3)
            {
               for each(item in _xmllist_3)
               {
                  tempArr.push(item.@id.toString());
               }
               if(fun != null)
               {
                  fun(tempArr);
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
               if(n == 1)
               {
                  for each(item in _xmllist_1)
                  {
                     tempArr.push(item.@id.toString());
                  }
                  if(fun != null)
                  {
                     fun(tempArr);
                  }
               }
               else if(n == 2)
               {
                  for each(item in _xmllist_2)
                  {
                     tempArr.push(item.@id.toString());
                  }
                  if(fun != null)
                  {
                     fun(tempArr);
                  }
               }
               else if(n == 3)
               {
                  for each(item in _xmllist_3)
                  {
                     tempArr.push(item.@id.toString());
                  }
                  if(fun != null)
                  {
                     fun(tempArr);
                  }
               }
               else if(fun != null)
               {
                  fun(null);
               }
            });
         }
      }
      
      public static function getExamItemArr(param1:uint, param2:uint, param3:Function) : void
      {
         var tempArr1:Array = null;
         var item:XML = null;
         var n:uint = param1;
         var id:uint = param2;
         var fun:Function = param3;
         tempArr1 = new Array();
         if(_xml != null)
         {
            if(n == 1)
            {
               item = _dataMap_1.getValue(id.toString());
               tempArr1.push(String(item.@answer));
               tempArr1.push(String(item.elements("choice")[0].@content));
               tempArr1.push(String(item.elements("choice")[1].@content));
               tempArr1.push(String(item.@correct));
               if(fun != null)
               {
                  fun(tempArr1);
               }
            }
            else if(n == 2)
            {
               item = _dataMap_2.getValue(id.toString());
               tempArr1.push(String(item.@answer));
               tempArr1.push(String(item.elements("choice")[0].@content));
               tempArr1.push(String(item.elements("choice")[1].@content));
               tempArr1.push(String(item.@correct));
               if(fun != null)
               {
                  fun(tempArr1);
               }
            }
            else if(n == 3)
            {
               item = _dataMap_3.getValue(id.toString());
               tempArr1.push(String(item.@answer.toString()));
               tempArr1.push(String(item.elements("choice")[0].@content.toString()));
               tempArr1.push(String(item.elements("choice")[1].@content.toString()));
               tempArr1.push(String(item.@correct.toString()));
               if(fun != null)
               {
                  fun(tempArr1);
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
               if(n == 1)
               {
                  item = _dataMap_1.getValue(id.toString());
                  tempArr1.push(String(item.@answer));
                  tempArr1.push(String(item.elements("choice")[0].@content));
                  tempArr1.push(String(item.elements("choice")[1].@content));
                  tempArr1.push(String(item.@correct));
                  if(fun != null)
                  {
                     fun(tempArr1);
                  }
               }
               else if(n == 2)
               {
                  item = _dataMap_2.getValue(id.toString());
                  tempArr1.push(String(item.@answer));
                  tempArr1.push(String(item.elements("choice")[0].@content));
                  tempArr1.push(String(item.elements("choice")[1].@content));
                  tempArr1.push(String(item.@correct));
                  if(fun != null)
                  {
                     fun(tempArr1);
                  }
               }
               else if(n == 3)
               {
                  item = _dataMap_3.getValue(id.toString());
                  tempArr1.push(String(item.@answer.toString()));
                  tempArr1.push(String(item.elements("choice")[0].@content.toString()));
                  tempArr1.push(String(item.elements("choice")[1].@content.toString()));
                  tempArr1.push(String(item.@correct.toString()));
                  if(fun != null)
                  {
                     fun(tempArr1);
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
