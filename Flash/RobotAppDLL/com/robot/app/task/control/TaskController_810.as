package com.robot.app.task.control
{
   import com.robot.app.mapProcess.active.SpecialPetActive;
   import com.robot.app.task.taskscollection.Task810;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.mode.AppModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class TaskController_810
   {
      
      public static const TASK_ID:uint = 810;
      
      private static var panel:AppModel;
       
      
      public function TaskController_810()
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
         var acceptTask:Function = function():void
         {
            TasksManager.accept(TASK_ID,function():void
            {
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_810_1"),function():void
               {
                  MapManager.changeMap(688);
               },false);
            });
         };
         if(SpecialPetActive._gaiya)
         {
            NpcDialog.show(NPC.GAIYA,["我会向世界证明！谁才是真正的战神！"],["#101伯利兹的生命密码","与盖亚对战！","哇哦哦！盖亚最牛！"],[function():void
            {
               acceptTask();
            },function():void
            {
               SpecialPetActive.fightWithGaiya();
            }]);
         }
         else
         {
            acceptTask();
         }
      }
      
      public static function startPro() : void
      {
         TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
         {
            var a:Array = param1;
            if(!a[0])
            {
               Task810.showGaiya();
               NpcDialog.show(NPC.NADUO,["呀呀呀！" + MainManager.actorInfo.formatNick + "，你怎么和这个坏家伙变成一伙的啦！大骗子！"],["？？？？"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["纳多，你误会了，这是盖亚，上次来捣乱的叫瑞尔斯，是他的哥哥。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.NADUO,["我晕倒！他们俩长得可是一模一样啊，额……除了颜色稍稍有些区别！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.GAIYA,[MainManager.actorInfo.formatNick + "已经把推特星的事告诉我了，我一定会尽全力帮助你们，这也算是为我哥哥的恶行赎罪！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.NADUO,["哇哦！那真是太感谢你啦！不过说实话，盖亚，我觉得你哥哥长得比你帅一些。"],["…………"],[function():void
                           {
                              Task810.prepareToFight();
                           }]);
                        });
                     });
                  });
               }]);
            }
            else if(Boolean(a[0]) && Boolean(a[1]) && !a[2])
            {
               NpcDialog.show(NPC.NADUO,[MainManager.actorInfo.formatNick + "你太厉害了！还有盖亚，哇哦！瞬间就把海盗打到外太空去啦！"],["哈哈哈哈！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["嘿嘿，赛尔先锋队可不是浪得虚名的，盖亚就更不用说啦，全宇宙著名的战斗大师哦，我的偶像呢！"],["厉害！厉害！"],[function():void
                  {
                     NpcDialog.show(NPC.NADUO,["哦，对了，有一件紧急的事情要拜托你们。"],["没问题，赶紧说。"],[function():void
                     {
                        NpcDialog.show(NPC.NADUO,["我们加利部落的首领丹迪，自从上次把入侵的坏蛋引走后，就一直没回来，真不知道他现在的安危如何。"],["你知道他是往哪个方向去的吗？！"],[function():void
                        {
                           NpcDialog.show(NPC.NADUO,["嗯，是东面，伯利兹广场方向。"],["OK！咱们立刻出发。"],[function():void
                           {
                              TasksManager.complete(TASK_ID,2,function():void
                              {
                                 Task810.showBLZguide();
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }
            else if(Boolean(a[0]) && Boolean(a[1]) && Boolean(a[2]) && Boolean(a[3]) && !a[4])
            {
               NpcDialog.show(NPC.NADUO,["丹迪，你的模样怎么变成这样，到底发生了什么事情！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.DANDI,["纳多，这两位是谁？"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.NADUO,["…………"],["（纳多把认识赛尔和盖亚的过程从头到尾叙述了一遍）"],[function():void
                     {
                        NpcDialog.show(NPC.DANDI,["我明白了！非常感谢俩位的帮助，为了保卫推特星，我有必要把伯利兹一族的秘密告诉你们。"],null,null,false,function():void
                        {
                           CartoonManager.play(ClientConfig.getFullMovie("task_810_5"),function():void
                           {
                              NpcDialog.show(NPC.DANDI,["我现在的模样就是变身以后的效果，这也是每个部落领袖必须继承的能力！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SEER,["原来如此！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.GAIYA,["丹迪，等推特星的状况恢复正轨，我们一定要好好较量！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.DANDI,["哈哈哈，没问题！到时你就尝尝我们伯利兹精灵的威力吧。"],null,null,false,function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_810_4"),function():void
                                          {
                                             TasksManager.complete(TASK_ID,4,function():void
                                             {
                                                Task810.hideNPCs();
                                             });
                                          });
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     }]);
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
