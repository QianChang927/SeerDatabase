package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class LanternFestivalPetController
   {
      
      private static const mapIDs:Array = [1225,1172,1167,1153,1155,103,5,1];
      
      public static var curFrame:int = -1;
      
      private static var isLogin:Boolean;
      
      private static var _taskMc:MovieClip;
       
      
      public function LanternFestivalPetController()
      {
         super();
      }
      
      public static function setup() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onComplete);
      }
      
      private static function onComplete(param1:MapEvent) : void
      {
         var e:MapEvent = param1;
         if(mapIDs.indexOf(MapManager.currentMap.id) > -1)
         {
            if(isLogin)
            {
               init();
            }
            else
            {
               KTool.getMultiValue([102478],function(param1:Array):void
               {
                  curFrame = mapIDs.indexOf(param1[0]);
                  isLogin = true;
                  init();
               });
            }
         }
      }
      
      private static function init() : void
      {
         if(mapIDs.indexOf(MapManager.currentMap.id) == curFrame)
         {
            loadLantern();
         }
      }
      
      public static function loadLantern() : void
      {
         if(Boolean(_taskMc) && Boolean(_taskMc.parent))
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getAppResource("2017/0210/LanternFestivaItem"),function(param1:MovieClip):void
         {
            _taskMc = param1;
            _taskMc.x = 233.4;
            _taskMc.y = 52.9;
            MapManager.currentMap.root.addChild(_taskMc);
            _taskMc.buttonMode = true;
            _taskMc.addEventListener(MouseEvent.CLICK,onClick);
            MapManager.addEventListener(MapEvent.MAP_DESTROY,onDestroy);
         });
      }
      
      public static function destroyLantern() : void
      {
         if(_taskMc)
         {
            DisplayUtil.removeForParent(_taskMc);
            _taskMc.removeEventListener(MouseEvent.CLICK,onClick);
            _taskMc = null;
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showAppModule("LanternFestivalPetFightPanel");
      }
      
      private static function onDestroy(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_DESTROY,onDestroy);
         if(_taskMc)
         {
            DisplayUtil.removeForParent(_taskMc);
            _taskMc.removeEventListener(MouseEvent.CLICK,onClick);
            _taskMc = null;
         }
      }
   }
}
