package com.robot.app.ac
{
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   
   public class SnowController
   {
      
      private static const MAX:uint = 10;
      
      private static const mapA:Array = [];
      
      private static var _snowA:Array;
      
      private static var _timer:Timer;
       
      
      public function SnowController()
      {
         super();
      }
      
      public static function start() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapOpenHandler);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapDestroyHandler);
      }
      
      private static function onMapOpenHandler(param1:MapEvent) : void
      {
         if(mapA.indexOf(param1.mapModel.id) != -1)
         {
            addSnow();
            startT();
         }
      }
      
      public static function storyAoutoSnow() : void
      {
         addSnow();
         startT();
      }
      
      private static function onMapDestroyHandler(param1:MapEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:SingleSnow = null;
         if(_timer)
         {
            _timer.removeEventListener(TimerEvent.TIMER,onTHandler);
            _timer.stop();
            _timer = null;
         }
         if(_snowA)
         {
            _loc2_ = 0;
            while(_loc2_ < _snowA.length)
            {
               _loc3_ = _snowA[_loc2_] as SingleSnow;
               if(_loc3_)
               {
                  _loc3_.destroy();
                  _loc3_ = null;
               }
               _loc2_++;
            }
            _snowA = null;
         }
      }
      
      private static function startT() : void
      {
         _timer = new Timer(800);
         _timer.addEventListener(TimerEvent.TIMER,onTHandler);
         _timer.start();
      }
      
      private static function onTHandler(param1:TimerEvent) : void
      {
         addSnow();
      }
      
      private static function addSnow() : void
      {
         var _loc2_:SingleSnow = null;
         var _loc3_:Number = NaN;
         if(_snowA == null)
         {
            _snowA = new Array();
         }
         var _loc1_:int = 0;
         while(_loc1_ < 2)
         {
            _loc2_ = new SingleSnow();
            _loc3_ = Math.random() * 960 / 3;
            _loc2_.x = _loc3_ * 3;
            _loc2_.y = 20 - Math.random() * 50;
            LevelManager.mapLevel.addChild(_loc2_);
            _snowA.push(_loc2_);
            _loc1_++;
         }
      }
   }
}
