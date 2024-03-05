package com.robot.app.sptStar
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LeiyiController
   {
      
      private static var _length:uint = 10;
      
      private static var _mapIds:Array = [32];
      
      private static var _point:Point = new Point(740,180);
      
      public static var _petMc:MovieClip;
       
      
      public function LeiyiController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapOpenHandler);
         MapManager.addEventListener(MapEvent.MAP_DESTROY,onMapDestroyHandler);
      }
      
      private static function onMapOpenHandler(param1:MapEvent) : void
      {
         var _loc2_:MapModel = param1.mapModel;
         if(_mapIds.indexOf(_loc2_.id) != -1)
         {
            if(isRightDate())
            {
               if(!_petMc)
               {
                  loadPet();
               }
               else
               {
                  addPet();
               }
            }
         }
      }
      
      private static function onMapDestroyHandler(param1:MapEvent) : void
      {
         hide();
      }
      
      public static function hide() : void
      {
         if(_petMc)
         {
            ToolTipManager.remove(_petMc);
            DisplayUtil.removeForParent(_petMc);
            _petMc.removeEventListener(MouseEvent.CLICK,onClickHandler);
         }
      }
      
      private static function loadPet() : void
      {
         ResourceManager.getResource(ClientConfig.getFullMovie("leiyi"),onComHandler,"LeiyiPet_Mc");
      }
      
      private static function onComHandler(param1:MovieClip) : void
      {
         _petMc = param1 as MovieClip;
         addPet();
      }
      
      public static function addPet() : void
      {
         MapManager.currentMap.depthLevel.addChild(_petMc);
         _petMc.play();
         _petMc.buttonMode = true;
         _petMc.x = _point.x;
         _petMc.y = _point.y;
         ToolTipManager.add(_petMc,"雷伊");
         _petMc.addEventListener(MouseEvent.CLICK,onClickHandler);
      }
      
      private static function onClickHandler(param1:MouseEvent) : void
      {
         if(isRightDate())
         {
            FightManager.fightWithBoss("雷伊",6,true);
         }
         else
         {
            Alarm.show("雷伊此时不接受挑战哦！");
         }
      }
      
      private static function isRightDate() : Boolean
      {
         var _loc1_:Date = SystemTimerManager.sysDate;
         if(_loc1_.getMinutes() <= _length)
         {
            return true;
         }
         return true;
      }
   }
}
