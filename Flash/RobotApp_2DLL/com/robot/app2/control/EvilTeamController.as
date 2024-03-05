package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class EvilTeamController
   {
      
      public static const TASK_ID:uint = 1919;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
       
      
      public function EvilTeamController()
      {
         super();
      }
      
      public static function initMap71(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         SocketConnection.send(1022,86068504);
         destroy();
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
      
      private static function startPreTask(param1:MouseEvent = null) : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         var e:MouseEvent = param1;
         taskMc.removeEventListener(MouseEvent.CLICK,startPreTask);
         SocketConnection.send(1022,86060890);
         taskMc.visible = true;
         taskMc.gotoAndStop(1);
         KTool.hideMapAllPlayerAndMonster();
         _map.depthLevel.visible = false;
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.GUSITE,["没想到我们会出现吧~ 恶灵兽大人回归这种全宇宙爆炸事件，怎么能少了我和跳跳呢？"],["咦？是去年的恶灵兽小分队呢！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]],[TaskStoryPlayer.DIALOG,[NPC.NUHUOSHENGYING,["恶灵兽大人如此威严，你们怎么能这么恶搞它！！"]]],[TaskStoryPlayer.DIALOG,[NPC.GUSITE,["飘飘跟着恶灵兽大人的时候，你们还没出生呢。哼，尊卑不分，快叫前~辈~"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,4,"mc4"]],[TaskStoryPlayer.DIALOG,[NPC.NUHUOSHENGYING,["既然咱们都是为恶灵兽大人效力，那就要团结一致。今年春节，我们就一起把赛尔号拆光光吧~"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,5,"mc5"]],[TaskStoryPlayer.DIALOG,[NPC.GUSITE,["这种讨好恶灵兽大人的机会，不能让给别人！"]]],[TaskStoryPlayer.DIALOG,[NPC.TIAOTIAO,["我们才是专业的恶灵兽火箭队啊~ 走吧飘飘，我们也去~"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,6,"mc6"]]];
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
         ModuleManager.showModule(ClientConfig.getAppModule("EvilTeamPanel"));
      }
      
      public static function destroy() : void
      {
         if(taskMc != null)
         {
            taskMc.removeEventListener(MouseEvent.CLICK,startPreTask);
         }
         _map = null;
      }
   }
}
