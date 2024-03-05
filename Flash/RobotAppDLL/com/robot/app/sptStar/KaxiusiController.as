package com.robot.app.sptStar
{
   import com.robot.app.spt.FightBossController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.SysTimeEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class KaxiusiController
   {
      
      private static var _pet:MovieClip;
      
      private static var _message:Boolean = false;
      
      private static var _map:Array = [484];
      
      private static var _point:Array = [new Point(532,200)];
       
      
      public function KaxiusiController()
      {
         super();
      }
      
      public static function get pet() : MovieClip
      {
         return _pet;
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapOpen);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapDestroy);
         EventManager.addEventListener(SysTimeEvent.RECEIVE_SYSTEM_TIME,onSysTime);
      }
      
      private static function onMapOpen(param1:MapEvent) : void
      {
         var id:int = 0;
         var e:MapEvent = param1;
         id = int(setTimeout(function():void
         {
            clearTimeout(id);
            start();
         },3000));
      }
      
      private static function onMapDestroy(param1:MapEvent) : void
      {
         if(_pet)
         {
            ToolTipManager.remove(_pet);
            _pet.removeEventListener(MouseEvent.CLICK,onClick);
            _pet = null;
         }
      }
      
      private static function onSysTime(param1:SysTimeEvent) : void
      {
         start();
      }
      
      private static function isRightMap() : Boolean
      {
         if(MapManager.currentMap == null)
         {
            return false;
         }
         if(_map.indexOf(MapManager.currentMap.id) != -1)
         {
            return true;
         }
         return false;
      }
      
      private static function isRightDate() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.getUTCHours() + 8 == 12)
         {
            return true;
         }
         if(_loc1_.getUTCHours() + 8 == 19)
         {
            return true;
         }
         return true;
      }
      
      private static function start() : void
      {
         if(isRightMap() && isRightDate())
         {
            loadPet();
         }
      }
      
      private static function loadPet() : void
      {
         if(_pet)
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getFullMovie("kaxiusi"),function(param1:DisplayObject):void
         {
            var o:DisplayObject = param1;
            _pet = o as MovieClip;
            MapManager.currentMap.controlLevel.addChild(_pet);
            MapManager.currentMap.controlLevel.setChildIndex(_pet,0);
            _pet.x = _point[0].x;
            _pet.y = _point[0].y;
            _pet.mouseEnabled = false;
            _pet.mouseChildren = false;
            ToolTipManager.add(_pet,"卡修斯");
            _pet.buttonMode = true;
            _pet.addEventListener(MouseEvent.CLICK,onClick);
            AnimateManager.playMcAnimate(_pet,1,"mc",function():void
            {
               if(_pet)
               {
                  _pet.gotoAndStop(2);
                  _pet.mouseEnabled = true;
                  _pet.mouseChildren = true;
               }
            });
         },"kaxiusi");
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         if(isRightDate())
         {
            FightBossController.fightBoss("卡修斯",1);
         }
         else
         {
            Alarm.show("卡修斯此时不接受挑战哦！");
         }
      }
   }
}
