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
   
   public class TaskController_1411
   {
      
      public static const TASK_ID:uint = 1411;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1411()
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
         NpcDialog.show(NPC.SHIPER,["唔，元宵节快到了，赛尔号的庆祝典礼任命谁来负责比较好呢？"],["船长大人！我有情报向您报告！","船长大人我只是来问候你一下！"],[function():void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["咦，" + MainManager.actorInfo.formatNick + "，今天怎么没和赛小息一起去探险啊？"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["自从麒麟和恶灵兽的大战之后，赛小息队长就因为金角和银角的牺牲非常的伤心！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["金角和银角非常的勇敢，它们的牺牲我也非常的沉痛，你有空替我安慰一下赛小息，金角和银角是永远活在我们心里的！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1411_1",false]],[TaskStoryPlayer.CARTOON,["cartoon/task_1411_1"]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["神秘的精灵？是什么来历你们知道吗？"],null]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["不知道，但是它不止一次的帮助过我们和战神联盟，而且，如果有机会拯救金角和银角，就算有再大的危险我们也不怕！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["唔，能和战神联盟成为朋友，那肯定信得过，去吧！记住要小心行事！"],["放心吧船长！保证完成任务！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1411_1_0",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1411.TASK_ID,TaskController_1411.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(70);
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
