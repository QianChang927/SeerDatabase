package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class WeeklyActivity3Controller
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1157;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function WeeklyActivity3Controller()
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
         StatManager.sendStat2014("主题活动0613","点击谁是超进化王者装置",StatManager.RUN_ACT);
         if(!isTaskDone)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_77_5"),function(param1:MovieClip):void
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
         StatManager.sendStat2014("主题活动0613","参与前置任务",StatManager.RUN_ACT);
         _isTaskPlaying = true;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.BULAIKE_NEW,["就算是战斗到最后一刻，我都不会让你拿走这里的能量！这是我们战神联盟的使命！"],["使命？呵呵！"]]],[TaskStoryPlayer.DIALOG,[NPC.MOGESI,["你叔叔魔灵王没有教你这个世界一切都是以实力说话吗？使命是建立在拥有强大的实力上的！就凭你？鼠辈！"],["你说什么！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.BULAIKE_NEW,["这个世界不应该有你们这些邪恶的家伙存在。我一定会解决你！"],["嘴皮子很厉害！"]]],[TaskStoryPlayer.DIALOG,[NPC.MOGESI,["我还挺期待我的手下败将怎么解决我的！哈哈哈！战神联盟……不过是一些小辈的自我夸大！"],["可恶！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.FUL_MOVIE,["active_20140613_2",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            StatManager.sendStat2014("主题活动0613","完成前置任务",StatManager.RUN_ACT);
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
         };
         SocketConnection.send(1022,86073283);
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("EvolutionKingPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
