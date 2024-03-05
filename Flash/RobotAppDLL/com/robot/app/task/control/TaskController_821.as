package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task821;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_821
   {
      
      public static const TASK_ID:uint = 821;
      
      private static var panel:AppModel;
       
      
      public function TaskController_821()
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
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_821_5"),function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               Task821.showBLZguide();
            });
         },false);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.DANDI,[MainManager.actorInfo.formatNick + "，你来了，我正准备联系你呢！"],["丹迪，接下来有什么计划吗？"],[function():void
               {
                  NpcDialog.show(NPC.DANDI,["我们应该找到其他三个部落的首领，把推特星的危急情况告诉大家，快速的把木、火、土元素之星也聚集起来。"],["有道理。"],[function():void
                  {
                     NpcDialog.show(NPC.DANDI,["这样我们一共就有金、木、火、土、暗5颗元素之星，只要再找到剩下的水、光元素之星，那推特星就有救了。"],["哈哈哈，丹迪你真聪明，就这么办。"],[function():void
                     {
                        NpcDialog.show(NPC.DANDI,["呵呵，我们现在先去新泽部落，新泽部落的首领杰西是我的好朋友。"],["Let’s go！"],[function():void
                        {
                           Task821.showBLZboss();
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && Boolean(a[4]) && !a[5])
            {
               NpcDialog.show(NPC.DANDI,["阿蕾蕾，杰西去哪里了？怎么没看到他！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ALEILEI,["丹迪，你们来晚了，杰西被抓走了！"],["什么？到底发生什么事情了！"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("task_821_3"),function():void
                     {
                        NpcDialog.show(NPC.ALEILEI,["事情的经过就是这样，那个蓝色的精灵真的太强了！我们根本就不是他的对手！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SEER,["瑞尔斯！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.DANDI,["杰西，无论如何我都会把你救出来！我发誓！"],null,null,false,function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_821_4"),function():void
                                 {
                                    TasksManager.complete(TASK_ID,5,function():void
                                    {
                                       Task821.hideDandiFor694();
                                    });
                                 });
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
