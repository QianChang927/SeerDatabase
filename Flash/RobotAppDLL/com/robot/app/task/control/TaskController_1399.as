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
   
   public class TaskController_1399
   {
      
      public static const TASK_ID:uint = 1399;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1399()
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
         NpcDialog.show(NPC.SHIPER,["根据最新的情报，恶灵兽得到了一股神秘势力的支持！谜之卷轴就是它给恶灵兽的！"],["原来如此，难怪恶灵兽越来越嚣张！","船长大人我只是来问候你一下！"],[function():void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["麒麟一直在提醒我们，有一股神秘的邪恶势力正在逼近！没想到它们已经开始行动了！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["恶灵兽还没有打败，就来了新的敌人，形势非常严峻啊！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["兵来将挡，水来土掩！记住，作为一个赛尔，我们一定要随时保持警惕！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["船长！下命令吧！赛尔先锋队随时待命！"],null]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["恶灵歼灭战必须如期开展，" + MainManager.actorInfo.formatNick + "，快去找金角银角探讨一下作战方案！"],null]],[TaskStoryPlayer.FUL_MOVIE,["task_1399_0",true]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1399.TASK_ID,TaskController_1399.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(810);
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
