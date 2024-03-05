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
   
   public class TaskController_1067
   {
      
      public static const TASK_ID:uint = 1067;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1067()
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
         NpcDialog.show(NPC.SHIPER,["米娜村落的危机日趋严重，看来背后一定有更大的阴谋存在，莱恩那星上一定有海盗的据点！"],["船长，赛尔前来报到！","海盗，你们等着！"],[function():void
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
               NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，我正想召集赛小息他们呢！莱恩那星一定不简单，我估计上面的海盗数量一定不少！"],["什么！海盗据点？？？"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["恩恩，我想这次海盗的卷土重来，一定和第五星系乃至麒麟有关！这次赛尔号的任务非常艰巨！"],["恩恩，不过我们一定会胜利的！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1067_0"),function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["看来这一定是海盗的作为，没想到这次它们能够轻松的进入赛尔号盗走七星天珠，想必这次他们是有备而来！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["船长，请您将这个任务交给我们吧！再怎么说也是我把七星天珠弄丢的，所以我有义务也有责任找回来！"],["赛小息…你…"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，让我们去和海盗做次游戏吧！向着海盗据点出发！"],["前往莱恩那星！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1067_1"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(732);
                                       }
                                       else
                                       {
                                          destroy();
                                       }
                                    });
                                 });
                              }]);
                           }]);
                        });
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
