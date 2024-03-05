package com.robot.app.task.taskscollection
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1172
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _taskState:uint;
      
      private static const TASK_ID:uint = 1172;
       
      
      public function Task1172()
      {
         super();
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["task1172mc"];
      }
      
      public static function initForMap698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         if(_taskState == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(113);
         }
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(113);
               }
            });
         }
      }
      
      public static function initForMap767(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _taskState = TasksManager.getTaskStatus(TASK_ID);
         MainManager.selfVisible = false;
         if(_taskState == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  CommonUI.addYellowExcal(_map.topLevel,188,264);
                  MapListenerManager.add(taskMC,pro1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  pro2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  pro3();
               }
               else
               {
                  destroy();
               }
            });
         }
         else
         {
            destroy();
         }
      }
      
      private static function pro1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         CommonUI.removeYellowExcal(_map.topLevel);
         NpcDialog.show(NPC.SAIXIAOXI,["看！是雷伊！它好像正在做什么！"],["快看雷伊的背后！"],[function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1172_3"),function():void
            {
               NpcDialog.show(NPC.BULAIKE,["糟糕！雷伊的伤势发作了！"],["可惜！"],[function():void
               {
                  NpcDialog.show(NPC.LEIYI,["想不到还是功亏一篑！"],["怎么回事？"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["我没事！小息，赛尔，你们来了"],["刚才的翅膀是怎么回事？"],[function():void
                        {
                           NpcDialog.show(NPC.LEIYI,["在我被自己的雷神天鸣闪击中的时候，我似乎领悟到了一点雷光之翼的奥秘！"],["啊！雷光之翼！"],[function():void
                           {
                              NpcDialog.show(NPC.LEIYI,["雷光之翼是雷电系力量的最高奥义！连我都一直以为只是一个传说！"],["但是现在出现了！"],[function():void
                              {
                                 NpcDialog.show(NPC.LEIYI,["不错！在和恶灵兽战斗时我体内的雷电力量就觉醒了！刚才我本来想趁热打铁完成雷光之翼的！ "],["是伤势影响了你吗？"],[function():void
                                 {
                                    NpcDialog.show(NPC.LEIYI,["是的！由于伤势的影响，结果功亏一篑！"],["雷伊，你不要灰心！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.MUMU,["你其实已经成功的凝结出了雷光之翼！只要能找回刚才散落的雷神之羽！待你伤势稳定，就可以完全觉醒！"],null,null,false,function():void
                                          {
                                             TasksManager.complete(TASK_ID,1,function(param1:Boolean):void
                                             {
                                                if(param1)
                                                {
                                                   pro2();
                                                }
                                             });
                                          });
                                       });
                                    }]);
                                 }]);
                              }]);
                           }]);
                        }]);
                     });
                  }]);
               }]);
            });
         }]);
      }
      
      private static function pro2() : void
      {
         taskMC.gotoAndStop(3);
         NpcDialog.show(NPC.LEIYI,["恶灵兽非常强大，我必须抓紧时间领悟雷神之翼的力量，突破新的境界！"],["那你有什么打算呀！"],[function():void
         {
            NpcDialog.show(NPC.LEIYI,["我决定，从现在开始就在这雷神秘境展开修炼！在成功之前，我不会离开这里！"],["可是，战神联盟不能没有首领！"],[function():void
            {
               NpcDialog.show(NPC.LEIYI,["布莱克！我委托你暂时代替我行使战神联盟队长的责任！相信在兰特的帮助下，你一定可以胜任！"],["好吧！我等你早日归来！"],[function():void
               {
                  NpcDialog.show(NPC.BULAIKE,["好吧！不过战神联盟永远只有一个队长，那就是你，雷伊！"],["我们会帮你护法！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["哗，这可算的上是宇宙中最牢固的防御！有你们护法，雷伊一定可以安心养伤并领悟雷光之翼的奥秘！ "],["我们也想帮忙！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                           {
                              NpcDialog.show(NPC.MUMU,["大家可以一起帮雷伊收集散落的雷神之羽，这可以帮助它更早的领悟雷光之翼的奥秘！"],["好的！包在我们身上！"],[function():void
                              {
                                 TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                 {
                                    if(param1)
                                    {
                                       pro3();
                                    }
                                 });
                              }]);
                           });
                        }]);
                     });
                  }]);
               }]);
            }]);
         }]);
      }
      
      private static function pro3() : void
      {
         taskMC.gotoAndStop(5);
         AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["好样的米咔，原来你发现了一片雷神之羽！"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
               {
                  NpcDialog.show(NPC.MUMU,["我已经预料到了！8月31日，雷光之翼必将完成！"],null,null,false,function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("task_1172_4"),function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["太好了！我们快点出发，一起去帮雷伊收集雷神之羽！8月31日，我们一定来见证雷光之翼的诞生！"],["好的！我们分头行事！8月31日！不见不散！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                           {
                              TasksManager.complete(TASK_ID,3,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    destroy();
                                 }
                              });
                           });
                        }]);
                     });
                  });
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         MainManager.selfVisible = true;
         if(_map)
         {
            if(MapManager.currentMap.id == 767)
            {
               CommonUI.removeYellowExcal(_map.topLevel);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
