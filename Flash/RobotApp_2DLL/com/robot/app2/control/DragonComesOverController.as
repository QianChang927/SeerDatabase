package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class DragonComesOverController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1166;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function DragonComesOverController()
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
         if(!isTaskDone)
         {
            start();
         }
      }
      
      public static function start() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_1006_dragonComes_over"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map.controlLevel.addChild(taskMc);
            param1["mc1"].buttonMode = true;
            param1.addEventListener(MouseEvent.CLICK,onClick);
            param1.x = 120;
            if(!isTaskDone)
            {
               CommonUI.addYellowArrow(_map.topLevel,570,220,45);
            }
         });
      }
      
      public static function onClick(param1:MouseEvent) : void
      {
         if(!isTaskDone)
         {
            startPreTask();
         }
         CommonUI.removeYellowExcal(_map.topLevel);
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
         CommonUI.removeYellowArrow(_map.topLevel);
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.KYLEFAN,["真是太糟糕了，青龙神力被夺走了，我真没用！我对不起父亲！"],["别太伤心，会有办法的。。"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
            });
            _isTaskPlaying = false;
            DisplayUtil.removeForParent(taskMc);
         };
         storyPlayer.start();
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
