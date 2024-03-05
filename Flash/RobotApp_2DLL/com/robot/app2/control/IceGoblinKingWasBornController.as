package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   
   public class IceGoblinKingWasBornController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1271;
      
      private static var _map:MapModel;
       
      
      public function IceGoblinKingWasBornController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         start();
      }
      
      public static function start() : void
      {
         if(!isTaskDone)
         {
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
         story = [[TaskStoryPlayer.FUL_MOVIE,["task_iceGoblinKingWasBorn",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               openPanel();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("IceGoblinKingWasBornMianPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
