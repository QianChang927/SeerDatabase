package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1156
   {
      
      public static const TASK_ID:uint = 1156;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1156()
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
         NpcDialog.show(NPC.SAIXIAOXI,["米咔的神秘失踪，一定是和那个天使与恶魔化身的家伙有关！可恶，我竟然没能保护好米咔！"],["队长，有什么我能帮到你的吗？","让我先准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.SAIXIAOXI,["赛尔，我现在完全没有斗志，你知道吗？米咔对我非常重要！我不能没有它！"],["我知道啊！"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["别伤心了，小息！我相信米咔一定会吉人天相的，再说我们还有希望啊！只要抓紧时间，提前到达第四领域就可以了！"],["恩，我们不能让米咔等太久！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1156_1"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["不行，不能再等了！否则一定会穿帮的，我们这就出发！"],["队长，你真的确定？"],[function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["看来是不能再拖了，赛小息我支持你，卡璐璐、赛尔，让我们再去恶魔星一趟吧！希望这次能找到米咔的下落！"],["恩，也只有这个办法了！"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["米咔，我一定要找到你，无论付出怎样的代价，我都不会放弃的！"],["伙伴们，出发！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1156_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(753);
                                       }
                                    });
                                 });
                              }]);
                           }]);
                        }]);
                     },false);
                  }]);
               }]);
            }
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
