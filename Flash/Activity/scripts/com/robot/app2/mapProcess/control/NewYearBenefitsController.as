package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcController;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewYearBenefitsController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _movie:MovieClip;
      
      private static var _board:MovieClip;
      
      private static var _index:int;
      
      private static var _arrow:MovieClip;
      
      private static const FOREVER_CALLED_INDEX:int = 1604;
       
      
      public function NewYearBenefitsController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         loadMovie(function():void
         {
            KTool.getForeverNum(FOREVER_CALLED_INDEX,function(param1:uint):void
            {
               _index = param1;
               _movie["mcMovie"].gotoAndStop(1);
               _movie["mcPet"].gotoAndStop(_index + 1);
               _movie.buttonMode = true;
               _movie.addEventListener(MouseEvent.CLICK,onClickPet);
               _map.conLevel.addChild(_movie);
            });
         });
         ResourceManager.getResource(ClientConfig.getActiveUrl("new_year_benefits_billboard"),function(param1:MovieClip):void
         {
            _board = param1;
            _board.buttonMode = true;
            _board.addEventListener(MouseEvent.CLICK,onClickBoard);
            _map.conLevel.addChild(_board);
         });
      }
      
      public static function refreshAltar(param1:int) : void
      {
         var index:int = param1;
         _index = index;
         loadMovie(function():void
         {
            if(!_map.conLevel.contains(_movie))
            {
               _map.conLevel.addChild(_movie);
            }
            if(index == 0)
            {
               arrow = null;
               _movie["mcMovie"].gotoAndStop(1);
               _movie["mcPet"].gotoAndStop(1);
               return;
            }
            _movie["mcPet"].visible = false;
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            NpcController.npcVisible = false;
            AnimateManager.playMcAnimate(_movie["mcMovie"],index + 1,"mc" + (index + 1),function():void
            {
               _movie["mcMovie"].gotoAndStop(1);
               _movie["mcPet"].gotoAndStop(index + 1);
               _movie["mcPet"].visible = true;
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               NpcController.npcVisible = true;
               openTips(index);
            });
         });
      }
      
      public static function get movie() : MovieClip
      {
         return _movie;
      }
      
      public static function get arrow() : MovieClip
      {
         return _arrow;
      }
      
      public static function set arrow(param1:MovieClip) : void
      {
         if(_arrow)
         {
            DisplayUtil.removeForParent(arrow);
         }
         _arrow = param1;
      }
      
      public static function destroy() : void
      {
         _movie.removeEventListener(MouseEvent.CLICK,onClickPet);
         _board.removeEventListener(MouseEvent.CLICK,onClickBoard);
         _board = null;
         _movie = null;
         _map = null;
      }
      
      private static function loadMovie(param1:Function) : void
      {
         var fun:Function = param1;
         if(_movie == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("new_year_benefits_movie"),function(param1:MovieClip):void
            {
               _movie = param1;
               fun();
            });
         }
         else
         {
            fun();
         }
      }
      
      private static function openTips(param1:int) : void
      {
         ModuleManager.showAppModule("NewYearBenefitsTipsPanel",{"index":param1});
      }
      
      private static function onClickPet(param1:MouseEvent) : void
      {
         if(_index == 0)
         {
            ModuleManager.showAppModule("NewYearBenefitsMainPanel");
            return;
         }
         arrow = null;
         openTips(_index);
      }
      
      private static function onClickBoard(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("NewYearBenefitsBillboardPanel");
      }
   }
}
