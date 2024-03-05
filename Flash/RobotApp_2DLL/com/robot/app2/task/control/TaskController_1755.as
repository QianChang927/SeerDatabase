package com.robot.app2.task.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   
   public class TaskController_1755
   {
      
      public static const MAP_ID:int = 91;
      
      public static const TASK_ID:int = 1755;
       
      
      public function TaskController_1755()
      {
         super();
      }
      
      public static function initTask1755() : void
      {
         startTask();
      }
      
      private static function startTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         KTool.hideMapAllPlayerAndMonster();
         SocketConnection.send(1022,86062463);
         story = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["辛基德，好久没见，最近还好吗？"],["还好，真感谢你们上次帮助我完成自我修复！"]]],[TaskStoryPlayer.DIALOG,[NPC.XINJIDE,["你能再帮我个忙吗？ "],["怎么了？又出什么事了？"]]],[TaskStoryPlayer.DIALOG,[NPC.XINJIDE,["最近暗黑战神联盟在星球上四处破坏，好多机器都有不同程度的损坏，我需要大量的原材料！"],["哦，这样啊，那需要我如何帮助你？"]]],[TaskStoryPlayer.DIALOG,[NPC.XINJIDE,["我身边的这些拉丁和丁琪，身体中蕴含着神奇的能量，击败他们就有机会获得合金矿石。"],["好，我这就去收集"]]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            SocketConnection.send(1022,86062464);
            TasksManager.complete(TASK_ID,0);
            storyPlayer.destory();
            KTool.showMapAllPlayerAndMonster();
            ModuleManager.showModule(ClientConfig.getAppModule("XinjideAgainPanel"));
         };
         storyPlayer.start();
      }
      
      public static function destroy() : void
      {
      }
      
      private static function get taskMc() : MovieClip
      {
         if(MapManager.currentMap.id != 91)
         {
            return null;
         }
         return MapManager.currentMap.depthLevel["task1755mc"];
      }
   }
}
