package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1278
   {
      
      public static const TASK_ID:uint = 1278;
      
      public static var panel:AppModel;
      
      public static var isFullMovieEnd:Boolean = false;
       
      
      public function TaskController_1278()
      {
         super();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SAIXIAOXI,["Hi，赛尔！万圣节的猫瓜大战真精彩啊！拉摩斯这下可吃了大亏！"],["是呀，不知道它现在怎么样了！","我还有别的事情要做！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               isFullMovieEnd = false;
               startPro();
            });
         }]);
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
      
      public static function startPro() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_0"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1278_1"),function():void
            {
               isFullMovieEnd = true;
               MapManager.changeMap(786);
            },false);
         },false);
      }
   }
}
