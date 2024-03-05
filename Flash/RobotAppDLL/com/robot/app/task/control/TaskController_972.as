package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_972
   {
      
      public static const TASK_ID:uint = 972;
      
      private static var panel:AppModel;
       
      
      public function TaskController_972()
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
      
      public static function startPro() : void
      {
         TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
         {
            var c:Boolean = param1;
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_972_4"),function():void
            {
               MapManager.changeMap(717);
            });
         });
      }
      
      public static function start() : void
      {
         NpcDialog.show(NPC.SHIPER,["经过长时间对第五星系的勘察，很明显所有的阴谋都归结于0xff0000邪恶四灵0xFFFFFF的贪婪，一定要想办法结束这场灾难才行！"],["船长，难道你有办法？","看来我该准备一下了！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["赛尔，你来的正好，我正在研究关于第五星系的局势，相信你一定也有什么想告诉我们吧！"],["恩恩，据我和赛小息的了解!"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_972_1"),function():void
               {
                  NpcDialog.show(NPC.SHIPER,["看来关系还是挺复杂的！不过，时间不多，由不得我们停留半刻，赛尔先锋队，接下去你们的任务又将开始！"],["恩恩，我们已经准备好了！"],[function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["虽然前方未知星球等待着你们的挑战，但是我还是希望你们能带回胜利的消息，出发吧！赛尔先锋队！"],["遵命！先锋队，出发！"],[function():void
                     {
                        TasksManager.accept(TASK_ID,function():void
                        {
                           TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                           {
                              var c:Boolean = param1;
                              if(c)
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_972_4"),function():void
                                 {
                                    MapManager.changeMap(717);
                                 });
                              }
                           });
                        });
                     }]);
                  }]);
               },false);
            }]);
         }]);
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
