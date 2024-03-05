package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_972;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class Task972
   {
      
      private static var _map:BaseMapProcess;
      
      private static var crtStep:int;
       
      
      public function Task972()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         KTool.hideMapAllPlayerAndMonster();
         mainMC.buttonMode = true;
         _map.conLevel["sptBoss"].visible = false;
         if(TasksManager.getTaskStatus(TaskController_972.TASK_ID) == TasksManager.COMPLETE)
         {
            destroy();
            return;
         }
         TasksManager.getProStatusList(TaskController_972.TASK_ID,function(param1:Array):void
         {
            mainMC.addEventListener(MouseEvent.CLICK,onMCClicked);
            if(Boolean(param1[0]) && !param1[1])
            {
               initStep1();
            }
            else if(Boolean(param1[1]) && !param1[2])
            {
               initStep2();
            }
            else if(Boolean(param1[2]) && !param1[3])
            {
               initStep3();
            }
            else if(param1[3] && !param1[4] && TasksManager.getTaskStatus(TaskController_972.TASK_ID) == TasksManager.ALR_ACCEPT)
            {
               initStep4();
            }
            else
            {
               destroy();
            }
         });
      }
      
      private static function initStep1() : void
      {
         mainMC.gotoAndStop(1);
         crtStep = 1;
      }
      
      private static function initStep2(param1:Boolean = false) : void
      {
         mainMC.gotoAndStop(6);
         crtStep = 2;
         if(param1)
         {
            onMCClicked(null);
         }
      }
      
      private static function initStep3(param1:Boolean = false) : void
      {
         mainMC.gotoAndStop(9);
         crtStep = 3;
         if(param1)
         {
            onMCClicked(null);
         }
      }
      
      private static function initStep4(param1:Boolean = false) : void
      {
         mainMC.gotoAndStop(14);
         crtStep = 4;
         if(param1)
         {
            onMCClicked(null);
         }
      }
      
      private static function onMCClicked(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(crtStep)
         {
            case 1:
               NpcDialog.show(NPC.SAIXIAOXI,["哇，这里难道就是帕罗狄亚所说的新星球，但是好奇怪啊！为什么这里会没有任何守卫呢？"],["难道我们去错了星球？"],[function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["不可能，我已经感受到了一股强大的杀气，不会错的，就是这里！"],["恩恩，先看看再说！"],[function():void
                  {
                     AnimateManager.playMcAnimate(mainMC,2,"mc",function():void
                     {
                        NpcDialog.show(NPC.KALULU,["不好，一定是邪恶四灵的其他成员，如果就这么遇上了，我们不一定有把握可以战胜它们！"],["别急，让我想想！"],[function():void
                        {
                           AnimateManager.playMcAnimate(mainMC,3,"mc",function():void
                           {
                              NpcDialog.show(NPC.XIAOBU,["大家千万别发出声音，屏住呼吸！接下来让我们看看邪恶四灵会有哪些诡计吧！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(mainMC,4,"mc",function():void
                                 {
                                    NpcDialog.show(NPC.PALUODIYA,["哼，你这个蠢货，早知道当时我就不该救你！现在可好，叫我如何向其他灵王交代！！！"],["我…"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(mainMC,5,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.HEIYING_111117,["帕罗狄亚，你最好别告诉我，计划失败了，否则你知道后果！"],["都怪鲁迪诺斯，都是它的错！"],[function():void
                                          {
                                             NpcDialog.show(NPC.HEIYING_111117,["那你还有脸回来？？你不是说不会重蹈阿洛比斯的覆辙吗？还是你也想背叛我们！！快说！！！"],["不不不，我怎么可能背叛组织呢？"],[function():void
                                             {
                                                NpcDialog.show(NPC.PALUODIYA,["各位灵王，再给我次机会吧！巨石灵王没有死，我一定可以将功补过的，我这就去替邪恶四灵清理门户！"],["哼哼，晚了…"],[function():void
                                                {
                                                   mainMC.gotoAndStop(6);
                                                   AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_972_2"),function():void
                                                   {
                                                      NpcDialog.show(NPC.PALUODIYA,["龙族！！！我一定要将你们全部赶尽杀绝，龙族的身份对我来说就是种侮辱！！！"],["什么，它是龙族？？？？"],[function():void
                                                      {
                                                         NpcDialog.show(NPC.PALUODIYA,["是谁！快给我滚出来，否则我就要大开杀戒了！"],null,null,false,function():void
                                                         {
                                                            TasksManager.complete(TaskController_972.TASK_ID,1,function(param1:Boolean):void
                                                            {
                                                               if(param1)
                                                               {
                                                                  initStep2(true);
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
                              });
                           });
                        }]);
                     });
                  }]);
               }]);
               break;
            case 2:
               AnimateManager.playMcAnimate(mainMC,6,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["就连当时野心勃勃的巨石灵王都已经改邪归正了，你还在这里坚持什么呢？"],["别和我提它！"],[function():void
                  {
                     NpcDialog.show(NPC.PALUODIYA,["我和它不同，无论从计谋还是从实力，我都是四灵中的佼佼者，称霸宇宙的应该是我！"],["还有就是那些可恶的龙族！"],[function():void
                     {
                        NpcDialog.show(NPC.XIAOBU,["帕罗狄亚，为什么你如此讨厌龙族呢？难道你也有悲伤的过去？"],["过去？？简直就是噩梦！"],[function():void
                        {
                           CartoonManager.play(ClientConfig.getFullMovie("task_972_5"),function():void
                           {
                              NpcDialog.show(NPC.PALUODIYA,["这些令人痛苦的记忆已经深深的埋在我的心里，为什么当时不把我也一起干掉，为什么！！！！"],["这难道是真的？"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["什么？千年之前龙族之间的战争真的存在？怪不得你如此憎恨龙族！原来事出有因啊！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.KALULU,["事情还有待查证，也不能听你的一面之词！你先把鲁迪诺斯放了吧！它是无辜的！"],["无辜！哼哼，难道我就不无辜吗？"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(mainMC,7,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.ATIEDA,["住手，你这个大魔头，有本事就冲我们来，别拿鲁迪诺斯出气。再怎么说他也是鲁加斯一族的首领！"],["来吧！帕罗狄亚！"],[function():void
                                          {
                                             NpcDialog.show(NPC.PALUODIYA,["哼哼，不知天高地厚的小子，让你知道我的厉害，你们不是在寻找星辰之柱和七星天珠吗？"],["你想做什么？"],[function():void
                                             {
                                                NpcDialog.show(NPC.PALUODIYA,["现身吧！雾气石林的守护者0xff0000卡伦尼0xFFFFFF，是你吃点心的时候了，帮我干掉他们！！"],["什么？？守护者，难道这里有！"],[function():void
                                                {
                                                   AnimateManager.playMcAnimate(mainMC,8,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.KALUNNI,["吵醒我的代价将会是死路一条，我答应过帕罗狄亚大人，不会让任何人活着离开这里，不想死的赶紧逃命去吧！！"],["呵呵，鲁迪诺斯好好看戏吧！"],[function():void
                                                      {
                                                         NpcDialog.show(NPC.ATIEDA,["想战胜我可不是件容易的事情哦！我可是赛尔号上最骁勇善战的的战士，吃我一刀吧！"],["斩月双刀！！！"],[function():void
                                                         {
                                                            TasksManager.complete(TaskController_972.TASK_ID,2,function(param1:Boolean):void
                                                            {
                                                               if(param1)
                                                               {
                                                                  initStep3(true);
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
                           });
                        }]);
                     }]);
                  }]);
               });
               break;
            case 3:
               AnimateManager.playMcAnimate(mainMC,9,"mc",function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["什么？居然可以将阿铁打变成石像，你究竟是什么怪物啊！"],["想活命的话，乖乖的给我滚出巴斯星！"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["竟敢如此嚣张，让你尝尝正义的力量！！！！赛尔、小布我们上…"],["终于再次联手了，太有感觉了！"],[function():void
                     {
                        AnimateManager.playMcAnimate(mainMC,10,"mc",function():void
                        {
                           NpcDialog.show(NPC.SAIXIAOXI,["卡璐璐、" + MainManager.actorInfo.formatNick + "！！可恶，我一定会想办法救你们的！"],["没用的，除非你能击败我！"],[function():void
                           {
                              NpcDialog.show(NPC.KALUNNI,["否则你的朋友将会被永远禁锢在我的山林石中，一直等到干枯为止！！啊哈哈哈！"],["鲁迪诺斯，快帮忙啊！"],[function():void
                              {
                                 NpcDialog.show(NPC.PALUODIYA,["真是些残兵败柳，都要沦落到叫外援了吗？不过我不会让你有这个机会的！"],["鲁迪诺斯，接受我的惩罚吧！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(mainMC,11,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.PALUODIYA,["鲁迪诺斯，现在你的实力已经得到大大的提升，相信你现在可以更好为我出力了，干掉这些没用的家伙！"],["遵命，主人！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(mainMC,12,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["等等！鲁迪诺斯，我是他们的队长，要报仇就先找我吧！"],["有意思，哈哈！"],[function():void
                                             {
                                                NpcDialog.show(NPC.PALUODIYA,["卡伦尼你先退下吧！相信现在的鲁迪诺斯已经完全可以掌控局面了，在加上我的帮助，今天一定可以完成任务！"],["小子，算你们走运！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.KALUNNI,["记住我说的话，下次一定要击败我，否则你休想从这里通过，不过我知道一定没有下次这个说法，哈哈哈！"],null,null,false,function():void
                                                   {
                                                      AnimateManager.playMcAnimate(mainMC,13,"mc",function():void
                                                      {
                                                         NpcDialog.show(NPC.XIAOBU,["快走，带着米咔走，你不是它的对手！！！！"],null,null,false,function():void
                                                         {
                                                            NpcDialog.show(NPC.SAIXIAOXI,["小布，你还撑得住吗？这次我们就让他们看看什么才叫战斗！！"],["帕罗狄亚，我要消灭你！"],[function():void
                                                            {
                                                               TasksManager.complete(TaskController_972.TASK_ID,3,function(param1:Boolean):void
                                                               {
                                                                  if(param1)
                                                                  {
                                                                     initStep4(true);
                                                                  }
                                                               });
                                                            }]);
                                                         });
                                                      });
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
                     }]);
                  }]);
               });
               break;
            case 4:
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_972_3"),function():void
               {
                  NpcDialog.show(NPC.PALUODIYA,["太小看你们了，不过别高兴的太早，小布你应该知道你已经不能再进化了，否则你的生命就会受到威胁！"],["什么？不能进化！"],[function():void
                  {
                     NpcDialog.show(NPC.XIAOBU,["小息，没事啦！别听这家伙乱说，我状态好的很！"],["真的吗？你别瞒我啊！"],[function():void
                     {
                        NpcDialog.show(NPC.PALUODIYA,["是吗？那下次我们见面的时候就看你表现了，别忘记龙族之心还在我手上，尽早来拿哦！"],["鲁迪诺斯我们走！"],[function():void
                        {
                           AnimateManager.playMcAnimate(mainMC,14,"mc",function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["那是什么，怎么闪闪发亮！！！"],["依我看一定是天珠！！"],[function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["真的吗？太棒了，这可是第三颗啊！我要好好收藏起来，没想到帕罗狄亚竟然会如此大意，呵呵！"],["快看那些石像！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(mainMC,15,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.XIAOBU,["伙伴们，我们时间不多，前面的挑战正在等待着我们，麒麟王也在等待着我们！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.SAIXIAOXI,["恩恩，我这就回去查清楚，千年之前龙族大战的事情，我不相信龙族会有这样的事情发生！小布，我们马上就会来找你的！"],["恩恩，伙伴们我等着！"],[function():void
                                          {
                                             AnimateManager.playMcAnimate(mainMC,16,"mc",function():void
                                             {
                                                MainManager.selfVisible = true;
                                                NpcDialog.show(NPC.SEER,["看来我也应该去好好修炼一下，今后我也要变的更强，这样才能跟上小布和赛小息他们的步伐！"],["胜利一定属于我们！"],[function():void
                                                {
                                                   TasksManager.complete(TaskController_972.TASK_ID,4,function(param1:Boolean):void
                                                   {
                                                      if(param1)
                                                      {
                                                         destroy();
                                                      }
                                                   });
                                                }]);
                                             });
                                          }]);
                                       });
                                    });
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  }]);
               });
         }
      }
      
      private static function get mainMC() : MovieClip
      {
         return _map.conLevel["task972mc"];
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         KTool.showMapAllPlayerAndMonster();
         mainMC.removeEventListener(MouseEvent.CLICK,onMCClicked);
         DisplayUtil.removeForParent(mainMC);
         _map.conLevel["sptBoss"].visible = true;
         _map = null;
      }
   }
}
