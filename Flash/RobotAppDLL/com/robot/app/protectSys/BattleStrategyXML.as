package com.robot.app.protectSys
{
   import com.robot.core.config.ClientConfig;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.TimerEvent;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import flash.utils.Timer;
   
   public class BattleStrategyXML
   {
      
      private static var _adTimer:Timer;
      
      private static var _urlloader:URLLoader;
      
      private static var _index:int;
      
      private static var _adArray:Array;
      
      private static var _ui:MovieClip;
       
      
      public function BattleStrategyXML()
      {
         super();
      }
      
      public static function load(param1:MovieClip) : void
      {
         _ui = param1;
         _urlloader = new URLLoader();
         _urlloader.addEventListener(Event.COMPLETE,onLoadXML);
         _urlloader.load(new URLRequest(ClientConfig.getResPath("xml/battleStrategy.xml")));
         _adTimer = new Timer(4000);
         _adTimer.addEventListener(TimerEvent.TIMER,onAdTimer);
      }
      
      public static function getOne(param1:MovieClip) : void
      {
         _ui = param1;
         _urlloader = new URLLoader();
         _urlloader.addEventListener(Event.COMPLETE,onLoadOneXML);
         _urlloader.load(new URLRequest(ClientConfig.getResPath("xml/battleStrategy.xml")));
      }
      
      private static function onLoadOneXML(param1:Event) : void
      {
         var _loc6_:XML = null;
         var _loc2_:XML = XML(param1.target.data);
         var _loc3_:XMLList = _loc2_.children();
         _adArray = [];
         var _loc4_:uint = uint(_loc3_.length());
         var _loc5_:uint = 0;
         while(_loc5_ < _loc4_)
         {
            _loc6_ = _loc3_[_loc5_];
            _adArray.push(String(_loc6_.@txt));
            _loc5_++;
         }
         _index = Math.floor(Math.random() * _adArray.length);
         _ui["adTxt"].text = _adArray[_index];
         if(_urlloader)
         {
            _urlloader.close();
            _urlloader.removeEventListener(Event.COMPLETE,onLoadXML);
            _urlloader = null;
         }
      }
      
      private static function onLoadXML(param1:Event) : void
      {
         var _loc6_:XML = null;
         var _loc2_:XML = XML(param1.target.data);
         var _loc3_:XMLList = _loc2_.children();
         _adArray = [];
         var _loc4_:uint = uint(_loc3_.length());
         var _loc5_:uint = 0;
         while(_loc5_ < _loc4_)
         {
            _loc6_ = _loc3_[_loc5_];
            _adArray.push(String(_loc6_.@txt));
            _loc5_++;
         }
         _index = Math.floor(Math.random() * _adArray.length);
         onAdTimer(null);
         _adTimer.start();
      }
      
      private static function onAdTimer(param1:TimerEvent) : void
      {
         var str:String;
         var event:TimerEvent = param1;
         var getNext:Function = function():int
         {
            var _loc1_:int = Math.floor(Math.random() * _adArray.length);
            if(_loc1_ != _index)
            {
               return _loc1_;
            }
            return getNext();
         };
         if(_index >= _adArray.length)
         {
            _index = 0;
         }
         str = String(_adArray[_index]);
         if(str != null)
         {
            _ui["adTxt"].text = str;
         }
         else
         {
            _ui["adTxt"].text = "";
         }
         _index = getNext();
      }
      
      public static function unLoad() : void
      {
         if(_adTimer)
         {
            _adTimer.stop();
            _adTimer.removeEventListener(TimerEvent.TIMER,onAdTimer);
            _adTimer = null;
         }
         if(_ui)
         {
            _ui = null;
         }
         if(_urlloader)
         {
            _urlloader.close();
            _urlloader.removeEventListener(Event.COMPLETE,onLoadXML);
            _urlloader = null;
         }
      }
   }
}
