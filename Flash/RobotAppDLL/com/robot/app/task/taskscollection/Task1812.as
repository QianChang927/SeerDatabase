package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1812
   {
      
      private static const TASK_ID:uint = 1812;
      
      private static var _map:BaseMapProcess;
      
      private static var taskMC:MovieClip;
       
      
      public function Task1812()
      {
         super();
      }
      
      public static function initFor790(param1:BaseMapProcess) : void
      {
         var state:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         _map.depthLevel["tumb"].visible = false;
         state = uint(TasksManager.getTaskStatus(TASK_ID));
         if(state == TasksManager.UN_ACCEPT)
         {
            LevelManager.iconLevel.visible = false;
            loadMC(function():void
            {
               SocketConnection.send(1022,86063780);
               acceptTask();
            });
         }
         else if(state == TasksManager.ALR_ACCEPT)
         {
            LevelManager.iconLevel.visible = false;
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
         NpcDialog.show(NPC.KULOUFASHI,["奥莱德，看来你的朋友是不会来拯救你了，就连正义代表的战神联盟都不敢来这里，我看你还是加入我们暗黑军团吧！"],["别做梦了，我是不会屈服的！ "],[function():void
         {
            MainManager.selfVisible = false;
            if(taskMC.parent == null)
            {
               _map.conLevel.addChild(taskMC);
            }
            AnimateManager.playMcAnimate(taskMC,1,"mc1",function():void
            {
               NpcDialog.show(NPC.SEER,["住手！骷髅法师，不准你伤害我的朋友，快点放了他！我愿意代替他！"],["哼哼…小子你是在和我谈条件吗！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
                  {
                     NpcDialog.show(NPC.NASIQI_NORMOL,["骷髅法师，别这么麻烦了，让我一次解决了他们俩！"],["等等战神联盟还没出现呢！"],[function():void
                     {
                        NpcDialog.show(NPC.KULOUFASHI,["我的目标可是的战神联盟，这些小角色我不在乎，留给你们消遣一下吧！"],["哼哼…这下该我出手了！"],[function():void
                        {
                           NpcDialog.show(NPC.NASIQI_NORMOL,[MainManager.actorInfo.formatNick + "还记得去年的万圣节吗？是你让我知道该如何变的强大，如今就让你看看我的成长吧！"],["纳斯琪，你想干什么，住手！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
                              {
                                 NpcDialog.show(NPC.AOLAIDE,["纳斯琪，有什么冲我来，别伤及无辜！有本事你把我放开，看我不修理你！"],["失败者，你只需要欣赏就可以了！"],[function():void
                                 {
                                    NpcDialog.show(NPC.LAMOSI,["可恶…战神联盟怎么还不来，这样下去奥莱德和" + MainManager.actorInfo.formatNick + "快撑不住了！"],["拉摩斯，你别太过分了！"],[function():void
                                    {
                                       NpcDialog.show(NPC.KULOUFASHI,["拉摩斯，我不会给你太多的机会，你自己好好想清楚自己的立场，如果再让我听到类似这样叛逆的话，下一个就是你！"],["可恶…"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,4,"mc4",function():void
                                          {
                                             NpcDialog.show(NPC.KULOUFASHI,["战神联盟，来的正是时候，据说你们的联盟审判很强，让我来体会一下你们的终极实力吧！"],["不自量力的家伙！"],[function():void
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
         LevelManager.iconLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         if(taskMC.parent == null)
         {
            _map.conLevel.addChild(taskMC);
         }
         AnimateManager.playMcAnimate(taskMC,5,"mc5",function():void
         {
            NpcDialog.show(NPC.KULOUFASHI,["德库拉想不到你也来了，怎么你也想和我抗衡吗？"],["呵呵，骷髅法师，你是胆怯了吗？"],[function():void
            {
               NpcDialog.show(NPC.KULOUFASHI,["哼哼…胆怯是我的给予对手的映像！我没空招呼你，你也别在这里破坏我的计划！"],["否则休怪我对你不客气！！"],[function():void
               {
                  NpcDialog.show(NPC.NASIQI_NORMOL,["黑暗男爵，不如你也加入我们的行列一起对付战神联盟吧！相信你一定会很乐意的！"],["当真，那我绝对义不容辞！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,6,"mc6",function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["战神联盟，挑战再次放在我们面前，让我们齐心协力，抵御邪恶力量吧！！"],["大家一起上吧！！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_20131025_1"),function():void
                           {
                              NpcDialog.show(NPC.KULOUFASHI,["没到想到战神联盟如此强大，看来这次决斗又要继续延续下去了！"],["我们是不会就这么罢休的！"],[function():void
                              {
                                 NpcDialog.show(NPC.LEIYI,["不管怎么样，只要有我们战神联盟在，所有的邪恶势力必须消失！"],["雷伊说的没错！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,7,"mc7",function():void
                                    {
                                       NpcDialog.show(NPC.LAMOSI,["不好…大家赶快离开这里，否则都会没命的！！"],["发生什么事情了！"],[function():void
                                       {
                                          NpcDialog.show(NPC.LAMOSI,["骷髅法师正在召唤邪能陨石，这些陨石就像雨点般的抵达这里，只要邪能陨石抵达的领域，都会被摧毁！"],["真的吗？？"],[function():void
                                          {
                                             NpcDialog.show(NPC.LEIYI,["伙伴们，为了拯救奥莱德以及南瓜星，我们拿出最终的奥义吧！"],["联盟的审判！时刻准备着！"],[function():void
                                             {
                                                TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                                                {
                                                   if(!param1)
                                                   {
                                                      return;
                                                   }
                                                   startStep2();
                                                });
                                             }]);
                                          }]);
                                       }]);
                                    });
                                 }]);
                              }]);
                           });
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
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
            NpcDialog.show(NPC.SEER,["暗黑军团呢？奥莱德也不在了，怎么会这样呢！"],["看来是被他们逃跑了！"],[function():void
            {
               NpcDialog.show(NPC.LEIYI,["大家别灰心，骷髅法师一定是转移了地点！伙伴们，事不宜迟我们继续搜寻暗黑军团的下落！"],["一定要在万圣节前消灭他们！"],[function():void
               {
                  NpcDialog.show(NPC.LEIYI,[MainManager.actorInfo.formatNick + "包围南瓜星的任务就交给你了，等我们胜利的消息吧！"],["恩恩，雷神，你放心吧！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,9,"mc9",function():void
                     {
                        NpcDialog.show(NPC.SEER,["战神联盟，你们一定要凯旋而归啊！今年的万圣节全靠你们了！"],["于此同时，暗黑军团又在何处呢！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_20131025_1_f"),function():void
                           {
                              DisplayUtil.removeForParent(taskMC);
                              taskMC = null;
                              SocketConnection.send(1022,86063781);
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
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function loadMC(param1:Function) : void
      {
         var callback:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_790_1"),function(param1:MovieClip):void
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
