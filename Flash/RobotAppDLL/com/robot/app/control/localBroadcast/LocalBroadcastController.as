package com.robot.app.control.localBroadcast
{
   import com.robot.app.control.BroadcastController;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.zip.PreloadZipXMLController;
   import flash.net.URLLoader;
   import org.taomee.manager.EventManager;
   
   public class LocalBroadcastController
   {
      
      private static var _urlloader:URLLoader;
      
      private static var _auto:Array;
      
      private static var _active:Array;
       
      
      public function LocalBroadcastController()
      {
         super();
      }
      
      public static function setup() : void
      {
         PreloadZipXMLController.getXML("localBroadcast.xml",function(param1:*):void
         {
            var _loc5_:XML = null;
            var _loc6_:XML = null;
            var _loc7_:Array = null;
            var _loc8_:Array = null;
            var _loc9_:LocalBroadcastInfo = null;
            var _loc10_:Array = null;
            var _loc11_:Array = null;
            var _loc12_:LocalBroadcastInfo = null;
            var _loc2_:XML = XML(param1);
            var _loc3_:XML = _loc2_.auto[0];
            var _loc4_:XML = _loc2_.active[0];
            _auto = [];
            _active = [];
            for each(_loc5_ in _loc3_.children())
            {
               _loc7_ = String(_loc5_.@time.split("|")[0]).split(".");
               _loc8_ = String(_loc5_.@time.split("|")[1]).split(".");
               (_loc9_ = new LocalBroadcastInfo()).interval = uint(_loc5_.@interval);
               _loc9_.strat = SystemTimerManager.getTimeByDate(uint(_loc7_[0]),uint(_loc7_[1]),uint(_loc7_[2]),uint(_loc7_[3]),uint(_loc7_[4]));
               _loc9_.end = SystemTimerManager.getTimeByDate(uint(_loc8_[0]),uint(_loc8_[1]),uint(_loc8_[2]),uint(_loc8_[3]),uint(_loc8_[4]));
               _loc9_.map = uint(_loc5_.@map);
               _loc9_.module = "";
               _loc9_.txt = _loc5_.@txt;
               _auto.push(_loc9_);
            }
            for each(_loc6_ in _loc4_.children())
            {
               _loc10_ = String(_loc6_.@time.split("|")[0]).split(".");
               _loc11_ = String(_loc6_.@time.split("|")[1]).split(".");
               (_loc12_ = new LocalBroadcastInfo()).interval = uint(_loc6_.@interval);
               _loc12_.strat = SystemTimerManager.getTimeByDate(uint(_loc10_[0]),uint(_loc10_[1]),uint(_loc10_[2]),uint(_loc10_[3]),uint(_loc10_[4]));
               _loc12_.end = SystemTimerManager.getTimeByDate(uint(_loc11_[0]),uint(_loc11_[1]),uint(_loc11_[2]),uint(_loc11_[3]),uint(_loc11_[4]));
               _loc12_.map = uint(_loc6_.@map);
               _loc12_.module = _loc6_.@module;
               _loc12_.txt = _loc6_.@txt;
               _active.push(_loc12_);
            }
            EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onSysTime);
         });
      }
      
      public static function getAutoStr() : String
      {
         if(_auto != null)
         {
            return _auto[int(Math.random() * _auto.length)].txt;
         }
         return "";
      }
      
      private static function onSysTime(param1:SysTimeEvent) : void
      {
         var _loc3_:LocalBroadcastInfo = null;
         var _loc5_:LocalBroadcastInfo = null;
         var _loc6_:LocalBroadcastInfo = null;
         var _loc7_:BroadcastInfo = null;
         var _loc8_:LocalBroadcastInfo = null;
         var _loc9_:BroadcastInfo = null;
      }
   }
}
