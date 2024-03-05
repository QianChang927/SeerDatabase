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
   
   public class TaskController_1111
   {
      
      public static const TASK_ID:uint = 1111;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1111()
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
         NpcDialog.show(NPC.SHIPER,["看来，现在幻影星已经成为海盗不可或缺的领地了，如今海盗已经拥有迈尔斯强大的能量，在实力上又增强了不少！"],["船长，让我去幻影星吧！","还是先看看情况再说！"],[function():void
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
               NpcDialog.show(NPC.SHIPER,["不行，如今幻影星已经成为危险之地，第二个圣灵系精灵居然成为海盗集团的利用品，一定要想办法拯救它才行！"],["但是迈尔斯实力非同小可啊！"],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["恩，这个么...看来只有靠他了！迈尔斯的儿子蒙特可能会知道些关于这方面的办法！"],["蒙塔正在实验室呢！"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1111_1"),function():void
                     {
                        NpcDialog.show(NPC.SEER,["罗杰船长，看着蒙塔这样，心里真不是滋味！就让我再去次幻影星吧！我一定会完成任务的！"],["事情没你想的这么简单！"],[function():void
                        {
                           NpcDialog.show(NPC.SHIPER,["看来只有这样了！0xFF0000" + MainManager.actorInfo.formatNick + "0xFFFFFF你带着蒙塔和赛小息他们一起前往幻影星吧！如果遇到雷伊，一定要化解他和迈尔斯的误会，这场战争决不能发生！"],["恩恩，我明白了！"],[function():void
                           {
                              NpcDialog.show(NPC.SEER,["蒙塔，我一定会帮你找回迈尔斯的！幻影星上的海盗们，你就给我好好等着吧！"],["前往幻影星！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1111_2"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(742);
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
