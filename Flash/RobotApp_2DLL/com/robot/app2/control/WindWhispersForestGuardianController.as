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
   import com.robot.core.mode.MapModel;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class WindWhispersForestGuardianController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID_1:uint = 1283;
      
      public static const BUFFER_ID_2:uint = 1284;
      
      public static const BUFFER_ID_3:uint = 1285;
      
      private static var _map:MapModel;
      
      private static var _appNameArr:Array = ["HurricaneKeeperNebulaMianPanel","WindWhispersForestGuardianlevel2Panel","WindWhispersForestGuardianlevel3Panel"];
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
      
      private static var taskIndex:int = 1;
       
      
      public function WindWhispersForestGuardianController()
      {
         super();
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 1133)
         {
            MapManager.changeMap(1133);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               start();
            });
         }
         else
         {
            _map = MapManager.currentMap;
            start();
         }
      }
      
      public static function start() : void
      {
         var taskDone:Boolean = false;
         switch(taskIndex)
         {
            case 1:
               taskDone = isTaskDone1;
               break;
            case 2:
               taskDone = isTaskDone2;
               break;
            case 3:
               taskDone = isTaskDone3;
         }
         if(!taskDone)
         {
            if(taskMc == null)
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate("map_windWhispersForestGuardian"),function(param1:MovieClip):void
               {
                  taskMc = param1;
                  _map.controlLevel.addChild(taskMc);
                  KTool.hideMapAllPlayerAndMonster();
                  startPreTask(taskIndex);
               });
            }
            else
            {
               KTool.hideMapAllPlayerAndMonster();
               startPreTask(taskIndex);
            }
         }
         else
         {
            openPanel(taskIndex);
         }
      }
      
      public static function openApp2() : void
      {
         if(!isTaskDone2)
         {
            if(taskMc != null)
            {
               taskMc.gotoAndStop(2);
               taskMc.mc2.gotoAndStop(1);
               startPreTask(2);
            }
            else
            {
               taskIndex = 2;
               initForMap();
            }
         }
         else
         {
            openPanel(2);
         }
      }
      
      public static function openApp3() : void
      {
         if(!isTaskDone3)
         {
            if(taskMc != null)
            {
               taskMc.gotoAndStop(3);
               taskMc.mc3.gotoAndStop(1);
               startPreTask(3);
            }
            else
            {
               taskIndex = 3;
               initForMap();
            }
         }
         else
         {
            openPanel(3);
         }
      }
      
      public static function enterMap() : void
      {
         _map = MapManager.currentMap;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_windWhispersForestGuardian"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
         });
      }
      
      private static function get isTaskDone1() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_1);
      }
      
      private static function get isTaskDone2() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_2);
      }
      
      private static function get isTaskDone3() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_3);
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         _isTaskPlaying = true;
         taskMc.visible = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,index,"mc" + index]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            taskMc.visible = false;
            LevelManager.iconLevel.visible = true;
            if(index == 1)
            {
               BufferRecordManager.setMyState(BUFFER_ID_1,true,function():void
               {
                  KTool.showMapPlayerAndMonster();
                  openPanel(1);
               });
            }
            else if(index == 2)
            {
               BufferRecordManager.setMyState(BUFFER_ID_2,true,function():void
               {
                  KTool.showMapPlayerAndMonster();
                  openPanel(2);
               });
            }
            else if(index == 3)
            {
               BufferRecordManager.setMyState(BUFFER_ID_3,true,function():void
               {
                  KTool.showMapPlayerAndMonster();
                  openPanel(3);
               });
            }
         };
         LevelManager.iconLevel.visible = false;
         storyPlayer.start();
      }
      
      private static function openPanel(param1:int) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule(_appNameArr[param1 - 1]));
      }
      
      public static function destroy() : void
      {
         _map = null;
         _taskMc = null;
      }
   }
}
