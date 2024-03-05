package com.robot.app.task.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_849
   {
      
      public static const TASK_ID:uint = 849;
      
      private static var panel:AppModel;
       
      
      public function TaskController_849()
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
         TasksManager.accept(TASK_ID,function():void
         {
            startPro();
         });
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_849_8"),function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_849_9"),function():void
                  {
                     TasksManager.complete(TASK_ID,0,function():void
                     {
                        MapManager.changeMap(690);
                     });
                  });
               },false);
            }
            else if(Boolean(a[0]) && !a[1])
            {
               NpcDialog.show(NPC.SEER,["丹迪，赛尔号观测到推特星的磁场发生了激烈变化！这是怎么一回事？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DANDI,[MainManager.actorInfo.formatNick + "，你们总算来了！推特星的状况很危险啊！"],["（丹迪开始描述推特星的现状……）"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("task_849_5"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["除去海盗夺走的木、火元素之星，我们已经有了金、水、土、暗4颗。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["管不了那么多了，先把已有的元素之星释放，看能否让推特星恢复到正常状态。"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.KALULU,["我建议尽快找到最后一颗光元素之星，多一股能量，就多一点成功机率！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.DANDI,["依稀记得，前任部落首领曾说过，光明顶是推特星的最高点，地势开阔大气，阳光普照，光元素之星很有可能被埋藏在那里。"],["那还等什么呢？赶紧出发吧。（前往光明顶）"],[function():void
                                 {
                                    TasksManager.complete(TASK_ID,1,function():void
                                    {
                                       MapManager.changeMap(700);
                                    });
                                 }]);
                              });
                           });
                        });
                     });
                  }]);
               });
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
