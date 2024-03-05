package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1220
   {
      
      public static const TASK_ID:uint = 1220;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1220()
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
         NpcDialog.show(NPC.SHIPER,["赛尔号从未停止对迪恩的搜救，现在对迪恩的搜救范围正在不断扩大中！"],["搜救小队有没有什么新的进展呀？","我下次再来！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SHIPER,["我们连线一下前方的搜索小队，看看有什么进展！"],["恩恩！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1220_1"),function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["船长！我们从博士那得知搜索队遇到危险，就火速赶来了！让我们去支援吧！"],["不行！看起来那边非常凶险！"],[function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["船长，相信我们吧！我们也是身经百战的战士了！"],["...好吧，事态紧急，只好让你们去一趟了！"],[function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["但是一定不要冲动，要见机行事！务必要把探索小队成功解救！"],["恩！保证完成任务！先锋队出发！目标，魔神星！"],[function():void
                     {
                        AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1220_2"),function():void
                        {
                           TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                           {
                              if(param1)
                              {
                                 MapManager.changeMap(775);
                              }
                           });
                        });
                     }]);
                  }]);
               }]);
            },false);
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
