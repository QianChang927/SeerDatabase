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
   
   public class TaskController_1424
   {
      
      public static const TASK_ID:uint = 1424;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1424()
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
         NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，听说你们发现了0xff0000新星球帕索尔0xffffff并且还和0xff0000“愚人”泽拉斯0xffffff一起击退了灯神兰帕德，看来又要为你记上一功了！"],["嘿嘿，船长我现在可不一般啦！","船长，我等等再来汇报！"],[function():void
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
         var story:Array = [[TaskStoryPlayer.DIALOG,[NPC.SEER,["罗杰船长你可不知，那个泽拉斯简直太强大了，我记得当时他还敢和盖亚叫板，你说他是不是疯了！"],["不，我觉得里面一定有原因的！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["原因！啊…我知道了，他口中一直称那个红色的神秘人叫少主，还说自己是天蛇七魔将之一，估计他是来找人的！"],["如果是这样，那就对了！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1424_1",false]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["天蛇星…天蛇七魔将，泽拉斯告诉我们你遇到什么麻烦了！我们该如何帮助你！"],["恩恩，相信你们一定知道兰帕德吧！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["我这次千里迢迢从天蛇星系来到这里，为的就是找到天蛇星少主—0xff0000缪斯0xffffff！也就是你们所谓的红色神秘人！"],["果然是少主？？？"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["是的！天蛇七魔将之前是缪斯所领衔的正义之师，但是现在已经…已经变得四分五裂了，只有找回少主重返天蛇星，天蛇星才能得救！"],["看来遥远的异星再次出现危机！"]]],[TaskStoryPlayer.DIALOG,[NPC.SHIPER,["那么现在最要紧的就是找到你的少主，以后的时候我们在从长计议吧！"],["但是我…感觉少主的能量正在慢慢变少！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["船长果然一言中的，所以我想请求你委派赛尔先锋队的队员再次陪我一起前往0xff0000帕索尔星0xffffff，帮助我找回少主！"],["恩恩，看来这样是最保险的了！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1424_2",false]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["泽拉斯，由我们赛尔先锋队作为助手，这次任务一定会顺利完成的，是不是米咔！"],["米咔…米咔！"]]],[TaskStoryPlayer.DIALOG,[NPC.ZELASI,["太感谢你们了，那事不宜迟我们这就出发吧！我担心少主在那会遇到危险！兰帕德这家伙一定会联合海盗追杀少主的！"],["恩恩，我们这就出发！"]]],[TaskStoryPlayer.DIALOG,[NPC.SAIXIAOXI,["伙伴们，我们这次任务就是找到天蛇星少主—缪斯！并且大家都平安返回，明白了吗？"],["启程吧！宇宙英雄们！"]]],[TaskStoryPlayer.FUL_MOVIE,["task_1424_3",false]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            TasksManager.complete(TaskController_1424.TASK_ID,TaskController_1424.TASK_STAGE_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  MapManager.changeMap(75);
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
