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
   
   public class TaskController_1139
   {
      
      public static const TASK_ID:uint = 1139;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1139()
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
         NpcDialog.show(NPC.SAIXIAOXI,["自从上次和0xff0000尤尼卡0xffffff交手来看，尤米娜的哥哥是个深不可测的对手，恶魔旋涡一定是个险恶之地！"],["队长，终于找到你们了！","赛尔是不会畏惧的！"],[function():void
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
               NpcDialog.show(NPC.SAIXIAOXI,[MainManager.actorInfo.formatNick + "，你来的正好，咱们正在讨论关于0xff0000恶魔旋涡0xffffff的事情呢！不过，仙女龙不知道现在怎么样了！"],["是啊!我们也很担心！"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["关于仙女龙的伤势，我想咱们应该去找博士问问，看看能有什么办法帮助她！"],["对哦！咱们现在就连线博士！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1139_1"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["太好了，想不到吉拉特竟然可以找到博士帮忙！伙伴们，接下来我们也该行动了，为仙女龙讨回公道！"],["我们真的要去恶魔旋涡吗？"],[function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["是的，作为赛尔探险小分队的成员，我们不能畏惧！不过，刚刚吉拉特所说的恶魔星究竟在哪里呢？"],["这个么，应该不容易找！"],[function():void
                           {
                              NpcDialog.show(NPC.ATIEDA,["恩恩，没错！我们这次一定要找到恶魔星，并且要找到萨多拉尼，我的双刀已经准备就绪了！"],["伙伴们，准备出发！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1139_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(748);
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
