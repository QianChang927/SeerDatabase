package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MagicStAwakeningController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1176;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function MagicStAwakeningController()
      {
         super();
      }
      
      public static function initForMap() : void
      {
         Alarm.show("本活动正在维护中......");
      }
      
      public static function start() : void
      {
         if(!isTaskDone)
         {
            KTool.hideMapAllPlayerAndMonster();
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_68_MagicStAwakening"),function(param1:MovieClip):void
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
         story = [[TaskStoryPlayer.DIALOG,[NPC.EVIL_LORD,["尤尼萨，你来了。"],["大战将至，我是来夺回王位的！"]]],[TaskStoryPlayer.DIALOG,[NPC.EVIL_LORD,["夺回王位？可笑之极。"],["这没什么可笑的"]]],[TaskStoryPlayer.DIALOG,[NPC.YOUNISA,["我才不会管什么正义与邪恶，魔界之主的位子，是我的。"],null]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.FUL_MOVIE,["task_magicStAwakening_1",true]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU,["魔界之主念及尤尼萨旧情，特命我们前来告之邪神剑下留情。"],["好。既然已有命令，我不杀他。"]]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU,["尤尼萨，你现在四魂都被我吸干，恐怕成为魔皇已遥遥无期了。"],["你….你们"]]],[TaskStoryPlayer.DIALOG,[NPC.ELINGSHOU,["我们现在给你一次恢复成魔圣和觉醒为皇的机会，你敢来吗？"],["区区魔界….咳咳…..我随你们去！"]]]];
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
               openPanel();
            });
            _isTaskPlaying = false;
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("MagicStAwakeningMainPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
