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
   
   public class DrPatElfSuperEvolutionController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID_fri:uint = 1230;
      
      public static const BUFFER_ID_sec:uint = 1231;
      
      public static const mapIdArr:Array = [754,734];
      
      private static var _map:MapModel;
      
      private static var _mapProcess:BaseMapProcess;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function DrPatElfSuperEvolutionController()
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
            openPanel();
         }
      }
      
      public static function initForMap2(param1:BaseMapProcess) : void
      {
         _mapProcess = param1;
         if(!isTaskDone2)
         {
            start2();
         }
         else
         {
            openPanel();
         }
      }
      
      public static function start1() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_DrPatElfSuperEvolution"),function(param1:MovieClip):void
         {
            taskMc = param1;
            MapManager.currentMap.controlLevel.addChild(taskMc);
            startPreTask1();
         });
      }
      
      public static function start2() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_DrPatElfSuperEvolution"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _mapProcess.conLevel.addChild(taskMc);
            startPreTask2();
         });
         startPreTask2();
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
      
      private static function startPreTask1() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["派特博士，这是什么？"],null]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["这种物质，叫做微蓝萤尘。"],null]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["它是一种很稀有的物质。早些年我在宇宙间寻找各种精灵培养材料时，曾经发现过这种物质。"],null]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["它与星光有着惊人的共鸣性，但是药性极强，很容易对精灵造成损伤。"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["哎呀，博士，说了这么多，它对我们有什么用？"],null]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["我可以将这些萤尘提炼成一种星纹秘药，喝下这种秘药的精灵，将能发生质的飞跃！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["这么神奇！博士，让我的米咔试试吧！米咔现在已经这么厉害了，再飞跃一次，我们就能横着走啦！"],null]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["不行。这种药水有着很强的危险性，米咔现在身受重伤，已经无法承受如此猛烈的药性了。"],null]],[TaskStoryPlayer.DIALOG,[NPC.ERLIYA,["博士，交给我吧。"],null]],[TaskStoryPlayer.DIALOG,[NPC.ERLIYA,["我一直做着您的助手，还没试过做你的保镖呢！"],null]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["我一直带着你做各种的实验，却忽略了你本身的成长。这么多年，我亏欠了你很多"],null]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["交给我吧，我来帮你调配秘药，让你完成进化！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]]];
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
               openPanel();
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.FUL_MOVIE,["DrPatElfSuperEvolutionMovie",true]]];
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
         [TaskStoryPlayer.FUL_MOVIE,["DrPatElfSuperEvolutionMovie",true]].§§slot[1] = [TaskStoryPlayer.MAP_MOVIE[[taskMc,4,"mc4"]]];
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
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
         §§newactivation();
      }
      
      private static function onMouseClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FengshenStoneCollectionMainPanel"));
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DrPatElfSuperEvolutionMainPanel"));
      }
      
      public static function destroy() : void
      {
         CommonUI.removeYellowArrow(MapManager.currentMap.topLevel);
         _map = null;
         _mapProcess = null;
      }
   }
}
