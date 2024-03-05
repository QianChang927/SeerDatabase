package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.MapModel;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SwireDemonsController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID_1:uint = 1233;
      
      public static const BUFFER_ID_2:uint = 1234;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _fun:Function;
      
      private static var _taskMc:MovieClip;
       
      
      public function SwireDemonsController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 1069)
         {
            MapManager.changeMap(1069);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               openPanel();
            });
         }
         else
         {
            openPanel();
         }
      }
      
      public static function startPlay(param1:Function = null) : void
      {
         var fun:Function = param1;
         _fun = fun;
         _map = MapManager.currentMap;
         if(!isTaskDone)
         {
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_swireDemons"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
               startPreTask();
            });
         }
         else
         {
            openPanel1();
         }
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_1);
      }
      
      private static function get isTaskDone1() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_2);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            _taskMc = null;
            BufferRecordManager.setMyState(BUFFER_ID_1,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               if(_fun == null)
               {
                  openPanel1();
               }
               else
               {
                  _fun();
               }
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      public static function startPreTaskByPanel() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         if(isTaskDone1)
         {
            openPanel2();
            return;
         }
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_swireDemons",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            _taskMc = null;
            BufferRecordManager.setMyState(BUFFER_ID_2,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               if(_fun == null)
               {
                  openPanel2();
               }
               else
               {
                  _fun();
               }
            });
            KTool.showMapPlayerAndMonster();
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SwireDemonsMainPanel"));
      }
      
      private static function openPanel1() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SwireDemonsFirstOffPanel"));
      }
      
      private static function openPanel2() : void
      {
         var nowTime:Number = NaN;
         nowTime = Number(SystemTimerManager.time);
         KTool.getMultiValue([6251],function(param1:Array):void
         {
            var _loc2_:int = int((nowTime - param1[0]) / (24 * 60 * 60));
            if(_loc2_ > 3)
            {
               _loc2_ = 3;
            }
            ModuleManager.showModule(ClientConfig.getAppModule("SwireDemonsTheSecondHurdlePanel"),"正在打开...",_loc2_);
         });
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
