package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DragonComesController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1161;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function DragonComesController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 1006)
         {
            MapManager.changeMap(1006);
            return;
         }
         _map = MapManager.currentMap;
         start();
      }
      
      public static function start() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1006_dragonComes"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            param1["mc1"].buttonMode = true;
            param1.addEventListener(MouseEvent.CLICK,onClick);
            param1.x = 120;
            if(!isTaskDone)
            {
               CommonUI.addYellowExcal(_map.topLevel,552,220);
            }
            else
            {
               param1.gotoAndStop(3);
               param1["mc3"].buttonMode = true;
               CommonUI.addYellowArrow(_map.topLevel,570,220,45);
            }
         });
      }
      
      public static function onClick(param1:MouseEvent) : void
      {
         if(!isTaskDone)
         {
            startPreTask();
            CommonUI.removeYellowExcal(_map.topLevel);
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.FUL_MOVIE,["task_dragonComes_1",true]],[TaskStoryPlayer.DIALOG,[NPC.KYLEFAN,["好强的能量！就算这样我一定会赢的！"],["这是什么。。。"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["青龙之子！敌人的力量好邪恶啊，而且十分强大！我们怎么才能帮上忙啊？"],["我需要赛尔能量。。。"]]],[TaskStoryPlayer.DIALOG,[NPC.KYLEFAN,[MainManager.actorInfo.nick + "，请把你们的赛尔能量借给我吧！请帮助我守护父亲的青龙神力！我一定不能让他夺走父亲的力量！"],["我们帮你！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               StatManager.sendStat2014("神界之战序章！龙神降临！","完成前置任务的",StatManager.RUN_ACT);
               openPanel();
            });
            _isTaskPlaying = false;
            taskMc.gotoAndStop(3);
            taskMc["mc3"].gotoAndPlay(1);
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DragonComesPanel"));
      }
      
      public static function destroy() : void
      {
         taskMc.removeEventListener(MouseEvent.CLICK,onClick);
         CommonUI.removeYellowArrow(_map.topLevel);
         DisplayUtil.removeForParent(taskMc);
         _taskMc = null;
         _map = null;
      }
   }
}
