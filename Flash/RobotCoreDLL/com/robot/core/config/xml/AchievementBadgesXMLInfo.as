package com.robot.core.config.xml
{
   import com.robot.core.config.ClientConfig;
   import flash.events.Event;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   
   public class AchievementBadgesXMLInfo
   {
      
      private static var xml:XML;
      
      private static var _fun:Function = null;
      
      private static var _urlLoader:URLLoader;
       
      
      public function AchievementBadgesXMLInfo()
      {
         super();
      }
      
      public static function setup(param1:Function) : void
      {
         _fun = param1;
         _urlLoader = new URLLoader();
         _urlLoader.addEventListener(Event.COMPLETE,onLoadXMLComplete);
         _urlLoader.load(new URLRequest(ClientConfig.getResPath("xml/achievement_badge.xml")));
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
      
      public static function getBadgeInfo(param1:uint, param2:Function) : void
      {
         var arr:Array = null;
         var x:XML = null;
         var xmlList:XMLList = null;
         var x2:XML = null;
         var id:uint = param1;
         var fun:Function = param2;
         arr = [];
         if(xml != null)
         {
            x = getXml(id);
            xmlList = x.descendants("Achievement");
            for each(x2 in xmlList)
            {
               arr.push([x2.@ID,x2.@BranchID,x2.@RuleID]);
            }
            if(fun != null)
            {
               fun(arr);
            }
         }
         else
         {
            setup(function():void
            {
               var _loc1_:XML = null;
               x = getXml(id);
               xmlList = x.descendants("Achievement");
               for each(_loc1_ in xmlList)
               {
                  arr.push([_loc1_.@ID,_loc1_.@BranchID,_loc1_.@RuleID]);
               }
               if(fun != null)
               {
                  fun(arr);
               }
            });
         }
      }
      
      private static function getXml(param1:uint) : XML
      {
         var _loc3_:XML = null;
         var _loc4_:XML = null;
         var _loc2_:XMLList = xml.descendants("Badge");
         for each(_loc4_ in _loc2_)
         {
            if(_loc4_.@ID == param1.toString())
            {
               _loc3_ = _loc4_;
               break;
            }
         }
         return _loc3_;
      }
   }
}
