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
   
   public class MagicQueenGiftedController
   {
      
      private static var _isTaskPlaying:Boolean;
      
      public static const BUFFER_ID:uint = 1172;
      
      private static var _map:MapModel;
      
      private static var _willVisible:Boolean = true;
      
      private static var _taskMc:MovieClip;
       
      
      public function MagicQueenGiftedController()
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
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_68_magicQueen"),function(param1:MovieClip):void
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
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.FUL_MOVIE,["task_magicQueen_1",true]],[TaskStoryPlayer.DIALOG,[NPC.EVIL_LORD,["你的信仰如此脆弱。"],["我一定会变得更强大！"]]],[TaskStoryPlayer.DIALOG,[NPC.YUMINA,["没有人可以小看信仰的力量！"],["那等你变强了再来找我"]]]];
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
         ModuleManager.showModule(ClientConfig.getAppModule("MagicQueenFaithMainPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
