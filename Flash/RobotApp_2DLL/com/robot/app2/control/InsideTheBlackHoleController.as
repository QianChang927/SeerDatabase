package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.MapModel;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class InsideTheBlackHoleController
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _fun:Function;
      
      private static var _buffId:int;
       
      
      public function InsideTheBlackHoleController()
      {
         super();
      }
      
      public static function playMc(param1:int, param2:int = 0, param3:Function = null) : void
      {
         var index:int = param1;
         var buffId:int = param2;
         var fun:Function = param3;
         _fun = fun;
         _buffId = buffId;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_InsideTheBlackHole"),function(param1:MovieClip):void
         {
            taskMc = param1;
            _map = MapManager.currentMap;
            _map.controlLevel.addChild(taskMc);
            startPreTask(index);
         });
      }
      
      private static function startPreTask(param1:int) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var index:int = param1;
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
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
            LevelManager.iconLevel.visible = true;
            ToolBarController.panel.visible = true;
            _map.controlLevel.removeChild(taskMc);
            if(_buffId != 0)
            {
               BufferRecordManager.setMyState(_buffId,true,function():void
               {
                  if(_fun != null)
                  {
                     _fun();
                  }
               });
            }
            else if(_fun != null)
            {
               _fun();
            }
         };
         storyPlayer.start();
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}
