package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class EvilSpiritBeastAwakeningController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1178;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function EvilSpiritBeastAwakeningController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(!isTaskDone)
         {
            if(MapManager.currentMap.id != 68)
            {
               MapManager.changeMap(68);
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
         else
         {
            openPanel();
         }
      }
      
      public static function start() : void
      {
         if(!isTaskDone)
         {
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_68_evilSpiritBeastAwakening"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
               startPreTask();
            });
         }
         else
         {
            openPanel();
         }
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
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
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.DIALOG,[NPC.MASTER_OF_DEVILDOM,["只差一点点，你的能力就可以比四魔神强大了！"],["是哪一点？"]]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU,["我和主人你一样，渴望最强大的力量！我不在意别人是如何评价我们，只要有力量，我们就可以让那些人闭嘴！"],["说的好！"]]],[TaskStoryPlayer.DIALOG,[NPC.MASTER_OF_DEVILDOM,["我打算把魔界最强的法术教给你，但你能否领悟，还是要看自己造化！"],["来吧！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.FUL_MOVIE,["task_evilSpiritBeastAwakening",true]],[TaskStoryPlayer.DIALOG,[NPC.MASTER_OF_DEVILDOM,["你可明白了？"],["我懂了。"]]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU,["击败自己的善念！"],["不对。"]]],[TaskStoryPlayer.DIALOG,[NPC.MASTER_OF_DEVILDOM,["善既是恶，恶既是善，善恶本无法分辨。你需要做的，只是不断挑战自己。当你可以随心所欲控制自己的善念和恶念，那么宇宙就在你掌中！"],null]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            DisplayUtil.removeForParent(taskMc);
            _taskMc = null;
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               openPanel();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("EvilSpiritBeastAwakeningMainPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
