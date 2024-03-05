package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1156
   {
      
      public static const TASK_ID:uint = 1156;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1156()
      {
         super();
      }
      
      public static function initTaskFor698(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            NpcController.showNpc(113);
         }
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
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
      
      public static function initTaskFor753(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            _map.conLevel["sptBoss"].visible = false;
            if(_map.depthLevel["shenShouNpc"])
            {
               _map.depthLevel["shenShouNpc"].visible = false;
            }
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  KTool.hideMapAllPlayerAndMonster();
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
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
      
      private static function initStep1(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
         taskMC.buttonMode = false;
         taskMC.gotoAndStop(2);
         NpcDialog.show(NPC.SAIXIAOXI,["终于到了，这里就是0xff0000恶魔星的第三领域0xffffff，看上去和火山星有点类似，这里一定有火系的将领看守着，大家小心！"],["恩恩，让我们先探索一下吧！"],[function():void
         {
            NpcDialog.show(NPC.ATIEDA,["不管是什么都阻止不了我们拯救米咔的决心，赛小息你说对吗？"],["没错，继续前进吧！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["一定要迅速通过这里，否则我们都会被这里灼热的熔岩热量烤焦的，虽然我们是机器人但是部件也受不了如此高温的考验！"],["让我们快速通过这里！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["这都是什么，怎么无端端出现这么多的火球呢？大伙有没有受伤啊！"],["没事，我们都没事！"],[function():void
                        {
                           NpcDialog.show(NPC.KALULU,["看来这里一定有玄机，难道是守护这里的将领吗？一定要找到他，否则我们很难通过这里！"],["一些火球，不算什么！"],[function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["你们在这里等我，让我再尝试一下，为了米咔，我不可能在这里浪费时间，更不可能停下脚步！"],["小息，别乱来啊！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["我是不会放弃的，就算再怎么受伤，爬也要爬过去！"],["米咔还在等着我呢？"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.YUMINA,["赛小息，这里可是恶魔星第三领域，如果一直这样乱来，还没来得及见到米咔，你已经不省人事了！"],["可是，我着急啊！"],[function():void
                                          {
                                             NpcDialog.show(NPC.KALULU,["尤米娜，你怎么知道米咔的事情？难道你是尤尼卡派来的吗？"],["你们说可能吗？"],[function():void
                                             {
                                                NpcDialog.show(NPC.YUMINA,["其实我很早就抵达了这里，刚才正好听见你们在说米咔失踪的事情，所以见到赛小息为了米咔这样，才出手相救的！"],["尤米娜，你愿意帮助我们吗？"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.YUMINA,["相信这些能量球可以帮助你们抵御这些带有电力的火球！哥哥，你究竟在哪里？我不能让你在这样继续下去了！"],["什么，带电的火球？"],[function():void
                                                      {
                                                         NpcDialog.show(NPC.SAIXIAOXI,["尤米娜，放心我们一定会帮助你的，不过现在首要的目的就先通过这里，抵达第四领域！"],["伙伴们，我们走！"],[function():void
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
                           }]);
                        }]);
                     });
                  }]);
               });
            }]);
         }]);
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(7);
         AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
         {
            NpcDialog.show(NPC.KALUOTELI,["哼哼，小子挺有办法的嘛！居然可以抵御我的电火球，不过你也只能止步到这儿了！我是不会让你们继续前进的！"],["你是谁，难道是守护这里的将领？"],[function():void
            {
               NpcDialog.show(NPC.KALUOTELI,["哈哈，我可不是什么将领，守护这里的可是0xff0000火鹿王-里奥杰斯0xffffff，你们就别想顺利通过这里了！"],["什么，火鹿王？？？"],[function():void
               {
                  NpcDialog.show(NPC.KALUOTELI,["别这么惊讶，现在先过了我这关再说吧！让你们尝尝电与火的滋味吧！"],["我们不怕你！伙伴们一起上！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                     {
                        NpcDialog.show(NPC.KALUOTELI,["是你！你不是第四领域的守护将领吗？怎么突然出现在这里！难道你不知道这里是0xff0000里奥杰斯大人0xffffff的领域吗？"],["哼，看样子你想与我为敌！"],[function():void
                        {
                           NpcDialog.show(NPC.KALUOTELI,["不试试怎么知道谁的实力更强呢？虽然你拥有天使与恶魔的双重能力，但是别忘记这里可是0xff0000火焰山脊0xffffff！"],["接招吧！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1156_3"),function():void
                              {
                                 taskMC.gotoAndStop(9);
                                 NpcDialog.show(NPC.SHENMI_HEIYING,["伙伴们，看来你们的实力要比我想象的厉害，既然已经抵达了第三领域，看来我们很快就能再见面了，记得带上迈尔斯！"],["第四领域再见！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.YUMINA,["这家伙是谁？实力远在我们之上，看来第四领域一定会有一番恶战！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,["尤米娜，现在只有靠你了，只有你能感化尤尼卡，再加上迈尔斯和我们的实力，才能与他抗衡！"],["哥哥，你究竟在哪里！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.YUMINA,["什么！哥哥，真的是你吗？我找的你好辛苦啊！"],["哼，我才不是你哥哥！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.SAIXIAOXI,["尤米娜，你哥哥终于出现了，好好把握这次机会啊！"],["恩，我会尽力的！"],[function():void
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
                                       });
                                    });
                                 }]);
                              });
                           }]);
                        }]);
                     });
                  }]);
               }]);
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(11);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1156_4"),function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["哇！那不是里奥斯吗？怎么会成为尤尼卡的坐骑呢？这不可能，绝对不可能！"],["里奥斯？？？"],[function():void
            {
               NpcDialog.show(NPC.YOUNIKA,["你们给我看清楚，这可不是一般的火鹿，它叫里奥杰斯，被誉为火鹿王的称号！"],["什么！火鹿王！"],[function():void
               {
                  NpcDialog.show(NPC.YOUNIKA,["没错，它就是恶魔星第三领域的将领，这下让你们开眼界了吧！它也是我最好的朋友！"],["你的朋友！！"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("task1156_0"),function():void
                     {
                        NpcDialog.show(NPC.YOUNIKA,["所以里奥杰斯和我是合为一体的，它是我唯一可以信任的伙伴！"],["哥哥，难道你不信任我吗？"],[function():void
                        {
                           NpcDialog.show(NPC.YOUNIKA,["我不是说了嘛！你不是我的妹妹，我也不是你的哥哥！咱们还是划清界限的好！"],["为什么你会变成这样！"],[function():void
                           {
                              NpcDialog.show(NPC.YUMINA,["原来的你去哪里了！现在我们遇到最大的敌人就是拥有天使与恶魔双重力量的黑影精灵，你就不能出手相助吗？"],["什么，又是他！"],[function():void
                              {
                                 AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.YUMINA,["不不...我的朋友只想救回他们的精灵伙伴，绝对不是利用你！"],["少废话！"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.YOUNIKA,["你们死了这条心吧！我是不会帮助你们的，我是魔圣，这里是我的天下！想救你们的朋友，有本事就自己去吧！"],["火鹿王，我们走！"],[function():void
                                          {
                                             NpcDialog.show(NPC.YUMINA,["哥哥，是你逼我的！那我现在就告诉你，如果我不能成功把你带回米娜村落，我是不会离开这里的！"],["哼，那就等着被我击败吧！"],[function():void
                                             {
                                                NpcDialog.show(NPC.YOUNIKA,["你们是不可能通过第四领域的，在那里你们会感受到极乐世界和无限地狱的双重体验！"],["好好享受吧！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.YUMINA,["哥哥，我是不会放弃你的！"],["赛尔，咱们后会有期！"],[function():void
                                                      {
                                                         AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                                                         {
                                                            TasksManager.complete(TASK_ID,3,function(param1:Boolean = true):void
                                                            {
                                                               if(param1)
                                                               {
                                                                  initStep4();
                                                               }
                                                               else
                                                               {
                                                                  destroy();
                                                               }
                                                            });
                                                         });
                                                      }]);
                                                   });
                                                }]);
                                             }]);
                                          }]);
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
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(15);
         NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，我们也跟上！！！米咔就在我们眼前！"],["等等！小息！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["小息，难道你忘记那个黑影要我们带迈尔斯一起去第四领域吗？否则米咔一样会有危险的！"],["那可怎么办！"],[function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["看来我们只有去幻影星走一趟了，希望我们的诚心能够打动迈尔斯！"],["恩恩，事不宜迟，我们现在就去！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
                  {
                     NpcDialog.show(NPC.SEER,["你快走吧！卡璐璐，这里有我呢！快去和赛小息他们会合吧！"],null,null,false,function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["恶魔星第四领域，米咔你放心，我们一定会从天使与恶魔的化身手中把你营救出来的！"],["我发誓！"],[function():void
                           {
                              TasksManager.complete(TASK_ID,4,function(param1:Boolean = true):void
                              {
                                 destroy();
                              });
                           }]);
                        });
                     });
                  });
               }]);
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 753 && Boolean(_map.conLevel["task1156MC"]))
         {
            return _map.conLevel["task1156MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 753)
         {
            KTool.showMapAllPlayerAndMonster();
            _map.conLevel["sptBoss"].visible = true;
            if(_map.depthLevel["shenShouNpc"])
            {
               _map.depthLevel["shenShouNpc"].visible = true;
            }
            if(taskMC)
            {
               taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
               DisplayUtil.removeForParent(taskMC);
            }
            _map = null;
         }
      }
   }
}
