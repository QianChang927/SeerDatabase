package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1202
   {
      
      public static const TASK_ID:uint = 1202;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1202()
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
         NpcDialog.show(NPC.SHIPER,["这天终于到来了！圣战的脚步已经越来越近！恶魔星的探险，终于可以和魔圣尤尼卡做个了断了！"],["船长，赛尔前来报道！","我这就去准备一下！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         },null]);
      }
      
      public static function startPro() : void
      {
         NpcDialog.show(NPC.SHIPER,["哦...是赛尔啊！你来的正好，我正在策划进军恶魔星的事情呢？你找我有事吗？"],["船长，我们已经突破第七领域了！"],[function():void
         {
            NpcDialog.show(NPC.SHIPER,["恩恩，虽然你们已经离成功只差最后一步，但是这一次也是最艰难的一步啊！第八领域一定是尤尼卡和恶灵兽的领域！"],["但是我们不怕啊！"],[function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1202_1"),function():void
               {
                  NpcDialog.show(NPC.SHIPER,["不好，是阿铁打，他一定是独自前往恶魔星了！赛小息，现在我命令你们前往恶魔星，把阿铁打安全带回来！"],["遵命！船长！"],[function():void
                  {
                     NpcDialog.show(NPC.KALULU,["这家伙真是太鲁莽了，居然不和我们商量就擅做主张！等把他带回来，非好好教训他不可！"],["好了，现在不是争论的时候！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["这次我们面对的可是恶魔星最凶险的第八领域，但是无论如何都要把阿铁打带回来！"],["伙伴们，出发！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1202_2"),function():void
                           {
                              TasksManager.complete(TASK_ID,0,function(param1:Boolean = true):void
                              {
                                 if(param1)
                                 {
                                    MapManager.changeMap(773);
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
