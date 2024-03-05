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
   
   public class TaskController_1420
   {
      
      public static const TASK_ID:uint = 1420;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1420()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，我听卫兵说你带了一个奇怪的家伙，要来见我？"],["船长大人！来自天蛇星系的愚人泽拉斯求见！","船长大人我只是来问候你一下！"],[function():void
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
         var storyPlayer:TaskStoryPlayer = null;
         var story:Array = [[TaskStoryPlayer.FUL_MOVIE,["task_1420_1",false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["对呀对呀！当初多亏它阻挡了灯神兰帕德，不然我们不会那么顺利的完成任务的！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["谢谢你勇敢无私的帮助！以后你遇到困难，赛尔号一定也会全力帮助你！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["哈哈！在下这次来正是要寻求你们的帮助呢！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["但说无妨！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["我这次来是专程来保护我家小主人的，可是她失踪了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["你家小主人？"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["我知道我知道，就是那个红色的神秘精灵，它帮过我们好多忙呢！对付恶灵兽、战神联盟修炼还有救金角银角！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["唔，是它啊！不错，它虽然身份未明，但是却一直行侠仗义，我们一定帮助你找到它！"],null]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["如此就多谢啦！兰帕德那个叛徒现在正在追杀她，我非常的担心！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1420_2",false]],[TaskStoryPlayer.FUL_MOVIE,["task_1420_3",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1420.TASK_ID,TaskController_1420.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeLocalMap(10267);
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
