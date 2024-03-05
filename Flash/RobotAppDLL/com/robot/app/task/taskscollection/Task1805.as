package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1805
   {
      
      private static const TASK_ID:uint = 1805;
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function Task1805()
      {
         super();
      }
      
      public static function initFor790(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         var state:uint = uint(TasksManager.getTaskStatus(TASK_ID));
         if(state == TasksManager.UN_ACCEPT)
         {
            LevelManager.iconLevel.visible = false;
            _map.depthLevel["tumb"].visible = false;
            loadMC(function():void
            {
               acceptTask();
            });
         }
         else if(state == TasksManager.ALR_ACCEPT)
         {
            LevelManager.iconLevel.visible = false;
            _map.depthLevel["tumb"].visible = false;
            TasksManager.getProStatusList(TASK_ID,onCheckProStatus);
         }
         else
         {
            LevelManager.iconLevel.visible = true;
            _map.depthLevel["tumb"].visible = true;
         }
      }
      
      private static function onCheckProStatus(param1:Array) : void
      {
         var step:Array = param1;
         loadMC(function():void
         {
            if(!step[0])
            {
               startTask();
            }
            else if(Boolean(step[0]) && !step[1])
            {
               startStep1();
            }
            else if(Boolean(step[1]) && !step[2])
            {
               startStep2();
            }
         });
      }
      
      private static function acceptTask() : void
      {
         TasksManager.accept(TASK_ID,function(param1:Boolean):void
         {
            if(!param1)
            {
               return;
            }
            startTask();
         });
      }
      
      private static function startTask() : void
      {
         LevelManager.iconLevel.visible = false;
         KTool.hideMapPlayerAndMonster();
         NpcDialog.show(NPC.SEER,["一年一度的0xff0000万圣节0xffffff即将到来，船长命令我来这里勘察恶灵三巨头的动向，以防今年他们再继续制造麻烦！"],["恶灵三巨头真的会出现吗？ "],[function():void
         {
            MainManager.selfVisible = false;
            if(taskMC.parent == null)
            {
               _map.conLevel.addChild(taskMC);
            }
            AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
            {
               NpcDialog.show(NPC.SEER,["不好看来有情况，我先隐蔽一下，看来船长说的没错，恶灵三巨头真的相约南瓜决斗场了！"],["就让我仔细听听你们的诡计吧！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.LAMOSI,["难道你忘记去年的那匹黑天马了吗？我可不想再和他成为对手，要去你一个人去吧，别算上我！"],["拉摩斯你真的决定了吗？"],[function():void
                     {
                        NpcDialog.show(NPC.BIMOLA_NORMOL,["可是如今的纳斯琪已经拥有超进化能量，再说我们可是恶灵三巨头，这样拒绝他会不会太绝情了？"],["比莫拉，我不想每年都这样度过万圣节！"],[function():void
                        {
                           NpcDialog.show(NPC.BIMOLA_NORMOL,["每年万圣节，其他精灵都可以沉浸在欢乐中，而我们却要想尽一些方法搞破坏，这样的万圣节我情愿不过，我也不想成为恶灵三巨头，我要属于自己的万圣节？"],["拉摩斯，你想回头…太晚了！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                              {
                                 NpcDialog.show(NPC.LAMOSI,["什么万圣之约，今年万圣节我想自己做主，从今往后我再也不想顶着恶灵三巨头的称号，我想退出！"],["想退出可没这么简单！"],[function():void
                                 {
                                    NpcDialog.show(NPC.NASIQI_NORMOL,["拉摩斯你要知道，一旦你退出了恶灵三巨头，我们之间就是敌对关系了，你真的愿意这样吗？"],["好了…大家别再争了！"],[function():void
                                    {
                                       NpcDialog.show(NPC.BIMOLA_NORMOL,["别为了这样的事情大家伤了和气！纳斯琪既然拉摩斯不愿意你就不要再逼他了！"],["你们可别忘了，我们还是朋友！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                          {
                                             NpcDialog.show(NPC.SEER,["看来一场好戏就要上演了，让恶灵三巨头互相对决吧！这样今年的万圣节就会安静许多！"],["我再好好观察一下！"],[function():void
                                             {
                                                TasksManager.complete(TASK_ID,0,function(param1:Boolean):void
                                                {
                                                   if(!param1)
                                                   {
                                                      return;
                                                   }
                                                   startStep1();
                                                });
                                             }]);
                                          });
                                       }]);
                                    }]);
                                 }]);
                              });
                           }]);
                        }]);
                     }]);
                  });
               }]);
            });
         }]);
      }
      
      private static function startStep1() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 27
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function startStep2() : void
      {
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         if(taskMC.parent == null)
         {
            _map.conLevel.addChild(taskMC);
         }
         AnimateManager.playMcAnimate(taskMC,8,"mc8",function():void
         {
            NpcDialog.show(NPC.KULOUFASHI,["好了，小伙伴！现在只剩你一人，如果你想拯救奥莱德就按照我的说的做！"],["好吧！你说想怎么样吧！"],[function():void
            {
               NpcDialog.show(NPC.KULOUFASHI,["回去告诉战神联盟，今年的万圣节就是他们灭亡的时刻，我骷髅法师会在这里等着他们！"],["可恶的家伙！"],[function():void
               {
                  NpcDialog.show(NPC.KULOUFASHI,["我没什么耐心，如果想拯救奥莱德，你就带着战神联盟来这里找我吧！"],["你一定不是战神联盟的对手！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,9,"mc9",function():void
                     {
                        NpcDialog.show(NPC.KULOUFASHI,["你的时间有限，希望你能在奥莱德变成石碑前实现你的诺言，时间不等人！"],["等着吧！你一定会后悔的！"],[function():void
                        {
                           NpcDialog.show(NPC.SEER,["奥莱德，你等着我，不会太久的！战神联盟一定可以拯救你！"],["立刻通知战神联盟！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1805_1"),function():void
                              {
                                 DisplayUtil.removeForParent(taskMC);
                                 taskMC = null;
                                 TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                 {
                                    if(!param1)
                                    {
                                       return;
                                    }
                                    KTool.showMapAllPlayerAndMonster();
                                    _map.depthLevel["tumb"].visible = true;
                                    LevelManager.iconLevel.visible = true;
                                 });
                              },false);
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function loadMC(param1:Function) : void
      {
         var callback:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_790_0"),function(param1:MovieClip):void
         {
            taskMC = param1;
            callback();
         },"ani",3,false);
      }
      
      public static function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         DisplayUtil.removeForParent(taskMC);
         taskMC = null;
         _map = null;
      }
   }
}
