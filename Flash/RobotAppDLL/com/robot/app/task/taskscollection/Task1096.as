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
   
   public class Task1096
   {
      
      public static const TASK_ID:uint = 1096;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1096()
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
      
      public static function initTaskForMap738(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  if(task1097MC != null)
                  {
                     task1097MC.visible = false;
                  }
                  bossMC.visible = false;
                  taskMC.buttonMode = true;
                  taskMC.addEventListener(MouseEvent.CLICK,initStep1);
               }
               else if(Boolean(param1[1]) && !param1[2])
               {
                  if(task1097MC != null)
                  {
                     task1097MC.visible = false;
                  }
                  bossMC.visible = false;
                  KTool.hideMapAllPlayerAndMonster();
                  initStep2();
               }
               else if(Boolean(param1[2]) && !param1[3])
               {
                  if(task1097MC != null)
                  {
                     task1097MC.visible = false;
                  }
                  bossMC.visible = false;
                  KTool.hideMapAllPlayerAndMonster();
                  initStep3();
               }
               else if(Boolean(param1[3]) && !param1[4])
               {
                  if(task1097MC != null)
                  {
                     task1097MC.visible = false;
                  }
                  bossMC.visible = false;
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
         taskMC.gotoAndStop(2);
         taskMC.removeEventListener(MouseEvent.CLICK,initStep1);
         taskMC.buttonMode = false;
         KTool.hideMapAllPlayerAndMonster();
         NpcDialog.show(NPC.SEER,["队长，可找到你们了！有什么新发现吗？"],["快看看周围的环境！"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["据我们所知，这里很有可能是迈尔斯领地！你看那个山洞，里面一定可以找到一些线索！"],["恩恩，那我们继续前进吧！"],[function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.KELUNMANER,["又是你们这些机器人，上次的教训还不够吗？"],["什么，难道还有谁来过这里？"],[function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["不...我想您误会了，我们是来守护幻影星不被海盗集团所侵略，我们是正义的赛尔!"],["哼哼！怎么，这次换借口了？"],[function():void
                     {
                        NpcDialog.show(NPC.KELUNMANER,["我可不管你们是谁，你们来到幻影星一定另有企图，受死吧！"],["我们不想和你交手！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                           {
                              NpcDialog.show(NPC.KELUNMANER,["什么！是蒙塔少主，您怎么出来了！这里很危险，您还是回到里面去吧！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.MENGTA,["克伦曼尔，退下！看上去他们不像坏人，还是先问清楚再说吧！别动不动就打打杀杀的！"],["你们是谁？为何来到这里！"],[function():void
                                 {
                                    NpcDialog.show(NPC.KALULU,["好可爱的精灵啊！我们是赛尔，维护宇宙和平是我们的责任，这次来幻影星的目的是为了抵抗海盗集团的诡计！"],["海盗集团？？"],[function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.MENGTA,["哇！居然能抵御克伦曼尔的攻击，看上去一定不简单，个子虽小，实力不俗啊！"],["它究竟是谁？"],[function():void
                                          {
                                             NpcDialog.show(NPC.SAIXIAOXI,["那当然，米咔可是我最好的伙伴，它的本事可大了！"],["米咔？？"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                                {
                                                   NpcDialog.show(NPC.MENGTA,["米咔，我可以和你成为伙伴吗？在这里我连一个朋友都没有！"],["米咔...米咔！"],[function():void
                                                   {
                                                      NpcDialog.show(NPC.SAIXIAOXI,["哈哈，米咔同意了，太好了！蒙塔和米咔成为好朋友，我们离成功又进了一步！"],null,null,false,function():void
                                                      {
                                                         NpcDialog.show(NPC.KELUNMANER,["少主，你不能这样，如果被你父亲知道，他一定会很生气的！"],["我不管，这是我的选择！"],[function():void
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
                                          }]);
                                       });
                                    }]);
                                 }]);
                              });
                           });
                        }]);
                     }]);
                  }]);
               });
            }]);
         }]);
      }
      
      private static function initStep2() : void
      {
         taskMC.gotoAndStop(6);
         AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
         {
            NpcDialog.show(NPC.MAIERSI,["上次难道没有告诉你们，不要踏入幻影星吗！竟然无视我的忠告，看样子这次该让你们尝尝苦头了！"],["不，父亲，他们是我的朋友！"],[function():void
            {
               NpcDialog.show(NPC.MAIERSI,["朋友？？哼哼，我们0xff0000圣灵一族0xffffff是宇宙中最瞩目的焦点，我们不需要朋友！"],["快回去！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                  {
                     NpcDialog.show(NPC.SAIXIAOXI,["可恶的海盗，你们又想动什么坏脑筋！我们不会让你们伤害迈尔斯的！"],["我们志在必夺！"],[function():void
                     {
                        NpcDialog.show(NPC.MAIERSI,["又来了一群无用的对手，你们以为幻影星是你们来去自由的地方吗？克伦曼尔，干掉他们！"],["是，主人！"],[function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,8,"mc",function():void
                           {
                              NpcDialog.show(NPC.MAIERSI,["克伦曼尔，你做什么！你知道自己在干什么吗？快干掉他们！！"],["无声的回应！"],[function():void
                              {
                                 NpcDialog.show(NPC.BITEDAREN,["哈哈哈，没想到吧！别以为我们海盗每次都是失败收场！"],["怎么会这样"],[function():void
                                 {
                                    CartoonManager.play(ClientConfig.getFullMovie("task1096_0"),function():void
                                    {
                                       NpcDialog.show(NPC.ZOG,["比特大人，您这招真是高啊！不愧为海盗集团中最聪明最帅气的领袖，这次咱们赢啦！"],["喂，你们未必想的太好了吧！"],[function():void
                                       {
                                          NpcDialog.show(NPC.ATIEDA,["臭海盗，难道你们忘记我们了吗！0xff0000海盗克星—赛尔探险小队0xffffff，有我们在，事情就没你们想的这么简单了！"],["是吗？那我们就是试试看吧！"],[function():void
                                          {
                                             AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1096_3"),function():void
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
                                    });
                                 }]);
                              }]);
                           });
                        }]);
                     }]);
                  });
               }]);
            }]);
         });
      }
      
      private static function initStep3() : void
      {
         taskMC.gotoAndStop(9);
         NpcDialog.show(NPC.LEIYI,["海盗集团，就知道你们一定不会轻易放弃迈尔斯的，只要有我雷伊在，你们休想得逞！"],["呵呵，是吗？"],[function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["雷神，您来的太及时了，让我们一起联手，彻底击败海盗集团吧！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.BITEDAREN,["哼哼，别大言不惭了，这就让你们看看我的实力吧！"],["出战吧！萨格拉斯！"],[function():void
               {
                  AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["看来局势变得原来越混乱了，这时最需要的就是大家团结的力量！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.MAIERSI,["不行，我一定要快速解决这场战斗，绝不能让他们带走蒙塔！看来是该爆发的时候了！"],["海盗，接受神的审判吧！"],[function():void
                        {
                           NpcDialog.show(NPC.LEIYI,["小息，保护蒙塔的任务就交给你了，萨格拉斯让我来对付！"],["恩，放心吧！雷神！"],[function():void
                           {
                              AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_1096_4"),function():void
                              {
                                 taskMC.gotoAndStop(10);
                                 NpcDialog.show(NPC.BITEDAREN,["哈哈哈，迈尔斯这下终于抓到你了，乖乖和我们回海盗基地吧！今后为海盗效力才是你唯一的出路！"],["我们走！"],[function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,10,"mc",function():void
                                    {
                                       NpcDialog.show(NPC.MENGTA,["雷神！你一定要想办法救救我的父亲，求你了！"],["放心吧！孩子，我一定会拯救迈尔斯的！"],[function():void
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
                                       }]);
                                    });
                                 }]);
                              });
                           }]);
                        }]);
                     });
                  });
               }]);
            });
         }]);
      }
      
      private static function initStep4() : void
      {
         taskMC.gotoAndStop(11);
         NpcDialog.show(NPC.LEIYI,["小息，你记得保护蒙塔的安全，不得有误！我现在就去追赶海盗集团，你们等我的指示！"],["好的，雷神！"],[function():void
         {
            AnimateManager.playMcAnimate(taskMC,11,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["队长，把这个任务交给我吧！这里太危险了，你快带蒙塔回赛尔号，船长和博士一定会有办法的！"],["你一个人在这里太危险了！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["没事啦！我已经不是小孩子了，放心去吧！我马上就会回来的！"],["好吧！那你自己多加小心！"],[function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,12,"mc",function():void
                     {
                        NpcDialog.show(NPC.SEER,["克伦曼尔，现在就剩我们了，开始吧！我一定会战胜你的！"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,13,"mc",function():void
                           {
                              NpcDialog.show(NPC.SEER,["看来仅仅靠我一个人的力量是无法和克伦曼尔抗衡的！哼哼，我有办法了！我现在就去组队，到时候带着我的战友一起来战胜你！"],["新的征途开始了！"],[function():void
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
            });
         }]);
      }
      
      private static function get taskMC() : MovieClip
      {
         if(MapManager.currentMap.id == 738 && _map.conLevel["task1096MC"] != null)
         {
            return _map.conLevel["task1096MC"];
         }
         return null;
      }
      
      private static function get bossMC() : MovieClip
      {
         if(MapManager.currentMap.id == 738 && _map.depthLevel["sptBoss"] != null)
         {
            return _map.depthLevel["sptBoss"];
         }
         return null;
      }
      
      private static function get task1097MC() : MovieClip
      {
         if(MapManager.currentMap.id == 738 && _map.conLevel["taskmc2"] != null)
         {
            return _map.conLevel["taskmc2"];
         }
         return null;
      }
      
      public static function destroy() : void
      {
         if(!_map)
         {
            return;
         }
         bossMC.visible = true;
         if(task1097MC != null)
         {
            task1097MC.visible = true;
         }
         if(MapManager.currentMap.id == 738)
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
