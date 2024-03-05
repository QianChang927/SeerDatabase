package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class ValentinesDayPetController
   {
      
      public static const TASK_ID:uint = 1936;
      
      private static var _map:MapModel;
      
      private static var _taskMc:MovieClip;
       
      
      public function ValentinesDayPetController()
      {
         super();
      }
      
      public static function initForMap77() : void
      {
         _map = MapManager.currentMap;
         start();
      }
      
      public static function start() : void
      {
         if(checkPreTask())
         {
            openPanel();
         }
         else
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("map_77_ValentinesDayPet"),function(param1:MovieClip):void
            {
               taskMc = param1;
               _map.controlLevel.addChild(taskMc);
               taskMc.visible = false;
               startPreTask();
            });
         }
      }
      
      private static function checkPreTask() : Boolean
      {
         return TasksManager.getTaskStatus(TASK_ID) == TasksManager.COMPLETE;
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
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(1);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["欢迎来到赛尔号！想不到最早到的是你们俩呀。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["这次的情人节派对，是专为像你们这样的特殊精灵准备的哦。"]]],[TaskStoryPlayer.DIALOG,[NPC.YILISHA,["我们这样的…特殊精灵？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["欢迎参加赛尔号专门为繁殖精灵准备的情人节派对。这次，我们还将见证一个全新的宝宝诞生。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.DOCTOR,["哈哈，不要害羞，繁殖精灵可是很神奇的存在哦。接下来会有很多赛尔来陪你们玩哦，好好享受你们的情人节派对吧。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            _map.depthLevel.visible = true;
            taskMc.visible = false;
            SocketConnection.send(1022,86060891);
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               var result:Boolean = param1;
               TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     openPanel();
                  }
               });
            });
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ValentinesDayPetPanel"));
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
