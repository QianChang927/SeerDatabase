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
   
   public class Task1083
   {
      
      public static const TASK_ID:uint = 1083;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1083()
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
      
      public static function initTaskForMap736(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
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
         KTool.hideMapAllPlayerAndMonster();
         NpcDialog.show(NPC.SAIXIAOXI,["伙伴们，这就是传说中的幻影星，看上去很神秘的样子，大家还是小心为妙！"],["恩恩，我们会小心的！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
            {
               NpcDialog.show(NPC.SAIXIAOXI,["大家注意，海盗来了！这些家伙一定是为了迈尔斯而来！船长果然英明！"],["又是这群没用的家伙！"],[function():void
               {
                  NpcDialog.show(NPC.ATIEDA,["上次让他们侥幸逃走了，这次可没这么容易了，我的斩月双刀已经很久没有出鞘了，哇哈哈！"],["卡璐璐，你放心，我会保护你的！"],[function():void
                  {
                     NpcDialog.show(NPC.KALULU,["哼！谁要你保护啊！就知道臭美，你别忘记，赛小息才是我们的队长！"],["又是赛小息！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
                        {
                           NpcDialog.show(NPC.ALLISON,["大哥，为什么每次我们出糗的时候，赛尔他们总会出现呢？我们也太倒霉了吧！"],["哈哈，这就叫冤家路窄！"],[function():void
                           {
                              NpcDialog.show(NPC.ZOG,["哼！这并不重要，只要我们这次能找到迈尔斯，比特大人一定会嘉奖我们的！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.SAIXIAOXI,["别做梦了!有我们在，你们休想胡作非为，趁早离开这里吧！省的受皮肉之苦！"],["这倒未必哦！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.ZOG,["让你们看看我最新的帮手，现身吧！"],["？？"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                          {
                                             NpcDialog.show(NPC.ZOG,["你整天吃了睡，睡了吃，快给我干掉这些臭铁皮，否则今晚没有饭吃！"],["天呐！这可怎么行！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                                {
                                                   NpcDialog.show(NPC.ATIEDA,["小息，这家伙让我来对付！哈哈，正好让你试试我的双刀！"],["来吧！你个胖粽子！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                                      {
                                                         NpcDialog.show(NPC.ATIEDA,["哈哈，什么新帮手，还不是和你们一样笨，简直不堪一击！"],["什么！你竟然如此残忍！"],[function():void
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
                                                      });
                                                   }]);
                                                });
                                             }]);
                                          });
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
         }]);
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(7);
         NpcDialog.show(NPC.ZOG,["艾利逊，少和他们废话，先找迈尔斯再说！"],["看看谁先找到吧！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
            {
               NpcDialog.show(NPC.ALLISON,["大哥，那是什么！难道是迈尔斯发怒了？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["哈哈哈，迈尔斯要是真的出现了，第一步就是收拾你们这群海盗！"],["快看，那些能量！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                     {
                        NpcDialog.show(NPC.MAIERSI,["是你们唤醒了我吗？幻影星不是你们该来的地方，滚回你们的星球去！"],["哇！原来这就是迈尔斯！"],[function():void
                        {
                           NpcDialog.show(NPC.ZOG,["太好了，省的我们再苦苦寻找了，接下来就看我佐格的智慧吧！"],["佐格预谋中..."],[function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                              {
                                 NpcDialog.show(NPC.ZOG,["主人！在您闭关期间，我可一直在守护着您啊！不过，这些家伙的目的就是想侵略幻影星！！"],["佐格，你好卑鄙啊！"],[function():void
                                 {
                                    NpcDialog.show(NPC.SAIXIAOXI,["尊敬的迈尔斯，你可千万别相信他们啊！我们是来保护您和幻影星的，我叫赛小息！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.MAIERSI,["你们对于幻影星来说都是入侵者，然而对于入侵者只有一个结果，那就是灭亡！"],["不好，迈尔斯要爆发了！"],[function():void
                                       {
                                          AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1083_3"),function():void
                                          {
                                             taskMC.gotoAndStop(10);
                                             NpcDialog.show(NPC.ZOG,["可恶，什么时候不能出现，偏偏在这个时候！战神联盟，就算你们一起上也未必是迈尔斯的对手！"],["海盗，你们太天真了！"],[function():void
                                             {
                                                NpcDialog.show(NPC.MAIERSI,["果然有问题，居然还找帮手，那就一并把你们都解决了吧！"],["迈尔斯，快上！"],[function():void
                                                {
                                                   NpcDialog.show(NPC.MAIERSI,["嗯？你们竟敢命令我，不想活了吗？"],["不不不，我们不是这个意思！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
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
                     });
                  }]);
               });
            });
         }]);
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(11);
         NpcDialog.show(NPC.KAXIUSI_WHITE,["住手…迈尔斯！我们是战神联盟，我是守护怀特星的卡修斯！我们是来帮助你的！"],null,null,false,function():void
         {
            NpcDialog.show(NPC.GAIYA,["我是战斗大师，我叫盖亚！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BULAIKE_NEW,["还有我！守护格雷斯星的守护者布莱克！"],["战神联盟？好奇怪的名字！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["卡修斯，迈尔斯已经中了海盗的诡计，误认为我们才是入侵者！你们可要小心啊！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.BULAIKE_NEW,["什么！看来只有用实力证明一切了！"],["一起上吧！战神联盟！"],[function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1083_4"),function():void
                           {
                              AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                              {
                                 NpcDialog.show(NPC.LEIYI,["这股能量太惊人了，一点都不亚于谱尼的实力！如果再战下去，海盗就会得逞！"],["哈哈，战神联盟怕了吧！"],[function():void
                                 {
                                    NpcDialog.show(NPC.ZOG,["迈尔斯，跟我们回去吧！相信海盗集团是最适合你的地方，在那里你可以得到你想要的！"],["难道又开始命令我了吗？"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.MAIERSI,["快点离开这里，再让我在幻影星看到你们，下次就没这么走运了！"],["迈尔斯你..."],[function():void
                                          {
                                             AnimateManager.playMcAnimate(taskMC,14,"mc",function():void
                                             {
                                                NpcDialog.show(NPC.BULAIKE_NEW,["看来幻影星不是久留之地，我们还是先离开这里再说吧！迈尔斯的事情我们得从长计议！"],null,null,false,function():void
                                                {
                                                   NpcDialog.show(NPC.LEIYI,["恩恩，不错！不过还好，起码目前来说没有谁可以威胁到迈尔斯和幻影星，不过那家伙果然很强！"],["这我们就放心了！"],[function():void
                                                   {
                                                      AnimateManager.playMcAnimate(taskMC,15,"mc",function():void
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
                                             });
                                          }]);
                                       });
                                    }]);
                                 }]);
                              });
                           });
                        }]);
                     });
                  });
               }]);
            });
         });
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(16);
         NpcDialog.show(NPC.SAIXIAOXI,["虽然迈尔斯赶走了海盗，但是我们怎么能让迈尔斯明白我们的立场呢？"],["真是头疼！"],[function():void
         {
            NpcDialog.show(NPC.KALULU,["没关系，相信我们可以用诚意打动迈尔斯！今后幻影星一定会成为海盗集团的首要目标！"],["恩恩，没错！"],[function():void
            {
               NpcDialog.show(NPC.KALULU,["只要我们多关注幻影星的动态，我想对我们是有帮助的！"],["卡璐璐说的没错！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,16,"mc",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["好，那你可要小心，要密切关注这里的一切，有任何消息，记得回赛尔号通知我们！"],["放心吧！我有分寸的！"],[function():void
                     {
                        AnimateManager.playMcAnimate(taskMC,17,"mc",function():void
                        {
                           NpcDialog.show(NPC.SEER,["幻影星与迈尔斯的争夺战现在才真正开始，我们和海盗集团之间谁才能笑到最后呢？"],null,null,false,function():void
                           {
                              CartoonManager.play(ClientConfig.getFullMovie("task1083_0"),function():void
                              {
                                 NpcDialog.show(NPC.SEER,["各位小赛尔，行动起来吧！保卫幻影星，保卫迈尔斯，实现我们的誓言，将战斗进行到底！"],["我们是最强的！"],[function():void
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
                  });
               }]);
            }]);
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 736 && _map.conLevel["task1083MC"] != null)
         {
            return _map.conLevel["task1083MC"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         if(MapManager.currentMap.id == 736)
         {
            KTool.showMapAllPlayerAndMonster();
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
