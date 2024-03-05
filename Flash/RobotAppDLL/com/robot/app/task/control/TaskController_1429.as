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
   
   public class TaskController_1429
   {
      
      public static const TASK_ID:uint = 1429;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1429()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你来的正好，目前赛尔号上最棘手的就是天蛇公主！她…她受伤了！"],["船长，我们想办法救救她吧！","我这就去找博士问问！"],[function():void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["先别急，" + MainManager.actorInfo.formatNick + "！现在赛小息他们正在照顾公主缪斯，稍后泽拉斯会来我这里汇报情况的！"],["真是可恶！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["罗杰船长，都是那个该死的灯神兰帕德，我知道他一定就躲在0xff0000帕索尔星0xffffff的某个角落，请您下达任务吧！"],["我一定要为天蛇公主报仇！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你这样鲁莽可不行，我们一定要知己知彼才行，否则不但救不了天蛇公主，反而会有更大的损失！"],["可是…这怎么办才好呀！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1429_1",false]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["事情没你们想的糟糕，我知道就在帕索尔星的深处有着一种神奇的果实，只要找到它就能解除公主缪斯的现状！"],["可惜…只有风暴女才知道下落！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["没关系，虽然X战队现在极力挽救暴风女，但是我们的脚步不能停下，伙伴们让我们一起去寻找这种神奇的秘药吧！"],["是啊！船长你就下令吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["好吧！看来也只有这个办法了，泽拉斯这些小鬼就交给你了，一定要保证安全啊！"],["放心吧！我们会按时回来的！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["好了，伙伴们！我们准备再次向帕索尔星出发，大家准备好了吗？"],["准备好了！立刻出发！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1429_2",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1429.TASK_ID,TaskController_1429.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeLocalMap(10268);
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
