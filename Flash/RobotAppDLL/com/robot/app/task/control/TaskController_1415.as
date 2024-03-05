package com.robot.app.task.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1415
   {
      
      public static const TASK_ID:uint = 1415;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      public static const TASK_STAGE_5:int = 4;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1415()
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
         NpcDialog.show(NPC.SHIPER,["赛小息，" + MainManager.actorInfo.formatNick + " ，一定要把金角和银角拯救回来呀！"],["船长大人！你就放心吧！！","船长大人我只是来问候你一下！"],[function():void
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
         CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_1415_1"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1415_1_0"),function():void
            {
               TasksManager.complete(TaskController_1415.TASK_ID,TaskController_1415.TASK_STAGE_1,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeLocalMap(10265);
                  }
               });
            },false);
         });
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
