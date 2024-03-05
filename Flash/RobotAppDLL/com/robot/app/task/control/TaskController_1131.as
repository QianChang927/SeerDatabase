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
   
   public class TaskController_1131
   {
      
      public static const TASK_ID:uint = 1131;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1131()
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
         NpcDialog.show(NPC.SHIPER,["世纪之战刚过去不久，迈尔斯和幻影星算是暂时摆脱了海盗集团的侵袭，不过那个恶魔旋涡到底是什么呢？"],["船长，又有新任务了吗？","我先去附近逛逛！"],[function():void
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
               NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，据赛小息汇报，上次你们在探险过程中发现了恶魔旋涡，看来幻影星的出现让整个宇宙都发生了变化！"],["都是海盗集团惹的祸！"],[function():void
               {
                  NpcDialog.show(NPC.SOLIDMAN,["船...船长！！我们找到了迪恩的铠甲，并且还发现了迪恩的微弱信号，相信这些代表了迪恩还活着！"],["真的吗？快给我看看！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1131_1"),function():void
                     {
                        NpcDialog.show(NPC.SEER,["船长，让我和赛小息他们去幻影星搜索迪恩的下落吧！上次我们遇到了守护恶魔旋涡的吉拉特，也许它会知道些什么!"],["恩恩，那你们就兵分两路吧！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["我的直觉告诉我，迪恩一定和恶魔旋涡有关...不过，没什么能难倒我们的！"],["向幻影星出发！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1131_2"),function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                 {
                                    if(param1)
                                    {
                                       MapManager.changeMap(746);
                                    }
                                 });
                              });
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
