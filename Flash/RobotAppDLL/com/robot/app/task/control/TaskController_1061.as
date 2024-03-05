package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_1061
   {
      
      public static const TASK_ID:uint = 1061;
      
      private static var panel:AppModel;
       
      
      public function TaskController_1061()
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
         NpcDialog.show(NPC.SAIXIAOXI,["可恶的尤米娜，居然为了寻找七星天珠的下落假扮阿铁打到处恶作剧，再让我遇到非好好教训她不可！"],["赛小息，我来帮忙啦！","我只来打酱油的！"],[function():void
         {
            TasksManager.accept(TASK_ID,function(param1:Boolean):void
            {
               if(param1)
               {
                  startPro();
               }
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
               NpcDialog.show(NPC.SAIXIAOXI,["呀！赛尔，你来的正好，我们已经把事情的来龙去脉都告诉了船长，由此可以证明阿铁打的清白！"],["恩恩，我就知道阿铁打是无辜的！"],[function():void
               {
                  NpcDialog.show(NPC.KALULU,["哎…没事就好！不过好像上次我感到尤米娜并没有我们像的这么邪恶！我感觉她的内心一定有什么不可告人的秘密！"],["卡璐璐！你…"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1061_1"),function():void
                     {
                        NpcDialog.show(NPC.KALULU,["小息，你忘记了吗？上次我们听说米娜村出现危机，我想只要找到米娜村，答案自然会揭晓的！"],["恩恩，还是卡璐璐细心！"],[function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["哼，到时候你们就会知道她的真面目，看你们站在哪边！"],["出发吧！伙伴们！"],[function():void
                           {
                              NpcDialog.show(NPC.ATIEDA,["你们俩一艘飞船，我自己去！我不愿和不信任我的伙伴一起出行！"],["哎…真是个倔脾气的家伙！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1061_2"),function():void
                                 {
                                    TasksManager.complete(1061,0,function(param1:Boolean):void
                                    {
                                       if(param1)
                                       {
                                          MapManager.changeMap(731);
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
