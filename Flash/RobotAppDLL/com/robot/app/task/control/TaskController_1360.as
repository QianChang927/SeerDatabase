package com.robot.app.task.control
{
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1360
   {
      
      public static const TASK_ID:uint = 1360;
      
      public static const TASK_STAGE_1:int = 0;
      
      public static const TASK_STAGE_2:int = 1;
      
      public static const TASK_STAGE_3:int = 2;
      
      public static const TASK_STAGE_4:int = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1360()
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
         NpcDialog.show(NPC.SHIPER,["想不到恶灵兽得到了谜之卷轴，更无法想象那个卷轴里的禁术如此强大！"],["船长，我觉得阿洛比斯只是开始！","船长大人我只是来问候你一下！"],[function():void
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
         NpcDialog.show(NPC.SHIPER,["不错，我、克罗以及博士已经讨论过，恶灵兽既然能把阿洛比斯召唤出来，其它的邪恶四灵只怕很快就要出现！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.SEER,["天哪！难道很快我们就得和邪恶四灵再次对决吗？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SHIPER,["我们必须做好准备，而且我想，恶灵兽不会给我们很多准备时间的！"],null,null,false,function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1360_1"),function():void
                  {
                     MapManager.changeMap(811);
                  });
               });
            });
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
