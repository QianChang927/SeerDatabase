package com.robot.app.task.control
{
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1388
   {
      
      public static const TASK_ID:uint = 1388;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1388()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(panel == null)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开任务信息");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,["圣灵峰上迈尔斯大战恶灵三巨头，我看了星际卫星的直播，真是好一场惊天动地的恶斗！"],["是呀是呀！","船长大人我只是来问候你一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               MainManager.selfVisible = false;
               ToolBarController.showOrHideAllUser(false);
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["呵呵，赛尔你也知道这场大战吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["这次迈尔斯真是大展神威，恶灵三巨头一败涂地啊！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["这次恶灵兽的嚣张气焰可被狠狠的打击了一次，正是对付它的大好时机！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["船长！下命令吧！赛尔先锋队随时待命！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["这就是我现在正在思考的，因为现在恶灵兽仿佛蒸发了，我们完全不知道它的去向！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1388_1",false]],[TaskStoryPlayer.FUL_MOVIE,["task_1388_2",false]],[TaskStoryPlayer.CARTOON,["cartoon/task_1388_1"]]];
         var storyPlayer:TaskStoryPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.addActMovie(["task_1388_dialog","task1388dialog",1,12,false]);
         storyPlayer.addFulMovie(["task_1388_3",false]);
         storyPlayer.storyEndCallback = function():void
         {
            TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(68);
               }
            });
         };
         storyPlayer.start();
      }
      
      public static function destroy() : void
      {
         if(panel)
         {
            panel.destroy();
            panel = null;
         }
      }
   }
}
