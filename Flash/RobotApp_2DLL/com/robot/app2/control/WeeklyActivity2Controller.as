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
   
   public class WeeklyActivity2Controller
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 718;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function WeeklyActivity2Controller()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(!isTaskDone)
         {
            if(MapManager.currentMap.id != 930)
            {
               MapManager.changeMap(930);
               return;
            }
         }
         else
         {
            openPanel();
         }
         _map = MapManager.currentMap;
         start();
         SocketConnection.send(1022,86073281);
      }
      
      public static function start() : void
      {
         if(!isTaskDone)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_930_nameike"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
               taskMc.x = 120;
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["哇！盖亚！盖亚，你快救救它吧，已经快一个月了，但是我们都找不到任何办法能帮助它。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["……纳梅克？……盖亚你在做什么？快住手！它看起来好痛苦的样子！"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["这…这一切到底怎么回事…盖亚怎么了？守护者，你没事吧？"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.FUL_MOVIE,["task_nameike_1",true]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["那，刚才那个盖亚…其实不是真正的盖亚是么？难道它也是盖亚的心魔？"],null]],[TaskStoryPlayer.DIALOG,[NPC.NAMEIKE,["我不知道。逆界存在太多秘密，我唯一知道的是，逆界之门已经现身，宇宙必将有一场浩劫。"],["赛尔号才不会退缩呢！"]]],[TaskStoryPlayer.DIALOG,[NPC.NAMEIKE,["……这里已经一片狼藉…我一直在逃避，不肯承认是我自己毁了未来之门…"],["不是你的错"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]],[TaskStoryPlayer.DIALOG,[NPC.NAMEIKE,["你是……龙王子哈莫雷特？"],["哈莫雷特果然超进化了！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,7,"mc7"]],[TaskStoryPlayer.DIALOG,[NPC.HAKESASI,["逆界的力量非常可怕，我的朋友，我不希望你们就这样去冒险…但是，除了赛尔号，或许没有其他力量能够制止这场浩劫了。"],["所以赛尔号责无旁贷！"]]],[TaskStoryPlayer.DIALOG,[NPC.HAKESASI,["这个特别的徽章送给你，它象征着勇气和力量。当你能证明自己有足够的能力与逆界之门抗衡时，带着纳梅克，一起摧毁它的心魔。"],["嗯！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,8,"mc8"]]];
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
         };
         SocketConnection.send(1022,86073283);
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("DragonNameikeNewPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
