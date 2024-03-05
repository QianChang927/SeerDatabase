package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task815;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_815
   {
      
      public static const TASK_ID:uint = 815;
      
      private static var panel:AppModel;
       
      
      public function TaskController_815()
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
         NpcDialog.show(NPC.DANDI,[MainManager.actorInfo.formatNick + "，推特星现在的情况十分危急，希望你能帮助我们度过这次难关！"],["放心！我们一定会赶走海盗邪灵的！"],[function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               startPro();
            });
         }]);
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               NpcDialog.show(NPC.DANDI,["海盗邪灵只是当前的小阻碍，其实推特星正面临着空前巨大的灾难！"],["啊！究竟发生什么事情了？"],[function():void
               {
                  NpcDialog.show(NPC.DANDI,["我必须得破例了，把我们部落领袖千年来一直传承守护的星球秘密告诉你。"],["哇！丹迪，感谢你对我的信任！"],[function():void
                  {
                     NpcDialog.show(NPC.DANDI,[""],["（丹迪开始讲述推特星的故事……）"],[function():void
                     {
                        CartoonManager.play(ClientConfig.getFullMovie("task_815_1"),function():void
                        {
                           NpcDialog.show(NPC.SEER,["呀！原来推特星还有这么一段历史啊，太神奇了。"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.DANDI,[MainManager.actorInfo.formatNick + "，我们现在回加利部落找小绿，在引开海盗之前，我特意把“金元素之星”交给她保管了！"],["Ok！出发咯。"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,0,function():void
                                 {
                                    Task815.showGuideTo688();
                                 });
                              }]);
                           });
                        });
                     }]);
                  }]);
               }]);
            }
            else if(Boolean(a[0]) && !a[1])
            {
               NpcDialog.show(NPC.XIAOLV,["丹迪，你总算是平安回来了，我们真的很担心你。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DANDI,["呵呵，小绿，放心吧，我没事。对了，“金元素之星”呢？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.XIAOLV,["被我保护的好好的呢！拿好咯，物归原主。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.DANDI,["“金元素之星”不是我一个人的，它是加利部落伯利兹精灵们共有的宝物。"],null,null,false,function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_815_2"),function():void
                           {
                              TasksManager.complete(TASK_ID,1,function():void
                              {
                                 Task815.showGuideTo690();
                              });
                           });
                        });
                     });
                  });
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
