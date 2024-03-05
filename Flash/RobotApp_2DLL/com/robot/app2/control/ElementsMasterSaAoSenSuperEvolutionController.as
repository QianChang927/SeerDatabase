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
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class ElementsMasterSaAoSenSuperEvolutionController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1232;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _fun:Function;
      
      private static var _taskMc:MovieClip;
       
      
      public function ElementsMasterSaAoSenSuperEvolutionController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 775)
         {
            MapManager.changeMap(775);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               _map = MapManager.currentMap;
               startPlay();
            });
         }
         else if(!isTaskDone)
         {
            startPlay();
         }
         else
         {
            openPanel();
         }
      }
      
      public static function startPlay(param1:Function = null) : void
      {
         _fun = param1;
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
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_ElementsMasterSaAoSenSuperEvolution",true]]];
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
               if(_fun == null)
               {
                  openPanel();
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
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ElementsMasterSaAoSenSuperEvolutionMainPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
