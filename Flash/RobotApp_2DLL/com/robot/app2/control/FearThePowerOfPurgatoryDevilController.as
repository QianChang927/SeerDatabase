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
   
   public class FearThePowerOfPurgatoryDevilController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1169;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
       
      
      public function FearThePowerOfPurgatoryDevilController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(!isTaskDone)
         {
            if(MapManager.currentMap.id != 1010)
            {
               MapManager.changeMap(1010);
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  _map = MapManager.currentMap;
                  start();
               });
            }
            else
            {
               openPanel();
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
            startPreTask();
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
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_FearThePowerOfPurgatoryDevil_1",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               KTool.showMapPlayerAndMonster();
               openPanel();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      public static function playPanelAnimation() : void
      {
         startPrePanelTask();
      }
      
      private static function startPrePanelTask() : void
      {
         var story2:Array;
         var storyPlayer2:TaskStoryPlayer = null;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story2 = [[TaskStoryPlayer.CARTOON,["cartoon/task_FearThePowerOfPurgatoryDevil_2"]]];
         storyPlayer2 = new TaskStoryPlayer();
         storyPlayer2.addStory(story2);
         storyPlayer2.storyEndCallback = function():void
         {
            storyPlayer2.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            KTool.showMapPlayerAndMonster();
            openPanel();
         };
         storyPlayer2.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("FearThePowerOfPurgatoryDevilPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
