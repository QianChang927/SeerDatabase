package com.robot.app.task.control
{
   import com.robot.app.task.taskscollection.Task836;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_836
   {
      
      public static const TASK_ID:uint = 836;
      
      private static var panel:AppModel;
       
      
      public function TaskController_836()
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
               NpcDialog.show(NPC.SHIPER,[MainManager.actorInfo.formatNick + "，你来的正好，有个好消息要告诉你哦！"],["快说，快说，我可等不及了！ "],[function():void
               {
                  NpcDialog.show(NPC.SHIPER,["我安排了赛小息、卡璐璐、阿铁打、还有最萌的精灵伙伴——米咔与你组成推特星行动战队。"],["真的吗？太棒了，我早就听说过他们的英雄事迹了。"],[function():void
                  {
                     NpcDialog.show(NPC.SHIPER,["嗯，推特星目前的情况十分严峻，所以我必须派出精英战士与你共同完成拯救推特星的任务。"],["哇哦哦，能与他们合作真是荣幸啊！"],[function():void
                     {
                        NpcDialog.show(NPC.SHIPER,["他们几个就在放映厅，赶紧过去汇合吧。"],["嗯，我立刻就去。"],[function():void
                        {
                           TasksManager.complete(TASK_ID,0,function():void
                           {
                           });
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(Boolean(a[0]) && !a[1])
            {
               Task836.prepareForFlyGame();
            }
            else if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
            {
               NpcDialog.show(NPC.SEER,["丹迪，这是我们的新战友赛小息、卡璐璐、阿铁打，他们已经找到杰西被囚禁的所在地了。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DANDI,["真的吗？太感谢你们了，现在就去解救我的好朋友吧！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["海盗在罗格星系的拉铂尔星修建了地下之城，伯利兹精灵就是被关在那里。海盗基地守卫森严，咱们不能去太多人，以免被发现。"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.KALULU,["我和阿铁打留在推特星，赛小息、" + MainManager.actorInfo.formatNick + "、丹迪去拉铂尔星解救部落首领。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.ATIEDA,["我才不要留在这里呢，我要和海盗大战一场！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.SEER,["阿铁打，海盗随时都会突袭推特星！你这么厉害，一定能把敌人打得屁滚尿流！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.DANDI,["是呀，阿铁打，有你这样的勇士守卫推特星，我才能放心啊！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.ATIEDA,["哈哈，好吧！既然大家都知道我厉害，那我就义不容辞的留守在这里啦。"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["哈哈哈！" + MainManager.actorInfo.formatNick + "、丹迪、咱们出发！"],["（前往拉铂尔星）"],[function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_836_2"),function():void
                                          {
                                             TasksManager.complete(TASK_ID,2,function():void
                                             {
                                                MapManager.changeMap(515);
                                             });
                                          });
                                       }]);
                                    });
                                 });
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
