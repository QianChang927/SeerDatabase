package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1123
   {
      
      public static const TASK_ID:uint = 1123;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1123()
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
         NpcDialog.show(NPC.SHIPER,["虽然没有亲眼目睹雷伊和迈尔斯的世纪之战，但从探险员的汇报中能够感受到这次大战的震撼，不过事情应该还没有结束！"],["船长，我来报道啦！","那次大战真是难忘啊！"],[function():void
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
               NpcDialog.show(NPC.SHIPER,["恩，是" + MainManager.actorInfo.formatNick + "啊！你一定还沉寂在世纪之战的兴奋中吧！不过这次的较量中，雷神和迈尔斯谁都没有占到便宜！"],["是的，迈尔斯的确很强！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["看来幻影星的危机还没有解除，我们一刻都不能松懈啊！不知道迈尔斯是否已经清醒，不如..."],["报告船长！！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1123_1"),function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["\t真没想到会有这样的情况发生，但是赛小息他们正在执行其他任务，该派谁去呢！"],["我...我！派我去啊！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["罗杰船长，您放心，我一定可以顺利完成任务，这次的表现绝不会比赛小息他们逊色的！"],["好吧！那就派你去幻影星看看！"],[function():void
                           {
                              NpcDialog.show(NPC.SHIPER,["赛小息他们回来，我会立刻命令他们来支援你的，一切以安全为主，千万不能擅作主张！"],["明白，我这就出发！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1123_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(741);
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
