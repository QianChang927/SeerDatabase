package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1160
   {
      
      public static const TASK_ID:uint = 1160;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1160()
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
         NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，你们还记的上次看见的0xff0000火鹿王0xffffff吗？我相信一定和里奥斯有关，从外形到眼神简直太像了！"],["队长，你说的是火山星的里奥斯？","瞎说，看上去不像！"],[function():void
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
               NpcDialog.show(NPC.SAIXIAOXI,["是的，看来恶魔星上所出现的精灵，都是我们至今为止闻所未闻的，不过现在首要的就是拯救米咔！"],["对哦！队长你有什么计划吗？"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["既然我们已经去过第三领域的火焰山脊，那么这次我们就该前往目的地-第四领域了！"],["好耶，终于能解开黑影的真面目了！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1160_1"),function():void
                     {
                        NpcDialog.show(NPC.LYMAN,["赛小息，你居然把自己的精灵都给弄丢了，你还有什么用，这件事情我一定要告诉船长，让他来定夺！"],["不不...雷蒙教官，我们知道错了！"],[function():void
                        {
                           NpcDialog.show(NPC.KALULU,["雷蒙教官，丢失米咔是我们大家责任，不是赛小息一个人的，如果真的要惩罚的话就连我们几个一起罚吧！"],["卡璐璐...你！！"],[function():void
                           {
                              NpcDialog.show(NPC.LYMAN,["这个团队越来越优秀了！赛小息，我给你一天的时间，把米咔和探险小队一起安全的带回来！"],["是，雷蒙教官！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["这次我们一定会吧米咔带回来的！伙伴们，准备出发！"],["目标...恶魔星第四领域！"],[function():void
                                 {
                                    AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1160_2"),function():void
                                    {
                                       TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                       {
                                          if(param1)
                                          {
                                             SocketConnection.send(1022,84494464);
                                             MapManager.changeMap(756);
                                          }
                                       });
                                    });
                                 }]);
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
