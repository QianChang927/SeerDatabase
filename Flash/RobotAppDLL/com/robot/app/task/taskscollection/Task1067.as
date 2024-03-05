package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1067
   {
      
      public static const TASK_ID:uint = 1067;
      
      public static var _map:BaseMapProcess;
      
      private static var cls:Class;
       
      
      public function Task1067()
      {
         super();
      }
      
      public static function initTaskForMap4(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(1);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  NpcController.showNpc(1);
               }
            });
         }
      }
      
      public static function initTaskForMap732(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep1();
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep3();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  initStep4();
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
      
      private static function initStep1() : void
      {
         taskMC.visible = true;
         AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
         {
            NpcDialog.show(NPC.HAIDAOTIEJIABING,["0xff0000比特大人0xffffff说了，今天如果不能完成0xff0000能量控制台0xffffff的运行，后果你们是知道的！"],["遵命！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["恩恩，你看这些海盗杂兵正在研制着什么东西，一定和七星天珠有关！"],["我也觉得如此！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["虽然这里看上去是有史以来海盗最大规模的据点，但是明显防御力不行啊！我这就摆平这些小喽喽！"],["小息，别意气用事啊！"],[function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["相信我啦！你要知道七星天珠的重要性，一旦被海盗利用，后果不堪设想啊！你们忘了曾经答应天珠守护者的承诺吗？"],["但是…"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["哈哈，这群笨蛋，你们是不会发现我的，看不见我…看不见我!"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.ATIEDA,["卡璐璐，你和" + MainManager.actorInfo.formatNick + "在这里留守，我去支援小息！加上我的实力，一定会没事的，放心啦！"],["哎…简直是胡闹！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.ZOG,["给我站住，比特大人真是料事如神啊！就知道你们会来这里找回七星天珠，别做梦了！啊哈哈哈！"],["什么！中埋伏了！！！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.ALLISON,["哈哈，知道失败的痛苦了吧！这次该轮到你们体会一下了！是不是很享受呢？"],["可恶的海盗！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.ZOG,["赶快启动能量控制台，比特大人的0xff0000七星计划0xffffff就要实现啦！麒麟、第五星系乃至整个宇宙都会被我们所控制！"],["果然是你们一手策划的！"],[function():void
                                                   {
                                                      NpcDialog.show(NPC.ZOG,["不怕告诉你们，我们已经收集齐了七星天珠，一旦0xff0000罗格星系形成星辰连珠0xffffff，那个怪物就要复苏了！"],["原来你们另有目的啊！"],[function():void
                                                      {
                                                         AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                                                         {
                                                            TasksManager.complete(TASK_ID,1,function(param1:Boolean = true):void
                                                            {
                                                               if(param1)
                                                               {
                                                                  initStep2();
                                                               }
                                                               else
                                                               {
                                                                  destroy();
                                                               }
                                                            });
                                                         });
                                                      }]);
                                                   }]);
                                                }]);
                                             });
                                          }]);
                                       });
                                    }]);
                                 });
                              });
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         });
      }
      
      private static function initStep2() : void
      {
         taskMC.visible = true;
         taskMC.gotoAndStop(9);
         NpcDialog.show(NPC.SAIXIAOXI,["不…你们不能这样！在这样下去可不行，这里是海盗的集中营，如果硬拼肯定不是他们的对手！"],["看来只有找他们了！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["恩，看来只有他们的出现才能将整个局面扭转！阿铁打，你准备好了吗？"],["我可一直在状态中哦！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["那我们现在就开始，海盗们你们的死期到了，出现吧！战神联盟！！！！！"],["什么？战神联盟？"],[function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1067_2"),function():void
                  {
                     taskMC.gotoAndStop(10);
                     NpcDialog.show(NPC.BULAIKE_NEW,["你们两个白痴，是在找我们吗？"],["不可能啊！"],[function():void
                     {
                        NpcDialog.show(NPC.KAXIUSI_WHITE,["你们这群无恶不作的家伙，接受战神联盟的审判吧！这是你们的荣誉！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.GAIYA,["本来我不想多管闲事！但是就你们这些菜鸟也想挑战我们的威信，这是不可容忍的！"],["尝尝我的怒火吧！"],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                              {
                                 NpcDialog.show(NPC.GAIYA,["雷伊，你为什么要阻止我，为什么！！！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.LEIYI,["盖亚，你先别冲动！我们要的不是它们，而是背后的问题！相信在它们身后一定有个主脑，一直在暗地里指挥着他们！"],["雷神，你果然不同凡响！"],[function():void
                                    {
                                       NpcDialog.show(NPC.SAIXIAOXI,["雷神！据说这里的最高指挥官是比特！是我亲耳听他们说的！"],["果然是这样！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.ZOG,["0xff0000比特大人0xffffff的第五舰队马上就要到了，到时候让你们插翅难飞！战神联盟，这次看你们如何脱身！"],["什么！海盗第五舰队？？"],[function():void
                                             {
                                                NpcDialog.show(NPC.ALLISON,["怕了吧！再说七星计划已经开始，罗格星系的星辰连珠即将出现，你们来不及啦！"],["迈尔斯，你是我们的！"],[function():void
                                                {
                                                   TasksManager.complete(TASK_ID,2,function(param1:Boolean = true):void
                                                   {
                                                      if(param1)
                                                      {
                                                         initStep3();
                                                      }
                                                      else
                                                      {
                                                         destroy();
                                                      }
                                                   });
                                                }]);
                                             }]);
                                          });
                                       }]);
                                    }]);
                                 });
                              });
                           }]);
                        });
                     }]);
                  });
               }]);
            }]);
         }]);
      }
      
      private static function initStep3() : void
      {
         /*
          * 反编译出错
          * 到达超时限制 (1 分) 
          * 指令数: 19
          */
         throw new flash.errors.IllegalOperationError("由于超时未反编译");
      }
      
      private static function initStep4() : void
      {
         taskMC.visible = true;
         taskMC.gotoAndStop(17);
         NpcDialog.show(NPC.ZOG,["哈哈，现在知道了吧！一天找不到你哥哥，你就一天不能对付我们！这就是现实，接受吧！尤米娜！"],["可恶！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
            {
               NpcDialog.show(NPC.YUMINA,["为什么！为什么我还是不能逃脱海盗的控制，可恶！"],null,null,false,function():void
               {
                  AnimateManager.playMcAnimate(taskMC,18,"mc",function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["看来尤米娜的身世不是这么简单的，赛小息这里就交给你们了，我们战神联盟这就去罗格星系一趟！"],["绝对不能让海盗先找到幻影星！"],[function():void
                     {
                        NpcDialog.show(NPC.KAXIUSI_WHITE,["对了，这颗机甲天珠你们好好保管，还有这些天珠，是我和布莱克在刚刚海盗身上找到的，现在物归原主！"],["哇！太好了，天珠又回来了！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,19,"mc",function():void
                           {
                              NpcDialog.show(NPC.SEER,["太好了，队长你快点把这个好消息带回赛尔号吧！这里就交给我吧！我一定会把这里闹个底朝天的！"],["赛尔，你可要小心海盗啊！"],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["放心吧！我已经身经百战了！"],["好，那我们赛尔号见！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,20,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["尤米娜，请相信我们，最后你一定可以找到哥哥并且回到米娜村的！"],["加油吧！赛尔！"],[function():void
                                       {
                                          TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                                          {
                                             var b:Boolean = param1;
                                             AnimateManager.playMcAnimate(doorMC,2,"mc",function():void
                                             {
                                                DisplayUtil.removeForParent(doorMC);
                                                destroy();
                                             });
                                          });
                                       }]);
                                    });
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  });
               });
            });
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 732)
         {
            return _map.conLevel["task1067MC"];
         }
         return null;
      }
      
      private static function get stoneMC() : MovieClip
      {
         if(MapManager.currentMap.id == 732)
         {
            return _map.topLevel["Stone"];
         }
         return null;
      }
      
      private static function get doorMC() : MovieClip
      {
         if(MapManager.currentMap.id == 732)
         {
            return _map.conLevel["doorMC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         KTool.showMapAllPlayerAndMonster();
         if(taskMC)
         {
            DisplayUtil.removeForParent(taskMC);
         }
         _map = null;
      }
   }
}
