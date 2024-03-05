package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   
   public class MumuController
   {
      
      public static const BUFFER_ID:uint = 766;
       
      
      public function MumuController()
      {
         super();
      }
      
      public static function init() : void
      {
         taskMc.visible = false;
      }
      
      public static function start() : void
      {
         if(checkPreTask())
         {
            openPanel();
         }
         else
         {
            startPreTask();
         }
      }
      
      private static function checkPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
      
      private static function get taskMc() : MovieClip
      {
         return MapManager.currentMap.controlLevel["mumu"];
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         SocketConnection.send(1022,86061284);
         taskMc.visible = true;
         taskMc.gotoAndStop(1);
         MainManager.selfVisible = false;
         MapManager.currentMap.depthLevel.visible = false;
         story = [[TaskStoryPlayer.DIALOG,[NPC.MUMU,["咦？这是什么地方？怎么睡一觉醒来就到了这里？"],["这是群魔禁地，很危险的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["木木，迈迪文正在这里召集正义的力量对抗暗黑战神联盟！"],["原来是这样啊……"]]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["我说怎么这么多人，原来最近的超进化盛典就是和这个有关啊。"],["对，我们需要超进化精灵的力量。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.MAIDIWEN,["我们正在寻找传说中的救世神宠，借助它的力量我们才能战胜暗黑战神联盟，只是不知道救世神宠什么时候才会出现……"],["神宠？听起来很厉害的样子……"]]],[TaskStoryPlayer.DIALOG,[NPC.MUMU,["那个……你有没有觉得我长得很像那只神宠啊？"],["额……"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.MUSASI,["哈哈，快看，我会超进化，我也是神宠哦！"],["原来木木也会超进化啊……"]]],[TaskStoryPlayer.DIALOG,[NPC.MAIDIWEN,["木木……你还真是古道热肠啊……"],["那是当然。"]]],[TaskStoryPlayer.DIALOG,[NPC.MUSASI,["现在你相信我是神宠了吧，神宠有什么奖励吗？"],["奖励啊？没有……"]]],[TaskStoryPlayer.DIALOG,[NPC.MAIDIWEN,["咳咳……既然你就是传说中的神宠，那么有一个光荣的任务要交给你了！"],["什么任务？好玩吗？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.MAIDIWEN,["那么就交给你了，神宠木木！"],["嗯，交给我吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.MUSASI,["身为神宠，我义不容辞！"],["……谢谢你，神宠木木。"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MainManager.selfVisible = true;
            MapManager.currentMap.depthLevel.visible = true;
            taskMc.visible = false;
            KTool.showMapAllPlayerAndMonster();
            SocketConnection.send(1022,86061285);
            BufferRecordManager.setMyState(BUFFER_ID,true,function():void
            {
               TasksManager.accept(1678,function():void
               {
                  TasksManager.complete(1678,0,function():void
                  {
                     PetManager.refreshStorageList();
                  });
               });
            });
         };
         storyPlayer.start();
      }
      
      private static function openPanel() : void
      {
         SocketConnection.send(1022,86061286);
         ModuleManager.showModule(ClientConfig.getAppModule("MumuPanel"));
      }
      
      public static function destroy() : void
      {
         taskMc.visible = false;
      }
   }
}
