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
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class FengshenStoneCollectionController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID_fri:uint = 1227;
      
      public static const BUFFER_ID_sec:uint = 1228;
      
      public static const BUFFER_ID_thr:uint = 1229;
      
      public static const mapIdArr:Array = [10823,10824,10825];
      
      private static var _map:MapModel;
      
      private static var _mapProcess:BaseMapProcess;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function FengshenStoneCollectionController()
      {
         super();
      }
      
      public static function initForMap1() : void
      {
         if(!isTaskDone1)
         {
            if(MapManager.currentMap.id != mapIdArr[0])
            {
               MapManager.changeMap(mapIdArr[0]);
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  _map = MapManager.currentMap;
                  start1();
               });
            }
            else
            {
               start1();
            }
         }
         else
         {
            initForMap2();
         }
      }
      
      public static function initForMap2() : void
      {
         if(!isTaskDone2)
         {
            if(MapManager.currentMap.id != mapIdArr[1])
            {
               MapManager.changeMap(mapIdArr[1]);
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  _map = MapManager.currentMap;
                  start2();
               });
            }
            else
            {
               start2();
            }
         }
         else if(MapManager.currentMap.id != mapIdArr[2])
         {
            MapManager.changeMap(mapIdArr[2]);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               openPanel();
            });
         }
         else
         {
            MapManager.changeMap(10825);
         }
      }
      
      public static function initForMap3(param1:BaseMapProcess) : void
      {
         _mapProcess = param1;
         if(!isTaskDone3)
         {
            _mapProcess.conLevel["itemMc"].visible = false;
            start3();
         }
         else
         {
            _mapProcess.conLevel["itemMc"].visible = true;
            openPanel();
         }
      }
      
      public static function start1() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_fengshenStoneCollection_1"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            startPreTask1();
         });
      }
      
      public static function start2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_fengshenStoneCollection_2"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            startPreTask2();
         });
      }
      
      public static function start3() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_fengshenStoneCollection_3"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _mapProcess.conLevel.addChild(taskMc);
            startPreTask3();
         });
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
      
      private static function get isTaskDone1() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_fri);
      }
      
      private static function get isTaskDone2() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_sec);
      }
      
      private static function get isTaskDone3() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID_thr);
      }
      
      private static function startPreTask1() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.XUAN_FENG,["是的。四大神兽对我安排的考验大大增强了我的能力"],null]],[TaskStoryPlayer.DIALOG,[NPC.XUAN_FENG,["本来我不想过早的恢复实力，这会影响到我的寿命"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["什么！那你还为什么要这么做？"],null]],[TaskStoryPlayer.DIALOG,[NPC.XUAN_FENG,["因为黑暗。它已经让我无法再忽视了。"],null]],[TaskStoryPlayer.DIALOG,[NPC.XUAN_FENG,["冥冥中我有一种预感，现在玄风的力量完全没有作用"],null]],[TaskStoryPlayer.DIALOG,[NPC.XUAN_FENG,["我必须恢复到巅峰状态的力量，才能够面对即将到来的危险！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["那你为什么不进化下去呢？"],null]],[TaskStoryPlayer.DIALOG,[NPC.XUAN_FENG,["因为我遇到了一个瓶颈。作为自然系精灵，我需要一种神奇的力量来帮助我进行超进化"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["那么该上哪收集这样的神奇力量呢？"],null]],[TaskStoryPlayer.DIALOG,[NPC.XUAN_FENG,["使用风神之石！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            _taskMc = null;
            BufferRecordManager.setMyState(BUFFER_ID_fri,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               initForMap1();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function startPreTask2() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["是这样的，我这位朋友即将进行超进化，但是他缺少了一种重要的力量。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["据他所说，这种力量被封印在一种名为“风神之石”的石头里，可是这种石头只有万仞峭壁上才能找到。"],null]],[TaskStoryPlayer.DIALOG,[NPC.MO_DA,["所以……你们一定是爬不上去！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["没错，所以只好来找你啦！"],null]],[TaskStoryPlayer.DIALOG,[NPC.MO_DA,["哈哈哈，小事，包在我身上！那么峭壁在哪，快带我去吧！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["好，我们这就走！"],null]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFER_ID_sec,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               MapManager.changeMap(10825);
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function startPreTask3() : void
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
            BufferRecordManager.setMyState(BUFFER_ID_thr,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               LevelManager.iconLevel.visible = true;
               DisplayUtil.removeForParent(taskMc);
               _mapProcess.conLevel["itemMc"].visible = true;
               openPanel();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function onMouseClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FengshenStoneCollectionMainPanel"));
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FengshenStoneCollectionMainPanel"));
      }
      
      public static function destroy() : void
      {
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         _map = null;
         _mapProcess = null;
      }
   }
}
