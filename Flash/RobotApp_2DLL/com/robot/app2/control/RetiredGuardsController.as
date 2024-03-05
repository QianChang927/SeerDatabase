package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.mode.MapModel;
   import flash.display.MovieClip;
   
   public class RetiredGuardsController
   {
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
      
      private static var _fun:Function;
      
      private static var _buffId:int = 1399;
       
      
      public function RetiredGuardsController()
      {
         super();
      }
      
      public static function playMc(param1:int, param2:Function = null) : void
      {
         _fun = param2;
         KTool.playSceneAnimation("map_retiredGuards",param1,_fun);
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
            if(_fun != null)
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
