package com.robot.app.task.control
{
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1370
   {
      
      public static const TASK_ID:uint = 1370;
      
      public static const TASK_STAGE_1:uint = 0;
      
      public static const TASK_STAGE_2:uint = 1;
      
      public static const TASK_STAGE_3:uint = 2;
      
      public static const TASK_STAGE_4:uint = 3;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1370()
      {
         super();
      }
      
      public static function showPanel() : void
      {
         if(null == panel)
         {
            panel = new AppModel(ClientConfig.getTaskModule("TaskPanel_" + TASK_ID),"正在打开信息...");
            panel.setup();
         }
         panel.show();
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,["上次多亏有战神联盟的掩护，不然邪恶四灵联手，你和赛小息肯定没那么容易脱身！"],["对呀！战神联盟真是可靠的战友！","船长大人我只是来问候你一下！"],[function():void
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
         var taskQuePro:TaskQuneProcessor = new TaskQuneProcessor();
         var dlg1:Array = [[NPC.SHIPER,["现在，恶灵兽已经正式向我们赛尔号展开了进攻！在各个星球我们的卫兵都和恶灵兽以及海盗进行了战斗！"],null],[NPC.SEER,["现在恶灵兽的实力非常强大，普通的赛尔实在不是它们的对手！"],null],[NPC.SHIPER,["不错，我想是时候让它们出场了！"],null]];
         var dlg2:Array = [[NPC.SHIPER,[MainManager.actorInfo.formatNick + "，赛尔号有X战队守护，恶灵兽的势力一时半会占不了上风！你快去和赛小息汇合，听从麒麟的指示行动！"],["是！船长！"]],[NPC.SHIPER,["现在我们的通讯很可能受到了海盗的监控，记得要使用加密通讯！"],null],[NPC.SEER,["好！我马上联系赛小息队长！"],null]];
         taskQuePro.addDialog(dlg1);
         taskQuePro.addFullMv(ClientConfig.getFullMovie("task_1370_1"));
         taskQuePro.addDialog(dlg2);
         taskQuePro.procesEndFun = function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               TasksManager.complete(TASK_ID,TASK_STAGE_1,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     MapManager.changeMap(741);
                  }
               });
            });
         };
         taskQuePro.start();
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
