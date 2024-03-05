package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyActivityController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1153;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function WeeklyActivityController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(MapManager.currentMap.id != 77)
         {
            MapManager.changeMap(77);
            return;
         }
         _map = MapManager.currentMap;
         start();
         SocketConnection.send(1022,86073281);
      }
      
      public static function start() : void
      {
         if(!isTaskDone)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_77_4"),function(param1:MovieClip):void
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.MOGESI,["有我在的地方，还想什么周年庆典？哼！快把全部的能量交出来，否则让你们全部葬送在这里！"],["好大的口气！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["你以为你是谁呀！长得那么丑，还那么嚣张！"],["放肆！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.BULAIKE_NEW,["凭我有足够的实力让你在这个世界上灰飞烟灭！"],["这个世界？"]]],[TaskStoryPlayer.DIALOG,[NPC.MOGESI,["哈哈哈！我本来就不属于这个世界！连上古战神都困不住我，就凭你？小孩子，回家玩堆积木吧！"],["可恶！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]]];
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
               openPanel();
            });
            _isTaskPlaying = false;
            SocketConnection.send(46133,5);
         };
         SocketConnection.send(1022,86073283);
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("smallGame/TurntableGame/TurntablePanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
