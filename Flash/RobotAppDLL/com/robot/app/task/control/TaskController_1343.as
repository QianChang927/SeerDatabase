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
   
   public class TaskController_1343
   {
      
      public static const TASK_ID:uint = 1343;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1343()
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
         NpcDialog.show(NPC.SHIPER,["圣光天马战胜了百变将军纳斯琪，恶灵兽的嚣张气焰总算是受到了正义势力的打击！"],["我觉得恶灵兽没这么容易对付！","船长大人我只是来问候你一下！"],[function():void
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
         NpcDialog.show(NPC.SHIPER,["保持警惕是一个很好的习惯，说到对恶灵兽的了解，我想没人比得上派特博士！让我们连线一下派特！"],null,null,false,function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1343_1"),function():void
            {
               CartoonManager.play(ClientConfig.getFullMovie("cartoon/task_134301"),function():void
               {
                  NpcDialog.show(NPC.SHIPER,["原来如此，恶灵兽虽然已经吸取大量的力量，但是因为三重封印仍然在，所以它一时还不敢太嚣张！"],["不嚣张都这么嚣张了，真嚣张起来那还了得！"],[function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["机会稍纵即逝，现在恶灵兽还没有完全恢复，我们必须抓紧时间给它沉重的打击！"],["恩恩！"],[function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["机会稍纵即逝，现在恶灵兽还没有完全恢复，我们必须抓紧时间给它沉重的打击！"],["恩恩！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["我已经任命贾斯汀为对付恶灵兽的总指挥了！你去看看他有什么指示吧！"],["遵命！船长大人！"],[function():void
                           {
                              MapManager.changeMap(11224);
                           }]);
                        }]);
                     }]);
                  }]);
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
