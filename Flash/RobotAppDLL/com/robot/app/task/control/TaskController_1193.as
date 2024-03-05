package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1193
   {
      
      public static const TASK_ID:uint = 1193;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1193()
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
         NpcDialog.show(NPC.SHIPER,["恶灵兽，这种神秘的精灵居然一直存在于尤尼卡的躯壳内，简直太不可思议了！"],["船长，雷伊他受伤了！","我一定要击败恶灵兽！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SHIPER,["恩，赛小息他们已经把雷伊受伤的事情告诉我了，就连雷伊也不是它们的对手，看来这次圣战非常棘手啊！"],["不，雷伊一定会好起来的！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["但愿吧！如果这次雷伊不能参加圣战，那么对于我们来说是一个非常不幸的消息！"],["放心吧！船长，我一定会帮助雷伊的！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1193_1"),function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["罗杰船长，我恳求您，把这次任务交给我们吧！雷伊的负伤，我们也有责任，就让我们去弥补上次的过失吧！"],["恳求你了，船长！"],[function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["好吧！既然你们决心已定，那就派你们去恶魔星走一趟，虽然你们已经无限接近0xff0000第八领域0xffffff，但是万事还是要小心！"],["放心吧，船长！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，这次我们的目的地就是恶魔星的0xff0000第七领域0xffffff，只有冲破那里我们才能进入最后的0xff0000第八领域0xffffff，大家有没有信心！"],["有...信心满满！准备出发！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1193_2"),function():void
                           {
                              TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(770);
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
