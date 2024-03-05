package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1096
   {
      
      public static const TASK_ID:uint = 1096;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1096()
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
         NpcDialog.show(NPC.SHIPER,["自从幻影星显现至今，有件事一直让我寝食难安。一旦迈尔斯变成我们的敌人，那该是多可怕的事情啊！"],["船长，我可以帮到你吗？","最后的胜利属于我们！"],[function():void
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
               NpcDialog.show(NPC.SHIPER,["恩恩，赛尔你来的正好！就目前来说，我们对幻影星还是非常陌生的，如果在这时期被海盗集团乘虚而入，那就太不幸了！"],["船长，您的意思是..."],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["没错，我们一定要无限接近幻影星，最关键的就是守护迈尔斯，绝对不能让海盗得逞，在这之前我们一定要恶补一下了！"],["船长，什么叫恶补一下啊！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1096_1"),function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["赛尔，事不宜迟，对于幻影星的探险计划必须马上开始！不管怎样，我们都不能放弃，一定要守卫迈尔斯！"],["是的，船长！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["我已经委派赛小息他们提前抵达幻影星，你也去和他们会合吧！万事小心！"],["恩恩，放心吧！船长！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["队长、阿铁打、卡璐璐，在幻影星等着我吧！"],["立刻前往幻影星！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1096_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(738);
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
