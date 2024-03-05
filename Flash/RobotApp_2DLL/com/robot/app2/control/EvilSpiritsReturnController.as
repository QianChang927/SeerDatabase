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
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class EvilSpiritsReturnController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1164;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function EvilSpiritsReturnController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         if(!isTaskDone)
         {
            if(MapManager.currentMap.id != 68)
            {
               MapManager.changeMap(68);
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
               {
                  MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
                  _map = MapManager.currentMap;
                  StatManager.sendStat2014("邪恶四灵回归","开始前置剧情",StatManager.RUN_ACT);
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
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_68_evilSpiritsReturn"),function(param1:MovieClip):void
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.FUL_MOVIE,["task_EvilSpiritsReturn_1",true]],[TaskStoryPlayer.DIALOG,[NPC.JUSHILINGWANG,["邪恶魔神的风采不减当年，只是宇宙中正义的力量一定不会放过你们！"],["嗯,确实现在有很多人送上门来找死。"]]],[TaskStoryPlayer.DIALOG,[NPC.YUMINA,["这次我们回来！就是要向魔界复仇！！"],["那又如何。"]]],[TaskStoryPlayer.DIALOG,[NPC.EVIL_LORD,["不要忘记，邪恶终将吞噬一切。"],["看招！"]]]];
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
               StatManager.sendStat2014("邪恶四灵回归","完成前置剧情",StatManager.RUN_ACT);
               openPanel();
            });
            _isTaskPlaying = false;
         };
         SocketConnection.send(1022,86073283);
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("EvilSpiritsReturnMainPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
