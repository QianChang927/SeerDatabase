package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1226
   {
      
      public static const TASK_ID:uint = 1226;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1226()
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
         NpcDialog.show(NPC.SHIPER,["赛尔，来的正好，上次你们在魔神星有不得了的发现！派特整理了珍贵的资料，你准备好了我们就看一下！"],["我已经准备好了！","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SHIPER,["你可要做好心理准备，这个家伙来历很不简单！"],["恩恩！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1226_1"),function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["好像佐格和艾利逊先完蛋了..."],["小息，你严肃点！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["我相信派特的判断，这个魔神能把海盗折腾的如此惨不忍睹，肯定是因为它很强大！"],["船长，我们应该怎么办？"],[function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["派特有提到艾里克是被封印在魔神星的，魔神星肯定有一些对抗它的线索，小息，你们有信心去一探究竟吗？"],["有！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["船长！先锋队保证完成任务！"],["伙伴们，出发，魔神星！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1226_2"),function():void
                           {
                              TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(778);
                                 }
                              });
                           });
                        }]);
                     }]);
                  }]);
               }]);
            },false);
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
